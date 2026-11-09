/* ==========================================================================
   JAPANESE COURSE — JLPT N5 following the lesson order of
   Minna no Nihongo Shokyū I (第1課〜第25課). Use it next to the book:
   each unit names the book lesson, summarises its grammar points with
   original example sentences, adds a short vocabulary set and exercises.
   Answers accept kana or rōmaji.
   ========================================================================== */
(function () {
  const J = (jp, en) => `<p class="xm"><span class="say-line jp" data-lang="ja">${jp}</span><i>${en}</i></p>`;
  const tip = (t) => `<p class="tip">${t}</p>`;
  const U = (n, title, points, v, ex) => ({ id: "ja" + n, title, ref: `みんなの日本語 第${n}課`, points, v, ex });

  const lessons = [
    U(1, "Introductions: は, です, の, も, か", [
      ["N1 は N2 です", `<p>は (read <b>wa</b>) marks the topic; です makes it polite. Negative: <b>じゃ ありません</b> (formal: では ありません). Question: add <b>か</b>.</p>${J("わたしは ヴラダです。", "I am Vlada.")}${J("わたしは せんせいじゃ ありません。", "I'm not a teacher.")}${J("あなたは がくせいですか。", "Are you a student?")}`],
      ["も and の", `<p><b>も</b> = also (replaces は). <b>N1 の N2</b> = N2 belonging to / of N1.</p>${J("マリアさんも がくせいです。", "Maria is a student too.")}${J("さくら だいがくの がくせいです。", "I'm a student at Sakura University.")}${tip("Never use さん about yourself.")}`]
    ], [["わたし","watashi","I"],["がくせい","gakusei","student"],["せんせい","sensei","teacher"],["かいしゃいん","kaishain","company employee"],["いしゃ","isha","doctor"],["だれ","dare","who"],["～さい","~sai","… years old"]], [
      ["わたし___ ヴラダです。", "は;wa"],
      ["I'm not a doctor: わたしは いしゃ ___。", "じゃありません;ではありません;じゃ ありません;では ありません;ja arimasen;dewa arimasen"],
      ["Are you a student? あなたは がくせいです___。", "か;ka"],
      ["I'm a student too: わたし___ がくせいです。", "も;mo"],
      ["A student of Sakura University: さくらだいがく___ がくせい", "の;no"]
    ]),
    U(2, "これ・それ・あれ and この N", [
      ["Three distances", `<p><b>これ</b> near me · <b>それ</b> near you · <b>あれ</b> far from both. Before a noun: <b>この / その / あの</b> N.</p>${J("これは なんですか。— じしょです。", "What is this? — It's a dictionary.")}${J("あの ひとは だれですか。", "Who is that person over there?")}`],
      ["そうです and ownership", `${J("それは あなたの かさですか。— はい、そうです。", "Is that your umbrella? — Yes, it is.")}${J("この かぎは わたしのです。", "This key is mine.")}`]
    ], [["ほん","hon","book"],["じしょ","jisho","dictionary"],["かさ","kasa","umbrella"],["かぎ","kagi","key"],["とけい","tokei","watch, clock"],["くるま","kuruma","car"]], [
      ["What is this (near me)? ___ は なんですか。", "これ;kore"],
      ["That book over there: ___ ほん", "あの;ano"],
      ["これは わたし___ かさです。", "の;no"],
      ["それは じしょですか。— はい、___。", ["そうです", "そうじゃ ありません", "どうですか"], 0]
    ]),
    U(3, "ここ・そこ・あそこ, どこ, いくら", [
      ["Places", `<p><b>ここ / そこ / あそこ / どこ</b> — here / there / over there / where. Polite versions: こちら / そちら / あちら / どちら.</p>${J("トイレは どこですか。— あそこです。", "Where is the toilet? — Over there.")}${J("うけつけは ２かいです。", "Reception is on the 2nd floor.")}`],
      ["Prices", `${J("この とけいは いくらですか。— ５０００えんです。", "How much is this watch? — 5,000 yen.")}`]
    ], [["きょうしつ","kyōshitsu","classroom"],["しょくどう","shokudō","canteen"],["うけつけ","uketsuke","reception"],["トイレ","toire","toilet"],["～かい","~kai","… floor"],["～えん","~en","… yen"]], [
      ["Where is the toilet? トイレは ___ ですか。", "どこ;doko"],
      ["The canteen is over there: しょくどうは ___ です。", "あそこ;asoko"],
      ["How much is this watch? この とけいは ___ ですか。", "いくら;ikura"],
      ["Reception is on the 2nd floor: うけつけは ２___ です。", "かい;kai;がい;gai"]
    ]),
    U(4, "Time and verbs: ます・ません・ました", [
      ["Polite verb tenses", `<p>V<b>ます</b> (do/will) · V<b>ません</b> (don't) · V<b>ました</b> (did) · V<b>ませんでした</b> (didn't).</p>${J("きのう べんきょうしました。", "I studied yesterday.")}`],
      ["Time に, から〜まで", `${J("６じに おきます。", "I get up at 6.")}${J("９じから ５じまで はたらきます。", "I work from 9 to 5.")}${tip("Relative times (きょう, あした, まいにち) take no に.")}`]
    ], [["おきます","okimasu","get up"],["ねます","nemasu","sleep"],["はたらきます","hatarakimasu","work"],["やすみます","yasumimasu","rest"],["べんきょうします","benkyō shimasu","study"],["おわります","owarimasu","finish"]], [
      ["I studied yesterday: きのう べんきょう___。", "しました;shimashita"],
      ["６じ___ おきます。", "に;ni"],
      ["９じ___ ５じまで はたらきます。", "から;kara"],
      ["I won't work tomorrow: あした はたらき___。", "ません;masen"],
      ["I didn't sleep: ねませんで___。", "した;shita"]
    ]),
    U(5, "Going and coming: へ, で, と", [
      ["Direction へ (read e)", `${J("きょうとへ いきます。", "I go to Kyoto.")}${J("うちへ かえります。", "I go home.")}`],
      ["Means で, company と, none どこも", `${J("でんしゃで いきます。", "I go by train.")}${J("ともだちと きました。", "I came with a friend.")}${J("どこ[へ]も いきませんでした。", "I didn't go anywhere.")}`]
    ], [["いきます","ikimasu","go"],["きます","kimasu","come"],["かえります","kaerimasu","return home"],["でんしゃ","densha","train"],["ひこうき","hikōki","plane"],["ともだち","tomodachi","friend"]], [
      ["きょうと___ いきます。(to)", "へ;e;に;ni"],
      ["でんしゃ___ いきます。(by)", "で;de"],
      ["ともだち___ きました。(with)", "と;to"],
      ["I went nowhere: どこ___ いきませんでした。", "も;へも;mo;emo"],
      ["When? ___ にほんへ きましたか。", "いつ;itsu"]
    ]),
    U(6, "Objects and invitations: を, で, 〜ませんか, 〜ましょう", [
      ["を (read o) and place of action で", `${J("ごはんを たべます。", "I eat rice / a meal.")}${J("としょかんで ほんを よみます。", "I read books at the library.")}`],
      ["Inviting", `${J("いっしょに えいがを みませんか。", "Won't you watch a film with me?")}${J("ええ、みましょう。", "Yes, let's watch it.")}`]
    ], [["たべます","tabemasu","eat"],["のみます","nomimasu","drink"],["よみます","yomimasu","read"],["みます","mimasu","see, watch"],["かいます","kaimasu","buy"],["いっしょに","issho ni","together"]], [
      ["ごはん___ たべます。", "を;o;wo"],
      ["としょかん___ ほんを よみます。", "で;de"],
      ["Won't you…? いっしょに えいがを みま___か。", "せん;sen"],
      ["Let's go! いきま___。", "しょう;shou;shō"]
    ]),
    U(7, "Tools, giving and receiving, もう", [
      ["Tool で, language で", `${J("はしで たべます。", "I eat with chopsticks.")}${J("「Gracias」は にほんごで なんですか。", "How do you say “gracias” in Japanese?")}`],
      ["あげます / もらいます, もう / まだ", `${J("ははに はなを あげました。", "I gave my mother flowers.")}${J("ともだちに ほんを もらいました。", "I received a book from a friend.")}${J("もう たべましたか。— いいえ、まだです。", "Have you eaten yet? — No, not yet.")}`]
    ], [["きります","kirimasu","cut"],["おくります","okurimasu","send"],["あげます","agemasu","give"],["もらいます","moraimasu","receive"],["かします","kashimasu","lend"],["かります","karimasu","borrow"]], [
      ["はし___ たべます。", "で;de"],
      ["Thank you は にほんご___ なんですか。", "で;de"],
      ["ははに はな___ あげました。", "を;o;wo"],
      ["ともだち___ ほんを もらいました。(from)", "に;から;ni;kara"],
      ["Not yet: いいえ、___ です。", "まだ;mada"]
    ]),
    U(8, "Adjectives: い and な", [
      ["Two families", `<p><b>い-adjectives</b>: おおきい → negative おおき<b>くない</b>です. <b>な-adjectives</b>: しずか(な) → しずか<b>じゃ ありません</b>. Before a noun: おおきい まち · しずか<b>な</b> まち.</p>${J("この ほんは おもしろくないです。", "This book isn't interesting.")}${tip("いい (good) is irregular: よくないです.")}`],
      ["とても, あまり, が (but)", `${J("にほんごは むずかしいですが、おもしろいです。", "Japanese is difficult but interesting.")}${J("あまり さむくないです。", "It isn't very cold.")}`]
    ], [["おおきい","ōkii","big"],["ちいさい","chiisai","small"],["あたらしい","atarashii","new"],["たかい","takai","expensive, tall"],["しずか(な)","shizuka","quiet"],["きれい(な)","kirei","pretty, clean"]], [
      ["Not interesting: おもしろ___ です。", "くない;kunai"],
      ["A quiet town: しずか___ まち", "な;na"],
      ["Very: ふじさんは ___ たかいです。", "とても;totemo"],
      ["…difficult, but interesting: むずかしいです___、おもしろいです。", "が;ga"],
      ["Not good: よ___ です。", "くない;kunai"]
    ]),
    U(9, "Likes, skills, reasons: が, から, どうして", [
      ["が with すき, じょうず, わかります, あります", `${J("わたしは おんがくが すきです。", "I like music.")}${J("かんじが ぜんぜん わかりません。", "I don't understand kanji at all.")}`],
      ["Reasons", `${J("じかんが ありませんから、いきません。", "I have no time, so I won't go.")}${J("どうして いきませんか。", "Why aren't you going?")}`]
    ], [["すき(な)","suki","liked"],["きらい(な)","kirai","disliked"],["じょうず(な)","jōzu","good at"],["へた(な)","heta","bad at"],["わかります","wakarimasu","understand"],["じかん","jikan","time"]], [
      ["わたしは おんがく___ すきです。", "が;ga"],
      ["Not at all: かんじが ___ わかりません。", "ぜんぜん;zenzen"],
      ["Because: じかんが ありません___、いきません。", "から;kara"],
      ["Why: ___ いきませんか。", "どうして;doushite;dōshite"]
    ]),
    U(10, "あります / います and positions", [
      ["Existence", `<p><b>あります</b> for things and plants, <b>います</b> for people and animals.</p>${J("こうえんに こどもが います。", "There are children in the park.")}${J("ねこは いすの したに います。", "The cat is under the chair.")}`],
      ["Position words, や〜など", `<p>うえ · した · まえ · うしろ · なか · そと · となり · ちかく · あいだ.</p>${J("つくえの うえに ほんや ノートなどが あります。", "On the desk there are books, notebooks and so on.")}`]
    ], [["うえ","ue","above"],["した","shita","below"],["まえ","mae","in front"],["うしろ","ushiro","behind"],["となり","tonari","next to"],["なか","naka","inside"]], [
      ["こうえんに こども___ います。", "が;ga"],
      ["つくえの うえ___ ほんが あります。", "に;ni"],
      ["There is a cat: ねこが ___。", ["あります", "います"], 1],
      ["The bank is next to the station: ぎんこうは えきの ___ です。", "となり;tonari"]
    ]),
    U(11, "Counters", [
      ["Counting things", `<p>ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお. People: <b>ひとり, ふたり</b>, さんにん… Flat things <b>～まい</b>, machines <b>～だい</b>, books <b>～さつ</b>, times <b>～かい</b>.</p>${J("りんごを みっつ かいました。", "I bought three apples.")}${tip("The number goes <b>after</b> the particle, right before the verb.")}`],
      ["Frequency, だけ", `${J("１しゅうかんに ２かい およぎます。", "I swim twice a week.")}${J("ひとりだけ きました。", "Only one person came.")}`]
    ], [["きって","kitte","stamp"],["ふうとう","fūtō","envelope"],["りんご","ringo","apple"],["～まい","~mai","flat things"],["～だい","~dai","machines"],["～さつ","~satsu","books"]], [
      ["Three things: りんごを ___ かいました。", "みっつ;mittsu"],
      ["Two people: こどもが ___ います。", "ふたり;futari"],
      ["Five stamps: きってを ５___ ください。", "まい;mai"],
      ["Twice a week: １しゅうかん___ ２かい", "に;ni"]
    ]),
    U(12, "Past adjectives and comparisons", [
      ["Past", `<p>い-adj: たか<b>かった</b>です / たか<b>くなかった</b>です. な-adj and nouns: ひま<b>でした</b> / あめ<b>でした</b>.</p>${J("きのうは さむかったです。", "Yesterday was cold.")}`],
      ["より, どちら, いちばん", `${J("とうきょうは おおさかより おおきいです。", "Tokyo is bigger than Osaka.")}${J("きせつで いつが いちばん すきですか。", "Which season do you like best?")}`]
    ], [["あつい","atsui","hot"],["さむい","samui","cold"],["すずしい","suzushii","cool"],["はやい","hayai","fast, early"],["きせつ","kisetsu","season"],["いちばん","ichiban","the most"]], [
      ["Was cold: きのうは さむ___ です。", "かった;katta"],
      ["It rained (was rain): きのうは あめ___。", "でした;deshita"],
      ["Bigger than Osaka: おおさか___ おおきい", "より;yori"],
      ["Among seasons: きせつ___ いつが いちばん すきですか。", "で;de"]
    ]),
    U(13, "Wants: ほしい, 〜たい, purpose に", [
      ["Wanting things and actions", `${J("あたらしい くるまが ほしいです。", "I want a new car.")}${J("すしを たべたいです。", "I want to eat sushi.")}`],
      ["Going somewhere to do", `${J("デパートへ くつを かいに いきます。", "I'm going to the department store to buy shoes.")}${J("なにか のみたいです。", "I want to drink something.")}`]
    ], [["ほしい","hoshii","want (thing)"],["あそびます","asobimasu","play"],["およぎます","oyogimasu","swim"],["むかえます","mukaemasu","pick up, meet"],["つかれます","tsukaremasu","get tired"],["けっこんします","kekkon shimasu","marry"]], [
      ["あたらしい くるま___ ほしいです。", "が;ga"],
      ["Want to eat: すしを たべ___ です。", "たい;tai"],
      ["To buy: くつを かい___ いきます。", "に;ni"],
      ["Something: なに___ のみたいです。", "か;ka"]
    ]),
    U(14, "The て-form: 〜てください, 〜ています", [
      ["Making the て-form", `<p>Group 2 (る-verbs): たべ<b>て</b>. する → して, くる → きて. Group 1 — sing it: <b>う・つ・る → って</b>, <b>む・ぶ・ぬ → んで</b>, <b>く → いて</b>, <b>ぐ → いで</b>, <b>す → して</b>. Exception: いく → <b>いって</b>.</p>`],
      ["Using it", `${J("ちょっと まって ください。", "Please wait a moment.")}${J("いま あめが ふって います。", "It's raining now.")}${J("てつだいましょうか。", "Shall I help you?")}`]
    ], [["つけます","tsukemasu","turn on"],["けします","keshimasu","turn off"],["あけます","akemasu","open"],["しめます","shimemasu","close"],["まちます","machimasu","wait"],["てつだいます","tetsudaimasu","help"]], [
      ["Please wait: ちょっと まって ___。", "ください;kudasai"],
      ["かきます → て-form", "かいて;kaite"],
      ["のみます → て-form", "のんで;nonde"],
      ["いきます → て-form", "いって;itte"],
      ["It is raining: あめが ふって ___。", "います;imasu"]
    ]),
    U(15, "Permission, prohibition, states", [
      ["〜ても いいですか / 〜ては いけません", `${J("しゃしんを とっても いいですか。", "May I take a photo?")}${J("ここで たばこを すっては いけません。", "You must not smoke here.")}`],
      ["〜ています for states", `${J("おおさかに すんで います。", "I live in Osaka.")}${J("たなかさんを しって いますか。— いいえ、しりません。", "Do you know Mr Tanaka? — No, I don't.")}${tip("The negative of しって います is <b>しりません</b>.")}`]
    ], [["すみます","sumimasu","live"],["しります","shirimasu","get to know"],["おきます","okimasu","put"],["つくります","tsukurimasu","make"],["うります","urimasu","sell"],["しりょう","shiryō","materials"]], [
      ["May I…? しゃしんを とって___ いいですか。", "も;mo"],
      ["Must not: すって___ いけません。", "は;wa"],
      ["I live in Osaka: おおさかに すんで ___。", "います;imasu"],
      ["Do you know him? — No:", ["しりません", "しって いません", "しりませんでした"], 0]
    ]),
    U(16, "Linking actions and adjectives", [
      ["〜て、〜て and 〜てから", `${J("あさ おきて、シャワーを あびて、かいしゃへ いきます。", "In the morning I get up, shower and go to work.")}${J("ばんごはんを たべてから、べんきょうします。", "After dinner, I study.")}`],
      ["Linking adjectives; N は N が adj", `<p>い-adj: ひろ<b>くて</b> · な-adj / noun: しんせつ<b>で</b>.</p>${J("この へやは ひろくて、あかるいです。", "This room is spacious and bright.")}${J("マリアさんは めが おおきいです。", "Maria has big eyes.")}`]
    ], [["のります","norimasu","ride"],["おります","orimasu","get off"],["あびます","abimasu","shower"],["わかい","wakai","young"],["ながい","nagai","long"],["あかるい","akarui","bright"]], [
      ["After showering: シャワーを あび___から、ねます。", "て;te"],
      ["Spacious and bright: ひろ___、あかるいです。", "くて;kute"],
      ["Handsome and kind: ハンサム___、しんせつです。", "で;de"],
      ["Has big eyes: マリアさんは め___ おおきいです。", "が;ga"]
    ]),
    U(17, "The ない-form", [
      ["Making it", `<p>Group 1: change the last sound of the ます-stem from <b>i</b> to <b>a</b>: かき → か<b>か</b>ない, のみ → の<b>ま</b>ない; い → <b>わ</b>: かい → か<b>わ</b>ない. Group 2: たべない. する → しない, くる → こない.</p>`],
      ["Three uses", `${J("しんぱいしないで ください。", "Please don't worry.")}${J("くすりを のまなければ なりません。", "I must take medicine.")}${J("あした こなくても いいです。", "You don't have to come tomorrow.")}`]
    ], [["わすれます","wasuremasu","forget"],["なくします","nakushimasu","lose"],["はらいます","haraimasu","pay"],["かえします","kaeshimasu","give back"],["でかけます","dekakemasu","go out"],["しんぱいします","shinpai shimasu","worry"]], [
      ["いきます → ない-form", "いかない;ikanai"],
      ["かいます → ない-form", "かわない;kawanai"],
      ["Don't worry: しんぱいし___ ください。", "ないで;naide"],
      ["Must drink: くすりを のま___ なりません。", "なければ;nakereba"],
      ["Don't have to come: こ___ いいです。", "なくても;nakutemo"]
    ]),
    U(18, "Dictionary form: ことが できます, まえに", [
      ["Dictionary form", `<p>Group 1: ます-stem <b>i → u</b>: かき → かく, のみ → のむ. Group 2: たべる. する, くる.</p>`],
      ["Using it", `${J("わたしは ピアノを ひくことが できます。", "I can play the piano.")}${J("しゅみは しゃしんを とることです。", "My hobby is taking photos.")}${J("ねる まえに、はを みがきます。", "Before sleeping I brush my teeth.")}`]
    ], [["できます","dekimasu","can"],["あらいます","araimasu","wash"],["ひきます","hikimasu","play (instrument)"],["うたいます","utaimasu","sing"],["あつめます","atsumemasu","collect"],["しゅみ","shumi","hobby"]], [
      ["かきます → dictionary form", "かく;kaku"],
      ["I can play: ピアノを ひく___が できます。", "こと;koto"],
      ["My hobby is taking photos: しゃしんを とる___ です。", "こと;koto"],
      ["Before sleeping: ねる___に", "まえ;mae"]
    ]),
    U(19, "た-form: experience, lists, change", [
      ["Making it", `<p>Exactly like the て-form, with <b>た / だ</b>: かいて → かいた, のんで → のんだ, いって → いった.</p>`],
      ["Using it", `${J("ふじさんに のぼったことが あります。", "I have climbed Mt Fuji.")}${J("にちようびは テニスを したり、えいがを みたり します。", "On Sundays I play tennis, watch films and so on.")}${J("さむく なりました。せんせいに なりたいです。", "It's got cold. I want to become a teacher.")}`]
    ], [["のぼります","noborimasu","climb"],["とまります","tomarimasu","stay at"],["そうじします","sōji shimasu","clean"],["せんたくします","sentaku shimasu","do laundry"],["なります","narimasu","become"],["ねむい","nemui","sleepy"]], [
      ["いきます → た-form", "いった;itta"],
      ["I have climbed: のぼった___が あります。", "こと;koto"],
      ["Tennis, films…: テニスを したり、えいがを み___ します。", "たり;tari"],
      ["It became cold: さむ___ なりました。", "く;ku"],
      ["Become a teacher: せんせい___ なりたいです。", "に;ni"]
    ]),
    U(20, "Plain (casual) style", [
      ["Polite → plain", `<p>いきます → いく · いきません → いかない · いきました → いった · がくせいです → がくせい<b>だ</b> · たかいです → たかい. Questions drop か and rise in tone; “yes / no” become うん / ううん.</p>${J("あした ひま？— うん、ひまだよ。", "Free tomorrow? — Yeah, I'm free.")}${tip("Use plain style with friends and family; polite style with teachers and strangers.")}`]
    ], [["うん","un","yeah"],["ううん","uun","nope"],["ひま","hima","free time"],["ことば","kotoba","word"],["きもの","kimono","kimono"],["ビザ","biza","visa"]], [
      ["いきません → plain", "いかない;ikanai"],
      ["がくせいです → plain", "がくせいだ;gakuseida;gakusei da"],
      ["たべました → plain", "たべた;tabeta"],
      ["たかかったです → plain", "たかかった;takakatta"]
    ]),
    U(21, "Opinions and quotes: と おもいます, と いいました", [
      ["Plain form + と", `${J("あしたは あめが ふると おもいます。", "I think it will rain tomorrow.")}${J("ミラーさんは「いってきます」と いいました。", "Mr Miller said “I'm off.”")}${J("たかいでしょう？", "It's expensive, isn't it?")}`]
    ], [["おもいます","omoimasu","think"],["いいます","iimasu","say"],["かちます","kachimasu","win"],["まけます","makemasu","lose (game)"],["しあい","shiai","match"],["いけん","iken","opinion"]], [
      ["I think it will rain: あめが ふる___ おもいます。", "と;to"],
      ["He said: 「いってきます」と ___。", "いいました;iimashita"],
      ["…isn't it? ちょっと たかい___？", "でしょう;deshou;deshō"],
      ["I think Tanaka isn't coming:", ["たなかさんは こないと おもいます", "たなかさんは こないだと おもいます", "たなかさんは こなくて おもいます"], 0]
    ]),
    U(22, "Describing nouns with clauses", [
      ["The clause comes before the noun", `<p>Plain-form clause + noun. Inside the clause the subject takes <b>が</b> (or の).</p>${J("これは わたしが とった しゃしんです。", "This is a photo I took.")}${J("めがねを かけて いる ひとは だれですか。", "Who is the person wearing glasses?")}`]
    ], [["きます","kimasu","wear (shirt)"],["はきます","hakimasu","wear (shoes)"],["かぶります","kaburimasu","wear (hat)"],["かけます","kakemasu","wear (glasses)"],["うまれます","umaremasu","be born"],["やくそく","yakusoku","promise"]], [
      ["A photo I took: わたし___ とった しゃしん", "が;の;ga;no"],
      ["The person wearing glasses: めがねを かけて いる ___", "ひと;hito"],
      ["The cake I made:", ["わたしが つくった ケーキ", "ケーキ わたしが つくった", "わたしを つくった ケーキ"], 0],
      ["The town where I was born: わたしが うまれた ___ (town)", "まち;machi"]
    ]),
    U(23, "とき and と (automatic result)", [
      ["〜とき", `${J("みちが わからない とき、おまわりさんに ききます。", "When I don't know the way, I ask a police officer.")}${J("こどもの とき、よく あそびました。", "As a child I played a lot.")}`],
      ["〜と = whenever / if (always happens)", `${J("この ボタンを おすと、おつりが でます。", "When you press this button, the change comes out.")}`]
    ], [["ききます","kikimasu","ask"],["まわします","mawashimasu","turn"],["ひきます","hikimasu","pull"],["さわります","sawarimasu","touch"],["でます","demasu","come out"],["おつり","otsuri","change (money)"]], [
      ["When I don't know: わからない ___、ききます。", "とき;toki"],
      ["Press and it comes out: おす___、おつりが でます。", "と;to"],
      ["As a child: こども___ とき", "の;no"]
    ]),
    U(24, "くれます and doing favours", [
      ["Who gives to whom", `<p><b>あげます</b> — I/we give out. <b>くれます</b> — someone gives <b>to me</b>. <b>もらいます</b> — I receive. With て-form they describe favours.</p>${J("ははが セーターを くれました。", "My mother gave me a sweater.")}${J("ともだちが かさを かして くれました。", "A friend lent me an umbrella.")}${J("おばあさんの にもつを もって あげました。", "I carried the old lady's bags for her.")}`]
    ], [["くれます","kuremasu","give (to me)"],["つれて いきます","tsurete ikimasu","take (a person)"],["おくります","okurimasu","see off"],["しょうかいします","shōkai shimasu","introduce"],["あんないします","annai shimasu","show around"],["じゅんび","junbi","preparation"]], [
      ["Mother gave me: ははが セーターを ___。", "くれました;kuremashita"],
      ["A friend lent me: かさを かして ___。", "くれました;kuremashita"],
      ["I had a friend carry it: ともだちに もって ___。", "もらいました;moraimashita"],
      ["I carried it for her: にもつを もって ___。", "あげました;agemashita"]
    ]),
    U(25, "Conditions: 〜たら and 〜ても", [
      ["〜たら = if / when", `<p>た-form + ら.</p>${J("あめが ふったら、いきません。", "If it rains, I won't go.")}${J("えきに ついたら、でんわして ください。", "When you arrive at the station, please call me.")}`],
      ["〜ても = even if", `${J("あめが ふっても、いきます。", "Even if it rains, I'll go.")}${J("いくら かんがえても、わかりません。", "However much I think, I don't understand.")}`]
    ], [["かんがえます","kangaemasu","think about"],["つきます","tsukimasu","arrive"],["たります","tarimasu","be enough"],["いなか","inaka","countryside"],["もし","moshi","if"],["いくら","ikura","however much"]], [
      ["If it rains: あめが ふっ___、いきません。", "たら;tara"],
      ["When you arrive: えきに つい___、でんわして ください。", "たら;tara"],
      ["Even if it rains: ふっ___、いきます。", "ても;temo"],
      ["If I had 100 million yen: もし １おくえん あっ___…", "たら;tara"]
    ])
  ];

  window.COURSE_JA = {
    key: "ja", lang: "ja", name: "みんなの日本語 · N5",
    source: "Follows the lesson order of Minna no Nihongo Shokyū I (lessons 1–25 ≈ JLPT N5). Study the book’s dialogue and vocabulary first, then use this page to review and test yourself.",
    groups: [
      { label: "第1–5課", lessons: lessons.slice(0, 5) },
      { label: "第6–10課", lessons: lessons.slice(5, 10) },
      { label: "第11–15課", lessons: lessons.slice(10, 15) },
      { label: "第16–20課", lessons: lessons.slice(15, 20) },
      { label: "第21–25課", lessons: lessons.slice(20, 25) }
    ]
  };
})();
