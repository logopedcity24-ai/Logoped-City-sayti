import { Branch, ServiceItem, MethodologyStep, Specialist, Course, Testimonial, FaqItem, ChildNeedItem, CertificateItem, TariffPlan } from '../types';

export const BRANCHES: Branch[] = [
  {
    id: 'urganch',
    name: 'Urganch filiali',
    nameRu: 'Ургенчский филиал',
    city: 'Urganch shahri',
    cityRu: 'город Ургенч',
    address: 'O‘zbekiston ko‘chasi, 49-uy',
    addressRu: 'ул. Узбекистан, дом 49',
    landmark: 'Al-Xorazmiy diagnostika markazi, 2-qavat',
    landmarkRu: 'Диагностический центр Аль-Хорезми, 2 этаж',
    phone: '+998 99 221 00 06',
    phoneRaw: '+998992210006',
    instagram: 'https://instagram.com/logoped_city_urganch',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=41.553518,60.628555',
    yandexMapUrl: 'https://yandex.uz/maps?whatshere%5Bpoint%5D=60.628555%2C41.553518&whatshere%5Bzoom%5D=17.532717&ll=60.62850414640536%2C41.55351641414563&z=17.532717&si=tryvg362dxpj5fdchtkb5kv2hm',
    yandexNaviUrl: 'https://yandex.uz/maps/?rtext=~41.553518,60.628555&rtt=auto',
    coords: { lat: 41.553518, lng: 60.628555 },
    hasCBO: false,
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    workHoursRu: 'Пн - Сб: 09:00 - 18:00 (Воскресенье: выходной)',
    features: [
      'Logopediya va defektologiya xonalari',
      'Sensor integratsiya zali',
      'ABA terapiya xonalari',
      'Art va musiqa terapiyasi burchagi',
      'Keng va shinam kutish zali'
    ],
    featuresRu: [
      'Кабинеты логопедии и дефектологии',
      'Зал сенсорной интеграции',
      'Кабинеты АВА-терапии',
      'Уголок арт- и музыкотерапии',
      'Просторный и удобный зал ожидания'
    ],
    imagePlaceholderColor: 'from-emerald-500 to-teal-700'
  },
  {
    id: 'xiva',
    name: 'Xiva filiali',
    nameRu: 'Хивинский филиал',
    city: 'Xiva shahri',
    cityRu: 'город Хива',
    address: 'Humonur gipermarketi yon tomoni',
    addressRu: 'Рядом с гипермаркетом Humonur',
    landmark: 'Humonur gipermarketi yoni',
    landmarkRu: 'Рядом с гипермаркетом Humonur',
    phone: '+998 50 785 00 09',
    phoneRaw: '+998507850009',
    instagram: 'https://instagram.com/logoped_city_xiva',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=41.380239,60.376539',
    yandexMapUrl: 'https://yandex.uz/maps?whatshere%5Bpoint%5D=60.376539261482606%2C41.38023896516848&whatshere%5Bzoom%5D=18.874556&ll=60.376537101347324%2C41.38016195851693&z=18.874556&si=tryvg362dxpj5fdchtkb5kv2hm',
    yandexNaviUrl: 'https://yandex.uz/maps/?rtext=~41.380239,60.376539&rtt=auto',
    coords: { lat: 41.380239, lng: 60.376539 },
    hasCBO: false,
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    workHoursRu: 'Пн - Сб: 09:00 - 18:00 (Воскресенье: выходной)',
    features: [
      'Individual logopedik xonalar',
      'Sensor integratsiya jihozlari',
      'Defektologik rivojlantirish vositalari',
      'Ota-onalar uchun qulay kutish zonasi'
    ],
    featuresRu: [
      'Индивидуальные логопедические кабинеты',
      'Оборудование сенсорной интеграции',
      'Дефектологические развивающие пособия',
      'Удобная зона ожидания для родителей'
    ],
    imagePlaceholderColor: 'from-teal-600 to-emerald-800'
  },
  {
    id: 'qoshkopir',
    name: 'Qo‘shko‘pir filiali',
    nameRu: 'Филиал Кошкупыр',
    city: 'Qo‘shko‘pir tumani',
    cityRu: 'Кошкупырский район',
    address: 'Baraka Avto binosi, 2-qavat',
    addressRu: 'Здание Baraka Avto, 2 этаж',
    landmark: 'Iqbol Shifo sanatoriyasi ro‘parasi',
    landmarkRu: 'Напротив санатория Iqbol Shifo',
    phone: '+998 50 785 00 06',
    phoneRaw: '+998507850006',
    instagram: 'https://instagram.com/logoped_city_qoshkopir',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=41.526432,60.362633',
    yandexMapUrl: 'https://yandex.uz/maps?whatshere%5Bpoint%5D=60.36263314206494%2C41.52643196660061&whatshere%5Bzoom%5D=17.35102&ll=60.36263314206494%2C41.52617496401149&z=17.35102&si=tryvg362dxpj5fdchtkb5kv2hm',
    yandexNaviUrl: 'https://yandex.uz/maps/?rtext=~41.526432,60.362633&rtt=auto',
    coords: { lat: 41.526432, lng: 60.362633 },
    hasCBO: true, // ONLY in Qo'shko'pir!
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    workHoursRu: 'Пн - Сб: 09:00 - 18:00 (Воскресенье: выходной)',
    features: [
      'MAXSUS CBO XONASI (Kundalik hayot ko‘nikmalari xonasi)',
      'Sensor integratsiya majmuasi',
      'Logopediya va artikulyatsiya xonasi',
      'AFK va harakat korreksiyasi zali',
      'ABA terapiya amaliyot xonasi'
    ],
    featuresRu: [
      'СПЕЦИАЛЬНАЯ КОМНАТА СБО (Социально-бытовая ориентировка)',
      'Комплекс сенсорной интеграции',
      'Кабинет логопедии и артикуляции',
      'Зал АФК и двигательной коррекции',
      'Практический кабинет АВА-терапии'
    ],
    imagePlaceholderColor: 'from-fuchsia-600 to-emerald-700'
  },
  {
    id: 'xonqa',
    name: 'Xonqa filiali',
    nameRu: 'Ханкинский филиал',
    city: 'Xonqa tumani',
    cityRu: 'Ханкинский район',
    address: 'Uchpaxta, Oybek–Umrbek kafesi binosi, 1-qavat',
    addressRu: 'Учпахта, здание кафе Ойбек-Умрбек, 1 этаж',
    landmark: 'Oybek–Umrbek kafesi binosi, 1-qavat',
    landmarkRu: 'Здание кафе Ойбек-Умрбек, 1 этаж',
    phone: '+998 50 785 00 04',
    phoneRaw: '+998507850004',
    instagram: 'https://instagram.com/logoped_city_xonqa',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=41.478988,60.764784',
    yandexMapUrl: 'https://yandex.uz/maps?whatshere%5Bpoint%5D=60.76478431110645%2C41.478987712671916&whatshere%5Bzoom%5D=18.928705&ll=60.76478431110645%2C41.47890161101453&z=18.928705&si=tryvg362dxpj5fdchtkb5kv2hm',
    yandexNaviUrl: 'https://yandex.uz/maps/?rtext=~41.478988,60.764784&rtt=auto',
    coords: { lat: 41.478988, lng: 60.764784 },
    hasCBO: false,
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    workHoursRu: 'Пн - Сб: 09:00 - 18:00 (Воскресенье: выходной)',
    features: [
      '1-qavatda qulay joylashuv',
      'Logopediya va defektologiya xonalari',
      'Sensor integratsiya maydonchasi',
      'Logoritmika va o‘yin terapiyasi'
    ],
    featuresRu: [
      'Удобное расположение на 1 этаже',
      'Кабинеты логопедии и дефектологии',
      'Площадка сенсорной интеграции',
      'Логоритмика и игровая терапия'
    ],
    imagePlaceholderColor: 'from-emerald-600 to-teal-900'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'logopediya',
    title: 'Logopediya',
    category: 'speech',
    categoryName: 'Nutq va Muloqot',
    shortDesc: 'Nutq tovushlarini to‘g‘ri talaffuz qilish, artikulyatsiya apparatini rivojlantirish va so‘z boyligini oshirish.',
    fullDesc: 'Logopedik mashg‘ulotlar orqali bolaning nutq apparati mushaklari mustahkamlanadi, tutilishlar (duduqlanish) bartaraf etishga yordam beriladi, tovushlar (R, L, Sh, J, S va boshqalar) to‘g‘ri qo‘yiladi va bog‘lanishli nutq shakllantiriladi.',
    goals: [
      'Artikulyatsion apparatni faollashtirish (gimnastika, massaj)',
      'Tovushlarni to‘g‘ri qo‘yish va avtomatlashtirish',
      'Faol va passiv so‘z boyligini kengaytirish',
      'Nutq nafasi va fonematik eshitishni rivojlantirish'
    ],
    forWhom: 'Nutqida tovush buzilishlari, nutq sekinligi (ZRR), duduqlanish yoki tushunarsiz talaffuz kuzatilayotgan bolalar uchun.',
    iconName: 'MessageSquareText',
    highlightTag: 'Eng talabgir'
  },
  {
    id: 'defektologiya',
    title: 'Defektologiya',
    category: 'speech',
    categoryName: 'Nutq va Tafakkur',
    shortDesc: 'Bilish jarayonlari: diqqat, xotira, mantiqiy fikrlash va fazoviy tasavvurni kompleks rivojlantirish.',
    fullDesc: 'Defektologik korreksiya bolaning psixik va aqliy rivojlanishidagi o‘ziga xosliklarni inobatga olgan holda, atrofdagi olamni idrok etish, ranglar, shakllar, mantiqiy bog‘liqliklar va o‘quv ko‘nikmalariga tayyorgarlikni mustahkamlaydi.',
    goals: [
      'Mantiqiy va tasviriy tafakkurni o‘stirish',
      'Eshitish va ko‘rish orqali eslab qolish hajmini kengaytirish',
      'Diqqatni bir joyga jamlash va barqarorlikni oshirish',
      'Fazoviy yo‘nalish va umumiy tushunchalarni shakllantirish'
    ],
    forWhom: 'Psixik rivojlanishi kechikayotgan (ZPR), o‘rganishda qiyinchilikka uchrayotgan yoki maktabga tayyorgarlik ko‘nikmalari sust bo‘lgan bolalar uchun.',
    iconName: 'Brain'
  },
  {
    id: 'aba-terapiya',
    title: 'ABA terapiya',
    category: 'behavior_sensory',
    categoryName: 'Xulq-atvor va Ko‘nikmalar',
    shortDesc: 'Amaliy xulq-atvor tahlili asosida ijobiy xatti-harakatlarni shakllantirish va nomaqbul xatti-harakatlarni kamaytirish.',
    fullDesc: 'ABA (Applied Behavior Analysis) xalqaro darajada ilmiy asoslangan metodika bo‘lib, unda bolaga ko‘rsatmalarga rioya qilish, mustaqil muloqotga kirishish, hissiyotlarini ifodalash va jamoada o‘zini tutish bosqichma-bosqich o‘rgatiladi.',
    goals: [
      'Ijtimoiy moslashuv va hamkorlik ko‘nikmalarini o‘rganish',
      'Nomaqbul xulq-atvorni (injiqlik, tajovuzkorlik) yumshatish',
      'So‘rov bildirish (muloqot) va ko‘rsatmalarga ergashish',
      'Ijobiy rag‘batlantirish tizimi orqali motivatsiyani oshirish'
    ],
    forWhom: 'Autizm spektri buzilishlari (ASD), diqqat yetishmovchiligi va giperfaollik (SDVG), muloqotga kirishmaydigan yoki xulq-atvorida qiyinchiliklar bo‘lgan bolalar uchun.',
    iconName: 'Sparkles',
    highlightTag: 'Ilmiy metodika'
  },
  {
    id: 'sensor-integratsiya',
    title: 'Sensor integratsiya',
    category: 'behavior_sensory',
    categoryName: 'Sensor Rivojlanish',
    shortDesc: 'Ko‘rish, eshitish, teginish, muvozanat va tana hissi (vestibulyar va propriotseptiv) signallarini uyg‘unlashtirish.',
    fullDesc: 'Sensor integratsiya xonalarida maxsus tebranish asboblari, to‘p basseynlari, og‘irlashtirilgan anjomlar va taktil yuzalar yordamida bola o‘z tanasini va atrof-muhitni to‘g‘ri his qilishni o‘rganadi, bu esa xotirjamlik va nutqqa bevosita ijobiy ta’sir qiladi.',
    goals: [
      'Sensor giper va gipo-sezgirlikni muvozanatlashtirish',
      'Vestibulyar apparat va fazoda muvozanatni yaxshilash',
      'Hissiy zo‘riqish va asabiylikni kamaytirish',
      'O‘z tanasini idrok etish va nozik harakatlarni boshqarish'
    ],
    forWhom: 'Tovush yoki yorug‘likdan bezovtalanadigan, teginishdan qochadigan, to‘xtovsiz harakat qiladigan yoki aksincha sust bolalar uchun.',
    iconName: 'Activity',
    highlightTag: 'Maxsus jihozlangan'
  },
  {
    id: 'afk-va-lfk',
    title: 'AFK va LFK',
    category: 'motor_life',
    categoryName: 'Harakat va Jismoniy',
    shortDesc: 'Moslashtirilgan jismoniy tarbiya va davolovchi gimnastika orqali tana harakatlari koordinatsiyasini yaxshilash.',
    fullDesc: 'Bolaning yoshiga va jismoniy imkoniyatlariga moslashtirilgan mashqlar to‘plami umumiy jismoniy chidamlilikni oshiradi, qad-qomatni to‘g‘rilashga ko‘maklashadi, nozik va yirik motorikani kuchaytiradi.',
    goals: [
      'Yirik va mayda motorikani, barmoqlar epchilligini oshirish',
      'Gavda mushaklarini mustahkamlash va to‘g‘ri qad-qomat',
      'Harakatlar muvofiqligi (koordinatsiya) va chaqqonlik',
      'Jismoniy faollik orqali miya qon aylanishini rag‘batlantirish'
    ],
    forWhom: 'Harakat koordinatsiyasida noaniqlik, mushak tonusi buzilishi yoki harakat sustligi bo‘lgan bolalar uchun.',
    iconName: 'Dumbbell'
  },
  {
    id: 'logoritmika',
    title: 'Logoritmika',
    category: 'speech',
    categoryName: 'Nutq va Ritm',
    shortDesc: 'Nutq, musiqiy ritm va tana harakatlarining uyg‘unlashgan qiziqarli o‘yinli mashg‘ulotlari.',
    fullDesc: 'Logoritmik mashg‘ulotlarda bolalar musiqiy ohang jo‘rligida she’rlar aytish, ritmik harakatlar bajarish va nafas mashqlarini o‘tkazish orqali nutq ravonligini tabiiy va qiziqarli tarzda rivojlantiradilar.',
    goals: [
      'Nutq sur’ati va intonatsiyasini yaxshilash',
      'Ritm tuyg‘usi va musiqiy eshitishni o‘stirish',
      'Jamoada boshqalar bilan birgalikda harakatlanish',
      'Nafas va ovoz balandligini to‘g‘ri boshqarish'
    ],
    forWhom: 'Nutq sur’ati buzilgan (juda tez yoki juda sekin), duduqlanuvchi yoki ritm bilan nutqni boyitishga muhtoj kichkintoylar uchun.',
    iconName: 'Music'
  },
  {
    id: 'art-ertak-musiqa',
    title: 'Art, ertak va musiqa terapiyasi',
    category: 'behavior_sensory',
    categoryName: 'Hissiy Rivojlanish',
    shortDesc: 'Ijodiy ifoda, rasmlar, loy bilan ishlash va ertaklar orqali bolaning hissiy olamini erkinlashtirish.',
    fullDesc: 'Bolaning ichki kechinmalarini, xavotir va qo‘rquvlarini ijodiy shaklda ifodalashiga yordam beruvchi terapiya turi. Bolada tasavvur kengayadi, stress kamayadi va o‘ziga bo‘lgan ishonch ortadi.',
    goals: [
      'Ichki qo‘rquv va xavotirlarni ijod orqali yengish',
      'Tasavvur, fantaziya va mayda motorikani charxlash',
      'O‘z hissiyotlarini tushunish va erkin ifodalash',
      'Ruhiy xotirjamlik va ichki uyg‘unlikni ta’minlash'
    ],
    forWhom: 'Uyatchan, tortinchoq, ichki xavotiri yuqori yoki his-tuyg‘ularini so‘z bilan yetkaza olmayotgan bolalar uchun.',
    iconName: 'Palette'
  },
  {
    id: 'cbo-kundalik-hayot',
    title: 'CBO — Kundalik hayot ko‘nikmalari',
    category: 'motor_life',
    categoryName: 'Amaliy Hayot Ko‘nikmalari',
    shortDesc: 'O‘z-o‘ziga xizmat, ovqatlanish, kiyinish va ijtimoiy mustaqillikni amaliy mashq qilish.',
    fullDesc: 'Kundalik turmush ko‘nikmalari (CBO) — bolani mustaqil hayotga tayyorlashning eng muhim yo‘nalishi. Bolalar mustaqil choy quyish, dasturxon tuzash, tugma qadash, poyabzal kiyish va gigiyena qoidalariga amaliy o‘rganadilar.',
    goals: [
      'O‘z-o‘ziga mustaqil xizmat ko‘rsatish (kiyinish, yuvinish)',
      'Oshxonada xavfsiz va to‘g‘ri ovqatlanish odatlari',
      'Uy yumushlarida mustaqillik va javobgarlik hissi',
      'Katta yoshda mustaqil yashash ko‘nikmalariga poydevor yaratish'
    ],
    forWhom: 'Barcha kundalik ishlarda ota-onaga to‘liq qaram bo‘lgan, mustaqil o‘zini eplay olmayotgan bolalar uchun.',
    iconName: 'Home',
    highlightTag: 'Qo‘shko‘pir filialida mavjud',
    specialBranchNote: 'DIQQAT: Maxsus jihozlangan CBO xonasi FAQAT Qo‘shko‘pir filialimizda tashkil etilgan.'
  },
  {
    id: 'ota-onalar-bilan-ishlash',
    title: 'Ota-onalar bilan ishlash',
    category: 'all',
    categoryName: 'Hamkorlik va Maslahat',
    shortDesc: 'Doimiy konsultatsiyalar, oylik hisobotlar va uy sharoitida qo‘llash uchun individual tavsiyalar.',
    fullDesc: 'Markazdagi mashg‘ulotlar samarasi uyda davom ettirilgandagina eng yaxshi natijani beradi. Shu sababli har bir mutaxassis ota-ona bilan muntazam aloqada bo‘lib, uy uchun aniq, tushunarli ko‘rsatmalar berib boradi.',
    goals: [
      'Mashg‘ulotlardagi dinamika bo‘yicha ota-onaga oylik hisobot',
      'Uy sharoitida bola bilan to‘g‘ri muloqot qilish usullarini o‘rgatish',
      'Oila muhitida sensor va xulqiy qulaylik yaratish bo‘yicha maslahatlar',
      'Ota-onaning ruhiy xotirjamligi va to‘g‘ri qo‘llab-quvvatlashini ta’minlash'
    ],
    forWhom: 'Farzandining rivojlanish jarayonida faol ishtirok etishni va to‘g‘ri yordam berishni xohlovchi barcha ota-onalar uchun.',
    iconName: 'Users',
    highlightTag: 'Doimiy hamkorlik'
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: '01',
    title: 'Dastlabki Baholash',
    description: 'Bolaning nutq, bilish, sensor, xulq-atvor va motorik holati mutaxassislar tomonidan har tomonlama o‘rganiladi.',
    duration: '45-60 daqiqa',
    details: [
      'Ota-ona bilan batafsil suhbat va shikoyatlarni tinglash',
      'Artikulyatsion apparat va nutq darajasini ko‘rikdan o‘tkazish',
      'Sensor sezgirlik va xulqiy reaksiyalarni kuzatish',
      'Bolaning kuchli tomonlari va ehtiyojlarini xaritalash'
    ],
    icon: 'SearchCheck'
  },
  {
    stepNumber: '02',
    title: 'Individual Dastur Tuzish',
    description: 'Har bir bolaning o‘ziga xos xususiyatidan kelib chiqib, bosqichma-bosqich shaxsiy korreksion-rivojlantiruvchi reja ishlab chiqiladi.',
    duration: '2-3 ish kuni ichida',
    details: [
      'Aniq, o‘lchanadigan va erishsa bo‘ladigan maqsadlarni belgilash',
      'Zarur mutaxassislar jamoasini shakllantirish (logoped, defektolog, ABA, sensor)',
      'Mashg‘ulotlar jadvali va haftalik yuklamani to‘g‘ri taqsimlash',
      'Dastur bilan ota-onani to‘liq tanishtirish va kelishish'
    ],
    icon: 'FileText'
  },
  {
    stepNumber: '03',
    title: 'Tizimli Mashg‘ulotlar',
    description: 'Zamonaviy metodikalar, o‘yin elementlari va maxsus jihozlar orqali individual hamda kichik guruhdagi mashg‘ulotlar o‘tkaziladi.',
    duration: 'Haftada 3-5 marotaba (30-45 daqiqadan)',
    details: [
      'Xavfsiz, iliq va bolaga do‘stona muhitda ishlash',
      'Qiziqish uyg‘otuvchi vizual va taktil o‘quv materiallari',
      'Har bir mashg‘ulot davomida bolaning kayfiyati va imkoniyatini hisobga olish',
      'Qadam-baqadam ko‘nikmalarni mustahkamlash'
    ],
    icon: 'Puzzle'
  },
  {
    stepNumber: '04',
    title: 'Monitoring va Qayta Aloqa',
    description: 'Rivojlanish dinamikasi muntazam tahlil qilinadi, ota-onaga hisobot beriladi va dasturga zaruriy o‘zgartirishlar kiritiladi.',
    duration: 'Har oy yakunida',
    details: [
      'Erishilgan natijalar va ijobiy o‘zgarishlarni qayd etish',
      'Ota-ona bilan oraliq konsultatsiya va savol-javob',
      'Uy sharoitida davom ettirish uchun tavsiyalar paketi',
      'Keyingi bosqich maqsadlarini belgilash'
    ],
    icon: 'TrendingUp'
  }
];

