import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#7B1E1E] to-[#5A1414] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">🛍️ Orinimo Store</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Penyedia produk digital premium yang legal, aman, dan terjangkau untuk pengguna di Indonesia.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Kategori Produk</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/produk" className="hover:text-yellow-300 transition-colors">
                  📺 Streaming
                </Link>
              </li>
              <li>
                <Link to="/produk" className="hover:text-yellow-300 transition-colors">
                  🎵 Music
                </Link>
              </li>
              <li>
                <Link to="/produk" className="hover:text-yellow-300 transition-colors">
                  💼 Productivity
                </Link>
              </li>
              <li>
                <Link to="/produk" className="hover:text-yellow-300 transition-colors">
                  🎨 Creative Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Informasi</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/faq" className="hover:text-yellow-300 transition-colors">
                  ❓ FAQ
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="hover:text-yellow-300 transition-colors">
                  ℹ️ Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300 transition-colors">
                  📞 Hubungi Kami
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-yellow-300 transition-colors">
                  📝 Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm mb-4 text-gray-200">Dapatkan promo dan update terbaru!</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="bg-yellow-400 text-[#7B1E1E] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all hover:scale-105">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-gray-200 mb-4">
            &copy; 2024 Orinimo Store. Semua hak dilindungi. Made with ❤️ in Indonesia
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              📷 Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              📘 Facebook
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              💬 WhatsApp
            </a>
            <a href="https://t.me/orinimostore" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              ✈️ Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;