import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Kirim data ke API atau WhatsApp
    alert('Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.');
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ada pertanyaan tentang produk digital premium kami? Tim support responsif Orinimo Store siap membantu Anda 24/7. Kirim pesan atau chat langsung via WhatsApp!
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Orinimo%20Store,%20saya%20ingin%20bertanya%20tentang%20produk%20digital."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7B1E1E] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#5A1414] transition duration-300"
          >
            Chat via WhatsApp
          </a>
        </div>
      </section>

      {/* Form Kontak */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Kirim Pesan Anda
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1E1E] focus:border-[#7B1E1E] transition duration-300"
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1E1E] focus:border-[#7B1E1E] transition duration-300"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1E1E] focus:border-[#7B1E1E] transition duration-300"
                placeholder="Tuliskan pertanyaan atau pesan Anda"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#7B1E1E] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#5A1414] transition duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {/* Informasi Kontak & Media Sosial */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Informasi Kontak Lainnya
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium text-[#7B1E1E] mb-2">Email Support</h3>
              <p className="text-gray-600">support@orinimostore.com</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#7B1E1E] mb-2">Jam Operasional</h3>
              <p className="text-gray-600">Senin - Minggu, 24/7</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[#7B1E1E] mb-4">Ikuti Kami di Media Sosial</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/orinimostore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#7B1E1E] transition duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  {/* Placeholder SVG for Instagram */}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@orinimostore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#7B1E1E] transition duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  {/* Placeholder SVG for TikTok */}
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;