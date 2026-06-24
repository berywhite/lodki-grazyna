// ============================================================
// ECO CAMP – Admin Panel Logic
// ============================================================

const ADMIN_PIN_DEFAULT = '1234';

let adminSession = false;
let currentAdminTab = 'oferta';
let db = null;
let dbConnected = false;

// ---------- Supabase init ----------
function initDB() {
  if (
    typeof SUPABASE_URL === 'undefined' ||
    SUPABASE_URL === 'YOUR_SUPABASE_URL_HERE'
  ) {
    dbConnected = false;
    return false;
  }

  try {
    // Handle both UMD export patterns
    const createClient = (typeof supabase !== 'undefined' && supabase.createClient)
      ? supabase.createClient
      : (window.supabase?.createClient || null);

    if (!createClient) {
      console.warn('Supabase JS not loaded');
      dbConnected = false;
      return false;
    }

    db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    dbConnected = true;
    return true;
  } catch (err) {
    console.error('Supabase init error:', err);
    dbConnected = false;
    return false;
  }
}

// ---------- Auth ----------
function getStoredPin() {
  return localStorage.getItem('ecocamp_admin_pin') || ADMIN_PIN_DEFAULT;
}

function checkPin(pin) {
  if (pin === getStoredPin()) {
    sessionStorage.setItem('ecocamp_admin', '1');
    adminSession = true;
    showDashboard();
  } else {
    const display = document.getElementById('pin-display');
    display.classList.add('shake');
    document.getElementById('pin-dots').querySelectorAll('.dot').forEach(d => d.classList.remove('filled'));
    pinBuffer = '';
    setTimeout(() => display.classList.remove('shake'), 500);
  }
}

function logout() {
  sessionStorage.removeItem('ecocamp_admin');
  adminSession = false;
  pinBuffer = '';
  showLoginScreen();
}

// ---------- PIN Keypad ----------
let pinBuffer = '';

function renderLoginScreen() {
  const root = document.getElementById('admin-root');
  root.innerHTML = `
    <div class="admin-login-screen">
      <div class="pin-card">
        <div class="pin-logo">🌿 ECO CAMP</div>
        <h1 class="pin-title">Panel Administratora</h1>
        <p class="pin-subtitle">Wprowadź PIN aby kontynuować</p>
        <div id="pin-display" class="pin-display">
          <div class="pin-dots" id="pin-dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
        <div class="pin-keypad">
          ${[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map(k => `
            <button class="pin-key${k==='' ? ' invisible' : ''}" onclick="handlePinKey('${k}')">${k}</button>
          `).join('')}
        </div>
        <p class="pin-hint">${dbConnected ? '🟢 Połączono z bazą danych' : '🔴 Brak połączenia z Supabase – tryb offline'}</p>
      </div>
    </div>
  `;
}

function handlePinKey(key) {
  if (key === '⌫') {
    pinBuffer = pinBuffer.slice(0, -1);
  } else if (key === '') {
    return;
  } else {
    if (pinBuffer.length >= 4) return;
    pinBuffer += key;
  }
  updateDots();
  if (pinBuffer.length === 4) {
    setTimeout(() => checkPin(pinBuffer), 200);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('#pin-dots .dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('filled', i < pinBuffer.length);
  });
}

function showLoginScreen() {
  renderLoginScreen();
}

// ---------- Dashboard ----------
function showDashboard() {
  const root = document.getElementById('admin-root');
  root.innerHTML = `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-logo">🌿 ECO CAMP</div>
        <nav class="sidebar-nav">
          <a href="#" class="active" data-tab="oferta" onclick="switchTab('oferta',this);return false;">
            <span class="nav-icon">📦</span> Oferta
          </a>
          <a href="#" data-tab="rezerwacje" onclick="switchTab('rezerwacje',this);return false;">
            <span class="nav-icon">📋</span> Rezerwacje
            <span class="nav-badge" id="badge-new">0</span>
          </a>
          <a href="#" data-tab="faq" onclick="switchTab('faq',this);return false;">
            <span class="nav-icon">❓</span> FAQ
          </a>
          <a href="#" data-tab="aktualnosci" onclick="switchTab('aktualnosci',this);return false;">
            <span class="nav-icon">📰</span> Aktualności
          </a>
        </nav>
        <div class="sidebar-footer">
          <a href="index.html" class="sidebar-link" target="_blank">← Strona główna</a>
          <button class="admin-btn admin-btn-ghost" onclick="logout()">Wyloguj</button>
        </div>
      </aside>
      <main class="admin-main">
        <div class="admin-topbar">
          <h2 id="tab-title">Oferta</h2>
          <span class="db-status ${dbConnected ? 'connected' : 'offline'}">${dbConnected ? '🟢 Supabase' : '🔴 Offline'}</span>
        </div>
        <div id="admin-content" class="admin-tab-content"></div>
      </main>
    </div>
  `;
  switchTab('oferta', document.querySelector('[data-tab="oferta"]'));
  loadNewReservationsBadge();
}

