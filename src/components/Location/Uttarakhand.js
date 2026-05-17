import React from 'react';

const Uttarakhand = () => (
  <div className="w-full">
    <main className="w-full">
      <div
        className="hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-Bkci_8qcdvQ?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="hidden" />
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center mb-4 text-emerald-400 drop-shadow-md">
            🌟 Uttarakhand Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Dehradun ➡️ Mussoorie ➡️ Rishikesh ➡️ Auli ➡️ Chopta ➡️ Nainital ➡️ Dehradun</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 1: Dehradun to Mussoorie</h2>
            <p className="text-slate-400 mb-2">📍 Base: Mussoorie</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Start from Dehradun (35 km | 1.5 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Check-in at Mussoorie</li>
              <li>🕑 <b>02:00 PM</b> – Visit Kempty Falls</li>
              <li>🕓 <b>04:00 PM</b> – Explore Mall Road</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏔️ Day 2: Mussoorie Local Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Mussoorie</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Visit Gun Hill Point</li>
              <li>🕙 <b>11:00 AM</b> – Explore Lal Tibba</li>
              <li>🕑 <b>02:00 PM</b> – Visit Company Garden</li>
              <li>🕓 <b>04:00 PM</b> – Sunset at Cloud's End</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌊 Day 3: Mussoorie to Rishikesh</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Rishikesh</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Rishikesh (90 km | 3 hrs)</li>
              <li>🕙 <b>11:00 AM</b> – Check-in at Rishikesh</li>
              <li>🕑 <b>02:00 PM</b> – Visit Triveni Ghat</li>
              <li>🕓 <b>04:00 PM</b> – Explore Laxman Jhula</li>
              <li>🕗 <b>08:00 PM</b> – Ganga Aarti at Parmarth Niketan</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏂 Day 4: Rishikesh to Auli</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Auli</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Auli (270 km | 8 hrs)</li>
              <li>🕓 <b>04:00 PM</b> – Check-in at Auli</li>
              <li>🕕 <b>06:00 PM</b> – Cable car ride (if time permits)</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏔️ Day 5: Auli to Chopta</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Chopta</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Chopta (100 km | 3 hrs)</li>
              <li>🕙 <b>11:00 AM</b> – Check-in at Chopta</li>
              <li>🕑 <b>02:00 PM</b> – Visit Tungnath Temple</li>
              <li>🕓 <b>04:00 PM</b> – Explore Deoria Tal</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏞️ Day 6: Chopta to Nainital</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Nainital</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Nainital (200 km | 6 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at Nainital</li>
              <li>🕓 <b>04:00 PM</b> – Boat ride in Naini Lake</li>
              <li>🕕 <b>06:00 PM</b> – Visit Naina Devi Temple</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Nainital to Dehradun</h2>
            <p className="text-slate-400 mb-2">📍 Return: Dehradun</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Dehradun (300 km | 7 hrs)</li>
              <li>🕑 <b>03:00 PM</b> – Reach Dehradun</li>
              <li>🕓 <b>04:00 PM</b> – Last-minute shopping</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          <hr className="my-6 border-white/10" />

          {/* Travel Tips & Essentials */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white drop-shadow-md mb-2">✅ Travel Tips & Essentials</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🛂 Essentials:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Carry ID proof for all travelers</li>
                <li>Book hotels in advance during peak season</li>
                <li>Carry warm clothes, especially for Auli</li>
                <li>Keep necessary permits for trekking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Best time to visit: March to June, September to November</li>
                <li>Carry sufficient cash, limited ATMs in remote areas</li>
                <li>Mobile network is good in cities, patchy in hills</li>
                <li>Respect local customs and temples</li>
                <li>Travel with a local guide for treks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Dehradun/Mussoorie/Rishikesh/Auli/Chopta/Nainital/Dehradun/@30.3165,78.0322,9z/data=!4m38!4m37!1m5!1m1!1s0x390929c356c888af:0x4c3566c5d5a3e5a5!2m2!1d78.0322!2d30.3165!1m5!1m1!1s0x390929c356c888af:0x4c3566c5d5a3e5a5!2m2!1d78.0700!2d30.4500!1m5!1m1!1s0x390929c356c888af:0x4c3566c5d5a3e5a5!2m2!1d78.2676!2d30.0869!1m5!1m1!1s0x390929c356c888af:0x4c3566c5d5a3e5a5!2m2!1d79.5700!2d30.4500!1m5!1m1!1s0x390929c356c888af:0x4c3566c5d5a3e5a5!2m2!1d79.0500!2d30.4000!1m5!1m1!1s0x390929c356c888af:0x4c3566c5d5a3e5a5!2m2!1d79.4500!2d29.3800!1m5!1m1!1s0x390929c356c888af:0x4c3566c5d5a3e5a5!2m2!1d78.0322!2d30.3165?entry=ttu"
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

export default Uttarakhand; 