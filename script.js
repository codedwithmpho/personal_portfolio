/* =========================================================
   Mpho M portfolio — all the site's content and interactions.
   Edit the CONTENT section to change text, images and links.
   ========================================================= */

/* ---------------- CONTENT ---------------- */
const IMG = "images/";
const EMAIL = "mpho.m.official@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/mpho-m-makes/";
const gmailCompose = (subject = "Hi Mpho!", body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ==== YOUR LINKS: paste the GitHub Pages links here once they're hosted ====
const COMIC_SITE_URL = "https://codedwithmpho.github.io/vio202_comic_animated/";          // e.g. "https://codedwithmpho.github.io/clementine-comic/"
const CHARACTER_SHEET_URL = "https://codedwithmpho.github.io/vio202_comic_infographic/";     // e.g. "https://codedwithmpho.github.io/character-sheet/"

// Optional but recommended for the contact form: get a free key at https://web3forms.com
// (type in mpho.m.official@gmail.com, they email you the key) and paste it here.
const WEB3FORMS_KEY = "457a884c-5942-4784-8672-d1893863b96c";

// Side quests on the home page (they use the links above).
const SIDE_QUESTS = [
  { label: "side quest: animated comic", url: COMIC_SITE_URL },
  { label: "side quest: character infographic", url: CHARACTER_SHEET_URL },
];

const CHARACTERS = {
  design: IMG + "char_design.webp",
  illustration: IMG + "char_illustration.webp",
  code: IMG + "char_code.webp",
  plain: IMG + "char_plain.webp",
  me: IMG + "char_me.png",
  contact: IMG + "char_contact.png",
};

const CHARACTER_LINES = {
  design: ["ooh, pretty things!", "grids & colours ✦", "kerning is self-care"],
  illustration: ["grab a pencil!", "doodle mode: on", "sketchbook time ✎"],
  code: ["beep boop </>", "it works… I think", 'console.log("hi")'],
  plain: ["hi there! 👋", "that's me!", "want a coffee? ☕", "tickle tickle!"],
  me: ["olá! tudo bem?", "is the kettle on?", "put some jazz on ♪", "click the folders!"],
};

const PDBY = [
  ["pdby_fuel", "Fuel hikes hit hard", "fuel-hikes-hit-hard-up-staff-and-students-feel-the-pressure"],
  ["pdby_graduation", "Graduating into uncertainty", "graduating-into-uncertainty-the-fear-no-one-talks-about"],
  ["pdby_star", "A STAR is made", "a-star-is-made"],
  ["pdby_ticket", "A ticket is how much?", "a-ticket-is-how-much"],
  ["pdby_miccheck", "Mic check: podcasts & accountability", "mic-check-does-the-unregulated-nature-of-podcasts-reduce-accountability"],
  ["pdby_cinema", "Earning a cinematic audience", "earning-a-cinematic-audience-if-you-build-it-they-will-come"],
  ["pdby_secondscreen", "The second screen phenomenon", "media-consumption-for-dummies-the-second-screen-phenomenon"],
  ["pdby_lastones", "The last ones who had to wonder", "the-last-ones-who-had-to-wonder-where-everything-was"],
  ["pdby_security", "The unsung heroes of campus", "the-unsung-heroes-of-campus-why-campus-security-are-so-important"],
  ["pdby_seecare", "The more we see, the less we care", "why-the-more-we-see-the-less-we-care"],
  ["pdby_tocare", "To care or not to care", "to-care-or-not-to-care-that-is-the-political-question"],
  ["pdby_brownies", "50 shades of baking", "50-shades-of-baking-sltty-brownies"],
  ["pdby_club", "Join the club (literally)", "join-the-club-literally"],
  ["pdby_freedom", "How free is freedom?", "how-free-is-freedom"],
  ["pdby_church", "Church girls, ancestors & crystals", "church-girls-ancestors-crystals-can-they-all-co-exist"],
  ["pdby_chiefs", "Birth of a giant: Kaizer Chiefs", "birth-of-a-giant-the-history-of-kaizer-chiefs"],
  ["pdby_newspaper", "Who even reads the newspaper anymore?", ""],
].map(([f, title, slug]) => ({ src: IMG + f + ".webp", title, link: slug ? `https://pdby.co.za/${slug}/` : "" }));

const SKETCHES = [
  { src: IMG + "sketch_original.webp", title: "The original character", note: "where it all started" },
  { src: IMG + "sketch_style1.webp", title: "Artist style study 1", note: "same girl, someone else's hand" },
  { src: IMG + "sketch_style2.webp", title: "Artist style study 2", note: "pushing shapes & proportions" },
  { src: IMG + "sketch_style3.webp", title: "Artist style study 3", note: "detailed rendering study" },
  { src: IMG + "sketch_official.webp", title: "Clementine — official sheet", note: "the final design" },
  { src: IMG + "sketch_emotions.webp", title: "Clementine's emotions", note: "expression sheet for the comic" },
];

// 3D Blender room renders. Put the images in the images folder and fill in "src", e.g. IMG + "fullroom1.png"
const BLENDER = [
  { src: IMG + "fullroom1.png", title: "Full room — view 1" },
  { src: IMG + "fullroom2.png", title: "Full room — view 2" },
  { src: IMG + "closeup1.png", title: "Close-up 1" },
  { src: IMG + "closeup2.png", title: "Close-up 2" },
  { src: IMG + "large_image1.png", title: "Large render" },
];

const PROJECTS = [
  { slug: "pdby", title: "PDBY editorial illustrations", category: "illustration", cover: IMG + "pdby_star.webp", blurb: "17 illustrations published alongside student journalism at PDBY. Click any piece to read the article it was made for.", tools: [] },
  { slug: "comic", title: "Clementine in Between — comic", category: "illustration", cover: IMG + "comic_cover.webp", blurb: "A full comic, from character design to the final printed pages.", tools: ["Illustrator", "Photoshop"] },
  { slug: "sketches", title: "Character development", category: "illustration", cover: IMG + "sketch_official.webp", blurb: "How Clementine grew from one drawing into a full character sheet with emotions.", tools: ["Illustrator", "Procreate-style sketching"] },
  { slug: "blender-room", title: "3D Blender room", category: "design", cover: IMG + "fullroom1.png", blurb: "A room modelled, lit and rendered in Blender.", tools: ["Blender"] },
  { slug: "isometric-room", title: "Isometric 3D room in Illustrator", category: "design", cover: IMG + "iso_room.webp", blurb: "A real kitchen redrawn as a flat isometric illustration — drag the slider to compare it with the photo.", tools: ["Illustrator"] },
  { slug: "shirt", title: "Gentleness shirt design", category: "design", cover: IMG + "shirt_final.webp", blurb: "A retro character tee built around Galatians 5:22–23.", tools: ["Illustrator"] },
  { slug: "hill-climb", title: "Hill Climb Racing fan site", category: "code", cover: IMG + "web_hillclimb.webp", blurb: "A multi-page fan site with a game, newsletter, merch and fan club. Click to open the live site.", tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"], external: "https://codedwithmpho.github.io/hill_climb_racing_site/", live: true },
  { slug: "comic-site", title: "Clementine animated comic", category: "code", cover: IMG + "comic_cover.webp", blurb: "The Clementine in Between comic, built as its own website. Click to read it.", tools: ["HTML", "CSS", "JavaScript"], external: COMIC_SITE_URL, live: !!COMIC_SITE_URL, soon: !COMIC_SITE_URL },
  { slug: "character-sheet-site", title: "Character infographic website", category: "code", cover: IMG + "sketch_official.webp", blurb: "An interactive character sheet for Clementine, built as a website.", tools: ["HTML", "CSS", "JavaScript"], external: CHARACTER_SHEET_URL, live: !!CHARACTER_SHEET_URL, soon: !CHARACTER_SHEET_URL },
];

const SONGS = {
  jazz: { id: "fkjk30TsnfE", title: "Hamba No Malume", artist: "Herbie Tsoaeli", album: "African Time (2012)" },
  brazil: { id: "hfbVQYC0-H4", title: "Outro Lugar", artist: "Toco" },
};

const LOGO = (f) => IMG + "logos/" + f + ".svg";
const SKILLS = [
  { group: "design & visual", items: [
    { name: "Illustrator", logo: LOGO("illustrator-plain") },
    { name: "Photoshop", logo: LOGO("photoshop-plain") },
    { name: "Figma", logo: LOGO("figma-original") },
    { name: "Canva", logo: LOGO("canva-original") },
    { name: "Blender", logo: LOGO("blender-original") },
  ] },
  { group: "web & tech", items: [
    { name: "HTML", logo: LOGO("html5-original") },
    { name: "CSS", logo: LOGO("css3-original") },
    { name: "JavaScript", logo: LOGO("javascript-original") },
    { name: "React", logo: LOGO("react-original") },
    { name: "GitHub", logo: LOGO("github-original"), invert: true },
  ] },
];

const DRINKS = [
  { id: "coffee", label: "Coffee", emoji: "☕", fill: "var(--coffee)", note: "the 2am-deadline fuel" },
  { id: "tea", label: "Tea", emoji: "🍵", fill: "var(--tea)", note: "for slower, cosier afternoons" },
  { id: "both", label: "Surprise me", emoji: "✨", fill: "var(--primary)", note: "honestly? whatever's hot" },
];

const FLASHCARDS = [
  ["Olá, tudo bem?", "Hi, how are you?"],
  ["Cafezinho", "a little coffee (my love language)"],
  ["Saudade", "a deep, sweet longing for something you miss"],
  ["Que legal!", "How cool!"],
  ["Estou aprendendo", "I'm learning"],
  ["Obrigada!", "Thank you! (said by a woman)"],
];

// Fun-facts quiz: every answer is somewhere on this website.
const QUIZ = [
  { q: "Where does Mpho study?", a: ["University of Pretoria", "Wits", "UCT"], ok: 0 },
  { q: "What is she studying?", a: ["Law", "BIS Multimedia", "Medicine"], ok: 1 },
  { q: "What's usually playing in her ears?", a: ["Heavy metal", "Country", "South African jazz"], ok: 2 },
  { q: "Which language is she learning?", a: ["Portuguese", "French", "German"], ok: 0 },
  { q: "PDBY promoted her to…", a: ["Photographer", "Web Manager", "Editor-in-chief"], ok: 1 },
  { q: "How many editorial illustrations has she published?", a: ["5", "40", "17"], ok: 2 },
  { q: "What's always next to her, any season?", a: ["A hot drink", "A cat", "An energy drink"], ok: 0 },
];

/* ---------------- SOUND (tiny synth, no audio files) ---------------- */
let audio = null;
let soundOn = localStorage.getItem("mpho-sound") !== "0";

function ctx() {
  if (!audio) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audio = new AC();
  }
  if (audio.state === "suspended") audio.resume();
  return audio;
}
function tone(freq, start, dur, type = "sine", vol = 0.05, slideTo) {
  const c = ctx();
  if (!c) return;
  const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + start;
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(c.destination);
  o.start(t); o.stop(t + dur + 0.02);
}
const SFX = {
  hover: () => tone(660, 0, 0.07, "triangle", 0.03),
  pick: () => { tone(523, 0, 0.1, "square", 0.025); tone(784, 0.08, 0.16, "square", 0.025); },
  pop: () => { tone(440, 0, 0.06, "square", 0.03); tone(880, 0.04, 0.1, "square", 0.03); },
  boing: () => tone(180, 0, 0.35, "sine", 0.12, 620),
  giggle: () => [880, 990, 880, 1100].forEach((f, i) => tone(f, i * 0.07, 0.07, "triangle", 0.04)),
  open: () => { tone(392, 0, 0.08, "triangle", 0.05); tone(587, 0.06, 0.14, "triangle", 0.05); },
  close: () => tone(587, 0, 0.12, "triangle", 0.04, 300),
  pour: () => { for (let i = 0; i < 9; i++) tone(500 + Math.random() * 500, i * 0.05, 0.05, "sine", 0.025); },
  whoosh: () => { tone(300, 0, 0.5, "sawtooth", 0.015, 1200); tone(500, 0.05, 0.4, "sine", 0.02, 1500); },
  flip: () => tone(1200, 0, 0.06, "square", 0.02, 600),
  chord: () => [261.6, 329.6, 392, 493.9].forEach((f, i) => tone(f, i * 0.05, 0.9, "sine", 0.03)),
};
function play(name) { if (soundOn && SFX[name]) SFX[name](); }
function playNote(i) {
  if (!soundOn) return;
  const scale = [261.6, 293.7, 311.1, 349.2, 392, 440, 466.2, 523.3, 587.3, 622.3];
  tone(scale[Math.abs(i) % scale.length], 0, 0.5, "triangle", 0.05);
}

/* ---------------- HELPERS ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Any element with data-sound="pick" plays that sound on click; links/buttons get a hover blip.
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-sound]");
  if (el) play(el.dataset.sound);
});
document.addEventListener("mouseover", (e) => {
  const el = e.target.closest("a, button");
  if (el && !el.contains(e.relatedTarget)) play("hover");
});

/** Makes a clickable Mpho character that hops, talks and makes a sound. */
function makeCharacter(pose, { cls = "", float = false, sound = "boing", passive = false, onPoke, alt } = {}) {
  const wrap = document.createElement("span");
  wrap.className = `character ${passive ? "passive" : ""} ${cls}`;
  wrap.innerHTML = `<span class="inner ${float ? "float" : ""}"><img src="${CHARACTERS[pose]}" alt="${esc(alt || `Mpho character, ${pose} pose`)}" draggable="false"></span>`;
  const img = $("img", wrap);
  let n = 0, timer;
  const talk = () => {
    const lines = CHARACTER_LINES[pose];
    $(".speech", wrap)?.remove();
    const b = document.createElement("span");
    b.className = "speech";
    b.textContent = lines[n++ % lines.length];
    wrap.prepend(b);
    img.classList.remove("hop"); void img.offsetWidth; img.classList.add("hop");
    clearTimeout(timer);
    timer = setTimeout(() => b.remove(), 1800);
  };
  if (passive) wrap.addEventListener("pointerenter", talk);
  else {
    wrap.setAttribute("role", "button");
    wrap.setAttribute("aria-label", "Poke Mpho");
    wrap.addEventListener("click", (e) => { e.stopPropagation(); talk(); play(sound); onPoke?.(); });
  }
  return wrap;
}

/* ---------------- HEADER + FIREFLIES (every page) ---------------- */
function initHeader() {
  const page = document.body.dataset.page;
  const active = page === "project" ? "portfolio" : page;
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === active));
  $(".logo").dataset.sound = "pick";
  const btn = $("#sound-toggle");
  const render = () => { btn.setAttribute("aria-pressed", soundOn); btn.textContent = soundOn ? "🔊 sound on" : "🔇 sound off"; };
  render();
  btn.addEventListener("click", () => {
    soundOn = !soundOn;
    localStorage.setItem("mpho-sound", soundOn ? "1" : "0");
    render();
    if (soundOn) setTimeout(() => play("pick"), 30);
  });
}

