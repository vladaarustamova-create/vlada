/* ==========================================================================
   LENGUA · 言葉 · لغة — all learning content lives here.
   Edit freely: every grid, deck, quiz and map marker is built from this file.
   ========================================================================== */

const DATA = {};

/* --------------------------------------------------------------------------
   METHODS — Japanese learning philosophies + classic mnemonic techniques
   -------------------------------------------------------------------------- */
DATA.methods = [
  { glyph: "改善", name: "Kaizen", reading: "kai·zen — “change for the better”",
    text: "Tiny, daily, non-negotiable steps. Five minutes every day beats three hours on Sunday. The Today desk below tracks your streak so the chain never breaks." },
  { glyph: "守破離", name: "Shu · Ha · Ri", reading: "protect · break · leave",
    text: "The three stages of mastery from the martial arts and tea ceremony. Shu: copy the form exactly (drill kana, conjugations). Ha: bend the rules (write your own sentences). Ri: transcend them (think in the language)." },
  { glyph: "音読", name: "Ondoku", reading: "on·doku — reading aloud",
    text: "Japanese schoolchildren read textbooks aloud every day. Speaking engages mouth, ear and eye at once, so memory is stored three times. Every card here has a ▶ button: say it with the voice." },
  { glyph: "影", name: "Shadowing", reading: "kage — the shadow",
    text: "Play a sentence and repeat it a split second behind, like a shadow, copying rhythm and melody — not just the words. Ideal for the DELE oral and for Arabic’s throat sounds." },
  { glyph: "書取", name: "Kakitori", reading: "kaki·tori — writing practice",
    text: "Write each character by hand, in stroke order, saying its reading. The hand remembers what the eye forgets. Keep a paper notebook next to this site." },
  { glyph: "反省", name: "Hansei", reading: "han·sei — honest reflection",
    text: "At the end of each session write one line: what went wrong, what you will change tomorrow. Reflection, not guilt. The journal on the Today desk is for that." },
  { glyph: "間隔", name: "Spaced repetition", reading: "kankaku — the interval",
    text: "Review just before you forget. Cards you know move to boxes reviewed every 3, 7, 14, 30 days; cards you miss go back to box one. The Studio uses this Leitner system." },
  { glyph: "宮", name: "Memory palace", reading: "method of loci",
    text: "Place each word in a room of a house you know. Walk through the house to recall them. Try it with a Japanese house: genkan, washitsu, engawa, garden." },
  { glyph: "絵", name: "Keyword mnemonic", reading: "sound + image",
    text: "Link the sound of a foreign word to a vivid picture in a language you know. Arabic shukran (thanks) → “sugar ran” out of the bowl, so you say thanks for the last spoonful." }
];

/* --------------------------------------------------------------------------
   JAPANESE — N5
   -------------------------------------------------------------------------- */
DATA.hiragana = [
  ["あ","a","A cross stuck into a round apple — “Ah!” as you bite it."],
  ["い","i","Two eels swimming side by side — “eee!”"],
  ["う","u","Someone bent over holding a sore stomach — “ooh…”"],
  ["え","e","A ninja doing a high kick, shouting “eh!”"],
  ["お","o","A golfer with the ball flying off to the right — “Oh!”"],
  ["か","ka","A blade striking with a spark beside it — “ka-ching!”"],
  ["き","ki","A key with two teeth."],
  ["く","ku","A cuckoo’s open beak — “ku-ku.”"],
  ["け","ke","A keg standing next to its tap."],
  ["こ","ko","Two koi fish swimming in a pond."],
  ["さ","sa","き that lost a tooth — a key that is sad: “sa…”"],
  ["し","shi","A fishing hook — she caught a fish."],
  ["す","su","Someone swooshing on a rope with a loop — “su!”"],
  ["せ","se","A mouth with one big fang saying “se-ñor.”"],
  ["そ","so","A zigzag stitch — sew it, so-so."],
  ["た","ta","The letters t and a squeezed together: ta."],
  ["ち","chi","A number 5 cheering “chi!”"],
  ["つ","tsu","A tsunami wave curling over."],
  ["て","te","A hand reaching out to you (te means hand)."],
  ["と","to","A toe with a thorn stuck in it."],
  ["な","na","A nun kneeling beside a cross, praying “na…”"],
  ["に","ni","A knee next to two lines — ni = knee."],
  ["ぬ","nu","Noodles twisted around chopsticks."],
  ["ね","ne","A neko (cat) curled up, its tail looped."],
  ["の","no","A round “No!” sign with a slash."],
  ["は","ha","A man laughing “ha-ha” beside a pole."],
  ["ひ","hi","A wide grin — “hee-hee.”"],
  ["ふ","fu","Mount Fuji with little puffs of cloud."],
  ["へ","he","A small hill — “hey, climb me!”"],
  ["ほ","ho","Santa’s tree with a pole: “ho-ho-ho.”"],
  ["ま","ma","Mama carrying a baby in a loop on her back."],
  ["み","mi","The number 21 — “me” at twenty-one."],
  ["む","mu","A cow with a horn and a tail — “moo.”"],
  ["め","me","An eye with a curled lash (me means eye)."],
  ["も","mo","A hook with two worms — “more!”"],
  ["や","ya","A yak with its horns up."],
  ["ゆ","yu","A U-turn sign with a fish inside — “you turn.”"],
  ["よ","yo","A yo-yo hanging from a finger."],
  ["ら","ra","A rabbit with one ear up."],
  ["り","ri","A river between two reeds."],
  ["る","ru","A route that loops back at the end (ろ has no loop)."],
  ["れ","re","A dancer doing reggaetón, leg kicked out."],
  ["ろ","ro","A road that ends with no loop."],
  ["わ","wa","A waterfall falling over a hook — “wa!”"],
  ["を","wo","A surfer on a wave — “whoa!” (said “o”, object marker)."],
  ["ん","n","A lower-case n written in one sweep."]
];
DATA.katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン".split("");

