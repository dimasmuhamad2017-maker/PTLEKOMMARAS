'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, Users, Truck, HardHat, ChevronRight, Award, Clock, Target } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="PT LEKOM MARAS" className="h-12 w-auto mr-3" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT LEKOM MARAS</h1>
                <p className="text-xs text-slate-600">Mining Support Services</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors">Terms</a>
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
              <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PT <span className="text-blue-400">LEKOM MARAS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Aktivitas Penunjang Pertambangan dan Penggalian Lainnya
            </p>
            <p className="text-lg mb-12 text-slate-300 max-w-3xl mx-auto">
              Mitra terpercaya dalam menyediakan layanan penunjang pertambangan yang profesional, 
              efisien, dan berkualitas tinggi untuk mendukung kesuksesan operasional tambang Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Hubungi Kami
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Layanan Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tentang <span className="text-blue-600">PT LEKOM MARAS</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Profesional dan Terpercaya</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                PT LEKOM MARAS adalah perusahaan yang bergerak dalam bidang aktivitas penunjang pertambangan 
                dan penggalian lainnya. Dengan pengalaman dan dedikasi tinggi, kami menjadi mitra andal 
                untuk industri pertambangan di Indonesia.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Kami berkomitmen untuk memberikan layanan terbaik dengan standar keselamatan yang tinggi, 
                efisiensi operasional, dan solusi inovatif yang disesuaikan dengan kebutuhan setiap klien.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Standar Keselamatan</h4>
                    <p className="text-sm text-slate-600">Prioritas utama operasional</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Berkualitas Tinggi</h4>
                    <p className="text-sm text-slate-600">Layanan terbaik di kelasnya</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Tepat Waktu</h4>
                    <p className="text-sm text-slate-600">Efisien dan on-time delivery</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Solusi Tepat</h4>
                    <p className="text-sm text-slate-600">Disesuaikan kebutuhan klien</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-xl">
              <img src="/mining-operations.jpg" alt="Mining Operations" className="w-full h-auto rounded-lg shadow-lg mb-4" />
              <img src="/mining-safety.jpg" alt="Mining Safety" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Layanan <span className="text-blue-600">Unggulan</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan penunjang pertambangan yang komprehensif 
              untuk mendukung kesuksesan operasional tambang Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Logistik & Transportasi</h3>
              <p className="text-slate-600 mb-4">
                Pengelolaan logistik dan transportasi peralatan pertambangan dengan sistem yang efisien 
                dan terintegrasi untuk memastikan kelancaran operasional.
              </p>
              <a href="#contact" className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                Pelajari lebih lanjut <ChevronRight size={20} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HardHat className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Jasa Penunjang Tambang</h3>
              <p className="text-slate-600 mb-4">
                Berbagai jasa penunjang operasional pertambangan termasuk preparasi lahan, 
                pembuatan jalan tambang, dan jasa penunjang lainnya.
              </p>
              <a href="#contact" className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                Pelajari lebih lanjut <ChevronRight size={20} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tenaga Ahli</h3>
              <p className="text-slate-600 mb-4">
                Penyediaan tenaga kerja ahli dan berpengalaman di bidang pertambangan 
                untuk mendukung berbagai aspek operasional tambang.
              </p>
              <a href="#contact" className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                Pelajari lebih lanjut <ChevronRight size={20} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hubungi <span className="text-blue-600">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Siap untuk bermitra dengan kami? Hubungi tim profesional PT LEKOM MARAS 
              untuk konsultasi kebutuhan penunjang pertambangan Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Alamat</h4>
                      <p className="text-slate-600">
                        GD.RATU PRABU 1 JL TB SIMATUPANG KAV.20<br />
                        Kel.Cilandak Timur, Kec. Pasar Minggu<br />
                        Kota Adm. Jakarta Selatan, Prov. DKI Jakarta
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Telepon</h4>
                      <p className="text-slate-600">0852-8570-4297</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">info@lekommaras.co.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="PT LEKOM MARAS" className="h-10 w-auto mr-3" />
                <div>
                  <h3 className="text-xl font-bold">PT LEKOM MARAS</h3>
                  <p className="text-slate-400 text-sm">Mining Support Services</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Mitra terpercaya dalam layanan penunjang pertambangan yang profesional 
                dan berkualitas tinggi di Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Logistik & Transportasi</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Jasa Penunjang Tambang</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Tenaga Ahli</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PT LEKOM MARAS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}