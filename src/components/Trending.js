import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { locations } from '../data/locations';
import { Flame, MapPin } from 'lucide-react';

const trendingData = [
  {
    id: 'Ladakh',
    description: "Known as the 'Land of High Passes', Ladakh offers surreal landscapes with barren mountains, crystal-clear high-altitude lakes, and ancient Buddhist monasteries. It is the ultimate destination for adventure seekers and road trip enthusiasts, offering thrilling drives like the Khardung La pass. Experience the serene beauty of Pangong Lake and the unique culture of the local Tibetan communities."
  },
  {
    id: 'Kerala',
    description: "Aptly named 'God's Own Country', Kerala is famous for its tranquil backwaters, lush green tea gardens in Munnar, and pristine beaches. Houseboat cruises in Alleppey provide a unique and relaxing way to experience the local lifestyle. Enjoy the rich culinary heritage, vibrant festivals, and rejuvenating Ayurvedic treatments that make this state a tropical paradise."
  },
  {
    id: 'Sikkim',
    description: "Nestled in the Himalayas, Sikkim is a breathtaking state known for its biodiversity, majestic mountains, and vibrant Tibetan Buddhist culture. It is home to Kangchenjunga, the third highest peak in the world. Visitors can explore beautiful alpine meadows, pristine lakes like Tsomgo, and ancient monasteries, making it a peaceful yet adventurous getaway."
  },
  {
    id: 'Goa',
    description: "India's pocket-sized paradise, Goa is globally renowned for its stunning beaches, stellar nightlife, and Portuguese-influenced architecture. Beyond the vibrant parties, it offers lush spice plantations, magnificent historic churches, and thrilling water sports. Whether you want a relaxing yoga retreat or an energetic night out, Goa has something for every traveler."
  }
];

const Trending = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trendingLocations = trendingData.map(item => {
    const loc = locations.find(l => l.id === item.id);
    return { ...loc, description: item.description };
  });

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto min-h-screen">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-4 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <Flame size={18} className="animate-pulse" />
          <span className="text-sm font-bold tracking-wider uppercase">Hot Right Now</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Trending Destinations
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Discover the most sought-after travel experiences this season. These hand-picked locations are currently loved by travelers worldwide.
        </p>
      </div>

      <div className="space-y-12">
        {trendingLocations.map((location, index) => (
          <div 
            key={location.id}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-[#131A2A]/60 backdrop-blur-md rounded-3xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group shadow-xl`}
          >
            <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden relative shadow-lg">
              <img 
                src={location.image}
                alt={location.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-50" />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4">
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <MapPin size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">{location.name}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{location.tagline}</h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                {location.description}
              </p>
              
              <button 
                onClick={() => navigate(`/location/${location.id}`)}
                className="self-start px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-[#0B0F19] font-bold rounded-xl transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                View Full Itinerary
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
