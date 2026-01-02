import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-[#7B1E1E] to-[#5A1414] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform">
              🛍️ Orinimo Store
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-300 transition-colors font-medium">
              Beranda
            </Link>
            <Link to="/produk" className="hover:text-yellow-300 transition-colors font-medium">
              Produk
            </Link>
            <Link to="/blog" className="hover:text-yellow-300 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/tentang-kami" className="hover:text-yellow-300 transition-colors font-medium">
              Tentang Kami
            </Link>
            <Link to="/faq" className="hover:text-yellow-300 transition-colors font-medium">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors font-medium">
              Kontak
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <button className="bg-white text-[#7B1E1E] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all hover:scale-105">
              🛒 Keranjang
            </button>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <Link to="/" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
            <Link to="/produk" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              Produk
            </Link>
            <Link to="/blog" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link to="/tentang-kami" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              Tentang Kami
            </Link>
            <Link to="/faq" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              Kontak
            </Link>
            <button className="w-full mt-2 bg-white text-[#7B1E1E] px-4 py-2 rounded-lg font-semibold">
              🛒 Keranjang
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;