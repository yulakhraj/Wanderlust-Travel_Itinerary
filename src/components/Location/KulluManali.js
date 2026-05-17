import React from 'react';

const KulluManali = () => (
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
            🌟 Kullu & Manali Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Kullu ➡️ Manali ➡️ Solang Valley ➡️ Rohtang Pass ➡️ Naggar ➡️ Kullu</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 1: Arrival & Exploring Kullu</h2>
            <p className="text-slate-400 mb-2">📍 Base: Kullu</p>
            <p className="text-slate-400 mb-2">🕐 Driving Duration: Chandigarh to Kullu – ~7 hrs</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Arrive at Chandigarh Airport ✈️ / Railway Station 🚉</li>
              <li>🕘 <b>09:00 AM</b> – Pick up rental car/self-drive 🚗</li>
              <li>🕤 <b>09:30 AM</b> – Start drive to Kullu via NH3 🛣️</li>
              <li>🕑 <b>04:00 PM</b> – Check-in at hotel 🏨</li>
              <li>🕞 <b>05:00 PM</b> – Visit:
                <ul className="list-disc ml-8">
                  <li>Kullu Market 🛍️</li>
                  <li>Raghunath Temple 🛕</li>
                  <li>River Rafting on Beas River 🚣‍♂️</li>
                </ul>
              </li>
              <li>🕢 <b>08:00 PM</b> – Dinner at local dhaba 🍜🍖</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🍽️ Meals:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Breakfast: En route (roadside dhabas) ☕🥪</li>
                <li>Lunch: Upon arrival in Kullu 🍛</li>
                <li>Dinner: Kullu Market area 🌃</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">❄️ Day 2: Kullu → Manali</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Manali</p>
            <p className="text-slate-400 mb-2">🕐 Driving Duration: ~2 hrs (40 km)</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕖 <b>08:00 AM</b> – Start from Kullu</li>
              <li>📸 <b>En route stops:</b>
                <ul className="list-disc ml-8">
                  <li>Vaishno Devi Temple 🛕</li>
                  <li>Parvati Valley Viewpoint 🌲</li>
                  <li>Kasol Village 🌄</li>
                </ul>
              </li>
              <li>🕑 <b>11:00 AM</b> – Reach Manali, check-in 🏠</li>
              <li>🕓 <b>01:00 PM</b> – Explore Old Manali, cafes, and Mall Road 🛍️</li>
              <li>🕖 <b>08:00 PM</b> – Dinner at Johnson's Cafe 🍲</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🍽️ Meals:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Breakfast: Hotel in Kullu ☕🍳</li>
                <li>Lunch: Manali Cafe 🍱</li>
                <li>Dinner: Johnson's Cafe 🫕</li>
              </ul>
            </div>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏔️ Day 3: Manali Local Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Manali</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Visit Hadimba Temple 🛕</li>
              <li>🕙 <b>10:30 AM</b> – Manu Temple 🛕</li>
              <li>🕛 <b>12:00 PM</b> – Vashisht Hot Springs ♨️</li>
              <li>🕑 <b>02:00 PM</b> – Tibetan Monastery 🕍</li>
              <li>🕓 <b>04:00 PM</b> – Van Vihar Park 🌳</li>
              <li>🕖 <b>07:00 PM</b> – Explore Mall Road, shopping & cafes 🛍️</li>
              <li>🕗 <b>08:30 PM</b> – Dinner at local restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌄 Day 4: Manali → Solang Valley & Rohtang Pass</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Manali</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>07:00 AM</b> – Depart for Solang Valley</li>
              <li>🕙 <b>10:00 AM</b> – Adventure activities: Paragliding, Zorbing, Skiing (seasonal) 🪂⛷️</li>
              <li>🕛 <b>12:00 PM</b> – Head to Rohtang Pass (permit required) 🏔️</li>
              <li>🕑 <b>02:00 PM</b> – Enjoy snow, photography, and views ❄️📸</li>
              <li>🕓 <b>04:00 PM</b> – Return to Manali</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/restaurant 🍽️</li>
            </ul>
            <p className="text-sm italic mt-2">📌 Note: Rohtang Pass requires a permit. Check weather and road status in advance.</p>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏞️ Day 5: Manali → Naggar & Art Exploration</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Manali</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Drive to Naggar</li>
              <li>🕙 <b>10:00 AM</b> – Visit Naggar Castle 🏰</li>
              <li>🕛 <b>12:00 PM</b> – Roerich Art Gallery 🖼️</li>
              <li>🕑 <b>02:00 PM</b> – Gauri Shankar Temple 🛕</li>
              <li>🕓 <b>04:00 PM</b> – Riverside picnic or café</li>
              <li>🕗 <b>08:00 PM</b> – Return to Manali, dinner 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌿 Day 6: Manali → Kullu & Local Experiences</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Kullu</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Drive to Kullu</li>
              <li>🕙 <b>10:00 AM</b> – Visit Great Himalayan National Park 🏞️</li>
              <li>🕛 <b>12:00 PM</b> – Shawl Weaving Factory 🧣</li>
              <li>🕑 <b>02:00 PM</b> – Bijli Mahadev Temple 🛕</li>
              <li>🕓 <b>04:00 PM</b> – Explore local markets</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Departure from Kullu</h2>
            <p className="text-slate-400 mb-2">🕐 Drive: ~7 hrs to Chandigarh</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Start drive back to Chandigarh 🚙</li>
              <li>🕐 <b>04:00 PM</b> – Reach station/airport ✈️</li>
            </ul>
          </div>

          <hr className="my-6 border-white/10" />

          {/* Travel Tips & Permits */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white drop-shadow-md mb-2">✅ Travel Tips & Permits</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🛂 Permit Requirements:</h3>
              <p className="text-slate-400 mb-2">Rohtang Pass requires a permit (apply online in advance).</p>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Carry ID proof and vehicle documents</li>
                <li>Check weather and road status before travel</li>
                <li>Permits available at: <a href="https://rohtangpermits.nic.in/" className="text-emerald-400 drop-shadow-md underline" target="_blank" rel="noopener noreferrer">Rohtang Permit Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Pack warm clothes, especially for Rohtang & Solang ❄️🧣</li>
                <li>Carry cash, limited ATMs in hills 💵</li>
                <li>Mobile network may be patchy in remote areas 📵</li>
                <li>Book hotels and permits in advance during peak season</li>
                <li>Travel with a local guide for adventure activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Chandigarh/Kullu/Manali/Solang+Valley/Rohtang+Pass/Naggar/Kullu/Chandigarh/@31.9576,76.9642,9z/data=!4m38!4m37!1m5!1m1!1s0x390af4e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d76.7794!2d30.7333!1m5!1m1!1s0x3904e2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.1198!2d31.9576!1m5!1m1!1s0x3904e2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.1734!2d32.2432!1m5!1m1!1s0x3904e2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.1566!2d32.3182!1m5!1m1!1s0x3904e2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.2486!2d32.3642!1m5!1m1!1s0x3904e2e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d77.1198!2d31.9576!1m5!1m1!1s0x390af4e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d76.7794!2d30.7333?entry=ttu"
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

export default KulluManali; 