'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, FileText, Shield, AlertCircle, Users, Hammer, Scale, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="PT LEKOM MARAS" className="h-10 w-auto mr-3" />
                <div>
                  <h1 className="text-lg font-bold text-slate-900">PT LEKOM MARAS</h1>
                  <p className="text-xs text-slate-600">Mining Support Services</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-blue-600 font-semibold">Terms</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-blue-600 font-semibold">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-300 hover:text-white transition-colors mr-3">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Syarat dan Ketentuan Layanan PT LEKOM MARAS
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            
            {/* Introduction */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <FileText className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Pendahuluan</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Selamat datang di PT LEKOM MARAS. Syarat dan Ketentuan ini mengatur penggunaan 
                layanan penunjang pertambangan yang kami sediakan. Dengan menggunakan layanan kami, 
                Anda setuju untuk terikat oleh syarat dan ketentuan yang diuraikan di bawah ini.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                harap jangan menggunakan layanan kami.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <AlertCircle className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Definisi</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Dalam Syarat dan Ketentuan ini:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>"Perusahaan"</strong> merujuk pada PT LEKOM MARAS</li>
                <li><strong>"Klien"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</li>
                <li><strong>"Layanan"</strong> merujuk pada semua layanan penunjang pertambangan yang kami sediakan</li>
                <li><strong>"Situs Web"</strong> merujuk pada website resmi PT LEKOM MARAS</li>
                <li><strong>"Data Pribadi"</strong> merujuk pada informasi identifikasi pribadi yang dikumpulkan dari Klien</li>
              </ul>
            </div>

            {/* Service Description */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Hammer className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Deskripsi Layanan</h2>
              </div>
              <p className="text-slate-600 mb-4">
                PT LEKOM MARAS menyediakan layanan penunjang pertambangan meliputi:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Layanan logistik dan transportasi peralatan pertambangan</li>
                <li>Jasa penunjang operasional pertambangan</li>
                <li>Penyediaan tenaga kerja ahli di bidang pertambangan</li>
                <li>Konsultasi dan manajemen proyek pertambangan</li>
                <li>Layanan lainnya yang terkait dengan industri pertambangan</li>
              </ul>
            </div>

            {/* Client Obligations */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Kewajiban Klien</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Sebagai Klien, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Mematuhi semua peraturan keselamatan yang berlaku</li>
                <li>Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
                <li>Kooperatif dalam pelaksanaan proyek</li>
                <li>Memberikan akses yang diperlukan untuk pelaksanaan layanan</li>
                <li>Mematuhi hukum dan peraturan yang berlaku</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Scale className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Syarat Pembayaran</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Ketentuan pembayaran untuk layanan kami:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Pembayaran dilakukan sesuai dengan kesepakatan kontrak</li>
                <li>Metode pembayaran dapat dilakukan melalui transfer bank</li>
                <li>Pembayaran dianggap sah setelah dana diterima secara penuh</li>
                <li>Keterlambatan pembayaran dapat dikenakan denda</li>
                <li>Harga dapat berubah sesuai dengan kondisi pasar</li>
                <li>Biaya tambahan akan disepakati terlebih dahulu</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Batasan Tanggung Jawab</h2>
              </div>
              <p className="text-slate-600 mb-4">
                PT LEKOM MARAS tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Kerugian tidak langsung atau konsekuensial</li>
                <li>Keterlambatan yang disebabkan oleh force majeure</li>
                <li>Kerusakan akibat kelalaian pihak ketiga</li>
                <li>Kehilangan data atau informasi</li>
                <li>Gangguan operasional di luar kendali kami</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Tanggung jawab maksimal kami dibatasi pada nilai kontrak layanan yang bersangkutan.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Clock className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Pengakhiran Layanan</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Layanan dapat diakhiri dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Secara sepihak dengan pemberitahuan 30 hari</li>
                <li>Jika ada pelanggaran syarat dan ketentuan</li>
                <li>Jika terjadi force majeure</li>
                <li>Dengan persetujuan bersama kedua belah pihak</li>
                <li>Jika pembayaran tidak dilakukan sesuai kesepakatan</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Penyelesaian Sengketa</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Negosiasi damai antara kedua belah pihak</li>
                <li>Mediasi dengan pihak ketiga yang netral</li>
                <li>Arbitrase sesuai dengan hukum yang berlaku di Indonesia</li>
                <li>Pengadilan sebagai upaya terakhir</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Hukum yang mengatur syarat dan ketentuan ini adalah hukum Republik Indonesia.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Hak Kekayaan Intelektual</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Semua materi, konten, dan properti intelektual di website dan layanan kami 
                adalah milik PT LEKOM MARAS atau pemberi lisensi kami. Anda tidak diperbolehkan:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Menyalin, mendistribusikan, atau mereproduksi materi tanpa izin</li>
                <li>Menggunakan merek dagang atau logo kami tanpa persetujuan</li>
                <li>Memodifikasi atau mengadaptasi konten kami</li>
                <li>Menggunakan teknologi kami untuk tujuan komersial lainnya</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Hubungi Kami</h3>
              <p className="text-slate-600 mb-4">
                Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-slate-600">
                <p><strong>Email:</strong> legal@lekommaras.co.id</p>
                <p><strong>Telepon:</strong> 0852-8570-4297</p>
                <p><strong>Alamat:</strong> GD.RATU PRABU 1 JL TB SIMATUPANG KAV.20, Jakarta Selatan</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 text-center">
                Syarat dan Ketentuan ini berlaku efektif sejak 1 Januari 2024 dan terakhir diperbarui pada tanggal tersebut.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 PT LEKOM MARAS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}