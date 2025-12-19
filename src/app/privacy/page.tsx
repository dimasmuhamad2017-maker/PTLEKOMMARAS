'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
              <Link href="/privacy" className="text-blue-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-blue-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Terms</Link>
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
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Kebijakan Privasi PT LEKOM MARAS - Perlindungan Data Pribadi Anda
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
                <Shield className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Pendahuluan</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Selamat datang di PT LEKOM MARAS. Kami sangat menghargai privasi Anda dan berkomitmen 
                untuk melindungi data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini 
                menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi 
                Anda ketika menggunakan layanan kami.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dengan menggunakan layanan PT LEKOM MARAS, Anda menyetujui praktik yang dijelaskan dalam 
                Kebijakan Privasi ini.
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Database className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Informasi Pribadi</h3>
              <p className="text-slate-600 mb-4">
                Kami dapat mengumpulkan informasi pribadi berikut:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Nama lengkap dan identitas perusahaan</li>
                <li>Alamat email dan nomor telepon</li>
                <li>Alamat perusahaan dan lokasi proyek</li>
                <li>Informasi kontak darurat</li>
                <li>Data keuangan yang relevan untuk transaksi bisnis</li>
                <li>Informasi teknis mengenai kebutuhan pertambangan</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">Informasi Teknis</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Alamat IP dan informasi perangkat</li>
                <li>Jenis browser dan sistem operasi</li>
                <li>Data penggunaan website</li>
                <li>Cookies dan teknologi pelacakan lainnya</li>
              </ul>
            </div>

            {/* Information Usage */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Eye className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Penggunaan Informasi</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Menyediakan layanan penunjang pertambangan yang diminta</li>
                <li>Mengelola hubungan bisnis dan komunikasi dengan klien</li>
                <li>Memproses transaksi dan penagihan</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Mengirimkan informasi penting terkait layanan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
                <li>Melindungi keamanan dan integritas sistem kami</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Lock className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Keamanan Data</h2>
              </div>
              <p className="text-slate-600 mb-4">
                PT LEKOM MARAS berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas hanya untuk personel yang berwenang</li>
                <li>System keamanan yang terus diperbarui</li>
                <li>Audit keamanan secara berkala</li>
                <li>Kebijakan penghapusan data yang tidak lagi diperlukan</li>
              </ul>
            </div>

            {/* User Rights */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <UserCheck className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Hak Anda</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Sebagai pemilik data, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Meminta penghapusan data pribadi Anda</li>
                <li>Menolak pemrosesan data tertentu</li>
                <li>Meminta portabilitas data</li>
                <li>Menarik persetujuan yang telah diberikan</li>
              </ul>
            </div>

            {/* Third Party Sharing */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Berbagi dengan Pihak Ketiga</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Kepada mitra bisnis yang terkait langsung dengan layanan</li>
                <li>Untuk memenuhi kewajiban hukum atau perintah pengadilan</li>
                <li>Kepada otoritas pemerintah yang berwenang</li>
                <li>Dalam kasus transfer bisnis atau merger</li>
              </ul>
            </div>

            {/* Policy Updates */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <FileText className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-slate-900">Pembaruan Kebijakan</h2>
              </div>
              <p className="text-slate-600 mb-4">
                PT LEKOM MARAS dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. 
                Setiap perubahan akan diinformasikan melalui website atau email. Kami menyarankan 
                Anda untuk secara berkala meninjau kebijakan ini untuk tetap mendapatkan informasi 
                terkini tentang praktik privasi kami.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Hubungi Kami</h3>
              <p className="text-slate-600 mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-slate-600">
                <p><strong>Email:</strong> privacy@lekommaras.co.id</p>
                <p><strong>Telepon:</strong> 0852-8570-4297</p>
                <p><strong>Alamat:</strong> GD.RATU PRABU 1 JL TB SIMATUPANG KAV.20, Jakarta Selatan</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 text-center">
                Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024 dan terakhir diperbarui pada tanggal tersebut.
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