function switchTab(tab, el) {
  currentAdminTab = tab;
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  if (el) el.classList.add('active');
  const titles = { oferta: 'Zarządzanie Ofertą', rezerwacje: 'Rezerwacje', faq: 'FAQ', aktualnosci: 'Aktualności' };
  document.getElementById('tab-title').textContent = titles[tab] || tab;
  const content = document.getElementById('admin-content');
  content.innerHTML = `<div class="loading-spinner">Ładowanie…</div>`;
  if (tab === 'oferta') loadOferta();
  else if (tab === 'rezerwacje') loadRezerwacje();
  else if (tab === 'faq') loadFaq();
  else if (tab === 'aktualnosci') loadAktualnosci();
}

// ============================================================
// TAB: OFERTA
// ============================================================

let adminProducts = [];

async function loadOferta() {
  try {
    if (dbConnected) {
      const { data, error } = await db.from('products').select('*').order('sort_order');
      if (!error && data && data.length > 0) {
        adminProducts = data.map(dbRowToProduct);
      } else {
        adminProducts = getDefaultProducts();
      }
    } else {
      adminProducts = getDefaultProducts();
    }
  } catch (err) {
    console.error('loadOferta error:', err);
    adminProducts = getDefaultProducts();
  }
  renderOferta();
}

function dbRowToProduct(row) {
  return {
    _dbId: row.id,
    id: row.id,
    type: row.type,
    title: { pl: row.title_pl || '', en: row.title_en || '' },
    short: { pl: row.short_pl || '', en: row.short_en || '' },
    description: { pl: row.desc_pl || '', en: row.desc_en || '' },
    priceLow: row.price_low,
    priceHigh: row.price_high,
    specs: { pl: row.specs_pl || [], en: row.specs_en || [] },
    image: row.image || 'assets/caravan_1.jpg',
    active: row.active !== false,
    sort_order: row.sort_order || 0,
  };
}

