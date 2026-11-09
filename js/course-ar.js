/* ==========================================================================
   ARABIC COURSE — Modern Standard Arabic, A0 → A2.
   Follows the classic grammatical progression of European university
   grammars such as Janusz Danecki’s “Gramatyka języka arabskiego”
   (script → nominal sentence → definiteness & iḍāfa → root and pattern →
   the verb: perfect, imperfect → negation, plural, comparison).
   Explanations and exercises are original.
   Answers accept Arabic script (with or without vowel marks) or
   transliteration (diacritics such as ā, ḥ, ʿ optional).
   ========================================================================== */
(function () {
  const A = (ar, tr, en) => `<p class="xm"><span class="say-line ar" data-lang="ar" dir="rtl">${ar}</span><b class="trn">${tr}</b><i>${en}</i></p>`;
  const tip = (t) => `<p class="tip">${t}</p>`;
  const tbl = (rows) => `<table class="conj ar-t"><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td${i === 1 ? ' class="ar" dir="rtl"' : ""}>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  const U = (id, title, ref, points, v, ex) => ({ id, title, ref, points, v, ex });

  window.COURSE_AR = {
    key: "ar", lang: "ar", name: "العربية A0 → A2",
    source: "Modern Standard Arabic in the classic grammar order used by Janusz Danecki’s Gramatyka języka arabskiego and similar university courses. Learn the alphabet above first.",
    groups: [
      { label: "A0", lessons: [
        U("ar1", "Short vowels, sukūn and shadda", "Script · ḥarakāt", [
          ["Vowels are small marks", `<p>Arabic writes consonants; short vowels are optional marks: <b>fatḥa</b> ـَ = a (above), <b>ḍamma</b> ـُ = u (a little wāw above), <b>kasra</b> ـِ = i (below). <b>Sukūn</b> ـْ = no vowel. <b>Shadda</b> ـّ = doubled consonant.</p>${A("بَ بُ بِ بْ", "ba · bu · bi · b", "the four states of bāʼ")}${A("كَتَبَ", "kataba", "he wrote")}${A("مُدَرِّس", "mudarris", "teacher (shadda doubles the r)")}`],
          ["Tanwīn — the n-ending", `<p>Doubled vowel marks add <b>-n</b> to indefinite words: ـً -an, ـٌ -un, ـٍ -in.</p>${A("كِتَابٌ", "kitābun", "a book")}${tip("Children's books, the Qurʼān and textbooks show all vowels; newspapers almost never. Read with vowels first.")}`]
        ], [["كَتَبَ","kataba","he wrote"],["مُدَرِّس","mudarris","teacher"],["بَاب","bāb","door"],["قَلَم","qalam","pen"]], [
          ["Read: بُ", "bu"],
          ["Read: بِ", "bi"],
          ["Read: كَتَبَ", "kataba"],
          ["Read: قَلَم", "qalam"],
          ["What does the shadda ـّ do?", ["doubles the consonant", "makes a long vowel", "marks no vowel"], 0]
        ]),
        U("ar2", "Long vowels, joining and tāʼ marbūṭa", "Script · long vowels · ة", [
          ["Three long vowels", `<p><b>ا</b> = ā, <b>و</b> = ū, <b>ي</b> = ī. Remember: the six letters ا د ذ ر ز و never join to the left, so the word breaks after them.</p>${A("بَاب", "bāb", "door")}${A("نُور", "nūr", "light")}${A("كَبِير", "kabīr", "big")}`],
          ["ة — the tied t", `<p><b>ة</b> appears only at the end of words and almost always marks <b>feminine</b>. Say it <b>-a</b> at a pause, <b>-at</b> before another word.</p>${A("مَدْرَسَة", "madrasa", "school")}${A("مَدِينَة", "madīna", "city — Spanish Medina")}`]
        ], [["نُور","nūr","light"],["كَبِير","kabīr","big"],["مَدْرَسَة","madrasa","school"],["مَدِينَة","madīna","city"],["بَيْت","bayt","house"]], [
          ["Read: بَاب", "bab;bāb"],
          ["Read: نُور", "nur;nūr"],
          ["Read: كَبِير", "kabir;kabīr"],
          ["Read: مَدِينَة", "madina;madīna"],
          ["ة usually marks…", ["feminine", "plural", "a question"], 0]
        ]),
        U("ar3", "The article al- and sun/moon letters", "Definiteness · al-", [
          ["al- = the", `<p>One article for every gender and number: <b>ال</b>. Before the 14 <b>sun letters</b> (t th d dh r z s sh ṣ ḍ ṭ ẓ l n) the l is not pronounced and the next letter doubles. Before <b>moon letters</b> it stays.</p>${A("الشَّمْس", "ash-shams", "the sun — sun letter")}${A("القَمَر", "al-qamar", "the moon — moon letter")}${tip("You already know this from Spanish: <i>as-sukkar → azúcar</i>, <i>al-qāḍī → alcalde</i>. See El Puente below.")}`]
        ], [["الشَّمْس","ash-shams","the sun"],["القَمَر","al-qamar","the moon"],["الرَّجُل","ar-rajul","the man"],["الكِتَاب","al-kitāb","the book"],["الطَّالِب","aṭ-ṭālib","the student"]], [
          ["Read: الشَّمْس", "ash-shams;ashshams;as-shams"],
          ["Read: الكِتَاب", "al-kitab;alkitab;al-kitāb"],
          ["Read: النُّور", "an-nur;annur;an-nūr"],
          ["ر is a…", ["sun letter", "moon letter"], 0],
          ["Read: الطَّالِب", "at-talib;attalib;aṭ-ṭālib"]
        ]),
        U("ar4", "Greetings and personal pronouns", "Pronouns · ḍamāʼir", [
          ["Pronouns (singular and plural)", tbl([["I", "أَنَا", "anā"], ["you (m)", "أَنْتَ", "anta"], ["you (f)", "أَنْتِ", "anti"], ["he", "هُوَ", "huwa"], ["she", "هِيَ", "hiya"], ["we", "نَحْنُ", "naḥnu"], ["you (pl)", "أَنْتُم", "antum"], ["they", "هُم", "hum"]]) + tip("Arabic distinguishes “you” to a man (anta) and to a woman (anti) — and verbs and adjectives follow.")],
          ["First words", `${A("السَّلَامُ عَلَيْكُم — وَعَلَيْكُمُ السَّلَام", "as-salāmu ʿalaykum — wa-ʿalaykumu s-salām", "peace be upon you — and upon you peace")}${A("كَيْفَ حَالُكِ؟", "kayfa ḥāluki?", "how are you? (to a woman)")}`]
        ], [["أَنَا","anā","I"],["هُوَ","huwa","he"],["هِيَ","hiya","she"],["نَحْنُ","naḥnu","we"],["أَنْتِ","anti","you (f)"]], [
          ["“I” in Arabic:", "أنا;ana"],
          ["“she”:", "هي;hiya"],
          ["“we”:", "نحن;nahnu"],
          ["“you” to a woman:", "أنت;anti"],
          ["Reply to السلام عليكم:", ["وعليكم السلام", "مع السلامة", "شكرا"], 0]
        ])
      ]},
      { label: "A1", lessons: [
        U("ar5", "The nominal sentence (no verb “to be”)", "Syntax · al-jumla al-ismiyya", [
          ["Subject + predicate", `<p>In the present, Arabic needs no “is/am/are”. Definite subject + indefinite predicate = a sentence.</p>${A("البَيْتُ كَبِيرٌ.", "al-baytu kabīrun.", "The house is big.")}${A("أَنَا طَالِبَةٌ.", "anā ṭāliba.", "I am a (female) student.")}${A("هَلْ أَنْتَ مِصْرِيٌّ؟", "hal anta miṣriyyun?", "Are you Egyptian?")}${tip("<b>هَلْ</b> turns a statement into a yes/no question. <b>-iyy</b> forms nationalities: miṣr → miṣriyy, rūsiyā → rūsiyy.")}`]
        ], [["طَالِب","ṭālib","student (m)"],["جَدِيد","jadīd","new"],["مِصْرِيّ","miṣriyy","Egyptian"],["هَلْ","hal","yes/no question"],["صَغِير","ṣaghīr","small"]], [
          ["Translate: I am a student (m).", "أنا طالب;ana talib"],
          ["Translate: The book is new.", "الكتاب جديد;al-kitab jadid"],
          ["هَلْ أَنْتَ مِصْرِيّ؟ means…", ["Are you Egyptian?", "Where are you from?", "You are Egyptian."], 0],
          ["Translate: The house is small.", "البيت صغير;al-bayt saghir"]
        ]),
        U("ar6", "Gender and adjective agreement", "Morphology · agreement", [
          ["Feminine = add ة", `${A("مُدَرِّس — مُدَرِّسَة", "mudarris — mudarrisa", "teacher m — f")}${A("كَبِير — كَبِيرَة", "kabīr — kabīra", "big m — f")}`],
          ["Phrase vs sentence", `<p>The adjective <b>follows</b> its noun and copies gender <b>and definiteness</b>. Same al- on both = a phrase; al- only on the noun = a sentence.</p>${A("البَيْتُ الكَبِيرُ", "al-baytu l-kabīr", "the big house (phrase)")}${A("البَيْتُ كَبِيرٌ", "al-baytu kabīr", "the house is big (sentence)")}${A("السَّيَّارَةُ كَبِيرَةٌ", "as-sayyāra kabīra", "the car is big")}`]
        ], [["سَيَّارَة","sayyāra","car"],["جَمِيل","jamīl","beautiful"],["قَدِيم","qadīm","old"],["مُدَرِّسَة","mudarrisa","teacher (f)"],["بِنْت","bint","girl"]], [
          ["Female teacher:", "مدرسة;mudarrisa"],
          ["the big house (phrase):", "البيت الكبير;al-bayt al-kabir;al-baytu l-kabir;al-bayt l-kabir"],
          ["The car is big:", "السيارة كبيرة;as-sayyara kabira"],
          ["Which means “the house is big”?", ["البيت كبير", "البيت الكبير", "بيت كبير"], 0]
        ]),
        U("ar7", "Demonstratives: hādhā, hādhihi", "Pronouns · asmāʼ al-ishāra", [
          ["This and that", tbl([["this (m)", "هٰذَا", "hādhā"], ["this (f)", "هٰذِهِ", "hādhihi"], ["that (m)", "ذٰلِكَ", "dhālika"], ["that (f)", "تِلْكَ", "tilka"]]) + `${A("هٰذَا كِتَابٌ.", "hādhā kitāb.", "This is a book.")}${A("هٰذَا الكِتَابُ", "hādhā l-kitāb", "this book")}` + tip("Without al- after it → a sentence (“this is…”). With al- → a phrase (“this…”).")]
        ], [["هٰذَا","hādhā","this (m)"],["هٰذِهِ","hādhihi","this (f)"],["ذٰلِكَ","dhālika","that (m)"],["تِلْكَ","tilka","that (f)"]], [
          ["This is a book:", "هذا كتاب;hadha kitab"],
          ["This (f) is a school:", "هذه مدرسة;hadhihi madrasa"],
          ["“that” (f):", ["تلك", "ذلك", "هذه"], 0],
          ["this book (phrase):", "هذا الكتاب;hadha al-kitab;hadha l-kitab;hadhal kitab"]
        ]),
        U("ar8", "Possessive suffixes", "Pronouns · attached", [
          ["Endings glued to the noun", tbl([["my", "كِتَابِي", "kitābī"], ["your (m)", "كِتَابُكَ", "kitābuka"], ["your (f)", "كِتَابُكِ", "kitābuki"], ["his", "كِتَابُهُ", "kitābuhu"], ["her", "كِتَابُهَا", "kitābuhā"], ["our", "كِتَابُنَا", "kitābunā"], ["your (pl)", "كِتَابُكُم", "kitābukum"], ["their", "كِتَابُهُم", "kitābuhum"]]) + tip("ة becomes ت before a suffix: مَدْرَسَة → مَدْرَسَتِي madrasatī, my school.") + A("اِسْمِي فْلَادَا.", "ismī Vlada.", "My name is Vlada.")]
        ], [["اِسْم","ism","name"],["بَيْتِي","baytī","my house"],["أُمّ","umm","mother"],["أَب","ab","father"],["صَدِيق","ṣadīq","friend"]], [
          ["my house:", "بيتي;bayti"],
          ["her book:", "كتابها;kitabuha;kitabha"],
          ["our school:", "مدرستنا;madrasatuna;madrasatna"],
          ["his name:", "اسمه;ismuhu;ismuh"],
          ["my name:", "اسمي;ismi"]
        ]),
        U("ar9", "The iḍāfa (X of Y)", "Syntax · iḍāfa", [
          ["Two nouns locked together", `<p>The first noun never takes al- or tanwīn; the second defines the whole phrase.</p>${A("بَابُ البَيْتِ", "bābu l-bayt", "the door of the house")}${A("كِتَابُ الطَّالِبِ", "kitābu ṭ-ṭālib", "the student's book")}${A("جَامِعَةُ القَاهِرَةِ", "jāmiʿatu l-qāhira", "Cairo University (ة is read -t)")}${tip("Spanish place names keep frozen iḍāfas: <i>wādī al-ḥijāra</i> → Guadalajara, <i>jabal Ṭāriq</i> → Gibraltar.")}`]
        ], [["جَامِعَة","jāmiʿa","university"],["وَادِي","wādī","valley, river"],["جَبَل","jabal","mountain"],["مَدِينَة","madīna","city"],["طَالِبَة","ṭāliba","student (f)"]], [
          ["the door of the house:", "باب البيت;bab al-bayt;babu l-bayt"],
          ["the student's book:", "كتاب الطالب;kitab at-talib;kitabu t-talib"],
          ["Which is correct?", ["كتاب الطالب", "الكتاب الطالب"], 0],
          ["Gibraltar comes from jabal Ṭāriq. jabal means…", ["mountain", "river", "castle"], 0]
        ]),
        U("ar10", "Roots and patterns", "Morphology · al-jidhr wa-l-wazn", [
          ["Three consonants carry the meaning", `<p>Most words grow from a 3-letter <b>root</b>. Vowels and extra letters — the <b>pattern</b> — say what kind of word it is. Think of the root as a seed and the pattern as the pot.</p>${tbl([["he wrote", "كَتَبَ", "kataba — faʿala, verb"], ["book", "كِتَاب", "kitāb — fiʿāl, thing"], ["writer", "كَاتِب", "kātib — fāʿil, the doer"], ["office, desk", "مَكْتَب", "maktab — mafʿal, the place"], ["library, bookshop", "مَكْتَبَة", "maktaba — place"], ["written; letter", "مَكْتُوب", "maktūb — mafʿūl, done-to"]])}`],
          ["Same patterns, other roots", `${A("دَرَسَ · مَدْرَسَة · دَارِس", "darasa · madrasa · dāris", "studied · school · student (d-r-s)")}${A("لَعِبَ · مَلْعَب · لَاعِب", "laʿiba · malʿab · lāʿib", "played · playground · player (l-ʿ-b)")}`]
        ], [["كَاتِب","kātib","writer"],["مَكْتَب","maktab","office"],["مَكْتَبَة","maktaba","library"],["دَرْس","dars","lesson"],["مَلْعَب","malʿab","stadium"]], [
          ["Root of مدرسة (three letters):", "درس;d-r-s;drs;د ر س"],
          ["Writer (fāʿil of k-t-b):", "كاتب;katib"],
          ["Office (mafʿal of k-t-b):", "مكتب;maktab"],
          ["مَلْعَب (l-ʿ-b = play) means…", ["a playground / stadium", "a player", "he played"], 0]
        ]),
        U("ar11", "Prepositions, “to have” and questions", "Particles · ḥurūf al-jarr", [
          ["Prepositions", `<p>فِي fī in · عَلَى ʿalā on · مِنْ min from · إِلَى ilā to · مَعَ maʿa with · عِنْدَ ʿinda at/with.</p>`],
          ["To have = “at me is”", `${A("عِنْدِي كِتَابٌ.", "ʿindī kitāb.", "I have a book.")}${A("عِنْدَهَا سَيَّارَةٌ.", "ʿindahā sayyāra.", "She has a car.")}`],
          ["Question words", `<p>مَا / مَاذَا mā / mādhā what · مَنْ man who · أَيْنَ ayna where · مَتَى matā when · كَيْفَ kayfa how · كَمْ kam how many · لِمَاذَا limādhā why.</p>${A("مِنْ أَيْنَ أَنْتِ؟ — أَنَا مِنْ رُوسِيَا.", "min ayna anti? — anā min rūsiyā.", "Where are you from? — I'm from Russia.")}`]
        ], [["عِنْدِي","ʿindī","I have"],["فِي","fī","in"],["مِنْ","min","from"],["أَيْنَ","ayna","where"],["مَتَى","matā","when"]], [
          ["I have a book:", "عندي كتاب;indi kitab"],
          ["where?", "أين;ayna"],
          ["from Russia:", "من روسيا;min rusiya;min rusia"],
          ["who?", "من;man"],
          ["when?", "متى;mata"]
        ]),
        U("ar12", "Numbers 1–10 and “there is”", "Numerals · hunāka", [
          ["Numbers", `<p>See the number table above. Arabic numerals in the Mashreq: ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠ — the West's “Arabic numerals” came via al-Andalus.</p>${tip("Numbers 3–10 take the opposite gender of the noun counted: <i>thalāthatu kutub</i> (3 books, m) but <i>thalāthu banāt</i> (3 girls, f). Just notice it for now.")}`],
          ["There is / are", `${A("هُنَاكَ قِطَّةٌ فِي البَيْتِ.", "hunāka qiṭṭa fī l-bayt.", "There is a cat in the house.")}`]
        ], [["هُنَاكَ","hunāka","there is"],["قِطَّة","qiṭṭa","cat"],["ثَلَاثَة","thalātha","three"],["سَبْعَة","sabʿa","seven"],["عَشَرَة","ʿashara","ten"]], [
          ["“three”:", "ثلاثة;thalatha"],
          ["“ten”:", "عشرة;ashara"],
          ["“there is”:", "هناك;hunaka"],
          ["“seven”:", "سبعة;saba;sabaa"],
          ["٥ is…", ["five", "four", "zero"], 0]
        ])
      ]},
      { label: "A2", lessons: [
        U("ar13", "Past tense (al-māḍī)", "Verb · perfect", [
          ["Endings after the stem katab-", tbl([["I wrote", "كَتَبْتُ", "katabtu"], ["you (m)", "كَتَبْتَ", "katabta"], ["you (f)", "كَتَبْتِ", "katabti"], ["he", "كَتَبَ", "kataba"], ["she", "كَتَبَتْ", "katabat"], ["we", "كَتَبْنَا", "katabnā"], ["you (pl)", "كَتَبْتُم", "katabtum"], ["they", "كَتَبُوا", "katabū"]]) + tip("The dictionary form is “he did”: <b>kataba</b>. Pronouns are usually dropped. In a verb-first sentence the verb stays singular: <i>kataba ṭ-ṭullābu</i> — the students wrote.")]
        ], [["كَتَبَ","kataba","write"],["دَرَسَ","darasa","study"],["ذَهَبَ","dhahaba","go"],["شَرِبَ","shariba","drink"],["أَكَلَ","akala","eat"]], [
          ["I wrote:", "كتبت;katabtu"],
          ["she wrote:", "كتبت;katabat"],
          ["we wrote:", "كتبنا;katabna"],
          ["they wrote:", "كتبوا;katabu"],
          ["he went:", "ذهب;dhahaba"]
        ]),
        U("ar14", "Present tense (al-muḍāriʿ)", "Verb · imperfect", [
          ["Prefixes — “anaytu”", `<p>The present uses prefixes: <b>a-</b> (I), <b>na-</b> (we), <b>ya-</b> (he, they), <b>ta-</b> (you, she). Arab grammarians memorise them as the word <b>أنيت</b> (a-n-y-t).</p>${tbl([["I write", "أَكْتُبُ", "aktubu"], ["you (m) / she", "تَكْتُبُ", "taktubu"], ["you (f)", "تَكْتُبِينَ", "taktubīna"], ["he", "يَكْتُبُ", "yaktubu"], ["we", "نَكْتُبُ", "naktubu"], ["you (pl)", "تَكْتُبُونَ", "taktubūna"], ["they", "يَكْتُبُونَ", "yaktubūna"]])}${tip("The middle vowel (u in yaktubu, a in yashrabu, i in yajlisu) must be learnt with each verb.")}`]
        ], [["يَكْتُبُ","yaktubu","he writes"],["يَدْرُسُ","yadrusu","he studies"],["يَذْهَبُ","yadhhabu","he goes"],["يَشْرَبُ","yashrabu","he drinks"],["يَسْكُنُ","yaskunu","he lives"]], [
          ["I write:", "أكتب;aktubu;aktub"],
          ["he writes:", "يكتب;yaktubu;yaktub"],
          ["we study:", "ندرس;nadrusu;nadrus"],
          ["they (m) write:", "يكتبون;yaktubuna;yaktubun"],
          ["The prefix na- means…", ["we", "I", "she"], 0]
        ]),
        U("ar15", "Negation", "Particles · nafy", [
          ["Five ways to say no", `<p>Mnemonic: <b>“Lā now, Mā and Lam then, Lan later, Laysa for being.”</b></p>${A("لَا أَكْتُبُ", "lā aktubu", "I don't write (present)")}${A("مَا كَتَبْتُ", "mā katabtu", "I didn't write (past, everyday)")}${A("لَمْ أَكْتُبْ", "lam aktub", "I didn't write (formal: lam + present, last vowel dropped)")}${A("لَنْ أَكْتُبَ", "lan aktuba", "I won't write (future)")}${A("لَيْسَ طَالِبًا", "laysa ṭāliban", "he isn't a student (no verb sentence)")}`]
        ], [["لَا","lā","not (present)"],["مَا","mā","not (past)"],["لَمْ","lam","did not"],["لَنْ","lan","will not"],["لَيْسَ","laysa","is not"]], [
          ["I don't write:", "لا أكتب;la aktubu;la aktub"],
          ["I didn't write (with mā):", "ما كتبت;ma katabtu"],
          ["“I will not go”:", ["لن أذهب", "لم أذهب", "لا أذهب"], 0],
          ["He is not a student:", "ليس طالبا;laysa taliban;laysa talib"]
        ]),
        U("ar16", "Future and kāna (was)", "Verb · future · kāna", [
          ["sa- / sawfa + present", `${A("سَأَكْتُبُ", "sa-aktubu", "I will write")}${A("سَوْفَ نَذْهَبُ إِلَى غَرْنَاطَة.", "sawfa nadhhabu ilā Gharnāṭa.", "We will go to Granada.")}`],
          ["kāna — the past of “to be”", `<p>Conjugated like a past verb (kuntu, kunta, kāna, kānat…). Its predicate takes <b>-an</b>.</p>${A("كَانَ البَيْتُ كَبِيرًا.", "kāna l-baytu kabīran.", "The house was big.")}${A("كُنْتُ طَالِبَةً.", "kuntu ṭālibatan.", "I was a student (f).")}`]
        ], [["سَـ","sa-","will"],["سَوْفَ","sawfa","will"],["كَانَ","kāna","was"],["كُنْتُ","kuntu","I was"],["غَدًا","ghadan","tomorrow"]], [
          ["I will write (sa-):", "سأكتب;sa-aktubu;saaktubu;sa aktubu"],
          ["We will go (nadhhabu):", "سنذهب;sanadhhabu;sa-nadhhabu"],
          ["He was a teacher:", "كان مدرسا;kana mudarrisan"],
          ["I was:", "كنت;kuntu"]
        ]),
        U("ar17", "Plurals: sound and broken", "Morphology · jamʿ", [
          ["Sound plurals", `<p>Masculine (people): <b>-ūna</b> مُدَرِّسُونَ mudarrisūna. Feminine: <b>-āt</b> مُدَرِّسَات mudarrisāt.</p>`],
          ["Broken plurals — the pattern changes inside", `${tbl([["book → books", "كِتَاب → كُتُب", "kitāb → kutub"], ["house → houses", "بَيْت → بُيُوت", "bayt → buyūt"], ["boy → children", "وَلَد → أَوْلَاد", "walad → awlād"], ["man → men", "رَجُل → رِجَال", "rajul → rijāl"]])}${tip("Golden rule: plurals of <b>things</b> agree as feminine singular: الكُتُبُ جَدِيدَةٌ — the books are new.")}`]
        ], [["كُتُب","kutub","books"],["بُيُوت","buyūt","houses"],["أَوْلَاد","awlād","children"],["رِجَال","rijāl","men"],["مُدَرِّسَات","mudarrisāt","teachers (f)"]], [
          ["Plural of كتاب:", "كتب;kutub"],
          ["Plural of بيت:", "بيوت;buyut"],
          ["Female teachers:", "مدرسات;mudarrisat"],
          ["The books are new:", ["الكتب جديدة", "الكتب جديدون", "الكتب جديد"], 0]
        ]),
        U("ar18", "Comparatives and relative pronouns", "Morphology · afʿal · alladhī", [
          ["afʿal = more", `<p>Put the root into <b>a-ff-a-l</b>: k-b-r → <b>akbar</b> bigger; ṣ-gh-r → <b>aṣghar</b>; ḥ-s-n → <b>aḥsan</b> better. “than” = <b>min</b>; with al- = the most.</p>${A("القَاهِرَةُ أَكْبَرُ مِنَ الإِسْكَنْدَرِيَّة.", "al-qāhira akbar mina l-iskandariyya.", "Cairo is bigger than Alexandria.")}${A("الأَكْبَر", "al-akbar", "the biggest — as in Allāhu akbar")}`],
          ["who / which", `<p><b>الَّذِي</b> alladhī (m), <b>الَّتِي</b> allatī (f) — only after a definite noun.</p>${A("البِنْتُ الَّتِي تَدْرُسُ اليَابَانِيَّة", "al-bintu llatī tadrusu l-yābāniyya", "the girl who studies Japanese")}`]
        ], [["أَكْبَر","akbar","bigger"],["أَصْغَر","aṣghar","smaller"],["أَحْسَن","aḥsan","better"],["الَّذِي","alladhī","who/which (m)"],["الَّتِي","allatī","who/which (f)"]], [
          ["bigger:", "أكبر;akbar"],
          ["smaller (ṣ-gh-r):", "أصغر;asghar"],
          ["القاهرة أكبر ___ الإسكندرية (than)", "من;min"],
          ["the girl ___ studies (who, f):", "التي;allati"]
        ])
      ]}
    ]
  };
})();