export const CHILD_NEEDS: ChildNeedItem[] = [
  {
    id: 'speech-delay',
    title: 'Nutq kechikishi va so‘zlarning kamligi',
    description: 'Bola yoshiga mos so‘zlar aytmaydi, so‘z boyligi kam yoki faqat imo-ishoralar orqali tushuntiradi.',
    category: 'speech',
    recommendedServices: ['Logopediya', 'Logoritmika', 'Defektologiya']
  },
  {
    id: 'sound-pronunciation',
    title: 'Tovushlar noto‘g‘ri talaffuzi va tutilishlar',
    description: 'Ayrim tovushlarni (R, L, Sh, S...) almashtirishi, tushirib qoldirishi yoki duduqlanish belgilari.',
    category: 'speech',
    recommendedServices: ['Logopediya', 'Logoritmika', 'Art, ertak va musiqa terapiyasi']
  },
  {
    id: 'no-response-name',
    title: 'Murojaatga va ismiga javob bermaslik',
    description: 'Bola chaqirilganda qaramasligi, ko‘z bilan muloqot o‘rnatishdan qochishi yoki eshitmayotgandek tuyulishi.',
    category: 'behavior',
    recommendedServices: ['ABA terapiya', 'Sensor integratsiya', 'Defektologiya']
  },
  {
    id: 'instruction-difficulty',
    title: 'Ko‘rsatmalarni tushunishdagi qiyinchiliklar',
    description: 'Oddiy topshiriq va ko‘rsatmalarni tushunmaslik, o‘ziga aytilgan gapni idrok eta olmaslik.',
    category: 'speech',
    recommendedServices: ['Defektologiya', 'Logopediya', 'ABA terapiya']
  },
  {
    id: 'hyperactivity-attention',
    title: 'Diqqat tarqoqligi va haddan tashqari giperfaollik',
    description: 'Bir joyda 2-3 daqiqa ham o‘tira olmaslik, topshiriqni oxirigacha yetkazmaslik, tez chalg‘ish.',
    category: 'behavior',
    recommendedServices: ['Sensor integratsiya', 'ABA terapiya', 'AFK va LFK']
  },
  {
    id: 'sensory-sensitivity',
    title: 'Sensor sezgirlik (ovoz, kiyim, yorug‘lik, teginish)',
    description: 'Baland ovozlardan quloqlarini yopishi, ma’lum kiyim matolarini kiymaslik, quchoqlashdan bezovtalanish.',
    category: 'sensory',
    recommendedServices: ['Sensor integratsiya', 'Art, ertak va musiqa terapiyasi']
  },
  {
    id: 'daily-skills-struggle',
    title: 'Kundalik mustaqillik ko‘nikmalarining sustligi',
    description: 'Qoshiq ushlash, ovqatlanish, kiyim kiyish, poyabzal bog‘lash va tozalik ishlarida to‘liq boshqalarga bog‘liqlik.',
    category: 'daily',
    recommendedServices: ['CBO — Kundalik hayot ko‘nikmalari (Qo‘shko‘pir)', 'AFK va LFK']
  },
  {
    id: 'zrr-zpr-asd',
    title: 'ZRR / ZPR / ZPRR / Autizm spektri rivojlanish bosqichlari',
    description: 'Kollektivga qo‘shilmaslik, takroriy xatti-harakatlar, muloqotning o‘ziga xosligi va kompleks qo‘llab-quvvatlashga ehtiyoj.',
    category: 'behavior',
    recommendedServices: ['ABA terapiya', 'Sensor integratsiya', 'Defektologiya', 'Logopediya']
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'spec-aziza',
    name: 'Atajanova Aziza Baxtiyarovna',
    nameRu: 'Атаджанова Азиза Бахтияровна',
    role: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    roleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    experience: 'Katta amaliy va kuratorlik tajribasi',
    experienceRu: 'Большой практический и кураторский опыт',
    education: 'VB-MAPP va amaliy xulq-atvor tahlili (ABA) bo‘yicha xalqaro mutaxassis',
    educationRu: 'Международный специалист по оценке VB-MAPP и прикладному анализу поведения (АВА)',
    branch: 'Barcha filiallar kuratori',
    branchRu: 'Куратор всех филиалов',
    specialization: [
      'VB-MAPP baholash va individual rivojlanish rejasi',
      'Defektologik va nutqiy korreksiya',
      'ABA terapiya (Amaliy xulq-atvor tahlili)',
      'Pedagogik dasturlarni ishlab chiqish va nazorat'
    ],
    specializationRu: [
      'Оценка VB-MAPP и индивидуальный план развития',
      'Дефектологическая и речевая коррекция',
      'АВА терапия (Прикладной анализ поведения)',
      'Разработка и контроль педагогических программ'
    ],
    avatarBg: 'bg-emerald-100 text-emerald-800',
    gender: 'female',
    photoUrl: '/specialists/aziza-atajanova.png',
    certificateCount: 10
  },
  {
    id: 'spec-shoira',
    name: 'Sultonova Shoira Davronbek qizi',
    nameRu: 'Султанова Шоира Давронбековна',
    role: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    roleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    experience: 'Oliy ma’lumotli davlat attestatsiyasidan o‘tgan mutaxassis',
    experienceRu: 'Дипломированный специалист с государственной аттестацией',
    education: 'Ajiniyoz nomidagi NDPI Bakalavr diplomi, Loonn Edu ABA va Denver sertifikatlari',
    educationRu: 'Диплом бакалавра НГПИ им. Ажинияза, международные сертификаты АВА и Денверской модели',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Autizm (RAS), ZPR, ZRR korreksiyasi',
      'Alaliya, Afaziya, Dizartriya, Dispraksiya',
      'Duduqlanish va nutq nuqsonlarini bartaraf etish',
      'Logopedik massaj va zondlar bilan mashg‘ulotlar'
    ],
    specializationRu: [
      'Коррекция аутизма (РАС), ЗПР, ЗРР',
      'Алалия, афазия, дизартрия, диспраксия',
      'Устранение заикания и речевых дефектов',
      'Логопедический массаж и зондовые техники'
    ],
    avatarBg: 'bg-teal-100 text-teal-800',
    gender: 'female',
    photoUrl: '/specialists/shoira-sultonova.png',
    certificateCount: 8
  },
  {
    id: 'spec-sojida',
    name: 'Palvanova Sojida Jur’atbekovna',
    nameRu: 'Пальванова Сожида Джуратбековна',
    role: 'Pedagog-Defektolog, Logoped',
    roleRu: 'Педагог-дефектолог, логопед',
    experience: 'Oliy ma’lumotli davlat attestatsiyasidan o‘tgan mutaxassis',
    experienceRu: 'Дипломированный специалист с государственной аттестацией',
    education: 'Ajiniyoz nomidagi NDPI Bakalavr diplomi, Sensor integratsiya sertifikatlari',
    educationRu: 'Диплом бакалавра НГПИ им. Ажинияза, сертификаты по сенсорной интеграции',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Duduqlanish, Dislaliya, Alaliya, Rinolaliya',
      'Autizm, ZPR, ZRR tashxisli bolalar korreksiyasi',
      'Sensor integratsiya va kognitiv rivojlanish',
      'Zamonaviy logopedik metodikalar orqali o‘qitish'
    ],
    specializationRu: [
      'Коррекция заикания, дислалии, алалии, ринолалии',
      'Работа с детьми с аутизмом, ЗПР, ЗРР',
      'Сенсорная интеграция и когнитивное развитие',
      'Современные коррекционные методики логопедии'
    ],
    avatarBg: 'bg-pink-100 text-pink-800',
    gender: 'female',
    photoUrl: '/specialists/sojida-palvanova.png',
    certificateCount: 5
  },
  {
    id: 'spec-yoqutjon',
    name: 'Sodiqjonova Yoqutjon',
    nameRu: 'Садикжанова Ёкуджан',
    role: 'ABA Terapevt, Sensor & Ergoterapiya Mutaxassisi',
    roleRu: 'АВА-терапевт, специалист по сенсорной интеграции',
    experience: 'Sertifikatlangan amaliyotchi mutaxassis',
    experienceRu: 'Сертифицированный специалист-практик',
    education: 'Ergoterapiya, Sensor integratsiya, VB-MAPP, Denver modeli va Logomassaj bo‘yicha xalqaro sertifikatlar',
    educationRu: 'Международные сертификаты по эрготерапии, сенсорной интеграции, VB-MAPP, Денверской модели и логомассажу',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Ergoterapiya va Sensor integratsiya terapiyasi',
      'VB-MAPP universal protokoli asosida maqsadli rivojlantirish',
      'Denver modeli: erta aralashuv va o‘yin ko‘nikmalarini shakllantirish',
      'Muammoli xulq-atvor bilan ishlash va hamkorlik o‘rnatish',
      'Ovoz toni va artikulyatsiya bo‘yicha maxsus logopedik massaj'
    ],
    specializationRu: [
      'Эрготерапия и сенсорная интеграционная терапия',
      'Развитие на основе универсального протокола VB-MAPP',
      'Денверская модель: раннее вмешательство и игротерапия',
      'Работа с проблемным поведением и развитие сотрудничества',
      'Логопедический массаж тона голоса и артикуляции'
    ],
    avatarBg: 'bg-amber-100 text-amber-800',
    gender: 'female',
    certificateCount: 5
  },
  {
    id: 'spec-dilnura',
    name: 'Olimova Dilnura Raximberganovna',
    nameRu: 'Олимова Дилнура Рахимбергановна',
    role: 'Defektolog-Logoped',
    roleRu: 'Дефектолог-логопед',
    experience: 'Amaliyotchi defektolog-logoped',
    experienceRu: 'Практикующий дефектолог-логопед',
    education: 'Korreksion pedagogika va Loonn Edu ABA asoslari kursi',
    educationRu: 'Коррекционная педагогика и курс основ АВА центра Loonn Edu',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Duduqlanish, Dislaliya, Alaliya, Rinolaliya',
      'Autizm, ZPR, ZRR diagnozli bolalar bilan ishlash',
      'Individual yondashuv asosida korreksiya',
      'Natijaga yo‘naltirilgan nutqiy mashg‘ulotlar'
    ],
    specializationRu: [
      'Коррекция заикания, дислалии, алалии',
      'Работа с диагнозами Аутизм, ЗПР, ЗРР',
      'Индивидуальный подход к каждому ребенку',
      'Ориентированные на результат речевые занятия'
    ],
    avatarBg: 'bg-emerald-100 text-emerald-800',
    gender: 'female',
    photoUrl: '/specialists/dilnura-olimova.png',
    certificateCount: 1
  },
  {
    id: 'spec-dildora',
    name: 'Sultonzarova Dildora',
    nameRu: 'Султонзарова Дилдора',
    role: 'ABA Terapevt (Xulq-atvor tahlilchisi)',
    roleRu: 'АВА-терапевт (поведенческий аналитик)',
    experience: 'Malakali sertifikatlangan ABA mutaxassisi',
    experienceRu: 'Квалифицированный сертифицированный АВА-терапевт',
    education: 'ABA Smart Academy (IBAO) xalqaro sertifikatsiyalangan dasturi',
    educationRu: 'Международная сертифицированная программа ABA Smart Academy (IBAO)',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Autizm (RAS), ZPR tashxislari bo‘yicha ABA terapiya',
      'Nutq va kognitiv rivojlanishda kechikishlarni bartaraf etish',
      'Ijobiy motivatsiya va moslashuv ko‘nikmalari',
      'O‘yin terapiyasi va ijtimoiy integratsiya'
    ],
    specializationRu: [
      'АВА терапия при РАС, ЗПР',
      'Устранение задержек речи и когнитивного развития',
      'Позитивная мотивация и адаптивные навыки',
      'Игровая терапия и социальная интеграция'
    ],
    avatarBg: 'bg-pink-100 text-pink-800',
    gender: 'female',
    photoUrl: '/specialists/dildora-sultonzarova.png',
    certificateCount: 1
  },
  {
    id: 'spec-nodira',
    name: 'Jumaniyozova Nodira Ismoil qizi',
    nameRu: 'Жуманиёзова Нодира Исмоил кизи',
    role: 'Maxsus Pedagog (O‘qituvchi-Logoped)',
    roleRu: 'Специальный педагог (учитель-логопед)',
    experience: 'Oliy ma’lumotli davlat attestatsiyasidan o‘tgan mutaxassis',
    experienceRu: 'Дипломированный специалист с государственной аттестацией',
    education: 'Nizomiy nomidagi O‘zbekiston Milliy Pedagogika Universiteti (Bakalavr)',
    educationRu: 'Национальный педагогический университет Узбекистана им. Низами (Бакалавр)',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Maxsus pedagogika (Logopediya) metodikasi',
      'Nutq tovushlarini to‘g‘ri qo‘yish va fonematik rivojlanish',
      'Artikulyatsion apparatni faollashtirish',
      'Maktabga tayyorgarlik va bog‘lanishli nutqni o‘stirish'
    ],
    specializationRu: [
      'Специальная педагогика (Логопедия)',
      'Постановка звуков и фонематическое развитие',
      'Активизация артикуляционного аппарата',
      'Подготовка к школе и развитие связной речи'
    ],
    avatarBg: 'bg-indigo-100 text-indigo-800',
    gender: 'female',
    certificateCount: 1
  },
  {
    id: 'spec-qunduz',
    name: 'Abdrimova Qunduz',
    nameRu: 'Абдримова Кундуз',
    role: 'ABA Terapevt (Xulq-atvor tahlilchisi)',
    roleRu: 'АВА-терапевт (поведенческий аналитик)',
    experience: 'Malakali ABA mutaxassisi',
    experienceRu: 'Квалифицированный АВА-специалист',
    education: 'Amaliy xulq-atvor tahlili (ABA) va bolalar rivojlanishi',
    educationRu: 'Прикладной анализ поведения (АВА) и развитие детей',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Autizm, ZPR va RAS tashxisli bolalar bilan ishlash',
      'Nutq va rivojlanishdagi kechikishlarni korreksiya qilish',
      'Xulq-atvor tahlili va ijtimoiy muloqot',
      'Mustaqil hayotiy ko‘nikmalarni shakllantirish'
    ],
    specializationRu: [
      'Работа с детьми с аутизмом, ЗПР и РАС',
      'Коррекция задержек речи и развития',
      'Анализ поведения и социальное общение',
      'Формирование жизненных навыков самостоятельности'
    ],
    avatarBg: 'bg-fuchsia-100 text-fuchsia-800',
    gender: 'female',
    photoUrl: '/specialists/qunduz-abdrimova.png'
  },
  {
    id: 'spec-oybek',
    name: 'Ollaberganov Oybek',
    nameRu: 'Оллаберганов Ойбек',
    role: 'Sensor Integratsiya Mutaxassisi, Defektolog',
    roleRu: 'Специалист по сенсорной интеграции, дефектолог',
    experience: 'Sertifikatlangan sensor integratsiya mutaxassisi',
    experienceRu: 'Сертифицированный специалист по сенсорной интеграции',
    education: 'Neuro Logik markazi («Sensor integratsiya va Autizm» dasturi)',
    educationRu: 'Центр Neuro Logik («Сенсорная интеграция и аутизм»)',
    branch: 'Logoped City filiali',
    branchRu: 'Филиал Logoped City',
    specialization: [
      'Sensor integratsiya va taktil-vestibulyar stimulyatsiya',
      'Autizm (RAS) va giperfaollikda (SDVG) sensor korreksiya',
      'Propriotseptiv sezgirlik va harakat koordinatsiyasi',
      'Sensor xonada individual diagnostika va mashg‘ulotlar'
    ],
    specializationRu: [
      'Сенсорная интеграция и тактильно-вестибулярная стимуляция',
      'Сенсорная коррекция при аутизме (РАС) и СДВГ',
      'Проприоцептивная чувствительность и координация движений',
      'Индивидуальная диагностика и занятия в сенсорной комнате'
    ],
    avatarBg: 'bg-cyan-100 text-cyan-800',
    gender: 'male',
    certificateCount: 1
  }
];

