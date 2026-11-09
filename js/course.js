/* Course engine: renders COURSE_ES / COURSE_JA / COURSE_AR into
   <div class="course" data-course="es|ja|ar"> with lesson navigation,
   checked exercises and progress saved in localStorage. */
(function () {
  "use strict";
  const { speak, store, esc } = window.LKL;
  const COURSES = { es: window.COURSE_ES, ja: window.COURSE_JA, ar: window.COURSE_AR };

  /* ---- answer matching ---- */
  const norm = (s) => String(s).normalize("NFC").toLowerCase()
    .replace(/[.!?¡¿。、,，？！«»“”"]/g, "").replace(/\s+/g, " ").trim();
  const loose = (s) => norm(s).normalize("NFD")
    .replace(/[̀-ͯ]/g, "")          // Latin accents (á, ā, ḥ…)
    .replace(/[ً-ْٰـ]/g, "") // Arabic vowel marks, tatweel
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي")
    .replace(/[ʿʼʾ'’`\-]/g, "").replace(/\s+/g, "").normalize("NFC");
  function judge(input, answers) {
    const list = answers.split(";");
    const n = norm(input);
    if (!n) return { ok: false, empty: true, best: list[0] };
    if (list.some((a) => norm(a) === n)) return { ok: true, best: list[0] };
    if (list.some((a) => loose(a) === loose(input))) return { ok: true, near: true, best: list[0] };
    return { ok: false, best: list[0] };
  }

  /* ---- progress ---- */
  const prog = (k) => store.get("course." + k, {});
  const saveProg = (k, p) => store.set("course." + k, p);

  function mount(root) {
    const key = root.dataset.course, C = COURSES[key];
    if (!C) return;
    const all = C.groups.flatMap((g, gi) => g.lessons.map((l) => ({ ...l, gi, group: g.label })));
    let cur = store.get("course." + key + ".at", all[0].id);
    if (!all.find((l) => l.id === cur)) cur = all[0].id;

    root.innerHTML = `
      <div class="course-head">
        <div><p class="kicker"><i>THE COURSE</i></p><h3 class="headline sm">${esc(C.name)}</h3><p class="small">${esc(C.source)}</p></div>
        <div class="course-prog"><span class="cp-num"></span><div class="cp-bar"><i></i></div><small>lessons passed (≥ 80%)</small></div>
      </div>
      <div class="filter course-tabs">${C.groups.map((g, i) => `<button class="chip" data-g="${i}">${esc(g.label)}</button>`).join("")}</div>
      <div class="course-body">
        <ol class="course-list"></ol>
        <article class="course-lesson" aria-live="polite"></article>
      </div>`;

    const tabs = root.querySelector(".course-tabs"), list = root.querySelector(".course-list"), art = root.querySelector(".course-lesson");

    function renderProgress() {
      const p = prog(key), passed = all.filter((l) => (p[l.id] || 0) >= 0.8).length;
      root.querySelector(".cp-num").textContent = `${passed} / ${all.length}`;
      root.querySelector(".cp-bar i").style.width = `${(passed / all.length) * 100}%`;
    }
    function renderList(gi) {
      const p = prog(key);
      tabs.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", +c.dataset.g === gi));
      list.innerHTML = C.groups[gi].lessons.map((l) => {
        const s = p[l.id];
        const mark = s >= 0.8 ? "✓" : s != null ? Math.round(s * 100) + "%" : "";
        return `<li><button data-id="${l.id}" class="${l.id === cur ? "on" : ""}"><span class="cl-t">${esc(l.title)}</span><span class="cl-m">${mark}</span></button></li>`;
      }).join("");
    }

    function exHTML(e, i) {
      const [q, a, right] = e;
      if (Array.isArray(a)) {
        return `<li class="ex mc" data-i="${i}"><p class="ex-q" dir="auto">${esc(q)}</p><div class="ex-opts">${a.map((o, j) => `<label><input type="radio" name="${cur}-${i}" value="${j}"><span dir="auto">${esc(o)}</span></label>`).join("")}</div><p class="ex-fb"></p></li>`;
      }
      const field = `<input class="ex-in" type="text" dir="auto" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="answer" placeholder="${key === "ar" ? "عربي / latin" : key === "ja" ? "かな / romaji" : "…"}">`;
      const body = q.includes("___") ? esc(q).replace("___", field) : `${esc(q)} ${field}`;
      return `<li class="ex fill" data-i="${i}"><p class="ex-q" dir="auto">${body}</p><p class="ex-fb"></p></li>`;
    }

    function renderLesson(id) {
      cur = id; store.set("course." + key + ".at", id);
      const l = all.find((x) => x.id === id), idx = all.indexOf(l);
      renderList(l.gi);
      const vocab = l.v ? `<h4 class="cl-h">VOCABULARY</h4><ul class="wordlist cl-vocab">${l.v.map(([w, r, m]) =>
        `<li><span class="w ${key === "ja" ? "jp" : key === "ar" ? "ar" : ""}" ${key === "ar" ? 'dir="rtl"' : ""}>${esc(w)}</span><button class="say" data-say="${esc(w)}" data-lang="${key}" aria-label="Pronounce">▶</button><span class="m">${esc(m)}</span><span class="mn">${esc(r)}</span></li>`).join("")}</ul>` : "";
      art.innerHTML = `
        <p class="kicker"><i>${esc(l.group)} — ${esc(l.ref)}</i></p>
        <h3 class="cl-title">${esc(l.title)}</h3>
        ${l.points.map(([h, body]) => `<section class="cl-point"><h4 class="cl-h">${esc(h)}</h4>${body}</section>`).join("")}
        ${vocab}
        <h4 class="cl-h">PRACTICE <span class="small">· Shu: copy the form exactly</span></h4>
        <ol class="ex-list">${l.ex.map(exHTML).join("")}</ol>
        <div class="ex-actions">
          <button class="btn ex-check">CHECK ANSWERS</button>
          <button class="btn btn-ghost ex-show">SHOW ANSWERS</button>
          <span class="ex-score"></span>
        </div>
        <div class="cl-nav">
          ${idx > 0 ? `<button class="ulink linkbtn" data-go="${all[idx - 1].id}">← ${esc(all[idx - 1].title)}</button>` : "<span></span>"}
          ${idx < all.length - 1 ? `<button class="ulink linkbtn" data-go="${all[idx + 1].id}">${esc(all[idx + 1].title)} →</button>` : ""}
        </div>`;
      // ▶ buttons on example lines
      art.querySelectorAll(".say-line").forEach((s) => {
        const b = document.createElement("button");
        b.className = "say inline"; b.textContent = "▶"; b.setAttribute("aria-label", "Pronounce");
        b.dataset.say = s.textContent; b.dataset.lang = s.dataset.lang;
        s.after(b);
      });
      art.querySelectorAll(".ex-in").forEach((inp) => inp.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); }));
    }

    function check(reveal) {
      const l = all.find((x) => x.id === cur);
      let right = 0;
      art.querySelectorAll(".ex").forEach((li) => {
        const e = l.ex[+li.dataset.i], fb = li.querySelector(".ex-fb");
        let ok = false, msg = "";
        if (Array.isArray(e[1])) {
          const sel = li.querySelector("input:checked");
          ok = sel && +sel.value === e[2];
          msg = ok ? "✓" : reveal || sel ? `→ ${e[1][e[2]]}` : "";
          if (reveal && !sel) li.querySelector(`input[value="${e[2]}"]`).checked = true;
        } else {
          const inp = li.querySelector(".ex-in"), r = judge(inp.value, e[1]);
          ok = r.ok;
          if (reveal && !ok) inp.value = r.best;
          msg = ok ? (r.near ? `✓ — exact form: ${r.best}` : "✓") : r.empty && !reveal ? "" : `→ ${r.best}`;
        }
        if (ok) right++;
        li.classList.toggle("right", !!ok); li.classList.toggle("wrong", !ok && !!msg);
        fb.textContent = msg;
      });
      const score = right / l.ex.length;
      art.querySelector(".ex-score").textContent = `${right} / ${l.ex.length}${score >= 0.8 ? " · 合格 ¡aprobado! ناجح" : ""}`;
      if (!reveal) {
        const p = prog(key); p[cur] = Math.max(p[cur] || 0, score); saveProg(key, p);
        if (score >= 0.8) { const lang = key === "ja" ? "ja" : key; speak(lang === "ja" ? "よくできました" : lang === "ar" ? "ممتاز" : "¡Muy bien!", lang); }
        renderProgress(); renderList(l.gi);
        const days = new Set(store.get("days", [])); const today = new Date();
        const k = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
        if (!days.has(k)) { days.add(k); store.set("days", [...days]); window.LKL.renderKaizen(); }
      }
    }

    tabs.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) renderLesson(C.groups[+c.dataset.g].lessons[0].id); });
    list.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) renderLesson(b.dataset.id); });
    art.addEventListener("click", (e) => {
      if (e.target.closest(".ex-check")) check(false);
      else if (e.target.closest(".ex-show")) check(true);
      const go = e.target.closest("[data-go]");
      if (go) { renderLesson(go.dataset.go); root.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
    renderLesson(cur);
    renderProgress();
    root._refresh = () => { renderProgress(); renderLesson(cur); };
  }

  document.querySelectorAll(".course[data-course]").forEach(mount);
  window.LKL.refreshCourses = () => document.querySelectorAll(".course[data-course]").forEach((r) => r._refresh && r._refresh());
})();