DATA.kanji = [
  ["一","one","イチ","ひと・つ","A single finger lying flat."],
  ["二","two","ニ","ふた・つ","Two fingers lying flat."],
  ["三","three","サン","みっ・つ","Three fingers lying flat."],
  ["四","four","シ","よん・よ","A window with curtains: four corners."],
  ["五","five","ゴ","いつ・つ","A stool with five points touching it."],
  ["六","six","ロク","むっ・つ","A man in a hat, legs spread — six limbs counting the hat and head."],
  ["七","seven","シチ","なな","An upside-down 7."],
  ["八","eight","ハチ","やっ・つ","Two legs walking apart — like the shape of 8’s halves."],
  ["九","nine","キュウ","ここの・つ","A runner bent nearly to the ground at the ninth kilometre."],
  ["十","ten","ジュウ","とお","A cross — the Roman X (10) turned upright."],
  ["百","hundred","ヒャク","—","One 一 on top of white 白: a hundred white hairs."],
  ["千","thousand","セン","ち","A person 人 with a ten 十 through them: a thousand steps."],
  ["円","yen; circle","エン","まる・い","A coin pocket — yen go in here."],
  ["日","sun; day","ニチ・ジツ","ひ・か","A window with the sun shining through."],
  ["月","moon; month","ゲツ・ガツ","つき","A crescent moon with two clouds across it."],
  ["火","fire","カ","ひ","A person waving arms beside a campfire’s sparks."],
  ["水","water","スイ","みず","A main stream with drops splashing either side."],
  ["木","tree","モク","き","A trunk, branches up, roots down."],
  ["金","gold; money","キン","かね","A roof over a pile of gold nuggets."],
  ["土","earth","ド","つち","A sprout pushing out of the ground."],
  ["人","person","ジン・ニン","ひと","Two legs walking."],
  ["口","mouth","コウ","くち","An open mouth."],
  ["山","mountain","サン","やま","Three peaks."],
  ["川","river","セン","かわ","Three lines of flowing water."],
  ["田","rice field","デン","た","A field divided into four paddies."],
  ["大","big","ダイ","おお・きい","A person stretching arms wide: “this big!”"],
  ["小","small","ショウ","ちい・さい","A tiny hook with two little drops."],
  ["中","middle","チュウ","なか","A line through the middle of a box."],
  ["上","up; above","ジョウ","うえ","A line pointing up above the ground."],
  ["下","down; below","カ・ゲ","した","A line hanging below the ceiling."],
  ["左","left","サ","ひだり","A hand holding a ruler (工) on the left."],
  ["右","right","ウ","みぎ","A hand bringing food to the mouth 口 — the right hand."],
  ["本","book; origin","ホン","もと","A tree 木 with a mark at its root: origin → books."],
  ["学","study","ガク","まな・ぶ","A child 子 under a roof with sparks of ideas."],
  ["生","life; birth","セイ","い・きる","A sprout growing from the earth 土 into life."],
  ["先","ahead","セン","さき","Legs walking ahead of the others."],
  ["年","year","ネン","とし","A farmer carrying a sheaf of rice: one harvest = one year."],
  ["時","time","ジ","とき","The sun 日 next to a temple 寺 bell that rings the hours."],
  ["今","now","コン","いま","A roof over a single moment."],
  ["何","what","カ","なに","A person 人 holding a box: “what’s inside?”"],
  ["名","name","メイ","な","Evening 夕 + mouth 口: in the dark you call out your name."],
  ["女","woman","ジョ","おんな","A woman kneeling gracefully."],
  ["男","man","ダン","おとこ","Rice field 田 + power 力: the one working the field."],
  ["子","child","シ","こ","A baby in swaddling with arms out."],
  ["目","eye","モク","め","An eye turned on its side."],
  ["耳","ear","ジ","みみ","An ear with its folds."],
  ["手","hand","シュ","て","A hand with fingers spread."],
  ["足","foot; leg","ソク","あし","A knee 口 above a foot stepping."],
  ["雨","rain","ウ","あめ","Raindrops falling inside a window."],
  ["天","heaven","テン","あま","Above the big 大 person there is one more line: heaven."],
  ["気","spirit; energy","キ","—","Steam rising from cooked rice: energy."],
  ["白","white","ハク","しろ","The sun 日 with one ray of white light."],
  ["父","father","フ","ちち","Two crossed axes: dad chopping wood."],
  ["母","mother","ボ","はは","A woman with two dots: a mother nursing."],
  ["食","eat","ショク","た・べる","A roof over a bowl of good food."],
  ["飲","drink","イン","の・む","Food 食 + yawning mouth 欠: wide open to drink."],
  ["見","see","ケン","み・る","An eye 目 on legs: walking around looking."],
  ["行","go","コウ","い・く","A crossroads: where you go."],
  ["来","come","ライ","く・る","A tree 木 with a rice ear: harvest comes."],
  ["休","rest","キュウ","やす・む","A person 人 leaning against a tree 木."],
  ["話","talk","ワ","はな・す","Words 言 + tongue 舌."],
  ["語","language","ゴ","かた・る","Words 言 + five 五 + mouth 口: five mouths speaking a language."],
  ["読","read","ドク","よ・む","Words 言 + sell 売: a salesman reading aloud."],
  ["書","write","ショ","か・く","A hand holding a brush over the sun 日."],
  ["国","country","コク","くに","A jewel 玉 inside borders 囗."],
  ["東","east","トウ","ひがし","The sun 日 rising behind a tree 木."],
  ["西","west","セイ","にし","A bird settling in its nest at sunset."],
  ["南","south","ナン","みなみ","A warm tent in the south."],
  ["北","north","ホク","きた","Two people sitting back to back against the cold."],
  ["電","electricity","デン","—","Rain 雨 over a field with lightning running through."],
  ["車","car; vehicle","シャ","くるま","A cart seen from above: axle and two wheels."],
  ["駅","station","エキ","—","Horse 馬 + measure: the old post-horse stop."],
  ["店","shop","テン","みせ","A cliff roof over a fortune-teller’s stall."]
];

DATA.jpGrammar = [
  ["X は Y です","X is Y (polite)","わたしは がくせいです。","I am a student."],
  ["〜ます / 〜ません","Polite verb: do / don’t","まいにち コーヒーを のみます。","I drink coffee every day."],
  ["を","Marks the object","パンを たべます。","I eat bread. (パン comes from Portuguese/Spanish pan!)"],
  ["に","Time or destination","しちじに おきます。 がっこうに いきます。","I get up at seven. I go to school."],
  ["で","Place of action; means","としょかんで べんきょうします。","I study at the library."],
  ["が あります / います","There is (things / living beings)","ねこが います。","There is a cat."],
  ["〜たい です","Want to …","スペインに いきたいです。","I want to go to Spain."],
  ["〜て ください","Please do …","ゆっくり はなして ください。","Please speak slowly."],
  ["〜ましょう","Let’s …","いっしょに たべましょう。","Let’s eat together."],
  ["い / な adjectives","Describing nouns","しずかな まちです。","It is a quiet town."],
  ["〜から","Because …","あついですから、まどを あけます。","It’s hot, so I’ll open the window."],
  ["〜て います","Action in progress","いま べんきょうして います。","I am studying now."]
];

