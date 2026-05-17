import React from 'react';

const Andaman = () => (
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
            🌟 Andaman Islands Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Port Blair ➡️ Havelock ➡️ Neil Island ➡️ Ross Island ➡️ Port Blair</p>
          <hr className="my-6 border-white/10" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🚗 Day 1: Arrival in Port Blair & Local Sightseeing</h2>
            <p className="text-slate-400 mb-2">📍 Base: Port Blair</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕑 <b>02:00 PM</b> – Arrive in Port Blair, check-in at hotel 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Cellular Jail visit & Light & Sound Show 🏛️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at local restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏝️ Day 2: Port Blair → Havelock Island</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Havelock</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Ferry to Havelock Island ⛴️</li>
              <li>🕙 <b>10:00 AM</b> – Check-in at resort</li>
              <li>🕛 <b>12:00 PM</b> – Radhanagar Beach visit 🏖️</li>
              <li>🕓 <b>04:00 PM</b> – Water sports: Snorkeling, Scuba (optional)</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at beachside café 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌊 Day 3: Havelock Island Adventures</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Havelock</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Elephant Beach for water activities 🏄‍♂️</li>
              <li>🕙 <b>11:00 AM</b> – Kalapathar Beach visit</li>
              <li>🕛 <b>01:00 PM</b> – Lunch at local café</li>
              <li>🕓 <b>04:00 PM</b> – Leisure time, relax at resort</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/resort 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏝️ Day 4: Havelock → Neil Island</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Neil Island</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Ferry to Neil Island ⛴️</li>
              <li>🕙 <b>10:00 AM</b> – Check-in at hotel</li>
              <li>🕛 <b>12:00 PM</b> – Laxmanpur & Bharatpur Beaches 🏖️</li>
              <li>🕓 <b>04:00 PM</b> – Natural Bridge visit 🌉</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at local café 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🌅 Day 5: Neil Island → Port Blair</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Port Blair</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>08:00 AM</b> – Ferry to Port Blair ⛴️</li>
              <li>🕙 <b>10:00 AM</b> – Chidiya Tapu sunset point 🌅</li>
              <li>🕛 <b>12:00 PM</b> – Samudrika Marine Museum</li>
              <li>🕓 <b>04:00 PM</b> – Shopping at Aberdeen Bazaar 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">🏝️ Day 6: Ross Island & North Bay</h2>
            <p className="text-slate-400 mb-2">📍 Stay: Port Blair</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕗 <b>09:00 AM</b> – Ferry to Ross Island & North Bay ⛴️</li>
              <li>🕙 <b>11:00 AM</b> – Explore Ross Island ruins</li>
              <li>🕛 <b>01:00 PM</b> – Water sports at North Bay</li>
              <li>🕓 <b>04:00 PM</b> – Return to Port Blair</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2">👋 Day 7: Departure from Port Blair</h2>
            <p className="text-slate-400 mb-2">🕐 Flight: Port Blair to Home City</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Last-minute shopping/sightseeing</li>
              <li>🕐 <b>12:00 PM</b> – Reach airport ✈️</li>
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
                <li>Book ferries and hotels in advance during peak season</li>
                <li>Respect local customs and marine life</li>
                <li>Follow beach and water safety guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 drop-shadow-md">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-slate-300">
                <li>Pack light, beachwear, and sunscreen 🧴</li>
                <li>Carry cash, limited ATMs on islands 💵</li>
                <li>Mobile network is patchy on remote islands 📵</li>
                <li>Try Andaman seafood and local cuisine</li>
                <li>Travel with a local guide for water activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a
            href="https://www.google.com/maps/dir/Phuentsholing/Thimphu/Punakha/Phobjikha/Paro/Haa+Valley/Phuentsholing/@27.0982,89.5361,9z/data=!4m38!4m37!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.3967!2d26.8601!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.6419!2d27.4728!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.8766!2d27.5916!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d90.2146!2d27.4986!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.4125!2d27.4305!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.2806!2d27.3846!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.3967!2d26.8601?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 text-[#0B0F19] shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:bg-emerald-400 text-[#0B0F19] font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            📍 Click Here for Full Route Map (Not available for all islands)
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Andaman;