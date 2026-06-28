/* ============================================================
   RSU ICT SYMPOSIUM 2025 — script.js
   ============================================================ */

// ——————————————————————————————————————————
// DARK MODE
// ——————————————————————————————————————————
function toggleDark() {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('moonIcon').style.display = isDark ? 'block' : 'none';
  document.getElementById('sunIcon').style.display  = isDark ? 'none'  : 'block';
  drawCharts();
}

// ——————————————————————————————————————————
// MOBILE MENU
// ——————————————————————————————————————————
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const btn = document.querySelector('.hamburger');
  const isOpen = m.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
}

// ——————————————————————————————————————————
// SEARCH
// ——————————————————————————————————————————
const SEARCH_INDEX = [
  { title: 'About the Symposium',     href: '#about',      desc: 'Overview, objectives, and expected outcomes' },
  { title: 'Research Topic',          href: '#research',   desc: 'AI Coding Agents and Programming Skills Development' },
  { title: 'Learning Center',         href: '#learning',   desc: 'Generative AI, tools, ethics, software development' },
  { title: 'Statistics',              href: '#stats',      desc: 'AI adoption statistics and data visualizations' },
  { title: 'About Rangsit University',href: '#rsu',        desc: 'RSU overview, programs, and achievements' },
  { title: 'Organizing Committee',    href: '#committee',  desc: 'All 5 teams and 17 members with roles' },
  { title: 'Event Schedule',          href: '#schedule',   desc: 'Full program — 27 July 2026, 14:00–16:00 GMT+7' },
  { title: 'Gallery',                 href: '#gallery',    desc: 'Posters, team, campus, and event photos' },
  { title: 'FAQ',                     href: '#faq',        desc: 'Frequently asked questions about the symposium' },
  { title: 'Contact',                 href: '#contact',    desc: 'Email, social links, and message form' },
  { title: 'ChatGPT',                 href: '#learning',   desc: 'OpenAI conversational AI — tab: AI Tools' },
  { title: 'GitHub Copilot',          href: '#learning',   desc: 'AI pair programmer by GitHub — tab: AI Tools' },
  { title: 'Claude',                  href: '#learning',   desc: 'Anthropic AI assistant — tab: AI Tools' },
  { title: 'Gemini',                  href: '#learning',   desc: 'Google DeepMind multimodal AI — tab: AI Tools' },
  { title: 'Google Meet',             href: '#schedule',   desc: 'Platform for the online symposium' },
  { title: 'Aung Myo (Aizen)',        href: '#committee',  desc: 'Team 1 — Technical & Platform, 6702955' },
  { title: 'Phoo Myat May Zaw (B)',   href: '#committee',  desc: 'Team 1 — Technical & Platform, 6703013' },
  { title: 'Hein Lin Zaw (Wayne)',    href: '#committee',  desc: 'Team 2 — Public Relations, 6703300' },
  { title: 'Htoo Myat Htin Lynn (Zenon)', href: '#committee', desc: 'Team 4 — Registration, 6702942' },
  { title: 'Kyaw Zaw Lin (Lin)',      href: '#committee',  desc: 'Team 5 — Documentation, 6702599' },
];

function openSearch() {
  document.getElementById('searchOverlay').classList.add('show');
  document.getElementById('searchInput').focus();
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('show');
}
document.getElementById('searchOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeSearch();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeSearch();
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});
function doSearch(q) {
  const container = document.getElementById('searchResults');
  if (!q.trim()) { container.innerHTML = ''; return; }
  const hits = SEARCH_INDEX.filter(item =>
    (item.title + ' ' + item.desc).toLowerCase().includes(q.toLowerCase())
  );
  if (!hits.length) {
    container.innerHTML = '<p style="color:var(--c-muted);font-size:.86rem;padding:8px 0;">No results found for "' + q + '".</p>';
    return;
  }
  container.innerHTML = hits.map(h =>
    `<div class="sr-item" onclick="goTo('${h.href}')">
      <div class="sr-title">${h.title}</div>
      <div class="sr-desc">${h.desc}</div>
    </div>`
  ).join('');
}
function goTo(href) {
  closeSearch();
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
}

// ——————————————————————————————————————————
// TABS
// ——————————————————————————————————————————
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
}

// ——————————————————————————————————————————
// FAQ ACCORDION
// ——————————————————————————————————————————
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}

