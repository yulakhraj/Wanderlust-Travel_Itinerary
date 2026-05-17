import React from 'react';

const Goa = () => (
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
            🌟 Goa Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: North Goa ➡️ Panaji ➡️ Old Goa ➡️ South Goa ➡️ Dudhsagar ➡️ North Goa</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 1: Arrival in Goa & North Goa Beaches</h2>
            <p className="text-slate-400 mb-2">📍 Base: North Goa</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕑 <b>02:00 PM</b> – Arrive in Goa, check-in at hotel/resort 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Visit Calangute, Baga, and Anjuna Beaches 🏖️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at beach shack 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌅 Day 2: North Goa Forts & Nightlife</h2>
            <p className="text-slate-400 mb-2">📍 Stay: North Goa</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Visit Aguada Fort & Chapora Fort 🏰</li>
              <li>🕑 <b>02:00 PM</b> – Explore Vagator & Morjim Beaches 🏖️</li>
              <li>🕓 <b>04:00 PM</b> – Café hopping & shopping in Anjuna 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Nightlife at Tito's Lane or Club Cubana 🎉</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏛️ Day 3: Panaji & Old Goa</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Panaji</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Drive to Panaji, visit Fontainhas (Latin Quarter) 🎨</li>
              <li>🕙 <b>11:00 AM</b> – River cruise on Mandovi River 🚢</li>
              <li>🕛 <b>01:00 PM</b> – Explore Old Goa: Basilica of Bom Jesus, Se Cathedral ⛪</li>
              <li>🕓 <b>04:00 PM</b> – Miramar Beach sunset 🌅</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at Panaji restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌴 Day 4: South Goa Beaches</h2>
            <p className="text-slate-400 mb-2">📍 Stay: South Goa</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Drive to South Goa</li>
              <li>🕙 <b>11:00 AM</b> – Visit Colva, Palolem, Agonda Beaches 🏖️</li>
              <li>🕛 <b>01:00 PM</b> – Cabo de Rama Fort 🏰</li>
              <li>🕓 <b>04:00 PM</b> – Relax at beach shack</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at Palolem beach café 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌊 Day 5: Dudhsagar Waterfalls & Spice Plantation</h2>
            <p className="text-slate-400 mb-2">📍 Stay: South Goa</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Excursion to Dudhsagar Waterfalls 🚙</li>
              <li>🕙 <b>11:00 AM</b> – Jeep safari & waterfall visit 💦</li>
              <li>🕛 <b>01:00 PM</b> – Visit Spice Plantation 🌿</li>
              <li>🕓 <b>04:00 PM</b> – Return to South Goa</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/resort 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚤 Day 6: Water Sports & Leisure</h2>
            <p className="text-slate-400 mb-2">📍 Stay: North or South Goa</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Water sports: Parasailing, Jet Ski, Banana Boat 🏄‍♂️</li>
              <li>🕙 <b>11:00 AM</b> – Dolphin spotting tour 🐬</li>
              <li>🕛 <b>01:00 PM</b> – Relax at beach or spa</li>
              <li>🕓 <b>04:00 PM</b> – Explore local markets 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at beach shack 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Departure from Goa</h2>
            <p className="text-slate-400 mb-2">🕐 Flight: Goa to Home City</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Last-minute shopping/sightseeing</li>
              <li>🕐 <b>12:00 PM</b> – Reach airport ✈️</li>
            </ul>
          </div>

          <hr className="my-6 border-white/10" />

          {/* Travel Tips & Permits */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white drop-shadow-md mb-2">✅ Travel Tips & Essentials</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">🛂 Essentials:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Carry ID proof for all travelers</li>
                <li>Book hotels and activities in advance during peak season</li>
                <li>Respect local customs at beaches and churches</li>
                <li>Follow beach safety guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Pack light, beachwear, and sunscreen 🧴</li>
                <li>Carry cash, limited ATMs in some areas 💵</li>
                <li>Mobile network is good in cities, patchy in remote beaches 📵</li>
                <li>Try Goan cuisine and seafood</li>
                <li>Travel with a local guide for spice plantation/waterfalls</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Goa/Calangute/Baga/Anjuna/Aguada+Fort/Chapora+Fort/Panaji/Old+Goa/Colva/Palolem/Dudhsagar+Falls/Goa/@15.2993,74.1240,9z/data=!4m38!4m37!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d74.1240!2d15.2993!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d73.7656!2d15.5439!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d73.7553!2d15.5520!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d73.7437!2d15.5873!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d73.7622!2d15.4926!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d73.8328!2d15.5007!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d73.8180!2d15.4909!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d73.8567!2d15.5036!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d74.3142!2d15.3146!1m5!1m1!1s0x3bbfba2e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d74.1240!2d15.2993?entry=ttu"
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

export default Goa;