function getDefaultProducts() {
  // Returns the hardcoded defaults from the main app (copy minimal set)
  return [
    { id: 'camper-classic-1', type: 'camper', title: { pl: 'Przyczepa Classic 1', en: 'Classic Caravan 1' }, short: { pl: 'do uzupełnienia', en: 'to be completed' }, description: { pl: '', en: '' }, priceLow: null, priceHigh: null, specs: { pl: [], en: [] }, image: 'assets/caravan_1.jpg', active: true, sort_order: 0 },
    { id: 'camper-classic-2', type: 'camper', title: { pl: 'Przyczepa Classic 2', en: 'Classic Caravan 2' }, short: { pl: 'Osobny kalendarz rezerwacji', en: 'Separate booking calendar' }, description: { pl: '', en: '' }, priceLow: null, priceHigh: null, specs: { pl: [], en: [] }, image: 'assets/caravan_1.jpg', active: true, sort_order: 1 },
    { id: 'camper-family', type: 'camper', title: { pl: 'Przyczepa Family', en: 'Family Caravan' }, short: { pl: 'Rodzinna • Dostępna dla niepełnosprawnych', en: 'Family • Disability accessible' }, description: { pl: '', en: '' }, priceLow: null, priceHigh: null, specs: { pl: ['Rampa najazdowa', 'Uchwyty', 'Oznaczenia kontrastowe'], en: ['Wheelchair ramp', 'Grab handles', 'Contrast markings'] }, image: 'assets/caravan_2.jpg', active: true, sort_order: 2 },
    { id: 'camper-coworking', type: 'camper', title: { pl: 'Przyczepa Coworking', en: 'Coworking Caravan' }, short: { pl: 'Praca zdalna • Widok na naturę', en: 'Remote work • Nature view' }, description: { pl: '', en: '' }, priceLow: null, priceHigh: null, specs: { pl: [], en: [] }, image: 'assets/caravan_1.jpg', active: true, sort_order: 3 },
    { id: 'boat-electric-1', type: 'boat', title: { pl: 'Łódź Elektryczna Classic', en: 'Classic Electric Boat' }, short: { pl: 'Bezemisyjna • Zalew Wiślany', en: 'Zero emission • Vistula Lagoon' }, description: { pl: '', en: '' }, priceLow: null, priceHigh: null, specs: { pl: ['Bez emisji spalin', 'Cicha żegluga', 'Zalew Wiślany'], en: ['Zero emissions', 'Silent cruising', 'Vistula Lagoon'] }, image: 'assets/boat_classic.png', active: true, sort_order: 4 },
    { id: 'boat-electric-2', type: 'boat', title: { pl: 'Łódź Elektryczna Premium', en: 'Premium Electric Boat' }, short: { pl: 'Ekologiczna • Komfort premium', en: 'Eco-friendly • Premium comfort' }, description: { pl: '', en: '' }, priceLow: null, priceHigh: null, specs: { pl: ['Bez emisji spalin', 'Cicha żegluga', 'Zalew Wiślany'], en: ['Zero emissions', 'Silent cruising', 'Vistula Lagoon'] }, image: 'assets/boat_premium.png', active: true, sort_order: 5 },
  ];
}