// ——————————————————————————————————————————
// GALLERY FILTER
// ——————————————————————————————————————————
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}

// ——————————————————————————————————————————
// COUNTDOWN — Target: 27 July 2026 14:00 GMT+7
// ——————————————————————————————————————————
function updateCountdown() {
  const target = new Date('2026-07-27T13:30:00+07:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    // Event already happened — show completed message
    const bar = document.querySelector('.countdown-bar');
    if (bar) {
      bar.innerHTML = `<div class="container"><div style="padding:14px 0;text-align:center;font-family:var(--font-d);font-size:.88rem;color:var(--c-blue);font-weight:600;letter-spacing:.04em;">✓ SYMPOSIUM COMPLETED — 27 JULY 2026</div></div>`;
    }
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent  = String(d).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-mins').textContent  = String(m).padStart(2,'0');
  document.getElementById('cd-secs').textContent  = String(s).padStart(2,'0');
}
// Run after DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
} else {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ——————————————————————————————————————————
// STATS COUNTER ANIMATION
// ——————————————————————————————————————————
let statsAnimated = false;
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + '%';
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// ——————————————————————————————————————————
// CHARTS (Canvas)
// ——————————————————————————————————————————
function getStyle(prop) {
  return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
}

function drawCharts() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const textColor  = isDark ? '#8896b8' : '#5a637a';
  const gridColor  = isDark ? '#1b2d4c' : '#dde1ee';
  const bgColor    = isDark ? '#0d1728' : '#ffffff';

  // ---- Bar Chart ----
  const barCanvas = document.getElementById('barChart');
  if (!barCanvas) return;
  const bCtx = barCanvas.getContext('2d');
  const bW = barCanvas.offsetWidth;
  const bH = barCanvas.offsetHeight || 180;
  barCanvas.width = bW * window.devicePixelRatio;
  barCanvas.height = bH * window.devicePixelRatio;
  bCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  bCtx.fillStyle = bgColor;
  bCtx.fillRect(0, 0, bW, bH);

  const barData = [
    { label: 'Year 1', val: 45 },
    { label: 'Year 2', val: 62 },
    { label: 'Year 3', val: 78 },
    { label: 'Year 4', val: 86 },
  ];
  const pad = { top: 20, right: 16, bottom: 36, left: 44 };
  const cW = bW - pad.left - pad.right;
  const cH = bH - pad.top - pad.bottom;
  const barW = (cW / barData.length) * 0.5;
  const barGap = cW / barData.length;

  // Grid lines
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + cH - (i / 4) * cH;
    bCtx.beginPath();
    bCtx.strokeStyle = gridColor;
    bCtx.lineWidth = 1;
    bCtx.moveTo(pad.left, y);
    bCtx.lineTo(pad.left + cW, y);
    bCtx.stroke();
    bCtx.fillStyle = textColor;
    bCtx.font = '11px Inter, sans-serif';
    bCtx.textAlign = 'right';
    bCtx.fillText((i * 25) + '%', pad.left - 8, y + 4);
  }

  // Bars
  barData.forEach((d, i) => {
    const x = pad.left + i * barGap + (barGap - barW) / 2;
    const bh = (d.val / 100) * cH;
    const y = pad.top + cH - bh;
    const grad = bCtx.createLinearGradient(0, y, 0, y + bh);
    grad.addColorStop(0, '#1a5cff');
    grad.addColorStop(1, '#7c3aed');
    bCtx.fillStyle = grad;
    const r = 4;
    bCtx.beginPath();
    bCtx.moveTo(x + r, y);
    bCtx.lineTo(x + barW - r, y);
    bCtx.arcTo(x + barW, y, x + barW, y + r, r);
    bCtx.lineTo(x + barW, y + bh);
    bCtx.lineTo(x, y + bh);
    bCtx.lineTo(x, y + r);
    bCtx.arcTo(x, y, x + r, y, r);
    bCtx.closePath();
    bCtx.fill();
    // Labels
    bCtx.fillStyle = textColor;
    bCtx.font = '11px Inter, sans-serif';
    bCtx.textAlign = 'center';
    bCtx.fillText(d.label, x + barW / 2, bH - 10);
    bCtx.fillStyle = '#1a5cff';
    bCtx.font = 'bold 11px Inter, sans-serif';
    bCtx.fillText(d.val + '%', x + barW / 2, y - 6);
  });

  // ---- Pie / Donut Chart ----
  const pieCanvas = document.getElementById('pieChart');
  if (!pieCanvas) return;
  const pCtx = pieCanvas.getContext('2d');
  const pW = pieCanvas.offsetWidth;
  const pH = pieCanvas.offsetHeight || 180;
  pieCanvas.width = pW * window.devicePixelRatio;
  pieCanvas.height = pH * window.devicePixelRatio;
  pCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  pCtx.fillStyle = bgColor;
  pCtx.fillRect(0, 0, pW, pH);

  const segments = [
    { label: 'Helps learning',   val: 41, color: '#1a5cff' },
    { label: 'Mixed impact',     val: 32, color: '#7c3aed' },
    { label: 'Reduces effort',   val: 18, color: '#06b6d4' },
    { label: 'Not useful',       val:  9, color: '#f59e0b' },
  ];
  const cx = pW * 0.35;
  const cy = pH / 2;
  const radius = Math.min(pH * 0.38, pW * 0.28);
  let start = -Math.PI / 2;

  segments.forEach(s => {
    const slice = (s.val / 100) * 2 * Math.PI;
    pCtx.beginPath();
    pCtx.moveTo(cx, cy);
    pCtx.arc(cx, cy, radius, start, start + slice);
    pCtx.closePath();
    pCtx.fillStyle = s.color;
    pCtx.fill();
    pCtx.strokeStyle = bgColor;
    pCtx.lineWidth = 2;
    pCtx.stroke();
    start += slice;
  });

  // Donut hole
  pCtx.beginPath();
  pCtx.arc(cx, cy, radius * 0.5, 0, 2 * Math.PI);
  pCtx.fillStyle = bgColor;
  pCtx.fill();

  // Legend
  segments.forEach((s, i) => {
    const lx = pW * 0.62;
    const ly = pH * 0.15 + i * 32;
    pCtx.beginPath();
    pCtx.arc(lx, ly, 6, 0, 2 * Math.PI);
    pCtx.fillStyle = s.color;
    pCtx.fill();
    pCtx.fillStyle = textColor;
    pCtx.font = '11px Inter, sans-serif';
    pCtx.textAlign = 'left';
    pCtx.fillText(s.label + ' — ' + s.val + '%', lx + 12, ly + 4);
  });
}