DATA.jpPhrases = [
  ["こんにちは","konnichiwa","Hello"],
  ["ありがとう ございます","arigatō gozaimasu","Thank you very much"],
  ["すみません","sumimasen","Excuse me / sorry"],
  ["おねがいします","onegaishimasu","Please (request)"],
  ["いただきます","itadakimasu","Said before eating — “I humbly receive”"],
  ["はじめまして","hajimemashite","Nice to meet you"],
  ["わかりません","wakarimasen","I don’t understand"]
];

/* --------------------------------------------------------------------------
   SPANISH — DELE B2
   -------------------------------------------------------------------------- */
DATA.dele = [
  ["Comprensión de lectura","70 min","5 tasks · 36 items","Long texts, opinion pieces, gap-fills with missing paragraphs."],
  ["Comprensión auditiva","40 min","5 tasks · 30 items","Conversations, radio, lectures. Heard twice."],
  ["Expresión e interacción escritas","80 min","2 tasks","A letter/email reacting to an audio + an article, review or report (150–180 words each)."],
  ["Expresión e interacción orales","20 min + 20 prep","3 tasks","Present a proposal, describe a photo situation, react to a survey."]
];

DATA.esLessons = [
  { tag: "Subjuntivo", title: "When do I need the subjunctive? — W.E.I.R.D.O.",
    body: `<p>The subjunctive appears in the second clause after <em>que</em> when the first clause expresses:</p>
<ul class="acro">
<li><b>W</b>ishes — <i>Quiero que <u>vengas</u>.</i></li>
<li><b>E</b>motions — <i>Me alegra que <u>estés</u> aquí.</i></li>
<li><b>I</b>mpersonal expressions — <i>Es importante que <u>estudies</u>.</i></li>
<li><b>R</b>ecommendations — <i>Te recomiendo que <u>leas</u> más.</i></li>
<li><b>D</b>oubt / denial — <i>No creo que <u>sea</u> verdad.</i></li>
<li><b>O</b>jalá — <i>Ojalá <u>apruebe</u> el DELE.</i> <span class="bridge">← Arabic: law shāʼa llāh, “if God wills”</span></li>
</ul>
<p class="tip">B2 trap: <i>creo que</i> + indicative, but <i>no creo que</i> + subjunctive.</p>` },
  { tag: "Conjunciones", title: "Conjunctions that always take subjunctive — E.S.C.A.P.A.",
    body: `<ul class="acro">
<li><b>E</b>n caso de que — <i>Llévate paraguas en caso de que <u>llueva</u>.</i></li>
<li><b>S</b>in que — <i>Salió sin que nadie lo <u>viera</u>.</i></li>
<li><b>C</b>on tal de que — <i>Te ayudo con tal de que me <u>invites</u> a café.</i></li>
<li><b>A</b>ntes de que — <i>Vete antes de que <u>empiece</u> a llover.</i></li>
<li><b>P</b>ara que — <i>Lo explico para que lo <u>entiendas</u>.</i></li>
<li><b>A</b> menos que — <i>No iré a menos que <u>vengas</u>.</i></li>
</ul>
<p class="tip">Picture yourself trying to <b>escape</b> the exam room: you can only escape with the subjunctive.</p>` },
  { tag: "Ser / Estar", title: "Ser = D.O.C.T.O.R. · Estar = P.L.A.C.E.",
    body: `<div class="two">
<div><h5>SER</h5><ul class="acro"><li><b>D</b>escription — <i>Es alta.</i></li><li><b>O</b>ccupation — <i>Es médica.</i></li><li><b>C</b>haracteristic — <i>Es simpático.</i></li><li><b>T</b>ime — <i>Son las tres.</i></li><li><b>O</b>rigin — <i>Soy de Rusia.</i></li><li><b>R</b>elationship — <i>Es mi hermana.</i></li></ul></div>
<div><h5>ESTAR</h5><ul class="acro"><li><b>P</b>osition — <i>Está sentada.</i></li><li><b>L</b>ocation — <i>Está en Granada.</i></li><li><b>A</b>ction — <i>Está leyendo.</i></li><li><b>C</b>ondition — <i>Está cansado.</i></li><li><b>E</b>motion — <i>Está feliz.</i></li></ul></div>
</div>
<p class="tip">B2 nuance: <i>es listo</i> (clever) vs <i>está listo</i> (ready); <i>es aburrido</i> (boring) vs <i>está aburrido</i> (bored).</p>` },
  { tag: "Por / Para", title: "Por looks back, para looks forward",
    body: `<p><b>PARA</b> is an arrow → toward a goal: destination, deadline, purpose, recipient. <i>Salgo para Madrid. Es para el lunes. Estudio para aprobar.</i></p>
<p><b>POR</b> is the road you travel through: cause, exchange, duration, medium. <i>Paseo por el parque. Gracias por todo. Lo compré por diez euros. Hablamos por teléfono.</i></p>
<p class="tip">Mnemonic: <b>PARA</b> has an <b>A</b> at the end like an <b>A</b>rrow-head; <b>POR</b> has an <b>O</b> like a wheel rolling along the road.</p>` },
  { tag: "Condicionales", title: "Si-clauses: the three types",
    body: `<ol>
<li>Real: <i>Si estudio, apruebo.</i> (si + presente → presente/futuro)</li>
<li>Hypothetical: <i>Si estudiara, aprobaría.</i> (si + imperfecto de subjuntivo → condicional)</li>
<li>Impossible past: <i>Si hubiera estudiado, habría aprobado.</i> (si + pluscuamperfecto subj. → condicional compuesto)</li>
</ol>
<p class="tip">Never put a conditional or present subjunctive right after <i>si</i>. “Si + -ría” is the classic mistake examiners look for.</p>` },
  { tag: "Escritura", title: "Writing task toolkit: connectors that sound B2",
    body: `<div class="chips">
<span>Para empezar · <i>En primer lugar</i></span><span>Añadir · <i>Asimismo, además</i></span><span>Contrastar · <i>Sin embargo, no obstante, en cambio</i></span><span>Conceder · <i>Si bien, a pesar de que</i></span><span>Causa · <i>Dado que, puesto que, ya que</i></span><span>Consecuencia · <i>Por consiguiente, de ahí que + subj.</i></span><span>Ejemplo · <i>Pongamos por caso</i></span><span>Opinar · <i>Desde mi punto de vista, a mi juicio</i></span><span>Matizar · <i>Cabe destacar que</i></span><span>Concluir · <i>En definitiva, en resumidas cuentas</i></span>
</div>` }
];

