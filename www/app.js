/* ===================================
   الغربال — The Sieve
   app.js — Complete Application Logic (Enhanced)
   =================================== */

(function () {
  'use strict';

  /* ========== TRANSLATIONS ========== */
  const T = {
    ar: {
      appTitle: 'الغربال',
      homeTitle: 'مرحبا بك في الغربال',
      homeSubtitle: 'غربلة ما علق بالإسلام مما ليس منه',
      counterLabel: 'خرافة تم غربلتها',
      dailyLabel: 'خرافة اليوم',
      newMyth: 'خرافة جديدة',
      navSieve: 'الغربال',
      navSieveDesc: 'ما ليس من الإسلام',
      navTruth: 'الحقيقة',
      navTruthDesc: 'ما هو الإسلام فعلا',
      navWomen: 'حقوق المرأة',
      navWomenDesc: 'المرأة في الإسلام الحقيقي',
      navQuiz: 'اختبر نفسك',
      navQuizDesc: 'هل هذا من الإسلام؟',
      navAbout: 'عن الكتاب',
      navAboutDesc: 'المؤلف والمصادر',
      introText: 'هذا التطبيق مستوحى من كتاب "ليس من الإسلام" للشيخ محمد الغزالي رحمه الله. يهدف إلى توضيح الفرق بين الإسلام الحقيقي والممارسات التي أُلصقت به زورا عبر القرون. الشيخ الغزالي كان من أبرز علماء الإسلام في القرن العشرين، عُرف بشجاعته في مواجهة الخرافات والبدع.',
      searchPlaceholder: 'ابحث في الخرافات...',
      sieveTitle: '\u26D4 الغربال: ما ليس من الإسلام',
      sieveSubtitle: 'ممارسات ظنها الناس إسلامية وهي ليست كذلك',
      filterAll: 'الكل',
      filterCreed: 'عقيدة',
      filterWorship: 'عبادة',
      filterCustoms: 'عادات',
      truthTitle: '\u2705 الحقيقة: ما هو الإسلام فعلا',
      truthSubtitle: 'أهداف الشريعة ورسالة الإسلام الحقيقية',
      womenTitle: '\uD83D\uDC69\u200D\uD83C\uDF93 حقوق المرأة في الإسلام',
      womenSubtitle: 'ما كان يدافع عنه الشيخ الغزالي بقوة',
      quizTitle: '\uD83D\uDD0D اختبر نفسك',
      quizSubtitle: 'هل هذا من الإسلام حقا؟',
      quizScore: 'النتيجة:',
      quizReset: 'إعادة',
      quizTrue: '\u2705 نعم، من الإسلام',
      quizFalse: '\u274C لا، ليس من الإسلام',
      quizNext: 'السؤال التالي',
      quizProgress: 'السؤال {current} من {total}',
      aboutTitle: '\uD83D\uDCD6 عن الكتاب',
      aboutBookTitle: 'ليس من الإسلام',
      aboutBookDesc: 'كتاب ألّفه الشيخ محمد الغزالي رحمه الله، يتناول فيه الممارسات والعادات التي أُلصقت بالإسلام زورا. يتكون من ستة فصول: الثلاثة الأولى تؤسس لما هو الإسلام فعلا (أهداف الشريعة، مفهوم البدعة، الفكر الإسلامي)، والثلاثة الأخيرة تكشف ما أُضيف إليه زورا (بدع في العقيدة، بدع في العبادة، بدع في العادات).',
      aboutAuthorTitle: 'الشيخ محمد الغزالي (1917-1996)',
      aboutAuthorDesc: 'عالم ومفكر إسلامي مصري من أبرز علماء القرن العشرين. وُلد في محافظة البحيرة بمصر. درس في الأزهر الشريف وتتلمذ على يد الإمام حسن البنا. اشتهر بشجاعته في نقد الخرافات والتقاليد التي لا أصل لها في الإسلام. ألّف أكثر من ستين كتابا. عمل أستاذا في جامعات عديدة وكان صوتا قويا للإصلاح والتجديد في الفكر الإسلامي. توفي رحمه الله في المملكة العربية السعودية ودُفن في البقيع بالمدينة المنورة.',
      aboutChaptersTitle: 'فصول الكتاب',
      ch1: 'أهداف الشريعة الإسلامية',
      ch2: 'مفهوم البدعة في الإسلام',
      ch3: 'الفكر الإسلامي ومنهجه',
      ch4: 'بدع في العقيدة',
      ch5: 'بدع في العبادة',
      ch6: 'بدع في العادات والتقاليد',
      disclaimerTitle: 'تنبيه مهم',
      disclaimerText: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      helpTitle: 'مساعدة',
      helpDisclaimerTitle: 'تنبيه',
      helpDisclaimerText: 'لستُ عالما في الشريعة. هذا جهد متواضع من أب/أم مسلم(ة). المحتوى مستمد من كتاب "ليس من الإسلام" للشيخ محمد الغزالي ومن مصادر إسلامية موثوقة. هذا ليس فتوى. للأسئلة الشرعية المعمقة، يُرجى مراجعة أهل العلم.',
      helpSourcesTitle: 'المصادر',
      helpSource1: 'كتاب "ليس من الإسلام" — الشيخ محمد الغزالي',
      helpSource2: 'القرآن الكريم والسنة النبوية الصحيحة',
      helpSource3: 'كتب العلماء المعتمدين في الفقه والعقيدة',
      helpContribTitle: 'المساهمة',
      helpContribText: 'هذا مشروع مفتوح. إذا وجدت خطأ أو أردت الإضافة، تواصل معنا عبر workshop-diy.org',
      duaTitle: 'دعاء',
      duaTranslation: 'اللهم اجعلنا نرى الحق حقا ونتبعه، والباطل باطلا ونبتعد عنه',
      tabHome: 'الرئيسية',
      tabSieve: 'الغربال',
      tabTruth: 'الحقيقة',
      tabWomen: 'المرأة',
      tabQuiz: 'اختبر',
      tabAbout: 'الكتاب',
      sacredTranslation: 'رهبانية اخترعوها من عندهم ولم يفرضها الله عليهم',
      toastCorrect: 'إجابة صحيحة!',
      toastWrong: 'إجابة خاطئة!',
      toastQuizReset: 'تمت إعادة الاختبار',
      toastCopied: 'تم النسخ!',
      whyLabel: 'لماذا يظنها الناس إسلامية؟',
      evidenceLabel: 'ماذا يقول الشيخ الغزالي؟',
      alternativeLabel: 'البديل الصحيح',
      shareLabel: 'شارك',
    },
    en: {
      appTitle: 'The Sieve',
      homeTitle: 'Welcome to The Sieve',
      homeSubtitle: 'Sifting out what was falsely attached to Islam',
      counterLabel: 'myths busted',
      dailyLabel: "Today\'s Myth-Bust",
      newMyth: 'New Myth',
      navSieve: 'The Sieve',
      navSieveDesc: 'What is NOT from Islam',
      navTruth: 'The Truth',
      navTruthDesc: 'What Islam actually IS',
      navWomen: "Women's Rights",
      navWomenDesc: 'Women in authentic Islam',
      navQuiz: 'Test Yourself',
      navQuizDesc: 'Is this really Islamic?',
      navAbout: 'About the Book',
      navAboutDesc: 'Author and sources',
      introText: 'This app is inspired by the book "This is Not Islam" by Sheikh Mohammed al-Ghazali (may Allah have mercy on him). It aims to clarify the difference between authentic Islam and the practices falsely attributed to it over the centuries. Sheikh al-Ghazali was one of the most prominent Islamic scholars of the 20th century, known for his courage in confronting superstitions and innovations.',
      searchPlaceholder: 'Search myths...',
      sieveTitle: '\u26D4 The Sieve: What is NOT from Islam',
      sieveSubtitle: 'Practices people mistakenly think are Islamic',
      filterAll: 'All',
      filterCreed: 'Creed',
      filterWorship: 'Worship',
      filterCustoms: 'Customs',
      truthTitle: '\u2705 The Truth: What Islam Actually IS',
      truthSubtitle: "Shari'a goals and Islam's true message",
      womenTitle: "\uD83D\uDC69\u200D\uD83C\uDF93 Women's Rights in Islam",
      womenSubtitle: 'What Sheikh al-Ghazali passionately defended',
      quizTitle: '\uD83D\uDD0D Test Yourself',
      quizSubtitle: 'Is this really from Islam?',
      quizScore: 'Score:',
      quizReset: 'Reset',
      quizTrue: '\u2705 Yes, from Islam',
      quizFalse: '\u274C No, not from Islam',
      quizNext: 'Next Question',
      quizProgress: 'Question {current} of {total}',
      aboutTitle: '\uD83D\uDCD6 About the Book',
      aboutBookTitle: 'This is Not Islam',
      aboutBookDesc: 'A book by Sheikh Mohammed al-Ghazali examining practices and customs falsely attributed to Islam. It has six chapters: the first three establish what Islam truly is (goals of Shari\'a, the concept of bid\'a/innovation, Islamic thought), and the last three expose what was falsely added (innovations in creed, worship, and customs).',
      aboutAuthorTitle: 'Sheikh Mohammed al-Ghazali (1917-1996)',
      aboutAuthorDesc: 'An Egyptian Islamic scholar and thinker, one of the most prominent of the 20th century. Born in Beheira, Egypt, he studied at Al-Azhar University. He was known for his courage in criticizing superstitions and traditions with no Islamic basis. He authored over sixty books and was a powerful voice for reform and renewal in Islamic thought. He passed away in Saudi Arabia and was buried in Al-Baqi cemetery in Medina.',
      aboutChaptersTitle: 'Book Chapters',
      ch1: "Goals of Islamic Shari'a",
      ch2: "The Concept of Bid'a (Innovation) in Islam",
      ch3: 'Islamic Thought and Its Methodology',
      ch4: 'Innovations in Creed',
      ch5: 'Innovations in Worship',
      ch6: 'Innovations in Customs and Traditions',
      disclaimerTitle: 'Important Notice',
      disclaimerText: 'I am not a scholar. This is a humble effort by a Muslim parent. Content is drawn from the book and trusted Islamic sources. This is not a fatwa. For in-depth jurisprudential questions, please consult qualified scholars.',
      helpTitle: 'Help',
      helpDisclaimerTitle: 'Disclaimer',
      helpDisclaimerText: 'I am not a scholar. This is a humble effort by a Muslim parent. Content is drawn from "This is Not Islam" by Sheikh Mohammed al-Ghazali and trusted Islamic sources. This is not a fatwa. For in-depth jurisprudential questions, please consult qualified scholars.',
      helpSourcesTitle: 'Sources',
      helpSource1: '"This is Not Islam" — Sheikh Mohammed al-Ghazali',
      helpSource2: 'The Holy Quran and authentic Prophetic Sunnah',
      helpSource3: 'Books of recognized scholars in jurisprudence and creed',
      helpContribTitle: 'Contributing',
      helpContribText: 'This is an open project. If you find an error or want to contribute, reach out via workshop-diy.org',
      duaTitle: 'Supplication (Dua)',
      duaTranslation: 'O Allah, show us truth as truth and help us follow it, and show us falsehood as falsehood and help us avoid it',
      tabHome: 'Home',
      tabSieve: 'Sieve',
      tabTruth: 'Truth',
      tabWomen: 'Women',
      tabQuiz: 'Quiz',
      tabAbout: 'Book',
      sacredTranslation: 'monasticism they invented — We did not prescribe it for them',
      toastCorrect: 'Correct answer!',
      toastWrong: 'Wrong answer!',
      toastQuizReset: 'Quiz has been reset',
      toastCopied: 'Copied!',
      whyLabel: 'Why do people think it is Islamic?',
      evidenceLabel: 'What does Sheikh al-Ghazali say?',
      alternativeLabel: 'The authentic alternative',
      shareLabel: 'Share',
    },
    fr: {
      appTitle: 'Le Tamis',
      homeTitle: 'Bienvenue dans Le Tamis',
      homeSubtitle: "Tamiser ce qui a ete faussement attribue a l'Islam",
      counterLabel: 'mythes demystifies',
      dailyLabel: 'Mythe du jour',
      newMyth: 'Nouveau mythe',
      navSieve: 'Le Tamis',
      navSieveDesc: "Ce qui n'est PAS de l'Islam",
      navTruth: 'La Verite',
      navTruthDesc: "Ce qu'est vraiment l'Islam",
      navWomen: 'Droits des femmes',
      navWomenDesc: "Les femmes dans l'Islam authentique",
      navQuiz: 'Testez-vous',
      navQuizDesc: "Est-ce vraiment islamique ?",
      navAbout: 'A propos du livre',
      navAboutDesc: "L'auteur et les sources",
      introText: "Cette application s'inspire du livre \"Ceci n'est pas l'Islam\" du Cheikh Mohammed al-Ghazali (qu'Allah lui fasse misericorde). Elle vise a clarifier la difference entre l'Islam authentique et les pratiques qui lui ont ete faussement attribuees au fil des siecles. Le Cheikh al-Ghazali fut l'un des plus eminents savants de l'Islam au XXe siecle, connu pour son courage face aux superstitions et aux innovations.",
      searchPlaceholder: 'Rechercher les mythes...',
      sieveTitle: "\u26D4 Le Tamis : Ce qui n'est PAS de l'Islam",
      sieveSubtitle: 'Des pratiques que les gens croient a tort islamiques',
      filterAll: 'Tout',
      filterCreed: 'Croyance',
      filterWorship: 'Culte',
      filterCustoms: 'Coutumes',
      truthTitle: "\u2705 La Verite : Ce qu'est vraiment l'Islam",
      truthSubtitle: "Les objectifs de la Charia et le vrai message de l'Islam",
      womenTitle: "\uD83D\uDC69\u200D\uD83C\uDF93 Droits des femmes en Islam",
      womenSubtitle: 'Ce que le Cheikh al-Ghazali defendait passionnement',
      quizTitle: '\uD83D\uDD0D Testez-vous',
      quizSubtitle: "Est-ce vraiment de l'Islam ?",
      quizScore: 'Score :',
      quizReset: 'Reinitialiser',
      quizTrue: "\u2705 Oui, c'est de l'Islam",
      quizFalse: "\u274C Non, ce n'est pas de l'Islam",
      quizNext: 'Question suivante',
      quizProgress: 'Question {current} sur {total}',
      aboutTitle: '\uD83D\uDCD6 A propos du livre',
      aboutBookTitle: "Ceci n'est pas l'Islam",
      aboutBookDesc: "Un livre du Cheikh Mohammed al-Ghazali examinant les pratiques et coutumes faussement attribuees a l'Islam. Il comporte six chapitres : les trois premiers etablissent ce qu'est vraiment l'Islam (objectifs de la Charia, concept de bid'a/innovation, pensee islamique), et les trois derniers revelent ce qui a ete faussement ajoute (innovations dans la croyance, le culte et les coutumes).",
      aboutAuthorTitle: 'Cheikh Mohammed al-Ghazali (1917-1996)',
      aboutAuthorDesc: "Un savant et penseur islamique egyptien, l'un des plus eminents du XXe siecle. Ne a Beheira, en Egypte, il a etudie a l'Universite d'Al-Azhar. Il etait connu pour son courage a critiquer les superstitions et les traditions sans fondement islamique. Il a ecrit plus de soixante livres et fut une voix puissante pour la reforme et le renouveau de la pensee islamique. Il est decede en Arabie Saoudite et a ete enterre au cimetiere d'Al-Baqi a Medine.",
      aboutChaptersTitle: 'Chapitres du livre',
      ch1: 'Objectifs de la Charia islamique',
      ch2: "Le concept de Bid'a (innovation) en Islam",
      ch3: 'La pensee islamique et sa methodologie',
      ch4: 'Innovations dans la croyance',
      ch5: 'Innovations dans le culte',
      ch6: 'Innovations dans les coutumes et traditions',
      disclaimerTitle: 'Avis important',
      disclaimerText: "Je ne suis pas un savant. C'est un humble effort d\'un parent musulman. Le contenu est tire du livre et de sources islamiques fiables. Ce n'est pas une fatwa. Pour les questions de jurisprudence approfondies, veuillez consulter des savants qualifies.",
      helpTitle: 'Aide',
      helpDisclaimerTitle: 'Avertissement',
      helpDisclaimerText: "Je ne suis pas un savant. C'est un humble effort d\'un parent musulman. Le contenu est tire de \"Ceci n'est pas l'Islam\" du Cheikh Mohammed al-Ghazali et de sources islamiques fiables. Ce n'est pas une fatwa. Pour les questions de jurisprudence approfondies, veuillez consulter des savants qualifies.",
      helpSourcesTitle: 'Sources',
      helpSource1: "\"Ceci n'est pas l'Islam\" — Cheikh Mohammed al-Ghazali",
      helpSource2: 'Le Saint Coran et la Sunnah prophetique authentique',
      helpSource3: 'Livres de savants reconnus en jurisprudence et croyance',
      helpContribTitle: 'Contribution',
      helpContribText: "C'est un projet ouvert. Si vous trouvez une erreur ou souhaitez contribuer, contactez-nous via workshop-diy.org",
      duaTitle: 'Invocation (Dua)',
      duaTranslation: "O Allah, montre-nous la verite comme verite et aide-nous a la suivre, et montre-nous le faux comme faux et aide-nous a l'eviter",
      tabHome: 'Accueil',
      tabSieve: 'Tamis',
      tabTruth: 'Verite',
      tabWomen: 'Femmes',
      tabQuiz: 'Quiz',
      tabAbout: 'Livre',
      sacredTranslation: "le monachisme qu'ils ont invente — Nous ne le leur avions pas prescrit",
      toastCorrect: 'Bonne reponse !',
      toastWrong: 'Mauvaise reponse !',
      toastQuizReset: 'Le quiz a ete reinitialise',
      toastCopied: 'Copie !',
      whyLabel: 'Pourquoi les gens pensent-ils que c\'est islamique ?',
      evidenceLabel: 'Que dit le Cheikh al-Ghazali ?',
      alternativeLabel: "L'alternative authentique",
      shareLabel: 'Partager',
    },
  };

  /* ========== MYTH CARDS DATA (15 total) ========== */
  const MYTHS = [
    {
      id: 1, cat: 'worship',
      ar: { practice: 'زيارة القبور لطلب البركة والشفاء', catLabel: 'بدعة عبادة',
        why: 'توارث الناس هذه العادة جيلا بعد جيل. يظنون أن الأولياء المدفونين يملكون قدرة خاصة على شفاء المرضى وتحقيق الأمنيات. انتشرت حول القبور طقوس كاملة من ربط الخيوط والطواف والنذور.',
        evidence: 'يوضح الشيخ الغزالي أن زيارة القبور في الإسلام مشروعة فقط للاتعاظ وتذكر الآخرة والدعاء للميت. أما طلب الحوائج من الأموات فهو يتعارض مع أصل التوحيد. النبي صلى الله عليه وسلم حذر من تحويل القبور إلى أماكن عبادة.',
        alternative: 'زيارة القبور للاتعاظ والدعاء للميت. طلب الحوائج من الله وحده مباشرة. تذكّر الموت كدافع للعمل الصالح.' },
      en: { practice: 'Visiting graves to seek blessings and healing', catLabel: 'Worship innovation',
        why: 'This practice was passed down generation after generation. People believe that saints buried in these graves have special power to heal the sick and fulfill wishes. Entire rituals developed around graves, including tying threads, circumambulating tombs, and making vows.',
        evidence: 'Sheikh al-Ghazali explains that visiting graves in Islam is only permissible for reflection, remembering the afterlife, and praying for the deceased. Asking the dead for favors contradicts the core of Islamic monotheism (Tawhid). The Prophet (peace be upon him) warned against turning graves into places of worship.',
        alternative: 'Visit graves for reflection and praying for the deceased. Ask God alone directly for your needs. Remember death as motivation for good deeds.' },
      fr: { practice: 'Visiter les tombes pour chercher des benedictions et la guerison', catLabel: 'Innovation de culte',
        why: "Cette pratique a ete transmise de generation en generation. Les gens croient que les saints enterres ont un pouvoir special pour guerir les malades et exaucer les voeux.",
        evidence: "Le Cheikh al-Ghazali explique que visiter les tombes en Islam n'est permis que pour la reflexion, le souvenir de l'au-dela et l'invocation pour le defunt. Demander des faveurs aux morts contredit le fondement du monotheisme islamique (Tawhid).",
        alternative: "Visitez les tombes pour la reflexion et l'invocation pour le defunt. Demandez a Dieu seul directement." },
    },
    {
      id: 2, cat: 'worship',
      ar: { practice: 'المبالغة في زخرفة المساجد وتضييع وظيفتها الحقيقية', catLabel: 'بدعة عبادة',
        why: 'يظن كثيرون أن بناء مساجد فخمة مزخرفة بالذهب والفسيفساء هو أعظم ما يتقربون به إلى الله. فتحولت المساجد إلى تحف معمارية بينما تعطلت وظائفها الأساسية في التعليم والإصلاح الاجتماعي.',
        evidence: 'يشير الشيخ الغزالي إلى أن النبي صلى الله عليه وسلم حذر من التباهي بالمساجد. وظيفة المسجد الحقيقية هي أن يكون مركزا للعلم والعبادة والتضامن الاجتماعي، لا صرحا معماريا يُبهر الزائرين. مسجد النبي كان بسيطا من جريد النخل ومع ذلك خرّج حضارة كاملة.',
        alternative: 'المسجد مركز حياة: تعليم، عبادة، تضامن اجتماعي، حل مشكلات. الاهتمام بالنظافة والوظيفة قبل الزخرفة.' },
      en: { practice: 'Excessive mosque decoration while neglecting its real function', catLabel: 'Worship innovation',
        why: 'Many believe that building lavish mosques adorned with gold and mosaics is the greatest way to draw closer to God. Mosques became architectural marvels while their core functions in education and social reform were neglected.',
        evidence: "Sheikh al-Ghazali points out that the Prophet warned against boasting about mosques. A mosque's true role is to be a center for knowledge, worship, and social solidarity, not an architectural showpiece. The Prophet's mosque was simple, made of palm fronds, yet it produced an entire civilization.",
        alternative: "The mosque as a life center: education, worship, social solidarity, problem-solving. Focus on cleanliness and function before decoration." },
      fr: { practice: 'Decoration excessive des mosquees au detriment de leur vraie fonction', catLabel: 'Innovation de culte',
        why: "Beaucoup croient que construire des mosquees somptueuses ornees d'or et de mosaiques est le meilleur moyen de se rapprocher de Dieu.",
        evidence: "Le Cheikh al-Ghazali souligne que le Prophete a mis en garde contre l'ostentation dans les mosquees. Le vrai role d'une mosquee est d'etre un centre de savoir, de culte et de solidarite sociale.",
        alternative: "La mosquee comme centre de vie : education, culte, solidarite sociale, resolution de problemes." },
    },
    {
      id: 3, cat: 'customs',
      ar: { practice: 'طقوس جنازة مبالغ فيها لا أصل لها في السنة', catLabel: 'بدعة عادات',
        why: 'تعود الناس على إقامة حفلات تأبين كبيرة بعد الوفاة، مع ذبح الأنعام والولائم الباذخة وإحياء ليالي العزاء لأسابيع. يظنون أن هذا واجب ديني.',
        evidence: 'يوضح الشيخ الغزالي أن الإسلام يدعو إلى البساطة في الجنازة. السنة أن يصنع أهل الحي طعاما لأهل الميت وليس العكس. الإسلام نهى عن النياحة والعويل والمبالغة.',
        alternative: 'الصبر والاحتساب. صلاة الجنازة والدعاء للميت. الجيران والأصدقاء يصنعون الطعام لأهل الميت. الصدقة الجارية نيابة عن الميت.' },
      en: { practice: 'Elaborate funeral customs with no basis in the Sunnah', catLabel: 'Customs innovation',
        why: 'People became accustomed to holding large memorial ceremonies after death, with animal slaughter, lavish feasts, and mourning gatherings lasting weeks.',
        evidence: "Sheikh al-Ghazali explains that Islam calls for simplicity in funerals. The Sunnah is for neighbors to prepare food for the bereaved family, not the other way around. Islam forbids wailing and exaggeration.",
        alternative: "Patience and trusting in God's reward. Funeral prayer and supplication for the deceased. Neighbors prepare food for the family. Ongoing charity on behalf of the deceased." },
      fr: { practice: "Coutumes funeraires elaborees sans fondement dans la Sunnah", catLabel: 'Innovation de coutumes',
        why: "Les gens se sont habitues a organiser de grandes ceremonies commemoratives apres un deces, avec des festins somptueux et des rassemblements de deuil durant des semaines.",
        evidence: "Le Cheikh al-Ghazali explique que l'Islam appelle a la simplicite dans les funerailles. La Sunnah veut que les voisins preparent la nourriture pour la famille endeuillee.",
        alternative: "Patience et confiance en la recompense divine. Priere funeraire et invocation pour le defunt. Charite continue au nom du defunt." },
    },
    {
      id: 4, cat: 'worship',
      ar: { practice: 'تحويل الأذان إلى أداء تمثيلي مبالغ فيه', catLabel: 'بدعة عبادة',
        why: 'بدأ بعض المؤذنين يحولون الأذان إلى عرض غنائي يُظهرون فيه مهاراتهم الصوتية بالتطريب المبالغ فيه والمد الطويل والزخارف اللحنية.',
        evidence: 'يشدد الشيخ الغزالي على أن الأذان نداء جاد وعاجل يدعو المسلمين إلى الصلاة. ليس عرضا فنيا أو مسابقة أصوات. المطلوب صوت حسن واضح يوصل الرسالة.',
        alternative: 'أذان بصوت حسن وواضح يحمل معنى الكلمات. التركيز على الخشوع لا الاستعراض.' },
      en: { practice: 'Turning the Adhan into a melodramatic performance', catLabel: 'Worship innovation',
        why: 'Some muezzins started turning the call to prayer into a vocal showcase, with excessive melodic embellishments, prolonged notes, and musical decorations.',
        evidence: "Sheikh al-Ghazali emphasizes that the Adhan is a serious and urgent call summoning Muslims to prayer. It is not an artistic performance or a voice competition.",
        alternative: 'An Adhan with a pleasant, clear voice that carries the meaning of the words. Focus on reverence, not showing off.' },
      fr: { practice: "Transformer l'Adhan en une performance melodramatique", catLabel: 'Innovation de culte',
        why: "Certains muezzins ont commence a transformer l'appel a la priere en un spectacle vocal, avec des ornements melodiques excessifs.",
        evidence: "Le Cheikh al-Ghazali souligne que l'Adhan est un appel serieux et urgent invitant les musulmans a la priere. Ce n'est pas une performance artistique.",
        alternative: "Un Adhan avec une voix agreable et claire qui porte le sens des mots. Se concentrer sur le recueillement." },
    },
    {
      id: 5, cat: 'creed',
      ar: { practice: 'اتخاذ وسطاء بين العبد والله', catLabel: 'بدعة عقيدة',
        why: 'تأثر بعض المسلمين بثقافات أخرى وظنوا أنهم يحتاجون إلى واسطة للوصول إلى الله: أولياء أحياء أو أموات يتشفعون لهم.',
        evidence: 'يؤكد الشيخ الغزالي أن العلاقة بين العبد وربه في الإسلام مباشرة بلا وسيط. الله أقرب إلينا من حبل الوريد. لا كهنوت في الإسلام ولا وساطة.',
        alternative: 'الدعاء لله مباشرة في أي وقت ومكان. لا حاجة لواسطة بشرية. العلماء يُعلّمون لا يتوسطون.' },
      en: { practice: 'Using intermediaries between humans and God', catLabel: 'Creed innovation',
        why: 'Some Muslims were influenced by other cultures and believed they needed intermediaries to reach God: living or deceased saints to intercede for them.',
        evidence: 'Sheikh al-Ghazali affirms that in Islam, the relationship between a person and God is direct, with no intermediary. God is closer to us than our jugular vein. There is no priesthood in Islam and no mediation.',
        alternative: "Supplicate to God directly, anytime, anywhere. No need for a human intermediary. Scholars teach, they don't mediate." },
      fr: { practice: 'Utiliser des intermediaires entre les humains et Dieu', catLabel: 'Innovation de croyance',
        why: "Certains musulmans ont ete influences par d'autres cultures et ont cru avoir besoin d'intermediaires pour atteindre Dieu.",
        evidence: "Le Cheikh al-Ghazali affirme qu'en Islam, la relation entre la personne et Dieu est directe, sans intermediaire. Il n'y a pas de clerge en Islam ni de mediation.",
        alternative: "Invoquer Dieu directement, a tout moment, en tout lieu. Pas besoin d'intermediaire humain." },
    },
    {
      id: 6, cat: 'customs',
      ar: { practice: 'منع المرأة من المساجد والتعليم', catLabel: 'بدعة عادات',
        why: 'في بعض المجتمعات، مُنعت النساء من دخول المساجد ومن طلب العلم، بحجة أن مكان المرأة البيت فقط.',
        evidence: 'يفنّد الشيخ الغزالي هذا بقوة. النبي صلى الله عليه وسلم قال: "لا تمنعوا إماء الله مساجد الله". وقال: "طلب العلم فريضة على كل مسلم" (ذكرا وأنثى). نساء الصحابة كن يحضرن المسجد ويسألن ويتعلمن.',
        alternative: 'تشجيع المرأة على طلب العلم فهو فريضة عليها كالرجل. فتح المساجد للنساء كما كان في عهد النبي.' },
      en: { practice: 'Restricting women from mosques and education', catLabel: 'Customs innovation',
        why: "In some societies, women were barred from entering mosques and from seeking knowledge, under the pretext that a woman's place is only at home.",
        evidence: "Sheikh al-Ghazali strongly refutes this. The Prophet said: \"Do not prevent God's female servants from God's mosques.\" He also said: \"Seeking knowledge is an obligation upon every Muslim\" (male and female).",
        alternative: "Encourage women to seek knowledge, as it is an obligation for them as it is for men. Open mosques to women as in the Prophet's time." },
      fr: { practice: "Interdire aux femmes l'acces aux mosquees et a l'education", catLabel: 'Innovation de coutumes',
        why: "Dans certaines societes, les femmes ont ete empechees d'entrer dans les mosquees et de chercher le savoir.",
        evidence: "Le Cheikh al-Ghazali refute cela avec force. Le Prophete a dit : \"N'empechez pas les servantes de Dieu d'acceder aux mosquees de Dieu.\"",
        alternative: "Encourager les femmes a chercher le savoir. Ouvrir les mosquees aux femmes comme a l'epoque du Prophete." },
    },
    {
      id: 7, cat: 'creed',
      ar: { practice: 'اختزال الدين في الشعائر فقط وفصله عن العدل والأخلاق', catLabel: 'بدعة عقيدة',
        why: 'اعتقد البعض أن التدين يعني فقط أداء الصلاة والصيام والحج، بمعزل عن السلوك الأخلاقي والعدالة الاجتماعية.',
        evidence: 'يشدد الشيخ الغزالي على أن الإسلام دين شامل يربط العبادة بالأخلاق ربطا وثيقا. قال النبي: "إنما بُعثت لأتمم مكارم الأخلاق". الإسلام عدل ورحمة وأمانة قبل أن يكون ركوعا وسجودا.',
        alternative: 'الإسلام منهج حياة متكامل: عبادة + أخلاق + عدل + رحمة. كل عمل خير عبادة.' },
      en: { practice: 'Reducing religion to rituals only, detached from justice and ethics', catLabel: 'Creed innovation',
        why: 'Some believed that being religious means only performing prayer, fasting, and pilgrimage, separate from ethical behavior and social justice.',
        evidence: "Sheikh al-Ghazali emphasizes that Islam is a comprehensive religion that ties worship to ethics inseparably. The Prophet said: \"I was sent to perfect good character.\"",
        alternative: 'Islam is a complete way of life: worship + ethics + justice + mercy. Every good deed is worship.' },
      fr: { practice: "Reduire la religion aux rituels seulement, detachee de la justice et de l'ethique", catLabel: 'Innovation de croyance',
        why: "Certains croient qu'etre religieux signifie seulement accomplir la priere, le jeune et le pelerinage, separes du comportement ethique.",
        evidence: "Le Cheikh al-Ghazali souligne que l'Islam est une religion complete qui lie le culte a l'ethique de maniere inseparable.",
        alternative: "L\'Islam est un mode de vie complet : culte + ethique + justice + misericorde." },
    },
    {
      id: 8, cat: 'creed',
      ar: { practice: 'إغلاق باب الاجتهاد والتفكير', catLabel: 'بدعة عقيدة',
        why: 'ادعى بعض العلماء أن باب الاجتهاد أُغلق بعد القرون الأولى، وأنه لا يحق لأحد أن يفكر من جديد في المسائل الفقهية. أصبح التقليد الأعمى هو السائد.',
        evidence: 'يرفض الشيخ الغزالي هذا رفضا قاطعا. الاجتهاد فريضة إسلامية والقرآن يحث على التفكر والتدبر في عشرات الآيات. إغلاق باب الاجتهاد أدى إلى تخلف الأمة.',
        alternative: 'تشجيع الاجتهاد المبني على العلم والأدلة. تجديد الفقه ليواكب مستجدات العصر مع الحفاظ على الثوابت.' },
      en: { practice: 'Closing the door of ijtihad (independent reasoning)', catLabel: 'Creed innovation',
        why: 'Some scholars claimed that the door of ijtihad was closed after the early centuries, and that nobody has the right to think anew about jurisprudential matters.',
        evidence: "Sheikh al-Ghazali categorically rejects this. Ijtihad is an Islamic obligation, and the Quran encourages reflection in dozens of verses.",
        alternative: 'Encourage ijtihad based on knowledge and evidence. Renew jurisprudence to address modern realities while preserving core principles.' },
      fr: { practice: "Fermer la porte de l'ijtihad (raisonnement independant)", catLabel: 'Innovation de croyance',
        why: "Certains savants ont affirme que la porte de l'ijtihad a ete fermee apres les premiers siecles.",
        evidence: "Le Cheikh al-Ghazali rejette categoriquement cela. L'ijtihad est une obligation islamique, et le Coran encourage la reflexion dans des dizaines de versets.",
        alternative: "Encourager l'ijtihad base sur le savoir et les preuves. Renouveler la jurisprudence pour repondre aux realites modernes." },
    },
    {
      id: 9, cat: 'customs',
      ar: { practice: 'احتفالات المولد النبوي المليئة بالبدع', catLabel: 'بدعة عادات',
        why: 'يحتفل كثير من المسلمين بالمولد النبوي بطقوس لم تكن في عهد النبي ولا الصحابة: خلط بين الحقائق والخرافات، مبالغات تصل أحيانا للتقديس الممنوع.',
        evidence: 'يوضح الشيخ الغزالي أن حب النبي فريضة لكن التعبير عنه يكون باتباع سنته لا بطقوس مبتدعة. الصحابة لم يحتفلوا بالمولد وهم أشد الناس حبا للنبي.',
        alternative: 'حب النبي = اتباع سنته وأخلاقه. تعلم السيرة النبوية وتعليمها للأبناء. تطبيق تعاليم النبي في الحياة اليومية.' },
      en: { practice: 'Mawlid celebrations filled with innovations', catLabel: 'Customs innovation',
        why: "Many Muslims celebrate the Prophet's birthday with rituals that didn't exist in his time or that of his companions: mixing facts with myths, exaggerations that sometimes reach forbidden veneration.",
        evidence: 'Sheikh al-Ghazali explains that loving the Prophet is obligatory, but expressing it should be through following his way (Sunnah), not through invented rituals.',
        alternative: "Love of the Prophet = following his way and character. Learn and teach the Prophet's life story. Apply his teachings daily." },
      fr: { practice: "Celebrations du Mawlid remplies d'innovations", catLabel: 'Innovation de coutumes',
        why: "De nombreux musulmans celebrent l'anniversaire du Prophete avec des rituels qui n'existaient pas a son epoque ni a celle de ses compagnons.",
        evidence: "Le Cheikh al-Ghazali explique qu'aimer le Prophete est obligatoire, mais que l'exprimer doit se faire en suivant sa voie (Sunnah), pas par des rituels inventes.",
        alternative: "L'amour du Prophete = suivre sa voie et son caractere. Apprendre la biographie du Prophete et l'enseigner aux enfants." },
    },
    {
      id: 10, cat: 'worship',
      ar: { practice: 'اختزال الذكر في ترديد آلي بلا وعي', catLabel: 'بدعة عبادة',
        why: 'حول البعض الذكر إلى ترديد آلي للكلمات بلا تدبر ولا خشوع. يعدّون الأرقام على المسبحة بسرعة دون أن يفهموا ما يقولون.',
        evidence: 'يشير الشيخ الغزالي إلى أن الذكر الحقيقي هو حضور القلب مع الله. ليس المقصود العدد بل الخشوع والتدبر. تسبيحة واحدة بقلب حاضر خير من ألف بلسان غافل.',
        alternative: 'الذكر بحضور قلب وتدبر معاني الكلمات. الجودة أهم من الكمية. كل عمل صالح هو ذكر لله.' },
      en: { practice: 'Reducing dhikr (remembrance of God) to mechanical repetition', catLabel: 'Worship innovation',
        why: 'Some turned dhikr into mechanical word repetition without contemplation or reverence. They count numbers on prayer beads rapidly without understanding.',
        evidence: "Sheikh al-Ghazali points out that true dhikr is the presence of the heart with God. The goal is not the number but the reverence. One glorification with a present heart is better than a thousand with a heedless tongue.",
        alternative: "Dhikr with a present heart and contemplation of meanings. Quality over quantity. Every good deed is remembrance of God." },
      fr: { practice: 'Reduire le dhikr (souvenir de Dieu) a une repetition mecanique', catLabel: 'Innovation de culte',
        why: "Certains ont transforme le dhikr en repetition mecanique de mots sans contemplation ni reverence.",
        evidence: "Le Cheikh al-Ghazali souligne que le vrai dhikr est la presence du coeur avec Dieu. L'objectif n'est pas le nombre mais le recueillement.",
        alternative: "Le dhikr avec un coeur present et une contemplation du sens des mots. La qualite prime sur la quantite." },
    },
    /* ===== 5 NEW MYTHS (11-15) ===== */
    {
      id: 11, cat: 'creed',
      ar: { practice: 'التقليد الأعمى لمذهب واحد بلا فهم ورفض الاجتهاد', catLabel: 'بدعة عقيدة',
        why: 'ادعى البعض أن على المسلم اتباع مذهب واحد فقط في كل شيء دون فهم أدلته أو مناقشتها. حتى لو ظهر أن الدليل مع مذهب آخر، يُمنع من اتباعه. تحول التمذهب من أداة تسهيل إلى سجن فكري.',
        evidence: 'يرفض الشيخ الغزالي التعصب المذهبي. الأئمة الأربعة أنفسهم نهوا عن تقليدهم بلا دليل. قال الإمام أبو حنيفة: "إذا صح الحديث فهو مذهبي". المذاهب اجتهادات بشرية قابلة للخطأ والصواب.',
        alternative: 'التعلم من جميع المذاهب واختيار الأقرب للدليل. احترام الاختلاف الفقهي. فهم الأدلة لا مجرد حفظ الأقوال.' },
      en: { practice: 'Blind following of one madhhab without understanding', catLabel: 'Creed innovation',
        why: 'Some claimed that a Muslim must follow only one school of thought in everything without understanding its evidence or discussing it. Even if the evidence clearly supports another school, switching is forbidden. Scholarly schools became intellectual prisons.',
        evidence: 'Sheikh al-Ghazali rejects sectarian fanaticism. The four Imams themselves warned against following them blindly. Imam Abu Hanifa said: "If the hadith is authentic, that is my school." Schools of thought are human efforts, subject to error and correction.',
        alternative: 'Learn from all schools and choose what is closest to the evidence. Respect scholarly differences. Understand the evidence, not just memorize opinions.' },
      fr: { practice: "Suivre aveuglement un seul madhhab sans comprendre", catLabel: 'Innovation de croyance',
        why: "Certains affirment qu'un musulman doit suivre une seule ecole de pensee en tout sans comprendre ses preuves. Les ecoles juridiques sont devenues des prisons intellectuelles.",
        evidence: "Le Cheikh al-Ghazali rejette le fanatisme sectaire. Les quatre Imams eux-memes ont mis en garde contre le suivi aveugle. L'Imam Abu Hanifa a dit : \"Si le hadith est authentique, c'est mon ecole.\"",
        alternative: "Apprendre de toutes les ecoles et choisir ce qui est le plus proche des preuves. Respecter les differences savantes." },
    },
    {
      id: 12, cat: 'creed',
      ar: { practice: 'حصر الإسلام في العبادة الشخصية وفصله عن المجتمع والسياسة', catLabel: 'بدعة عقيدة',
        why: 'روّج البعض لفكرة أن الإسلام دين شخصي بين العبد وربه فقط، لا علاقة له بتنظيم المجتمع أو العدالة أو الحكم. هذا التصور يجعل الدين عاجزا عن إصلاح واقع الناس.',
        evidence: 'يؤكد الشيخ الغزالي أن الإسلام دين ودنيا. القرآن تحدث عن العدل والشورى والحكم الرشيد والاقتصاد وحقوق الإنسان. النبي أسس دولة في المدينة قامت على العدل والمساواة. فصل الدين عن الحياة تشويه للإسلام.',
        alternative: 'الإسلام منهج شامل: عبادة وأخلاق وعدالة اجتماعية وحكم رشيد. المشاركة في إصلاح المجتمع واجب ديني.' },
      en: { practice: 'Islam = only personal worship, disconnected from society', catLabel: 'Creed innovation',
        why: 'Some promoted the idea that Islam is purely a personal religion between a person and God, with no connection to organizing society, justice, or governance.',
        evidence: "Sheikh al-Ghazali affirms that Islam encompasses both faith and worldly affairs. The Quran addresses justice, consultation, good governance, economics, and human rights. The Prophet established a state in Medina based on justice and equality. Separating religion from life distorts Islam.",
        alternative: 'Islam is a comprehensive system: worship, ethics, social justice, and good governance. Participating in societal reform is a religious duty.' },
      fr: { practice: "L\'Islam = culte personnel seulement, deconnecte de la societe", catLabel: 'Innovation de croyance',
        why: "Certains ont promu l'idee que l'Islam est purement une religion personnelle entre la personne et Dieu, sans lien avec l'organisation de la societe.",
        evidence: "Le Cheikh al-Ghazali affirme que l'Islam englobe a la fois la foi et les affaires du monde. Le Coran traite de la justice, de la consultation, de la bonne gouvernance et des droits de l'homme.",
        alternative: "L\'Islam est un systeme complet : culte, ethique, justice sociale et bonne gouvernance." },
    },
    {
      id: 13, cat: 'customs',
      ar: { practice: 'تحريم الموسيقى والفن تحريما مطلقا بلا تفصيل', catLabel: 'بدعة عادات',
        why: 'ذهب بعض المتشددين إلى تحريم كل أشكال الموسيقى والفن والغناء تحريما قاطعا، محتجين بأحاديث اختلف العلماء في صحتها وتفسيرها. جعلوا كل صوت جميل حراما.',
        evidence: 'يوضح الشيخ الغزالي أن المسألة فيها خلاف قديم بين العلماء. الإمام الغزالي (أبو حامد) أجاز السماع بشروط. ما يُحرم هو ما يصاحب المعاصي لا الصوت في ذاته. الإسلام دين الجمال والذوق الرفيع.',
        alternative: 'التفريق بين الفن الهادف والفن الفاسد. تشجيع الإبداع الذي يرفع الروح. الأناشيد والشعر كانت جزءا من الحضارة الإسلامية.' },
      en: { practice: 'Absolutely forbidding all music and art in every form', catLabel: 'Customs innovation',
        why: 'Some hardliners declared all forms of music, art, and singing absolutely forbidden, citing hadiths whose authenticity and interpretation are debated among scholars.',
        evidence: "Sheikh al-Ghazali clarifies that this is an ancient scholarly disagreement. Imam al-Ghazali (Abu Hamid) permitted listening under conditions. What is forbidden is what accompanies sin, not sound itself. Islam is a religion of beauty and refined taste.",
        alternative: 'Distinguish between purposeful art and corrupting art. Encourage creativity that uplifts the spirit. Poetry and nasheed were part of Islamic civilization.' },
      fr: { practice: "Interdire absolument toute musique et tout art sous toutes ses formes", catLabel: 'Innovation de coutumes',
        why: "Certains rigoristes ont declare toutes les formes de musique, d'art et de chant absolument interdites, citant des hadiths dont l'authenticite est debattue.",
        evidence: "Le Cheikh al-Ghazali clarifie que c'est un ancien desaccord entre savants. L'Imam al-Ghazali (Abu Hamid) a permis l'ecoute sous conditions. Ce qui est interdit est ce qui accompagne le peche, pas le son en soi.",
        alternative: "Distinguer entre l'art utile et l'art corrupteur. Encourager la creativite qui eleve l'esprit." },
    },
    {
      id: 14, cat: 'customs',
      ar: { practice: 'منع المرأة من إمامة النساء في الصلاة ومن تعليم الرجال', catLabel: 'بدعة عادات',
        why: 'يرى البعض أن المرأة لا يمكنها أن تؤم النساء في الصلاة ولا أن تعلّم الرجال العلم الشرعي. يحصرون دور المرأة الديني في الاستماع والطاعة فقط.',
        evidence: 'يوضح الشيخ الغزالي أن النبي أذن لأم ورقة أن تؤم أهل بيتها. عائشة رضي الله عنها كانت تعلّم كبار الصحابة ويأتيها الرجال يستفتونها. المرأة عالمة ومعلمة ومفتية في تاريخ الإسلام.',
        alternative: 'يجوز للمرأة أن تؤم النساء في الصلاة. المرأة العالمة تعلّم الجميع. تاريخ الإسلام مليء بالعالمات اللواتي درّسن الرجال.' },
      en: { practice: 'Preventing women from leading prayer for women or teaching men', catLabel: 'Customs innovation',
        why: 'Some believe women cannot lead other women in prayer or teach men religious knowledge. They limit women\'s religious role to listening and obedience only.',
        evidence: "Sheikh al-Ghazali explains that the Prophet permitted Umm Waraqah to lead her household in prayer. Aisha (may God be pleased with her) taught senior companions, and men came to her for religious rulings. Women were scholars, teachers, and muftis throughout Islamic history.",
        alternative: "Women may lead other women in prayer. Scholarly women teach everyone. Islamic history is full of female scholars who taught men." },
      fr: { practice: "Empecher les femmes de diriger la priere des femmes ou d'enseigner aux hommes", catLabel: 'Innovation de coutumes',
        why: "Certains croient que les femmes ne peuvent pas diriger d'autres femmes en priere ni enseigner aux hommes le savoir religieux.",
        evidence: "Le Cheikh al-Ghazali explique que le Prophete a permis a Umm Waraqah de diriger sa famille en priere. Aisha enseignait aux grands compagnons et les hommes venaient la consulter.",
        alternative: "Les femmes peuvent diriger d'autres femmes en priere. Les femmes savantes enseignent a tous." },
    },
    {
      id: 15, cat: 'creed',
      ar: { practice: 'اعتبار التصوف كله خارجا عن الإسلام', catLabel: 'بدعة عقيدة',
        why: 'يرى البعض أن كل ما يتعلق بالتصوف بدعة وضلالة، ويرفضون أي بُعد روحي في الإسلام. يخلطون بين الانحرافات التي وقع فيها بعض المتصوفة وبين التصوف السني الأصيل.',
        evidence: 'يتخذ الشيخ الغزالي موقفا متوازنا. يفرّق بين التصوف السني القائم على الكتاب والسنة (تزكية النفس والزهد والخشوع) وبين الانحرافات. الإمام أبو حامد الغزالي في "إحياء علوم الدين" جمع بين العلم والروحانية. الإسلام فيه بُعد روحي عميق.',
        alternative: 'التزكية الروحية جزء أصيل من الإسلام. التفريق بين التصوف السني المعتدل والانحرافات. الجمع بين العلم والعمل والروحانية.' },
      en: { practice: 'Considering all Sufism as entirely outside Islam', catLabel: 'Creed innovation',
        why: 'Some view everything related to Sufism as heresy and misguidance, rejecting any spiritual dimension in Islam. They conflate deviations by some Sufis with authentic Sunni Sufism.',
        evidence: "Sheikh al-Ghazali takes a balanced position. He distinguishes between Sunni Sufism based on Quran and Sunnah (self-purification, asceticism, reverence) and deviations. Imam Abu Hamid al-Ghazali's \"Revival of Religious Sciences\" combined knowledge and spirituality. Islam has a deep spiritual dimension.",
        alternative: 'Spiritual purification is an integral part of Islam. Distinguish between moderate Sunni Sufism and deviations. Combine knowledge, practice, and spirituality.' },
      fr: { practice: "Considerer tout le soufisme comme entierement en dehors de l'Islam", catLabel: 'Innovation de croyance',
        why: "Certains voient tout ce qui est lie au soufisme comme heresie, rejetant toute dimension spirituelle en Islam. Ils confondent les deviations de certains soufis avec le soufisme sunnite authentique.",
        evidence: "Le Cheikh al-Ghazali adopte une position equilibree. Il distingue entre le soufisme sunnite base sur le Coran et la Sunnah et les deviations. L'Imam Abu Hamid al-Ghazali dans son \"Revivification des Sciences Religieuses\" a combine savoir et spiritualite.",
        alternative: "La purification spirituelle fait partie integrante de l'Islam. Distinguer entre le soufisme sunnite modere et les deviations." },
    },
  ];

  /* ========== TRUTH CARDS DATA (8 total) ========== */
  const TRUTHS = [
    {
      id: 1, icon: '\uD83C\uDFAF',
      ar: { title: 'أهداف الإسلام: الرحمة والعدل والعلم والتقدم', content: 'الإسلام ليس مجرد طقوس وشعائر. رسالته الأساسية هي: الرحمة بالخلق جميعا، العدل بين الناس كلهم، نشر العلم ومحاربة الجهل، والتقدم والبناء في الأرض. الإسلام جاء ليحرر العقل ويرفع الإنسان ويبني حضارة متكاملة.' },
      en: { title: "Islam's Goals: Mercy, Justice, Knowledge, and Progress", content: "Islam is not merely rituals. Its core message is: mercy toward all creation, justice for all people, spreading knowledge and fighting ignorance, and progress and building on earth. Islam came to free the mind, elevate humanity, and build a comprehensive civilization." },
      fr: { title: "Les objectifs de l'Islam : Misericorde, Justice, Savoir et Progres", content: "L\'Islam n'est pas simplement des rituels. Son message fondamental est : la misericorde envers toute la creation, la justice pour tous, la diffusion du savoir et le progres." },
    },
    {
      id: 2, icon: '\u2696\uFE0F',
      ar: { title: 'الشريعة: عدل الله ورحمته بالخلق', content: 'الشريعة الإسلامية ليست قائمة من الممنوعات والعقوبات. هي نظام إلهي متكامل هدفه حماية خمسة أشياء ضرورية للإنسان: الدين والنفس والعقل والنسل والمال. الشريعة مرنة في فروعها ثابتة في أصولها، تصلح لكل زمان ومكان.' },
      en: { title: "Shari'a: God's Justice and Mercy Toward Creation", content: "Islamic Shari'a is not a list of prohibitions and punishments. It is a comprehensive divine system aimed at protecting five essential things: religion, life, intellect, lineage, and wealth. Shari'a is flexible in its branches while firm in its foundations." },
      fr: { title: 'La Charia : Justice et Misericorde de Dieu', content: "La Charia islamique n'est pas une liste d'interdictions. C'est un systeme divin complet visant a proteger cinq choses essentielles : la religion, la vie, l'intellect, la lignee et les biens." },
    },
    {
      id: 3, icon: '\uD83C\uDF1F',
      ar: { title: 'الإيمان المتكامل مع الحياة', content: 'في الإسلام، لا فصل بين الدين والحياة. الأكل عبادة إذا نوى به الإنسان التقوي على طاعة الله. النوم عبادة إذا أراح جسده ليعمل. العمل عبادة إذا أتقنه. حتى الابتسامة صدقة. الإسلام يحول كل لحظة في حياتك إلى عبادة بالنية الصالحة. لا رهبانية ولا انعزال عن الدنيا.' },
      en: { title: 'Faith Integrated with Life', content: "In Islam, there is no separation between religion and life. Eating is worship if you intend to gain strength for God's obedience. Working is worship if you do it with excellence. Even smiling is charity. Islam transforms every moment into worship through righteous intention. No monasticism and no isolation." },
      fr: { title: 'La foi integree a la vie', content: "En Islam, il n'y a pas de separation entre la religion et la vie. Manger est un acte de culte si vous avez l'intention de gagner la force pour l'obeissance a Dieu. Travailler avec excellence est un culte. Meme sourire est une charite." },
    },
    {
      id: 4, icon: '\uD83D\uDC69\u200D\uD83C\uDF93',
      ar: { title: 'حقوق المرأة في الإسلام الأصيل', content: 'الإسلام الحقيقي كرّم المرأة وجعلها شريكة كاملة في الحياة. النبي قال: "إنما النساء شقائق الرجال". المرأة في الإسلام لها حق التعليم والعمل والتملك والميراث والمشاركة في الحياة العامة. خديجة كانت سيدة أعمال ناجحة. عائشة كانت عالمة. ما فعلته بعض الثقافات بالمرأة باسم الإسلام ظلم ليس منه.' },
      en: { title: "Women's Rights in Authentic Islam", content: "Authentic Islam honored women and made them full partners. The Prophet said: \"Women are the counterparts of men.\" Women have the right to education, work, property, inheritance, and public participation. Khadijah was a successful businesswoman. Aisha was a scholar. What some cultures did to women in the name of Islam is injustice." },
      fr: { title: "Les droits des femmes dans l'Islam authentique", content: "L\'Islam authentique a honore les femmes et en a fait des partenaires a part entiere. Le Prophete a dit : \"Les femmes sont les homologues des hommes.\" Les femmes ont le droit a l'education, au travail, a la propriete et a la participation publique." },
    },
    {
      id: 5, icon: '\uD83D\uDCA1',
      ar: { title: 'الاجتهاد والتجديد الفكري', content: 'الإسلام دين يحث على التفكير والتجديد. القرآن مليء بالآيات التي تدعو إلى التفكر والتدبر. الاجتهاد ليس خروجا عن الدين بل هو من صميم الدين. العلماء المسلمون الأوائل كانوا مجددين، وبفضل ذلك بنوا حضارة عظيمة. التقليد الأعمى هو الذي يضر بالإسلام لا التجديد.' },
      en: { title: 'Ijtihad and Intellectual Renewal', content: "Islam encourages thinking and renewal. The Quran calls for reflection and contemplation. Ijtihad is not departure from religion but is at its core. Early Muslim scholars were innovators, building a great civilization in science, medicine, and philosophy. Blind imitation is what harms Islam, not renewal." },
      fr: { title: "L'Ijtihad et le renouveau intellectuel", content: "L'Islam encourage la reflexion et le renouveau. Le Coran appelle a la reflexion et a la contemplation. L'Ijtihad n'est pas un ecart de la religion mais est au coeur de la religion." },
    },
    /* ===== 3 NEW TRUTHS (6-8) ===== */
    {
      id: 6, icon: '\uD83D\uDD2C',
      ar: { title: 'الإسلام يشجع البحث العلمي والملاحظة', content: 'القرآن يحث على التفكر في الكون والطبيعة في عشرات الآيات: "قُلِ انظُرُوا مَاذَا فِي السَّمَاوَاتِ وَالْأَرْضِ". العلماء المسلمون أسسوا المنهج التجريبي قبل أوروبا بقرون. ابن الهيثم أسس علم البصريات، والخوارزمي أسس الجبر، وابن سينا ألّف القانون في الطب. العلم التجريبي ليس ضد الإسلام بل هو من روح الإسلام.' },
      en: { title: 'Islam Encourages Scientific Inquiry and Observation', content: "The Quran urges reflection on the universe and nature in dozens of verses: \"Say: Look at what is in the heavens and the earth.\" Muslim scholars established the experimental method centuries before Europe. Ibn al-Haytham founded optics, al-Khwarizmi founded algebra, and Ibn Sina authored the Canon of Medicine. Experimental science is not against Islam but is from the spirit of Islam." },
      fr: { title: "L\'Islam encourage l'enquete scientifique et l'observation", content: "Le Coran exhorte a la reflexion sur l'univers et la nature dans des dizaines de versets. Les savants musulmans ont etabli la methode experimentale des siecles avant l'Europe. Ibn al-Haytham a fonde l'optique, al-Khwarizmi a fonde l'algebre." },
    },
    {
      id: 7, icon: '\uD83E\uDD1D',
      ar: { title: 'الإسلام يحمي الأقليات الدينية', content: 'عندما فتح عمر بن الخطاب القدس، أعطى أهلها عهد أمان يحفظ كنائسهم وصلبانهم وحريتهم الدينية. هذا العهد العمري من أعظم وثائق حقوق الإنسان في التاريخ. قال النبي: "من آذى ذميا فقد آذاني". التعايش مع غير المسلمين أصل إسلامي لا استثناء.' },
      en: { title: "Islam Protects Religious Minorities", content: "When Umar ibn al-Khattab conquered Jerusalem, he gave its people a covenant of safety that preserved their churches, crosses, and religious freedom. This Covenant of Umar is one of history's greatest human rights documents. The Prophet said: \"Whoever harms a dhimmi has harmed me.\" Coexistence with non-Muslims is an Islamic principle, not an exception." },
      fr: { title: "L\'Islam protege les minorites religieuses", content: "Quand Umar ibn al-Khattab a conquis Jerusalem, il a donne a ses habitants un pacte de securite preservant leurs eglises, leurs croix et leur liberte religieuse. Ce Pacte d'Umar est l'un des plus grands documents des droits de l'homme de l'histoire." },
    },
    {
      id: 8, icon: '\uD83D\uDDE3\uFE0F',
      ar: { title: 'الإسلام يقوم على الشورى في الحكم', content: 'الشورى ركن أساسي في الحكم الإسلامي. قال تعالى: "وَأَمْرُهُمْ شُورَى بَيْنَهُمْ". النبي كان يستشير أصحابه في كل شيء. في غزوة بدر أخذ برأي الحباب بن المنذر في اختيار موقع المعركة. الاستبداد والحكم الفردي ليس من الإسلام. الحاكم خادم للأمة لا سيد عليها.' },
      en: { title: 'Islam Values Consultation (Shura) in Governance', content: "Consultation (Shura) is a fundamental pillar of Islamic governance. God says: \"And their affairs are conducted by mutual consultation.\" The Prophet consulted his companions in everything. In the Battle of Badr, he took al-Hubab ibn al-Mundhir's advice on battlefield positioning. Tyranny and autocratic rule are not from Islam. The ruler is a servant of the community, not its master." },
      fr: { title: "L'Islam valorise la consultation (Shura) dans la gouvernance", content: "La consultation (Shura) est un pilier fondamental de la gouvernance islamique. Dieu dit : \"Et leurs affaires sont conduites par consultation mutuelle.\" Le Prophete consultait ses compagnons en tout. La tyrannie et le pouvoir autocratique ne sont pas de l'Islam." },
    },
  ];

  /* ========== WOMEN'S RIGHTS DATA ========== */
  const WOMEN_RIGHTS = [
    {
      id: 1, icon: '\uD83D\uDCDA',
      ar: { title: 'حق المرأة في التعليم', myth: 'الخرافة: تعليم المرأة يفسدها وعيب عليها', truth: 'الحقيقة: النبي صلى الله عليه وسلم قال: "طلب العلم فريضة على كل مسلم" وهذا يشمل المرأة بالنص. الشيخ الغزالي يؤكد أن حرمان المرأة من التعليم جريمة باسم الدين. عائشة رضي الله عنها كانت من أعلم الناس بالحديث والفقه، وكان كبار الصحابة يأتونها ليتعلموا منها.' },
      en: { title: "Women's Right to Education", myth: 'The myth: Educating women corrupts them', truth: 'The truth: The Prophet said: "Seeking knowledge is an obligation upon every Muslim" — this includes women by explicit text. Sheikh al-Ghazali affirms that depriving women of education is a crime committed in the name of religion. Aisha was among the most knowledgeable people in hadith and jurisprudence, and senior companions came to learn from her.' },
      fr: { title: "Le droit des femmes a l'education", myth: "Le mythe : Eduquer les femmes les corrompt", truth: "La verite : Le Prophete a dit : \"La recherche du savoir est une obligation pour chaque musulman\" — cela inclut les femmes explicitement. Le Cheikh al-Ghazali affirme que priver les femmes d'education est un crime au nom de la religion." },
    },
    {
      id: 2, icon: '\uD83C\uDFDB\uFE0F',
      ar: { title: 'مشاركة المرأة في الحياة العامة', myth: 'الخرافة: مكان المرأة البيت فقط ولا شأن لها بالحياة العامة', truth: 'الحقيقة: نساء الصدر الأول شاركن في كل مناحي الحياة. نسيبة بنت كعب قاتلت في أُحد ودافعت عن النبي. أسماء بنت أبي بكر حملت الطعام للنبي وأبيها في الهجرة. الشفاء بنت عبد الله ولّاها عمر بن الخطاب الحسبة في السوق. خولة بنت ثعلبة جادلت النبي فنزل فيها قرآن يُتلى.' },
      en: { title: "Women's Participation in Public Life", myth: "The myth: A woman's place is only at home", truth: "The truth: Early Muslim women participated in every aspect of life. Nusaybah bint Ka'b fought at Uhud defending the Prophet. Asma bint Abu Bakr carried food during the Hijra. Al-Shifa bint Abdullah was appointed by Umar ibn al-Khattab to oversee the marketplace. Khawla bint Tha'laba argued with the Prophet and Quran was revealed about her case." },
      fr: { title: "La participation des femmes a la vie publique", myth: "Le mythe : La place de la femme est uniquement a la maison", truth: "La verite : Les premieres musulmanes ont participe a tous les aspects de la vie. Nusaybah bint Ka'b a combattu a Uhud pour defendre le Prophete. Al-Shifa bint Abdullah a ete nommee par Umar pour superviser le marche." },
    },
    {
      id: 3, icon: '\u2696\uFE0F',
      ar: { title: 'العادات الثقافية ليست دينا', myth: 'الخرافة: تقاليد المجتمع في معاملة المرأة = أحكام إسلامية', truth: 'الحقيقة: يحذر الشيخ الغزالي بشدة من الخلط بين العادات والدين. كثير من الظلم الذي تتعرض له المرأة هو عادات جاهلية أو تقاليد ثقافية ألبسوها ثوب الدين. جرائم الشرف ليست من الإسلام. منع الميراث ليس من الإسلام. إجبار الفتاة على الزواج ليس من الإسلام. كل هذا ظلم يرفضه الإسلام.' },
      en: { title: 'Cultural Customs Are Not Religion', myth: 'The myth: Cultural traditions about women = Islamic rulings', truth: "The truth: Sheikh al-Ghazali strongly warns against confusing customs with religion. Much of the injustice women face comes from pre-Islamic or cultural traditions dressed in religious garb. Honor killings are not from Islam. Denying inheritance is not from Islam. Forcing girls into marriage is not from Islam. All of this is injustice that Islam rejects." },
      fr: { title: "Les coutumes culturelles ne sont pas la religion", myth: "Le mythe : Les traditions culturelles sur les femmes = regles islamiques", truth: "La verite : Le Cheikh al-Ghazali met fortement en garde contre la confusion entre coutumes et religion. Beaucoup d'injustices subies par les femmes viennent de traditions pre-islamiques deguisees en religion. Les crimes d'honneur ne sont pas de l'Islam." },
    },
  ];

  /* ========== QUIZ DATA (17 total) ========== */
  const QUIZ = [
    { isIslamic: false,
      ar: { q: 'طلب البركة والشفاء من أضرحة الأولياء الصالحين', feedback: 'ليس من الإسلام. طلب الحوائج يكون من الله مباشرة. زيارة القبور مشروعة للاتعاظ فقط.' },
      en: { q: 'Seeking blessings and healing from the shrines of righteous saints', feedback: 'Not from Islam. Asking for needs should be directed to God alone. Visiting graves is permitted only for reflection.' },
      fr: { q: 'Chercher des benedictions et la guerison aupres des sanctuaires de saints', feedback: "Ce n'est pas de l'Islam. Les demandes doivent etre adressees a Dieu seul." },
    },
    { isIslamic: true,
      ar: { q: 'طلب العلم فريضة على كل مسلم ومسلمة', feedback: 'نعم، هذا حديث نبوي صحيح. العلم فريضة على الجميع بلا استثناء.' },
      en: { q: 'Seeking knowledge is an obligation upon every Muslim, male and female', feedback: 'Yes, this is an authentic Prophetic saying. Knowledge is obligatory for everyone.' },
      fr: { q: 'La recherche du savoir est une obligation pour chaque musulman, homme et femme', feedback: "Oui, c'est un hadith prophetique authentique." },
    },
    { isIslamic: false,
      ar: { q: 'باب الاجتهاد مغلق ولا يحق لأحد التفكير في المسائل الفقهية', feedback: 'ليس من الإسلام. الاجتهاد فريضة إسلامية. القرآن يحث على التفكر والتدبر.' },
      en: { q: 'The door of ijtihad is closed and nobody can think about jurisprudential matters', feedback: 'Not from Islam. Ijtihad is an Islamic obligation. The Quran encourages reflection.' },
      fr: { q: "La porte de l'ijtihad est fermee et personne ne peut reflechir aux questions juridiques", feedback: "Ce n'est pas de l'Islam. L'ijtihad est une obligation islamique." },
    },
    { isIslamic: true,
      ar: { q: 'الابتسامة في وجه أخيك صدقة', feedback: 'نعم، هذا حديث نبوي. الإسلام يجعل كل عمل خير عبادة.' },
      en: { q: 'Smiling at your brother is charity', feedback: 'Yes, this is a Prophetic saying. Islam makes every good deed an act of worship.' },
      fr: { q: 'Sourire a votre frere est une charite', feedback: "Oui, c'est un hadith prophetique." },
    },
    { isIslamic: false,
      ar: { q: 'المرأة لا يحق لها دخول المسجد أو طلب العلم', feedback: 'ليس من الإسلام. النبي قال: "لا تمنعوا إماء الله مساجد الله". وطلب العلم فريضة على الجميع.' },
      en: { q: 'Women are not allowed to enter mosques or seek knowledge', feedback: "Not from Islam. The Prophet said: \"Do not prevent God's female servants from God's mosques.\"" },
      fr: { q: "Les femmes ne sont pas autorisees a entrer dans les mosquees", feedback: "Ce n'est pas de l'Islam. Le Prophete a dit : \"N'empechez pas les servantes de Dieu d'acceder aux mosquees.\"" },
    },
    { isIslamic: true,
      ar: { q: 'إتقان العمل عبادة وكل عمل حلال يمكن أن يكون قربة لله', feedback: 'نعم، من صميم الإسلام. لا فصل بين الدين والحياة.' },
      en: { q: 'Excellence in work is worship, and every lawful work can be an act of devotion', feedback: 'Yes, this is core to Islam. There is no separation between religion and life.' },
      fr: { q: "L'excellence au travail est un culte, et tout travail licite peut etre un acte de devotion", feedback: "Oui, c'est au coeur de l'Islam." },
    },
    { isIslamic: false,
      ar: { q: 'الدين هو الصلاة والصيام فقط، ولا علاقة له بالأخلاق والعدل', feedback: 'ليس من الإسلام. الإسلام يربط العبادة بالأخلاق. قال النبي: "إنما بُعثت لأتمم مكارم الأخلاق".' },
      en: { q: 'Religion is only prayer and fasting, and has nothing to do with ethics and justice', feedback: 'Not from Islam. Islam ties worship to ethics inseparably.' },
      fr: { q: "La religion n'est que priere et jeune, et n'a rien a voir avec l'ethique", feedback: "Ce n'est pas de l'Islam. L'Islam lie le culte a l'ethique de maniere inseparable." },
    },
    { isIslamic: true,
      ar: { q: 'الشريعة الإسلامية تهدف إلى حماية الدين والنفس والعقل والنسل والمال', feedback: 'نعم، هذه هي مقاصد الشريعة الخمس.' },
      en: { q: "Islamic Shari'a aims to protect religion, life, intellect, lineage, and wealth", feedback: "Yes, these are the five objectives of Shari'a (Maqasid)." },
      fr: { q: 'La Charia islamique vise a proteger la religion, la vie, l\'intellect, la lignee et les biens', feedback: "Oui, ce sont les cinq objectifs de la Charia (Maqasid)." },
    },
    { isIslamic: false,
      ar: { q: 'يجب وجود واسطة بشرية بين العبد والله لقبول الدعاء', feedback: 'ليس من الإسلام. العلاقة بين العبد وربه مباشرة. لا كهنوت ولا وساطة في الإسلام.' },
      en: { q: 'A human intermediary between servant and God is needed for prayers to be accepted', feedback: 'Not from Islam. The relationship between a person and God is direct.' },
      fr: { q: 'Un intermediaire humain entre le serviteur et Dieu est necessaire pour que les prieres soient acceptees', feedback: "Ce n'est pas de l'Islam. La relation entre la personne et Dieu est directe." },
    },
    { isIslamic: true,
      ar: { q: 'النبي محمد أُرسل رحمة للعالمين جميعا وليس للمسلمين فقط', feedback: 'نعم، هذا نص قرآني صريح: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ".' },
      en: { q: 'Prophet Muhammad was sent as a mercy to all worlds, not just to Muslims', feedback: "Yes, this is an explicit Quranic verse (21:107)." },
      fr: { q: 'Le Prophete Muhammad a ete envoye comme misericorde pour tous les mondes', feedback: "Oui, c'est un verset coranique explicite (21:107)." },
    },
    { isIslamic: false,
      ar: { q: 'الأذان يجب أن يكون عرضا غنائيا يُظهر فيه المؤذن مهاراته الصوتية', feedback: 'ليس من الإسلام. الأذان نداء جاد وواضح للصلاة.' },
      en: { q: 'The Adhan should be a vocal performance where the muezzin showcases his skills', feedback: "Not from Islam. The Adhan is a serious, clear call to prayer." },
      fr: { q: "L'Adhan devrait etre une performance vocale ou le muezzin montre ses talents", feedback: "Ce n'est pas de l'Islam. L'Adhan est un appel serieux et clair a la priere." },
    },
    { isIslamic: false,
      ar: { q: 'الذكر الصحيح هو ترديد الكلمات بأسرع ما يمكن على المسبحة بلا تدبر', feedback: 'ليس من الإسلام. الذكر الحقيقي هو حضور القلب مع الله.' },
      en: { q: 'Proper dhikr is repeating words as fast as possible on prayer beads without contemplation', feedback: 'Not from Islam. True dhikr is the presence of the heart with God.' },
      fr: { q: 'Le dhikr correct est de repeter les mots aussi vite que possible sans contemplation', feedback: "Ce n'est pas de l'Islam. Le vrai dhikr est la presence du coeur avec Dieu." },
    },
    /* ===== 5 NEW QUIZ QUESTIONS (13-17) ===== */
    { isIslamic: true,
      ar: { q: 'الشورى (التشاور) أساس الحكم في الإسلام', feedback: 'نعم، قال تعالى: "وَأَمْرُهُمْ شُورَى بَيْنَهُمْ". الاستبداد ليس من الإسلام.' },
      en: { q: 'Consultation (Shura) is the foundation of governance in Islam', feedback: 'Yes, God says: "And their affairs are conducted by mutual consultation." Tyranny is not from Islam.' },
      fr: { q: "La consultation (Shura) est le fondement de la gouvernance en Islam", feedback: "Oui, Dieu dit : \"Et leurs affaires sont conduites par consultation mutuelle.\" La tyrannie n'est pas de l'Islam." },
    },
    { isIslamic: false,
      ar: { q: 'كل أشكال الموسيقى والفن محرمة تحريما قاطعا في الإسلام', feedback: 'ليس من الإسلام. المسألة خلافية بين العلماء. الإمام أبو حامد الغزالي أجاز السماع بشروط. ما يحرم هو ما يصاحب المعاصي.' },
      en: { q: 'All forms of music and art are absolutely forbidden in Islam', feedback: 'Not from Islam. This is a matter of scholarly disagreement. Imam Abu Hamid al-Ghazali permitted listening under conditions. What is forbidden accompanies sin, not sound itself.' },
      fr: { q: "Toutes les formes de musique et d'art sont absolument interdites en Islam", feedback: "Ce n'est pas de l'Islam. C'est un sujet de desaccord entre savants." },
    },
    { isIslamic: true,
      ar: { q: 'حماية غير المسلمين وحرياتهم الدينية واجب إسلامي', feedback: 'نعم، عهد عمر بن الخطاب لأهل القدس من أعظم وثائق حقوق الإنسان. قال النبي: "من آذى ذميا فقد آذاني".' },
      en: { q: 'Protecting non-Muslims and their religious freedoms is an Islamic duty', feedback: "Yes, Umar's Covenant to the people of Jerusalem is one of history's greatest human rights documents." },
      fr: { q: "Proteger les non-musulmans et leurs libertes religieuses est un devoir islamique", feedback: "Oui, le Pacte d'Umar aux habitants de Jerusalem est l'un des plus grands documents des droits de l'homme." },
    },
    { isIslamic: false,
      ar: { q: 'التصوف كله ضلالة وخروج عن الإسلام بلا استثناء', feedback: 'ليس من الإسلام اعتبار كل التصوف ضلالة. التصوف السني القائم على الكتاب والسنة جزء أصيل من التراث الإسلامي.' },
      en: { q: 'All Sufism is misguidance and departure from Islam without exception', feedback: 'This view is not from Islam. Sunni Sufism based on Quran and Sunnah is an authentic part of Islamic heritage.' },
      fr: { q: "Tout le soufisme est un egarement et un ecart de l'Islam sans exception", feedback: "Ce n'est pas de l'Islam. Le soufisme sunnite base sur le Coran et la Sunnah fait partie du patrimoine islamique." },
    },
    { isIslamic: true,
      ar: { q: 'البحث العلمي وملاحظة الطبيعة من صميم تعاليم الإسلام', feedback: 'نعم، القرآن يحث على التفكر في الكون في عشرات الآيات. العلماء المسلمون أسسوا المنهج التجريبي.' },
      en: { q: 'Scientific research and observing nature are core Islamic teachings', feedback: 'Yes, the Quran urges reflection on the universe in dozens of verses. Muslim scholars established the experimental method.' },
      fr: { q: "La recherche scientifique et l'observation de la nature sont des enseignements fondamentaux de l'Islam", feedback: "Oui, le Coran exhorte a la reflexion sur l'univers dans des dizaines de versets." },
    },
  ];

  /* ========== STATE ========== */
  let currentLang = localStorage.getItem('ghirbal-lang') || 'ar';
  let currentTheme = localStorage.getItem('ghirbal-theme'); if(!currentTheme || currentTheme==='null' || !['kashf','haqiqa','noor'].includes(currentTheme)) currentTheme='kashf';
  let quizIndex = 0;
  let quizCorrect = parseInt(localStorage.getItem('ghirbal-quiz-correct') || '0', 10);
  let quizTotal = parseInt(localStorage.getItem('ghirbal-quiz-total') || '0', 10);
  let quizOrder = [];
  let audioCtx = null;
  let currentSearchTerm = '';
  let currentFilterCat = 'all';

  /* ========== DOM REFS ========== */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ========== SOUND (Web Audio API) ========== */
  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playTone(freq, dur, type) {
    try {
      initAudio();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type || 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
    } catch (e) { /* ignore audio errors */ }
  }

  function playClick() { playTone(800, 0.08, 'sine'); }
  function playCorrect() { playTone(523, 0.12, 'sine'); setTimeout(() => playTone(659, 0.12, 'sine'), 120); setTimeout(() => playTone(784, 0.2, 'sine'), 240); }
  function playWrong() { playTone(300, 0.15, 'sawtooth'); setTimeout(() => playTone(250, 0.25, 'sawtooth'), 150); }
  function playTab() { playTone(600, 0.06, 'triangle'); }

  /* ========== SPLASH SCREEN ========== */
  function runSplash() {
    const splash = $('#splash');
    const countdown = $('#splashCountdown');
    const barFill = $('#splashBarFill');
    let count = 3;

    const interval = setInterval(() => {
      count--;
      if (countdown) countdown.textContent = count;
      if (barFill) barFill.style.width = ((3 - count) / 3 * 100) + '%';
      if (count <= 0) {
        clearInterval(interval);
        splash.classList.add('fade-out');
        setTimeout(() => {
          splash.classList.add('hidden');
          $('#app').classList.remove('hidden');
          initScrollReveal();
          animateCounter();
        }, 600);
      }
    }, 1000);

    if (barFill) barFill.style.width = '0%';
  }

  /* ========== COUNTER ANIMATION ========== */
  function animateCounter() {
    const counterEl = $('#counterNumber');
    if (!counterEl) return;
    const target = MYTHS.length;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counterEl.textContent = current;
    }, 50);
  }

  /* ========== SCROLL REVEAL (IntersectionObserver) ========== */
  function initScrollReveal() {
    const elements = $$('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('revealed'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ========== i18n ========== */
  window.applyLang = function(lang) {
    currentLang = lang;
    localStorage.setItem('ghirbal-lang', lang);

    const html = document.documentElement;
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', lang);
    }

    // Update all data-i18n elements
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (T[lang] && T[lang][key]) {
        el.textContent = T[lang][key];
      }
    });

    // Update placeholder text
    $$('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (T[lang] && T[lang][key]) {
        el.placeholder = T[lang][key];
      }
    });

    // Sacred bar — always Arabic, no translation needed

    // Update lang button active states
    $$('.lang-opt').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Re-render dynamic content
    renderMyths();
    renderTruths();
    renderWomenRights();
    renderQuizQuestion();
    updateDailyMyth();
    updateQuizScore();
    updateQuizProgress();
  }

  /* ========== THEME ========== */
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('ghirbal-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    $$('.theme-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
  }

  /* ========== TAB NAVIGATION ========== */
  function switchTab(tabName) {
    $$('.tab-panel').forEach((p) => p.classList.remove('active'));
    $$('.tab-btn').forEach((b) => b.classList.remove('active'));

    const panel = $(`#panel${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    const btn = $(`.tab-btn[data-tab="${tabName}"]`);

    if (panel) panel.classList.add('active');
    if (btn) btn.classList.add('active');

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-init scroll reveal for new tab
    setTimeout(initScrollReveal, 100);

    playTab();
    // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

  /* ========== SHARE FUNCTIONALITY ========== */
  function shareMyth(mythId) {
    const myth = MYTHS.find(m => m.id === mythId);
    if (!myth) return;
    const d = myth[currentLang];
    const shareText = '\u26D4 ' + d.practice + '\n\n\u2705 ' + d.alternative;
    const shareTitle = T[currentLang].appTitle;

    if (navigator.share) {
      navigator.share({ title: shareTitle, text: shareText }).catch(() => {});
    } else {
      // Clipboard fallback
      navigator.clipboard.writeText(shareText).then(() => {
        showToast(T[currentLang].toastCopied);
      }).catch(() => {
        // Final fallback
        const ta = document.createElement('textarea');
        ta.value = shareText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(T[currentLang].toastCopied);
      });
    }
  }

  /* ========== MYTH CARDS ========== */
  function renderMyths() {
    const container = $('#mythsContainer');
    if (!container) return;

    const lang = currentLang;
    const t = T[lang];

    let filtered = currentFilterCat === 'all' ? MYTHS : MYTHS.filter((m) => m.cat === currentFilterCat);

    // Apply search filter
    if (currentSearchTerm) {
      const term = currentSearchTerm.toLowerCase();
      filtered = filtered.filter((m) => {
        const d = m[lang];
        return d.practice.toLowerCase().includes(term) ||
               d.why.toLowerCase().includes(term) ||
               d.evidence.toLowerCase().includes(term) ||
               d.alternative.toLowerCase().includes(term);
      });
    }

    container.innerHTML = filtered.map((myth) => {
      const d = myth[lang];
      return `
        <div class="myth-card" data-myth-id="${myth.id}">
          <div class="myth-card-header" role="button" tabindex="0" aria-expanded="false">
            <span class="myth-badge">\u26D4</span>
            <div class="myth-header-text">
              <div class="myth-practice">${d.practice}</div>
              <span class="myth-category">${d.catLabel}</span>
            </div>
            <span class="myth-expand-icon">\u25BC</span>
          </div>
          <div class="myth-card-body">
            <div class="myth-section why-section">
              <div class="myth-section-label">\u2753 ${t.whyLabel}</div>
              <div class="myth-section-content">${d.why}</div>
            </div>
            <div class="myth-section evidence-section">
              <div class="myth-section-label">\uD83D\uDCD6 ${t.evidenceLabel}</div>
              <div class="myth-section-content">${d.evidence}</div>
            </div>
            <div class="myth-section alternative-section">
              <div class="myth-section-label">\u2705 ${t.alternativeLabel}</div>
              <div class="myth-section-content">${d.alternative}</div>
            </div>
            <button class="myth-share-btn" data-share-id="${myth.id}">\uD83D\uDD17 ${t.shareLabel}</button>
          </div>
        </div>
      `;
    }).join('');

    // Attach expand listeners
    container.querySelectorAll('.myth-card-header').forEach((header) => {
      header.addEventListener('click', () => {
        const card = header.closest('.myth-card');
        const isExpanded = card.classList.contains('expanded');
        card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', !isExpanded);
        playClick();
      });
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    });

    // Attach share listeners
    container.querySelectorAll('.myth-share-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        shareMyth(parseInt(btn.getAttribute('data-share-id'), 10));
        playClick();
      });
    });
  }

  /* ========== TRUTH CARDS ========== */
  function renderTruths() {
    const container = $('#truthContainer');
    if (!container) return;

    const lang = currentLang;

    container.innerHTML = TRUTHS.map((truth) => {
      const d = truth[lang];
      return `
        <div class="truth-card reveal-on-scroll" data-truth-id="${truth.id}">
          <div class="truth-card-header" role="button" tabindex="0" aria-expanded="false">
            <span class="truth-icon">${truth.icon}</span>
            <span class="truth-title">${d.title}</span>
            <span class="truth-expand-icon">\u25BC</span>
          </div>
          <div class="truth-card-body">
            <div class="truth-content">${d.content}</div>
          </div>
        </div>
      `;
    }).join('');

    // Attach expand listeners
    container.querySelectorAll('.truth-card-header').forEach((header) => {
      header.addEventListener('click', () => {
        const card = header.closest('.truth-card');
        const isExpanded = card.classList.contains('expanded');
        card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', !isExpanded);
        playClick();
      });
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
      });
    });
  }

  /* ========== WOMEN'S RIGHTS CARDS ========== */
  function renderWomenRights() {
    const container = $('#womenContainer');
    if (!container) return;

    const lang = currentLang;

    container.innerHTML = WOMEN_RIGHTS.map((item) => {
      const d = item[lang];
      return `
        <div class="women-card reveal-on-scroll" data-women-id="${item.id}">
          <div class="women-card-header" role="button" tabindex="0" aria-expanded="false">
            <span class="women-icon">${item.icon}</span>
            <span class="women-title">${d.title}</span>
            <span class="women-expand-icon">\u25BC</span>
          </div>
          <div class="women-card-body">
            <div class="women-myth-label">\u274C ${d.myth}</div>
            <div class="women-content">
              <div class="women-truth-label">\u2705 ${d.truth}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach expand listeners
    container.querySelectorAll('.women-card-header').forEach((header) => {
      header.addEventListener('click', () => {
        const card = header.closest('.women-card');
        const isExpanded = card.classList.contains('expanded');
        card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', !isExpanded);
        playClick();
      });
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
      });
    });
  }

  /* ========== QUIZ ========== */
  function shuffleQuiz() {
    quizOrder = QUIZ.map((_, i) => i);
    for (let i = quizOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quizOrder[i], quizOrder[j]] = [quizOrder[j], quizOrder[i]];
    }
    quizIndex = 0;
  }

  function updateQuizProgress() {
    const progressFill = $('#quizProgressFill');
    const progressText = $('#quizProgressText');
    if (!progressFill || !progressText) return;

    const current = quizIndex + 1;
    const total = QUIZ.length;
    const pct = (current / total) * 100;

    progressFill.style.width = pct + '%';
    const template = T[currentLang].quizProgress || 'Question {current} of {total}';
    progressText.textContent = template.replace('{current}', current).replace('{total}', total);
  }

  function renderQuizQuestion() {
    if (quizOrder.length === 0) shuffleQuiz();

    const feedback = $('#quizFeedback');
    const nextBtn = $('#quizNext');
    const trueBtn = $('#quizTrue');
    const falseBtn = $('#quizFalse');
    const questionEl = $('#quizQuestion');
    const quizCard = $('#quizCard');

    if (!questionEl) return;

    if (quizIndex >= quizOrder.length) {
      shuffleQuiz();
    }

    const qData = QUIZ[quizOrder[quizIndex]];
    const d = qData[currentLang];

    questionEl.textContent = d.q;

    // Reset buttons and verdict animation
    if (feedback) { feedback.classList.add('hidden'); feedback.className = 'quiz-feedback hidden'; }
    if (nextBtn) nextBtn.classList.add('hidden');
    if (trueBtn) { trueBtn.disabled = false; trueBtn.className = 'quiz-btn quiz-btn-true'; }
    if (falseBtn) { falseBtn.disabled = false; falseBtn.className = 'quiz-btn quiz-btn-false'; }
    if (quizCard) { quizCard.classList.remove('verdict-correct', 'verdict-wrong'); }

    updateQuizProgress();
  }

  function handleQuizAnswer(userSaidTrue) {
    const qData = QUIZ[quizOrder[quizIndex]];
    const d = qData[currentLang];
    const isCorrect = (userSaidTrue === qData.isIslamic);

    const feedback = $('#quizFeedback');
    const nextBtn = $('#quizNext');
    const trueBtn = $('#quizTrue');
    const falseBtn = $('#quizFalse');
    const quizCard = $('#quizCard');

    quizTotal++;
    if (isCorrect) quizCorrect++;

    localStorage.setItem('ghirbal-quiz-correct', quizCorrect);
    localStorage.setItem('ghirbal-quiz-total', quizTotal);

    // Highlight buttons
    if (trueBtn) {
      trueBtn.disabled = true;
      if (qData.isIslamic) trueBtn.classList.add('correct');
      else if (userSaidTrue) trueBtn.classList.add('wrong');
    }
    if (falseBtn) {
      falseBtn.disabled = true;
      if (!qData.isIslamic) falseBtn.classList.add('correct');
      else if (!userSaidTrue) falseBtn.classList.add('wrong');
    }

    // Verdict animation
    if (quizCard) {
      quizCard.classList.remove('verdict-correct', 'verdict-wrong');
      quizCard.classList.add(isCorrect ? 'verdict-correct' : 'verdict-wrong');
    }

    // Show feedback
    if (feedback) {
      feedback.textContent = d.feedback;
      feedback.classList.remove('hidden', 'feedback-correct', 'feedback-wrong');
      feedback.classList.add(isCorrect ? 'feedback-correct' : 'feedback-wrong');
    }

    if (nextBtn) nextBtn.classList.remove('hidden');

    updateQuizScore();

    if (isCorrect) {
      playCorrect();
      showToast(T[currentLang].toastCorrect);
    } else {
      playWrong();
      showToast(T[currentLang].toastWrong);
    }
  }

  function updateQuizScore() {
    const display = $('#quizScoreDisplay');
    if (display) display.textContent = `${quizCorrect}/${quizTotal}`;
  }

  function resetQuiz() {
    quizCorrect = 0;
    quizTotal = 0;
    localStorage.setItem('ghirbal-quiz-correct', '0');
    localStorage.setItem('ghirbal-quiz-total', '0');
    shuffleQuiz();
    renderQuizQuestion();
    updateQuizScore();
    showToast(T[currentLang].toastQuizReset);
    playClick();
  }

  /* ========== DAILY MYTH-BUST ========== */
  function updateDailyMyth() {
    const mythEl = $('#dailyMyth');
    const realityEl = $('#dailyReality');
    if (!mythEl || !realityEl) return;

    const idx = Math.floor(Math.random() * MYTHS.length);
    const d = MYTHS[idx][currentLang];

    mythEl.textContent = '\u26D4 ' + d.practice;
    realityEl.textContent = '\u2705 ' + d.alternative.split('.')[0] + '.';
  }

  /* ========== TOAST ========== */
  function showToast(msg) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.add('hidden'), 2500);
  }

  /* ========== SCROLL TO TOP ========== */
  function handleScroll() {
    const btn = $('#scrollTopBtn');
    if (!btn) return;
    if (window.scrollY > 400) {
      btn.classList.remove('hidden');
    } else {
      btn.classList.add('hidden');
    }
  }

  /* ========== SEARCH ========== */
  function setupSearch() {
    const input = $('#mythSearchInput');
    if (!input) return;

    input.addEventListener('input', () => {
      currentSearchTerm = input.value.trim();
      renderMyths();
    });
  }

  /* ========== FILTER BUTTONS ========== */
  function setupFilters() {
    $$('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilterCat = btn.getAttribute('data-cat');
        renderMyths();
        playClick();
      });
    });
  }

  /* ========== EVENT LISTENERS ========== */
  function setupEvents() {
    // Language switches
    $$('.lang-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLang(btn.getAttribute('data-lang'));
        playClick();
      });
    });

    // Theme switches (only for buttons with data-theme attribute, not the cycle button)
    $$('.theme-btn[data-theme]').forEach((btn) => {
      if (btn.id === 'themeToggle') return; // skip cycle button
      btn.addEventListener('click', () => {
        applyTheme(btn.getAttribute('data-theme'));
        playClick();
      });
    });

    // Bottom tabs
    $$('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        switchTab(btn.getAttribute('data-tab'));
      });
    });

    // Nav cards on home
    $$('.nav-card').forEach((card) => {
      card.addEventListener('click', () => {
        const target = card.getAttribute('data-target');
        switchTab(target);
        playClick();
      });
    });

    // Quiz buttons
    const quizTrue = $('#quizTrue');
    const quizFalse = $('#quizFalse');
    const quizNext = $('#quizNext');
    const quizResetBtn = $('#quizResetBtn');

    if (quizTrue) quizTrue.addEventListener('click', () => handleQuizAnswer(true));
    if (quizFalse) quizFalse.addEventListener('click', () => handleQuizAnswer(false));
    if (quizNext) quizNext.addEventListener('click', () => {
      quizIndex++;
      renderQuizQuestion();
      playClick();
    });
    if (quizResetBtn) quizResetBtn.addEventListener('click', resetQuiz);

    // Daily myth refresh
    const dailyRefresh = $('#dailyRefresh');
    if (dailyRefresh) dailyRefresh.addEventListener('click', () => {
      updateDailyMyth();
      playClick();
    });

    // Help panel
    const helpBtn = $('#helpBtn');
    const helpOverlay = $('#helpOverlay');
    const helpClose = $('#helpClose');

    if (helpBtn) helpBtn.addEventListener('click', () => {
      helpOverlay.classList.remove('hidden');
      playClick();
    });
    if (helpClose) helpClose.addEventListener('click', () => {
      helpOverlay.classList.add('hidden');
      playClick();
    });
    if (helpOverlay) helpOverlay.addEventListener('click', (e) => {
      if (e.target === helpOverlay) helpOverlay.classList.add('hidden');
    });

    // Dua panel
    const duaFab = $('#duaFab');
    const duaOverlay = $('#duaOverlay');
    const duaClose = $('#duaClose');

    if (duaFab) duaFab.addEventListener('click', () => {
      duaOverlay.classList.remove('hidden');
      playClick();
    });
    if (duaClose) duaClose.addEventListener('click', () => {
      duaOverlay.classList.add('hidden');
      playClick();
    });
    if (duaOverlay) duaOverlay.addEventListener('click', (e) => {
      if (e.target === duaOverlay) duaOverlay.classList.add('hidden');
    });

    // Scroll to top
    const scrollTopBtn = $('#scrollTopBtn');
    if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playClick();
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Keyboard: Escape to close overlays
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (helpOverlay && !helpOverlay.classList.contains('hidden')) helpOverlay.classList.add('hidden');
        if (duaOverlay && !duaOverlay.classList.contains('hidden')) duaOverlay.classList.add('hidden');
      }
    });

    // Filter buttons
    setupFilters();

    // Search
    setupSearch();
  }

  /* ========== INIT ========== */
  function init() {
    runSplash();
    applyTheme(currentTheme);
    applyLang(currentLang);
    shuffleQuiz();
    renderQuizQuestion();
    updateQuizScore();
    updateQuizProgress();
    updateDailyMyth();
    renderWomenRights();
    setupEvents();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Global wrappers for hajj-guide style header onclick handlers
  const themes = ['kashf','haqiqa','noor'];
  const themeIcons = ['🌙','☀️','🌿'];
  window.cycleTheme = function() {
    const idx = (themes.indexOf(currentTheme) + 1) % themes.length;
    applyTheme(themes[idx]);
    const icon = document.querySelector('.theme-icon');
    if (icon) icon.textContent = themeIcons[idx];
    playClick();
  };
  window.toggleHelp = function() {
    const overlay = $('#helpOverlay');
    if (overlay) overlay.classList.toggle('hidden');
    playClick();
  };

})();

