import React, { useState } from 'react';

// Data dummy artikel
const articles = [
  { id: 1, title: 'Tips Menghemat Biaya Langganan Digital', summary: 'Pelajari cara mendapatkan akses premium tanpa mahal.', date: '2023-10-01', content: 'Konten lengkap artikel di sini...' },
  { id: 2, title: 'Keamanan Akun Digital: Apa yang Perlu Anda Ketahui', summary: 'Pastikan akun Anda aman dengan tips ini.', date: '2023-09-15', content: 'Konten lengkap artikel di sini...' },
  // Tambahkan lebih banyak
];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog Orinimo Store</h1>
        <p className="text-lg text-gray-600">Tetap update dengan tips dan info digital terbaru.</p>
      </section>

      <section className="px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map(article => (
            <div key={article.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <p className="text-sm text-gray-500 mb-4">{article.date}</p>
              <button
                onClick={() => setSelectedArticle(article)}
                className="text-[#7B1E1E] font-semibold underline"
              >
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h2>
            <p className="text-gray-500 mb-4">{selectedArticle.date}</p>
            <p className="text-gray-700 leading-relaxed">{selectedArticle.content}</p>
            <button onClick={() => setSelectedArticle(null)} className="mt-4 text-gray-500 underline">Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;