DATA.esVocab = [
  ["aprovechar","to make the most of","A PRO VETs every chance — never wastes one."],
  ["desarrollar","to develop","DES-ARROLLAR: un-roll a scroll and the idea develops."],
  ["agobiado","overwhelmed","Lost in the GOBI desert with a mountain of tasks."],
  ["madrugar","to get up early","MADRE drags you out of bed at dawn."],
  ["ahorrar","to save (money)","a-HORROR of spending — so you save."],
  ["fracasar","to fail","FRACture your CASE in court: you fail."],
  ["lograr","to achieve","LOG a RARE win in your diary."],
  ["plantear","to raise (an issue)","PLANT an idea in the meeting."],
  ["soler","to usually do","My SOLE habit: what I usually do."],
  ["hacer hincapié","to emphasise","Hincar = hammer a stake in: drive the point home."],
  ["quejarse","to complain","“¿QUÉ?” — a JAR full of complaints."],
  ["el desafío","challenge","De-SAFE: stepping out of safety."],
  ["la huelga","strike","The WHEELS stop: everyone on strike."],
  ["el ocio","leisure","“Oh, see, I’m free.”"],
  ["la vivienda","housing","VIVIR (to live) + -ienda: the place you live."],
  ["el alquiler","rent","Arabic al-kirāʼ: the al- reveals it. See El Puente."],
  ["empeñarse en","to insist on","Stubborn as a rock (peña)."],
  ["sobrellevar","to cope with","SOBRE (over) + LLEVAR (carry): carry it over the hill."],
  ["el paro","unemployment","PARAR = to stop: work has stopped."],
  ["imprescindible","indispensable","Im-PRESCIND-ible: you cannot do without (prescindir) it."]
];

DATA.esIdioms = [
  ["tomar el pelo","to pull someone’s leg","Literally “take the hair.”"],
  ["estar en las nubes","to daydream","“To be in the clouds.”"],
  ["meter la pata","to put your foot in it","“To put in the paw.”"],
  ["ser pan comido","to be a piece of cake","“To be eaten bread.”"],
  ["costar un ojo de la cara","to cost an arm and a leg","“To cost an eye from the face.”"],
  ["no tener pelos en la lengua","to speak bluntly","“No hairs on the tongue.”"],
  ["estar como pez en el agua","to be in your element","“Like a fish in water.”"],
  ["dar en el clavo","to hit the nail on the head","“To hit the nail.”"],
  ["echar una mano","to lend a hand","“To throw a hand.”"],
  ["llover a cántaros","to pour with rain","“To rain by the jugful.”"]
];

DATA.esFalseFriends = [
  ["embarazada","pregnant","not embarrassed (= avergonzada)"],
  ["constipado","has a cold","not constipated (= estreñido)"],
  ["éxito","success","not exit (= salida)"],
  ["librería","bookshop","not library (= biblioteca)"],
  ["realizar","to carry out","not realise (= darse cuenta)"],
  ["actual","current","not actual (= real)"],
  ["sensible","sensitive","not sensible (= sensato)"],
  ["carpeta","folder","not carpet (= alfombra ← Arabic!)"],
  ["molestar","to bother","not molest"],
  ["asistir","to attend","not assist (= ayudar)"]
];

/* --------------------------------------------------------------------------
   ARABIC — alphabet, phrases, numbers
   connects: false for the six letters that never join to the next one.
   es: the Spanish sound that helps you pronounce it.
   -------------------------------------------------------------------------- */
DATA.arabic = [
  ["ا","alif","ā",false,"A tall pillar — the first letter stands alone like an Alif-tower.","a in “casa”, long"],
  ["ب","bāʼ","b",true,"A boat with one passenger underneath: b for boat.","b in “bien”"],
  ["ت","tāʼ","t",true,"The same boat carrying two cups of tea on top.","t in “taza” (← Arabic ṭāsa)"],
  ["ث","thāʼ","th",true,"Three dots on top — and ثلاثة (thalātha) means three.","z in Castilian “zapato” [θ]"],
  ["ج","jīm","j",true,"A jug lying on its side with one drop below.","like English j; in Egypt a hard g"],
  ["ح","ḥāʼ","ḥ",true,"The same jug, empty — you breathe a hot “ḥ” to warm it.","a breathy h, softer than Spanish j"],
  ["خ","khāʼ","kh",true,"The jug with a dot on top — it makes the Spanish jota.","j in “jamón” [x] — you already have it!"],
  ["د","dāl","d",false,"A little door half-open.","d in “dos”"],
  ["ذ","dhāl","dh",false,"The door with a dot — the soft “th” of “this”.","d in “nada” [ð] — you already have it!"],
  ["ر","rāʼ","r",false,"A raindrop sliding down.","single r in “pero”"],
  ["ز","zāy","z",false,"The raindrop with a dot — a buzzing zzz.","English z (buzzing)"],
  ["س","sīn","s",true,"Three teeth of a saw — sss.","s in “sol”"],
  ["ش","shīn","sh",true,"The saw with three dots of sawdust — shh!","sh, like “sh” in “show”"],
  ["ص","ṣād","ṣ",true,"A heavy loop — a deep, “dark” s.","s with the tongue pressed low"],
  ["ض","ḍād","ḍ",true,"The heavy loop with a dot. Arabic is “the language of the ḍād”.","emphatic d"],
  ["ط","ṭāʼ","ṭ",true,"A loop with a tall stick — an emphatic t.","emphatic t"],
  ["ظ","ẓāʼ","ẓ",true,"The stick-loop with a dot — an emphatic “th”.","emphatic [ð]"],
  ["ع","ʿayn","ʿ",true,"An open eye (ʿayn = eye), mouth tight in the throat.","no Spanish match: squeeze the throat"],
  ["غ","ghayn","gh",true,"The eye with a dot — a gargle.","g in “agua” [ɣ] — you already have it!"],
  ["ف","fāʼ","f",true,"A loop with one dot above — a finger pointing up.","f in “fuego”"],
  ["ق","qāf","q",true,"Two dots over a deep loop — k from deep in the throat.","k further back in the throat"],
  ["ك","kāf","k",true,"A kite with a small hook inside.","c in “casa”"],
  ["ل","lām","l",true,"A long leg hanging down — l for leg.","l in “luna”"],
  ["م","mīm","m",true,"A small round head on a neck — m for mouth.","m in “mar”"],
  ["ن","nūn","n",true,"A bowl with a nose-dot above it — n for nose.","n in “no”"],
  ["ه","hāʼ","h",true,"A little hut seen from the side — hhh.","English h in “house”"],
  ["و","wāw","w / ū",false,"A comma with a head — “wow!”","u in “huevo”"],
  ["ي","yāʼ","y / ī",true,"A swan with two eggs below.","y in “yo” / i in “sí”"]
];

