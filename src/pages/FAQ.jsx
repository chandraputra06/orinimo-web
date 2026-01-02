import React, { useState } from 'react';

const faqs = [
  { question: 'Produk apa saja yang tersedia?', answer: 'Kami menyediakan akun dan langganan premium seperti Netflix, Spotify, Canva, dan VPN.' },
  { question: 'Bagaimana cara membeli?', answer: 'Pilih produk, tambahkan ke keranjang, dan bayar via metode yang tersedia seperti bank transfer atau e-wallet.' },
  { question: 'Apakah produk ini legal dan aman?', answer: 'Ya, semua produk bersumber dari penyedia resmi dan dilengkapi garansi keamanan.' },
  // Tambahkan lebih banyak
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h1>
        <p className="text-lg text-gray-600">Jawaban untuk pertanyaan Anda tentang produk, pembelian, dan keamanan.</p>
      </section>

      <section className="px-4 py-16 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-semibold text-gray-900 flex justify-between items-center"
            >
              {faq.question}
              <span className="text-[#7B1E1E]">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-700 mt-2 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;