// ——————————————————————————————————————————
// PARTICLE CANVAS
// ——————————————————————————————————————————
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COUNT = 50;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .25,
      r:  1.5 + Math.random() * 2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const dark = document.documentElement.dataset.theme === 'dark';
    const pc = dark ? 'rgba(100,140,255,' : 'rgba(26,92,255,';

    particles.forEach(p => {
      p.x = (p.x + p.vx + W) % W;
      p.y = (p.y + p.vy + H) % H;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = pc + '.3)';
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = pc + (0.1 * (1 - d / 110)) + ')';
          ctx.lineWidth = .8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ——————————————————————————————————————————
// SCROLL ANIMATIONS (IntersectionObserver)
// ——————————————————————————————————————————
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Trigger stats when #stats section enters
      if (!statsAnimated && e.target.closest('#stats')) {
        statsAnimated = true;
        animateCounters();
        setTimeout(drawCharts, 200);
      }
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ——————————————————————————————————————————
// CONTACT FORM SUBMIT
// ——————————————————————————————————————————
function submitForm(e) {
  e.preventDefault();
  const btn = e.target;
  const note = document.getElementById('formNote');
  const email = document.getElementById('email').value.trim();
  if (!email) {
    note.textContent = 'Please enter your email address.';
    note.style.color = '#dc2626';
    return;
  }
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    note.textContent = 'Message sent! We will get back to you soon.';
    note.style.color = '#059669';
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1200);
}

// ——————————————————————————————————————————
// DOWNLOAD BROCHURE
// ——————————————————————————————————————————
function downloadBrochure(e) {
  e.preventDefault();
  alert('The symposium brochure will be available for download closer to the event on 27 July 2026. Check back soon!');
}

// ——————————————————————————————————————————
// INIT: draw charts if stats already visible
// ——————————————————————————————————————————
window.addEventListener('load', () => {
  const statsEl = document.getElementById('stats');
  if (statsEl) {
    const rect = statsEl.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      statsAnimated = true;
      animateCounters();
      drawCharts();
    }
  }
});
window.addEventListener('resize', drawCharts);
