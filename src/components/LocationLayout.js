import React, { useEffect } from 'react';

const LocationLayout = ({ locationData, children }) => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationData]);

  if (!locationData) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0B0F19] text-slate-300">
      <main className="flex-grow relative">
        {/* Fixed Background Image */}
        <img
          src={locationData.image}
          alt={locationData.name}
          className="fixed inset-0 z-0 w-full h-full object-cover opacity-20"
        />
        {/* Dark Overlay for contrast */}
        <div className="fixed inset-0 z-10 bg-gradient-to-b from-[#0B0F19]/90 via-[#0B0F19]/70 to-[#0B0F19]/90 backdrop-blur-[2px]" />
        
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 flex justify-center">
          <div className="max-w-4xl w-full bg-[#131A2A]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationLayout;
