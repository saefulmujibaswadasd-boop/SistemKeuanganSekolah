<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sistem Keuangan SD NEGERI WONOKERTO</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- jsPDF -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

  <!-- Print CSS -->
  <style>
    @media print {
      button, header { display: none !important; }
      body { margin: 20px; background: white !important; }
      table { border-collapse: collapse; width: 100%; }
      table, th, td { border: 1px solid black; }
      th, td { padding: 6px; text-align: left; }
      canvas { max-width: 100% !important; height: auto !important; }
      .print-footer { margin-top: 40px; text-align: right; }
    }
    .judul-instansi {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      margin: 4px 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    }
    .alamat {
      font-size: 0.9rem;
      text-align: center;
      margin-top: 6px;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
    }
    .judul-sapaan {
      font-size: 1.6rem;
      font-weight: bold;
      color: #1e40af;
      text-align: center;
      width: 100%;
      padding: 20px;
      background: linear-gradient(to right, #93c5fd, #bfdbfe);
      border-radius: 12px;
      margin-bottom: 25px;
      text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
      animation: fadeIn 2s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-15px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body class="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">

  <!-- Halaman Login -->
<section id="loginPage" class="h-screen flex flex-col items-center justify-center bg-opacity-90">
  
  <!-- Logo + Judul Instansi -->
  <div class="flex flex-col items-center mb-6 text-white">
    <div class="flex gap-6 mb-4">
      <img src="assets/logo_sekolah.png" alt="Logo Sekolah" class="w-24 h-24">
      <img src="assets/logo_pemkab.png" alt="Logo Pemkab" class="w-24 h-24">
    </div>
    <h2 class="judul-instansi">PEMERINTAH KABUPATEN WONOSOBO</h2>
    <h3 class="judul-instansi">DINAS PENDIDIKAN PEMUDA DAN OLAHRAGA</h3>
    <h3 class="judul-instansi">SD NEGERI WONOKERTO</h3>
    <p class="alamat">Jl. Sukoharjo Km 03 Desa Wonokerto Kecamatan Leksono Kode Pos 56362</p>
  </div>

  <!-- Halaman Login -->
<section id="loginPage" class="h-screen flex flex-col items-center justify-center bg-opacity-90">

  <!-- Kop Instansi -->
  <div class="flex items-center justify-between w-full px-12 mb-6 text-white">
    <!-- Logo Sekolah kiri -->
    <img src="assets/logo_sekolah.png" alt="Logo Sekolah" class="w-24 h-24">

    <!-- Judul Sistem di tengah -->
    <div class="text-center">
      <h2 class="font-bold text-lg">PEMERINTAH KABUPATEN WONOSOBO</h2>
      <h3 class="font-bold text-md">DINAS PENDIDIKAN PEMUDA DAN OLAHRAGA</h3>
      <h3 class="font-bold text-md">SD NEGERI WONOKERTO</h3>
      <p class="text-sm">Jl. Sukoharjo Km 03 Desa Wonokerto Kecamatan Leksono Kode Pos 56362</p>
      <h2 class="mt-2 font-bold text-xl">
        SISTEM | KEUANGAN | SD NEGERI WONOKERTO | 2026
      </h2>
    </div>

    <!-- Logo Pemkab kanan -->
    <img src="assets/logo_pemkab.png" alt="Logo Pemkab" class="w-24 h-24">
  </div>

  <!-- Form Login -->
  <div class="bg-white shadow-lg p-6 rounded w-96">
    <input id="username" type="text" placeholder="Username" class="w-full border p-2 mb-2 rounded">
    <input id="password" type="password" placeholder="Password" class="w-full border p-2 mb-4 rounded">
    <button onclick="login()" class="w-full bg-blue-600 text-white py-2 rounded">LOGIN</button>
    <p id="loginError" class="text-red-600 text-sm mt-2 hidden">Username/Password salah!</p>
  </div>
</section>

  <!-- Dashboard -->
  <section id="dashboard" class="hidden">
    <!-- Ringkasan Keuangan -->
    <section class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
      <div class="bg-white shadow p-4 text-center"><h2>Total Pemasukan</h2><p id="pemasukan" class="text-green-600 text-xl">Rp 0</p></div>
      <div class="bg-white shadow p-4 text-center"><h2>Total Pengeluaran</h2><p id="pengeluaran" class="text-red-600 text-xl">Rp 0</p></div>
      <div class="bg-white shadow p-4 text-center"><h2>Saldo Saat Ini</h2><p id="saldo" class="text-blue-600 text-xl">Rp 0</p></div>
      <div class="bg-white shadow p-4 text-center"><h2>Jumlah Transaksi</h2><p id="transaksi" class="text-gray-600 text-xl">0</p></div>
    </section>

    <!-- Kartu Ringkasan Dinamis -->
    <section id="kartuRingkasan" class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div class="bg-white shadow p-4 text-center"><h2 class="font-bold">Total Pemasukan</h2><p id="pemasukanKategori" class="text-green-600 text-xl">Rp 0</p></div>
      <div class="bg-white shadow p-4 text-center"><h2 class="font-bold">Total Pengeluaran</h2><p id="pengeluaranKategori" class="text-red-600 text-xl">Rp 0</p></div>
      <div class="bg-white shadow p-4 text-center"><h2 class="font-bold">Saldo Saat Ini</h2><p id="saldoKategori" class="text-blue-600 text-xl">Rp 0</p></div>
    </section>

    <!-- Tab Navigasi Transaksi -->
    <div class="flex gap-2 mb-4 px-6">
      <button onclick="filterKategori('Gentong')" class="bg-blue-500 text-white px-4 py-2 rounded">Gentong</button>
      <button onclick="filterKategori('Dapur')" class="bg-blue-500 text-white px-4 py-2 rounded">Dapur</button>
      <button onclick="filterKategori('MBG')" class="bg-blue-500 text-white px-4 py-2 rounded">MBG</button>
      <button onclick="filterKategori('Amal')" class="bg-blue-500 text-white px-4 py-2 rounded">Amal</button>
      <button onclick="filterKategori('LKS')" class="bg-blue-500 text-white px-4 py-2 rounded">LKS</button>
    </div>

    <!-- Filter kelas -->
    <div class="mb-4 px-6">
      <label for="kelasFilter">Filter Kelas:</label>
      <select id="kelasFilter" onchange="filterByKelas()" class="border p-2 rounded">
        <option value="">Semua</option>
        <option value="1">Kelas 1</option>
        <option value="2">Kelas 2</option>
        <option value="3">Kelas 3</option>
        <option value="4">Kelas 4</option>
        <option value="5">Kelas 5</option>
        <option value="6">Kelas 6</option>
      </select>
    </div>

   <!-- Tabel Transaksi -->
<section class="p-6">
  <div class="bg-white shadow p-4">
    <h2 class="font-bold mb-4">Daftar Transaksi</h2>
    <table class="table-auto w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-2">Tanggal</th>
          <th class="border px-2">Deskripsi</th>
          <th class="border px-2">Nominal</th>
          <th class="border px-2">Kategori</th>
          <th class="border px-2">Pengguna</th>
          <th class="border px-2">Kelas</th>
        </tr>
      </thead>
      <tbody id="tabelTransaksi"></tbody>
    </table>

    <!-- Tombol aksi -->
    <div class="mt-4 flex gap-2">
      <button onclick="showForm()" class="bg-green-500 text-white px-4 py-2 rounded">Tambah Transaksi</button>
      <button onclick="downloadPDF()" class="bg-red-500 text-white px-4 py-2 rounded">Download PDF</button>
      <button onclick="printReport()" class="bg-gray-500 text-white px-4 py-2 rounded">Print Laporan</button>
    </div>
  </div>
</section>

<!-- Form Tambah Transaksi -->
<div id="formTransaksi" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white p-6 rounded shadow-lg w-96">
    <h2 class="text-xl font-bold mb-4">Tambah Transaksi</h2>
    <input id="tanggal" type="date" class="w-full border p-2 mb-2 rounded">
    <input id="deskripsi" type="text" placeholder="Deskripsi" class="w-full border p-2 mb-2 rounded">
    <input id="nominal" type="number" placeholder="Nominal (Rp)" class="w-full border p-2 mb-2 rounded">
    <input id="kategori" type="text" placeholder="Kategori" class="w-full border p-2 mb-2 rounded">
    <input id="pengguna" type="text" placeholder="Pengguna" class="w-full border p-2 mb-2 rounded">
    <input id="kelas" type="text" placeholder="Kelas" class="w-full border p-2 mb-4 rounded">

    <div class="flex gap-2">
      <button onclick="simpanTransaksi()" class="bg-blue-600 text-white px-4 py-2 rounded">Simpan</button>
      <button onclick="closeForm()" class="bg-gray-500 text-white px-4 py-2 rounded">Batal</button>
    </div>
  </div>
</div>
