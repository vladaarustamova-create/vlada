# Lengua · 言葉 · لغة

A personal study website for **Spanish A1 → B2 (DELE)**, **Japanese N5 (Minna no Nihongo 1–25)** and **Arabic A0 → A2**, in a black-and-white magazine style.

Open `index.html` in a browser, or publish the repository with GitHub Pages (Settings → Pages → deploy from branch).

## The three courses
Each course has lessons with explanations, example sentences you can listen to, a vocabulary list and exercises that are checked automatically. Your progress is saved, and a lesson counts as passed at 80%.

| Course | Lessons | Structure |
|---|---|---|
| Español A1 → B2 (`js/course-es.js`) | 24 units in 4 levels | Grammar-review order in the style of *The Ultimate Spanish Review and Practice*, graded by CEFR level (the Instituto Cervantes Plan Curricular that the DELE uses) |
| みんなの日本語 N5 (`js/course-ja.js`) | 25 lessons | One unit per *Minna no Nihongo Shokyū I* lesson (第1課–第25課), to use alongside the book. Answers can be typed in kana or rōmaji |
| العربية A0 → A2 (`js/course-ar.js`) | 18 units in 3 levels | Modern Standard Arabic in the classic grammar order of Janusz Danecki's *Gramatyka języka arabskiego* and similar university courses. Answers can be typed in Arabic script or transliteration |

All explanations and exercises are written for this site; none of the books' text is copied. The 12-week plan spreads the three courses across Shu → Ha → Ri.

## What's inside
- **Method**: Japanese learning methods (Kaizen, Shu-Ha-Ri, Ondoku, Shadowing, Kakitori, Hansei) plus mnemonic techniques. Includes a daily streak tracker and a Hansei reflection journal.
- **Español B2**: DELE exam overview, acronym mnemonics (W.E.I.R.D.O., E.S.C.A.P.A., DOCTOR/PLACE), por/para, si-clauses, connectors, vocabulary with mnemonics, idioms and false friends.
- **日本語 N5**: hiragana with picture mnemonics, katakana, 73 N5 kanji with flip cards and stories, core grammar and phrases.
- **العربية**: all 28 letters with their four joined forms, mnemonics, and the Spanish sounds that match them; phrases and numbers.
- **El Puente**: links Spanish and Arabic. Covers Spanish words of Arabic origin, sun and moon letters explained through Spanish, Arabic-origin place names, and a guessing game.
- **Studio**: spaced-repetition flashcards (Leitner boxes) and quizzes for 10 decks, with pronunciation from the browser's built-in voices.
- **Atlas**: an interactive map with 29 places in Spain, Latin America, Japan and the Arab world. Each place has its history, its culture today and words that come from it. Also includes the Damascus → Córdoba route and timelines that start from the earliest history.

## Photos & films
- `media/photos/` has 81 photographs of the 29 Atlas places, from Wikimedia Commons under free licences (public domain or Creative Commons). Every photo is credited in the Atlas panel and in the **Photo credits** list at the bottom of the page.
- `media/films/` has three short black-and-white documentaries made from those photos: Spain & the Spanish-speaking world (2:09), Japan (1:29) and the Arab world (1:39). Each place is one chapter, and **Watch this chapter** in the Atlas jumps straight to it.
- `js/media.js` lists the photos, their credits and the film chapters.

Progress is saved in your browser (localStorage). All content is in `js/data.js`.
