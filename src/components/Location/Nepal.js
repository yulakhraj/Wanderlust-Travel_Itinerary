import React from 'react';

const Nepal = () => (
  <div className="w-full">
    <main className="w-full">
      <div
        className="hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="hidden" />
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center mb-4 text-emerald-400 drop-shadow-md">
            🇳🇵 Nepal Adventure Itinerary (7 Days) 🇳🇵
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Kathmandu ➡️ Pokhara ➡️ Chitwan ➡️ Kathmandu</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🛬 Day 1: Arrival in Kathmandu</h2>
            <p className="text-slate-400 mb-2">📍 Base: Kathmandu</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕙 <b>10:00 AM</b> – Arrive at Tribhuvan International Airport</li>
              <li>🕛 <b>12:00 PM</b> – Check-in at hotel in Thamel</li>
              <li>🕑 <b>02:00 PM</b> – Lunch (Try local Momos & Dal Bhat) 🥟</li>
              <li>🕓 <b>04:00 PM</b> – Visit Swayambhunath (Monkey Temple) for sunset</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at a traditional Nepali restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">⛩️ Day 2: Kathmandu Valley Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Kathmandu</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Visit Pashupatinath Temple</li>
              <li>🕚 <b>11:00 AM</b> – Explore Boudhanath Stupa</li>
              <li>🕑 <b>02:00 PM</b> – Visit Patan Durbar Square</li>
              <li>🕓 <b>04:00 PM</b> – Shopping and strolling in Thamel streets</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 3: Kathmandu to Pokhara</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Pokhara</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Scenic drive to Pokhara (200 km | 6-7 hrs) or 25 min flight</li>
              <li>🕒 <b>03:00 PM</b> – Check-in at lakeside hotel</li>
              <li>🕓 <b>04:30 PM</b> – Boating on Phewa Lake 🛶</li>
              <li>🕕 <b>06:30 PM</b> – Sunset views from the lake</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at Lakeside Pokhara 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌄 Day 4: Pokhara Sunrise & Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Pokhara</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕠 <b>05:00 AM</b> – Drive to Sarangkot for sunrise over the Annapurna range ☀️</li>
              <li>🕘 <b>09:00 AM</b> – Breakfast at hotel</li>
              <li>🕚 <b>11:00 AM</b> – Visit World Peace Pagoda</li>
              <li>🕑 <b>02:00 PM</b> – Explore Davis Falls and Gupteshwor Cave</li>
              <li>🕓 <b>04:00 PM</b> – Visit International Mountain Museum</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at a lakeside café 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🐘 Day 5: Pokhara to Chitwan National Park</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Chitwan</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Chitwan (150 km | 5 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at jungle resort</li>
              <li>🕓 <b>04:00 PM</b> – Tharu village walk and sunset view over Rapti River</li>
              <li>🕖 <b>07:00 PM</b> – Tharu cultural dance show</li>
              <li>🕗 <b>08:30 PM</b> – Dinner at resort 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🐅 Day 6: Jungle Safari in Chitwan</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Chitwan</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕖 <b>07:00 AM</b> – Canoe ride on the Rapti River & jungle walk</li>
              <li>🕘 <b>09:30 AM</b> – Breakfast at resort</li>
              <li>🕛 <b>12:00 PM</b> – Visit Elephant Breeding Center</li>
              <li>🕒 <b>03:00 PM</b> – Jeep Safari to spot rhinos and Bengal tigers 🦏</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at resort 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Chitwan to Kathmandu & Departure</h2>
            <p className="text-slate-400 mb-2">📍 Return: Kathmandu</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive or fly back to Kathmandu (170 km | 5-6 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Last-minute souvenir shopping in Thamel</li>
              <li>🕓 <b>04:00 PM</b> – Transfer to Tribhuvan International Airport</li>
              <li>🕕 <b>06:00 PM</b> – Trip ends</li>
            </ul>
          </div>

          <hr className="my-6 border-white/10" />

          {/* Travel Tips & Essentials */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white drop-shadow-md mb-2">✅ Travel Tips & Essentials</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🛂 Essentials:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Indian citizens do not need a visa, but must carry a valid Passport or Voter ID</li>
                <li>Other nationalities can get Visa on Arrival at the airport</li>
                <li>Bring trekking shoes and warm layers for the mountains</li>
                <li>Carry mosquito repellent for Chitwan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Best time to visit: October to December (Autumn) and March to May (Spring)</li>
                <li>Nepalese Rupee (NPR) is the local currency. Indian Rupee (INR 100/50 notes) are widely accepted</li>
                <li>Avoid drinking tap water; always use bottled or purified water</li>
                <li>Haggling is common in local markets like Thamel</li>
                <li>Local SIM cards (Ncell or NTC) are easily available at the airport</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Kathmandu/Pokhara/Chitwan+National+Park/Kathmandu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 text-[#0B0F19] shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:bg-emerald-400 text-[#0B0F19] font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            📍 Click Here for Full Route Map
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Nepal;