function renderOferta() {
  const content = document.getElementById('admin-content');
  content.innerHTML = `
    <div class="toolbar">
      <button class="admin-btn admin-btn-primary" onclick="openProductModal(null)">+ Dodaj produkt</button>
    </div>
    <div class="product-admin-grid">
      ${adminProducts.map(p => `
        <div class="product-admin-card ${p.active ? '' : 'inactive'}">
          <div class="pac-header">
            <span class="pac-badge ${p.type === 'camper' ? 'badge-camper' : 'badge-boat'}">${p.type === 'camper' ? '🏕️ Przyczepa' : '⛵ Łódź'}</span>
            <label class="toggle-switch" title="${p.active ? 'Aktywny' : 'Ukryty'}">
              <input type="checkbox" ${p.active ? 'checked' : ''} onchange="toggleProductActive('${p.id}', this.checked)">
              <span class="toggle-slider"></span>
            </label>
          </div>
          <h3 class="pac-title">${p.title.pl || '—'}</h3>
          <div class="pac-prices">
            <span>Niski: <strong>${p.priceLow !== null ? p.priceLow + ' zł' : '—'}</strong></span>
            <span>Wysoki: <strong>${p.priceHigh !== null ? p.priceHigh + ' zł' : '—'}</strong></span>
          </div>
          <div class="pac-specs">
            ${(p.specs.pl || []).slice(0,3).map(s => `<span class="tag-chip">${s}</span>`).join('')}
          </div>
          <div class="pac-actions">
            <button class="admin-btn admin-btn-primary" onclick="openProductModal('${p.id}')">✏️ Edytuj</button>
            <button class="admin-btn admin-btn-danger" onclick="deleteProduct('${p.id}')">🗑️ Usuń</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openProductModal(productId) {
  const p = productId ? adminProducts.find(x => x.id === productId) : null;
  const isNew = !p;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'product-modal';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3>${isNew ? 'Nowy produkt' : 'Edytuj: ' + (p.title.pl || p.id)}</h3>
        <button class="modal-close" onclick="closeModal('product-modal')">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-row-2">
          <div class="form-group">
            <label>ID produktu</label>
            <input id="f-id" type="text" value="${p ? p.id : ''}" placeholder="np. camper-classic-3" ${!isNew ? 'readonly' : ''}>
          </div>
          <div class="form-group">
            <label>Typ</label>
            <select id="f-type">
              <option value="camper" ${(!p || p.type==='camper') ? 'selected':''}>Przyczepa kempingowa</option>
              <option value="boat" ${p && p.type==='boat' ? 'selected':''}>Łódź elektryczna</option>
            </select>
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Tytuł (PL)</label>
            <input id="f-title-pl" type="text" value="${p ? p.title.pl : ''}">
          </div>
          <div class="form-group">
            <label>Tytuł (EN)</label>
            <input id="f-title-en" type="text" value="${p ? p.title.en : ''}">
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Opis skrócony (PL)</label>
            <input id="f-short-pl" type="text" value="${p ? p.short.pl : ''}">
          </div>
          <div class="form-group">
            <label>Opis skrócony (EN)</label>
            <input id="f-short-en" type="text" value="${p ? p.short.en : ''}">
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Opis pełny (PL)</label>
            <textarea id="f-desc-pl" rows="3">${p ? p.description.pl : ''}</textarea>
          </div>
          <div class="form-group">
            <label>Opis pełny (EN)</label>
            <textarea id="f-desc-en" rows="3">${p ? p.description.en : ''}</textarea>
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Cena – sezon niski (zł)</label>
            <input id="f-price-low" type="number" value="${p && p.priceLow !== null ? p.priceLow : ''}">
          </div>
          <div class="form-group">
            <label>Cena – sezon wysoki (zł)</label>
            <input id="f-price-high" type="number" value="${p && p.priceHigh !== null ? p.priceHigh : ''}">
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Specs (PL) – oddziel przecinkami</label>
            <input id="f-specs-pl" type="text" value="${p ? (p.specs.pl || []).join(', ') : ''}">
          </div>
          <div class="form-group">
            <label>Specs (EN) – oddziel przecinkami</label>
            <input id="f-specs-en" type="text" value="${p ? (p.specs.en || []).join(', ') : ''}">
          </div>
        </div>
        <div class="form-group">
          <label>Zdjęcie (ścieżka)</label>
          <input id="f-image" type="text" value="${p ? p.image : 'assets/caravan_1.jpg'}">
        </div>
        <div class="form-group">
          <label class="toggle-label">
            <label class="toggle-switch">
              <input id="f-active" type="checkbox" ${(!p || p.active) ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </label>
            Produkt aktywny (widoczny na stronie)
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button class="admin-btn admin-btn-ghost" onclick="closeModal('product-modal')">Anuluj</button>
        <button class="admin-btn admin-btn-primary" onclick="saveProduct('${productId || ''}')">💾 Zapisz</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal('product-modal'); });
}

async function saveProduct(existingId) {
  const id = document.getElementById('f-id').value.trim();
  const row = {
    id,
    type: document.getElementById('f-type').value,
    title_pl: document.getElementById('f-title-pl').value,
    title_en: document.getElementById('f-title-en').value,
    short_pl: document.getElementById('f-short-pl').value,
    short_en: document.getElementById('f-short-en').value,
    desc_pl: document.getElementById('f-desc-pl').value,
    desc_en: document.getElementById('f-desc-en').value,
    price_low: parseFloat(document.getElementById('f-price-low').value) || null,
    price_high: parseFloat(document.getElementById('f-price-high').value) || null,
    specs_pl: document.getElementById('f-specs-pl').value.split(',').map(s=>s.trim()).filter(Boolean),
    specs_en: document.getElementById('f-specs-en').value.split(',').map(s=>s.trim()).filter(Boolean),
    image: document.getElementById('f-image').value,
    active: document.getElementById('f-active').checked,
    sort_order: existingId ? (adminProducts.find(p => p.id === existingId)?.sort_order || 0) : adminProducts.length,
  };

  if (dbConnected) {
    const { error } = await db.from('products').upsert(row);
    if (error) { showToast('Błąd zapisu: ' + error.message, 'error'); return; }
  }
  showToast('Zapisano!', 'success');
  closeModal('product-modal');
  await loadOferta();
}

async function toggleProductActive(productId, active) {
  if (dbConnected) {
    await db.from('products').upsert({ id: productId, active });
  }
  const p = adminProducts.find(x => x.id === productId);
  if (p) p.active = active;
  showToast(active ? 'Produkt aktywowany' : 'Produkt ukryty', 'success');
}