function initFireflies() {
  const cv = $("#fireflies");
  if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = cv.getContext("2d");
  let W = 0, H = 0;
  const mouse = { x: -999, y: -999 };
  const resize = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
  resize();
  const flies = Array.from({ length: 42 }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 2 + 1, p: Math.random() * 6.28 }));
  const color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  (function frame() {
    c.clearRect(0, 0, W, H);
    for (const f of flies) {
      const dx = f.x - mouse.x, dy = f.y - mouse.y, d = Math.hypot(dx, dy) || 1;
      if (d < 120) { f.vx += (dx / d) * 0.25; f.vy += (dy / d) * 0.25; }
      f.vx *= 0.97; f.vy *= 0.97;
      f.x += f.vx + Math.sin(f.p) * 0.2; f.y += f.vy + Math.cos(f.p) * 0.2; f.p += 0.02;
      if (f.x < 0) f.x = W; if (f.x > W) f.x = 0; if (f.y < 0) f.y = H; if (f.y > H) f.y = 0;
      c.globalAlpha = 0.35 + Math.sin(f.p * 3) * 0.3;
      c.beginPath(); c.fillStyle = color; c.shadowColor = color; c.shadowBlur = 12;
      c.arc(f.x, f.y, f.r, 0, 6.28); c.fill();
    }
    requestAnimationFrame(frame);
  })();
  addEventListener("resize", resize);
  addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener("pointerdown", (e) => {
    for (let i = 0; i < 8; i++) {
      const s = document.createElement("i"), a = (i / 8) * 6.28;
      s.className = "spark";
      s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px";
      s.style.setProperty("--dx", Math.cos(a) * 34 + "px"); s.style.setProperty("--dy", Math.sin(a) * 34 + "px");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 750);
    }
  });
}

