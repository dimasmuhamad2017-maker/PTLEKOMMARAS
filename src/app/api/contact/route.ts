import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validasi input
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Simpan data ke database (untuk saat ini kita log saja)
    // Dalam implementasi nyata, Anda akan menyimpan ke database
    const contactData = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      company: 'PT LEKOM MARAS'
    };

    console.log('Contact form submission:', contactData);

    // Kirim email notifikasi (opsional)
    // Anda dapat mengintegrasikan dengan layanan email di sini

    return NextResponse.json(
      { 
        success: true, 
        message: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'API Contact PT LEKOM MARAS - Use POST method to submit contact form' },
    { status: 200 }
  );
}