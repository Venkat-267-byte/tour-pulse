import React, { useEffect, useState } from "react";

// Tour Pulse - Single-file React app
// Save as App.jsx in a React project (Vite / CRA) and ensure Tailwind is configured.
// Features implemented (based on the provided PDF):
// - Home, Places, Facilities, Reviews, Contact pages (single-file SPA)
// - Search for places, Featured destinations
// - Places list with photos, description, entry fee, timings, location map
// - Facilities list (hotels, transport, food, guides, emergency services)
// - Reviews with star rating saved to localStorage
// - Real-time Crowd Level indicator (simulated here; hook for live API)
// - Local Language Voice Guide using Web Speech Synthesis (supports en, hi, te)
// - Emergency Help button (shows nearest services and map links) with geolocation
// - Weather-based travel alert placeholder (hook to integrate weather API)

export default function App() {
  const initialPlaces = [
    {
      id: 1,
      name: "Heritage Fort",
      desc:
        "An ancient fort with panoramic views. Ideal for history lovers and photographers.",
      fee: "₹50",
      timings: "9:00 AM - 6:00 PM",
      coords: "17.3850,78.4867",
      img: "https://picsum.photos/seed/fort/800/500",
    },
    {
      id: 2,
      name: "Lakeside Gardens",
      desc: "A calm botanical garden beside a lake. Perfect for morning walks.",
      fee: "Free",
      timings: "6:00 AM - 7:00 PM",
      coords: "17.4070,78.4480",
      img: "https://picsum.photos/seed/garden/800/500",
    },
    {
      id: 3,
      name: "Cultural Museum",
      desc: "Exhibits showcasing local crafts, art and history.",
      fee: "₹120",
      timings: "10:00 AM - 5:30 PM (Closed Tuesday)",
      coords: "17.4100,78.4200",
      img: "https://picsum.photos/seed/museum/800/500",
    },
  ];

  const [page, setPage] = useState("home");
  const [places] = useState(initialPlaces);
  const [query, setQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [crowdLevel, setCrowdLevel] = useState({});
  const [lang, setLang] = useState("en");
  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tp_reviews")) || [];
    } catch (e) {
      return [];
    }
  });
  const [alert, setAlert] = useState(null);
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    // Simulate crowd level updates every 10s (replace with real API/websocket)
    const update = () => {
      const newLevels = {};
      places.forEach((p) => {
        const r = Math.random();
        newLevels[p.id] = r < 0.33 ? "low" : r < 0.66 ? "moderate" : "high";
      });
      setCrowdLevel(newLevels);
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, [places]);

  useEffect(() => {
    localStorage.setItem("tp_reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    // Placeholder weather alert logic - integrate with a weather API like OpenWeather
    // For demo: randomly create a heat/rain alert occasionally
    const r = Math.random();
    if (r > 0.9) setAlert({ type: "heatwave", message: "Heatwave warning — carry water" });
    else if (r < 0.05) setAlert({ type: "rain", message: "Heavy rain expected — check advisories" });
    else setAlert(null);
  }, []);

  const searchResults = places.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  function speakPlace(place) {
    if (!window.speechSynthesis) return alert("Speech synthesis not supported in this browser.");
    const text = `${place.name}. ${place.desc}. Entry fee ${place.fee}. Timings ${place.timings}. Nearby food options available.`;
    const utter = new SpeechSynthesisUtterance(text);
    // Map short codes for languages (en, hi, te)
    const langMap = { en: "en-IN", hi: "hi-IN", te: "te-IN" };
    utter.lang = langMap[lang] || "en-IN";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  function addReview(placeId, name, rating, comment) {
    const r = { id: Date.now(), placeId, name, rating, comment, date: new Date().toISOString() };
    setReviews((s) => [r, ...s]);
    setPage("reviews");
  }

  async function showEmergency() {
    // Use geolocation to get user's coords, then build Google Maps searches for nearest services
    if (!navigator.geolocation) {
      return setGeo({ error: "Geolocation not supported" });
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setGeo({ latitude, longitude });
      },
      (err) => setGeo({ error: err.message })
    );
  }

  // Basic UI
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-4">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Tour Pulse</h1>
        <nav className="space-x-3">
          <button onClick={() => setPage("home")} className="btn">Home</button>
          <button onClick={() => setPage("places")} className="btn">Places</button>
          <button onClick={() => setPage("facilities")} className="btn">Facilities</button>
          <button onClick={() => setPage("reviews")} className="btn">Reviews</button>
          <button onClick={() => setPage("contact")} className="btn">Contact</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto mt-6">
        {page === "home" && (
          <section>
            <div className="rounded-lg overflow-hidden shadow p-6 bg-white">
              <h2 className="text-xl font-semibold mb-2">Welcome to Tour Pulse</h2>
              <p className="mb-4">Plan safer, smarter trips — crowd levels, local voice guides, emergency help and weather alerts.</p>

              <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex-1">
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search places" className="w-full p-3 rounded border" />
                  <div className="mt-3 grid grid-cols-1 gap-3">
                    {searchResults.map((p) => (
                      <article key={p.id} className="p-3 border rounded flex items-center gap-3">
                        <img src={p.img} alt="" className="w-28 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <strong>{p.name}</strong>
                          <div className="text-sm">{p.desc}</div>
                          <div className="text-xs mt-1">{p.timings} • {p.fee}</div>
                        </div>
                        <div className="text-sm">
                          <div className="mb-1">Crowd: <span className={`px-2 py-1 rounded ${crowdLevel[p.id]==='low'? 'bg-green-100' : crowdLevel[p.id]==='moderate'? 'bg-yellow-100' : 'bg-red-100'}`}>{crowdLevel[p.id]}</span></div>
                          <button className="btn-sm" onClick={() => { setSelectedPlace(p); setPage('places'); }}>View</button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-80">
                  <div className="p-4 bg-white rounded shadow">
                    <h3 className="font-semibold">Featured Destination</h3>
                    <img src={places[0].img} className="w-full h-40 object-cover rounded mt-2" alt="" />
                    <p className="mt-2">{places[0].name} — {places[0].desc}</p>
                    <div className="mt-2 flex gap-2">
                      <button onClick={() => speakPlace(places[0])} className="btn-sm">Play voice guide</button>
                      <select value={lang} onChange={(e) => setLang(e.target.value)} className="p-2 border rounded">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="te">Telugu</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-white rounded shadow">
                    <h4 className="font-semibold">Weather Alerts</h4>
                    {alert ? <div className="mt-2 text-sm">{alert.message}</div> : <div className="mt-2 text-sm">No alerts right now.</div>}
                    <small className="block mt-2 text-xs text-gray-500">(Weather alerts are placeholders — connect to a weather API for live alerts.)</small>
                  </div>

                  <div className="mt-4 p-4 bg-white rounded shadow">
                    <h4 className="font-semibold">Emergency Help</h4>
                    <p className="text-sm mt-2">Tap the button to locate nearby emergency services and view helpline numbers.</p>
                    <div className="mt-3 flex gap-2">
                      <button onClick={showEmergency} className="btn-sm">Find Nearby</button>
                      <a className="btn-sm" href="tel:112">Call 112</a>
                    </div>
                    {geo && (
                      <div className="mt-2 text-xs">
                        {geo.error ? (
                          <div className="text-red-600">{geo.error}</div>
                        ) : (
                          <div>
                            Your coordinates: {geo.latitude}, {geo.longitude}
                            <div className="mt-1">
                              <a className="underline text-sm" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/hospital/@${geo.latitude},${geo.longitude},14z`}>Nearest hospitals</a>
                              <br />
                              <a className="underline text-sm" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/police+station/@${geo.latitude},${geo.longitude},14z`}>Nearest police stations</a>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "places" && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Places</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {(selectedPlace ? [selectedPlace] : places).map((p) => (
                <article key={p.id} className="bg-white p-4 rounded shadow">
                  <img src={p.img} alt="" className="w-full h-48 object-cover rounded" />
                  <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm mt-1">{p.desc}</p>
                  <div className="mt-2 text-xs">Entry fee: {p.fee} • Timings: {p.timings}</div>
                  <div className="mt-3 flex gap-2 items-center">
                    <span> Crowd: <strong className="ml-1">{crowdLevel[p.id]}</strong></span>
                    <button className="btn-sm" onClick={() => speakPlace(p)}>Play Guide</button>
                    <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${p.coords}`} className="btn-sm">Open Map</a>
                    <a href={`#review-form-${p.id}`} onClick={() => setPage('reviews')} className="text-sm underline">Write review</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "facilities" && (
          <section>
            <h2 className="text-xl font-semibold">Facilities</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold">Hotels</h4>
                <ul className="mt-2 text-sm space-y-1">
                  <li>Grand Hotel — 4★ — Booking link</li>
                  <li>Budget Inn — 2★ — Booking link</li>
                  <li>Lakeview Resort — 3★ — Booking link</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold">Transport</h4>
                <p className="mt-2 text-sm">Bus, taxi, and app-based cabs available. Regional transport details and ticket links can be added here.</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold">Food & Restaurants</h4>
                <p className="mt-2 text-sm">List of recommended food spots and local specialties.</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold">Guides</h4>
                <p className="mt-2 text-sm">Contact local licensed guides. Display availability and rates.</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h4 className="font-semibold">Emergency Services</h4>
                <p className="mt-2 text-sm">Police: 100 · Ambulance: 102 · Fire: 101 · Tourist helpline: 1363</p>
              </div>
            </div>
          </section>
        )}

        {page === "reviews" && (
          <section>
            <h2 className="text-xl font-semibold">Reviews</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Submit a Review</h3>
                <ReviewForm places={places} onSubmit={addReview} />
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Latest Reviews</h3>
                <div className="mt-2 space-y-3">
                  {reviews.length === 0 && <div className="text-sm">No reviews yet.</div>}
                  {reviews.map((r) => {
                    const place = places.find((p) => p.id === r.placeId) || { name: "Unknown" };
                    return (
                      <div key={r.id} className="p-2 border rounded">
                        <div className="text-sm font-semibold">{r.name} — <small className="font-normal">{place.name}</small></div>
                        <div className="text-xs">Rating: {r.rating} / 5</div>
                        <div className="mt-1 text-sm">{r.comment}</div>
                        <div className="text-xs text-gray-500 mt-1">{new Date(r.date).toLocaleString()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "contact" && (
          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="mt-4 bg-white p-4 rounded shadow">
              <p>Email: contact@tourpulse.example</p>
              <p>Social: @TourPulse</p>
              <p className="mt-2">Use the form below for queries.</p>
              <form className="mt-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will respond'); }}>
                <input className="w-full border p-2 rounded mb-2" placeholder="Your email" />
                <textarea className="w-full border p-2 rounded mb-2" placeholder="Your query" />
                <button className="btn-sm" type="submit">Send</button>
              </form>
            </div>
          </section>
        )}

        <footer className="mt-8 text-center text-xs text-gray-500">Tour Pulse · Demo site · Replace placeholder data with live APIs for production</footer>
      </main>

      <style>{`
        .btn{ padding:8px 12px;border-radius:8px;border:1px solid #ddd;background:#fff}
        .btn-sm{ padding:6px 10px;border-radius:6px;border:1px solid #ddd;background:#fff;font-size:12px}
      `}</style>
    </div>
  );
}

function ReviewForm({ places, onSubmit }) {
  const [placeId, setPlaceId] = useState(places[0]?.id || 0);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(placeId, name || 'Anonymous', rating, comment); setName(''); setComment(''); }}>
      <label className="block text-sm">Place</label>
      <select className="w-full border p-2 rounded mb-2" value={placeId} onChange={(e) => setPlaceId(Number(e.target.value))}>
        {places.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <label className="block text-sm">Your name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded mb-2" />
      <label className="block text-sm">Rating</label>
      <input type="range" min="1" max="5" value={rating} onChange={(e) => setRating(Number(e.target.value))} className="w-full mb-2" />
      <div className="text-sm mb-2">{rating} / 5</div>
      <label className="block text-sm">Comment</label>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full border p-2 rounded mb-2" />
      <button className="btn-sm" type="submit">Submit Review</button>
    </form>
  );
}
