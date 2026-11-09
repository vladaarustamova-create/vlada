/* LENGUA · 言葉 · لغة — interactions. Content comes from data.js (DATA). */
(function () {
  "use strict";

  /* ---------------- helpers ---------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const PREFIX = "lkl.";
  const store = {
    get(k, d) { try { const v = localStorage.getItem(PREFIX + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const DAY = 864e5;

  /* ---------------- speech (Ondoku / shadowing) ---------------- */
  const LANGS = { es: "es-ES", ja: "ja-JP", ar: "ar-SA" };
  function speak(text, lang) {
    if (!("speechSynthesis" in window) || !text) return;
    const clean = String(text).replace(/[・—]/g, "").replace(/\s+/g, " ").trim();
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = LANGS[lang] || lang;
    const v = speechSynthesis.getVoices().find((x) => x.lang && x.lang.toLowerCase().startsWith(lang));
    if (v) u.voice = v;
    u.rate = lang === "es" ? 0.95 : 0.85;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }
  if ("speechSynthesis" in window) speechSynthesis.getVoices();
  const sayBtn = (text, lang) => `<button class="say" data-say="${esc(text)}" data-lang="${lang}" aria-label="Pronounce">▶</button>`;
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) { e.stopPropagation(); speak(b.dataset.say, b.dataset.lang); }
  });

  /* ---------------- METHODS ---------------- */
  $("#methods").innerHTML = DATA.methods.map((m) => `
    <article class="method"><div class="m-glyph">${m.glyph}</div><h4>${m.name}</h4>
    <div class="m-read">${m.reading}</div><p>${m.text}</p></article>`).join("");

  /* ---------------- KAIZEN streak ---------------- */
  const goalSel = $("#goalMin");
  goalSel.value = String(store.get("goal", 15));
  goalSel.addEventListener("change", () => store.set("goal", +goalSel.value));

  function renderKaizen() {
    const days = new Set(store.get("days", []));
    const today = new Date();
    let streak = 0;
    const d = new Date(today);
    if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
    while (days.has(dayKey(d))) { streak++; d.setDate(d.getDate() - 1); }
    $("#streakNum").textContent = streak;
    let html = "";
    for (let i = 27; i >= 0; i--) {
      const x = new Date(today); x.setDate(x.getDate() - i);
      const k = dayKey(x);
      html += `<i class="${days.has(k) ? "on" : ""} ${i === 0 ? "today" : ""}" title="${k}"></i>`;
    }
    $("#chain").innerHTML = html;
    const done = days.has(dayKey());
    $("#markDay").textContent = done ? "TODAY IS DONE ✓ (undo)" : "MARK TODAY DONE";
  }
  $("#markDay").addEventListener("click", () => {
    const days = new Set(store.get("days", []));
    const k = dayKey();
    days.has(k) ? days.delete(k) : days.add(k);
    store.set("days", [...days]);
    renderKaizen();
  });
  renderKaizen();

  /* ---------------- HANSEI journal ---------------- */
  function renderJournal() {
    const j = store.get("hansei", []);
    $("#journal").innerHTML = j.map((x) => `<li><time>${esc(x.d)}</time>${esc(x.t)}</li>`).join("");
  }
  $("#hanseiSave").addEventListener("click", () => {
    const t = $("#hanseiText").value.trim();
    if (!t) return;
    const j = store.get("hansei", []);
    j.unshift({ d: new Date().toLocaleDateString(), t });
    store.set("hansei", j.slice(0, 60));
    $("#hanseiText").value = "";
    renderJournal();
  });
  renderJournal();

  /* ---------------- SPANISH ---------------- */
  $("#deleTable").innerHTML = DATA.dele.map(([p, t, n, d]) =>
    `<tr><td>${p}<small>${d}</small></td><td>${t}</td><td>${n}</td></tr>`).join("");
  $("#esLessons").innerHTML = DATA.esLessons.map((l, i) => `
    <details class="lesson"${i === 0 ? " open" : ""}><summary><span class="tag">${l.tag}</span><span class="t">${l.title}</span><span class="pm">+</span></summary>
    <div class="body">${l.body}</div></details>`).join("");
  $("#esVocab").innerHTML = DATA.esVocab.map(([w, m, mn]) =>
    `<li><span class="w">${w}</span>${sayBtn(w, "es")}<span class="m">${m}</span><span class="mn">${mn}</span></li>`).join("");
  $("#esIdioms").innerHTML = DATA.esIdioms.map(([w, m, lit]) =>
    `<li><span class="w">${w}</span>${sayBtn(w, "es")}<span class="m">${m}</span><span class="mn">${lit}</span></li>`).join("");
  $("#esFalse").innerHTML = DATA.esFalseFriends.map(([w, m, not]) =>
    `<li><span class="w">${w}</span>${sayBtn(w, "es")}<span class="m">= ${m}</span><span class="mn">${not}</span></li>`).join("");

  /* ---------------- JAPANESE: kana ---------------- */
  // 5-column gojūon layout; null = empty cell
  const LAYOUT = [];
  for (let i = 0; i < 35; i++) LAYOUT.push(i);
  LAYOUT.push(35, null, 36, null, 37);
  for (let i = 38; i < 43; i++) LAYOUT.push(i);
  LAYOUT.push(43, null, null, null, 44);
  LAYOUT.push(45, null, null, null, null);

  let kanaMode = "hira";
  function kanaAt(i) {
    const [h, r, mn] = DATA.hiragana[i];
    return kanaMode === "hira"
      ? { g: h, r, mn }
      : { g: DATA.katakana[i], r, mn: `Katakana for “${r}” — same sound as ${h}. Katakana writes foreign words: スペイン (Supein, Spain), パン (pan, bread).` };
  }
  function renderKana() {
    $("#kanaGrid").innerHTML = LAYOUT.map((i) => {
      if (i === null) return `<span class="kana blank"></span>`;
      const k = kanaAt(i);
      return `<button class="kana" data-i="${i}"><span class="g">${k.g}</span><span class="r">${k.r}</span></button>`;
    }).join("");
  }
  function inspectKana(i) {
    const k = kanaAt(i);
    const ins = $("#kanaInspector");
    $(".ins-glyph", ins).textContent = k.g;
    $(".ins-read", ins).textContent = k.r;
    $(".ins-mn", ins).textContent = k.mn;
    $$(".kana", $("#kanaGrid")).forEach((b) => b.classList.toggle("sel", b.dataset.i == i));
    speak(k.g, "ja");
  }
  $("#kanaGrid").addEventListener("click", (e) => { const b = e.target.closest(".kana"); if (b) inspectKana(+b.dataset.i); });
  $$("[data-kana]").forEach((b) => b.addEventListener("click", () => {
    kanaMode = b.dataset.kana;
    $$("[data-kana]").forEach((x) => { x.classList.toggle("on", x === b); x.setAttribute("aria-selected", x === b); });
    renderKana();
  }));
  renderKana();

  /* ---------------- JAPANESE: kanji, grammar, phrases ---------------- */
  $("#kanjiGrid").innerHTML = DATA.kanji.map(([k, m, on, kun, mn], i) => `
    <div class="kanji" data-i="${i}" tabindex="0" role="button" aria-label="${m}">
      <div class="front"><div class="k">${k}</div><div class="km">${m}</div><div class="rd">${kun}</div></div>
      <div class="back"><p>${mn}</p><small>On: ${on}</small><small>Kun: ${kun}</small></div>
    </div>`).join("");
  function flipKanji(card) {
    card.classList.toggle("flip");
    const [k, , on, kun] = DATA.kanji[+card.dataset.i];
    speak(kun !== "—" ? kun : on, "ja");
  }
  $("#kanjiGrid").addEventListener("click", (e) => { const c = e.target.closest(".kanji"); if (c) flipKanji(c); });
  $("#kanjiGrid").addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("kanji")) { e.preventDefault(); flipKanji(e.target); } });

  $("#jpGrammar").innerHTML = DATA.jpGrammar.map(([p, m, ex, tr]) =>
    `<li><span class="p">${p}</span><span class="gm">${m}</span><span class="ex">${ex} ${sayBtn(ex, "ja").replace('class="say"', 'class="say" style="display:inline-block;vertical-align:middle;margin-left:4px"')}</span><span class="tr">${tr}</span></li>`).join("");
  $("#jpPhrases").innerHTML = DATA.jpPhrases.map(([j, r, m]) =>
    `<li><span class="w jp">${j}</span>${sayBtn(j, "ja")}<span class="m">${m}</span><span class="mn">${r}</span></li>`).join("");

  /* ---------------- ARABIC ---------------- */
  const T = "ـ"; // tatweel to show joined forms
  function arForms(ch, connects) {
    return connects
      ? [[ch, "isolated"], [ch + T, "initial"], [T + ch + T, "medial"], [T + ch, "final"]]
      : [[ch, "isolated"], [ch, "initial"], [T + ch, "medial"], [T + ch, "final"]];
  }
  $("#arGrid").innerHTML = DATA.arabic.map(([ch, name, tr], i) =>
    `<button class="kana" data-i="${i}"><span class="g">${ch}</span><span class="r">${tr}</span></button>`).join("");
  function inspectAr(i) {
    const [ch, name, tr, con, mn, es] = DATA.arabic[i];
    const ins = $("#arInspector");
    $(".ins-glyph", ins).textContent = ch;
    $(".ins-read", ins).textContent = `${name} · ${tr}`;
    $(".ins-forms", ins).innerHTML = arForms(ch, con).map(([f, l]) => `<span>${f}<small>${l}</small></span>`).join("");
    $(".ins-mn", ins).innerHTML = `${esc(mn)}<div class="ins-es"><b>Spanish sound:</b> ${esc(es)}</div>${con ? "" : '<div class="ins-es">Never joins the next letter.</div>'}`;
    $$(".kana", $("#arGrid")).forEach((b) => b.classList.toggle("sel", b.dataset.i == i));
    speak(ch, "ar");
  }
  $("#arGrid").addEventListener("click", (e) => { const b = e.target.closest(".kana"); if (b) inspectAr(+b.dataset.i); });
  inspectAr(1);
  $$(".kana", $("#arGrid")).forEach((b) => b.classList.remove("sel"));

  $("#arPhrases").innerHTML = DATA.arPhrases.map(([a, t, m]) =>
    `<li><span class="w ar" dir="rtl">${a}</span>${sayBtn(a, "ar")}<span class="m">${m}</span><span class="mn">${t}</span></li>`).join("");
  $("#arNumbers").innerHTML = DATA.arNumbers.map(([n, w, t, b]) =>
    `<li><span class="n">${n}</span><span><span class="nw">${w}</span> <span class="nt">${t}</span></span>${b ? `<span class="nb">${b}</span>` : ""}</li>`).join("");

  /* ---------------- EL PUENTE ---------------- */
  $("#sunRow").textContent = DATA.sunLetters.join(" ");
  const KIND = { sun: "☀ sun letter", moon: "☾ moon letter", none: "no article" };
  function markAl(word, kind) {
    // underline the fossilised Arabic article (a- or al-) in the Spanish word
    if (kind === "moon" && /^[aá]l/.test(word)) return `<span class="al">${word.slice(0, 2)}</span>${word.slice(2)}`;
    if (kind === "sun") return `<span class="al">${word.slice(0, 1)}</span>${word.slice(1)}`;
    return word;
  }
  function renderPuente(f = "all") {
    $("#puenteGrid").innerHTML = DATA.puente.filter((p) => f === "all" || p[4] === f).map(([es, ar, tr, m, k]) => `
      <div class="pw"><span class="es">${markAl(es, k)}</span><span class="arw" dir="rtl">${ar}</span>
      <span class="tr">${tr}</span><span class="kind">${KIND[k]}</span><span class="mean">${m}</span></div>`).join("");
  }
  $("#puenteFilter").addEventListener("click", (e) => {
    const c = e.target.closest(".chip"); if (!c) return;
    $$(".chip", $("#puenteFilter")).forEach((x) => x.classList.toggle("on", x === c));
    renderPuente(c.dataset.f);
  });
  renderPuente();
  $("#placeList").innerHTML = DATA.places.map(([n, a, t, m]) =>
    `<li><span class="pn">${n}</span><span class="pa" dir="rtl">${a}</span><span class="pt"><i>${t}</i> — ${m}</span></li>`).join("");

  // guessing game
  function puenteRound() {
    const q = pick(DATA.puente);
    const opts = shuffle([q, ...shuffle(DATA.puente.filter((p) => p !== q)).slice(0, 3)]);
    $("#pgWord").textContent = q[0];
    $("#pgFb").textContent = "";
    $("#pgOpts").innerHTML = opts.map((o) =>
      `<button class="opt" data-ok="${o === q}"><span class="ar" dir="rtl">${o[1]}</span>${o[2]}</button>`).join("");
    $("#pgOpts").onclick = (e) => {
      const b = e.target.closest(".opt"); if (!b || $("#pgOpts").dataset.done === "1") return;
      $("#pgOpts").dataset.done = "1";
      $$(".opt", $("#pgOpts")).forEach((x) => { if (x.dataset.ok === "true") x.classList.add("right"); });
      if (b.dataset.ok !== "true") b.classList.add("wrong");
      $("#pgFb").textContent = `${b.dataset.ok === "true" ? "¡Exacto! " : "Not quite — "}${q[0]} ← ${q[2]}: ${q[3]}. (${KIND[q[4]]})`;
      speak(q[1], "ar");
    };
    $("#pgOpts").dataset.done = "0";
  }
  $("#pgNext").addEventListener("click", puenteRound);
  puenteRound();

  /* ---------------- STUDIO: decks ---------------- */
  const DECKS = {
    hiragana: { label: "日本語 · Hiragana", lang: "ja", cards: DATA.hiragana.map(([k, r, mn]) => ({ f: k, a: r, c: mn, say: k })) },
    katakana: { label: "日本語 · Katakana", lang: "ja", cards: DATA.katakana.map((k, i) => ({ f: k, a: DATA.hiragana[i][1], b: `hiragana ${DATA.hiragana[i][0]}`, say: k })) },
    kanji: { label: "日本語 · Kanji N5", lang: "ja", cards: DATA.kanji.map(([k, m, on, kun, mn]) => ({ f: k, a: m, b: `On ${on} · Kun ${kun}`, c: mn, say: kun !== "—" ? kun : on })) },
    jpPhrases: { label: "日本語 · Phrases", lang: "ja", long: true, cards: DATA.jpPhrases.map(([j, r, m]) => ({ f: j, a: m, b: r, say: j })) },
    esVocab: { label: "Español · B2 vocabulary", lang: "es", long: true, cards: DATA.esVocab.map(([w, m, mn]) => ({ f: w, a: m, c: mn, say: w })) },
    esIdioms: { label: "Español · Modismos", lang: "es", long: true, cards: DATA.esIdioms.map(([w, m, l]) => ({ f: w, a: m, b: l, say: w })) },
    esFalse: { label: "Español · Falsos amigos", lang: "es", long: true, cards: DATA.esFalseFriends.map(([w, m, n]) => ({ f: w, a: m, b: n, say: w })) },
    arabic: { label: "العربية · Alphabet", lang: "ar", cards: DATA.arabic.map(([ch, n, t, , mn, es]) => ({ f: ch, a: `${n} · ${t}`, b: `Spanish: ${es}`, c: mn, say: ch })) },
    arPhrases: { label: "العربية · Phrases", lang: "ar", long: true, cards: DATA.arPhrases.map(([a, t, m]) => ({ f: a, a: m, b: t, say: a })) },
    puente: { label: "El Puente · Spanish → Arabic", lang: "es", long: true, cards: DATA.puente.map(([es, ar, t, m]) => ({ f: es, a: `${ar}  ·  ${t}`, b: m, say: es, sayB: ar })) }
  };
  const deckSel = $("#deckSel");
  deckSel.innerHTML = Object.entries(DECKS).map(([k, d]) => `<option value="${k}">${d.label}</option>`).join("");
  deckSel.value = store.get("deck", "hiragana");
  if (!DECKS[deckSel.value]) deckSel.value = "hiragana";

  // Leitner boxes 0–5 with intervals in days
  const INTERVAL = [0, 1, 3, 7, 14, 30];
  const NEW_PER_SESSION = 10;
  let srs = store.get("srs", {});
  let queue = [], current = null, newSeen = 0;

  const cid = (deck, i) => `${deck}:${i}`;
  function buildQueue() {
    const deck = deckSel.value, now = Date.now();
    const cards = DECKS[deck].cards.map((c, i) => ({ ...c, id: cid(deck, i) }));
    const due = cards.filter((c) => srs[c.id] && srs[c.id].due <= now).sort((a, b) => srs[a.id].due - srs[b.id].due);
    const fresh = cards.filter((c) => !srs[c.id]).slice(0, Math.max(0, NEW_PER_SESSION - newSeen));
    queue = [...due, ...fresh];
  }
  function renderBoxes() {
    const deck = deckSel.value;
    const counts = [0, 0, 0, 0, 0, 0]; let fresh = 0;
    DECKS[deck].cards.forEach((_, i) => { const s = srs[cid(deck, i)]; s ? counts[s.box]++ : fresh++; });
    const max = Math.max(1, ...counts);
    $("#boxStats").innerHTML = counts.map((n, b) => `<i style="height:${6 + (n / max) * 34}px" title="Box ${b + 1}: ${n}"><span>${n}</span></i>`).join("") + `<em>boxes 1–6 · ${fresh} new</em>`;
  }
  function showCard() {
    buildQueue();
    renderBoxes();
    const d = DECKS[deckSel.value];
    const front = $("#cardFront"), back = $("#cardBack");
    back.hidden = true; $("#gradeRow").hidden = true; $("#flipBtn").hidden = false;
    front.className = "card-front " + (d.lang === "es" ? "" : d.lang) + (d.long ? " long" : "");
    if (!queue.length) {
      current = null;
      const next = DECKS[deckSel.value].cards.map((_, i) => srs[cid(deckSel.value, i)]).filter(Boolean).map((s) => s.due).sort((a, b) => a - b)[0];
      front.className = "card-front long";
      front.textContent = "おつかれさま — done for now";
      $("#cardInfo").textContent = next ? `Next review: ${new Date(next).toLocaleString()}. Switch deck or come back later (Kaizen!).` : "Pick another deck.";
      $("#flipBtn").hidden = true;
      return;
    }
    current = queue[0];
    front.textContent = current.f;
    if (d.lang === "ar") front.setAttribute("dir", "rtl"); else front.removeAttribute("dir");
    back.innerHTML = `<div class="a">${esc(current.a)}</div>${current.b ? `<div class="b">${esc(current.b)}</div>` : ""}${current.c ? `<div class="c">${esc(current.c)}</div>` : ""}`;
    const s = srs[current.id];
    $("#cardInfo").textContent = `${queue.length} card${queue.length > 1 ? "s" : ""} in this session · ${s ? `box ${s.box + 1}` : "new card"}`;
  }
  function flip() {
    if (!current) return;
    const back = $("#cardBack");
    if (!back.hidden) return;
    back.hidden = false; $("#gradeRow").hidden = false; $("#flipBtn").hidden = true;
    const d = DECKS[deckSel.value];
    speak(current.sayB || current.say, current.sayB ? "ar" : d.lang);
  }
  function grade(g) {
    if (!current) return;
    const prev = srs[current.id];
    if (!prev) newSeen++;
    let box = prev ? prev.box : 0;
    let due;
    if (g === 0) { box = 0; due = Date.now() + 60e3; }
    else if (g === 1) { due = Date.now() + Math.max(10 * 60e3, (INTERVAL[box] * DAY) / 2); }
    else { box = Math.min(5, box + (g === 3 ? 2 : 1)); due = Date.now() + INTERVAL[box] * DAY; }
    srs[current.id] = { box, due };
    store.set("srs", srs);
    // mark today for Kaizen automatically after studying
    const days = new Set(store.get("days", []));
    if (!days.has(dayKey())) { days.add(dayKey()); store.set("days", [...days]); renderKaizen(); }
    showCard();
  }
  $("#card").addEventListener("click", flip);
  $("#flipBtn").addEventListener("click", flip);
  $("#sayBtn").addEventListener("click", () => current && speak(current.say, DECKS[deckSel.value].lang));
  $("#gradeRow").addEventListener("click", (e) => { const b = e.target.closest("[data-g]"); if (b) grade(+b.dataset.g); });
  document.addEventListener("keydown", (e) => {
    if (studioMode !== "cards" || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
    const r = $("#studio").getBoundingClientRect();
    if (r.top > innerHeight || r.bottom < 0) return;
    if (e.key === " ") { e.preventDefault(); flip(); }
    if (!$("#gradeRow").hidden && ["1", "2", "3", "4"].includes(e.key)) grade(+e.key - 1);
  });

  /* ---------------- STUDIO: quiz ---------------- */
  let studioMode = "cards", score = [0, 0];
  function quizRound() {
    const d = DECKS[deckSel.value];
    const q = pick(d.cards);
    const answers = [...new Set(d.cards.map((c) => c.a))].filter((a) => a !== q.a);
    const opts = shuffle([q.a, ...shuffle(answers).slice(0, 3)]);
    const p = $("#qzPrompt");
    p.className = "game-q " + (d.lang === "es" ? "" : d.lang);
    p.textContent = q.f;
    $("#qzFb").textContent = "";
    $("#qzOpts").dataset.done = "0";
    $("#qzOpts").innerHTML = opts.map((o) => `<button class="opt" data-ok="${o === q.a}">${esc(o)}</button>`).join("");
    $("#qzOpts").onclick = (e) => {
      const b = e.target.closest(".opt"); if (!b || $("#qzOpts").dataset.done === "1") return;
      $("#qzOpts").dataset.done = "1";
      const ok = b.dataset.ok === "true";
      score[1]++; if (ok) score[0]++;
      $("#qzScore").textContent = `${score[0]} / ${score[1]}`;
      $$(".opt", $("#qzOpts")).forEach((x) => { if (x.dataset.ok === "true") x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      $("#qzFb").textContent = (ok ? "正解 · ¡Correcto! · صحيح  " : "") + (q.c || q.b || "");
      speak(q.say, d.lang);
      setTimeout(() => { if ($("#qzOpts").dataset.done === "1" && ok) quizRound(); }, 1800);
    };
  }
  $("#qzNext").addEventListener("click", quizRound);
  function setMode(m) {
    studioMode = m;
    $$("[data-mode]").forEach((b) => b.classList.toggle("on", b.dataset.mode === m));
    $("#cardMode").hidden = m !== "cards";
    $("#quizMode").hidden = m !== "quiz";
    m === "cards" ? showCard() : quizRound();
  }
  $$("[data-mode]").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
  deckSel.addEventListener("change", () => { store.set("deck", deckSel.value); newSeen = 0; score = [0, 0]; $("#qzScore").textContent = "0 / 0"; setMode(studioMode); });
  $$("[data-deck]").forEach((a) => a.addEventListener("click", () => {
    deckSel.value = a.dataset.deck; store.set("deck", deckSel.value); newSeen = 0; setMode("cards");
  }));
  setMode("cards");

  /* ---------------- ATLAS ---------------- */
  const REGION_LABEL = { es: "Español", ja: "日本", ar: "العربية" };
  const LANG_OF = { es: "es", ja: "ja", ar: "ar" };
  let map = null, markers = {}, active = null, route = null;

  function showPlace(id) {
    const p = DATA.atlas.find((x) => x.id === id); if (!p) return;
    const cls = p.region === "ja" ? "jp" : p.region === "ar" ? "ar" : "";
    $("#placePanel").innerHTML = `
      <p class="kicker"><i>${REGION_LABEL[p.region].toUpperCase()} — ${esc(p.era)}</i></p>
      <h3 class="headline sm">${esc(p.name)}</h3>
      <div class="local ${cls}" ${p.region === "ar" ? 'dir="rtl"' : ""}>${esc(p.local)} ${sayBtn(p.local, LANG_OF[p.region]).replace('class="say"', 'class="say" style="display:inline-block;vertical-align:middle"')}</div>
      <h4>HISTORY</h4><p>${esc(p.history)}</p>
      <h4>CULTURE TODAY</h4><p>${esc(p.culture)}</p>
      <h4>WORDS FROM HERE</h4>
      <ul class="words">${p.words.map(([w, m]) => `<li><b class="${cls}">${esc(w)}</b>${esc(m)}</li>`).join("")}</ul>
      ${p.bridge ? '<span class="bridge-note">↔ A bridge between languages — see El Puente</span>' : ""}`;
    if (map) {
      if (active && markers[active]) markers[active].getElement()?.querySelector(".pin")?.classList.remove("on");
      markers[id].getElement()?.querySelector(".pin")?.classList.add("on");
      map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 5), { duration: 0.8 });
    }
    active = id;
  }

  $("#placeIndex").innerHTML = DATA.atlas.map((p, i) => `<li data-r="${p.region}"><button data-id="${p.id}">${i + 1}. ${esc(p.name)}</button></li>`).join("");
  $("#placeIndex").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    showPlace(b.dataset.id);
    $("#atlas").scrollIntoView({ behavior: "smooth" });
  });

  if (window.L) {
    map = L.map("map", { worldCopyJump: true, scrollWheelZoom: false }).setView([30, 45], 2);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd", maxZoom: 18
    }).addTo(map);
    map.on("focus", () => map.scrollWheelZoom.enable());
    map.on("blur", () => map.scrollWheelZoom.disable());
    DATA.atlas.forEach((p, i) => {
      const icon = L.divIcon({ className: "", html: `<div class="pin ${p.region}"><span>${i + 1}</span></div>`, iconSize: [22, 22], iconAnchor: [11, 11] });
      markers[p.id] = L.marker([p.lat, p.lng], { icon, title: p.name, keyboard: true }).addTo(map).on("click", () => showPlace(p.id));
    });
  } else {
    $("#map").innerHTML = `<div class="map-fallback">The map needs an internet connection (Leaflet + map tiles). Use the list of places below — every story is still available.</div>`;
  }

  $("#atlasFilter").addEventListener("click", (e) => {
    const c = e.target.closest(".chip"); if (!c) return;
    if (c.id === "routeBtn") {
      if (!map) return;
      if (route) { map.removeLayer(route); route = null; c.classList.remove("on"); return; }
      // Umayyad route west: Damascus → Cairo → Kairouan → Tangier → Gibraltar → Córdoba
      const pts = [[33.5138, 36.2765], [30.0444, 31.2357], [35.6781, 10.0963], [35.7595, -5.834], [36.14, -5.35], [37.8882, -4.7794]];
      route = L.polyline(pts, { color: "#111", weight: 2.5, dashArray: "6 6" }).addTo(map);
      map.fitBounds(route.getBounds(), { padding: [30, 30] });
      c.classList.add("on");
      $("#placePanel").innerHTML = `<p class="kicker"><i>661 → 756</i></p><h3 class="headline sm">From Damascus to Córdoba</h3>
        <p>The Umayyad caliphs ruled from Damascus. Their armies moved west along North Africa, founding Kairouan (670). In 711 Ṭāriq ibn Ziyād crossed from near Tangier to the rock that still bears his name: <i>jabal Ṭāriq</i> → Gibraltar.</p>
        <p style="margin-top:10px">In 750 the Abbasids overthrew the Umayyads. One prince, ʿAbd al-Raḥmān I, escaped across this same route and in 756 founded an independent emirate in Córdoba. He planted a palm tree from Syria and wrote a poem to it, homesick — the start of al-Andalus’s golden age, and of the Arabic words in your Spanish.</p>`;
      return;
    }
    $$(".chip:not(#routeBtn)", $("#atlasFilter")).forEach((x) => x.classList.toggle("on", x === c));
    const r = c.dataset.r;
    const visible = (p) => r === "all" || (r === "bridge" ? p.bridge : p.region === r);
    DATA.atlas.forEach((p) => {
      if (map) { const m = markers[p.id]; visible(p) ? m.addTo(map) : map.removeLayer(m); }
    });
    $$("#placeIndex li").forEach((li, i) => { li.hidden = !visible(DATA.atlas[i]); });
    if (map) {
      const shown = DATA.atlas.filter(visible).map((p) => [p.lat, p.lng]);
      if (shown.length) map.fitBounds(shown, { padding: [40, 40], maxZoom: 6 });
    }
  });

  $("#timelines").innerHTML = Object.entries(DATA.timelines).map(([k, t]) => `
    <div class="tl"><h4 class="${k === "ja" ? "jp" : k === "ar" ? "ar" : ""}">${t.title}</h4>
    <ol>${t.items.map(([y, e]) => `<li><b>${y}</b>${e}</li>`).join("")}</ol></div>`).join("");

  /* ---------------- PANTHEON ---------------- */
  function scriptify(name) {
    // swap one letter for a script glyph, magazine-style
    const idx = [...name].map((c, i) => (/[a-z]/i.test(c) ? i : -1)).filter((i) => i > 0);
    const j = idx[Math.floor(idx.length / 2)];
    return esc(name.slice(0, j)) + `<span class="sl">${esc(name[j].toLowerCase())}</span>` + esc(name.slice(j + 1));
  }
  $("#pantheon").innerHTML = DATA.pantheon.map(([n], i) => `<li tabindex="0" data-i="${i}">${scriptify(n)}</li>`).join("");
  function showPerson(li) {
    $$("#pantheon li").forEach((x) => x.classList.toggle("on", x === li));
    const [n, r, note] = DATA.pantheon[+li.dataset.i];
    $("#pantheonNote").innerHTML = `<b>${esc(n)}</b> · ${REGION_LABEL[r]} — ${esc(note)}`;
  }
  $("#pantheon").addEventListener("click", (e) => { const li = e.target.closest("li"); if (li) showPerson(li); });
  $("#pantheon").addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.matches("li")) showPerson(e.target); });

  /* ---------------- PLAN ---------------- */
  const PHASE = { Shu: "守", Ha: "破", Ri: "離" };
  function renderPlan() {
    const done = store.get("plan", {});
    $("#plan").innerHTML = DATA.plan.map(([w, t, ph], i) => `
      <div class="wk ${done[i] ? "done" : ""}"><div class="tile">${PHASE[ph]}</div>
      <h5>${w}</h5><p>${t}</p>
      <div class="wk-foot"><span>${ph} · ${PHASE[ph]}</span>
      <label><input type="checkbox" data-w="${i}" ${done[i] ? "checked" : ""}> done</label></div></div>`).join("");
  }
  $("#plan").addEventListener("change", (e) => {
    const c = e.target.closest("[data-w]"); if (!c) return;
    const done = store.get("plan", {}); done[c.dataset.w] = c.checked; store.set("plan", done); renderPlan();
  });
  renderPlan();

  /* ---------------- reset ---------------- */
  $("#resetAll").addEventListener("click", () => {
    if (!confirm("Erase streak, journal, plan and all flashcard progress in this browser?")) return;
    try { Object.keys(localStorage).filter((k) => k.startsWith(PREFIX)).forEach((k) => localStorage.removeItem(k)); } catch (e) {}
    srs = {}; newSeen = 0;
    renderKaizen(); renderJournal(); renderPlan(); setMode(studioMode);
  });
})();