DATA.arPhrases = [
  ["مرحبا","marḥaban","Hello"],
  ["السلام عليكم","as-salāmu ʿalaykum","Peace be upon you (greeting)"],
  ["وعليكم السلام","wa-ʿalaykum as-salām","And upon you peace (reply)"],
  ["شكرا","shukran","Thank you"],
  ["عفوا","ʿafwan","You’re welcome"],
  ["من فضلك","min faḍlik","Please"],
  ["نعم","naʿam","Yes"],
  ["لا","lā","No"],
  ["كيف حالك؟","kayfa ḥāluk?","How are you?"],
  ["أنا بخير","anā bi-khayr","I am fine"],
  ["اسمي فلادا","ismī Vlada","My name is Vlada"],
  ["إن شاء الله","in shāʼa llāh","God willing — cousin of “ojalá”"],
  ["مع السلامة","maʿa s-salāma","Goodbye"],
  ["أين؟","ayna?","Where?"],
  ["كم؟","kam?","How much / how many?"]
];

DATA.arNumbers = [
  ["٠","صفر","ṣifr","→ Spanish cifra, English cipher & zero"],
  ["١","واحد","wāḥid",""],["٢","اثنان","ithnān",""],["٣","ثلاثة","thalātha",""],
  ["٤","أربعة","arbaʿa",""],["٥","خمسة","khamsa",""],["٦","ستة","sitta",""],
  ["٧","سبعة","sabʿa",""],["٨","ثمانية","thamāniya",""],["٩","تسعة","tisʿa",""],["١٠","عشرة","ʿashara",""]
];

/* --------------------------------------------------------------------------
   EL PUENTE — Spanish ↔ Arabic (about 4,000 Spanish words come from Arabic)
   -------------------------------------------------------------------------- */
DATA.sunLetters = "تثدذرزسشصضطظلن".split("");

DATA.puente = [
  ["aceite","الزيت","az-zayt","oil","sun"],
  ["aceituna","الزيتونة","az-zaytūna","olive","sun"],
  ["azúcar","السكر","as-sukkar","sugar","sun"],
  ["arroz","الأرز","ar-ruzz","rice","sun"],
  ["aduana","الديوان","ad-dīwān","customs ← registry, council","sun"],
  ["ataúd","التابوت","at-tābūt","coffin","sun"],
  ["ajedrez","الشطرنج","ash-shaṭranj","chess","sun"],
  ["azafrán","الزعفران","az-zaʿfarān","saffron","sun"],
  ["azulejo","الزليج","az-zulayj","glazed tile","sun"],
  ["alcalde","القاضي","al-qāḍī","mayor ← judge","moon"],
  ["almohada","المخدة","al-mikhadda","pillow ← cheek-rest","moon"],
  ["almacén","المخزن","al-makhzan","warehouse (→ magazine)","moon"],
  ["algodón","القطن","al-quṭn","cotton","moon"],
  ["álgebra","الجبر","al-jabr","restoring broken parts","moon"],
  ["alcohol","الكحل","al-kuḥl","kohl, fine powder","moon"],
  ["alquiler","الكراء","al-kirāʼ","rent","moon"],
  ["albañil","البناء","al-bannāʼ","builder","moon"],
  ["alfombra","الخمرة","al-khumra","small mat → carpet","moon"],
  ["alfiler","الخلال","al-khilāl","pin","moon"],
  ["alhaja","الحاجة","al-ḥāja","jewel ← needed thing","moon"],
  ["naranja","نارنج","nāranj","bitter orange","none"],
  ["limón","ليمون","laymūn","lemon","none"],
  ["berenjena","باذنجان","bādhinjān","aubergine","none"],
  ["taza","طاسة","ṭāsa","cup, bowl","none"],
  ["jarra","جرة","jarra","jar, jug","none"],
  ["hasta","حتى","ḥattā","until","none"],
  ["ojalá","لو شاء الله","law shāʼa llāh","hopefully ← if God willed","none"],
  ["fulano","فلان","fulān","so-and-so","none"],
  ["mezquino","مسكين","miskīn","stingy ← poor wretch","none"],
  ["cifra","صفر","ṣifr","figure ← zero, empty","none"],
  ["rehén","رهن","rahn","hostage ← pledge","none"],
  ["barrio","بري","barrī","neighbourhood ← outer","none"]
];

DATA.places = [
  ["Guadalquivir","الوادي الكبير","al-wādī al-kabīr","the great river"],
  ["Guadalajara","وادي الحجارة","wādī al-ḥijāra","river of stones"],
  ["Alhambra","الحمراء","al-ḥamrāʼ","the red one"],
  ["Gibraltar","جبل طارق","jabal Ṭāriq","Tariq’s mountain"],
  ["Alcalá","القلعة","al-qalʿa","the castle"],
  ["Medina","مدينة","madīna","city"],
  ["Albacete","البسيط","al-basīṭ","the plain"],
  ["Calatayud","قلعة أيوب","qalʿat Ayyūb","Ayyub’s castle"],
  ["Madrid","مجريط","Majrīṭ","Andalusi name of the town, probably from majrā, water channel"]
];

/* --------------------------------------------------------------------------
   ATLAS — interactive map markers. region: es | ja | ar
   -------------------------------------------------------------------------- */
