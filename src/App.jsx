import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import HowToBuy from './pages/HowToBuy';
import PaymentMethods from './pages/PaymentMethods';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Halaman lain */}
          <Route path="/produk" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          {/* Alias (biar link lama tetap jalan) */}
          <Route path="/hubungi-kami" element={<Contact />} />

          {/* Footer links */}
          <Route path="/cara-pembelian" element={<HowToBuy />} />
          <Route path="/metode-pembayaran" element={<PaymentMethods />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />

          {/* Auth (placeholder) */}
          <Route path="/login" element={<Auth />} />

          {/* fallback kalau path tidak ada */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
