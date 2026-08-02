
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// 📦 GERÇEKÇİ ÜRÜN DETAY SAYFASI
const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-8 gap-8 flex-1 items-center">
      {/* Sol Alan: Ürün Resmi */}
      <div className="w-full md:w-1/2 aspect-[3/4] bg-gray-100 flex items-center justify-center rounded-sm">
        <span className="text-gray-400 text-sm">Ürün Görseli #{id}</span>
      </div>
      {/* Sağ Alan: Detaylar */}
      <div className="flex flex-col items-start gap-4 flex-1">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">MAISON EXCLUSIVE</span>
        <h1 className="text-3xl font-serif text-gray-900">Seçilen Özel Tasarım Ürün</h1>
        <p className="text-xl font-bold text-gray-900">2,499 TL</p>
        <p className="text-gray-600 text-sm font-light leading-relaxed">
          Figma tasarımında belirtilen kumaş kalitesi ve dikiş detaylarına sahip, minimalist ve zamansız bir parça.
        </p>
        <button className="w-full bg-black text-white text-xs font-semibold tracking-widest uppercase py-4 hover:bg-gray-800 transition-all cursor-pointer mt-4">
          SEPETE EKLE
        </button>
        <Link to="/" className="text-xs text-gray-500 hover:text-black underline mt-2">← Ana Sayfaya Dön</Link>
      </div>
    </div>
  );
};

// 🛒 GERÇEKÇİ SEPET SAYFASI
const Cart = () => {
  return (
    <div className="max-w-3xl mx-auto w-full p-8 flex flex-col gap-6 flex-1">
      <h1 className="text-2xl font-serif tracking-widest text-gray-900 uppercase border-b border-gray-100 pb-4">Alışveriş Sepetim</h1>
      
      {/* Örnek Sepet Elemanı */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 gap-4">
        <div className="w-20 h-24 bg-gray-100 flex items-center justify-center rounded-sm text-xs text-gray-400">Ürün</div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-sm font-medium text-gray-800">Keten Kruvaze Ceket</h3>
          <p className="text-xs text-gray-400 mt-1">Beden: M</p>
        </div>
        <p className="text-sm font-semibold text-gray-900">2,499 TL</p>
      </div>

      {/* Toplam ve Ödeme Alanı */}
      <div className="flex flex-col items-end gap-4 mt-4 bg-gray-50 p-6 rounded-sm">
        <div className="flex items-center justify-between w-full max-w-xs text-sm">
          <span className="text-gray-500">Ara Toplam:</span>
          <span className="font-semibold text-gray-950">2,499 TL</span>
        </div>
        <button className="w-full max-w-xs bg-black text-white text-xs font-semibold tracking-widest uppercase py-4 hover:bg-gray-800 transition-all cursor-pointer">
          ÖDEMEYE GEÇ
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}