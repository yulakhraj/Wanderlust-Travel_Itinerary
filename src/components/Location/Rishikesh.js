import React from 'react';

const Rishikesh = () => (
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
            🌟 Rishikesh & Nearby Places Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Rishikesh ➡️ Haridwar ➡️ Dehradun ➡️ Mussoorie ➡️ Dhanaulti ➡️ Rishikesh</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 1: Arrival in Rishikesh & Local Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Base: Rishikesh</p>
            <p className="text-slate-400 mb-2">🕐 Drive: Delhi to Rishikesh – ~6 hrs</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Depart from Delhi</li>
              <li>🕑 <b>02:00 PM</b> – Arrive in Rishikesh, check-in at hotel 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Visit Triveni Ghat (Ganga Aarti) 🙏</li>
              <li>🕕 <b>06:00 PM</b> – Explore Laxman Jhula & Ram Jhula 🌉</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at a riverside café 🍽️</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🍽️ Meals:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Breakfast: En route</li>
                <li>Lunch: Rishikesh café</li>
                <li>Dinner: Riverside café</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌊 Day 2: Adventure Activities in Rishikesh</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Rishikesh</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – White Water Rafting on the Ganges 🚣‍♂️</li>
              <li>🕙 <b>10:30 AM</b> – Bungee Jumping / Ziplining / Giant Swing (optional)</li>
              <li>🕛 <b>12:00 PM</b> – Yoga session by the river 🧘‍♂️</li>
              <li>🕑 <b>02:00 PM</b> – Lunch at Chotiwala Restaurant 🍛</li>
              <li>🕓 <b>04:00 PM</b> – Explore Beatles Ashram 🎸</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/café 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🕉️ Day 3: Rishikesh → Haridwar Day Trip</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Rishikesh</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Haridwar (20 km | 45 min)</li>
              <li>🕙 <b>10:00 AM</b> – Visit Har Ki Pauri (Ganga Aarti) 🙏</li>
              <li>🕛 <b>12:00 PM</b> – Mansa Devi & Chandi Devi Temples 🛕</li>
              <li>🕑 <b>02:00 PM</b> – Lunch at local restaurant 🍛</li>
              <li>🕓 <b>04:00 PM</b> – Explore local markets 🛍️</li>
              <li>🕖 <b>07:00 PM</b> – Return to Rishikesh, dinner 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏞️ Day 4: Rishikesh → Dehradun</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Dehradun</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Dehradun (45 km | 1.5 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Robber's Cave (Guchhupani) 🏞️</li>
              <li>🕛 <b>12:00 PM</b> – Sahastradhara Waterfalls 💦</li>
              <li>🕑 <b>02:00 PM</b> – Lunch at local restaurant 🍛</li>
              <li>🕓 <b>04:00 PM</b> – Forest Research Institute 🏛️</li>
              <li>🕖 <b>07:00 PM</b> – Explore Paltan Bazaar 🛍️</li>
              <li>🕗 <b>08:30 PM</b> – Dinner at hotel/café 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌄 Day 5: Dehradun → Mussoorie</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Mussoorie</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Mussoorie (35 km | 1.5 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Kempty Falls 💦</li>
              <li>🕛 <b>12:00 PM</b> – Gun Hill Point 🌄</li>
              <li>🕑 <b>02:00 PM</b> – Mall Road walk, shopping 🛍️</li>
              <li>🕓 <b>04:00 PM</b> – Camel's Back Road walk 🐪</li>
              <li>🕖 <b>07:00 PM</b> – Dinner at Café Ivy or hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌲 Day 6: Mussoorie → Dhanaulti & Eco Park</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Mussoorie</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Drive to Dhanaulti (25 km | 1 hr)</li>
              <li>🕙 <b>10:00 AM</b> – Visit Eco Park 🌲</li>
              <li>🕛 <b>12:00 PM</b> – Surkanda Devi Temple 🛕</li>
              <li>🕑 <b>02:00 PM</b> – Lunch at Dhanaulti café 🍛</li>
              <li>🕓 <b>04:00 PM</b> – Return to Mussoorie, relax</li>
              <li>🕖 <b>07:00 PM</b> – Dinner at hotel/café 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Departure from Mussoorie → Rishikesh/Delhi</h2>
            <p className="text-slate-400 mb-2">🕐 Drive: Mussoorie to Rishikesh – ~3.5 hrs | Rishikesh to Delhi – ~6 hrs</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Start drive back to Rishikesh/Delhi 🚙</li>
              <li>🕐 <b>04:00 PM</b> – Reach Rishikesh/Delhi ✈️</li>
            </ul>
          </div>

          <hr className="my-6 border-white/10" />

          {/* Travel Tips & Permits */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white drop-shadow-md mb-2">✅ Travel Tips & Permits</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🛂 Permits & Essentials:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Carry ID proof for all travelers</li>
                <li>Book adventure activities in advance (rafting, bungee, etc.)</li>
                <li>Check weather and road status, especially in hills</li>
                <li>Respect local customs at temples and ghats</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Pack light and comfortable clothes for adventure</li>
                <li>Carry cash, limited ATMs in hills 💵</li>
                <li>Mobile network is good in cities, patchy in hills 📵</li>
                <li>Try local food and street snacks</li>
                <li>Travel with a local guide for treks/adventures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Delhi/Rishikesh/Haridwar/Dehradun/Mussoorie/Dhanaulti/Rishikesh/Delhi/@30.3256,78.0322,9z/data=!4m38!4m37!1m5!1m1!1s0x390cfdc6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.2090!2d28.6139!1m5!1m1!1s0x39093e2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d78.2676!2d30.0869!1m5!1m1!1s0x39093e2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d78.1642!2d29.9457!1m5!1m1!1s0x39093e2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d78.0322!2d30.3256!1m5!1m1!1s0x39093e2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d78.0746!2d30.4599!1m5!1m1!1s0x39093e2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d78.2422!2d30.4367!1m5!1m1!1s0x39093e2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d78.2676!2d30.0869!1m5!1m1!1s0x390cfdc6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.2090!2d28.6139?entry=ttu"
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

export default Rishikesh; 