export const CERTIFICATES: CertificateItem[] = [
  // ==================== ATAJANOVA AZIZA BAXTIYAROVNA (10 ta) ====================
  {
    id: 'cert-aziza-aba-ertz',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Amaliy xulq-atvor tahlili (ABA) xalqaro sertifikatsiyalangan kursi',
    titleRu: 'Сертификационный курс по прикладному анализу поведения (АВА)',
    type: 'certificate',
    issuer: 'Юлия Эрц (МА, BCBA) xalqaro dasturi (Sertifikat № PR1-0621-095)',
    issuerRu: 'Программа сертифицированного аналитика поведения Юлии Эрц (МА, ВСВА)',
    issueDate: '60 o‘quv soati, 30.06.2021',
    imageUrl: '/certificates/aziza-atajanova-aba-ertz.jpg',
    description: '«Базисные принципы и методы прикладного анализа поведения (АВА)» dasturini muvaffaqiyatli tamomlaganlik to‘g‘risidagi rasmiy xalqaro sertifikat.',
    descriptionRu: 'Официальный международный сертификат об успешном окончании курса «Базисные принципы и методы прикладного анализа поведения (АВА)» (60 часов).',
    badge: 'ABA Terapiya (BCBA)',
    badgeRu: 'АВА-терапия (BCBA)'
  },
  {
    id: 'cert-aziza-pro-zaikanie',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Klinik logopediya: Duduqlanishni bartaraf etish (PRO Заикание)',
    titleRu: 'Клиническая логопедия: преодоление заикания (PRO Заикание)',
    type: 'certificate',
    issuer: 'Всемирное сообщество экспертов в области специального образования',
    issuerRu: 'Всемирное сообщество экспертов специального образования',
    issueDate: 'Moskva, Iyul 2022',
    imageUrl: '/certificates/aziza-atajanova-pro-zaikanie.jpg',
    description: 'Duduqlanish sabablari, mexanizmlari, chuqur logopedik diagnostika va zamonaviy kompleks metodlar orqali duduqlanishni bartaraf etish bo‘yicha xalqaro kurs.',
    descriptionRu: 'Причины, механизмы, специфика обследования и современные комплексные подходы преодоления заикания у детей и подростков.',
    badge: 'Duduqlanish (PRO)',
    badgeRu: 'Заикание (PRO)'
  },
  {
    id: 'cert-aziza-intellekt-defektologiya',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Defektologiya: Aqliy yetishmovchiligi bo‘lgan bolalar bilan ishlash',
    titleRu: 'Дефектология: дети с интеллектуальной недостаточностью',
    type: 'certificate',
    issuer: 'Neyropsixolog Olesya Tarasova & Tatyana Xoxlova amaliyot dasturi',
    issuerRu: 'Программа нейропсихологов Олеси Тарасовой и Татьяны Хохловой',
    issueDate: 'May - Iyun 2023',
    imageUrl: '/certificates/aziza-atajanova-intellekt-defektologiya.jpg',
    description: 'Intellektual yetishmovchiligi bo‘lgan bolalarni defektologik, xulqiy va ergoterapevtik metodlar orqali korreksiya qilish bo‘yicha amaliy stajirovka.',
    descriptionRu: 'Успешная стажировка и сдача тестов по комплексной коррекции детей с интеллектуальными нарушениями и задержкой развития.',
    badge: 'Defektologiya',
    badgeRu: 'Дефектология'
  },
  {
    id: 'cert-aziza-neyropsixologiya',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Neyropsixologiya asoslari: Logopediyada neyroyondashuv',
    titleRu: 'Основы нейропсихологии. Нейроподход в логопедии',
    type: 'certificate',
    issuer: 'Tarasova O.A. & Xoxlova T.A.',
    issuerRu: 'Тарасова О.А. и Хохлова Т.А.',
    issueDate: 'Noyabr - Dekabr 2021',
    imageUrl: '/certificates/aziza-atajanova-neyropsixologiya.jpg',
    description: 'Bosh miya yarimsharlari faoliyati, neyropedagogika va logopediyada neyroyondashuv asosida nutqiy funktsiyalarni qayta tiklash amaliyoti.',
    descriptionRu: 'Нейропсихологический подход в логопедической практике: межполушарные связи, сенсомоторная стимуляция и запуск речи.',
    badge: 'Neyropsixologiya',
    badgeRu: 'Нейропсихология'
  },
  {
    id: 'cert-aziza-nutqiy-agnoziya',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Nutqiy eshitish agnoziyasi (Речевая слуховая агнозия)',
    titleRu: 'Речевая слуховая агнозия у детей',
    type: 'certificate',
    issuer: 'Neyropsixolog Olesya Tarasova',
    issuerRu: 'Нейропсихолог Олеся Тарасова',
    issueDate: 'Noyabr - Dekabr 2021',
    imageUrl: '/certificates/aziza-atajanova-nutqiy-eshitish-agnoziyasi.jpg',
    description: 'Nutq tovushlarini eshitib farqlay olmaslik (fonematik idrok buzilishi) va nutqiy eshitish agnoziyasini korreksiyalash bo‘yicha stajirovka.',
    descriptionRu: 'Диагностика и преодоление речевой слуховой агнозии, восстановление слухоречевого внимания и фонематического восприятия.',
    badge: 'Eshitish Agnoziyasi',
    badgeRu: 'Слуховая агнозия'
  },
  {
    id: 'cert-aziza-ipap-aba-xulq',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'RAS bolalarda nomaqbul xulq-atvorni ABA metodlari bilan korreksiyalash',
    titleRu: 'Коррекция нежелательного поведения детей с РАС методами ПАП',
    type: 'certificate',
    issuer: 'Институт прикладного анализа поведения и психолого-социальных технологий (ИПАП, Москва)',
    issuerRu: 'АНО «Институт прикладного анализа поведения» (ИПАП, Москва)',
    issueDate: 'Moskva, 2024-yil',
    imageUrl: '/certificates/aziza-atajanova-ipap-aba-xulq.jpg',
    description: 'Autizm spektri buzilishi bo‘lgan bolalarda nomaqbul xatti-harakatlarni amaliy xulq-atvor tahlili (ABA/ПАП) vositalari orqali tuzatish.',
    descriptionRu: 'Сертификат участника вебинара по коррекции нежелательного поведения детей с РАС методами прикладного анализа поведения.',
    badge: 'IPAP Moskva ABA',
    badgeRu: 'ИПАП Москва АВА'
  },
  {
    id: 'cert-aziza-defektologlar-assotsiatsiyasi-aba',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Autizm: Innovatsion ta’limiy korreksion rivojlantiruvchi uslublar (ABA)',
    titleRu: 'Аутизм: Инновационные образовательные коррекционные методики (АВА)',
    type: 'certificate',
    issuer: 'O‘zbekiston Defektologlar Assotsiatsiyasi (Sertifikat № 18)',
    issuerRu: 'Ассоциация дефектологов Узбекистана (Сертификат № 18)',
    issueDate: 'Toshkent, 2019-yil',
    imageUrl: '/certificates/aziza-atajanova-defektologlar-assotsiatsiyasi-aba.jpg',
    description: 'Autizm tashxisli bolalarda xulq-atvorni tahlil qilish va maxsus korreksion ta’lim dasturlari asosida ishlash bo‘yicha assotsiatsiya seminari.',
    descriptionRu: 'Семинар Ассоциации дефектологов Узбекистана под руководством проф. Муминовой Л.Р. по методикам работы с детьми с аутизмом.',
    badge: 'Defektologlar Assotsiatsiyasi',
    badgeRu: 'Ассоциация дефектологов'
  },
  {
    id: 'cert-aziza-logos-autizm',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Autizm sindromli va rivojlanishida nuqsoni bo‘lgan bolalarni jamiyatga moslashtirish',
    titleRu: 'Социальная адаптация детей с аутизмом и нарушениями развития',
    type: 'certificate',
    issuer: 'LOGOS MARKAZ Malaka oshirish kursi (Sertifikat № 83, Prof. Mo‘minova L.R.)',
    issuerRu: 'Учебный центр LOGOS MARKAZ (Сертификат № 83, проф. Муминова Л.Р.)',
    issueDate: '12 soat, Toshkent, 2021-yil',
    imageUrl: '/certificates/aziza-atajanova-logos-autizm.jpg',
    description: 'Rivojlanishida o‘ziga xosligi bo‘lgan bolalarni ijtimoiylashtirish, jamiyatga moslashtirish va integratsiya qilish texnologiyalari.',
    descriptionRu: 'Курс повышения квалификации по методикам социальной адаптации и интеграции в общество детей с аутизмом и задержками развития.',
    badge: 'Autizm Moslashtirish',
    badgeRu: 'Адаптация при аутизме'
  },
  {
    id: 'cert-aziza-denas-terapiya',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Denas terapiya logopedik amaliyotda yordamchi ta’sir usuli sifatida',
    titleRu: 'ДЭНАС-терапия как вспомогательный метод в логопедической практике',
    type: 'certificate',
    issuer: 'LOGOS O‘quv Markazi (Prof. Mo‘minova L.R., Karimova Sh.T.)',
    issuerRu: 'Учебный центр LOGOS (проф. Муминова Л.Р., Каримова Ш.Т.)',
    issueDate: '24.07.2022, Toshkent',
    imageUrl: '/certificates/aziza-atajanova-denas-terapiya.jpg',
    description: 'Logopedik korreksiyada Denas apparat terapiyasidan foydalanish va artikulyatsiya mushaklarini faollashtirish kursi.',
    descriptionRu: 'Курс применения ДЭНАС-терапии в логопедической практике для стимуляции артикуляционной мускулатуры и речевых зон.',
    badge: 'Denas Terapiya',
    badgeRu: 'ДЭНАС-терапия'
  },
  {
    id: 'cert-aziza-eu-inklyuziv-talim',
    specialistId: 'spec-aziza',
    specialistName: 'Atajanova Aziza Baxtiyarovna',
    specialistNameRu: 'Атаджанова Азиза Бахтияровна',
    specialistRole: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    specialistRoleRu: 'Куратор Logoped City, Дефектолог, АВА-терапевт',
    title: 'Alohida ehtiyojli bolalar uchun inklyuziv ta’lim dasturi',
    titleRu: 'Инклюзивное образование для детей с особыми потребностями',
    type: 'certificate',
    issuer: 'Yevropa Ittifoqining EuropeAid taraqqiyot dasturi (2014/338-454 loyihasi)',
    issuerRu: 'Программа EuropeAid Европейского Союза (Проект 2014/338-454)',
    issueDate: 'Urganch shahri, Yevropa Ittifoqi granti',
    imageUrl: '/certificates/aziza-atajanova-eu-inklyuziv-talim.jpg',
    description: 'O‘zbekistonda maxsus ehtiyojli bolalar uchun zamonaviy inklyuziv ta’lim muhitini yaratish bo‘yicha xalqaro Yevropa Ittifoqi dasturi.',
    descriptionRu: 'Сертификат участия в международном тренинге педагогов в рамках европейского проекта развития инклюзивного образования в Узбекистане.',
    badge: 'Yevropa Ittifoqi (EU)',
    badgeRu: 'Европейский Союз (EU)'
  },

  // ==================== SULTONOVA SHOIRA DAVRONBEK QIZI (8 ta) ====================
  {
    id: 'cert-shoira-diplom',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Davlat Oliy Ma’lumot Diplomi: Pedagog-Defektolog (Logopediya)',
    titleRu: 'Государственный диплом бакалавра: Педагог-дефектолог (Логопедия)',
    type: 'diploma',
    issuer: 'Ajiniyoz nomidagi Nukus Davlat Pedagogika Instituti',
    issuerRu: 'Нукусский государственный педагогический институт имени Ажинияза',
    issueDate: '29.06.2024 (Qayd raqami: 1784)',
    imageUrl: '/certificates/shoira-sultonova-diplom.jpg',
    description: 'Defektologiya (logopediya) ta’lim yo‘nalishi bo‘yicha davlat attestatsiyasi qaroriga binoan Bakalavr darajasi va Pedagog-Defektolog mutaxassisligi.',
    descriptionRu: 'Государственный диплом о высшем образовании по направлению Дефектология (логопедия) с присвоением квалификации Педагог-дефектолог.',
    badge: 'Davlat Bakalavr Diplomi',
    badgeRu: 'Диплом бакалавра'
  },
  {
    id: 'cert-shoira-loonn-edu-aba',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Autizm spektri buzilishi (RAS) va nutqiy nuqsonlarda ABA asoslari',
    titleRu: 'Основы АВА для детей с расстройствами аутистического спектра (РАС)',
    type: 'certificate',
    issuer: 'Loonn Edu xalqaro markazi (Trener: Sattarova Z.Sh., IBA, CBA-S)',
    issuerRu: 'Центр Loonn Edu (Тренер: Саттарова З.Ш., IBA, CBA-S)',
    issueDate: '10 soatlik maxsus kurs va imtihon',
    imageUrl: '/certificates/shoira-sultonova-loonn-edu-aba.jpg',
    description: 'RAS va aqliy hamda nutqiy kechikishlari bo‘lgan bolalar bilan ishlashda amaliy xulq tahlili (ABA) metodikalarini qo‘llash sertifikati.',
    descriptionRu: 'Сертификат об окончании курса и сдачи экзамена по методикам АВА при работе с детьми с аутизмом и речевыми нарушениями.',
    badge: 'ABA Terapiya',
    badgeRu: 'АВА-терапия'
  },
  {
    id: 'cert-shoira-denver-modeli',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Denver modeli bo‘yicha erta aralashuv va o‘yin ko‘nikmalarini rivojlantirish',
    titleRu: 'Раннее вмешательство по Денверской модели и развитие игровых навыков',
    type: 'certificate',
    issuer: 'ABA Angel Center (Xulq-atvor tahlilchisi CBA-S Zuhra Shuhratovna)',
    issuerRu: 'Центр ABA Angel (Аналитик поведения CBA-S Зухра Шухратовна)',
    issueDate: 'Toshkent shahri',
    imageUrl: '/certificates/shoira-sultonova-denver-modeli.jpg',
    description: 'Ilk yoshdagi bolalarda o‘yin faoliyati va muloqotni xalqaro Denver modeli bo‘yicha erta rivojlantirish dasturi sertifikati.',
    descriptionRu: 'Сертификат по методологии Денверской модели раннего вмешательства и формированию игровых навыков у детей.',
    badge: 'Denver Modeli',
    badgeRu: 'Денверская модель'
  },
  {
    id: 'cert-shoira-nutq-tashxis',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Nutqida nuqsoni bo‘lgan bolalarni tashxislash, tuzatish usullari va texnikalari',
    titleRu: 'Диагностика и техники коррекции детей с речевыми нарушениями',
    type: 'certificate',
    issuer: '«Logopedy Uzbekistana» markazi (Azizova S.F., Baxadirova M.A.)',
    issuerRu: 'Центр «Логопеды Узбекистана» (Азизова С.Ф., Бахадирова М.А.)',
    issueDate: 'Toshkent, 2024-yil',
    imageUrl: '/certificates/shoira-sultonova-nutq-tashxis-tuzatish.jpg',
    description: 'Nutq apparati diagnostikasi, dislaliya, dizartriya va alaliyani bartaraf qilish bo‘yicha amaliy tajriba kursi.',
    descriptionRu: 'Практический сертификат по дифференциальной диагностике и современным методикам коррекции дефектов речи.',
    badge: 'Nutq Diagnostikasi',
    badgeRu: 'Диагностика речи'
  },
  {
    id: 'cert-shoira-logomassaj',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Nutq patologiyasida uchraydigan past va baland tonus bo‘yicha Logomassaj',
    titleRu: 'Логомассаж при гипер- и гипотонусе артикуляционного аппарата',
    type: 'certificate',
    issuer: '«Logopedy Uzbekistana» markazi (Azizova S.F., Baxadirova M.A.)',
    issuerRu: 'Центр «Логопеды Узбекистана» (Азизова С.Ф., Бахадирова М.А.)',
    issueDate: 'Toshkent, 2024-yil',
    imageUrl: '/certificates/shoira-sultonova-logomassaj.jpg',
    description: 'Artikulyatsiya mushaklarining tonusini normallashtirish va differentsial logopedik massaj texnikalari amaliyoti.',
    descriptionRu: 'Сертификат по технике дифференцированного логопедического массажа при мышечном гипер- и гипотонусе у детей.',
    badge: 'Logomassaj',
    badgeRu: 'Логомассаж'
  },
  {
    id: 'cert-shoira-logo-bilim',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Logopediya asoslari bo‘yicha maxsus seminar-treyning',
    titleRu: 'Семинар-тренинг по современным основам логопедии',
    type: 'certificate',
    issuer: 'Logo Bilim markazi (Rahbar: Isroilova Sokina Zafarovna, Litsenziya: 027556)',
    issuerRu: 'Центр Logo Bilim (Руководитель: Исроилова Сокина Зафаровна)',
    issueDate: 'Toshkent, 2024-yil',
    imageUrl: '/certificates/shoira-sultonova-logo-bilim-asoslari.jpg',
    description: 'Logopediyada nutq rivojlantirishning ilg‘or amaliyotlari va usullari bo‘yicha intensiv seminar sertifikati.',
    descriptionRu: 'Сертификат практического тренинга по фундаментальным основам и современным методам логопедии.',
    badge: 'Logo Bilim',
    badgeRu: 'Logo Bilim'
  },
  {
    id: 'cert-shoira-ilmiy-maqola-prikus',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Xalqaro Ilmiy Maqola Nashri Sertifikati',
    titleRu: 'Сертификат о публикации в международном научном журнале',
    type: 'certificate',
    issuer: 'V Международный журнал научных исследований «Научный Фокус» (Научный Импульс)',
    issuerRu: 'Международный научный журнал «Научный Фокус» / «Научный Импульс»',
    issueDate: '20-mart 2024-yil (№ 9755-л)',
    imageUrl: '/certificates/shoira-sultonova-ilmiy-maqola-prikus.jpg',
    description: '«Речевые дефекты, возникающие под влиянием прикуса, и способы их устранения» mavzusidagi mualliflik ilmiy maqolasi uchun taqdim etilgan.',
    descriptionRu: 'Награждена за научную работу: «Речевые дефекты, возникающие под влиянием прикуса, и способы их устранения».',
    badge: 'Ilmiy Nashr',
    badgeRu: 'Научная публикация'
  },
  {
    id: 'cert-shoira-med-city-davolash',
    specialistId: 'spec-shoira',
    specialistName: 'Sultonova Shoira Davronbek qizi',
    specialistNameRu: 'Султанова Шоира Давронбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped, ABA Terapevt',
    specialistRoleRu: 'Педагог-дефектолог, логопед, АВА-терапевт',
    title: 'Bolalardagi nutqiy buzilishni zamonaviy yo‘l bilan davolash',
    titleRu: 'Современные методы лечения и коррекции речевых нарушений у детей',
    type: 'certificate',
    issuer: 'Med City Klinikasi (Shakarov A., Qurbonov R., Solayeva S., Atajanova A.)',
    issuerRu: 'Клиника Med City (Шакаров А., Курбонов Р., Солаева С., Атаджанова А.)',
    issueDate: 'Urganch shahri',
    imageUrl: '/certificates/shoira-sultonova-med-city-nutqiy-davolash.jpg',
    description: 'Tibbiyot fanlari nomzodi, yetakchi bolalar nevrologlari va logopedlari hamkorligidagi ilmiy-amaliy seminar sertifikati.',
    descriptionRu: 'Сертификат за участие в междисциплинарном семинаре детских неврологов, психологов и логопедов по лечению речевых расстройств.',
    badge: 'Med City Konferensiya',
    badgeRu: 'Конференция Med City'
  },

  // ==================== PALVANOVA SOJIDA JUR'ATBEKOVNA (5 ta) ====================
  {
    id: 'cert-sojida-diplom',
    specialistId: 'spec-sojida',
    specialistName: 'Palvanova Sojida Jur’atbekovna',
    specialistNameRu: 'Пальванова Сожида Джуратбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped',
    specialistRoleRu: 'Педагог-дефектолог, логопед',
    title: 'Davlat Oliy Ma’lumot Diplomi: Pedagog-Defektolog (Logopediya)',
    titleRu: 'Государственный диплом бакалавра: Педагог-дефектолог (Логопедия)',
    type: 'diploma',
    issuer: 'Ajiniyoz nomidagi Nukus Davlat Pedagogika Instituti',
    issuerRu: 'Нукусский государственный педагогический институт имени Ажинияза',
    issueDate: '29.06.2024 (Qayd raqami: 1781)',
    imageUrl: '/certificates/sojida-palvanova-diplom.jpg',
    description: 'Defektologiya (logopediya) ta’lim yo‘nalishi bo‘yicha Bakalavr darajasi va Pedagog-Defektolog kvalifikatsiyasi berilganligi to‘g‘risida davlat hujjati.',
    descriptionRu: 'Государственный диплом о высшем образовании по направлению Дефектология (логопедия) с квалификацией Педагог-дефектолог.',
    badge: 'Davlat Bakalavr Diplomi',
    badgeRu: 'Диплом бакалавра'
  },
  {
    id: 'cert-sojida-sensor-integratsiya',
    specialistId: 'spec-sojida',
    specialistName: 'Palvanova Sojida Jur’atbekovna',
    specialistNameRu: 'Пальванова Сожида Джуратбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped',
    specialistRoleRu: 'Педагог-дефектолог, логопед',
    title: 'Sensor integratsiya usullari va texnikalari amaliyoti',
    titleRu: 'Методы и техники сенсорной интеграции в коррекционной практике',
    type: 'certificate',
    issuer: '«Logopedy Uzbekistana» markazi (Yetakchi defektolog-logoped Azizova S.F.)',
    issuerRu: 'Центр «Логопеды Узбекистана» (Ведущий дефектолог-логопед Азизова С.Ф.)',
    issueDate: 'Toshkent, 2024-yil',
    imageUrl: '/certificates/sojida-palvanova-sensor-integratsiya.jpg',
    description: 'Bolalarning hissiy va sensor signallarni to‘g‘ri qabul qilishi, diqqatni jamlashi va nutqiy faollashuvini sensor integratsiya orqali rag‘batlantirish.',
    descriptionRu: 'Сертификат по практическому освоению методов сенсорной интеграции для детей с РАС, гиперактивностью и речевыми задержками.',
    badge: 'Sensor Integratsiya',
    badgeRu: 'Сенсорная интеграция'
  },
  {
    id: 'cert-sojida-nutq-tashxis',
    specialistId: 'spec-sojida',
    specialistName: 'Palvanova Sojida Jur’atbekovna',
    specialistNameRu: 'Пальванова Сожида Джуратбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped',
    specialistRoleRu: 'Педагог-дефектолог, логопед',
    title: 'Nutqida nuqsoni bo‘lgan bolalarni tashxislash, tuzatish usullari va texnikalari',
    titleRu: 'Диагностика и техники коррекции детей с речевыми нарушениями',
    type: 'certificate',
    issuer: '«Logopedy Uzbekistana» markazi (Azizova S.F., Baxadirova M.A.)',
    issuerRu: 'Центр «Логопеды Узбекистана» (Азизова С.Ф., Бахадирова М.А.)',
    issueDate: 'Toshkent, 2024-yil',
    imageUrl: '/certificates/sojida-palvanova-nutq-tashxis-tuzatish.jpg',
    description: 'Nutqiy buzilishlarni kompleks tekshirish, shaxsiy korreksion mashg‘ulotlar rejasini tuzish va tovushlarni korreksiyalash texnikalari.',
    descriptionRu: 'Сертификат по диагностике, дифференциации и методикам коррекционной работы с детьми с речевыми дефектами.',
    badge: 'Nutq Diagnostikasi',
    badgeRu: 'Диагностика речи'
  },
  {
    id: 'cert-sojida-logo-bilim',
    specialistId: 'spec-sojida',
    specialistName: 'Palvanova Sojida Jur’atbekovna',
    specialistNameRu: 'Пальванова Сожида Джуратбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped',
    specialistRoleRu: 'Педагог-дефектолог, логопед',
    title: 'Logopediya asoslari bo‘yicha intensiv seminar-treyning',
    titleRu: 'Интенсивный тренинг по современным основам логопедии',
    type: 'certificate',
    issuer: 'Logo Bilim o‘quv markazi (Isroilova Sokina Zafarovna)',
    issuerRu: 'Учебный центр Logo Bilim (Исроилова Сокина Зафаровна)',
    issueDate: 'Toshkent, 2024-yil',
    imageUrl: '/certificates/sojida-palvanova-logo-bilim-asoslari.jpg',
    description: 'Logopedik korreksiyaning nazariy va amaliy yangicha metodlari bo‘yicha seminar-treyning sertifikati.',
    descriptionRu: 'Сертификат по фундаментальным основам логопедической помощи, постановке звуков и артикуляционной гимнастике.',
    badge: 'Logo Bilim',
    badgeRu: 'Logo Bilim'
  },
  {
    id: 'cert-sojida-ilmiy-maqola-pedagog',
    specialistId: 'spec-sojida',
    specialistName: 'Palvanova Sojida Jur’atbekovna',
    specialistNameRu: 'Пальванова Сожида Джуратбековна',
    specialistRole: 'Pedagog-Defektolog, Logoped',
    specialistRoleRu: 'Педагог-дефектолог, логопед',
    title: 'Respublika Ilmiy Maqolasi uchun Sertifikat',
    titleRu: 'Сертификат за научную статью в республиканском журнале «Педагог»',
    type: 'certificate',
    issuer: '«Pedagog» Respublika ilmiy-uslubiy jurnali (Best Publication, Impact Factor 6.994)',
    issuerRu: 'Республиканский научно-методический журнал «Педагог» (Impact Factor 6.994)',
    issueDate: '15.03.2024 Sana',
    imageUrl: '/certificates/sojida-palvanova-ilmiy-maqola-pedagog.jpg',
    description: '«Nutq nuqsoniga ega bolalarni tarbiyalashda xalq og‘zaki ijodiyoti namunalaridan foydalanishning ahamiyati» nomli mualliflik ilmiy maqolasi uchun berilgan.',
    descriptionRu: 'Награждена за статью об использовании образцов устного народного творчества в развитии детей с дефектами речи.',
    badge: 'Respublika Ilmiy Nashr',
    badgeRu: 'Научная публикация'
  },

  // ==================== SODIQJONOVA YOQUTJON (5 ta) ====================
  {
    id: 'cert-sodiqjonova-ergoterapiya',
    specialistId: 'spec-yoqutjon',
    specialistName: 'Sodiqjonova Yoqutjon',
    specialistNameRu: 'Садикжанова Ёкуджан',
    specialistRole: 'ABA Terapevt, Sensor & Ergoterapiya Mutaxassisi',
    specialistRoleRu: 'АВА-терапевт, специалист по сенсорной интеграции',
    title: 'Ergoterapiya va Sensor Integratsiya Terapiyasi (Modul I)',
    titleRu: 'Эрготерапия и сенсорная интеграционная терапия (Модуль I)',
    type: 'certificate',
    issuer: 'Avrupa Çocuk Rehabilitasyon Merkezleri & Sevinch Markazi (Uzm. Ergoterapist Süleyman Sert)',
    issuerRu: 'Центры реабилитации Avrupa & Центр Sevinch (Сулейман Серт)',
    issueDate: '21 soatlik xalqaro dastur, O‘zbekiston',
    imageUrl: '/certificates/yoqutjon-sodiqjonova-ergoterapiya.jpg',
    description: 'Duyu Bütünleme Terapi Eğitimi: Bolalarda nozik va yirik motorika, vestibulyar, taktil hamda propriotseptiv sensor integratsiya tizimlarini rivojlantirish bo‘yicha xalqaro ergoterapiya ta’limi.',
    descriptionRu: 'Международная программа по сенсорной интеграции и эрготерапии: развитие вестибулярных, тактильных и моторных систем у детей.',
    badge: 'Ergoterapiya & Sensor',
    badgeRu: 'Эрготерапия и Сенсорика'
  },
  {
    id: 'cert-sodiqjonova-denver',
    specialistId: 'spec-yoqutjon',
    specialistName: 'Sodiqjonova Yoqutjon',
    specialistNameRu: 'Садикжанова Ёкуджан',
    specialistRole: 'ABA Terapevt, Sensor & Ergoterapiya Mutaxassisi',
    specialistRoleRu: 'АВА-терапевт, специалист по сенсорной интеграции',
    title: 'Denver modeli bo‘yicha erta aralashuv va o‘yin ko‘nikmasini shakllantirish',
    titleRu: 'Раннее вмешательство по Денверской модели и формирование игровых навыков',
    type: 'certificate',
    issuer: 'ABA Angel Center (Xulq-atvor tahlilchisi CBA-S Zuhra Shuhratovna)',
    issuerRu: 'Центр ABA Angel (Аналитик поведения CBA-S Зухра Шухратовна)',
    issueDate: 'Toshkent shahri',
    imageUrl: '/certificates/yoqutjon-sodiqjonova-denver.jpg',
    description: 'Bolalarning ilk yoshidan boshlab o‘yin ko‘nikmalarini shakllantirish va xalqaro Denver modeli orqali erta korreksion aralashuv o‘tkazish sertifikati.',
    descriptionRu: 'Сертификат по раннему вмешательству на основе международной Денверской модели и формированию игровых навыков у детей раннего возраста.',
    badge: 'Denver Modeli',
    badgeRu: 'Денверская модель'
  },
  {
    id: 'cert-sodiqjonova-vbmapp',
    specialistId: 'spec-yoqutjon',
    specialistName: 'Sodiqjonova Yoqutjon',
    specialistNameRu: 'Садикжанова Ёкуджан',
    specialistRole: 'ABA Terapevt, Sensor & Ergoterapiya Mutaxassisi',
    specialistRoleRu: 'АВА-терапевт, специалист по сенсорной интеграции',
    title: 'VB-MAPP universal protokoliga asoslanib maqsadli ishlash kursi',
    titleRu: 'Курс целевой работы на основе универсального протокола VB-MAPP',
    type: 'certificate',
    issuer: '«Autizm va Mehr» Jamiyati (Rasulov Islom)',
    issuerRu: 'Общество «Аутизм и Мехр» (Расулов Ислом)',
    issueDate: '27.06.2026, Toshkent',
    imageUrl: '/certificates/yoqutjon-sodiqjonova-vbmapp.jpg',
    description: 'Autizm va nutqida jiddiy to‘siqlari bo‘lgan bolalarda xulq-atvor va muloqot bosqichlarini VB-MAPP xalqaro baholash protokoli orqali rivojlantirish.',
    descriptionRu: 'Сертификат по применению международного протокола оценки VB-MAPP и проведению целевых программ поведенческой коррекции.',
    badge: 'VB-MAPP Protokoli',
    badgeRu: 'Протокол VB-MAPP'
  },
  {
    id: 'cert-sodiqjonova-xulqatvor',
    specialistId: 'spec-yoqutjon',
    specialistName: 'Sodiqjonova Yoqutjon',
    specialistNameRu: 'Садикжанова Ёкуджан',
    specialistRole: 'ABA Terapevt, Sensor & Ergoterapiya Mutaxassisi',
    specialistRoleRu: 'АВА-терапевт, специалист по сенсорной интеграции',
    title: 'Muammoli xulq-atvor bilan ishlash va hamkorlik qilish seminari',
    titleRu: 'Семинар по работе с проблемным поведением и сотрудничеству',
    type: 'certificate',
    issuer: '«Autizm va Mehr» Jamiyati (Rasulov Islom)',
    issuerRu: 'Общество «Аутизм и Мехр» (Расулов Ислом)',
    issueDate: '25.06.2026, Toshkent',
    imageUrl: '/certificates/yoqutjon-sodiqjonova-xulqatvor.jpg',
    description: 'Bolalarda tajovuzkorlik, o‘jarlik va noo‘rin reaksiyalar kabi muammoli xatti-harakatlarni tahlil qilish, ijobiy xulq-atvorni shakllantirish va hamkorlik o‘rnatish bo‘yicha maxsus seminar sertifikati.',
    descriptionRu: 'Сертификат семинара по анализу нежелательного поведения, формированию сотрудничества и позитивных поведенческих реакций у детей.',
    badge: 'Xulq-atvor Korreksiyasi',
    badgeRu: 'Коррекция поведения'
  },
  {
    id: 'cert-sodiqjonova-logomassaj',
    specialistId: 'spec-yoqutjon',
    specialistName: 'Sodiqjonova Yoqutjon',
    specialistNameRu: 'Садикжанова Ёкуджан',
    specialistRole: 'ABA Terapevt, Sensor & Ergoterapiya Mutaxassisi',
    specialistRoleRu: 'АВА-терапевт, специалист по сенсорной интеграции',
    title: 'Ovoz paychalari patologiyasida past va baland tonni korreksiyalovchi Logomassaj',
    titleRu: 'Логомассаж для коррекции низкого и высокого тона голоса у детей',
    type: 'certificate',
    issuer: '«Logopedy Uzbekistana» amaliyot markazi (Azizova S. F., Atamuxamedova Sh. I.)',
    issuerRu: 'Практикующий центр «Логопеды Узбекистана» (Азизова С. Ф., Атамухамедова Ш. И.)',
    issueDate: 'Toshkent shahri',
    imageUrl: '/certificates/yoqutjon-sodiqjonova-logomassaj.jpg',
    description: 'Bolalarda ovoz apparati muammolarini bartaraf etish, ovoz balandligi va jarangdorligini tiklashda maxsus logomassaj texnikalarini qo‘llash amaliyoti.',
    descriptionRu: 'Практический сертификат по методике логопедического массажа для коррекции тональности и восстановления функций голосового аппарата.',
    badge: 'Logomassaj',
    badgeRu: 'Логомассаж'
  },

  // ==================== SULTONZAROVA DILDORA (1 ta) ====================
  {
    id: 'cert-dildora-aba-smart',
    specialistId: 'spec-dildora',
    specialistName: 'Sultonzarova Dildora',
    specialistNameRu: 'Султонзарова Дилдора',
    specialistRole: 'ABA Terapevt (Xulq-atvor tahlilchisi)',
    specialistRoleRu: 'АВА-терапевт (поведенческий аналитик)',
    title: 'Amaliy xulq tahlili (ABA) bo‘yicha I ochniy modul sertifikati',
    titleRu: 'Первый очный модуль сертификационной программы обучения по АВА',
    type: 'certificate',
    issuer: 'ABA Smart Academy (IBAO xalqaro akkreditatsiyasi, Sertifikat № 433)',
    issuerRu: 'ABA Smart Academy (Международная организация IBAO, Сертификат № 433)',
    issueDate: '72 o‘quv soati, Toshkent',
    imageUrl: '/certificates/dildora-sultonzarova-aba-smart.jpg',
    description: 'Amaliy xulq-atvor tahlili (ABA) bo‘yicha professional sertifikatsion ta’lim dasturining birinchi ochniy modulini muvaffaqiyatli tamomlaganlik hujjati.',
    descriptionRu: 'Сертификат об успешном прохождении 72-часового первого очного модуля международной программы обучения прикладному анализу поведения (АВА).',
    badge: 'ABA Smart (IBAO)',
    badgeRu: 'ABA Smart (IBAO)'
  },

  // ==================== OLIMOVA DILNURA (1 ta) ====================
  {
    id: 'cert-dilnura-loonn-edu-aba',
    specialistId: 'spec-dilnura',
    specialistName: 'Olimova Dilnura Raximberganovna',
    specialistNameRu: 'Олимова Дилнура Рахимбергановна',
    specialistRole: 'Defektolog-Logoped',
    specialistRoleRu: 'Дефектолог-логопед',
    title: 'Autizm (RAS) bo‘lgan bolalar bilan ishlashda ABA asoslari',
    titleRu: 'Основы АВА для детей с расстройствами аутистического спектра (РАС)',
    type: 'certificate',
    issuer: 'Loonn Edu xalqaro markazi (Trener: Sattarova Z.Sh., IBA, CBA-S)',
    issuerRu: 'Центр Loonn Edu (Преподаватель курса: Саттарова З.Ш., IBA, CBA-S)',
    issueDate: '10 soatlik maxsus kurs va imtihon',
    imageUrl: '/certificates/dilnura-olimova-loonn-edu-aba.jpg',
    description: 'RAS va boshqa rechevoy hamda intellektual buzilishlarga ega bolalar bilan ishlashda ABA tamoyillarini amaliyotga tatbiq etish kursi sertifikati.',
    descriptionRu: 'Сертификат об успешном окончании курса и сдаче экзамена по методикам прикладного анализа поведения (АВА) для детей с аутизмом.',
    badge: 'ABA Asoslari',
    badgeRu: 'Основы АВА'
  },

  // ==================== JUMANIYOZOVA NODIRA ISMOIL QIZI (1 ta) ====================
  {
    id: 'cert-jumaniyozova-diplom',
    specialistId: 'spec-nodira',
    specialistName: 'Jumaniyozova Nodira Ismoil qizi',
    specialistNameRu: 'Жуманиёзова Нодира Исмоил кизи',
    specialistRole: 'Maxsus pedagog (o‘qituvchi-logoped)',
    specialistRoleRu: 'Специальный педагог (учитель-логопед)',
    title: 'Oliy ma’lumot to‘g‘risida Davlat Diplomi (Bakalavr)',
    titleRu: 'Государственный диплом о высшем образовании (Бакалавр)',
    type: 'diploma',
    issuer: 'Nizomiy nomidagi O‘zbekiston Milliy Pedagogika Universiteti',
    issuerRu: 'Национальный педагогический университет Узбекистана имени Низами',
    issueDate: '2025-yil (Qayd raqami: 2944/2025)',
    imageUrl: '/certificates/nodira-jumaniyozova-diplom.png',
    description: 'Maxsus pedagogika (Logopediya) ta’lim yo‘nalishi bo‘yicha Bakalavr darajasi va Maxsus pedagog (o‘qituvchi-logoped) mutaxassislik kvalifikatsiyasi.',
    descriptionRu: 'Присуждена степень бакалавра по направлению Специальная педагогика (Логопедия) с присвоением квалификации Специальный педагог (учитель-логопед).',
    badge: 'Oliy Ma’lumot Diplomi',
    badgeRu: 'Диплом о высшем образовании'
  },

  // ==================== LOGOPED CITY O‘QUV KURSLARI / MUTAXASSISLARI (3 ta) ====================
  {
    id: 'cert-logoped-city-latipova',
    specialistId: 'spec-logoped-city',
    specialistName: 'Latipova Nafosat Xudoyshukur qizi',
    specialistNameRu: 'Латипова Нафосат Худойшукуровна',
    specialistRole: 'Boshlang‘ich Defektolog (Logoped City kursi bitiruvchisi)',
    specialistRoleRu: 'Начальный дефектолог (Выпускник курса Logoped City)',
    title: 'Boshlang‘ich defektologiya bo‘yicha 140 soatlik malaka oshirish sertifikati',
    titleRu: 'Сертификат повышения квалификации по начальной дефектологии (140 часов)',
    type: 'certificate',
    issuer: '«LOGOPED CITY» M.Ch.J. (Sertifikat № 000181, Litsenziya № 1427720)',
    issuerRu: 'ООО «LOGOPED CITY» (Сертификат № 000181, Лицензия № 1427720)',
    issueDate: '140 soat (Kurs rahbari: Aziza Atajanova)',
    imageUrl: '/certificates/logoped-city-latipova-nafosat.jpg',
    description: 'Logoped City MChJ da 140 soatlik nazariy va amaliy mashg‘ulotlarda qatnashib, boshlang‘ich defektologiya kursini muvaffaqiyatli tamomlaganlik to‘g‘risida rasmiy sertifikat.',
    descriptionRu: 'Сертификат об успешном завершении 140-часового теоретического и практического курса повышения квалификации по начальной дефектологии.',
    badge: 'Logoped City Sertifikati',
    badgeRu: 'Сертификат Logoped City'
  },
  {
    id: 'cert-logoped-city-raxmonova',
    specialistId: 'spec-logoped-city',
    specialistName: 'Raxmonova Zaynabxon Ollabergan qizi',
    specialistNameRu: 'Рахмонова Зайнабхон Оллабергановна',
    specialistRole: 'Boshlang‘ich Defektolog (Logoped City kursi bitiruvchisi)',
    specialistRoleRu: 'Начальный дефектолог (Выпускник курса Logoped City)',
    title: 'Boshlang‘ich defektologiya bo‘yicha 140 soatlik malaka oshirish sertifikati',
    titleRu: 'Сертификат повышения квалификации по начальной дефектологии (140 часов)',
    type: 'certificate',
    issuer: '«LOGOPED CITY» M.Ch.J. (Sertifikat № 000182, Litsenziya № 1427720)',
    issuerRu: 'ООО «LOGOPED CITY» (Сертификат № 000182, Лицензия № 1427720)',
    issueDate: '140 soat (Kurs rahbari: Aziza Atajanova)',
    imageUrl: '/certificates/logoped-city-raxmonova-zaynabxon.jpg',
    description: 'Logoped City MChJ da 140 soatlik nazariy va amaliy mashg‘ulotlarda qatnashib, boshlang‘ich defektologiya kursini muvaffaqiyatli tamomlaganlik to‘g‘risida rasmiy sertifikat.',
    descriptionRu: 'Сертификат об успешном завершении 140-часового теоретического и практического курса повышения квалификации по начальной дефектологии.',
    badge: 'Logoped City Sertifikati',
    badgeRu: 'Сертификат Logoped City'
  },
  {
    id: 'cert-ollaberganov-sensor',
    specialistId: 'spec-oybek',
    specialistName: 'Ollaberganov Oybek',
    specialistNameRu: 'Оллаберганов Ойбек',
    specialistRole: 'Sensor Integratsiya Mutaxassisi, Defektolog',
    specialistRoleRu: 'Специалист по сенсорной интеграции, дефектолог',
    title: 'Sensor integratsiya va Autizm mavzusidagi seminar sertifikati',
    titleRu: 'Сертификат семинара по сенсорной интеграции и аутизму',
    type: 'certificate',
    issuer: 'Neuro Logik Markazi (Iroda Dilmuradovna & Shahnoza Maqsudbekovna)',
    issuerRu: 'Центр Neuro Logik (Ирода Дильмурадовна и Шахноза Максудбековна)',
    issueDate: 'Toshkent shahri',
    imageUrl: '/certificates/oybek-ollaberganov-sensor-autizm.jpg',
    description: 'Bolalarda sensor tizimini uyg‘unlashtirish, sezgi reaksiyalarini me’yorlashtirish va autizmda sensor integratsiya metodlarini qo‘llash amaliyoti.',
    descriptionRu: 'Сертификат о прохождении теоретического и практического курса по сенсорной интеграции и методам коррекции аутизма.',
    badge: 'Sensor Integratsiya',
    badgeRu: 'Сенсорная интеграция'
  }
];

