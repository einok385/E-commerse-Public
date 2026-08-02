
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex w-full border-b border-gray-200 bg-white sticky top-0 z-50 p-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Logo: Tıklanınca ana sayfaya döner */}
        <Link to="/" className="text-xl font-bold tracking-widest text-gray-900 cursor-pointer no-underline">
          MAISON
        </Link>
        
        {/* Masaüstü Menü Linkleri */}
        <nav className="flex items-center gap-6 text-xs font-semibold tracking-widest text-gray-800">
          <Link to="/" className="hover:text-black no-underline text-inherit">WOMEN</Link>
          <Link to="/" className="hover:text-black no-underline text-inherit">MEN</Link>
          <Link to="/" className="hover:text-black no-underline text-inherit">SHOES</Link>
        </nav>
        
        {/* Sağ Alan İkonları */}
        <div className="flex items-center gap-4 text-gray-800">
          <button className="cursor-pointer text-lg">🔍</button>
          
          {/* SEPET LİNKİ BURADA: Doğrudan sepet sayfasına gider */}
          <Link to="/cart" className="hover:text-black cursor-pointer text-lg no-underline">
            🛒
          </Link>
        </div>
        
      </div>
    </header>
  );
}