/* ---------------- HOME ---------------- */
function initHome() {
  const pillars = $("#pillars");
  [["design", "design"], ["illustration", "illustrations"], ["code", "code"]].forEach(([cat, label]) => {
    const a = document.createElement("a");
    a.href = `portfolio.html?filter=${cat}`;
    a.className = "pillar";
    a.dataset.sound = "pick";
    a.innerHTML = `<span class="label">${label}</span>`;
    a.appendChild(makeCharacter(cat, { passive: true }));
    pillars.insertBefore(a, $(".ground", pillars));
  });
  const sq = $("#side-quests");
  SIDE_QUESTS.forEach((q) => {
    if (q.url) {
      sq.insertAdjacentHTML("beforeend", `<a href="${q.url}" target="_blank" rel="noopener noreferrer" class="btn-ghost-game" data-sound="whoosh">${esc(q.label)} ↗</a>`);
      return;
    }
    const b = document.createElement("button");
    b.className = "btn-ghost-game";
    b.textContent = q.label;
    b.addEventListener("click", () => {
      play("pop");
      if ($(".speech", b)) return;
      b.insertAdjacentHTML("beforeend", `<span class="speech">quest unlocking soon ✦</span>`);
      setTimeout(() => $(".speech", b)?.remove(), 1800);
    });
    sq.appendChild(b);
  });
}