/* TICKER — hajj-guide rich content */
function startTicker(){
  var el=document.getElementById('tickerText');
  if(!el)return;
  var tips={
    ar:['⛔ ١٥ خرافة تم كشفها','🔍 اختبر معلوماتك: هل هذا من الإسلام؟','✅ الإسلام دين الرحمة والعدل والعلم','👩 حقوق المرأة في الإسلام الحقيقي','📖 مبني على كتاب "ليس من الإسلام" للشيخ محمد الغزالي رحمه الله','🤲 اللّهُمّ أَرِنا الحَقَّ حَقّاً وارزُقنا اتِّباعَهُ','💡 Powered by workshop-diy.org'],
    en:['⛔ 15 myths exposed','🔍 Test yourself: Is this from Islam?','✅ Islam is the religion of mercy, justice and knowledge','👩 Women\'s rights in authentic Islam','📖 Based on "This is Not Islam" by Sheikh al-Ghazali','🤲 O God, show us truth as truth and grant us to follow it','💡 Powered by workshop-diy.org'],
    fr:['⛔ 15 mythes exposés','🔍 Testez-vous : Est-ce de l\'Islam ?','✅ L\'Islam est la religion de la miséricorde, de la justice et du savoir','👩 Les droits des femmes dans l\'Islam authentique','📖 Basé sur le livre du Sheikh al-Ghazali','🤲 Ô Dieu, montre-nous la vérité et accorde-nous de la suivre','💡 Powered by workshop-diy.org']
  };
  var lang=document.documentElement.lang||'ar';
  var msgs=tips[lang]||tips.ar;
  var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  var dur=Math.max(25,txt.length*0.12);
  el.style.animation='tickerMarquee '+dur+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
