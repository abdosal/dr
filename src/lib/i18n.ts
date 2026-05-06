export type Lang = "fr" | "ar";

export const translations = {
  fr: {
    meta: {
      title: "El haila dental clinique | Clinique dentaire premium",
      description:
        "El haila dental clinique propose des soins dentaires modernes, esthétiques et sans douleur. Réservez votre consultation en ligne.",
    },
    ui: {
      language: "Langue",
      address: "Adresse",
      phone: "Téléphone",
      hours: "Horaires",
      before: "Avant",
      after: "Après",
      yearsCaring: "ans à prendre soin des sourires",
      mapTitle: "Localisation de la clinique",
      scrollTop: "Retour en haut",
      whatsapp: "WhatsApp",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      pricing: "Tarifs",
      results: "Résultats",
      faq: "FAQ",
      contact: "Contact",
      book: "Prendre RDV",
    },
    hero: {
      badge: "Clinique dentaire premium",
      title: "Votre sourire,",
      titleAccent: "notre passion",
      subtitle:
        "Soins dentaires modernes, esthétiques et sans douleur. Une équipe dévouée et des technologies de pointe pour révéler le meilleur de votre sourire.",
      ctaPrimary: "Réserver une consultation",
      ctaSecondary: "Découvrir nos soins",
      videoTitle: "Visite virtuelle",
      videoSubtitle: "2 min",
      stats: [
        { value: "15+", label: "Années d'expérience" },
        { value: "8 000+", label: "Patients satisfaits" },
        { value: "20+", label: "Services dentaires" },
        { value: "4.9★", label: "Note moyenne" },
      ],
    },
    trust: {
      title: "Pourquoi nous choisir",
      items: [
        {
          title: "Équipe certifiée",
          desc: "Dentistes experts formés en France et à l'international.",
        },
        {
          title: "Technologie moderne",
          desc: "Scanner 3D, laser et imagerie numérique de dernière génération.",
        },
        {
          title: "Soins sans douleur",
          desc: "Anesthésie ciblée et protocoles doux pour votre confort.",
        },
        {
          title: "Hygiène irréprochable",
          desc: "Stérilisation hospitalière et protocoles stricts.",
        },
      ],
    },
    about: {
      title: "Une clinique pensée pour vous",
      subtitle: "À propos de El haila dental clinique",
      desc: "Depuis plus de 15 ans, El haila dental clinique offre des soins dentaires d'excellence dans un environnement apaisant. Notre approche allie expertise médicale, esthétique soignée et écoute personnalisée.",
      bullets: [
        "Diagnostic personnalisé et plan de traitement clair",
        "Équipement de pointe pour des résultats précis",
        "Approche douce, idéale pour les patients anxieux",
        "Suivi post-traitement attentif",
      ],
    },
    services: {
      title: "Nos services",
      subtitle: "Une gamme complète de soins",
      from: "À partir de",
      list: [
        { name: "Détartrage", desc: "Nettoyage profond et polissage", price: "600 MAD" },
        { name: "Blanchiment", desc: "Sourire éclatant en une séance", price: "3 500 MAD" },
        { name: "Soins esthétiques", desc: "Facettes et composites", price: "4 500 MAD" },
        { name: "Implants", desc: "Restauration durable et esthétique", price: "12 000 MAD" },
        { name: "Orthodontie", desc: "Aligneurs invisibles et bagues", price: "18 000 MAD" },
        { name: "Couronnes", desc: "Céramique haute qualité", price: "6 500 MAD" },
        { name: "Parodontie", desc: "Soin des gencives et prévention", price: "1 200 MAD" },
        { name: "Urgences", desc: "Prise en charge rapide 7j/7", price: "800 MAD" },
      ],
    },
    pricing: {
      title: "Tarifs transparents",
      subtitle: "Aucune mauvaise surprise",
      cols: ["Soin", "Description", "Tarif"],
    },
    results: {
      title: "Avant / Après",
      subtitle: "Des résultats qui parlent",
      cases: [
        { title: "Blanchiment dentaire", desc: "Sourire éclairci de 8 teintes en une séance." },
        { title: "Facettes esthétiques", desc: "Reconstruction harmonieuse du sourire." },
        { title: "Alignement invisible", desc: "Dents parfaitement alignées en 9 mois." },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Les soins sont-ils douloureux ?",
          a: "Nos protocoles modernes garantissent des soins confortables. Nous expliquons chaque étape avant le traitement.",
        },
        {
          q: "Acceptez-vous la mutuelle ?",
          a: "Oui, nous travaillons avec de nombreuses mutuelles. Un devis détaillé vous est toujours remis.",
        },
        {
          q: "Combien de temps dure un blanchiment ?",
          a: "Une séance dure environ 1 heure. Les résultats sont visibles immédiatement et peuvent durer jusqu'à 2 ans.",
        },
        {
          q: "Recevez-vous les urgences ?",
          a: "Oui, nous proposons des créneaux d'urgence 7 jours sur 7. Appelez-nous directement.",
        },
        {
          q: "Quels moyens de paiement acceptez-vous ?",
          a: "Carte, espèces, virement et paiement en plusieurs fois pour certains soins.",
        },
      ],
    },
    contact: {
      title: "Prendre rendez-vous",
      subtitle: "Nous contacter",
      desc: "Réservez votre consultation en ligne ou contactez-nous directement.",
      form: {
        name: "Nom complet",
        email: "Email",
        phone: "Téléphone",
        service: "Service souhaité",
        date: "Date préférée",
        time: "Heure",
        message: "Message (optionnel)",
        submit: "Envoyer la demande",
        sending: "Envoi en cours...",
        whatsapp: "Réserver via WhatsApp",
        whatsappIntro: "Bonjour, je souhaite réserver un rendez-vous.",
        success: "Demande envoyée. Nous vous recontactons rapidement.",
        error: "L'envoi a échoué. Veuillez réessayer.",
        missing: "Formulaire non configuré. Utilisez WhatsApp pour réserver.",
        errors: {
          name: "Nom requis (2 caractères minimum)",
          email: "Email invalide",
          phone: "Téléphone invalide",
          service: "Sélectionnez un service",
          date: "Date requise",
          time: "Heure requise",
        },
      },
      info: {
        address: "1er étage appartement 1, HCV4+J38, Rue Neufchatel, Casablanca 20250",
        phone: "0625736778",
        hours: "Lun-Ven : 9h-19h • Sam : 9h-13h",
      },
    },
    footer: {
      tagline: "Soins dentaires d'excellence au cœur de Paris.",
      quickLinks: "Liens rapides",
      ourServices: "Nos services",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
  },
  ar: {
    meta: {
      title: "El haila dental clinique | عيادة أسنان راقية",
      description:
        "El haila dental clinique تقدم علاجات أسنان حديثة وتجميلية وبدون ألم. احجز موعدك بسهولة عبر الموقع.",
    },
    ui: {
      language: "اللغة",
      address: "العنوان",
      phone: "الهاتف",
      hours: "ساعات العمل",
      before: "قبل",
      after: "بعد",
      yearsCaring: "عامًا من العناية بالابتسامات",
      mapTitle: "موقع العيادة",
      scrollTop: "العودة إلى الأعلى",
      whatsapp: "واتساب",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      pricing: "الأسعار",
      results: "النتائج",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      book: "احجز موعدًا",
    },
    hero: {
      badge: "عيادة أسنان راقية",
      title: "ابتسامتك،",
      titleAccent: "شغفنا",
      subtitle:
        "رعاية أسنان حديثة وتجميلية وبدون ألم. فريق متخصص وتقنيات متقدمة لإبراز أجمل ما في ابتسامتك.",
      ctaPrimary: "احجز استشارة",
      ctaSecondary: "اكتشف خدماتنا",
      videoTitle: "جولة افتراضية",
      videoSubtitle: "دقيقتان",
      stats: [
        { value: "15+", label: "سنة من الخبرة" },
        { value: "8,000+", label: "مريض سعيد" },
        { value: "20+", label: "خدمة أسنان" },
        { value: "4.9★", label: "متوسط التقييم" },
      ],
    },
    trust: {
      title: "لماذا يختارنا المرضى",
      items: [
        {
          title: "فريق معتمد",
          desc: "أطباء أسنان ذوو خبرة وتكوين معتمد محليًا ودوليًا.",
        },
        {
          title: "تقنيات حديثة",
          desc: "ماسح ثلاثي الأبعاد وليزر وتصوير رقمي بأحدث المعايير.",
        },
        {
          title: "علاج بدون ألم",
          desc: "تخدير دقيق وبروتوكولات لطيفة لراحة أكبر.",
        },
        {
          title: "تعقيم صارم",
          desc: "معايير نظافة وتعقيم عالية المستوى داخل العيادة.",
        },
      ],
    },
    about: {
      title: "عيادة مصممة من أجلك",
      subtitle: "عن El haila dental clinique",
      desc: "منذ أكثر من 15 عامًا، تقدم El haila dental clinique رعاية أسنان متميزة في أجواء هادئة ومريحة. نجمع بين الخبرة الطبية واللمسة الجمالية والاهتمام الشخصي بكل مريض.",
      bullets: [
        "تشخيص مخصص وخطة علاج واضحة",
        "أجهزة متطورة لنتائج دقيقة",
        "أسلوب لطيف مناسب للمرضى القلقين",
        "متابعة دقيقة بعد العلاج",
      ],
    },
    services: {
      title: "خدماتنا",
      subtitle: "مجموعة متكاملة من العلاجات",
      from: "ابتداءً من",
      list: [
        { name: "إزالة الجير", desc: "تنظيف عميق وتلميع", price: "600 MAD" },
        { name: "تبييض الأسنان", desc: "ابتسامة أكثر إشراقًا في جلسة واحدة", price: "3 500 MAD" },
        { name: "تجميل الأسنان", desc: "قشور تجميلية وحشوات تجميلية", price: "4 500 MAD" },
        { name: "زراعة الأسنان", desc: "ترميم دائم وجمالي", price: "12 000 MAD" },
        { name: "تقويم الأسنان", desc: "مصففات شفافة وتقويم ثابت", price: "18 000 MAD" },
        { name: "التيجان", desc: "سيراميك عالي الجودة", price: "6 500 MAD" },
        { name: "علاج اللثة", desc: "عناية باللثة والوقاية", price: "1 200 MAD" },
        { name: "الحالات المستعجلة", desc: "استقبال سريع طوال الأسبوع", price: "800 MAD" },
      ],
    },
    pricing: {
      title: "أسعار واضحة",
      subtitle: "بدون مفاجآت",
      cols: ["العلاج", "الوصف", "السعر"],
    },
    results: {
      title: "قبل / بعد",
      subtitle: "نتائج تتحدث عن نفسها",
      cases: [
        { title: "تبييض الأسنان", desc: "تفتيح الابتسامة حتى 8 درجات في جلسة واحدة." },
        { title: "قشور تجميلية", desc: "إعادة بناء متناغمة لشكل الابتسامة." },
        { title: "تقويم شفاف", desc: "اصطفاف مثالي للأسنان خلال 9 أشهر." },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "هل العلاج مؤلم؟",
          a: "نستخدم بروتوكولات حديثة تجعل العلاج مريحًا قدر الإمكان، مع شرح واضح لكل خطوة.",
        },
        {
          q: "هل تقبلون التأمين الصحي؟",
          a: "نعم، نتعامل مع عدد من الجهات التأمينية، ونقدم دائمًا عرض سعر مفصل قبل العلاج.",
        },
        {
          q: "كم تستغرق جلسة التبييض؟",
          a: "تستغرق الجلسة حوالي ساعة واحدة، وتظهر النتائج مباشرة وقد تدوم حتى سنتين.",
        },
        {
          q: "هل تستقبلون الحالات المستعجلة؟",
          a: "نعم، نوفر مواعيد للحالات المستعجلة طوال أيام الأسبوع. اتصل بنا مباشرة.",
        },
        {
          q: "ما وسائل الدفع المتاحة؟",
          a: "نقبل البطاقة البنكية والنقد والتحويل، مع إمكانية الدفع على دفعات لبعض العلاجات.",
        },
      ],
    },
    contact: {
      title: "احجز موعدًا",
      subtitle: "تواصل معنا",
      desc: "احجز استشارتك عبر الموقع أو تواصل معنا مباشرة.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        service: "الخدمة المطلوبة",
        date: "التاريخ المفضل",
        time: "الوقت",
        message: "رسالة (اختياري)",
        submit: "إرسال الطلب",
        sending: "جارٍ الإرسال...",
        whatsapp: "الحجز عبر واتساب",
        whatsappIntro: "مرحبًا، أود حجز موعد.",
        success: "تم إرسال الطلب. سنتواصل معك قريبًا.",
        error: "فشل الإرسال. حاول مرة أخرى.",
        missing: "النموذج غير مفعّل حاليًا. استخدم واتساب للحجز.",
        errors: {
          name: "الاسم مطلوب (حرفان على الأقل)",
          email: "البريد الإلكتروني غير صالح",
          phone: "رقم الهاتف غير صالح",
          service: "اختر خدمة",
          date: "التاريخ مطلوب",
          time: "الوقت مطلوب",
        },
      },
      info: {
        address: "الطابق الأول، الشقة 1، HCV4+J38، Rue Neufchatel، الدار البيضاء 20250",
        phone: "0625736778",
        hours: "الاثنين - الجمعة: 9:00 - 19:00 • السبت: 9:00 - 13:00",
      },
    },
    footer: {
      tagline: "رعاية أسنان متميزة في قلب باريس.",
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة.",
    },
  },
} as const;

export type Translation = (typeof translations)[Lang];