/* ---------------- PORTFOLIO ---------------- */
function initPortfolio() {
  const FILTERS = ["all", "design", "illustration", "code"];
  let filter = new URLSearchParams(location.search).get("filter");
  if (!FILTERS.includes(filter)) filter = "all";

  const filtersEl = $("#filters");
  FILTERS.forEach((f) => {
    const b = document.createElement("button");
    b.textContent = f === "illustration" ? "illustrations" : f;
    b.addEventListener("click", () => { play("pick"); filter = f; history.replaceState(null, "", `?filter=${f}`); render(); });
    b.dataset.f = f;
    filtersEl.appendChild(b);
  });

  function card(p) {
    let thumb;
    if (p.live) thumb = `<div class="thumb"><img src="${p.cover}" alt=""><iframe src="${p.external}" title="${esc(p.title)} live preview" loading="lazy" tabindex="-1"></iframe><span class="live-badge">● LIVE</span></div>`;
    else if (p.cover) thumb = `<div class="thumb"><img src="${p.cover}" alt="${esc(p.title)}" loading="lazy"></div>`;
    else thumb = `<div class="thumb empty">🛋️</div>`;
    if (p.soon) thumb = thumb.replace("</div>", `<span class="live-badge">coming soon</span></div>`);
    const href = p.soon ? "#" : p.external || `project.html?p=${p.slug}`;
    const ext = p.soon ? ` data-soon="1" data-sound="pop"` : p.external ? ` target="_blank" rel="noopener noreferrer" data-sound="whoosh"` : ` data-sound="pick"`;
    return `<a class="card tilt fade-up" href="${href}"${ext}>${thumb}<div class="body">
      <div class="title-row"><b>${esc(p.title)}</b>${p.external || p.soon ? '<span class="accent">↗</span>' : ""}</div>
      <p>${esc(p.blurb)}</p>
      <div class="tags"><span class="tag cat">${p.category === "illustration" ? "illustrations" : p.category}</span>${p.tools.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    </div></a>`;
  }

  function render() {
    filtersEl.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.f === filter));
    const cards = $("#cards");
    cards.innerHTML = PROJECTS.filter((p) => filter === "all" || p.category === filter).map(card).join("");
    cards.querySelectorAll("[data-soon]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      if ($(".speech", a)) return;
      a.insertAdjacentHTML("beforeend", `<span class="speech">going live soon ✦</span>`);
      setTimeout(() => $(".speech", a)?.remove(), 1800);
    }));
    initTilt(cards);
    // scale the live website preview to fit its card
    cards.querySelectorAll("iframe").forEach((fr) => {
      const box = fr.parentElement;
      new ResizeObserver(([e]) => (fr.style.transform = `scale(${e.contentRect.width / 1280})`)).observe(box);
      fr.addEventListener("load", () => (fr.style.opacity = 1));
    });
    // characters swinging on vines
    const sw = $("#swingers");
    sw.innerHTML = "";
    const cats = filter === "all" ? ["design", "illustration", "code"] : [filter];
    const spots = filter === "all" ? ["left:2%", "right:3%", "right:18%"] : ["right:4%"];
    const lengths = filter === "all" ? [90, 150, 40] : [120];
    cats.forEach((c, i) => {
      const spot = document.createElement("div");
      spot.className = "swing-spot";
      spot.style.cssText = `${spots[i]};animation-delay:${i * 0.15}s`;
      spot.innerHTML = `<div class="swinger" style="animation-delay:${-i * 1.1}s"><div class="vine" style="height:${lengths[i]}px"></div><span class="leaf">🍃</span></div>`;
      $(".swinger", spot).appendChild(makeCharacter(c, { sound: "giggle" }));
      sw.appendChild(spot);
    });
  }
  render();
}

