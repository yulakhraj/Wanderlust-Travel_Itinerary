import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Flame, Search, Map } from 'lucide-react';

function Navbar({ onHomeClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F19]/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={onHomeClick}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl bg-emerald-500 text-[#0B0F19] shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors`}>
              <Compass size={24} className="group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight text-white drop-shadow-md`}>
              Wanderlust
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/trending" 
              className={`flex items-center gap-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all text-slate-300 hover:text-emerald-400`}
            >
              <Flame size={18} />
              Trending
            </Link>
            <Link 
              to="/" 
              className={`flex items-center gap-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all text-slate-300 hover:text-emerald-400`}
            >
              <Map size={18} />
              Destinations
            </Link>
          </div>

          {/* Search/Actions */}
          <div className="flex items-center gap-4">
            <button className={`p-2.5 rounded-full hover:scale-105 transition-all bg-white/5 text-white backdrop-blur-md hover:bg-white/10 border border-white/10`}>
              <Search size={20} />
            </button>
            <button className={`hidden md:block px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg bg-emerald-500 text-[#0B0F19] hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]`}>
              Sign In
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;