DATA.atlas = [
  // Spanish-speaking world
  { id:"madrid", region:"es", name:"Madrid", local:"Madrid", lat:40.4168, lng:-3.7038, era:"Founded 9th c. as Majrīṭ",
    history:"Began as a small Muslim fortress, Majrīṭ, built by the Emir of Córdoba. Philip II made it the capital in 1561. Today: the Prado, Velázquez’s Las Meninas, Goya’s black paintings.",
    culture:"Tapas crawls in La Latina, the Sunday Rastro flea market, late dinners at 22:00.",
    words:[["la sobremesa","lingering at the table after a meal"],["el madrugón","getting up very early"]] },
  { id:"cordoba", region:"es", name:"Córdoba", local:"قرطبة", lat:37.8882, lng:-4.7794, era:"929 — Caliphate of Córdoba",
    history:"Capital of al-Andalus and around the year 1000 one of the largest cities in Europe, with paved streets and lit lanterns. Home of Averroes (Ibn Rushd) and Maimonides. The Mezquita’s forest of red-and-white arches now holds a cathedral inside.",
    culture:"May patios full of geraniums, salmorejo, the Andalusian guitar.",
    words:[["el azahar","orange blossom ← az-zahr"],["la mezquita","mosque ← masjid"]], bridge:true },
  { id:"granada", region:"es", name:"Granada", local:"غرناطة", lat:37.1773, lng:-3.5986, era:"1238–1492 — Nasrid Kingdom",
    history:"Last Muslim kingdom of the Iberian Peninsula. The Alhambra (al-ḥamrāʼ, “the red one”) is covered in Arabic poetry carved into plaster. In January 1492 Boabdil handed the keys to Isabel and Fernando — the same year Columbus sailed west.",
    culture:"Free tapas with every drink, the Albaicín’s white streets, flamenco caves of Sacromonte, and Lorca’s birthplace.",
    words:[["el aljibe","cistern ← al-jubb"],["la acequia","irrigation channel ← as-sāqiya"]], bridge:true },
  { id:"toledo", region:"es", name:"Toledo", local:"طليطلة", lat:39.8628, lng:-4.0273, era:"12th–13th c. — School of Translators",
    history:"“City of three cultures”: Christians, Muslims and Jews. Scholars here translated Arabic science and philosophy into Latin and Castilian, carrying algebra, astronomy and Aristotle into Europe.",
    culture:"Marzipan (mazapán), damascened steel, El Greco’s paintings.",
    words:[["el cero","zero ← ṣifr"],["el algoritmo","algorithm ← al-Khwārizmī"]], bridge:true },
  { id:"sevilla", region:"es", name:"Sevilla", local:"إشبيلية", lat:37.3891, lng:-5.9845, era:"1503 — gateway to the Americas",
    history:"The Giralda tower was the minaret of the Almohad mosque. After 1503 all trade with the Americas passed through Seville’s Casa de Contratación.",
    culture:"Semana Santa, the April Fair, sevillanas.",
    words:[["la giralda","weathervane"],["el arrabal","suburb ← ar-rabaḍ"]], bridge:true },
  { id:"salamanca", region:"es", name:"Salamanca", local:"Salamanca", lat:40.9701, lng:-5.6635, era:"1218 — the university",
    history:"One of Europe’s oldest universities. The DELE exams are designed by the Instituto Cervantes with the University of Salamanca. Find the hidden frog on the façade for luck in your exam.",
    culture:"Golden sandstone, student tunas singing at night, the Plaza Mayor.",
    words:[["aprobar","to pass (an exam)"],["suspender","to fail (an exam)"]] },
  { id:"barcelona", region:"es", name:"Barcelona", local:"Barcelona", lat:41.3874, lng:2.1686, era:"1882 — Sagrada Família begins",
    history:"Roman Barcino, then capital of the Crown of Aragon’s Mediterranean empire. Bilingual in Catalan and Spanish. Gaudí’s modernisme changed the skyline.",
    culture:"Vermut on Sundays, castells (human towers), Sant Jordi: a book and a rose.",
    words:[["el vermut","Sunday pre-lunch drink"],["la rambla","promenade ← ramla, sandy riverbed"]], bridge:true },
  { id:"santiago", region:"es", name:"Santiago de Compostela", local:"Santiago", lat:42.8782, lng:-8.5448, era:"9th c. — the Camino",
    history:"End of the Camino de Santiago, Europe’s great pilgrimage route since the Middle Ages. Galicia has its own language, Galician, sister of Portuguese.",
    culture:"Pulpo a feira, bagpipes (gaita), rain and stone.",
    words:[["el peregrino","pilgrim"],["la morriña","homesick nostalgia (Galician)"]] },
  { id:"mexico", region:"es", name:"Ciudad de México", local:"Tenochtitlan", lat:19.4326, lng:-99.1332, era:"1325 — Tenochtitlan founded",
    history:"The Mexica built Tenochtitlan on a lake; Cortés’s conquest followed in 1521. Spanish here absorbed Nahuatl words: chocolate, tomate, aguacate.",
    culture:"Día de Muertos, Frida Kahlo’s blue house, tacos al pastor (born from Lebanese shawarma!).",
    words:[["el chocolate","← Nahuatl xocolatl"],["¡qué padre!","how cool!"]] },
  { id:"cusco", region:"es", name:"Cusco", local:"Qusqu", lat:-13.532, lng:-71.9675, era:"15th c. — Inca capital",
    history:"Navel of the Inca Empire, Tawantinsuyu. Spanish churches stand on perfect Inca stone walls. Quechua is still spoken by millions.",
    culture:"Inti Raymi festival of the sun, coca tea for the altitude.",
    words:[["la papa","potato ← Quechua"],["la cancha","field ← Quechua kancha"]] },
  { id:"buenosaires", region:"es", name:"Buenos Aires", local:"Buenos Aires", lat:-34.6037, lng:-58.3816, era:"1880s — tango is born",
    history:"A port city of Italian and Spanish immigrants. Its Spanish uses vos and the “sh” sound for ll/y: “sho me shamo”.",
    culture:"Tango in San Telmo, mate shared in a circle, Borges.",
    words:[["che","hey, mate"],["vos sabés","you know (voseo)"]] },
  { id:"habana", region:"es", name:"La Habana", local:"La Habana", lat:23.1136, lng:-82.3666, era:"1519 — city founded",
    history:"Fortress port of the Spanish treasure fleets. Afro-Cuban culture created son, rumba and salsa’s roots.",
    culture:"The Malecón at sunset, vintage cars, the son cubano.",
    words:[["la guagua","bus (Caribbean)"],["asere","friend (Cuban)"]] },

  // Japan
  { id:"tokyo", region:"ja", name:"Tokyo", local:"東京", lat:35.6762, lng:139.6503, era:"1603 — Edo shogunate",
    history:"A fishing village called Edo became the shogun’s capital in 1603 and the world’s largest city by the 1700s. Renamed Tōkyō, “eastern capital” (東 east + 京 capital), in 1868.",
    culture:"Shibuya crossing, Asakusa’s Sensō-ji, sumo in Ryōgoku, konbini culture.",
    words:[["東","east (higashi)"],["駅","station (eki)"]] },
  { id:"kyoto", region:"ja", name:"Kyoto", local:"京都", lat:35.0116, lng:135.7681, era:"794 — Heian-kyō",
    history:"Imperial capital for over a thousand years. In the Heian court women wrote in hiragana — Murasaki Shikibu’s Tale of Genji (c. 1008) is often called the first novel.",
    culture:"Tea ceremony, 2,000 temples, geiko in Gion, the Kinkaku-ji.",
    words:[["茶","tea (cha)"],["お寺","temple (o-tera)"]] },
  { id:"nara", region:"ja", name:"Nara", local:"奈良", lat:34.6851, lng:135.8048, era:"710 — first permanent capital",
    history:"Modelled on China’s Chang’an. The Tōdai-ji houses a 15-metre bronze Buddha. Chinese characters (kanji) were adapted to write Japanese in this era.",
    culture:"Deer that bow to you for crackers.",
    words:[["大仏","great Buddha (daibutsu)"],["鹿","deer (shika)"]] },
  { id:"kamakura", region:"ja", name:"Kamakura", local:"鎌倉", lat:35.3192, lng:139.5467, era:"1185 — first shogunate",
    history:"The samurai took power here: the beginning of 700 years of warrior government. Zen Buddhism spread among the samurai.",
    culture:"The Great Buddha in the open air, hydrangeas in June, surf.",
    words:[["侍","samurai"],["禅","Zen"]] },
  { id:"osaka", region:"ja", name:"Osaka", local:"大阪", lat:34.6937, lng:135.5023, era:"16th c. — Hideyoshi’s castle",
    history:"The merchant city, “the nation’s kitchen”. Its own dialect, Kansai-ben, says ookini for thanks.",
    culture:"Kuidaore — eat until you drop: takoyaki, okonomiyaki. Bunraku puppet theatre.",
    words:[["食べる","to eat (taberu)"],["おおきに","thanks (Kansai)"]] },
  { id:"nagasaki", region:"ja", name:"Nagasaki", local:"長崎", lat:32.7503, lng:129.8779, era:"1571 — port for Portuguese ships",
    history:"Portuguese and Spanish missionaries arrived in the 1500s; during Japan’s isolation the Dutch on Dejima island were the only Western window. Words like パン (pan, bread) came in this way.",
    culture:"Castella sponge cake (from Castilla!), champon noodles.",
    words:[["パン","bread — from Iberian pan"],["カステラ","sponge cake ← Castilla"]], bridge:true },
  { id:"hiroshima", region:"ja", name:"Hiroshima", local:"広島", lat:34.3853, lng:132.4553, era:"6 August 1945",
    history:"Destroyed by the first atomic bomb. Rebuilt as a City of Peace. Sadako Sasaki’s thousand paper cranes became a worldwide symbol.",
    culture:"Itsukushima’s floating torii, Hiroshima-style okonomiyaki.",
    words:[["平和","peace (heiwa)"],["鶴","crane (tsuru)"]] },
  { id:"okinawa", region:"ja", name:"Okinawa", local:"沖縄", lat:26.2124, lng:127.6809, era:"1429–1879 — Ryūkyū Kingdom",
    history:"An independent kingdom trading with China, Korea and Southeast Asia, annexed by Japan in 1879. Birthplace of karate.",
    culture:"Ikigai and long lives, the sanshin lute, Eisa drum dancing.",
    words:[["生き甲斐","ikigai — a reason to live"],["空手","karate — empty hand"]] },

  // Arab world
  { id:"petra", region:"ar", name:"Petra", local:"البتراء", lat:30.3285, lng:35.4444, era:"4th c. BC — Nabataeans",
    history:"Rose-red city carved into cliffs by the Nabataeans, whose script evolved into the Arabic alphabet.",
    culture:"Bedouin tea with sage, mansaf.",
    words:[["البتراء","al-Batrāʼ — Petra"],["صخر","rock (ṣakhr)"]] },
  { id:"mecca", region:"ar", name:"Mecca", local:"مكة", lat:21.3891, lng:39.8579, era:"610 — beginning of the Qurʼān",
    history:"Trading town of caravans. Muhammad’s revelation began here around 610; in 622 he moved to Medina (the Hijra) — year 1 of the Islamic calendar. The Qurʼān fixed Classical Arabic.",
    culture:"The Hajj pilgrimage. Holy city, open only to Muslims.",
    words:[["كتاب","book (kitāb)"],["هجرة","migration (hijra)"]] },
  { id:"damascus", region:"ar", name:"Damascus", local:"دمشق", lat:33.5138, lng:36.2765, era:"661 — Umayyad Caliphate",
    history:"One of the oldest continuously inhabited cities. Capital of the Umayyads, whose empire reached from Spain to India. A prince of this family, ʿAbd al-Raḥmān, fled to Córdoba and founded al-Andalus’s dynasty.",
    culture:"Damask cloth, jasmine courtyards, the Umayyad Mosque.",
    words:[["ياسمين","jasmine (yāsamīn) → jazmín"],["شام","Shām — Levant"]], bridge:true },
  { id:"baghdad", region:"ar", name:"Baghdad", local:"بغداد", lat:33.3152, lng:44.3661, era:"762 — Round City of the Abbasids",
    history:"The House of Wisdom translated Greek, Persian and Indian science into Arabic. Al-Khwārizmī wrote al-jabr here — algebra and algorithm are his legacy. Sacked by the Mongols in 1258.",
    culture:"The Thousand and One Nights, masgouf grilled fish.",
    words:[["بيت الحكمة","House of Wisdom"],["الجبر","al-jabr → álgebra"]], bridge:true },
  { id:"cairo", region:"ar", name:"Cairo", local:"القاهرة", lat:30.0444, lng:31.2357, era:"969 — al-Qāhira founded",
    history:"Founded by the Fatimids beside the pyramids of Giza (c. 2560 BC). Al-Azhar University (970s). Egyptian films and songs made Cairene Arabic understood across the Arab world.",
    culture:"Umm Kulthum, Naguib Mahfouz’s alleys, koshari, the Nile at night.",
    words:[["القاهرة","the victorious"],["نيل","Nile (nīl)"]] },
  { id:"alexandria", region:"ar", name:"Alexandria", local:"الإسكندرية", lat:31.2001, lng:29.9187, era:"331 BC — Alexander’s city",
    history:"The ancient Library and the Pharos lighthouse. Greek, Egyptian and later Arab learning met here.",
    culture:"Seaside cafés of the Corniche, Cavafy’s poems.",
    words:[["منارة","lighthouse, minaret (manāra)"],["بحر","sea (baḥr)"]] },
  { id:"kairouan", region:"ar", name:"Kairouan", local:"القيروان", lat:35.6781, lng:10.0963, era:"670 — first Arab city in the Maghreb",
    history:"Base from which Arab armies crossed North Africa; in 711 Ṭāriq ibn Ziyād crossed to Spain and gave his name to Gibraltar (jabal Ṭāriq).",
    culture:"Carpets and makroudh date pastries.",
    words:[["جبل","mountain (jabal)"],["قيروان","caravan camp"]], bridge:true },
  { id:"fes", region:"ar", name:"Fes", local:"فاس", lat:34.0181, lng:-5.0078, era:"859 — al-Qarawiyyin",
    history:"Fāṭima al-Fihrī founded al-Qarawiyyin, often cited as the oldest continuously operating university. Thousands of Andalusi refugees settled here after 1492, bringing Spanish-Arab music and crafts.",
    culture:"The medina’s 9,000 lanes, leather tanneries, Andalusi music.",
    words:[["زليج","zellige tilework → azulejo"],["مدينة","city, old town"]], bridge:true },
  { id:"marrakesh", region:"ar", name:"Marrakesh", local:"مراكش", lat:31.6295, lng:-7.9811, era:"1070 — Almoravid capital",
    history:"Capital of the Almoravids and Almohads, Berber empires that also ruled al-Andalus. The Koutoubia minaret is the twin sister of Seville’s Giralda.",
    culture:"Jemaa el-Fnaa storytellers, mint tea poured from a height, darija dialect full of Spanish and French words.",
    words:[["سوق","market (sūq) → zoco"],["أتاي","tea (atāy, Moroccan)"]], bridge:true }
];

