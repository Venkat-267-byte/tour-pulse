const attractions = [{"id": "charminar", "name": "Charminar", "category": "heritage", "type": "monument", "img": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Charminar_Hyderabad_2021.jpg", "desc": "Iconic 16th-century monument in the Old City.", "map": "https://www.google.com/maps/place/Charminar/", "hotels": [{"name": "Taj Falaknuma Palace", "type": "Hotel", "rating": "4.7", "link": "https://goo.gl/maps/fALwAmB9C1q"}, {"name": "Hotel Shadab", "type": "Restaurant", "rating": "4.1", "link": "https://goo.gl/maps/n87LKdSnYXC2"}]}, {"id": "golconda", "name": "Golconda Fort", "category": "heritage", "type": "fort", "img": "https://pixahive.com/wp-content/uploads/2020/09/Golkonda-Fort-80637-pixahive.jpg", "desc": "Massive hilltop fortress with panoramic views.", "map": "https://www.google.com/maps/place/Golconda+Fort/", "hotels": [{"name": "Hotel Minerva Grand", "type": "Hotel", "rating": "4.1", "link": "https://goo.gl/maps/T4JYJrN4xT72"}]}, {"id": "hussainsagar", "name": "Hussain Sagar", "category": "nature", "type": "lake", "img": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Buddha_statue_11102016.jpg", "desc": "Heart-shaped lake with monolithic Buddha statue.", "map": "https://www.google.com/maps/place/Hussain+Sagar/", "hotels": [{"name": "Novotel Hyderabad", "type": "Hotel", "rating": "4.4", "link": "https://goo.gl/maps/CfsrZQ4k8t82"}]}, {"id": "ramoji", "name": "Ramoji Film City", "category": "attraction", "type": "studio", "img": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Ramoji_Film_City.jpg", "desc": "World's largest film production complex and theme park.", "map": "https://www.google.com/maps/place/Ramoji+Film+City/", "hotels": [{"name": "Hotel Sitara", "type": "Hotel", "rating": "4.3", "link": "https://goo.gl/maps/ebUzF79tAH92"}]}, {"id": "birla", "name": "Birla Mandir", "category": "heritage", "type": "temple", "img": "https://www.telanganatoday.com/wp-content/uploads/2021/02/Birla-Mandir-Hyderabad.jpg", "desc": "Marble temple on a hill overlooking the city.", "map": "https://www.google.com/maps/place/Birla+Mandir/", "hotels": [{"name": "Taj Krishna", "type": "Hotel", "rating": "4.6", "link": "https://goo.gl/maps/ZNmvL2HqMUt"}]}, {"id": "salar", "name": "Salar Jung Museum", "category": "culture", "type": "museum", "img": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Salar_Jung_Museum_2012.jpg", "desc": "Extensive art collections and artifacts.", "map": "https://www.google.com/maps/place/Salar+Jung+Museum/", "hotels": [{"name": "Hotel Surya", "type": "Hotel", "rating": "4.0", "link": "https://goo.gl/maps/vbKmN3W4Z2n"}]}, {"id": "chowmahalla", "name": "Chowmahalla Palace", "category": "heritage", "type": "palace", "img": "https://upload.wikimedia.org/wikipedia/commons/8/87/Chowmahalla_Palace_-_Hyderabad.jpg", "desc": "Restored palace of the Nizams with beautiful courtyards.", "map": "https://www.google.com/maps/place/Chowmahalla+Palace/", "hotels": [{"name": "Taj Falaknuma Palace", "type": "Hotel", "rating": "4.7", "link": "https://goo.gl/maps/fALwAmB9C1q"}]}, {"id": "shilparamam", "name": "Shilparamam", "category": "culture", "type": "crafts", "img": "https://upload.wikimedia.org/wikipedia/commons/1/17/Shilparamam.jpg", "desc": "Arts & crafts village showcasing local artisans.", "map": "https://www.google.com/maps/place/Shilparamam/", "hotels": [{"name": "Marigold Hotel", "type": "Hotel", "rating": "4.0", "link": "https://goo.gl/maps/JyCAcUx3g7E2"}]}, {"id": "nehruzoo", "name": "Nehru Zoological Park", "category": "family", "type": "zoo", "img": "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/hyd-zoo-weekend-yaari.jpg", "desc": "Large zoo, great for families and kids.", "map": "https://www.google.com/maps/place/Nehru+Zoological+Park/", "hotels": [{"name": "Hotel Green Park", "type": "Hotel", "rating": "4.1", "link": "https://goo.gl/maps/Skmhxprvwzv"}]}, {"id": "mecca", "name": "Mecca Masjid", "category": "heritage", "type": "mosque", "img": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mecca_Masjid_Hyderabad.JPG", "desc": "Historic mosque near Charminar.", "map": "https://www.google.com/maps/place/Mecca+Masjid/", "hotels": [{"name": "Hotel Shadab", "type": "Hotel", "rating": "4.0", "link": "https://goo.gl/maps/n87LKdSnYXC2"}]}, {"id": "laad", "name": "Laad Bazaar", "category": "shopping", "type": "market", "img": "https://inditales.com/wp-content/uploads/2018/01/bangles-hyderabad.jpg", "desc": "Famous market for bangles, pearls and traditional items.", "map": "https://www.google.com/maps/place/Laad+Bazaar/", "hotels": [{"name": "Hotel Heera", "type": "Hotel", "rating": "3.9", "link": "https://goo.gl/maps/example"}]}, {"id": "purani", "name": "Purani Haveli", "category": "heritage", "type": "mansion", "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/68/ce/b7/filename-purani-1-jpg.jpg", "desc": "Heritage mansion with museums and exhibits.", "map": "https://www.google.com/maps/place/Purani+Haveli/", "hotels": [{"name": "Hotel Shadab", "type": "Hotel", "rating": "4.0", "link": "https://goo.gl/maps/n87LKdSnYXC2"}]}, {"id": "qutb", "name": "Qutb Shahi Tombs", "category": "heritage", "type": "tombs", "img": "https://upload.wikimedia.org/wikipedia/commons/0/08/Qutb_Shahi_Tomb_5.jpg", "desc": "Royal tomb complex with beautiful gardens.", "map": "https://www.google.com/maps/place/Qutb+Shahi+Tombs/", "hotels": [{"name": "Hotel Minerva Grand", "type": "Hotel", "rating": "4.1", "link": "https://goo.gl/maps/T4JYJrN4xT72"}]}, {"id": "necklace", "name": "Necklace Road & Tank Bund", "category": "nature", "type": "lakefront", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tank_bund%2Chyderabad%2CA.P_-_panoramio.jpg/2560px-Tank_bund%2Chyderabad%2CA.P_-_panoramio.jpg", "desc": "Lakeside promenade ideal for evening strolls.", "map": "https://www.google.com/maps/place/Necklace+Road/", "hotels": [{"name": "Novotel Hyderabad", "type": "Hotel", "rating": "4.4", "link": "https://goo.gl/maps/CfsrZQ4k8t82"}]}, {"id": "durgam", "name": "Durgam Cheruvu", "category": "offbeat", "type": "lake", "img": "https://blogs.tripzygo.in/wp-content/uploads/2025/03/durgam-cheruvu-cable-bridge-1-1024x683.jpg", "desc": "Secret lake with cable bridge and walking trails.", "map": "https://www.google.com/maps/place/Durgam+Cheruvu/", "hotels": [{"name": "Local homestays", "type": "Hotel", "rating": "4.0", "link": "https://goo.gl/maps/example"}]}, {"id": "paigah", "name": "Paigah Tombs", "category": "offbeat", "type": "heritage", "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Paigah_Tombs.jpg/330px-Paigah_Tombs.jpg", "desc": "Intricate Paigah noble tombs with beautiful stucco work.", "map": "https://www.google.com/maps/place/Paigah+Tombs/", "hotels": [{"name": "Nearby hotels", "type": "Hotel", "rating": "3.9", "link": "https://goo.gl/maps/example"}]}, {"id": "taramati", "name": "Taramati Baradari", "category": "offbeat", "type": "pavilion", "img": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Taramati-Baradari.jpg", "desc": "Historic pavilion for cultural shows and views.", "map": "https://www.google.com/maps/place/Taramati+Baradari/", "hotels": [{"name": "Local stays", "type": "Hotel", "rating": "4.0", "link": "https://goo.gl/maps/example"}]}, {"id": "shamirpet", "name": "Shamirpet Lake", "category": "offbeat", "type": "lake", "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/47/47/15/view-from-the-rocks.jpg", "desc": "Lakeside picnics, deer park and birdwatching.", "map": "https://www.google.com/maps/place/Shamirpet+Lake/", "hotels": [{"name": "Resorts near Shamirpet", "type": "Hotel", "rating": "4.2", "link": "https://goo.gl/maps/example"}]}, {"id": "bhongir", "name": "Bhongir Fort", "category": "offbeat", "type": "fort", "img": "https://media.assettype.com/outlooktraveller%2F2024-08-17%2Fr0ghovlw%2Fshutterstock_1366167857.jpg", "desc": "Hill-top fort with trekking routes and panoramic views.", "map": "https://www.google.com/maps/place/Bhongir+Fort/", "hotels": [{"name": "Homestays & lodges", "type": "Hotel", "rating": "4.0", "link": "https://goo.gl/maps/example"}]}];


function createCard(place){
  const div = document.createElement('div');
  div.className='card dest-card';
  div.id = place.id;
  div.innerHTML = `<img src="${place.img}" alt="${place.name}"><h4>${place.name}</h4><p>${place.desc}</p><div class="actions-row"><button class="btn-map" onclick="openMap('${place.map}')">📍 View on Maps</button><button class="btn-info" onclick="openInfo('${place.id}')">More Info</button></div><div class="hotel-list" id="hotels-${place.id}"></div>`;
  return div;
}

function renderDestinations(filter){
  const grid = document.getElementById('destGrid');
  const gridAll = document.getElementById('destGridAll');
  if(grid) grid.innerHTML='';
  if(gridAll) gridAll.innerHTML='';
  attractions.forEach(p=>{
    if(!filter || filterMatches(p, filter)){
      const c = createCard(p);
      if(grid) grid.appendChild(c);
      if(gridAll) gridAll.appendChild(createCard(p));
    }
  });
}

function filterMatches(place, q){
  if(!q) return true;
  q = q.toLowerCase();
  if(place.name.toLowerCase().includes(q)) return true;
  if(place.category && place.category.toLowerCase().includes(q)) return true;
  if(place.type && place.type.toLowerCase().includes(q)) return true;
  return false;
}

function filterPlaces(cat){
  renderDestinations(cat);
  document.getElementById('about-featured').scrollIntoView({behavior:'smooth'});
}

function openMap(url){ window.open(url,'_blank'); }

function openInfo(id){
  const place = attractions.find(a=>a.id===id);
  const modal = document.getElementById('infoModal');
  const body = document.getElementById('modalBody');
  let hotelsHtml = '';
  place.hotels.forEach(h=>{ hotelsHtml += `<div class="hotel-item"><div style="display:flex;gap:10px;align-items:center"><div class="icon-box">🏨</div><div><strong>${h.name}</strong><div style="font-size:13px;color:#666">${h.type}</div></div></div><div><span style="font-weight:700;color:var(--accent)">${h.rating}</span></div></div>`; });
  body.innerHTML = `<h3>${place.name}</h3><img src="${place.img}" style="width:100%;border-radius:8px;margin:10px 0"><p>${place.desc}</p><h4>Nearby hotels & food</h4>${hotelsHtml}<p style="margin-top:12px"><button class="btn-map" onclick="openMap('${place.map}')">📍 Open in Google Maps</button></p>`;
  modal.setAttribute('aria-hidden','false');
}

document.addEventListener('click', function(e){ if(e.target && e.target.classList.contains('modal-close')){ document.getElementById('infoModal').setAttribute('aria-hidden','true'); } });
document.addEventListener('DOMContentLoaded', function(){
  renderDestinations();
  const input = document.getElementById('placeSearch');
  const box = document.getElementById('suggestionsBox');
  if(input){
    input.addEventListener('input', function(){
      const val = this.value.trim().toLowerCase();
      if(!val){ box.style.display='none'; box.innerHTML=''; return; }
      const filtered = attractions.filter(a => a.name.toLowerCase().includes(val) || (a.category && a.category.toLowerCase().includes(val)) || (a.type && a.type.toLowerCase().includes(val)));
      if(filtered.length===0){ box.style.display='none'; box.innerHTML=''; return; }
      box.style.display='block'; box.innerHTML='';
      filtered.slice(0,6).forEach(f=>{ const d=document.createElement('div'); d.textContent=f.name; d.onclick=()=>{ location.href='#'+f.id; box.style.display='none'; setTimeout(()=>{ document.getElementById(f.id).scrollIntoView({behavior:'smooth'}); },200); }; box.appendChild(d); });
    });
  }
  const sb = document.getElementById('searchBtn');
  if(sb) sb.addEventListener('click', function(){ const q=document.getElementById('placeSearch').value.trim(); if(!q){ document.getElementById('about-featured').scrollIntoView({behavior:'smooth'}); return; } renderDestinations(q); document.getElementById('about-featured').scrollIntoView({behavior:'smooth'}); });
  const profile = document.getElementById('profileBtn');
  const auth = document.getElementById('authModal');
  const closeAuth = document.getElementById('closeAuth');
  if(profile) profile.addEventListener('click', ()=> auth.classList.add('show'));
  if(closeAuth) closeAuth.addEventListener('click', ()=> auth.classList.remove('show'));
  const closeInfoBtn = document.getElementById('closeInfo');
  if(closeInfoBtn) closeInfoBtn.addEventListener('click', ()=> document.getElementById('infoModal').setAttribute('aria-hidden','true'));
});
