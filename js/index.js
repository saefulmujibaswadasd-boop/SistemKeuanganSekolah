// ===== DATA AWAL =====
const transaksi = [
  {tanggal: "10/05/2026", deskripsi: "Iuran Gentong", nominal: 800000, kategori: "Gentong", pengguna: "Amal", kelas: "4A"},
  {tanggal: "20/05/2026", deskripsi: "Pembelian Peralatan", nominal: -500000, kategori: "Dapur", pengguna: "Gentong", kelas: "4A"},
  {tanggal: "22/05/2026", deskripsi: "Sumbangan Amal", nominal: 300000, kategori: "Amal", pengguna: "Gentong", kelas: "5B"}
];

let totalPemasukan = 0, totalPengeluaran = 0, saldo = 0;
let kategoriAktif = "";
let kelasAktif = "";

// Putar suara sapaan saat halaman login ditampilkan
window.onload = function() {
  const speech = new SpeechSynthesisUtterance(
    "Selamat datang di Sistem Keuangan SD Negeri Wonokerto"
  );
  speech.lang = "id-ID";   // Bahasa Indonesia
  speech.rate = 0.8;       // Lebih pelan (default 1, makin kecil makin lambat)
  speech.pitch = 1;        // Nada normal
  window.speechSynthesis.speak(speech);
};

// ===== LOGIN =====
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "12345") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    updateRingkasan();
    tampilkanTransaksi();   // gunakan fungsi filter
    buatChart();
  } else {
    document.getElementById("loginError").classList.remove("hidden");
  }
}

// ===== FILTER =====
function filterKategori(kat) {
  kategoriAktif = kat;
  tampilkanTransaksi();
}

function filterByKelas() {
  kelasAktif = document.getElementById("kelasFilter").value;
  tampilkanTransaksi();
}

// ===== TAMPILKAN TRANSAKSI =====
function tampilkanTransaksi() {
  const tbody = document.getElementById("tabelTransaksi");
  tbody.innerHTML = "";

  transaksi.forEach(t => {
    if (kategoriAktif && t.kategori !== kategoriAktif) return;
    if (kelasAktif) {
      const kelasNum = parseInt(t.kelas);
      if (kelasNum != kelasAktif) return;
    }

    let row = `<tr>
      <td class="border px-2">${t.tanggal}</td>
      <td class="border px-2">${t.deskripsi}</td>
      <td class="border px-2">Rp ${t.nominal.toLocaleString()}</td>
      <td class="border px-2">${t.kategori}</td>
      <td class="border px-2">${t.pengguna}</td>
      <td class="border px-2">${t.kelas}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// ===== RINGKASAN =====
function updateRingkasan() {
  totalPemasukan = transaksi.filter(t => t.nominal > 0).reduce((a,b)=>a+b.nominal,0);
  totalPengeluaran = transaksi.filter(t => t.nominal < 0).reduce((a,b)=>a+b.nominal,0);
  saldo = totalPemasukan + totalPengeluaran;

  document.getElementById("pemasukan").innerText = "Rp " + totalPemasukan.toLocaleString();
  document.getElementById("pengeluaran").innerText = "Rp " + Math.abs(totalPengeluaran).toLocaleString();
  document.getElementById("saldo").innerText = "Rp " + saldo.toLocaleString();
  document.getElementById("transaksi").innerText = transaksi.length;
}

// ===== CHART =====
function buatChart() {
  const ctxBar = document.getElementById('barChart');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Jan 2021','Jun 2034','Apr 2022'],
      datasets: [
        {label: 'Pemasukan', data: [5000000, 4000000, 3500000], backgroundColor: 'blue'},
        {label: 'Pengeluaran', data: [2000000, 3000000, 2200000], backgroundColor: 'red'}
      ]
    }
  });

  const ctxPie = document.getElementById('pieChart');
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Gentong','Dapur','MBG','Amal','LKS'],
      datasets: [{
        data: [40,20,15,15,10],
        backgroundColor: ['blue','red','orange','purple','darkblue']
      }]
    }
  });
}

// ===== FORM =====
function showForm() {
  document.getElementById("formTransaksi").classList.remove("hidden");
}
function closeForm() {
  document.getElementById("formTransaksi").classList.add("hidden");
}
function simpanTransaksi() {
  const tgl = document.getElementById("tanggal").value;
  const desk = document.getElementById("deskripsi").value;
  const nominal = parseInt(document.getElementById("nominal").value);
  const kategori = document.getElementById("kategori").value;
  const pengguna = document.getElementById("pengguna").value;
  const kelas = document.getElementById("kelas").value;

  transaksi.push({tanggal: tgl, deskripsi: desk, nominal: nominal, kategori: kategori, pengguna: pengguna, kelas: kelas});

  tampilkanTransaksi();   // gunakan filter
  updateRingkasan();
  closeForm();
}

// ===== PDF =====
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const img = new Image();
  img.src = "assets/logo.png";

  img.onload = function() {
    doc.addImage(img, "PNG", 10, 10, 30, 30);
    doc.setFontSize(16);
    doc.text("Laporan Keuangan SD NEGERI WONOKERTO", 50, 25);

    doc.setFontSize(12);
    doc.text("Total Pemasukan: Rp " + totalPemasukan.toLocaleString(), 20, 60);
    doc.text("Total Pengeluaran: Rp " + Math.abs(totalPengeluaran).toLocaleString(), 20, 70);
    doc.text("Saldo Saat Ini: Rp " + saldo.toLocaleString(), 20, 80);
    doc.text("Jumlah Transaksi: " + transaksi.length, 20, 90);

    const barCanvas = document.getElementById("barChart");
    const barImg = barCanvas.toDataURL("image/png", 1.0);
    doc.addImage(barImg, "PNG", 20, 100, 80, 60);

    const pieCanvas = document.getElementById("pieChart");
    const pieImg = pieCanvas.toDataURL("image/png", 1.0);
    doc.addImage(pieImg, "PNG", 120, 100, 80, 60);

    let startY = 170;
    doc.text("Daftar Transaksi:", 20, startY);
    startY += 10;

    transaksi.forEach((t, i) => {
      doc.text(
        `${i+1}. ${t.tanggal} | ${t.deskripsi} | Rp ${t.nominal.toLocaleString()} | ${t.kategori} | ${t.pengguna} | ${t.kelas}`,
        20,
        startY
      );
      startY += 10;
      if (startY > 250) {
        doc.addPage();
        startY = 20;
      }
    });

    let tanggal = new Date().toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
    doc.text("Wonosobo, " + tanggal, 140, 250);
    doc.text("Kepala Sekolah,", 140, 260);
    doc.text("(___________________)", 140, 280);
    doc.text("Nama Kepala Sekolah", 140, 290);

    doc.save("laporan_keuangan.pdf");
  };
}

// ===== PRINT =====
function printReport() {
  window.print();
}

// ===== Footer cetak tanggal =====
document.getElementById("tanggalCetak").innerText = new Date().toLocaleDateString("id-ID", {
  day: "numeric", month: "long", year: "numeric"
});