/* --------------------------------------------------------------------------
   HISTORY FROM SCRATCH — timelines
   -------------------------------------------------------------------------- */
DATA.timelines = {
  es: { title:"España & Hispanoamérica", items:[
    ["c. 36,000 BC","Altamira cave paintings — bison in ochre."],
    ["218 BC","Rome arrives: Latin becomes the ancestor of Spanish."],
    ["c. 415","Visigoths rule Hispania."],
    ["711","Ṭāriq crosses the strait: al-Andalus begins."],
    ["929","Caliphate of Córdoba — Europe’s cultural capital."],
    ["1085","Toledo taken; the School of Translators follows."],
    ["1492","Granada falls · Columbus reaches the Americas · Nebrija’s Castilian grammar."],
    ["1605","Cervantes publishes Don Quijote."],
    ["1810–25","Latin American independence."],
    ["1936–39","Civil War; Lorca is killed in 1936."],
    ["1975–78","Franco dies; democracy and the Constitution."],
    ["1986","Spain joins the European Community."]]},
  ja: { title:"日本 — Japan", items:[
    ["c. 14,000 BC","Jōmon culture: some of the world’s oldest pottery."],
    ["c. 300 BC","Yayoi: rice farming and metal arrive."],
    ["538","Buddhism arrives from Korea."],
    ["710","Nara, the first permanent capital."],
    ["794","Heian-kyō (Kyoto): hiragana and the Tale of Genji."],
    ["1185","Kamakura: samurai government begins."],
    ["1543","Portuguese ships reach Tanegashima."],
    ["1603","Edo period: 250 years of peace and isolation."],
    ["1868","Meiji Restoration: rapid modernisation."],
    ["1945","Hiroshima and Nagasaki; end of the war."],
    ["1964","Tokyo Olympics and the Shinkansen."],
    ["2019","Reiwa era (令和) begins."]]},
  ar: { title:"العالم العربي — Arab world", items:[
    ["c. 2560 BC","Great Pyramid of Giza."],
    ["4th c. BC","Nabataeans carve Petra; their script → Arabic letters."],
    ["610","The Qurʼān’s revelation begins in Mecca."],
    ["622","The Hijra: year 1 of the Islamic calendar."],
    ["661","Umayyad Caliphate in Damascus."],
    ["711","Arab-Berber armies enter Iberia."],
    ["762","Baghdad founded; House of Wisdom."],
    ["859","al-Qarawiyyin founded in Fes."],
    ["969","Cairo founded by the Fatimids."],
    ["1258","Mongols sack Baghdad."],
    ["1517","Ottoman rule over much of the region."],
    ["20th c.","Independence of modern Arab states."]]}
};