/** Cards lean towards your mouse in 3D. */
function initTilt(root) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  root.querySelectorAll(".tilt").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateY(-6px)`;
      el.style.setProperty("--gx", (x + 0.5) * 100 + "%"); el.style.setProperty("--gy", (y + 0.5) * 100 + "%");
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}

/* ---------------- PROJECT PAGES ---------------- */
function processSteps(steps) {
  return `<div class="process"><p class="pixel">behind the scenes · how I made it</p><ol>${steps
    .map(([t, d], i) => `<li><span class="pixel">step ${i + 1}</span><b>${t}</b><p>${d}</p></li>`).join("")}</ol></div>`;
}

let lbItems = [], lbIndex = 0;
function openLightbox(items, i) {
  lbItems = items; lbIndex = i;
  const lb = $("#lightbox"), it = items[i];
  $("#lb-img").src = it.src; $("#lb-img").alt = it.title;
  $("#lb-title").textContent = it.title;
  $("#lb-count").textContent = `${i + 1} / ${items.length}`;
  const link = $("#lb-link");
  link.hidden = !it.link; link.href = it.link || "#";
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeLightbox() { $("#lightbox").hidden = true; document.body.style.overflow = ""; }
function stepLightbox(d) { play("flip"); openLightbox(lbItems, (lbIndex + d + lbItems.length) % lbItems.length); }

function gallery(items, linkOut) {
  return `<div class="masonry">${items.map((it, i) => {
    const img = `<img src="${it.src}" alt="${esc(it.title)}" loading="lazy">`;
    const media = linkOut && it.link
      ? `<a class="open" href="${it.link}" target="_blank" rel="noopener noreferrer" data-sound="whoosh" title="Read the article on PDBY">${img}<span class="hover-tag">read on PDBY ↗</span></a>`
      : `<button class="open" data-lb="${i}">${img}</button>`;
    const note = it.note ? `<small>${esc(it.note)}</small>` : linkOut && !it.link ? `<small>print piece</small>` : "";
    return `<figure class="piece fade-up" style="animation-delay:${i * 40}ms">${media}
      <figcaption><span><span class="t">${esc(it.title)}</span>${note}</span>
      <button class="zoom" data-lb="${i}" aria-label="View ${esc(it.title)} larger">🔍</button></figcaption></figure>`;
  }).join("")}</div>`;
}

function initProject() {
  const slug = new URLSearchParams(location.search).get("p");
  const p = PROJECTS.find((x) => x.slug === slug && !x.external);
  const el = $("#project");
  if (!p) {
    el.innerHTML = `<div class="center" style="padding:6rem 0"><h1>project not found</h1><p style="margin-top:1.5rem"><a href="portfolio.html" class="btn-game">back to the work</a></p></div>`;
    return;
  }
  document.title = `${p.title} — Mpho M`;
  let intro = `<p>${esc(p.blurb)}</p>`, body = "", items = [];

  if (slug === "pdby") {
    items = PDBY;
    intro = `<p><b class="accent">${PDBY.length} published pieces</b> drawn for student journalism at PDBY, where I started out not knowing WordPress and got promoted to Web Manager. <b>Click any illustration</b> to read the article it was made for, or tap 🔍 to see it bigger.</p>`;
    body = gallery(PDBY, true) + processSteps([
      ["Read the brief", "Each piece starts with the writer's article and the one feeling it needs to land."],
      ["Thumbnails", "Quick sketches to find a visual metaphor that reads at a glance."],
      ["Final art", "Clean line and colour, then delivered for web alongside the article."],
    ]);
  } else if (slug === "comic") {
    intro = `<p>Grab a hot drink ☕ and read the full comic below. It stars Clementine, the character I developed in my sketches.</p>`;
    body = `<div class="comic-grid"><img src="${IMG}comic_cover.webp" alt="Clementine in Between comic cover" class="framed" style="width:100%">
      <div class="framed"><object data="${IMG}clementine_comic.pdf" type="application/pdf"><p style="padding:2rem;color:var(--paper-fg)">Your browser can't show the comic inline.</p></object></div></div>
      <p style="margin-top:1.25rem"><a href="${IMG}clementine_comic.pdf" target="_blank" rel="noopener noreferrer" class="btn-game">open the comic full screen ↗</a></p>`;
  } else if (slug === "sketches") {
    items = SKETCHES;
    intro = `<p>How Clementine came to life: an original drawing, three style studies, the official design and an emotions sheet that fed straight into the comic.</p>`;
    body = gallery(SKETCHES, false);
  } else if (slug === "blender-room") {
    intro = `<p>A room I modelled, textured, lit and rendered in Blender. Flip through the full-room shots and close-ups below.</p>`;
    body = `<div><div class="viewer framed" id="viewer"></div><div class="thumbs" id="thumbs">${BLENDER.map((it, n) =>
      `<button data-n="${n}">${it.src ? `<img src="${it.src}" alt="" style="width:100%;height:100%;object-fit:cover">` : esc(it.title)}</button>`).join("")}</div></div>` +
      processSteps([
        ["Blockout", "Basic shapes to get the room's scale and layout right."],
        ["Modelling & materials", "Furniture, props and textures added piece by piece."],
        ["Lighting & render", "Lights placed to set the mood, then rendered wide and close-up."],
      ]);
  } else if (slug === "isometric-room") {
    intro = `<p>I took a photo of a real kitchen and rebuilt it as an isometric "3D" room using only flat shapes in Illustrator. <b>Drag across the image</b> to compare my illustration with the reference.</p>`;
    body = `<div class="compare framed" id="compare">
      <img src="${IMG}iso_room.webp" alt="Isometric Illustrator room">
      <div class="before" id="before"><img src="${IMG}iso_reference.webp" alt="Reference photo of the kitchen"></div>
      <div class="bar" id="bar"><span>◀▶</span></div>
      <span class="chip-dark" style="left:.75rem;top:.75rem">reference photo</span>
      <span class="chip-dark" style="right:.75rem;top:.75rem">my illustration</span>
      <input type="range" min="0" max="100" value="50" aria-label="Compare reference photo and illustration"></div>` +
      processSteps([
        ["Reference", "Photographed the space and noted every cupboard, appliance and colour."],
        ["Isometric grid", "Built the walls and floor on a 30° grid so every object shares the same angles."],
        ["Shapes & shading", "Each surface got a light, mid and dark tone to fake depth without any 3D software."],
      ]);
  } else if (slug === "shirt") {
    intro = `<p>A retro, rubber-hose style character tee inspired by the fruit of the Spirit — gentleness — from Galatians 5:22–23.</p>`;
    body = `<div class="two-col"><div class="shirt framed" id="shirt"><img src="${IMG}shirt_final.webp" alt="Gentleness shirt design on a model"><span class="chip-dark" id="zoom-hint" style="left:.75rem;bottom:.75rem">hover to zoom</span></div>
      <div class="stack" style="opacity:.85"><p><b class="accent">The idea:</b> a cheerful character that makes a verse feel friendly and wearable.</p>
      <p><b class="accent">The look:</b> one warm orange on white, checkerboard ground, hand-lettered type wrapped around the character.</p>
      <p><b class="accent">The tools:</b> drawn and lettered in Illustrator, then mocked up on a model.</p></div></div>`;
  }

  el.innerHTML = `<a href="portfolio.html" class="back" data-sound="pick">← back to the work</a>
    <h1>${esc(p.title)}</h1><div class="lead">${intro}</div><div class="content">${body}</div>`;

  // lightbox
  el.querySelectorAll("[data-lb]").forEach((b) => b.addEventListener("click", () => { play("pop"); openLightbox(items, +b.dataset.lb); }));
  $("#lb-close").onclick = closeLightbox;
  $("#lb-prev").onclick = (e) => { e.stopPropagation(); stepLightbox(-1); };
  $("#lb-next").onclick = (e) => { e.stopPropagation(); stepLightbox(1); };
  $("#lightbox").onclick = (e) => { if (e.target.id === "lightbox") closeLightbox(); };
  $("#lightbox figure").onclick = (e) => e.stopPropagation();
  addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
  });

  // blender viewer
  if ($("#viewer")) {
    const show = (n) => {
      const it = BLENDER[n];
      $("#viewer").innerHTML = (it.src ? `<img src="${it.src}" alt="${esc(it.title)}">`
        : `<div class="center"><span style="font-size:3.75rem">🛋️</span><p class="pixel muted" style="margin-top:1rem;font-size:.6rem">render loading in…</p><p style="margin-top:.25rem;font-size:.875rem;opacity:.7">${esc(it.title)}</p></div>`) +
        `<span class="chip-dark" style="left:.75rem;bottom:.75rem">${n + 1} / ${BLENDER.length} · ${esc(it.title)}</span>`;
      document.querySelectorAll("#thumbs button").forEach((b) => b.setAttribute("aria-pressed", +b.dataset.n === n));
    };
    document.querySelectorAll("#thumbs button").forEach((b) => b.addEventListener("click", () => { play("flip"); show(+b.dataset.n); }));
    show(0);
  }

  // before/after slider
  if ($("#compare")) {
    const input = $("#compare input");
    const set = () => { $("#before").style.clipPath = `inset(0 ${100 - input.value}% 0 0)`; $("#bar").style.left = input.value + "%"; };
    input.addEventListener("input", set);
    set();
  }

  // shirt hover zoom
  if ($("#shirt")) {
    const box = $("#shirt"), img = $("img", box);
    box.addEventListener("pointermove", (e) => {
      const r = box.getBoundingClientRect();
      img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
      img.style.transform = "scale(2)";
      $("#zoom-hint").hidden = true;
    });
    box.addEventListener("pointerleave", () => { img.style.transform = ""; $("#zoom-hint").hidden = false; });
  }
}

/* ---------------- ABOUT (desktop with folders + windows) ---------------- */
function initAbout() {
  const stage = $("#stage");
  let playing = false, zTop = 1, noteN = 0;
  const setPlaying = (on) => {
    playing = on;
    stage.classList.toggle("playing", on);
    $("#vibing").hidden = !on;
    document.querySelectorAll(".note-rise").forEach((n) => {
      n.style.setProperty("--d", (on ? n.dataset.d / 2 : n.dataset.d) + "s");
      n.style.setProperty("--o", on ? +n.dataset.o + 0.3 : n.dataset.o);
    });
    document.querySelectorAll('[data-folder="music"] .icon, [data-folder="pt"] .icon').forEach((e) => e.classList.toggle("float", on));
  };

  // floating music notes
  const notes = $("#notes");
  for (let i = 0; i < 22; i++) {
    const s = document.createElement("span");
    s.className = "note-rise";
    s.textContent = ["♪", "♫", "♩", "♬", "𝄞"][i % 5];
    s.dataset.d = 12 + ((i * 7) % 12);
    s.dataset.o = 0.15 + ((i * 11) % 30) / 100;
    s.style.cssText = `left:${(i * 47) % 100}%;font-size:${16 + ((i * 13) % 26)}px;--d:${s.dataset.d}s;--delay:${-((i * 3.3) % 20)}s;--o:${s.dataset.o};--r:${(i % 2 ? 1 : -1) * (10 + (i % 4) * 8)}deg`;
    notes.appendChild(s);
  }
  // click the background for a note burst
  stage.addEventListener("pointerdown", (e) => {
    if (e.target !== stage && e.target !== notes) return;
    const r = stage.getBoundingClientRect();
    playNote(noteN);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + Math.random();
      const s = document.createElement("span");
      s.className = "note-burst";
      s.textContent = ["♪", "♫", "♬", "♩", "𝄞"][(noteN + i) % 5];
      s.style.cssText = `left:${e.clientX - r.left}px;top:${e.clientY - r.top}px;--dx:${Math.cos(a) * 70}px;--dy:${Math.sin(a) * 70 - 30}px;--r:${(Math.random() * 60 - 30).toFixed(0)}deg`;
      notes.appendChild(s);
      setTimeout(() => s.remove(), 1150);
    }
    noteN++;
  });

  $("#me-char").appendChild(makeCharacter("me", { float: true, sound: "giggle", alt: "Mpho" }));

  // YouTube needs to know which website is playing the video, otherwise it shows "video unavailable / error 153".
  const origin = location.protocol.startsWith("http") ? `&origin=${encodeURIComponent(location.origin)}` : "";
  const yt = (id) => `<iframe class="yt" src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1&enablejsapi=1${origin}" title="YouTube player" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
    ${location.protocol === "file:" ? `<p class="yt-link" style="opacity:.8"></p>` : ""}
    <a class="yt-link" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">not playing? open it on YouTube ↗</a>`;

  // each window: title, width, html, and an optional setup function
  const WINDOWS = {
    about: { label: "about_me.txt", x: 12, y: 14, w: 340, title: "about_me.txt", html: () => `
      <p class="display" style="font-size:1.25rem">hi, I'm Mpho</p>
      <p>BIS Multimedia student at the University of Pretoria. I turn "this could be cool" ideas into things people can see, use and click — across web, UX/UI, illustration and design.</p>
      <p>You'll usually find me with a hot drink in hand, South African jazz in my ears, and a Portuguese flashcard somewhere nearby. I love music. Like, really love it.</p>
      <p style="opacity:.6">psst… open the other folders, they do things.</p>` },
    skills: { label: "skills", x: 8, y: 50, w: 400, title: "skills", html: () => `
      ${SKILLS.map((g) => `<div><p class="pixel coffee" style="font-size:.55rem;margin-bottom:.5rem">${g.group}</p><div class="logo-grid">${g.items.map((s) => `
        <button class="skill-logo" aria-label="${s.name}"><img src="${s.logo}" alt="" class="${s.invert ? "inv" : ""}" draggable="false"><span>${s.name}</span></button>`).join("")}</div></div>`).join("")}
      <a href="portfolio.html" class="btn-game small">see the proof →</a>`,
      setup(w) {
        w.querySelectorAll(".skill-logo").forEach((b, i) => {
          b.addEventListener("mouseenter", () => playNote(i));
          b.addEventListener("click", () => { play("pop"); b.classList.remove("spin-once"); void b.offsetWidth; b.classList.add("spin-once"); });
        });
      } },
    log: { label: "fun_facts_quiz", x: 16, y: 80, w: 390, title: "fun facts quiz — how well do you know me?", html: () => `
      <p style="opacity:.7">Everything here is somewhere on my website. Pick an answer!</p>
      <div class="between"><p class="pixel qnum" style="font-size:.6rem"></p><p class="pixel coffee qscore" style="font-size:.55rem"></p></div>
      <div class="xp-bar"><i></i></div>
      <div class="quiz"></div>`,
      setup(w) {
        let i = 0, score = 0;
        const box = $(".quiz", w);
        const show = () => {
          $(".xp-bar i", w).style.width = (i / QUIZ.length) * 100 + "%";
          $(".qscore", w).textContent = `${score} correct`;
          if (i >= QUIZ.length) {
            $(".qnum", w).textContent = "DONE ✦";
            const msg = score === QUIZ.length ? "Perfect score! You were paying attention ✦" : score >= 4 ? "Nice! You know me pretty well." : "Have another look around and try again!";
            box.innerHTML = `<p class="display" style="font-size:1.1rem">${score} / ${QUIZ.length}</p><p>${msg}</p><button class="btn-game small q-again">play again</button>`;
            if (score === QUIZ.length) play("chord");
            $(".q-again", box).addEventListener("click", () => { i = 0; score = 0; show(); });
            return;
          }
          const item = QUIZ[i];
          $(".qnum", w).textContent = `Q${i + 1} / ${QUIZ.length}`;
          box.innerHTML = `<p class="quiz-q"><b>${item.q}</b></p><div class="quiz-opts">${item.a.map((t, n) => `<button class="quiz-opt" data-n="${n}">${t}</button>`).join("")}</div><p class="quiz-fb" aria-live="polite"></p>`;
          box.querySelectorAll(".quiz-opt").forEach((btn) => btn.addEventListener("click", () => {
            const right = +btn.dataset.n === item.ok;
            box.querySelectorAll(".quiz-opt").forEach((o) => { o.disabled = true; if (+o.dataset.n === item.ok) o.classList.add("right"); });
            if (!right) btn.classList.add("wrong");
            if (right) score++;
            play(right ? "chord" : "pop");
            $(".quiz-fb", box).textContent = right ? "Correct! ✦" : `Not quite — it's "${item.a[item.ok]}".`;
            setTimeout(() => { i++; show(); }, 1300);
          }));
        };
        show();
      } },
    drinks: { label: "hot drinks", x: 80, y: 14, w: 360, title: "hot drinks ☕", html: () => `
      <p>Winter, autumn, spring or summer — there's always a hot drink next to me. Pick one and pour.</p>
      <div class="chips">${DRINKS.map((d, i) => `<button data-drink="${i}" aria-pressed="${i === 0}">${d.emoji} ${d.label}</button>`).join("")}</div>
      <div class="mug-row"><button class="mug" aria-label="Pour"><span class="steamies" hidden><i></i><i style="animation-delay:.4s"></i><i style="animation-delay:.8s"></i></span><span class="fill" style="height:0"></span><span class="handle"></span></button>
      <div><p class="display drink-name" style="font-size:1.125rem"></p><p class="drink-note" style="opacity:.7"></p><p class="pixel drink-msg" style="margin-top:.5rem;font-size:.55rem"></p></div></div>`,
      setup(w) {
        let drink = DRINKS[0], level = 0;
        const render = () => {
          $(".fill", w).style.height = level + "%"; $(".fill", w).style.background = drink.fill;
          $(".steamies", w).hidden = level < 100;
          $(".drink-name", w).textContent = drink.label; $(".drink-note", w).textContent = drink.note;
          $(".drink-msg", w).textContent = level >= 100 ? "perfect. ready to work ✦" : "click the mug to pour";
        };
        w.querySelectorAll("[data-drink]").forEach((b) => b.addEventListener("click", () => {
          play("pick"); drink = DRINKS[+b.dataset.drink]; level = 0;
          w.querySelectorAll("[data-drink]").forEach((x) => x.setAttribute("aria-pressed", x === b));
          render();
        }));
        $(".mug", w).addEventListener("click", () => { play("pour"); level = level >= 100 ? 0 : Math.min(100, level + 34); render(); });
        render();
      } },
    music: { label: "now playing ♪", x: 86, y: 48, w: 380, title: "now playing ♪", html: () => `
      <p>South African jazz is my comfort sound. This one lives on repeat:</p>
      <div class="player"><div class="turntable"><div class="vinyl"></div><span class="arm"></span></div>
      <div><p class="display" style="font-size:1.125rem;line-height:1.2">${SONGS.jazz.title}</p><p>${SONGS.jazz.artist}</p><p style="font-size:.75rem;opacity:.6">${SONGS.jazz.album}</p>
      <button class="dark-btn">▶ drop the needle</button></div></div><div class="yt-slot"></div>`,
      setup(w) {
        let on = false;
        $(".dark-btn", w).addEventListener("click", (e) => {
          play(on ? "close" : "chord"); on = !on; setPlaying(on);
          e.currentTarget.textContent = on ? "❚❚ stop" : "▶ drop the needle";
          $(".vinyl", w).classList.toggle("spin", on); $(".arm", w).classList.toggle("on", on);
          $(".yt-slot", w).innerHTML = on ? yt(SONGS.jazz.id) : "";
        });
      } },
    pt: { label: "português 🇧🇷", x: 78, y: 80, w: 380, title: "aprendendo português", html: () => `
      <p>Eu estou aprendendo português brasileiro! Tap a card to flip it.</p>
      <div class="flip-grid">${FLASHCARDS.map(([pt, en]) => `<button class="flip-card"><span class="flip-inner"><span class="flip-face flip-front">${pt}</span><span class="flip-face flip-back">${en}</span></span></button>`).join("")}</div>
      <div class="song-box"><div><p class="pixel accent" style="font-size:.5rem">learning with</p><p class="display">${SONGS.brazil.title}</p><p style="font-size:.75rem;opacity:.75">${SONGS.brazil.artist}</p></div><button>▶ tocar</button></div><div class="yt-slot"></div>`,
      setup(w) {
        w.querySelectorAll(".flip-card").forEach((c) => c.addEventListener("click", () => { play("flip"); $(".flip-inner", c).classList.toggle("flipped"); }));
        let on = false;
        $(".song-box button", w).addEventListener("click", (e) => {
          play(on ? "close" : "chord"); on = !on; setPlaying(on);
          e.currentTarget.textContent = on ? "❚❚ pausa" : "▶ tocar";
          $(".yt-slot", w).innerHTML = on ? yt(SONGS.brazil.id) : "";
        });
      } },
  };

  const openWins = {};
  function openWindow(id) {
    play("open");
    if (openWins[id]) { openWins[id].style.zIndex = 30 + ++zTop; return; }
    const cfg = WINDOWS[id], n = Object.keys(openWins).length;
    const x = Math.max(10, stage.getBoundingClientRect().width / 2 - 190 + (n % 4) * 34 - 60), y = 40 + (n % 4) * 34;
    const w = document.createElement("div");
    w.className = "window";
    w.setAttribute("role", "dialog");
    w.setAttribute("aria-label", cfg.title);
    w.style.cssText = `z-index:${30 + ++zTop};--wx:${x}px;--wy:${y}px;--ww:${cfg.w}px`;
    w.innerHTML = `<div class="win-bar"><span class="pixel">${cfg.title}</span><button class="win-close" aria-label="Close window">✕</button></div><div class="win-body">${cfg.html()}</div>`;
    w.addEventListener("pointerdown", () => (w.style.zIndex = 30 + ++zTop));
    // drag by the title bar
    const bar = $(".win-bar", w);
    let drag = null, pos = { x, y };
    bar.addEventListener("pointerdown", (e) => { if (e.target.closest(".win-close")) return; bar.setPointerCapture(e.pointerId); drag = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y }; });
    bar.addEventListener("pointermove", (e) => {
      if (!drag) return;
      pos = { x: drag.ox + e.clientX - drag.sx, y: drag.oy + e.clientY - drag.sy };
      w.style.setProperty("--wx", pos.x + "px"); w.style.setProperty("--wy", pos.y + "px");
    });
    bar.addEventListener("pointerup", () => (drag = null));
    $(".win-close", w).addEventListener("click", () => {
      play("close"); w.remove(); delete openWins[id];
      if (id === "music" || id === "pt") setPlaying(false);
    });
    stage.appendChild(w);
    cfg.setup?.(w);
    openWins[id] = w;
  }

  // folders (click to open, drag to move)
  const folders = $("#folders");
  Object.entries(WINDOWS).forEach(([id, f]) => {
    const b = document.createElement("button");
    b.className = "folder";
    b.dataset.folder = id;
    b.setAttribute("aria-label", `Open ${f.label}`);
    b.style.cssText = `--fx:${f.x}%;--fy:${f.y}%`;
    b.innerHTML = `<span class="icon"><span class="tab"></span></span><span class="name">${f.label}</span>`;
    let off = { x: 0, y: 0 }, drag = null;
    b.addEventListener("pointerdown", (e) => { b.setPointerCapture(e.pointerId); drag = { sx: e.clientX, sy: e.clientY, ox: off.x, oy: off.y, moved: false }; });
    b.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (Math.hypot(dx, dy) > 5) drag.moved = true;
      if (drag.moved) { off = { x: drag.ox + dx, y: drag.oy + dy }; b.style.translate = `${off.x}px ${off.y}px`; }
    });
    b.addEventListener("pointerup", () => { const moved = drag?.moved; drag = null; if (!moved) openWindow(id); });
    b.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openWindow(id); } });
    folders.appendChild(b);
  });
}

