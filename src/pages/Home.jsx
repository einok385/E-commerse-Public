
import { useState } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Keten Kruvaze Ceket", price: "2499 TL", category: "WOMEN", image: "https://unsplash.com" },
  { id: 2, name: "Oversize Pamuklu Gömlek", price: "1299 TL", category: "WOMEN", image: "https://unsplash.com" },
  { id: 3, name: "Klasik Kesim Takım Elbise", price: "5499 TL", category: "MEN", image: "https://unsplash.com" },
  { id: 4, name: "Süet Loafer Ayakkabı", price: "3199 TL", category: "SHOES", image: "https://unsplash.com" },
  { id: 5, name: "Minimalist Deri Çanta", price: "1899 TL", category: "ACCESSORIES", image: "https://unsplash.com" },
  { id: 6, name: "Örme İpek Kravat", price: "699 TL", category: "ACCESSORIES", image: "https://unsplash.com" },
  { id: 7, name: "Dökümlü Triko Elbise", price: "1799 TL", category: "WOMEN", image: "https://unsplash.com" },
  { id: 8, name: "Yün Karışımlı Kaşe Kaban", price: "4299 TL", category: "MEN", image: "https://unsplash.com" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredProducts = activeTab === "ALL" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <div className="flex flex-col flex-1 bg-white">
      
      {/* 🧥 1. HERO SECTION */}
      <section className="flex flex-col md:flex-row min-h-[75vh] bg-[#f4f4f2] items-center justify-between p-8 md:p-16 gap-8 w-full">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div 
            className="w-full max-w-sm h-[45vh] md:h-[60vh] bg-gray-300 rounded-sm overflow-hidden bg-cover bg-center shadow-sm"
            style={{ backgroundImage: `url('https://unsplash.com')` }}
          >
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 flex-1 max-w-md">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">SUMMER COLLECTION</span>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">Quiet Luxury Defined.</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
            Garments crafted for stillness. Each piece designed to outlast the season, the trend, and the noise.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-2">
            <button className="w-full sm:w-auto bg-black text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gray-800 transition-all cursor-pointer">
              SHOP NOW
            </button>
            <button className="w-full sm:w-auto border-b border-black text-black text-xs font-semibold tracking-widest uppercase py-2 hover:opacity-70 transition-all cursor-pointer text-center">
              VIEW LOOKBOOK
            </button>
          </div>
        </div>
      </section>

      {/* 🛍️ 2. PRODUCT GRID */}
      <section className="flex flex-col p-8 md:p-16 gap-8 max-w-7xl mx-auto w-full">
        
        {/* Kategori Tabları */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-b border-gray-100 pb-4">
          {["ALL", "WOMEN", "MEN", "SHOES", "ACCESSORIES"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-semibold tracking-widest uppercase pb-2 transition-all cursor-pointer border-b-2 ${
                activeTab === tab ? "border-black text-black" : "border-transparent text-gray-400 hover:text-black"
              }`}
            >
              {tab === "ALL" ? "TÜM ÜRÜNLER" : tab}
            </button>
          ))}
        </div>

        {/* 8'li Ürün Grid Yapısı (Tıklanabilir Link ile Sarmallandı) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="flex flex-col gap-3 group relative cursor-pointer no-underline text-inherit"
            >
              
              {/* Ürün Görseli */}
              <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden relative rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-black text-white text-[10px] font-bold tracking-widest uppercase py-3 shadow-md hover:bg-gray-800 cursor-pointer">
                    SEPETE EKLE
                  </button>
                </div>
              </div>
              
              {/* Ürün Detayları */}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-light text-gray-800 group-hover:text-black transition-colors">{product.name}</h3>
                <p className="text-sm font-semibold text-gray-900">{product.price}</p>
              </div>

            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}