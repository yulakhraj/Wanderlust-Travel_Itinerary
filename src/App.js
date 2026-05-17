import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Compass } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { locations } from './data/locations';
import LocationPage from './components/LocationPage';
import Destinations from './components/Destinations';
import './styles/main.css';

const travelQuotes = [
  "The world is a book, and those who do not travel read only one page.",
  "Travel is the only thing you buy that makes you richer.",
  "Not all those who wander are lost.",
  "To travel is to live.",
  "Jobs fill your pocket, but adventures fill your soul."
];

function App() {
  const navigate = useNavigate();
  const [quote, setQuote] = useState(travelQuotes[0]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setQuote(travelQuotes[Math.floor(Math.random() * travelQuotes.length)]);
  }, []);

  const handleTileClick = (locationId) => {
    navigate(`/location/${locationId}`);
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const resetItinerary = () => {
    navigate('/');
  };

  const featuredLocations = locations.filter(loc => loc.featured);
  const discoverLocations = locations.filter(loc => !loc.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] font-sans">
      <Navbar onHomeClick={resetItinerary} />
      
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <div className="pb-20">
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
                    alt="Hero Background"
                    className="absolute inset-0 z-0 w-full h-full object-cover fixed-fallback opacity-80"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B0F19]/40 via-[#0B0F19]/20 to-[#0B0F19]" />
                  
                  <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 mb-6">
                      <Compass size={18} className="animate-spin-slow" />
                      <span className="text-sm font-medium tracking-wider uppercase text-white">Plan Your Perfect Trip</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
                      Discover India's <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Hidden Gems</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
                      "{quote}"
                    </p>
                    
                    <button 
                      onClick={() => {
                        document.getElementById('explore-section').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B0F19] rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 mx-auto"
                    >
                      Start Exploring
                    </button>
                  </div>
                </section>

                {/* Featured Carousel Section */}
                <section id="explore-section" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-30">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">Top Destinations</h2>
                      <p className="text-slate-400 mt-2">Curated itineraries for your next adventure</p>
                    </div>
                    <div className="flex gap-2 hidden md:flex">
                      <button 
                        onClick={() => scrollCarousel('left')}
                        className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={() => scrollCarousel('right')}
                        className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>

                  <div 
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
                  >
                    {featuredLocations.map((location) => (
                      <div 
                        key={location.id}
                        onClick={() => handleTileClick(location.id)}
                        className="snap-start shrink-0 w-80 md:w-96 h-[450px] relative rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
                      >
                        <img 
                          src={location.image}
                          alt={location.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent opacity-90 transition-opacity" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-2 text-emerald-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <MapPin size={18} />
                            <span className="text-sm font-semibold uppercase tracking-wider">Explore Itinerary</span>
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-2">{location.name}</h3>
                          <p className="text-slate-300">{location.tagline}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Discover More Grid */}
                <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                  <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white">More to Discover</h2>
                    <p className="text-slate-400 mt-2">Find the perfect backdrop for your next story</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {discoverLocations.map((location) => (
                      <div
                        key={location.id}
                        onClick={() => handleTileClick(location.id)}
                        className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-white/5 hover:border-white/20 transition-all duration-300"
                      >
                        <img 
                          src={location.image}
                          alt={location.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-[#0B0F19]/60 group-hover:bg-[#0B0F19]/20 transition-colors duration-300" />
                        
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md group-hover:-translate-y-1 transition-transform">{location.name}</h3>
                          <p className="text-emerald-300 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 drop-shadow-md">
                            {location.tagline}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            }
          />
          <Route 
            path="/location/:location" 
            element={<LocationPage />} 
          />
          <Route 
            path="/destinations" 
            element={<Destinations />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;