/* ---------------- CONTACT ---------------- */
function initContact() {
  // Email icon: opens the visitor's own email app (Gmail, Yahoo, Outlook…) and copies your address too.
  const mailto = (subject = "Hi Mpho!", body = "") => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $("#gmail").href = mailto();
  $("#gmail").removeAttribute("target");
  $("#gmail").addEventListener("click", () => {
    navigator.clipboard?.writeText(EMAIL).then(() => { $("#status").textContent = `${EMAIL} copied ✦`; }).catch(() => {});
  });
  let pokes = 0;
  $("#contact-char").appendChild(makeCharacter("contact", {
    float: true, alt: "Mpho waving hello",
    onPoke: () => { pokes++; $("#pokes").textContent = `poked ${pokes} time${pokes > 1 ? "s" : ""}`; },
  }));
  // Messages are delivered straight to your Gmail by FormSubmit (free, no server needed).
  // The very first message sends you a one-time "Activate" email — click it once and you're set.
  $("#contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.currentTarget, d = Object.fromEntries(new FormData(f));
    if (d._honey) return; // spam bot
    const btn = $("button[type=submit]", f), status = $("#status");
    btn.disabled = true; status.textContent = "sending…";
    try {
      const subject = `Portfolio message from ${d.name}`;
      if (!WEB3FORMS_KEY) {
        // No form key yet: open Gmail in a new tab with the message already written, addressed to Mpho.
        const gm = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`)}`;
        window.open(gm, "_blank", "noopener");
        status.innerHTML = `Gmail opened with your message — just press send. No Gmail? <a href="${mailto(subject, `${d.message}\n\n— ${d.name} (${d.email})`)}" style="text-decoration:underline">use your email app</a>`;
        play("whoosh");
        return;
      }
      const r = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ access_key: WEB3FORMS_KEY, name: d.name, email: d.email, message: d.message, subject, replyto: d.email, from_name: "Mpho M portfolio" }),
          });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.success === "false" || j.success === false) throw new Error(j.message || "failed");
      play("whoosh");
      const bird = document.createElement("span");
      bird.className = "fly-away"; bird.textContent = "🕊️";
      $(".send-row").appendChild(bird);
      setTimeout(() => bird.remove(), 1500);
      status.textContent = "Sent! I'll get back to you soon ✉️";
      f.reset();
    } catch {
      status.innerHTML = `Couldn't send right now. <a href="${mailto(`Portfolio message from ${d.name}`, `${d.message}\n\n— ${d.name} (${d.email})`)}" style="text-decoration:underline">Send it from your email app instead</a>`;
    } finally { btn.disabled = false; }
  });
}