export const COURSES: Course[] = [
  {
    id: 'boshlangich-logopediya',
    title: 'Boshlang‘ich Logopediya Asoslari',
    targetAudience: 'Yosh mutaxassislar, bog‘cha tarbiyachilari va yangi boshlovchilar uchun',
    duration: '2 oy (haftada 3 kun, 2 soatdan)',
    format: 'Nazariya + Markaz filiallarida jonli amaliyot',
    description: 'Nutq apparati anatomiyasi, asosiy tovush buzilishlari turlari, artikulyatsion gimnastika va oddiy tovushlarni qo‘yish usullari.',
    topics: [
      'Artikulyatsion apparat tuzilishi va tekshirish usullari',
      'Unli va oson undosh tovushlarni to‘g‘ri qo‘yish texnikasi',
      'Artikulyatsion gimnastika mashqlari to‘plami',
      'Mashg‘ulot konspekti tuzish va bolalar bilan dastlabki aloqa'
    ],
    certificate: true,
    badge: 'Ommabop kurs'
  },
  {
    id: 'maxsus-logopediya',
    title: 'Maxsus Logopediya va Korreksiyasi',
    targetAudience: 'Amaliyotchi logoped va defektologlar uchun',
    duration: '2 oy (haftada 3 kun)',
    format: 'Chuqurlashtirilgan amaliy seminar va master-klasslar',
    description: 'Murakkab nutq buzilishlari (dizartriya, motor alaliya, rinolaliya, duduqlanish) bilan ishlash va logopedik zondlar yordamida massaj.',
    topics: [
      'Logopedik massaj turlari va zondlardan to‘g‘ri foydalanish',
      'Dizartriyada mushak tonusini me’yorlashtirish',
      'Duduqlanishda nafas va ritm texnikalari',
      'Klinik-pedagogik tahlil va korreksiya rejasi'
    ],
    certificate: true,
    badge: 'Professional'
  },
  {
    id: 'defektologiya-amaliyoti',
    title: 'Amaliy Defektologiya va Kognitiv Rivojlanish',
    targetAudience: 'Defektologlar, maxsus maktab va DMTT xodimlari',
    duration: '2 oy',
    format: 'Interaktiv mashg‘ulotlar + keyslar tahlili',
    description: 'Psixik rivojlanishi orqada qolayotgan bolalar bilan ishlash, bilish jarayonlarini diagnostika qilish va o‘quv motivatsiyasini shakllantirish.',
    topics: [
      'Kognitiv jarayonlarni (diqqat, xotira, idrok) tekshirish',
      'ZPR va aqliy o‘ziga xosliklarda metodik vositalar',
      'Fazoviy tasavvur va mantiqiy mashqlar tizimi',
      'Individual ta’lim rejasini (ITR) tuzish'
    ],
    certificate: true
  },
  {
    id: 'aba-terapiya-kursi',
    title: 'ABA Terapiya Amaliyoti va Xulq-atvor Tahlili',
    targetAudience: 'Tutorlar, maxsus pedagoglar va ota-onalar',
    duration: '6 hafta (nazariya + intensiv amaliyot)',
    format: 'Xalqaro standartlarga mos amaliy dastur',
    description: 'Xulq-atvor funksiyalarini aniqlash, ijobiy mustahkamlash tamoyillari, vizual jadvallar bilan ishlash va muloqotni rivojlantirish.',
    topics: [
      'Xulq-atvorning 4 ta asosiy funksiyasi va ABC tahlili',
      'Ijobiy rag‘batlantirish tizimini to‘g‘ri qo‘llash',
      'PECS va vizual qo‘llanmalar orqali muloqot',
      'Nomaqbul xatti-harakatlarni xavfsiz bartaraf etish'
    ],
    certificate: true,
    badge: 'Intensiv'
  },
  {
    id: 'sensor-integratsiya-kursi',
    title: 'Sensor Integratsiya Metodikasi va Jihozlar Bilan Ishlash',
    targetAudience: 'Pedagoglar, AFK instruktorlari va psixologlar',
    duration: '3 hafta',
    format: 'Sensor integratsiya zallarida amaliy mashg‘ulot',
    description: 'Sensor profillarni baholash, vestibulyar, propriotseptiv va taktil tizimlarni to‘g‘ri yuklama bilan rivojlantirish qoidalari.',
    topics: [
      'Sensor tizimlar anatomiyasi va disfunksiya belgilari',
      'Sensor parhez (Sensory Diet) tuzish qoidalari',
      'Maxsus osma jihozlar va burchaklardan xavfsiz foydalanish',
      'Sensor holatning nutq va diqqatga ta’siri'
    ],
    certificate: true
  },
  {
    id: 'ota-onalar-seminari',
    title: 'Ota-onalar Uchun Amaliy Seminar va Mahorat Darslari',
    targetAudience: 'Bolasi korreksion yordam olayotgan ota-onalar uchun',
    duration: '2 hafta (qulay dam olish kunlari va kechki vaqtlarda)',
    format: 'Ochiq suhbat, psixologik qo‘llab-quvvatlash va uy mashqlari',
    description: 'Uy sharoitida bola bilan samarali muloqot o‘rnatish, qaysarlik va injiqlik paytida to‘g‘ri munosabat bildirish bo‘yicha aniq qo‘llanma.',
    topics: [
      'Uyda bola nutqini rag‘batlantiruvchi o‘yinlar',
      'Gadjyetlarga qaramlikni sog‘lom odatlarga almashtirish',
      'Kundalik mustaqillikni oshirish usullari',
      'Ota-onaning hissiy xotirjamligini saqlash'
    ],
    certificate: false,
    badge: 'Oila uchun'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    parentName: 'Gulbahor R.',
    childAge: '3.5 yosh',
    branch: 'Urganch filiali',
    serviceReceived: 'Logopediya va Sensor integratsiya',
    comment: 'Farzandim 3 yoshgacha deyarli so‘z aytmas, faqat imo-ishora bilan tushuntirardi. Logoped City mutaxassislari dastlabki baholashdan so‘ng individual dastur tuzib berishdi. 3 oy davomida sensor integratsiya va logoped bilan muntazam shug‘ullandik. Hozir 2-3 so‘zli oddiy gaplar tuzyapti va o‘z xohishlarini so‘z bilan aytishga harakat qilyapti. Jamoaga samimiy minnatdorchilik bildiramiz!',
    progressHighlights: ['Faol so‘z boyligi paydo bo‘ldi', 'Ko‘z kontakti yaxshilandi', 'Kiyim kiyishda mustaqillik oshdi'],
    date: '2026-yil, Fevral'
  },
  {
    id: 'test-2',
    parentName: 'Rustambek O.',
    childAge: '4 yosh',
    branch: 'Qo‘shko‘pir filiali',
    serviceReceived: 'CBO xonasi va ABA terapiya',
    comment: 'Qo‘shko‘pir filialidagi maxsus CBO xonasi biz uchun kutilmagan qulaylik bo‘ldi. O‘g‘lim mustaqil qoshiq ushlay olmas, doimiy injiqlik qilardi. Bu yerda real oshxona sharoitida amaliy ko‘nikmalarni o‘rganishdi. Hozir ovqatlanishda mustaqil va o‘z kiyimlarini yechib kiyishni uddalayapti. Murabbiylarining sabr-toqati va mehriga rahmat!',
    progressHighlights: ['Mustaqil ovqatlanish shakllandi', 'Xulq-atvor ancha barqarorlashdi', 'Ko‘rsatmalarga amal qilish o‘rgatildi'],
    date: '2026-yil, Yanvar'
  },
  {
    id: 'test-3',
    parentName: 'Shahlo M.',
    childAge: '5 yosh',
    branch: 'Xiva filiali',
    serviceReceived: 'Defektologiya va Logopediya',
    comment: 'Qizimda diqqat tarqoqligi va bir qancha tovushlar talaffuzida chalkashliklar bor edi. Xiva filialidagi mutaxassislar o‘yin tarzida mashg‘ulot o‘tishgani uchun qizim xursandchilik bilan qatnadi. Sh va R tovushlari to‘g‘ri talaffuz qilina boshladi, ranglar va shakllarni aniq ajratyapti.',
    progressHighlights: ['Tovushlar talaffuzi aniqlashdi', 'Diqqat barqarorligi oshdi', 'Qiziqish va o‘rganish motivatsiyasi ortdi'],
    date: '2026-yil, Fevral'
  },
  {
    id: 'test-4',
    parentName: 'Anvar I.',
    childAge: '4.5 yosh',
    branch: 'Xonqa filiali',
    serviceReceived: 'Sensor integratsiya va Logoritmika',
    comment: 'Xonqa filialining 1-qavatda joylashgani va qulay sharoiti bizga juda ma’qul keldi. Farzandim baland shovqindan bezovtalanar va jamoaga qo‘shilmasdi. Logoritmika va sensor integratsiya mashg‘ulotlaridan so‘ng boshqa bolalar bilan birga o‘ynashni boshladi.',
    progressHighlights: ['Tovushlarga nisbatan xotirjamlik', 'Tengdoshlari bilan muloqot', 'Musiqiy ritm va harakat uyg‘unligi'],
    date: '2026-yil, Yanvar'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Farzandimga aynan qaysi mutaxassis kerakligini qanday bilib olamiz?',
    answer: 'Markazimizga birinchi marotaba tashrif buyurganingizda dastlabki pedagogik-diagnostik baholash o‘tkaziladi. Unda logoped, defektolog va sensor mutaxassisi bolaning nutq, sensor, xulq-atvor va motor ko‘nikmalarini kompleks o‘rganadi. Shundan so‘ng bolangizga mos mutaxassislar va individual reja belgilanadi.',
    category: 'Baholash'
  },
  {
    id: 'faq-2',
    question: 'Dastlabki baholash jarayoni qancha vaqt davom etadi va ota-ona qatnashadimi?',
    answer: 'Dastlabki baholash o‘rtacha 45-60 daqiqa davom etadi. Jarayonda ota-onaning bevosita ishtirok etishi juda muhim, chunki mutaxassislar bolaning uy sharoitidagi odatlari, qiziqishlari va rivojlanish tarixini batafsil o‘rganadilar.',
    category: 'Baholash'
  },
  {
    id: 'faq-3',
    question: 'Mashg‘ulotlar qanday tartibda va qancha vaqt davom etadi?',
    answer: 'Mashg‘ulotlar haftasiga odatda 3 dan 5 martagacha o‘tkaziladi. Bolaning yoshi va toliqish darajasiga qarab har bir mashg‘ulot 30 dan 45 daqiqagacha davom etadi. Mashg‘ulotlar asosan individual shaklda, zarurat tug‘ilganda kichik guruhlarda olib boriladi.',
    category: 'Mashg‘ulotlar'
  },
  {
    id: 'faq-4',
    question: 'CBO (kundalik hayot ko‘nikmalari) xonasi qaysi filialda joylashgan?',
    answer: 'Maxsus jihozlangan real hayotiy CBO (oshxona, ovqatlanish, mustaqil gigiyena va kiyinish) xonasi FAQAT Qo‘shko‘pir filialimizda tashkil etilgan. Boshqa barcha filiallarimizda esa standart logopediya, defektologiya va sensor integratsiya xonalari to‘liq faoliyat yuritadi.',
    category: 'Filiallar'
  },
  {
    id: 'faq-5',
    question: 'Markazingizda tibbiy muolajalar yoki dorilar beriladimi?',
    answer: 'Yo‘q. "Logoped City" — bu pedagogik, korreksion va rivojlantiruvchi markaz. Bizda hech qanday tibbiy muolaja yoki dorivor vositalar qo‘llanilmaydi. Barcha yordam pedagogik metodikalar (logopediya, defektologiya, ABA, sensor integratsiya, logoritmika va jismoniy mashqlar) orqali amalga oshiriladi.',
    category: 'Metodika'
  },
  {
    id: 'faq-6',
    question: 'Uy sharoitida ota-onalar nimalar qilishi kerak?',
    answer: 'Har bir mashg‘ulotdan so‘ng mutaxassis ota-onaga qisqacha xulosa va uyda bajarish uchun oddiy, qiziqarli tavsiyalar beradi. Oylik hisobot orqali dinamika ko‘rsatib boriladi. Uyda bu tavsiyalarga muntazam rioya qilish ijobiy natijaga erishish tezligini sezilarli darajada oshiradi.',
    category: 'Ota-onalar'
  },
  {
    id: 'faq-7',
    question: 'To‘lov va konsultatsiyaga yozilish tartibi qanday?',
    answer: 'Konsultatsiyaga saytimizdagi forma, Telegram (@logoped_city_admin) yoki telefon raqamlarimiz orqali yozilishingiz mumkin. To‘lovlar oylik abonement yoki alohida mashg‘ulotlar paketi asosida shaffof tarzda amalga oshiriladi.',
    category: 'To‘lov'
  }
];

