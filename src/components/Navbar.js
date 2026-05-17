import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Flame, Search, Map, X } from 'lucide-react';
import { locations } from '../data/locations';

function Navbar({ onHomeClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLocations = searchQuery 
    ? locations.filter(loc => loc.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleLocationSelect = (id) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/location/${id}`);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F19]/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center relative">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={onHomeClick}
            className={`flex items-center gap-2 group ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}
          >
            <div className={`p-2 rounded-xl bg-emerald-500 text-[#0B0F19] shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors`}>
              <Compass size={24} className="group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight text-white drop-shadow-md`}>
              Wanderlust
            </span>
          </Link>

          {/* Nav Links */}
          <div className={`hidden md:flex items-center space-x-8 ${isSearchOpen ? 'md:hidden lg:flex' : ''}`}>
            <Link 
              to="/trending" 
              className={`flex items-center gap-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all text-slate-300 hover:text-emerald-400`}
            >
              <Flame size={18} />
              Trending
            </Link>
            <Link 
              to="/destinations" 
              className={`flex items-center gap-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all text-slate-300 hover:text-emerald-400`}
            >
              <Map size={18} />
              Destinations
            </Link>
          </div>

          {/* Search/Actions */}
          <div className="flex items-center gap-4 flex-grow md:flex-grow-0 justify-end" ref={searchRef}>
            
            {/* Search Bar */}
            <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-full md:w-72' : 'w-auto'}`}>
              {!isSearchOpen ? (
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2.5 rounded-full hover:scale-105 transition-all bg-white/5 text-white backdrop-blur-md hover:bg-white/10 border border-white/10`}
                >
                  <Search size={20} />
                </button>
              ) : (
                <div className="w-full relative animate-fade-in">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#131A2A] border border-emerald-500/50 rounded-full py-2.5 pl-10 pr-10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  />
                  <button 
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X size={16} />
                  </button>

                  {/* Search Results Dropdown */}
                  {searchQuery && (
                    <div className="absolute top-full mt-3 w-full bg-[#131A2A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl z-50 max-h-80 overflow-y-auto">
                      {filteredLocations.length > 0 ? (
                        filteredLocations.map(loc => (
                          <div 
                            key={loc.id}
                            onClick={() => handleLocationSelect(loc.id)}
                            className="flex items-center gap-4 p-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-0"
                          >
                            <img src={loc.image} alt={loc.name} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                              <p className="text-white font-bold text-sm">{loc.name}</p>
                              <p className="text-slate-400 text-xs truncate w-40">{loc.tagline}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 text-center text-slate-400 text-sm">
                          No destinations found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button className={`hidden md:block px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg bg-emerald-500 text-[#0B0F19] hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] ${isSearchOpen ? 'md:hidden lg:block' : ''}`}>
              Sign In
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;