/* ---------------- PAGE TRANSITIONS ---------------- */
function initTransitions() {
  const wipe = document.createElement("div");
  wipe.className = "wipe"; wipe.innerHTML = "<span>Mpho M ✦</span>";
  document.body.appendChild(wipe);
  // arriving: slide the curtain off the page
  if (sessionStorage.getItem("mpho-wipe")) { sessionStorage.removeItem("mpho-wipe"); wipe.classList.add("out"); }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || a.target === "_blank" || e.ctrlKey || e.metaKey || e.shiftKey) return;
    const href = a.getAttribute("href");
    if (!/^[\w-]+\.html/.test(href) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    play("whoosh");
    wipe.classList.remove("out"); void wipe.offsetWidth; wipe.classList.add("in");
    sessionStorage.setItem("mpho-wipe", "1");
    setTimeout(() => { location.href = href; }, 450);
  });
  window.addEventListener("pageshow", (e) => { if (e.persisted) wipe.classList.remove("in"); });
  // scroll reveal for cards and sections
  const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("shown"); io.unobserve(en.target); } }), { threshold: 0.12 });
  setTimeout(() => document.querySelectorAll("main section, .card, .piece").forEach((el) => { el.classList.add("reveal"); io.observe(el); }), 50);
}

/* ---------------- START ---------------- */
initTransitions();
initHeader();
initFireflies();
({ home: initHome, portfolio: initPortfolio, project: initProject, about: initAbout, contact: initContact })[document.body.dataset.page]?.();
