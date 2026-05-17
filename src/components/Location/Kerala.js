import React from 'react';

const Kerala = () => (
  <div className="w-full">
    <main className="w-full">
      <div
        className="hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582972236019-e3d10d405e1a?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="hidden" />
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center mb-4 text-emerald-400 drop-shadow-md">
            🌟 Kerala Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Kochi ➡️ Munnar ➡️ Thekkady ➡️ Alleppey ➡️ Kumarakom ➡️ Kochi</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 1: Arrival in Kochi & Local Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Base: Kochi</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕑 <b>02:00 PM</b> – Arrive in Kochi, check-in at hotel 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Visit Fort Kochi, Chinese Fishing Nets, Mattancherry Palace</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at local restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌄 Day 2: Kochi → Munnar</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Munnar</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Munnar (130 km | 4 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Cheeyappara & Valara Waterfalls</li>
              <li>🕛 <b>12:00 PM</b> – Tea plantations & Eravikulam National Park</li>
              <li>🕓 <b>04:00 PM</b> – Munnar town walk, shopping 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌿 Day 3: Munnar Local Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Munnar</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Top Station, Echo Point, Kundala Lake</li>
              <li>🕙 <b>11:00 AM</b> – Tea Museum</li>
              <li>🕛 <b>01:00 PM</b> – Mattupetty Dam</li>
              <li>🕓 <b>04:00 PM</b> – Blossom Park</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🐘 Day 4: Munnar → Thekkady</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Thekkady</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Thekkady (90 km | 3 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Spice plantations tour 🌿</li>
              <li>🕛 <b>12:00 PM</b> – Periyar Wildlife Sanctuary boat ride 🛶</li>
              <li>🕓 <b>04:00 PM</b> – Elephant camp visit 🐘</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚤 Day 5: Thekkady → Alleppey (Backwaters)</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Alleppey</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Alleppey (140 km | 4 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Houseboat check-in, cruise the backwaters 🚤</li>
              <li>🕛 <b>12:00 PM</b> – Village walk, paddy fields</li>
              <li>🕓 <b>04:00 PM</b> – Sunset on the backwaters 🌅</li>
              <li>🕗 <b>08:00 PM</b> – Dinner on houseboat 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌾 Day 6: Alleppey → Kumarakom</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Kumarakom</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Drive to Kumarakom (35 km | 1 hr)</li>
              <li>🕙 <b>11:00 AM</b> – Bird Sanctuary visit 🐦</li>
              <li>🕛 <b>01:00 PM</b> – Vembanad Lake boat ride</li>
              <li>🕓 <b>04:00 PM</b> – Village walk, relax</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/resort 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Departure from Kochi</h2>
            <p className="text-slate-400 mb-2">🕐 Drive: Kumarakom to Kochi (50 km | 1.5 hrs)</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Last-minute shopping/sightseeing in Kochi</li>
              <li>🕐 <b>12:00 PM</b> – Reach airport/station ✈️</li>
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
                <li>Book hotels and activities in advance during peak season</li>
                <li>Respect local customs at temples and backwaters</li>
                <li>Stay hydrated, especially in summer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Pack light, cotton clothes, and sunscreen 🧴</li>
                <li>Carry cash, limited ATMs in some areas 💵</li>
                <li>Mobile network is good in cities, patchy in rural areas 📵</li>
                <li>Try Kerala cuisine and seafood</li>
                <li>Travel with a local guide for backwaters and wildlife</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Kochi/Munnar/Thekkady/Alleppey/Kumarakom/Kochi/@9.9312,76.2673,9z/data=!4m38!4m37!1m5!1m1!1s0x3b08c2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d76.2673!2d9.9312!1m5!1m1!1s0x3b08c2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.0622!2d10.0889!1m5!1m1!1s0x3b08c2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.1588!2d9.5937!1m5!1m1!1s0x3b08c2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d76.3375!2d9.4981!1m5!1m1!1s0x3b08c2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d76.4346!2d9.6170!1m5!1m1!1s0x3b08c2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d76.2673!2d9.9312?entry=ttu"
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

export default Kerala;