export const TARIFF_PLANS: TariffPlan[] = [
  {
    id: 'start-3',
    name: 'START 3',
    nameRu: 'START 3',
    schedule: 'Haftada 3 kun',
    scheduleRu: '3 дня в неделю',
    lessonsSummary: 'Oyiga 12 ta mashg‘ulot',
    lessonsSummaryRu: '12 занятий в месяц',
    price: '1 190 000',
    priceNumeric: 1190000,
    period: 'so‘m / oy',
    periodRu: 'сум / месяц',
    subtitle: 'Boshlang‘ich pedagogik kurs',
    subtitleRu: 'Начальный педагогический курс',
    colorTheme: 'green',
    features: [
      '12 ta individual logopedik mashg‘ulot',
      'Boshlang‘ich diagnostika',
      'Individual rivojlanish maqsadi',
      'Oylik natija monitoringi',
      'Ota-onaga tavsiyalar'
    ],
    featuresRu: [
      '12 индивидуальных логопедических занятий',
      'Первичная диагностика',
      'Индивидуальная цель развития',
      'Ежемесячный мониторинг результатов',
      'Рекомендации родителям'
    ],
    excludedNote: 'Basseyn va ot sporti kirmaydi.',
    excludedNoteRu: 'Бассейн и конный спорт не включены.'
  },
  {
    id: 'start-6',
    name: 'START 6',
    nameRu: 'START 6',
    schedule: 'Haftada 6 kun',
    scheduleRu: '6 дней в неделю',
    lessonsSummary: 'Oyiga 24 ta mashg‘ulot',
    lessonsSummaryRu: '24 занятия в месяц',
    price: '2 390 000',
    priceNumeric: 2390000,
    period: 'so‘m / oy',
    periodRu: 'сум / месяц',
    subtitle: 'Intensiv individual rivojlanish',
    subtitleRu: 'Интенсивное индивидуальное развитие',
    colorTheme: 'green',
    features: [
      '24 ta individual logopedik mashg‘ulot',
      'Boshlang‘ich diagnostika',
      'Individual rivojlanish dasturi',
      'Oylik natija monitoringi',
      'Ota-onaga tavsiyalar',
      'Uy sharoitida bajariladigan mashqlar bo‘yicha tavsiyalar'
    ],
    featuresRu: [
      '24 индивидуальных логопедических занятия',
      'Первичная диагностика',
      'Индивидуальная программа развития',
      'Ежемесячный мониторинг результатов',
      'Рекомендации родителям',
      'Рекомендации по домашним упражнениям'
    ],
    excludedNote: 'Basseyn va ot sporti kirmaydi.',
    excludedNoteRu: 'Бассейн и конный спорт не включены.'
  },
  {
    id: 'complex',
    name: 'COMPLEX',
    nameRu: 'COMPLEX',
    badge: 'ENG KO‘P TANLANADI!',
    badgeRu: 'САМЫЙ ПОПУЛЯРНЫЙ!',
    isPopular: true,
    schedule: 'Haftada 6 kun + Sog‘lomlashtirish',
    scheduleRu: '6 дней в неделю + Оздоровление',
    lessonsSummary: 'Oyiga 28 ta mashg‘ulot (24 logoped + 2 basseyn + 2 ot sporti)',
    lessonsSummaryRu: '28 занятий в месяц (24 логопед + 2 бассейн + 2 иппотерапия)',
    price: '2 990 000',
    priceNumeric: 2990000,
    period: 'so‘m / oy',
    periodRu: 'сум / месяц',
    subtitle: 'Kompleks rivojlanish dasturi',
    subtitleRu: 'Программа комплексного развития',
    colorTheme: 'blue',
    features: [
      '24 ta individual logopedik mashg‘ulot',
      '2 ta basseyn mashg‘uloti',
      '2 ta ot sporti / ippoterapiya',
      'Boshlang‘ich diagnostika',
      'Individual rivojlanish dasturi',
      'Oylik natija monitoringi',
      'Mutaxassislararo nazorat',
      'Uy sharoitida bajariladigan mashqlar bo‘yicha tavsiyalar',
      'Ota-onaga individual tavsiyalar'
    ],
    featuresRu: [
      '24 индивидуальных логопедических занятия',
      '2 занятия в бассейне',
      '2 занятия конным спортом / иппотерапия',
      'Первичная диагностика',
      'Индивидуальная программа развития',
      'Ежемесячный мониторинг результатов',
      'Междисциплинарный контроль специалистов',
      'Рекомендации по домашним упражнениям',
      'Индивидуальные рекомендации родителям'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    nameRu: 'PREMIUM',
    badge: 'FULL DEVELOPMENT',
    badgeRu: 'FULL DEVELOPMENT',
    isPremium: true,
    schedule: 'To‘liq premium kompleks + Transfer',
    scheduleRu: 'Полный премиум комплекс + Трансфер',
    lessonsSummary: 'Oyiga 32+ ta mashg‘ulot + Barcha xizmatlar',
    lessonsSummaryRu: '32+ занятия в месяц + Все услуги',
    price: '4 990 000',
    priceNumeric: 4990000,
    period: 'so‘m / oy',
    periodRu: 'сум / месяц',
    subtitle: 'Maksimal rivojlanish va transfer',
    subtitleRu: 'Максимальное развитие и трансфер',
    colorTheme: 'purple',
    features: [
      '24 ta individual logopedik mashg‘ulot',
      '4 ta basseyn mashg‘uloti',
      '4 ta ot sporti / ippoterapiya',
      'Olib kelish va olib ketish xizmati (Transfer)',
      'Haftalik rivojlanish monitoringi',
      'Har oy batafsil rivojlanish hisoboti',
      'Mutaxassislararo konsilium',
      'Oyiga 2 marta ota-ona konsultatsiyasi',
      'Uyda bajariladigan mashqlar bo‘yicha video tavsiyalar',
      'Ustuvor jadval va qulay vaqt tanlash',
      'Oyiga 1 ta bonus mashg‘ulot'
    ],
    featuresRu: [
      '24 индивидуальных логопедических занятия',
      '4 занятия в бассейне',
      '4 занятия конным спортом / иппотерапия',
      'Трансфер (привоз и отвоз ребенка)',
      'Еженедельный мониторинг развития',
      'Ежемесячный подробный отчет о динамике',
      'Междисциплинарный консилиум специалистов',
      '2 раза в месяц консультация родителей',
      'Видео-рекомендации для домашних занятий',
      'Приоритетное расписание и выбор времени',
      '1 бонусное занятие в месяц'
    ]
  }
];

