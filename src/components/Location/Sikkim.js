import React from 'react';

const Sikkim = () => (
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
            🌟 Sikkim Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Gangtok ➡️ North Sikkim ➡️ South Sikkim ➡️ Gangtok</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 1: Arrival & Exploring East Sikkim (Gangtok)</h2>
            <p className="text-slate-400 mb-2">📍 Base: Gangtok</p>
            <p className="text-slate-400 mb-2">🕐 Driving Duration: Bagdogra/NJP to Gangtok – ~4.5 hrs</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Arrive at Bagdogra Airport ✈️ / NJP Railway Station 🚉</li>
              <li>🕘 <b>09:00 AM</b> – Pick up rental car/self-drive 🚗</li>
              <li>🕤 <b>09:30 AM</b> – Start drive to Gangtok via NH10 🛣️</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at hotel 🏨</li>
              <li>🕞 <b>03:30 PM</b> – Visit:
                <ul className="list-disc ml-8">
                  <li>MG Marg 🛍️</li>
                  <li>Ropeway Ride 🚡</li>
                  <li>Tashi View Point 🌄</li>
                </ul>
              </li>
              <li>🕢 <b>07:30 PM</b> – Dinner at The Coffee Shop or Taste of Tibet 🍜🍖</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🍽️ Meals:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Breakfast: En route (Teesta Bazaar has roadside dhabas) ☕🥪</li>
                <li>Lunch: Upon arrival in Gangtok 🍛</li>
                <li>Dinner: MG Marg area 🌃</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">❄️ Day 2: Gangtok → Lachen (North Sikkim Begins!)</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Lachen</p>
            <p className="text-slate-400 mb-2">🕐 Driving Duration: ~6-7 hrs (120 km)</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕖 <b>07:00 AM</b> – Start early from Gangtok</li>
              <li>📸 <b>En route stops:</b>
                <ul className="list-disc ml-8">
                  <li>Singhik Viewpoint 🌲</li>
                  <li>Seven Sisters Waterfall 💦</li>
                  <li>Naga Waterfall 🌊</li>
                </ul>
              </li>
              <li>🕑 <b>02:00 PM</b> – Reach Lachen, check-in 🏠</li>
              <li>🕓 <b>04:00 PM</b> – Explore local village 🏘️, relax with mountain views 🌄</li>
              <li>🕖 <b>07:00 PM</b> – Dinner at homestay 🍲</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🍽️ Meals:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Breakfast: Hotel in Gangtok ☕🍳</li>
                <li>Lunch: Mangan or en route 🍱</li>
                <li>Dinner: Homestay cooked meal 🫕</li>
              </ul>
            </div>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏔️ Day 3: Gurudongmar Lake → Lachung</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Lachung</p>
            <p className="text-slate-400 mb-2">🕐 Drive: 4 hrs to Gurudongmar + 3 hrs to Lachung</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕓 <b>04:00 AM</b> – Depart for Gurudongmar Lake (17,800 ft) 🏔️❄️</li>
              <li>🕘 <b>09:00 AM</b> – Reach lake, explore, photos 📸</li>
              <li>🕦 <b>11:30 AM</b> – Return to Lachen, brunch 🍳</li>
              <li>🕐 <b>01:00 PM</b> – Drive to Lachung 🛣️</li>
              <li>🕓 <b>04:00 PM</b> – Check-in at Lachung homestay 🏡</li>
              <li>🕠 <b>05:30 PM</b> – Walk to nearby village viewpoints 🌅</li>
              <li>🕖 <b>07:00 PM</b> – Dinner and rest 🍲😴</li>
            </ul>
            <p className="text-sm italic mt-2">📌 Note: High altitude – carry Diamox and warm clothes 🧥🧤</p>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌺 Day 4: Yumthang Valley & Zero Point → Gangtok</h2>
            <p className="text-slate-400 mb-2">📍 Return to Gangtok</p>
            <p className="text-slate-400 mb-2">🕐 Drive: 2 hrs to Yumthang + 6 hrs to Gangtok</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕕 <b>06:00 AM</b> – Drive to Yumthang Valley 🌸 (Valley of Flowers)</li>
              <li>🕗 <b>08:00 AM</b> – Continue to Zero Point ❄️</li>
              <li>🕦 <b>11:30 AM</b> – Return to Lachung, lunch 🍛</li>
              <li>🕐 <b>01:00 PM</b> – Drive back to Gangtok</li>
              <li>🕖 <b>07:00 PM</b> – Arrive Gangtok, hotel check-in 🛏️</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🍽️ Meals:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Breakfast: Packed or at Lachung 🧺</li>
                <li>Lunch: Lachung 🥘</li>
                <li>Dinner: Gangtok 🍽️</li>
              </ul>
            </div>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🕉️ Day 5: Gangtok → Namchi (South Sikkim)</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Namchi</p>
            <p className="text-slate-400 mb-2">🕐 Drive: ~3.5 hrs (80 km)</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Breakfast & check out from Gangtok ☕🍽️</li>
              <li>🕘 <b>09:00 AM</b> – Drive towards Namchi 🚗</li>
              <li>📸 <b>Visit en route:</b>
                <ul className="list-disc ml-8">
                  <li>Samdruptse Statue 🗿</li>
                  <li>Siddhesvara Dham (Char Dham) 🛕</li>
                </ul>
              </li>
              <li>🕑 <b>02:00 PM</b> – Check-in hotel, lunch 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Explore Namchi town or Rock Garden 🪨🌳</li>
              <li>🕢 <b>07:30 PM</b> – Dinner 🍛</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌿 Day 6: Namchi → Ravangla → Temi Tea Garden → Gangtok</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Gangtok</p>
            <p className="text-slate-400 mb-2">🕐 Drive: 4.5 hrs loop</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Depart for Ravangla 🛻</li>
              <li>📸 <b>Visit:</b>
                <ul className="list-disc ml-8">
                  <li>Buddha Park 🧘‍♂️</li>
                  <li>Temi Tea Garden 🍃🍵</li>
                </ul>
              </li>
              <li>🕐 <b>01:00 PM</b> – Lunch at Temi Garden Café 🥗</li>
              <li>🕑 <b>02:00 PM</b> – Return drive to Gangtok</li>
              <li>🕕 <b>06:00 PM</b> – Shopping at MG Marg 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Last dinner in Sikkim 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Departure from Gangtok → Bagdogra/NJP</h2>
            <p className="text-slate-400 mb-2">🕐 Drive: ~4.5 hrs</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕢 <b>07:30 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>08:30 AM</b> – Start drive back to NJP/Bagdogra 🚙</li>
              <li>🕐 <b>01:00 PM</b> – Reach station/airport ✈️</li>
            </ul>
          </div>

          <hr className="my-6 border-white/10" />

          {/* Travel Tips & Permits */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white drop-shadow-md mb-2">✅ Travel Tips & Permits</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🛂 Permit Requirements:</h3>
              <p className="text-slate-400 mb-2">North Sikkim (Lachen/Lachung/Gurudongmar/Yumthang):</p>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Protected Area Permit (PAP) needed 🎫</li>
                <li>Can be arranged via local tour operators or hotel</li>
                <li>Carry 2 passport-size photos + photo ID copy</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">Vehicle Rules:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Private vehicles allowed (prefer 4x4 or SUV) 🚙</li>
                <li>No self-drive allowed beyond Chungthang unless Sikkim-registered</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Always carry cash, limited ATMs in North Sikkim 💵</li>
                <li>Mobile network limited (only BSNL/limited Jio in North) 📵</li>
                <li>Pack warm clothes, especially for North ❄️🧣</li>
                <li>Acclimatize well before Gurudongmar/Yumthang 🚑</li>
                <li>Travel with a local guide or convoy for North 🧭</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Bagdogra,+West+Bengal/Gangtok,+Sikkim/Lachen,+Sikkim+737120/Gurudongmar+Lake,+Sikkim+737120/Lachung,+Sikkim+737120/Yumthang,+Sikkim+737120/Namchi,+Sikkim/Ravangla,+Sikkim+737139/Temi,+Sikkim+737139/Gangtok,+Sikkim/Bagdogra,+West+Bengal/@27.4074854,87.7804758,8.75z/data=!4m67!4m66!1m5!1m1!1s0x39e448aef55b9193:0x80eca85391664b91!2m2!1d88.3116995!2d26.6986114!1m5!1m1!1s0x39e6a56a5805eafb:0x73d6132c501c8f20!2m2!1d88.6138113!2d27.3313512!1m5!1m1!1s0x39e6dcac5ae61bff:0x9ee8cb94b7e7964a!2m2!1d88.5490077!2d27.731939!1m5!1m1!1s0x39e72ea79dc68255:0xdb4bc055a7028131!2m2!1d88.7096926!2d28.0257555!1m5!1m1!1s0x39e6cdb01406c43d:0xf34a0c13f69785b9!2m2!1d88.7395043!2d27.6882817!1m5!1m1!1s0x39e6d6b31b80f707:0x1eabb09edbb663ae!2m2!1d88.6958087!2d27.8267952!1m5!1m1!1s0x39e69d624d708523:0xb3323b3552ba902e!2m2!1d88.3619334!2d27.1666353!1m5!1m1!1s0x39e69a553ba6d103:0xd34d926efd10de65!2m2!1d88.3639986!2d27.3065811!1m5!1m1!1s0x39e69ec397f397a9:0x1a9ee0cd6d6c80c3!2m2!1d88.427643!2d27.2398!1m5!1m1!1s0x39e6a56a5805eafb:0x73d6132c501c8f20!2m2!1d88.6138113!2d27.3313512!1m5!1m1!1s0x39e448aef55b9193:0x80eca85391664b91!2m2!1d88.3116995!2d26.6986114?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
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

export default Sikkim; 