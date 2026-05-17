import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { locations } from '../data/locations';

const Destinations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTileClick = (locationId) => {
    navigate(`/location/${locationId}`);
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          All Destinations
        </h1>
        <p className="text-xl text-slate-400">
          Explore our complete collection of curated travel experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {locations.map((location) => (
          <div
            key={location.id}
            onClick={() => handleTileClick(location.id)}
            className="relative h-72 rounded-3xl overflow-hidden cursor-pointer group shadow-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
          >
            <img 
              src={location.image}
              alt={location.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                {location.name}
              </h3>
              <p className="text-emerald-400 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 drop-shadow-md font-medium">
                {location.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
