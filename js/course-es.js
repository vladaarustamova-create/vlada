/* ==========================================================================
   SPANISH COURSE — A1 → B2 grammar review for the DELE.
   Order follows the classic grammar-review workbook sequence
   (present → ser/estar → past tenses → future/conditional → imperative →
   subjunctive → pronouns, relatives, passive), graded by CEFR level as in
   the Instituto Cervantes Plan Curricular. Explanations and exercises are
   original. Exercise format:
     ["sentence with ___", "answer;alternative"]          → fill in
     ["question", ["option", "option", …], indexOfRight]  → multiple choice
   ========================================================================== */
(function () {
  const P = ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ellos / ustedes"];
  const conj = (...cols) => `<table class="conj"><thead><tr><th></th>${cols.map((c) => `<th>${c[0]}</th>`).join("")}</tr></thead><tbody>${P.map((p, i) => `<tr><td>${p}</td>${cols.map((c) => `<td>${c[1][i]}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  const S = (es, en) => `<p class="xm"><span class="say-line" data-lang="es">${es}</span><i>${en}</i></p>`;
  const tip = (t) => `<p class="tip">${t}</p>`;
  const L = DATA.esLessons; // reuse mnemonic lessons from data.js

  const U = (id, title, ref, points, ex) => ({ id, title, ref, points, ex });

  window.COURSE_ES = {
    key: "es", lang: "es", name: "Español A1 → B2",
    source: "Grammar-review sequence in the style of The Ultimate Spanish Review and Practice, levelled by the Plan Curricular del Instituto Cervantes (the DELE reference).",
    groups: [
      { label: "A1", lessons: [
        U("es1", "Present tense of regular verbs", "Verbs · presente de indicativo", [
          ["Three families: -ar, -er, -ir", `<p>Remove the ending and add the person ending. -er and -ir share everything except <i>nosotros</i> and <i>vosotros</i>.</p>${conj(["hablar", ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"]], ["comer", ["como", "comes", "come", "comemos", "coméis", "comen"]], ["vivir", ["vivo", "vives", "vive", "vivimos", "vivís", "viven"]])}`],
          ["Uses", `${S("Trabajo en un banco.", "I work in a bank (habit).")}${S("Mañana cenamos con Ana.", "Tomorrow we're having dinner with Ana (near future).")}${tip("Subject pronouns are usually dropped: the ending already tells who. <i>Hablo</i> = I speak.")}`]
        ], [
          ["Yo ___ ruso y español. (hablar)", "hablo"],
          ["Nosotros ___ a las dos. (comer)", "comemos"],
          ["Ellos ___ en Madrid. (vivir)", "viven"],
          ["¿Tú ___ japonés? (estudiar)", "estudias"],
          ["Vosotros ___ mucho café. (beber)", "bebéis"],
          ["Which form is “she opens”?", ["abre", "abra", "abrimos", "abro"], 0]
        ]),
        U("es2", "Ser, estar and hay", "Verbs · ser / estar / haber", [
          ["DOCTOR & PLACE", L[2].body],
          ["Hay vs estar", `<p><b>Hay</b> (there is/are) introduces something new, with <i>un, una, unos</i>, numbers or nothing. <b>Estar</b> locates something already known, with <i>el, la</i>, names.</p>${S("Hay una farmacia en esta calle.", "There's a pharmacy on this street.")}${S("La farmacia está al lado del banco.", "The pharmacy is next to the bank.")}`]
        ], [
          ["Granada ___ en Andalucía.", "está"],
          ["Yo ___ de Rusia.", "soy"],
          ["___ muchos turistas en el centro.", "hay"],
          ["La sopa ___ fría, no me gusta.", "está"],
          ["Mi hermana ___ médica.", "es"],
          ["Hoy ___ lunes.", "es"]
        ]),
        U("es3", "Nouns, articles and adjectives", "Nouns & articles · adjectives", [
          ["Gender", `<p>Most nouns in <b>-o</b> are masculine, in <b>-a</b> feminine. Learn the exceptions as a gang: <i>el día, el mapa, el sofá, la mano, la foto, la moto, la radio</i>. Greek words in <b>-ma</b> are masculine: <i>el problema, el tema, el idioma, el sistema</i>.</p>${tip("Feminine nouns starting with stressed <i>a-</i> take <i>el</i> in the singular only: <i>el agua fría, las aguas</i>.")}`],
          ["Plural & agreement", `<p>Vowel → <b>-s</b> (<i>libro → libros</i>); consonant → <b>-es</b> (<i>ciudad → ciudades</i>); <b>-z → -ces</b> (<i>lápiz → lápices</i>). Adjectives agree in gender and number and usually follow the noun.</p>${S("Unas casas blancas y unos coches rojos.", "Some white houses and some red cars.")}`]
        ], [
          ["___ problema es difícil. (el / la)", "el"],
          ["___ mano. (el / la)", "la"],
          ["Plural of «lápiz»:", "lápices"],
          ["Plural of «ciudad»:", "ciudades"],
          ["Las casas son ___. (blanco)", "blancas"],
          ["___ agua está fría. (el / la)", "el"]
        ]),
        U("es4", "Stem-changing and irregular yo verbs", "Verbs · irregular present", [
          ["Boot verbs", `<p>Draw a boot around the conjugation table: every form <b>inside</b> the boot changes its stem (e→ie, o→ue, e→i). <i>Nosotros</i> and <i>vosotros</i> stand <b>outside</b> the boot and stay regular.</p>${conj(["querer e→ie", ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"]], ["poder o→ue", ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"]], ["pedir e→i", ["pido", "pides", "pide", "pedimos", "pedís", "piden"]])}`],
          ["The -go / -zco club (only yo)", `<p><b>-go:</b> tengo, hago, pongo, salgo, vengo, digo, traigo, oigo. <b>-zco:</b> conozco, traduzco, conduzco, parezco. Others: sé (saber), doy (dar), veo (ver), estoy, voy, soy.</p>`]
        ], [
          ["Yo ___ ir al cine. (querer)", "quiero"],
          ["Nosotros no ___ venir. (poder)", "podemos"],
          ["Ella siempre ___ paella. (pedir)", "pide"],
          ["Yo ___ los deberes por la tarde. (hacer)", "hago"],
          ["Yo no ___ a tu hermano. (conocer)", "conozco"],
          ["¿Cuántas horas ___ tú? (dormir)", "duermes"]
        ]),
        U("es5", "Gustar and indirect object pronouns", "Pronouns · verbs like gustar", [
          ["Back-to-front verbs", `<p>With <i>gustar</i> the thing you like is the subject: <i>me gusta <u>el café</u></i>, <i>me gustan <u>los libros</u></i>. Same pattern: <i>encantar, interesar, doler, molestar, parecer, quedar</i>.</p><p>Pronouns: <b>me, te, le, nos, os, les</b>. Add <i>a mí, a ti, a él…</i> for emphasis or clarity.</p>${S("A Vlada le encantan los idiomas.", "Vlada loves languages.")}${S("Me duele la cabeza.", "My head hurts.")}`],
          ["Agreeing: también / tampoco", `${tip("Agree with a positive → <b>a mí también</b>. Agree with a negative → <b>a mí tampoco</b>. Disagree → <i>a mí sí / a mí no</i>.")}`]
        ], [
          ["Me ___ los libros de historia. (gustar)", "gustan"],
          ["A ella le ___ bailar. (gustar)", "gusta"],
          ["A nosotros ___ encanta Japón.", "nos"],
          ["—No me gusta el café. —A mí ___. (I don't either)", "tampoco"],
          ["¿A ti te ___ los pies después de correr? (doler)", "duelen"]
        ]),
        U("es6", "Questions, time, numbers and ir a + infinitive", "Interrogatives · numbers · near future", [
          ["Question words carry accents", `<p>qué, quién(es), cuál(es), dónde, adónde, cuándo, cómo, cuánto/a(s), por qué.</p>${S("¿Cómo te llamas? ¿De dónde eres? ¿Cuánto cuesta?", "What's your name? Where are you from? How much is it?")}`],
          ["Time", `${S("Es la una. Son las tres y media. Son las ocho menos cuarto.", "It's one. It's half past three. It's quarter to eight.")}`],
          ["Near future: ir a + infinitive", `${S("Esta tarde voy a estudiar kanji.", "This afternoon I'm going to study kanji.")}`]
        ], [
          ["¿___ te llamas?", "cómo"],
          ["¿___ cuesta este libro?", "cuánto"],
          ["3:30 → Son las tres y ___.", "media"],
          ["Mañana (yo) ___ a visitar Toledo.", "voy"],
          ["¿___ vives? — En Lisboa.", "dónde"]
        ])
      ]},
      { label: "A2", lessons: [
        U("es7", "Reflexive verbs and daily routine", "Verbs · reflexive", [
          ["The pronoun travels with the person", `<p>me, te, se, nos, os, se + verb. In infinitives and gerunds it can stick to the end.</p>${conj(["levantarse", ["me levanto", "te levantas", "se levanta", "nos levantamos", "os levantáis", "se levantan"]])}${S("Voy a ducharme. / Me voy a duchar.", "I'm going to have a shower.")}`]
        ], [
          ["Yo ___ levanto a las siete.", "me"],
          ["Ella ___ ducha por la noche.", "se"],
          ["Nosotros ___ acostamos tarde.", "nos"],
          ["Tengo que ___ ahora. (irse, yo)", "irme"],
          ["Mis padres ___ (llamarse) Iván y Olga.", "se llaman"]
        ]),
        U("es8", "Preterite (pretérito indefinido)", "Verbs · preterite", [
          ["Regular endings", `${conj(["hablar", ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"]], ["comer / vivir", ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"]])}`],
          ["The irregular U-gang and I-gang", `<p><b>U-stems:</b> tuve, estuve, pude, puse, supe, anduve, hube. <b>I-stems:</b> hice, quise, vine. <b>J-stems:</b> dije, traje, conduje (→ <i>dijeron</i>, no i). <b>Ser and ir share</b> fui, fuiste, fue… — context tells them apart.</p>${tip("Irregular preterites have <b>no accent marks</b>: tuve, hizo, vino.")}${S("Ayer fui al Prado y vi Las Meninas.", "Yesterday I went to the Prado and saw Las Meninas.")}`]
        ], [
          ["Ayer (yo) ___ tres horas. (estudiar)", "estudié"],
          ["Ella ___ a Japón en 2019. (ir)", "fue"],
          ["¿Qué ___ (tú) el fin de semana? (hacer)", "hiciste"],
          ["Nosotros no ___ venir. (poder)", "pudimos"],
          ["Ellos me ___ la verdad. (decir)", "dijeron"],
          ["Cervantes ___ en 1616. (morir)", "murió"]
        ]),
        U("es9", "Imperfect (pretérito imperfecto)", "Verbs · imperfect", [
          ["Easy forms, only three rebels", `${conj(["hablar", ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"]], ["vivir", ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"]])}<p>Irregular: <b>ser → era</b>, <b>ir → iba</b>, <b>ver → veía</b>. That's all.</p>`],
          ["Uses", `<p>Habits in the past, descriptions, age and time, actions in progress.</p>${S("De niña vivía en Moscú y siempre iba al parque.", "As a child I lived in Moscow and always went to the park.")}`]
        ], [
          ["Cuando era pequeña, ___ mucho. (leer)", "leía"],
          ["Antes nosotros ___ en tren. (ir)", "íbamos"],
          ["___ las diez de la noche. (ser)", "eran"],
          ["Mi abuela ___ muy simpática. (ser)", "era"],
          ["Todos los veranos ___ (ellos) a la playa. (viajar)", "viajaban"]
        ]),
        U("es10", "Preterite vs imperfect", "Verbs · contrast of past tenses", [
          ["Stage and actors", `<p>The <b>imperfect</b> builds the stage: scenery, weather, what was going on. The <b>preterite</b> is what the actors do on that stage: completed events that move the story.</p>${S("Llovía y hacía frío. De repente sonó el teléfono.", "It was raining and cold. Suddenly the phone rang.")}${tip("Triggers: <i>ayer, en 2010, de repente, una vez</i> → preterite. <i>siempre, a menudo, antes, de niño, mientras</i> → imperfect.")}`]
        ], [
          ["Mientras (yo) ___ (cocinar), llegó mi hermano.", "cocinaba"],
          ["Ayer ___ (yo) a mi profesora en el metro. (ver)", "vi"],
          ["Choose: «De niño ___ al fútbol todos los días.»", ["jugaba", "jugué", "jugó"], 0],
          ["Choose: «En 1492 Colón ___ a América.»", ["llegaba", "llegó", "llega"], 1],
          ["___ (hacer) sol cuando salimos.", "hacía"]
        ]),
        U("es11", "Present perfect (pretérito perfecto)", "Verbs · compound tenses", [
          ["haber + participle", `<p>he, has, ha, hemos, habéis, han + <b>-ado / -ido</b>. Irregular participles — remember <b>“ROMPER VA DE CUBIERTO”</b>: roto, muerto, puesto, escrito, resuelto, vuelto, abierto, dicho, hecho, cubierto, visto.</p>${S("Esta semana he aprendido veinte kanji.", "This week I have learned twenty kanji.")}${tip("In Spain the perfect is used for <i>hoy, esta semana, este año, ya, todavía no, nunca</i>. Much of Latin America uses the preterite instead.")}`]
        ], [
          ["Hoy (yo) ___ ___ mucho. (trabajar)", "he trabajado"],
          ["¿___ visto (tú) la película?", "has"],
          ["Ellos han ___ la ventana. (abrir)", "abierto"],
          ["Todavía no he ___ el correo. (escribir)", "escrito"],
          ["¿Qué has ___? (hacer)", "hecho"]
        ]),
        U("es12", "Object pronouns and por / para", "Pronouns · prepositions", [
          ["Direct, indirect, both", `<p>Direct: lo, la, los, las. Indirect: le, les. When both meet, <b>le/les → se</b> (“le lo” sounds silly).</p>${S("¿El libro? Se lo di a Marta.", "The book? I gave it to Marta.")}${tip("Order: indirect before direct — <b>I.D.</b> like an identity card.")}`],
          ["Por / para", L[3].body]
        ], [
          ["¿La carta? Ya ___ escribí. (it)", "la"],
          ["Le doy el regalo a Ana → ___ ___ doy.", "se lo"],
          ["Gracias ___ todo.", "por"],
          ["Este regalo es ___ ti.", "para"],
          ["Estudio ___ aprobar el DELE.", "para"],
          ["Paseamos ___ el parque.", "por"]
        ])
      ]},
      { label: "B1", lessons: [
        U("es13", "Future and conditional", "Verbs · futuro & condicional", [
          ["One set of endings on the whole infinitive", `<p>Future: -é, -ás, -á, -emos, -éis, -án. Conditional: -ía, -ías, -ía, -íamos, -íais, -ían.</p><p>Twelve short stems: <b>tendr-, saldr-, pondr-, vendr-, valdr-</b> (lose the vowel, add d) · <b>podr-, sabr-, cabr-, habr-, querr-</b> (lose the vowel) · <b>har-, dir-</b> (shrink).</p>${S("Algún día viviré en Kioto.", "One day I will live in Kyoto.")}${S("¿Podrías ayudarme?", "Could you help me?")}`],
          ["Probability", `${S("¿Dónde está Juan? — Estará en casa.", "Where's Juan? — He's probably at home.")}${S("Serían las diez cuando llegó.", "It must have been about ten when he arrived.")}`]
        ], [
          ["Mañana (yo) ___ más tiempo. (tener)", "tendré"],
          ["Nosotros ___ a las ocho. (salir)", "saldremos"],
          ["¿Me ___ (tú) la sal, por favor? (pasar, conditional)", "pasarías"],
          ["Yo en tu lugar no lo ___. (hacer, conditional)", "haría"],
          ["¿Qué hora es? — No sé, ___ las tres. (ser, probability)", "serán"]
        ]),
        U("es14", "The imperative", "Verbs · imperativo", [
          ["Affirmative tú = él form of the present", `<p><i>habla, come, escribe</i>. Eight short ones — <b>“Ven, di, sal, haz, ten, ve, pon, sé”</b>.</p><p>Usted/ustedes and <b>all negatives</b> use the present subjunctive: <i>hable, no hables, no comáis</i>.</p>`],
          ["Where pronouns go", `<p>Attached to affirmative commands, in front of negative ones.</p>${S("Dímelo. — No me lo digas.", "Tell me. — Don't tell me.")}`]
        ], [
          ["¡___ la puerta! (cerrar, tú)", "cierra"],
          ["¡___ aquí ahora mismo! (venir, tú)", "ven"],
          ["No ___ tarde. (llegar, tú)", "llegues"],
          ["Pase, ___ asiento. (tomar, usted)", "tome"],
          ["Tell it to me (tú): ___", "dímelo"]
        ]),
        U("es15", "Present subjunctive: forms and W.E.I.R.D.O.", "Verbs · presente de subjuntivo", [
          ["Formation: take yo, swap the vowel", `<p>yo hablo → habl<b>e</b>; yo como → com<b>a</b>; yo tengo → teng<b>a</b>. -ar verbs take <b>e</b>, -er/-ir take <b>a</b>: the “opposite” vowel.</p><p>Six total irregulars — <b>DISHES</b>: dar (dé), ir (vaya), ser (sea), haber (haya), estar (esté), saber (sepa).</p>`],
          ["When to use it", L[0].body]
        ], [
          ["Quiero que (tú) ___ conmigo. (venir)", "vengas"],
          ["Es importante que (nosotros) ___. (estudiar)", "estudiemos"],
          ["No creo que ___ verdad. (ser)", "sea"],
          ["Ojalá ___ sol mañana. (hacer)", "haga"],
          ["Me alegra que ___ (vosotros) aquí. (estar)", "estéis"],
          ["Choose: «Creo que ___ razón.»", ["tienes", "tengas"], 0]
        ]),
        U("es16", "Subjunctive after conjunctions and cuando", "Verbs · subjunctive in adverbial clauses", [
          ["Always subjunctive", L[1].body],
          ["Time words: future = subjunctive", `<p><i>cuando, en cuanto, hasta que, después de que, mientras</i> + <b>subjunctive</b> if the action hasn't happened yet; + indicative for habits or the past.</p>${S("Cuando tenga tiempo, te llamo.", "When I have time, I'll call you.")}${S("Cuando tengo tiempo, leo.", "Whenever I have time, I read.")}`]
        ], [
          ["Te lo explico para que lo ___. (entender)", "entiendas"],
          ["Cuando ___ a Tokio, te escribiré. (llegar, yo)", "llegue"],
          ["No iré a menos que tú ___. (ir)", "vayas"],
          ["Choose: «Cuando era niña, ___ mucho.»", ["leía", "leyera", "lea"], 0],
          ["Llámame en cuanto ___ (tú) el resultado. (saber)", "sepas"]
        ]),
        U("es17", "Pluperfect and reported speech", "Verbs · pluscuamperfecto · estilo indirecto", [
          ["Past before the past", `<p>había, habías, había, habíamos, habíais, habían + participle.</p>${S("Cuando llegué, el tren ya había salido.", "When I arrived, the train had already left.")}`],
          ["Shifting tenses back", `<p>presente → imperfecto · indefinido/perfecto → pluscuamperfecto · futuro → condicional · imperativo → imperfecto de subjuntivo.</p>${S("«Estoy cansada.» → Dijo que estaba cansada.", "“I'm tired.” → She said she was tired.")}`]
        ], [
          ["Nunca ___ ___ paella antes de ir a Valencia. (comer, yo)", "había comido"],
          ["«Vivo en Sevilla» → Dijo que ___ en Sevilla.", "vivía"],
          ["«Iré mañana» → Dijo que ___ al día siguiente.", "iría"],
          ["«Ven» → Me pidió que ___.", "fuera;fuese"]
        ]),
        U("es18", "Relative pronouns", "Pronouns · relatives", [
          ["que, quien, el que, lo que, cuyo, donde", `<p><b>que</b> — the all-purpose one. <b>quien(es)</b> — people, after prepositions. <b>el/la/los/las que</b> — after prepositions, or “the one(s) who”. <b>lo que</b> — “what” as an idea. <b>cuyo/a/os/as</b> — “whose”, agrees with what is owned. <b>donde</b> — place.</p>${S("La chica con la que hablé es de Fez.", "The girl I spoke with is from Fez.")}${S("Es un autor cuyas novelas conozco.", "He's an author whose novels I know.")}`]
        ], [
          ["El libro ___ compré es de Lorca.", "que"],
          ["No entiendo ___ dices.", "lo que"],
          ["El pueblo ___ nací es pequeño.", "donde;en el que"],
          ["La mujer ___ hijo estudia conmigo es japonesa.", "cuyo"],
          ["Los amigos con ___ viajé son de Perú.", "quienes;los que"]
        ])
      ]},
      { label: "B2", lessons: [
        U("es19", "Imperfect subjunctive and sequence of tenses", "Verbs · imperfecto de subjuntivo", [
          ["From the ellos preterite", `<p>ellos tuvieron → tuvie<b>ra</b>, tuvie<b>ras</b>, tuvie<b>ra</b>, tuvié<b>ramos</b>, tuvie<b>rais</b>, tuvie<b>ran</b>. The <b>-se</b> form (tuviese) is equally correct.</p>`],
          ["Sequence of tenses", `<p>Main verb in present/future → present subjunctive. Main verb in a past tense or conditional → imperfect subjunctive.</p>${S("Quiero que vengas. → Quería que vinieras.", "I want you to come. → I wanted you to come.")}${S("Me gustaría que me llamaras.", "I'd like you to call me.")}`]
        ], [
          ["Me pidió que le ___ (ayudar, yo).", "ayudara;ayudase"],
          ["Si ___ (tener, yo) dinero, viajaría.", "tuviera;tuviese"],
          ["Era necesario que todos ___ (estar) presentes.", "estuvieran;estuviesen"],
          ["Me gustaría que ___ (venir, tú) a mi boda.", "vinieras;vinieses"],
          ["Choose: «No pensaba que ___ tan difícil.»", ["fuera", "sea", "es"], 0]
        ]),
        U("es20", "Conditional sentences", "Syntax · oraciones condicionales", [
          ["Three types", L[4].body],
          ["B2 alternatives to si", `<p><i>de + infinitive</i> (De haberlo sabido, no habría venido), <i>en caso de que, siempre que, a no ser que</i> + subjunctive.</p>`]
        ], [
          ["Si ___ (llover), nos quedamos en casa.", "llueve"],
          ["Si tuviera tiempo, ___ (aprender) árabe.", "aprendería"],
          ["Si hubiera estudiado, ___ ___ (aprobar).", "habría aprobado;hubiera aprobado"],
          ["Choose the correct one:", ["Si tendría tiempo, iría.", "Si tuviera tiempo, iría.", "Si tenga tiempo, iría."], 1],
          ["De ___ sabido, te habría avisado.", "haberlo"]
        ]),
        U("es21", "Perfect subjunctives and ojalá", "Verbs · perfecto & pluscuamperfecto de subjuntivo", [
          ["haya hecho / hubiera hecho", `<p><b>haya + participle</b>: a finished action seen from now. <b>hubiera + participle</b>: a past that cannot change (regret, impossible).</p>${S("Espero que hayas descansado.", "I hope you've rested.")}${S("Ojalá hubiera estudiado más.", "I wish I had studied more.")}`],
          ["Three ojalás", `${S("Ojalá llueva. / Ojalá lloviera. / Ojalá hubiera llovido.", "I hope it rains (possible). / If only it rained (unlikely). / If only it had rained (too late).")}<p><span class="bridge">ojalá ← Arabic law shāʼa llāh</span></p>`]
        ], [
          ["Me alegro de que ___ ___ (venir, tú).", "hayas venido"],
          ["Ojalá ___ ___ (saber, yo) la verdad antes.", "hubiera sabido;hubiese sabido"],
          ["No creo que ya ___ ___ (llegar, ellos).", "hayan llegado"],
          ["Choose the regret: «Ojalá ___ más atención.»", ["presto", "hubiera prestado", "preste"], 1]
        ]),
        U("es22", "Passive voice and impersonal se", "Syntax · voz pasiva", [
          ["Three ways", `<p><b>ser + participle</b> (formal, news): <i>La Alhambra fue construida por los nazaríes.</i> <b>se + verb</b> (everyday): <i>Se venden pisos. Se habla español.</i> <b>estar + participle</b> = resulting state: <i>La tienda está cerrada.</i></p>${tip("With <i>se</i>, the verb agrees with the thing: <i>se vende</i> una casa / <i>se venden</i> casas. With people as objects use <i>se</i> + singular + a: <i>Se busca a los testigos.</i>")}`]
        ], [
          ["El Quijote ___ escrito por Cervantes.", "fue"],
          ["Aquí se ___ (hablar) japonés.", "habla"],
          ["Se ___ (alquilar) apartamentos.", "alquilan"],
          ["La puerta ___ abierta desde ayer.", "está"],
          ["Las cartas fueron ___ (enviar) ayer.", "enviadas"]
        ]),
        U("es23", "Verbal periphrases", "Verbs · perífrasis", [
          ["Small phrases, big B2 points", `<ul><li><b>llevar + gerundio</b> — duration: <i>Llevo dos años estudiando español.</i></li><li><b>acabar de + inf.</b> — just did: <i>Acabo de llegar.</i></li><li><b>volver a + inf.</b> — again: <i>Volví a leerlo.</i></li><li><b>dejar de + inf.</b> — stop: <i>Dejé de fumar.</i></li><li><b>ponerse a + inf.</b> — start suddenly: <i>Se puso a llorar.</i></li><li><b>seguir + gerundio</b> — still: <i>Sigo viviendo aquí.</i></li><li><b>estar a punto de</b> — about to.</li></ul>`]
        ], [
          ["___ tres meses aprendiendo japonés. (llevar, yo)", "llevo"],
          ["Acabo ___ terminar el examen.", "de"],
          ["Mañana vuelvo ___ intentarlo.", "a"],
          ["¿Sigues ___ (trabajar) en el hotel?", "trabajando"],
          ["Cuando oyó la noticia, se puso ___ reír.", "a"]
        ]),
        U("es24", "Verbs of change and DELE writing connectors", "Usage · DELE B2 writing", [
          ["Becoming", `<p><b>ponerse</b> + adj (sudden, temporary): <i>se puso rojo</i>. <b>volverse</b> (lasting change of character): <i>se volvió desconfiado</i>. <b>hacerse</b> (effort, choice): <i>se hizo médica</i>. <b>llegar a ser</b> (long process). <b>convertirse en</b> + noun (transformation).</p>`],
          ["Connectors", L[5].body]
        ], [
          ["Cuando la vio, se ___ nervioso. (ponerse)", "puso"],
          ["Tras años de trabajo, ___ a ser directora. (llegar)", "llegó"],
          ["La oruga se convirtió ___ mariposa.", "en"],
          ["Choose a contrast connector:", ["por consiguiente", "no obstante", "asimismo"], 1],
          ["___ llueva, saldremos. (even if)", "aunque"]
        ])
      ]}
    ]
  };
})();
