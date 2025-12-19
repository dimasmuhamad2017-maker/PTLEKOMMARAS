'use client';

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  onFormSubmit?: (success: boolean, message: string) => void;
}

export default function ContactForm({ onFormSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Pesan berhasil dikirim!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        onFormSubmit?.(true, data.message);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Terjadi kesalahan. Silakan coba lagi.'
        });
        onFormSubmit?.(false, data.error);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Terjadi kesalahan koneksi. Silakan coba lagi.'
      });
      onFormSubmit?.(false, 'Connection error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
      
      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitStatus.type === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span className="font-medium">{submitStatus.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
            placeholder="email@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Subjek <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
            placeholder="Subjek pesan"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Pesan <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
            placeholder="Tuliskan pesan Anda di sini..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Kirim Pesan</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
              <Phone className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Telepon</p>
              <p className="text-sm text-slate-600">0852-8570-4297</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
              <Mail className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Email</p>
              <p className="text-sm text-slate-600">info@lekommaras.co.id</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}