/* --------------------------------------------------------------------------
   PANTHEON — people to know (hover/tap for a note)
   -------------------------------------------------------------------------- */
DATA.pantheon = [
  ["Cervantes","es","Don Quijote (1605). Spanish is “la lengua de Cervantes”; the Instituto Cervantes runs the DELE."],
  ["Federico García Lorca","es","Granada poet. His Diván del Tamarit borrows forms of Arabic poetry: the gacela (ghazal) and casida (qaṣīda)."],
  ["Frida Kahlo","es","Mexican painter of self-portraits and the Casa Azul."],
  ["Averroes","ar","Ibn Rushd of Córdoba (1126–98): his commentaries on Aristotle shaped European philosophy."],
  ["Murasaki Shikibu","ja","Court lady of Heian Kyoto; wrote the Tale of Genji in hiragana."],
  ["Matsuo Bashō","ja","Master of haiku: 古池や蛙飛び込む水の音 — an old pond, a frog jumps in, the sound of water."],
  ["Hokusai","ja","The Great Wave off Kanagawa (c. 1831)."],
  ["Ibn Battuta","ar","Moroccan traveller from Tangier who journeyed ~120,000 km in the 14th century, including al-Andalus."],
  ["Umm Kulthum","ar","“The Star of the East”: Egyptian singer whose concerts lasted hours."],
  ["Naguib Mahfouz","ar","Cairo novelist, Nobel Prize 1988."]
];

/* --------------------------------------------------------------------------
   12-WEEK PLAN (Kaizen pacing: ~30 min/day split across the three)
   -------------------------------------------------------------------------- */
DATA.plan = [
  ["Week 1","Hiragana あ–そ · Arabic letters ا–خ · Spanish: ser/estar","Shu"],
  ["Week 2","Hiragana た–ほ · Arabic letters د–ش · Subjunctive W.E.I.R.D.O.","Shu"],
  ["Week 3","Hiragana ま–ん · Arabic letters ص–ي · DELE reading task 1","Shu"],
  ["Week 4","Katakana · Sun & moon letters via El Puente · E.S.C.A.P.A.","Shu"],
  ["Week 5","Kanji 1–20 · Arabic phrases · Por/para","Ha"],
  ["Week 6","Kanji 21–40 · Arabic numbers · Idioms","Ha"],
  ["Week 7","N5 grammar 1–6 · Read words with short vowels · Si-clauses","Ha"],
  ["Week 8","Kanji 41–60 · El Puente words · Writing task: formal email","Ha"],
  ["Week 9","N5 grammar 7–12 · Write your name in Arabic · Listening mock","Ri"],
  ["Week 10","Kanji 61–73 · Atlas: al-Andalus route · Oral task 1 shadowing","Ri"],
  ["Week 11","N5 mock test · Arabic dialogues · Full DELE reading mock","Ri"],
  ["Week 12","Review all boxes · Hansei: what next? · Full DELE mock","Ri"]
];
