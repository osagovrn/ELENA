/* ================================================
   Многоязычность: RU | EN | ZH | UZ | KA | OS | KY
   ================================================ */
(function () {
    const LANGS = {
        ru: { code: 'ru', label: 'RU', name: 'Русский', locale: 'ru_RU', hreflang: 'ru' },
        en: { code: 'en', label: 'EN', name: 'English', locale: 'en_US', hreflang: 'en' },
        zh: { code: 'zh', label: '中文', name: '中文', locale: 'zh_CN', hreflang: 'zh-Hans' },
        uz: { code: 'uz', label: 'UZ', name: "O'zbekcha", locale: 'uz_UZ', hreflang: 'uz' },
        ka: { code: 'ka', label: 'KA', name: 'ქართული', locale: 'ka_GE', hreflang: 'ka' },
        os: { code: 'os', label: 'OS', name: 'Ирон', locale: 'os_RU', hreflang: 'os' },
        ky: { code: 'ky', label: 'KY', name: 'Кыргызча', locale: 'ky_KG', hreflang: 'ky' }
    };

    const SITE_URL = 'https://elenaperm.ru/';

    const T = {
        ru: {
            'meta.title': 'Перманентный макияж Воронеж — брови и губы | Елена',
            'meta.desc': 'Перманентный макияж бровей и губ в Воронеже — пудровые брови, микроблейдинг, акварельные губы. Натуральный результат, гипоаллергенные пигменты. Запись на бесплатную консультацию.',
            'logo.sub': 'перманентный макияж',
            'nav.about': 'Обо мне',
            'nav.services': 'Услуги',
            'nav.portfolio': 'Портфолио',
            'nav.process': 'Процесс',
            'nav.pricing': 'Цены',
            'nav.reviews': 'Отзывы',
            'nav.faq': 'Вопросы',
            'nav.book': 'Записаться',
            'nav.menu': 'Меню',
            'hero.tag': '✦ Воронеж',
            'hero.title': 'Естественная красота,<br><em>которая остаётся с вами</em>',
            'hero.sub': 'Перманентный макияж бровей и губ. Индивидуальный подбор формы и оттенка, премиальные материалы и натуральный результат без эффекта «татуажа».',
            'hero.cta': 'Записаться на процедуру',
            'hero.works': 'Смотреть работы',
            'about.eyebrow': 'обо мне',
            'about.title': 'Здравствуйте, я Елена',
            'about.p1': 'Мастер перманентного макияжа из Воронежа. Я начинающий мастер, помогаю женщинам просыпаться красивыми — без ежедневной рутины с косметикой.',
            'about.p2': 'Моя философия проста: <strong>лучшая работа — та, которую не видно</strong>. Я не делаю ярких «татуировок на лице». Я создаю деликатное подчёркивание ваших природных черт — так, чтобы окружающие просто замечали, что вы выглядите отдохнувшей и свежей.',
            'about.p3': 'Я использую только сертифицированные гипоаллергенные пигменты, одноразовые материалы и современное оборудование. Безопасность и комфорт каждой клиентки — мой абсолютный приоритет.',
            'about.badge1': 'Сертифицированные',
            'about.badge2': 'гипоаллергенные пигменты',
            'about.s1a': 'Индивидуальный',
            'about.s1b': 'подход к каждому',
            'about.s2a': 'Сертифицированные',
            'about.s2b': 'материалы',
            'about.s3a': 'Довольные',
            'about.s3b': 'клиенты',
            'services.eyebrow': 'услуги',
            'services.title': 'Что я создаю для вас',
            'services.sub': 'Две главные зоны моей специализации — брови и губы. В каждой — несколько техник под ваш тип кожи и желаемый результат.',
            'svc.brows': 'Брови',
            'svc.brows.desc': 'Густые, графичные или максимально естественные — подберём идеальную форму под черты вашего лица.',
            'svc.brows.1': 'Пудровая техника — мягкая растушёвка, эффект подведённых теней',
            'svc.brows.2': 'Теневая техника — деликатное заполнение, природный вид',
            'svc.brows.3': 'Волосковая техника — прорисовка отдельных волосков',
            'svc.brows.4': 'Микроблейдинг — тончайшие штрихи, максимальная реалистичность',
            'svc.from': 'от',
            'svc.book': 'Записаться',
            'svc.lips': 'Губы',
            'svc.lips.desc': 'Сочный цвет, визуальный объём и исправление асимметрии — без ежемесячного обновления помады.',
            'svc.lips.1': 'Контур губ — чёткая линия, исправление формы',
            'svc.lips.2': 'Растушёвка — мягкий переход контура к центру',
            'svc.lips.3': 'Эффект помады — полное плотное заполнение цветом',
            'svc.lips.4': 'Акварельная техника — полупрозрачный, нежный оттенок',
            'portfolio.eyebrow': 'портфолио',
            'portfolio.title': 'Галерея работ',
            'portfolio.sub': 'Примеры работ в разных техниках',
            'process.eyebrow': 'как проходит',
            'process.title': 'Путь к идеальному результату',
            'process.sub': 'От первой встречи до полного заживления — я сопровождаю вас на каждом этапе.',
            'process.1t': 'Консультация',
            'process.1d': 'Обсуждаем пожелания, оцениваем кожу, исключаем противопоказания. Подбираем форму и оттенок пигмента.',
            'process.2t': 'Эскиз',
            'process.2d': 'Вручную прорисовываю будущую форму — вы видите результат ещё до начала работы и вносим правки.',
            'process.3t': 'Процедура',
            'process.3d': 'Процедура проходит комфортно и безболезненно, с использованием одноразовых материалов. 1,5–2,5 часа.',
            'process.4t': 'Уход и коррекция',
            'process.4d': 'Выдаю подробные рекомендации по уходу. Через 1–2 месяца — коррекция, чтобы закрепить результат на годы.',
            'price.eyebrow': 'прайс-лист',
            'price.title': 'Прозрачные цены',
            'price.sub': 'Без скрытых доплат. Финальная стоимость зависит от выбранной техники и фиксируется на консультации.',
            'price.brows': 'Брови',
            'price.lips': 'Губы',
            'price.extra': 'Дополнительно',
            'price.hit': 'Хит',
            'price.choose': 'Выбрать',
            'price.ask': 'Уточнить',
            'price.note': '💡 Цена зависит от сложности работы и зоны. Точную стоимость определит бесплатная консультация.',
            'price.b1': 'Пудровая техника',
            'price.b2': 'Теневая техника',
            'price.b3': 'Волосковая техника',
            'price.b4': 'Микроблейдинг',
            'price.corr': 'Коррекция (через 1–2 мес.)',
            'price.l1': 'Контур губ',
            'price.l2': 'Растушёвка',
            'price.l3': 'Акварельная техника',
            'price.l4': 'Эффект помады',
            'price.e1': 'Консультация',
            'price.e1v': 'бесплатно',
            'price.e2': 'Анестезия',
            'price.e2v': 'включено',
            'price.e3': 'Обновление (через год)',
            'price.e4': 'Исправление чужой работы',
            'price.e4v': 'временно не делаю',
            'price.e5': 'Подарочный сертификат',
            'reviews.eyebrow': 'отзывы',
            'reviews.title': 'Что говорят клиентки',
            'reviews.sub': 'Реальные впечатления о процедурах',
            'faq.eyebrow': 'частые вопросы',
            'faq.title': 'Отвечаю на сомнения',
            'faq.q1': 'Больно ли делать перманентный макияж?',
            'faq.a1': 'Нет, процедура проходит комфортно — вы ощущаете лишь лёгкое прикосновение, не более. Большинство клиенток расслабляются и даже дремлют во время сеанса.',
            'faq.q2': 'Сколько держится результат?',
            'faq.a2': 'В среднем от 1 до 3 лет, в зависимости от типа кожи, техники и ухода. На жирной коже пигмент сходит быстрее, на сухой — держится дольше. Для закрепления результата рекомендуется одна коррекция через 1–2 месяца.',
            'faq.q3': 'Это безопасно? Какие материалы вы используете?',
            'faq.a3': 'Да, я соблюдаю все нормы безопасности. Работаю только одноразовыми стерильными материалами, вскрываю их при вас. Пигменты — сертифицированные, гипоаллергенные. Всё оборудование проходит обработку согласно СанПиН.',
            'faq.q4': 'Как ухаживать за перманентом после процедуры?',
            'faq.a4': 'Я выдаю подробную памятку и специальный уходовый крем. Основное: первые 5–7 дней не мочить водой, не тереть, не посещать баню, бассейн и солярий, не наносить декоративную косметику на зону. Полное заживление — 2–4 недели.',
            'faq.q5': 'Есть ли противопоказания?',
            'faq.a5': 'Да: беременность и лактация, острые воспаления, тяжёлые хронические заболевания в стадии обострения, склонность к келоидным рубцам, приём некоторых медикаментов. На бесплатной консультации мы обязательно всё обсудим.',
            'faq.q6': 'Можно ли исправить старый неудачный татуаж?',
            'faq.a6': 'Пока я временно не берусь за исправление и перекрытие чужих работ — это требует отдельного опыта и осторожной оценки. Как только начну принимать такие случаи, обновлю эту информацию. Если сомневаетесь — приходите на бесплатную консультацию, честно оценю ситуацию.',
            'book.eyebrow': 'запись',
            'book.title': 'Запишитесь на консультацию',
            'book.lead': 'Позвоните или напишите в WhatsApp / Telegram — отвечу на вопросы и подберу удобное время. Первая консультация бесплатна.',
            'book.phone': 'Телефон',
            'book.wa': 'Написать сообщение',
            'book.tg': 'Написать сообщение',
            'book.where': 'Где проходит процедура',
            'book.where.v': 'Принимаю дома, в уютной обстановке · г. Воронеж, ул. Ани Максимовой',
            'book.hours': 'Часы работы',
            'book.hours.v': 'Пн–Сб: 10:00–19:00 · Вс: выходной',
            'book.home': 'Приём на дому',
            'book.nav': 'Навигатор',
            'book.map': 'Карта',
            'footer.desc': 'Мастер перманентного макияжа бровей и губ в Воронеже. Натуральная красота, которая остаётся с вами.',
            'footer.nav': 'Навигация',
            'footer.svc': 'Услуги',
            'footer.svc1': 'Перманент бровей',
            'footer.svc2': 'Перманент губ',
            'footer.svc3': 'Микроблейдинг',
            'footer.svc4': 'Консультация',
            'footer.contacts': 'Контакты',
            'footer.copy': 'Елена — Перманентный макияж. Самозанятая (плательщик налога на профессиональный доход).',
            'footer.privacy': 'Политика обработки персональных данных',
            'footer.made': 'Сделано с 💗 в Воронеже',
                        'proj.eyebrow': 'ещё в Воронеже',
            'proj.title': 'Другие наши проекты:',
            'proj.sub': 'Локальные сервисы из Воронежа — рядом по духу и по городу',
            'proj.badge': 'Наш проект',
            'proj.1t': 'ОСАГО и КАСКО онлайн',
            'proj.1d': 'Оформление и продление полиса по России · ~60 минут · официальные страховые',
            'proj.2t': 'Аренда мотошлема',
            'proj.2d': 'Прокат JIEKAI JK902 в Воронеже · от 500 ₽/сутки · размеры M и L',
            'proj.3t': 'Склад Евгения',
            'proj.3d': 'Кабель и пожарное оборудование · опт и розница · склад в Воронеже',
'skip': 'Перейти к содержимому',
            'review.1.text': '«Боялась боли, но всё прошло спокойно — только лёгкое ощущение. Брови в пудре получились мягкие, без резкой линии. Окружающие просто говорят, что я хорошо выгляжу.»',
            'review.1.role': 'брови, пудровая техника',
            'review.2.text': '«Делала губы акварельной техникой. Цвет нежный, губы будто чуть увлажнённые — без эффекта яркой помады. Елена аккуратно работает, всё стерильно, атмосфера спокойная.»',
            'review.2.role': 'губы, акварель',
            'review.3.text': '«Долго откладывала перманент — не хотела «нарисованные» брови. Елена подробно рассказала про этапы и подобрала оттенок под мой цвет волос. Результат естественный, я довольна.»',
            'review.3.role': 'брови, теневая техника',
            'review.4.text': '«Сделала и брови, и губы. Утром уже не нужно ничего подводить — экономия времени каждый день. Форму Елена подбирала под лицо, не навязывала «модный» вариант.»',
            'review.4.role': 'брови + губы',
            'review.5.text': '«Выбрала микроблейдинг — хотела эффект отдельных волосков. Получилось аккуратно и натурально. После заживления цвет чуть смягчился, как и предупреждала Елена. Планирую прийти на коррекцию.»',
            'review.5.role': 'микроблейдинг',
            'alt.about': 'Елена — мастер перманентного макияжа бровей и губ в Воронеже',
            'alt.brows': 'Перманентный макияж бровей Воронеж — пудровая и волосковая техника',
            'alt.lips': 'Перманентный макияж губ Воронеж — акварельная техника и эффект помады',
            'alt.g1': 'Пудровые брови — работа мастера Елены в Воронеже',
            'alt.g2': 'Перманентный макияж бровей — натуральный результат',
            'alt.g3': 'Акварельные губы — перманентный макияж в Воронеже',
            'alt.g4': 'Перманент бровей и губ — до и после',
            'alt.g5': 'Микроблейдинг бровей — работа Елены',
            'alt.g6': 'Теневая техника бровей — перманентный макияж',
            'alt.g7': 'Волосковая техника бровей Воронеж',
            'alt.g8': 'Перманентный макияж губ — эффект помады',
            'alt.g9': 'Натуральный перманентный макияж бровей и губ'
        },
        en: {
            'meta.title': 'Permanent Makeup Voronezh — Brows & Lips | Elena',
            'meta.desc': 'Permanent makeup for brows and lips in Voronezh — powder brows, microblading, watercolor lips. Natural result, hypoallergenic pigments. Free consultation.',
            'logo.sub': 'permanent makeup',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'nav.process': 'Process',
            'nav.pricing': 'Prices',
            'nav.reviews': 'Reviews',
            'nav.faq': 'FAQ',
            'nav.book': 'Book',
            'nav.menu': 'Menu',
            'hero.tag': '✦ Voronezh',
            'hero.title': 'Natural beauty<br><em>that stays with you</em>',
            'hero.sub': 'Permanent makeup for brows and lips. Custom shape and shade, premium materials, natural result — no harsh tattoo look.',
            'hero.cta': 'Book a session',
            'hero.works': 'View works',
            'about.eyebrow': 'about me',
            'about.title': 'Hello, I\'m Elena',
            'about.p1': 'Permanent makeup artist in Voronezh. I help women wake up beautiful — without daily makeup routine.',
            'about.p2': 'My philosophy is simple: <strong>the best work is the one you don\'t notice</strong>. I don\'t do bold face tattoos. I gently enhance your natural features so people just notice you look rested and fresh.',
            'about.p3': 'I use only certified hypoallergenic pigments, single-use materials and modern equipment. Safety and comfort of every client are my top priority.',
            'about.badge1': 'Certified',
            'about.badge2': 'hypoallergenic pigments',
            'about.s1a': 'Personal',
            'about.s1b': 'approach for everyone',
            'about.s2a': 'Certified',
            'about.s2b': 'materials',
            'about.s3a': 'Happy',
            'about.s3b': 'clients',
            'services.eyebrow': 'services',
            'services.title': 'What I create for you',
            'services.sub': 'Two main areas — brows and lips. Several techniques for your skin type and desired result.',
            'svc.brows': 'Brows',
            'svc.brows.desc': 'Full, graphic or fully natural — we choose the ideal shape for your face.',
            'svc.brows.1': 'Powder technique — soft shading, eyeshadow effect',
            'svc.brows.2': 'Shadow technique — delicate fill, natural look',
            'svc.brows.3': 'Hair stroke technique — individual hair drawing',
            'svc.brows.4': 'Microblading — finest strokes, maximum realism',
            'svc.from': 'from',
            'svc.book': 'Book',
            'svc.lips': 'Lips',
            'svc.lips.desc': 'Rich color, visual volume and symmetry — without monthly lipstick touch-ups.',
            'svc.lips.1': 'Lip contour — clean line, shape correction',
            'svc.lips.2': 'Shading — soft fade from contour to center',
            'svc.lips.3': 'Lipstick effect — full dense color fill',
            'svc.lips.4': 'Watercolor technique — sheer, delicate tint',
            'portfolio.eyebrow': 'portfolio',
            'portfolio.title': 'Work gallery',
            'portfolio.sub': 'Examples in different techniques',
            'process.eyebrow': 'how it works',
            'process.title': 'Path to the perfect result',
            'process.sub': 'From the first meeting to full healing — I guide you at every step.',
            'process.1t': 'Consultation',
            'process.1d': 'We discuss your wishes, assess the skin, rule out contraindications. Choose shape and pigment shade.',
            'process.2t': 'Sketch',
            'process.2d': 'I draw the future shape by hand — you see the result before we start and can request changes.',
            'process.3t': 'Procedure',
            'process.3d': 'Comfortable and nearly painless, with single-use materials. 1.5–2.5 hours.',
            'process.4t': 'Aftercare & touch-up',
            'process.4d': 'Detailed aftercare guide. In 1–2 months — a touch-up to lock the result for years.',
            'price.eyebrow': 'price list',
            'price.title': 'Transparent prices',
            'price.sub': 'No hidden fees. Final price depends on the technique and is fixed at consultation.',
            'price.brows': 'Brows',
            'price.lips': 'Lips',
            'price.extra': 'Extra',
            'price.hit': 'Hit',
            'price.choose': 'Choose',
            'price.ask': 'Ask',
            'price.note': '💡 Price depends on complexity and area. Exact cost is set at a free consultation.',
            'price.b1': 'Powder technique',
            'price.b2': 'Shadow technique',
            'price.b3': 'Hair stroke technique',
            'price.b4': 'Microblading',
            'price.corr': 'Touch-up (in 1–2 mo.)',
            'price.l1': 'Lip contour',
            'price.l2': 'Shading',
            'price.l3': 'Watercolor technique',
            'price.l4': 'Lipstick effect',
            'price.e1': 'Consultation',
            'price.e1v': 'free',
            'price.e2': 'Anesthesia',
            'price.e2v': 'included',
            'price.e3': 'Refresh (after 1 year)',
            'price.e4': 'Correction of others\' work',
            'price.e4v': 'temporarily not available',
            'price.e5': 'Gift certificate',
            'reviews.eyebrow': 'reviews',
            'reviews.title': 'What clients say',
            'reviews.sub': 'Real feedback about the procedures',
            'faq.eyebrow': 'FAQ',
            'faq.title': 'Answering your doubts',
            'faq.q1': 'Does permanent makeup hurt?',
            'faq.a1': 'No — the procedure is comfortable. You feel only a light touch. Most clients relax and even doze during the session.',
            'faq.q2': 'How long does the result last?',
            'faq.a2': 'On average 1 to 3 years, depending on skin type, technique and aftercare. Oily skin fades faster; dry skin lasts longer. One touch-up in 1–2 months is recommended.',
            'faq.q3': 'Is it safe? What materials do you use?',
            'faq.a3': 'Yes. I follow all safety standards. Only sterile single-use materials, opened in front of you. Certified hypoallergenic pigments. Equipment is processed per sanitary rules.',
            'faq.q4': 'How to care for permanent makeup after the procedure?',
            'faq.a4': 'I give a detailed guide and special cream. Main rules: 5–7 days — no water, no rubbing, no sauna, pool or tanning bed, no makeup on the area. Full healing — 2–4 weeks.',
            'faq.q5': 'Are there contraindications?',
            'faq.a5': 'Yes: pregnancy and breastfeeding, acute inflammation, severe chronic disease in flare-up, keloid tendency, some medications. We discuss everything at a free consultation.',
            'faq.q6': 'Can you fix old unsuccessful tattooing?',
            'faq.a6': 'I temporarily do not take cover-ups of other artists\' work — it needs extra experience. When I start accepting such cases, I will update this. If unsure — come for a free consultation.',
            'book.eyebrow': 'booking',
            'book.title': 'Book a consultation',
            'book.lead': 'Call or message on WhatsApp / Telegram — I will answer questions and find a convenient time. First consultation is free.',
            'book.phone': 'Phone',
            'book.wa': 'Send message',
            'book.tg': 'Send message',
            'book.where': 'Where the procedure takes place',
            'book.where.v': 'At home, in a cozy setting · Voronezh, Ani Maximovoy St.',
            'book.hours': 'Working hours',
            'book.hours.v': 'Mon–Sat: 10:00–19:00 · Sun: closed',
            'book.home': 'Home visits',
            'book.nav': 'Navigator',
            'book.map': 'Map',
            'footer.desc': 'Permanent makeup artist for brows and lips in Voronezh. Natural beauty that stays with you.',
            'footer.nav': 'Navigation',
            'footer.svc': 'Services',
            'footer.svc1': 'Brow permanent',
            'footer.svc2': 'Lip permanent',
            'footer.svc3': 'Microblading',
            'footer.svc4': 'Consultation',
            'footer.contacts': 'Contacts',
            'footer.copy': 'Elena — Permanent Makeup. Self-employed.',
            'footer.privacy': 'Privacy policy',
            'footer.made': 'Made with 💗 in Voronezh',
            'skip': 'Skip to content',
            'proj.eyebrow': 'also in Voronezh',
            'proj.title': 'Other projects of ours:',
            'proj.sub': 'Local Voronezh services — close in spirit and in the city',
            'proj.badge': 'Our project',
            'proj.1t': 'OSAGO & CASCO online',
            'proj.1d': 'Insurance policy issue & renewal across Russia · ~60 min · licensed insurers',
            'proj.2t': 'Motorcycle helmet rental',
            'proj.2d': 'JIEKAI JK902 rental in Voronezh · from 500 ₽/day · sizes M and L',
            'proj.3t': 'Evgeniy\'s Warehouse',
            'proj.3d': 'Cable & fire-safety equipment · wholesale and retail · warehouse in Voronezh',
            'review.1.text': '"I was afraid of pain, but everything went smoothly — just a light sensation. The powder brows turned out soft, with no harsh line. People just say I look great."',
            'review.1.role': 'brows, powder technique',
            'review.2.text': '"I had my lips done with the watercolor technique. The color is gentle, lips look subtly hydrated — no bold lipstick effect. Elena works carefully, everything is sterile, the atmosphere is calm."',
            'review.2.role': 'lips, watercolor',
            'review.3.text': '"I put off permanent makeup for a long time — didn\'t want \'drawn-on\' brows. Elena explained every stage in detail and matched the shade to my hair color. The result is natural, I\'m happy."',
            'review.3.role': 'brows, shadow technique',
            'review.4.text': '"I had both brows and lips done. In the morning there\'s nothing left to fill in — it saves time every day. Elena chose the shape to fit my face, not a \'trendy\' template."',
            'review.4.role': 'brows + lips',
            'review.5.text': '"I chose microblading — wanted the look of individual hairs. It turned out neat and natural. After healing, the color softened a bit, just as Elena warned. Planning to come back for touch-up."',
            'review.5.role': 'microblading',
            'alt.about': 'Elena — permanent makeup artist for brows and lips in Voronezh',
            'alt.brows': 'Permanent brow makeup in Voronezh — powder and hair-stroke technique',
            'alt.lips': 'Permanent lip makeup in Voronezh — watercolor technique and lipstick effect',
            'alt.g1': 'Powder brows — work by master Elena in Voronezh',
            'alt.g2': 'Permanent brow makeup — natural result',
            'alt.g3': 'Watercolor lips — permanent makeup in Voronezh',
            'alt.g4': 'Permanent brows and lips — before and after',
            'alt.g5': 'Microblading brows — work by Elena',
            'alt.g6': 'Shadow-technique brows — permanent makeup',
            'alt.g7': 'Hair-stroke brow technique in Voronezh',
            'alt.g8': 'Permanent lip makeup — lipstick effect',
            'alt.g9': 'Natural permanent makeup for brows and lips'
        },
        zh: {
            'meta.title': '沃罗涅日半永久妆容 — 眉与唇 | Elena',
            'meta.desc': '沃罗涅日半永久眉妆与唇妆 — 雾眉、线条眉、水彩唇。自然效果，低敏色料。免费咨询预约。',
            'logo.sub': '半永久妆容',
            'nav.about': '关于我',
            'nav.services': '服务',
            'nav.portfolio': '作品',
            'nav.process': '流程',
            'nav.pricing': '价格',
            'nav.reviews': '评价',
            'nav.faq': '问答',
            'nav.book': '预约',
            'nav.menu': '菜单',
            'hero.tag': '✦ 沃罗涅日',
            'hero.title': '自然之美<br><em>长久陪伴你</em>',
            'hero.sub': '半永久眉与唇妆。个性化形状与色号，优质材料，自然效果，无厚重纹身感。',
            'hero.cta': '预约项目',
            'hero.works': '查看作品',
            'about.eyebrow': '关于我',
            'about.title': '你好，我是Elena',
            'about.p1': '沃罗涅日半永久化妆师。帮助女性一觉醒来依然美丽——无需每日化妆。',
            'about.p2': '我的理念很简单：<strong>最好的作品是看不出来的</strong>。我不做夸张的面部纹身，而是轻柔强调你的自然五官，让别人只觉得你气色好、精神焕发。',
            'about.p3': '仅使用认证低敏色料、一次性材料和现代设备。每位客户的安全与舒适是我的首要原则。',
            'about.badge1': '认证',
            'about.badge2': '低敏色料',
            'about.s1a': '个性化',
            'about.s1b': '一对一方案',
            'about.s2a': '认证',
            'about.s2b': '材料',
            'about.s3a': '满意',
            'about.s3b': '客户',
            'services.eyebrow': '服务',
            'services.title': '为你打造',
            'services.sub': '两大专长 — 眉与唇。多种手法适配肤质与期望效果。',
            'svc.brows': '眉毛',
            'svc.brows.desc': '浓密、清晰或极致自然 — 按脸型选择理想眉形。',
            'svc.brows.1': '雾眉 — 柔和晕染，如眼影效果',
            'svc.brows.2': '阴影眉 — 轻柔填充，自然外观',
            'svc.brows.3': '仿生毛发 — 逐根刻画',
            'svc.brows.4': '线条眉 — 极细笔触，高度仿真',
            'svc.from': '起',
            'svc.book': '预约',
            'svc.lips': '嘴唇',
            'svc.lips.desc': '饱满色泽与视觉丰盈，修正不对称 — 无需每月补口红。',
            'svc.lips.1': '唇线 — 清晰轮廓，修正唇形',
            'svc.lips.2': '渐晕 — 由外向内柔和过渡',
            'svc.lips.3': '口红效果 — 全唇浓郁填色',
            'svc.lips.4': '水彩唇 — 半透明柔和色调',
            'portfolio.eyebrow': '作品集',
            'portfolio.title': '作品展示',
            'portfolio.sub': '不同手法示例',
            'process.eyebrow': '流程',
            'process.title': '通往理想效果之路',
            'process.sub': '从初次沟通到完全愈合 — 每一步我都陪伴你。',
            'process.1t': '咨询',
            'process.1d': '沟通需求、评估皮肤、排除禁忌。选择形状与色料。',
            'process.2t': '设计稿',
            'process.2d': '手绘预想形状 — 开工前即可看到效果并调整。',
            'process.3t': '操作',
            'process.3d': '舒适、基本无痛，一次性材料。约1.5–2.5小时。',
            'process.4t': '护理与补色',
            'process.4d': '详细护理说明。1–2个月后补色，效果可保持数年。',
            'price.eyebrow': '价目表',
            'price.title': '透明价格',
            'price.sub': '无隐性收费。最终价格按手法在咨询时确定。',
            'price.brows': '眉毛',
            'price.lips': '嘴唇',
            'price.extra': '其他',
            'price.hit': '热门',
            'price.choose': '选择',
            'price.ask': '咨询',
            'price.note': '💡 价格视难度与部位而定。精确报价在免费咨询中确定。',
            'price.b1': '雾眉',
            'price.b2': '阴影眉',
            'price.b3': '仿生毛发',
            'price.b4': '线条眉',
            'price.corr': '补色（1–2个月后）',
            'price.l1': '唇线',
            'price.l2': '渐晕',
            'price.l3': '水彩唇',
            'price.l4': '口红效果',
            'price.e1': '咨询',
            'price.e1v': '免费',
            'price.e2': '麻醉',
            'price.e2v': '已含',
            'price.e3': '补色更新（一年后）',
            'price.e4': '修正他人作品',
            'price.e4v': '暂不承接',
            'price.e5': '礼品卡',
            'reviews.eyebrow': '评价',
            'reviews.title': '客户怎么说',
            'reviews.sub': '真实项目反馈',
            'faq.eyebrow': '常见问题',
            'faq.title': '解答疑虑',
            'faq.q1': '半永久会痛吗？',
            'faq.a1': '不会。过程舒适，仅有轻微触感。多数客户会放松，甚至打瞌睡。',
            'faq.q2': '效果能维持多久？',
            'faq.a2': '平均1至3年，取决于肤质、手法与护理。油性皮肤褪色较快，干性更久。建议1–2个月后补色一次。',
            'faq.q3': '安全吗？使用什么材料？',
            'faq.a3': '安全。遵守全部规范。仅用无菌一次性材料，当面拆封。认证低敏色料。设备按卫生标准处理。',
            'faq.q4': '术后如何护理？',
            'faq.a4': '提供详细说明与护理霜。前5–7天：勿沾水、勿摩擦、勿桑拿泳池日光浴、勿化妆。完全愈合2–4周。',
            'faq.q5': '有禁忌吗？',
            'faq.a5': '有：怀孕哺乳、急性炎症、慢性病急性期、瘢痕体质、部分药物。免费咨询时会详细说明。',
            'faq.q6': '能修以前失败的纹绣吗？',
            'faq.a6': '暂不承接遮盖他人作品。需要更多经验。开始接单后会更新信息。不确定可先免费咨询。',
            'book.eyebrow': '预约',
            'book.title': '预约咨询',
            'book.lead': '电话或 WhatsApp / Telegram 留言 — 解答问题并安排时间。首次咨询免费。',
            'book.phone': '电话',
            'book.wa': '发消息',
            'book.tg': '发消息',
            'book.where': '服务地点',
            'book.where.v': '在温馨的居家环境 · 沃罗涅日，Ani Maximovoy 街',
            'book.hours': '营业时间',
            'book.hours.v': '周一至六 10:00–19:00 · 周日休息',
            'book.home': '上门服务',
            'book.nav': '导航',
            'book.map': '地图',
            'footer.desc': '沃罗涅日半永久眉唇化妆师。自然之美，长久相伴。',
            'footer.nav': '导航',
            'footer.svc': '服务',
            'footer.svc1': '半永久眉',
            'footer.svc2': '半永久唇',
            'footer.svc3': '线条眉',
            'footer.svc4': '咨询',
            'footer.contacts': '联系方式',
            'footer.copy': 'Elena — 半永久妆容。个体经营者。',
            'footer.privacy': '隐私政策',
            'footer.made': '用 💗 制作于沃罗涅日',
            'skip': '跳到内容',
            'proj.eyebrow': '沃罗涅日的其他服务',
            'proj.title': '我们的其他项目：',
            'proj.sub': '沃罗涅日本地服务 — 志同道合，就在身边',
            'proj.badge': '我们的项目',
            'proj.1t': '在线交强险与车损险',
            'proj.1d': '全俄保单办理与续保 · 约60分钟 · 正规保险公司',
            'proj.2t': '摩托车头盔租赁',
            'proj.2d': '沃罗涅日 JIEKAI JK902 租赁 · 每天500卢布起 · M和L码',
            'proj.3t': 'Evgeniy 的仓库',
            'proj.3d': '电缆与消防设备 · 批发零售 · 沃罗涅日仓库',
            'review.1.text': '"本来很怕疼，但整个过程很平静——只有轻微的感觉。雾眉效果柔和，没有生硬的线条。大家都说我气色很好。"',
            'review.1.role': '眉毛，雾眉技术',
            'review.2.text': '"我做的是水彩唇。颜色温柔，嘴唇看起来微微润泽——没有浓艳口红的效果。Elena操作细致，全程无菌，氛围很放松。"',
            'review.2.role': '嘴唇，水彩技术',
            'review.3.text': '"犹豫了很久才决定做半永久，怕眉毛看起来\'画上去的\'。Elena详细讲解了每个步骤，还根据我的发色调配了颜色。效果很自然，我很满意。"',
            'review.3.role': '眉毛，线条眉技术',
            'review.4.text': '"我做了眉毛和嘴唇。早上不用再化妆——每天都省了不少时间。Elena是按我的脸型定制的形状，而不是套用\'流行\'模板。"',
            'review.4.role': '眉毛+嘴唇',
            'review.5.text': '"我选择了线条眉，想要单根眉毛的效果。做出来很精致自然。恢复后颜色略微变浅，Elena之前也提醒过我。打算再去补色。"',
            'review.5.role': '线条眉',
            'alt.about': 'Elena — 沃罗涅日半永久眉唇妆容师',
            'alt.brows': '沃罗涅日半永久眉妆 — 雾眉与线条眉技术',
            'alt.lips': '沃罗涅日半永久唇妆 — 水彩技术与丰唇效果',
            'alt.g1': '雾眉 — Elena 在沃罗涅日的作品',
            'alt.g2': '半永久眉妆 — 自然效果',
            'alt.g3': '水彩唇 — 沃罗涅日半永久妆容',
            'alt.g4': '半永久眉唇 — 前后对比',
            'alt.g5': '线条眉 — Elena 的作品',
            'alt.g6': '影调眉技术 — 半永久妆容',
            'alt.g7': '沃罗涅日线条眉技术',
            'alt.g8': '半永久唇妆 — 丰唇效果',
            'alt.g9': '自然的半永久眉唇妆容'
        },
        uz: {
            'meta.title': 'Voronejdagi permanent makiyaj — qosh va lab | Elena',
            'meta.desc': 'Voronejda qosh va lab permanent makiyaji — pudra qoshlar, mikrobleding, akvarel lablar. Tabiiy natija, gipoallergen pigmentlar. Bepul konsultatsiya.',
            'logo.sub': 'permanent makiyaj',
            'nav.about': 'Men haqimda',
            'nav.services': 'Xizmatlar',
            'nav.portfolio': 'Portfolio',
            'nav.process': 'Jarayon',
            'nav.pricing': 'Narxlar',
            'nav.reviews': 'Sharhlar',
            'nav.faq': 'Savollar',
            'nav.book': 'Yozilish',
            'nav.menu': 'Menyu',
            'hero.tag': '✦ Voronej',
            'hero.title': 'Tabiiy go\'zallik,<br><em>siz bilan qoladigan</em>',
            'hero.sub': 'Qosh va lab permanent makiyaji. Individual shakl va rang, premium materiallar, tabiiy natija — qattiq tatuirovka effektisiz.',
            'hero.cta': 'Protseduraga yozilish',
            'hero.works': 'Ishlarni ko\'rish',
            'about.eyebrow': 'men haqimda',
            'about.title': 'Salom, men Elena',
            'about.p1': 'Voronejdagi permanent makiyaj ustasi. Ayollarga har kuni bo\'yanmasdan chiroyli uyg\'onishga yordam beraman.',
            'about.p2': 'Falsafam oddiy: <strong>eng yaxshi ish — ko\'rinmaydigan ish</strong>. Yuzdagi yorqin tatuirovka qilmayman. Tabiiy chizgilarni nozik ta\'kidlayman — atrofdagilar faqat sizni dam olgan va yangilangan ko\'rinishingizni sezadi.',
            'about.p3': 'Faqat sertifikatlangan gipoallergen pigmentlar, bir martalik materiallar va zamonaviy uskunalar. Har bir mijozning xavfsizligi va qulayligi — asosiy ustuvorlik.',
            'about.badge1': 'Sertifikatlangan',
            'about.badge2': 'gipoallergen pigmentlar',
            'about.s1a': 'Individual',
            'about.s1b': 'yondashuv',
            'about.s2a': 'Sertifikatlangan',
            'about.s2b': 'materiallar',
            'about.s3a': 'Mamnun',
            'about.s3b': 'mijozlar',
            'services.eyebrow': 'xizmatlar',
            'services.title': 'Siz uchun nima yarataman',
            'services.sub': 'Ikki asosiy zona — qosh va lab. Teri turi va xohishga mos bir necha texnika.',
            'svc.brows': 'Qoshlar',
            'svc.brows.desc': 'Qalin, grafik yoki maksimal tabiiy — yuz chizgilariga mos shakl tanlaymiz.',
            'svc.brows.1': 'Pudra texnikasi — yumshoq soya, soyali effekt',
            'svc.brows.2': 'Soya texnikasi — nozik to\'ldirish, tabiiy ko\'rinish',
            'svc.brows.3': 'Tukli texnika — alohida tuklar chizish',
            'svc.brows.4': 'Mikrobleding — eng nozik chiziqlar, maksimal realizm',
            'svc.from': 'dan',
            'svc.book': 'Yozilish',
            'svc.lips': 'Lablar',
            'svc.lips.desc': 'Boy rang, vizual hajm va nosimmetriyani tuzatish — har oy lab bo\'yog\'isiz.',
            'svc.lips.1': 'Lab konturi — aniq chiziq, shaklni tuzatish',
            'svc.lips.2': 'Soyalash — konturdan markazga yumshoq o\'tish',
            'svc.lips.3': 'Lab bo\'yog\'i effekti — to\'liq zich rang',
            'svc.lips.4': 'Akvarel texnikasi — yarim shaffof, nozik soyalar',
            'portfolio.eyebrow': 'portfolio',
            'portfolio.title': 'Ishlar galereyasi',
            'portfolio.sub': 'Turli texnikalardagi misollar',
            'process.eyebrow': 'qanday o\'tadi',
            'process.title': 'Mukammal natijaga yo\'l',
            'process.sub': 'Birinchi uchrashuvdan to\'liq bitishgacha — har qadamda yoningizdaman.',
            'process.1t': 'Konsultatsiya',
            'process.1d': 'Istaklarni muhokama qilamiz, terini baholaymiz, qarshi ko\'rsatmalarni chiqaramiz. Shakl va rang tanlaymiz.',
            'process.2t': 'Eskiz',
            'process.2d': 'Kelajak shaklini qo\'lda chizaman — ish boshlashdan oldin ko\'rasiz va tuzatish kiritasiz.',
            'process.3t': 'Protsedura',
            'process.3d': 'Qulay va deyarli og\'riqsiz, bir martalik materiallar bilan. 1,5–2,5 soat.',
            'process.4t': 'Parvarish va korreksiya',
            'process.4d': 'Batafsil parvarish tavsiyalari. 1–2 oydan keyin — natijani yillar davomida mustahkamlash uchun korreksiya.',
            'price.eyebrow': 'narxlar',
            'price.title': 'Shaffof narxlar',
            'price.sub': 'Yashirin to\'lovlarsiz. Yakuniy narx texnikaga bog\'liq va konsultatsiyada belgilanadi.',
            'price.brows': 'Qoshlar',
            'price.lips': 'Lablar',
            'price.extra': 'Qo\'shimcha',
            'price.hit': 'Hit',
            'price.choose': 'Tanlash',
            'price.ask': 'Aniqlash',
            'price.note': '💡 Narx murakkablik va zonaga bog\'liq. Aniq summa bepul konsultatsiyada belgilanadi.',
            'price.b1': 'Pudra texnikasi',
            'price.b2': 'Soya texnikasi',
            'price.b3': 'Tukli texnika',
            'price.b4': 'Mikrobleding',
            'price.corr': 'Korreksiya (1–2 oy ichida)',
            'price.l1': 'Lab konturi',
            'price.l2': 'Soyalash',
            'price.l3': 'Akvarel texnikasi',
            'price.l4': 'Lab bo\'yog\'i effekti',
            'price.e1': 'Konsultatsiya',
            'price.e1v': 'bepul',
            'price.e2': 'Anesteziya',
            'price.e2v': 'kiritilgan',
            'price.e3': 'Yangilash (bir yildan keyin)',
            'price.e4': 'Boshqa ishni tuzatish',
            'price.e4v': 'vaqtincha qabul qilinmaydi',
            'price.e5': 'Sovg\'a sertifikati',
            'reviews.eyebrow': 'sharhlar',
            'reviews.title': 'Mijozlar nima deydi',
            'reviews.sub': 'Protseduralar haqida haqiqiy fikrlar',
            'faq.eyebrow': 'ko\'p so\'raladigan',
            'faq.title': 'Shubhalarga javob',
            'faq.q1': 'Permanent makiyaj og\'riqlimi?',
            'faq.a1': 'Yo\'q — protsedura qulay. Faqat engil tegish seziladi. Ko\'pchilik mijozlar dam oladi, hatto uxlab qoladi.',
            'faq.q2': 'Natija qancha turadi?',
            'faq.a2': 'O\'rtacha 1–3 yil, teri turi, texnika va parvarishga bog\'liq. Yog\'li terida tezroq ketadi, quruqda uzoqroq. 1–2 oydan keyin bitta korreksiya tavsiya etiladi.',
            'faq.q3': 'Xavfsizmi? Qanday materiallar?',
            'faq.a3': 'Ha. Barcha xavfsizlik normalariga rioya qilaman. Faqat steril bir martalik materiallar, sizning oldingizda ochiladi. Sertifikatlangan gipoallergen pigmentlar.',
            'faq.q4': 'Protseduradan keyin qanday parvarish?',
            'faq.a4': 'Batafsil eslatma va krem beraman. Asosiysi: 5–7 kun suv, ishqalash, hammom, basseyn, solyariy va dekorativ kosmetika yo\'q. To\'liq bitish — 2–4 hafta.',
            'faq.q5': 'Qarshi ko\'rsatmalar bormi?',
            'faq.a5': 'Ha: homiladorlik va emizish, o\'tkir yallig\'lanishlar, og\'ir surunkali kasalliklar, keloid moyilligi, ba\'zi dorilar. Bepul konsultatsiyada muhokama qilamiz.',
            'faq.q6': 'Eski muvaffaqiyatsiz tatuirovkani tuzatish mumkinmi?',
            'faq.a6': 'Hozircha boshqa ustalarning ishini yopishni qabul qilmayman. Keyinroq yangilanadi. Shubhangiz bo\'lsa — bepul konsultatsiyaga keling.',
            'book.eyebrow': 'yozilish',
            'book.title': 'Konsultatsiyaga yoziling',
            'book.lead': 'Qo\'ng\'iroq qiling yoki WhatsApp / Telegram yozing — savollarga javob beraman va qulay vaqt topaman. Birinchi konsultatsiya bepul.',
            'book.phone': 'Telefon',
            'book.wa': 'Xabar yozish',
            'book.tg': 'Xabar yozish',
            'book.where': 'Protsedura qayerda',
            'book.where.v': 'Uyda, qulay muhitda · Voronej, Ani Maksimovoy ko\'chasi',
            'book.hours': 'Ish vaqti',
            'book.hours.v': 'Du–Sha: 10:00–19:00 · Ya: dam olish',
            'book.home': 'Uyda qabul',
            'book.nav': 'Navigator',
            'book.map': 'Xarita',
            'footer.desc': 'Voronejda qosh va lab permanent makiyaj ustasi. Siz bilan qoladigan tabiiy go\'zallik.',
            'footer.nav': 'Navigatsiya',
            'footer.svc': 'Xizmatlar',
            'footer.svc1': 'Qosh permanent',
            'footer.svc2': 'Lab permanent',
            'footer.svc3': 'Mikrobleding',
            'footer.svc4': 'Konsultatsiya',
            'footer.contacts': 'Kontaktlar',
            'footer.copy': 'Elena — Permanent makiyaj. O\'zini o\'zi band qilgan.',
            'footer.privacy': 'Maxfiylik siyosati',
            'footer.made': 'Voronejda 💗 bilan yaratilgan',
            'skip': 'Kontentga o\'tish',
            'proj.eyebrow': 'Voronejda yana',
            'proj.title': 'Bizning boshqa loyihalarimiz:',
            'proj.sub': 'Voronejdan mahalliy xizmatlar — ruhan va shaharda yaqin',
            'proj.badge': 'Bizning loyiha',
            'proj.1t': 'OSAGO va KASKO onlayn',
            'proj.1d': 'Rossiya bo\'ylab polis rasmiylashtirish va uzaytirish · ~60 daqiqa · rasmiy sug\'urta kompaniyalari',
            'proj.2t': 'Mototashlem ijarasi',
            'proj.2d': 'Voronejda JIEKAI JK902 ijarasi · 500 ₽/kundan boshlab · M va L o\'lchamlar',
            'proj.3t': 'Evgeniy ombori',
            'proj.3d': 'Kabel va yong\'in xavfsizligi jihozlari · ulgurji va chakana · Voronejdagi ombor',
            'review.1.text': '"Og\'riqdan qo\'rqqan edim, lekin hammasi tinch o\'tdi — faqat yengil sezgi. Pudra qoshlar yumshoq chiqdi, keskin chiziqsiz. Atrofdagilar shunchaki chiroyli ko\'rinishimni aytishadi."',
            'review.1.role': 'qoshlar, pudra texnikasi',
            'review.2.text': '"Lablarimni akvarel texnikasida qildim. Rang nafis, lablar biroz namlangandek ko\'rinadi — yorqin pomada effektisiz. Elena diqqat bilan ishlaydi, hammasi steril, muhit tinch."',
            'review.2.role': 'lablar, akvarel',
            'review.3.text': '"Permanentni uzoq vaqt kechiktirdim — \'chizilgan\' qoshlarni xohlamagandim. Elena barcha bosqichlarni batafsil tushuntirdi va soyani sochim rangiga moslashtirdi. Natija tabiiy, mendan mamnunman."',
            'review.3.role': 'qoshlar, soyali texnika',
            'review.4.text': '"Ham qoshlarimni, ham lablarimni qildim. Ertalab endi hech narsa chizishning hojati yo\'q — har kuni vaqt tejaladi. Elena shaklni yuzimga moslab tanladi, \'moda\' variantini majburlamadi."',
            'review.4.role': 'qoshlar + lablar',
            'review.5.text': '"Mikrobledingni tanladim — alohida tuklar effektini xohlagandim. Chiroyli va tabiiy chiqdi. Bitgandan keyin rang biroz yumshadi, Elena oldindan ogohlantirgan edi. Tuzatishga kelishni rejalashtiryapman."',
            'review.5.role': 'mikrobleding',
            'alt.about': 'Elena — Voronejda qosh va lab permanent makiyaji ustasi',
            'alt.brows': 'Voronejda qosh permanent makiyaji — pudra va tolali texnika',
            'alt.lips': 'Voronejda lab permanent makiyaji — akvarel texnikasi va pomada effekti',
            'alt.g1': 'Pudra qoshlar — usta Elenaning Voronejdagi ishi',
            'alt.g2': 'Qosh permanent makiyaji — tabiiy natija',
            'alt.g3': 'Akvarel lablar — Voronejda permanent makiyaj',
            'alt.g4': 'Qosh va lab permanenti — oldin va keyin',
            'alt.g5': 'Mikrobleding qoshlar — Elenaning ishi',
            'alt.g6': 'Soyali texnika qoshlar — permanent makiyaj',
            'alt.g7': 'Voronejda tolali qosh texnikasi',
            'alt.g8': 'Lab permanent makiyaji — pomada effekti',
            'alt.g9': 'Tabiiy qosh va lab permanent makiyaji'
        }
    };

    const STORAGE_KEY = 'elena_lang';

    function getDict(lang) {
        if (T[lang]) return T[lang];
        if (window.ElenaI18nExtra && window.ElenaI18nExtra[lang]) return window.ElenaI18nExtra[lang];
        return T.ru;
    }

    function updateSeo(lang) {
        const info = LANGS[lang] || LANGS.ru;
        const dict = getDict(lang);

        // html lang
        const htmlLang = lang === 'zh' ? 'zh-Hans' : lang;
        document.documentElement.lang = htmlLang;
        document.documentElement.setAttribute('data-lang', lang);

        // title + description
        if (dict['meta.title']) document.title = dict['meta.title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict['meta.desc']) metaDesc.setAttribute('content', dict['meta.desc']);

        // Open Graph
        const setMeta = (sel, attr, val) => {
            const el = document.querySelector(sel);
            if (el && val) el.setAttribute(attr, val);
        };
        setMeta('meta[property="og:title"]', 'content', dict['meta.title']);
        setMeta('meta[property="og:description"]', 'content', dict['meta.desc']);
        setMeta('meta[property="og:locale"]', 'content', info.locale || 'ru_RU');

        // URL with ?lang=
        const url = lang === 'ru' ? SITE_URL : (SITE_URL.replace(/\/$/, '') + '/?lang=' + lang);
        setMeta('meta[property="og:url"]', 'content', url);
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', url);

        // hreflang links
        document.querySelectorAll('link[data-i18n-hreflang]').forEach(el => el.remove());
        const head = document.head;
        Object.keys(LANGS).forEach(code => {
            const link = document.createElement('link');
            link.rel = 'alternate';
            link.hreflang = LANGS[code].hreflang || code;
            link.href = code === 'ru' ? SITE_URL : (SITE_URL.replace(/\/$/, '') + '/?lang=' + code);
            link.setAttribute('data-i18n-hreflang', code);
            head.appendChild(link);
        });
        const xdef = document.createElement('link');
        xdef.rel = 'alternate';
        xdef.hreflang = 'x-default';
        xdef.href = SITE_URL;
        xdef.setAttribute('data-i18n-hreflang', 'x-default');
        head.appendChild(xdef);

        // history URL
        try {
            const path = lang === 'ru' ? '/' : ('/?lang=' + lang);
            if (window.history && window.history.replaceState) {
                window.history.replaceState({ lang }, '', path);
            }
        } catch (e) {}
    }

    function applyLang(lang) {
        if (!LANGS[lang]) lang = 'ru';
        const dict = getDict(lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!dict[key]) return;
            const mode = el.getAttribute('data-i18n-mode') || 'text';
            if (mode === 'html') el.innerHTML = dict[key];
            else el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key]) el.setAttribute('aria-label', dict[key]);
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (dict[key]) el.setAttribute('alt', dict[key]);
        });

        updateSeo(lang);

        const current = document.getElementById('langCurrent');
        if (current && LANGS[lang]) {
            current.textContent = LANGS[lang].label;
            current.setAttribute('aria-label', LANGS[lang].name);
        }
        document.querySelectorAll('.lang-option').forEach(btn => {
            const active = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }

    function closeLangMenu() {
        const switcher = document.getElementById('langSwitcher');
        const toggle = document.getElementById('langToggle');
        if (switcher) switcher.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }

    function init() {
        const switcher = document.getElementById('langSwitcher');
        if (!switcher) return;

        switcher.innerHTML = '';
        switcher.classList.add('lang-dropdown');

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'lang-toggle';
        toggle.id = 'langToggle';
        toggle.setAttribute('aria-haspopup', 'listbox');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Language');

        const current = document.createElement('span');
        current.className = 'lang-current';
        current.id = 'langCurrent';
        current.textContent = 'RU';

        const chevron = document.createElement('span');
        chevron.className = 'lang-chevron';
        chevron.setAttribute('aria-hidden', 'true');
        chevron.textContent = '▾';

        toggle.appendChild(current);
        toggle.appendChild(chevron);

        const menu = document.createElement('div');
        menu.className = 'lang-menu';
        menu.id = 'langMenu';
        menu.setAttribute('role', 'listbox');
        menu.setAttribute('aria-label', 'Language');

        Object.keys(LANGS).forEach(code => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'lang-option';
            btn.setAttribute('data-lang', code);
            btn.setAttribute('role', 'option');
            btn.setAttribute('aria-selected', 'false');
            btn.innerHTML = '<span class="lang-option-code">' + LANGS[code].label + '</span>' +
                '<span class="lang-option-name">' + LANGS[code].name + '</span>';
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                applyLang(code);
                closeLangMenu();
            });
            menu.appendChild(btn);
        });

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const open = switcher.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        document.addEventListener('click', () => closeLangMenu());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLangMenu();
        });

        switcher.appendChild(toggle);
        switcher.appendChild(menu);

        let start = 'ru';
        try {
            const params = new URLSearchParams(window.location.search);
            const fromUrl = params.get('lang');
            if (fromUrl && LANGS[fromUrl]) start = fromUrl;
            else {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved && LANGS[saved]) start = saved;
            }
        } catch (e) {}
        applyLang(start);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.ElenaI18n = { applyLang, LANGS };
})();