async function deleteProduct(productId) {
  if (!confirm('Usunąć produkt ' + productId + '?')) return;
  if (dbConnected) {
    await db.from('products').delete().eq('id', productId);
  }
  showToast('Usunięto produkt', 'success');
  await loadOferta();
}

// ============================================================
// TAB: REZERWACJE
// ============================================================

let adminReservations = [];
let currentResFilter = 'all';

async function loadRezerwacje() {
  try {
    if (dbConnected) {
      const { data, error } = await db.from('reservations').select('*').order('created_at', { ascending: false });
      adminReservations = (error || !data) ? [] : data;
    } else {
      adminReservations = [];
    }
  } catch (err) {
    console.error('loadRezerwacje error:', err);
    adminReservations = [];
  }
  renderRezerwacje();
}

async function loadNewReservationsBadge() {
  if (!dbConnected) return;
  const { count } = await db.from('reservations').select('*', { count: 'exact', head: true }).eq('status', 'new');
  const badge = document.getElementById('badge-new');
  if (badge && count > 0) badge.textContent = count;
  else if (badge) badge.style.display = 'none';
}

function renderRezerwacje() {
  const content = document.getElementById('admin-content');
  const newCount = adminReservations.filter(r => r.status === 'new').length;
  const confirmedCount = adminReservations.filter(r => r.status === 'confirmed').length;

  const filtered = currentResFilter === 'all' ? adminReservations :
    adminReservations.filter(r => r.status === currentResFilter);

  content.innerHTML = `
    <div class="stats-row">
      <div class="stat-card"><span class="stat-num">${adminReservations.length}</span><span class="stat-label">Wszystkich</span></div>
      <div class="stat-card accent"><span class="stat-num">${newCount}</span><span class="stat-label">Nowych</span></div>
      <div class="stat-card green"><span class="stat-num">${confirmedCount}</span><span class="stat-label">Potwierdzonych</span></div>
    </div>
    <div class="toolbar">
      <div class="filter-tabs">
        ${['all','new','read','confirmed','rejected'].map(f => `
          <button class="filter-btn ${currentResFilter===f?'active':''}" onclick="setResFilter('${f}')">${{all:'Wszystkie',new:'Nowe',read:'Odczytane',confirmed:'Potwierdzone',rejected:'Odrzucone'}[f]}</button>
        `).join('')}
      </div>
      ${!dbConnected ? '<p class="offline-note">⚠️ Offline – rezerwacje wymagają połączenia z Supabase</p>' : ''}
    </div>
    ${filtered.length === 0 ? '<p class="empty-state">Brak rezerwacji w tej kategorii.</p>' : `
    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th>Data</th><th>Klient</th><th>Produkt</th><th>Daty pobytu</th><th>Status</th><th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(r => `
            <tr class="reservation-row ${r.status}" onclick="openReservationDetail('${r.id}')">
              <td>${formatResDate(r.created_at)}</td>
              <td><strong>${r.name || '—'}</strong><br><small>${r.email || ''}</small></td>
              <td>${r.product_name || r.product_id || '—'}</td>
              <td>${r.start_date || '—'} → ${r.end_date || '—'}</td>
              <td><span class="status-badge status-${r.status}">${statusLabel(r.status)}</span></td>
              <td onclick="event.stopPropagation()">
                <button class="admin-btn admin-btn-primary" onclick="changeResStatus('${r.id}','confirmed')">✓</button>
                <button class="admin-btn admin-btn-danger" onclick="changeResStatus('${r.id}','rejected')">✗</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    `}
  `;
}

function setResFilter(f) {
  currentResFilter = f;
  renderRezerwacje();
}

function formatResDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function statusLabel(s) {
  return { new: 'Nowe', read: 'Odczytane', confirmed: 'Potwierdzone', rejected: 'Odrzucone' }[s] || s;
}

function openReservationDetail(id) {
  const r = adminReservations.find(x => x.id === id);
  if (!r) return;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'res-modal';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3>Zapytanie od: ${r.name || '—'}</h3>
        <button class="modal-close" onclick="closeModal('res-modal')">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-grid">
          <div class="detail-row"><span>Status:</span><span class="status-badge status-${r.status}">${statusLabel(r.status)}</span></div>
          <div class="detail-row"><span>Wysłano:</span><span>${formatResDate(r.created_at)}</span></div>
          <div class="detail-row"><span>Imię i nazwisko:</span><span>${r.name || '—'}</span></div>
          <div class="detail-row"><span>Email:</span><span><a href="mailto:${r.email}">${r.email || '—'}</a></span></div>
          <div class="detail-row"><span>Telefon:</span><span><a href="tel:${r.phone}">${r.phone || '—'}</a></span></div>
          <div class="detail-row"><span>Produkt:</span><span>${r.product_name || r.product_id || '—'}</span></div>
          <div class="detail-row"><span>Daty:</span><span>${r.start_date || '—'} → ${r.end_date || '—'}</span></div>
          <div class="detail-row"><span>Liczba gości:</span><span>${r.guests || '—'}</span></div>
          <div class="detail-row full"><span>Wiadomość:</span><p class="message-box">${r.message || '—'}</p></div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="admin-btn admin-btn-ghost" onclick="changeResStatus('${r.id}','read');closeModal('res-modal')">Oznacz odczytane</button>
        <button class="admin-btn admin-btn-danger" onclick="changeResStatus('${r.id}','rejected');closeModal('res-modal')">Odrzuć</button>
        <button class="admin-btn admin-btn-primary" onclick="confirmAndBlock('${r.id}');closeModal('res-modal')">✓ Potwierdź i zablokuj daty</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal('res-modal'); });
  if (dbConnected && r.status === 'new') changeResStatus(id, 'read', false);
}

async function changeResStatus(id, status, rerender = true) {
  if (dbConnected) {
    await db.from('reservations').update({ status }).eq('id', id);
  }
  const r = adminReservations.find(x => x.id === id);
  if (r) r.status = status;
  if (rerender) { showToast('Status zaktualizowany', 'success'); renderRezerwacje(); }
}

async function confirmAndBlock(id) {
  const r = adminReservations.find(x => x.id === id);
  if (!r) return;
  await changeResStatus(id, 'confirmed', false);
  if (dbConnected && r.product_id && r.start_date && r.end_date) {
    const start = new Date(r.start_date);
    const end = new Date(r.end_date);
    const rows = [];
    const cur = new Date(start);
    while (cur <= end) {
      rows.push({ product_id: r.product_id, date_key: cur.toISOString().slice(0,10), status: 'booked' });
      cur.setDate(cur.getDate() + 1);
    }
    await db.from('availability').upsert(rows);
  }
  showToast('Potwierdzone i daty zablokowane!', 'success');
  renderRezerwacje();
}

// ============================================================
// TAB: FAQ
// ============================================================

let adminFaq = [];

async function loadFaq() {
  try {
    if (dbConnected) {
      const { data, error } = await db.from('faq').select('*').order('sort_order');
      adminFaq = (error || !data) ? [] : data;
    } else {
      adminFaq = [];
    }
  } catch (err) {
    console.error('loadFaq error:', err);
    adminFaq = [];
  }
  renderFaq();
}

function renderFaq() {
  const content = document.getElementById('admin-content');
  content.innerHTML = `
    <div class="toolbar">
      <button class="admin-btn admin-btn-primary" onclick="openFaqModal(null)">+ Dodaj pytanie</button>
      ${!dbConnected ? '<p class="offline-note">⚠️ Offline – zmiany FAQ wymagają Supabase</p>' : ''}
    </div>
    <div class="faq-admin-list">
      ${adminFaq.length === 0 ? '<p class="empty-state">Brak pytań FAQ. Dodaj pierwsze!</p>' : ''}
      ${adminFaq.map((f, i) => `
        <div class="faq-item-admin">
          <div class="faq-item-header">
            <strong>${f.question_pl || '—'}</strong>
            <div class="faq-item-actions">
              <button class="admin-btn admin-btn-ghost icon-btn" onclick="moveFaq(${f.id}, 'up')" ${i===0?'disabled':''}>↑</button>
              <button class="admin-btn admin-btn-ghost icon-btn" onclick="moveFaq(${f.id}, 'down')" ${i===adminFaq.length-1?'disabled':''}>↓</button>
              <button class="admin-btn admin-btn-primary" onclick="openFaqModal(${f.id})">✏️</button>
              <button class="admin-btn admin-btn-danger" onclick="deleteFaq(${f.id})">🗑️</button>
            </div>
          </div>
          <p class="faq-item-answer">${f.answer_pl || '—'}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function openFaqModal(faqId) {
  const f = faqId ? adminFaq.find(x => x.id === faqId) : null;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'faq-modal';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3>${f ? 'Edytuj pytanie' : 'Nowe pytanie'}</h3>
        <button class="modal-close" onclick="closeModal('faq-modal')">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-row-2">
          <div class="form-group">
            <label>Pytanie (PL)</label>
            <input id="ff-q-pl" type="text" value="${f ? (f.question_pl||'') : ''}">
          </div>
          <div class="form-group">
            <label>Pytanie (EN)</label>
            <input id="ff-q-en" type="text" value="${f ? (f.question_en||'') : ''}">
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Odpowiedź (PL)</label>
            <textarea id="ff-a-pl" rows="4">${f ? (f.answer_pl||'') : ''}</textarea>
          </div>
          <div class="form-group">
            <label>Odpowiedź (EN)</label>
            <textarea id="ff-a-en" rows="4">${f ? (f.answer_en||'') : ''}</textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="admin-btn admin-btn-ghost" onclick="closeModal('faq-modal')">Anuluj</button>
        <button class="admin-btn admin-btn-primary" onclick="saveFaq(${faqId || 'null'})">💾 Zapisz</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal('faq-modal'); });
}

async function saveFaq(faqId) {
  const row = {
    question_pl: document.getElementById('ff-q-pl').value,
    question_en: document.getElementById('ff-q-en').value,
    answer_pl: document.getElementById('ff-a-pl').value,
    answer_en: document.getElementById('ff-a-en').value,
    sort_order: faqId ? adminFaq.find(f => f.id === faqId)?.sort_order : adminFaq.length,
  };
  if (faqId) row.id = faqId;
  if (dbConnected) {
    const { error } = faqId
      ? await db.from('faq').update(row).eq('id', faqId)
      : await db.from('faq').insert(row);
    if (error) { showToast('Błąd: ' + error.message, 'error'); return; }
  }
  showToast('FAQ zapisane!', 'success');
  closeModal('faq-modal');
  await loadFaq();
}

async function deleteFaq(faqId) {
  if (!confirm('Usunąć to pytanie?')) return;
  if (dbConnected) await db.from('faq').delete().eq('id', faqId);
  showToast('Usunięto', 'success');
  await loadFaq();
}

async function moveFaq(faqId, direction) {
  const idx = adminFaq.findIndex(f => f.id === faqId);
  if (idx === -1) return;
  const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= adminFaq.length) return;
  const a = adminFaq[idx], b = adminFaq[swapIdx];
  [a.sort_order, b.sort_order] = [b.sort_order, a.sort_order];
  if (dbConnected) {
    await db.from('faq').update({ sort_order: a.sort_order }).eq('id', a.id);
    await db.from('faq').update({ sort_order: b.sort_order }).eq('id', b.id);
  }
  await loadFaq();
}

// ============================================================
// TAB: AKTUALNOŚCI
// ============================================================

let adminNews = [];

async function loadAktualnosci() {
  try {
    if (dbConnected) {
      const { data, error } = await db.from('news').select('*').order('created_at', { ascending: false });
      adminNews = (error || !data) ? [] : data;
    } else {
      adminNews = [];
    }
  } catch (err) {
    console.error('loadAktualnosci error:', err);
    adminNews = [];
  }
  renderAktualnosci();
}

function renderAktualnosci() {
  const content = document.getElementById('admin-content');
  content.innerHTML = `
    <div class="toolbar">
      <button class="admin-btn admin-btn-primary" onclick="openNewsModal(null)">+ Dodaj aktualność</button>
      ${!dbConnected ? '<p class="offline-note">⚠️ Offline – aktualności wymagają Supabase</p>' : ''}
    </div>
    <div class="news-admin-list">
      ${adminNews.length === 0 ? '<p class="empty-state">Brak aktualności. Dodaj pierwszą!</p>' : ''}
      ${adminNews.map(n => `
        <div class="news-item-admin">
          <div class="news-meta">
            <span class="news-date">${n.date_pl || formatResDate(n.created_at)}</span>
          </div>
          <h3>${n.title_pl || '—'}</h3>
          <p>${(n.text_pl || '').slice(0, 120)}…</p>
          <div class="pac-actions">
            <button class="admin-btn admin-btn-primary" onclick="openNewsModal(${n.id})">✏️ Edytuj</button>
            <button class="admin-btn admin-btn-danger" onclick="deleteNews(${n.id})">🗑️ Usuń</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openNewsModal(newsId) {
  const n = newsId ? adminNews.find(x => x.id === newsId) : null;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'news-modal';
  modal.innerHTML = `
    <div class="modal-card modal-wide">
      <div class="modal-header">
        <h3>${n ? 'Edytuj aktualność' : 'Nowa aktualność'}</h3>
        <button class="modal-close" onclick="closeModal('news-modal')">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-row-2">
          <div class="form-group">
            <label>Data (PL)</label>
            <input id="fn-date-pl" type="text" value="${n ? (n.date_pl||'') : ''}" placeholder="np. 01 Lipca 2026">
          </div>
          <div class="form-group">
            <label>Data (EN)</label>
            <input id="fn-date-en" type="text" value="${n ? (n.date_en||'') : ''}" placeholder="np. July 1, 2026">
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Tytuł (PL)</label>
            <input id="fn-title-pl" type="text" value="${n ? (n.title_pl||'') : ''}">
          </div>
          <div class="form-group">
            <label>Tytuł (EN)</label>
            <input id="fn-title-en" type="text" value="${n ? (n.title_en||'') : ''}">
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>Treść (PL)</label>
            <textarea id="fn-text-pl" rows="5">${n ? (n.text_pl||'') : ''}</textarea>
          </div>
          <div class="form-group">
            <label>Treść (EN)</label>
            <textarea id="fn-text-en" rows="5">${n ? (n.text_en||'') : ''}</textarea>
          </div>
        </div>
        <div class="form-group">
          <label>Zdjęcie (ścieżka)</label>
          <input id="fn-image" type="text" value="${n ? (n.image||'assets/eu_logotypy.png') : 'assets/eu_logotypy.png'}">
        </div>
      </div>
      <div class="modal-footer">
        <button class="admin-btn admin-btn-ghost" onclick="closeModal('news-modal')">Anuluj</button>
        <button class="admin-btn admin-btn-primary" onclick="saveNews(${newsId || 'null'})">💾 Zapisz</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal('news-modal'); });
}

async function saveNews(newsId) {
  const row = {
    date_pl: document.getElementById('fn-date-pl').value,
    date_en: document.getElementById('fn-date-en').value,
    title_pl: document.getElementById('fn-title-pl').value,
    title_en: document.getElementById('fn-title-en').value,
    text_pl: document.getElementById('fn-text-pl').value,
    text_en: document.getElementById('fn-text-en').value,
    image: document.getElementById('fn-image').value,
  };
  if (newsId) row.id = newsId;
  if (dbConnected) {
    const { error } = newsId
      ? await db.from('news').update(row).eq('id', newsId)
      : await db.from('news').insert(row);
    if (error) { showToast('Błąd: ' + error.message, 'error'); return; }
  }
  showToast('Aktualność zapisana!', 'success');
  closeModal('news-modal');
  await loadAktualnosci();
}

async function deleteNews(newsId) {
  if (!confirm('Usunąć tę aktualność?')) return;
  if (dbConnected) await db.from('news').delete().eq('id', newsId);
  showToast('Usunięto', 'success');
  await loadAktualnosci();
}

// ============================================================
// Utilities
// ============================================================

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.remove();
}

function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `admin-toast toast-${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
}

// ============================================================
// Init
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initDB();
  if (sessionStorage.getItem('ecocamp_admin')) {
    adminSession = true;
    showDashboard();
  } else {
    showLoginScreen();
  }
});
