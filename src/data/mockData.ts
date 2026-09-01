import { Branch, ServiceItem, MethodologyStep, Specialist, Course, Testimonial, FaqItem, ChildNeedItem } from '../types';

export const BRANCHES: Branch[] = [
  {
    id: 'urganch',
    name: 'Urganch filiali',
    city: 'Urganch shahri',
    address: 'O‘zbekiston ko‘chasi, 49-uy',
    landmark: 'Al-Xorazmiy diagnostika markazi, 2-qavat',
    phone: '+998 99 221 00 06',
    phoneRaw: '+998992210006',
    instagram: 'https://instagram.com/logoped_city_urganch',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=Urganch+Ozbekiston+kochasi+49',
    yandexMapUrl: 'https://yandex.uz/maps/?text=Urganch+Ozbekiston+kochasi+49',
    hasCBO: false,
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    features: [
      'Logopediya va defektologiya xonalari',
      'Sensor integratsiya zali',
      'ABA terapiya xonalari',
      'Art va musiqa terapiyasi burchagi',
      'Keng va shinam kutish zali'
    ],
    imagePlaceholderColor: 'from-emerald-500 to-teal-700'
  },
  {
    id: 'xiva',
    name: 'Xiva filiali',
    city: 'Xiva shahri',
    address: 'Humonur gipermarketi yon tomoni',
    landmark: 'Humonur gipermarketi yoni',
    phone: '+998 50 785 00 09',
    phoneRaw: '+998507850009',
    instagram: 'https://instagram.com/logoped_city_xiva',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=Xiva+Humonur+gipermarketi',
    yandexMapUrl: 'https://yandex.uz/maps/?text=Xiva+Humonur',
    hasCBO: false,
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    features: [
      'Individual logopedik xonalar',
      'Sensor integratsiya jihozlari',
      'Defektologik rivojlantirish vositalari',
      'Ota-onalar uchun qulay kutish zonasi'
    ],
    imagePlaceholderColor: 'from-teal-600 to-emerald-800'
  },
  {
    id: 'qoshkopir',
    name: 'Qo‘shko‘pir filiali',
    city: 'Qo‘shko‘pir tumani',
    address: 'Baraka Avto binosi, 2-qavat',
    landmark: 'Iqbol Shifo sanatoriyasi ro‘parasi',
    phone: '+998 50 785 00 06',
    phoneRaw: '+998507850006',
    instagram: 'https://instagram.com/logoped_city_qoshkopir',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=Qoshkopir+Iqbol+Shifo',
    yandexMapUrl: 'https://yandex.uz/maps/?text=Qoshkopir+Baraka+Avto',
    hasCBO: true, // ONLY in Qo'shko'pir!
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    features: [
      'MAXSUS CBO XONASI (Kundalik hayot ko‘nikmalari xonasi)',
      'Sensor integratsiya majmuasi',
      'Logopediya va artikulyatsiya xonasi',
      'AFK va harakat korreksiyasi zali',
      'ABA terapiya amaliyot xonasi'
    ],
    imagePlaceholderColor: 'from-fuchsia-600 to-emerald-700'
  },
  {
    id: 'xonqa',
    name: 'Xonqa filiali',
    city: 'Xonqa tumani',
    address: 'Uchpaxta, Oybek–Umrbek kafesi binosi, 1-qavat',
    landmark: 'Oybek–Umrbek kafesi binosi, 1-qavat',
    phone: '+998 50 785 00 04',
    phoneRaw: '+998507850004',
    instagram: 'https://instagram.com/logoped_city_xonqa',
    telegram: 'https://t.me/logoped_city_admin',
    mapUrl: 'https://maps.google.com/?q=Xonqa+Uchpaxta',
    yandexMapUrl: 'https://yandex.uz/maps/?text=Xonqa+Uchpaxta',
    hasCBO: false,
    workHours: 'Du - Sha: 09:00 - 18:00 (Yakshanba: Dam olish kuni)',
    features: [
      '1-qavatda qulay joylashuv',
      'Logopediya va defektologiya xonalari',
      'Sensor integratsiya maydonchasi',
      'Logoritmika va o‘yin terapiyasi'
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
    role: 'Logoped City Kuratori, Defektolog, ABA Terapevt',
    experience: 'Katta amaliy va kuratorlik tajribasi',
    education: 'VB-MAPP va amaliy xulq-atvor tahlili (ABA) bo‘yicha mutaxassis',
    branch: 'Barcha filiallar kuratori',
    specialization: [
      'VB-MAPP baholash va individual rivojlanish rejasi',
      'Defektologik va nutqiy korreksiya',
      'ABA terapiya (Amaliy xulq-atvor tahlili)',
      'Pedagogik dasturlarni ishlab chiqish va nazorat'
    ],
    avatarBg: 'bg-emerald-100 text-emerald-800',
    gender: 'female',
    photoUrl: '/specialists/aziza-atajanova.png'
  },
  {
    id: 'spec-shoira',
    name: 'Sultonova Shoira',
    role: 'Logoped, ABA Terapevt',
    experience: 'Malakali amaliyotchi mutaxassis',
    education: 'Korreksion pedagogika, logopediya va ABA terapiya',
    branch: 'Logoped City filiali',
    specialization: [
      'Autizm (RAS), ZPR, ZRR korreksiyasi',
      'Alaliya, Afaziya, Dizartriya, Dispraksiya',
      'Duduqlanish va nutq nuqsonlarini bartaraf etish',
      'Logopedik massaj va zondlar bilan mashg‘ulotlar'
    ],
    avatarBg: 'bg-teal-100 text-teal-800',
    gender: 'female',
    photoUrl: '/specialists/shoira-sultonova.png'
  },
  {
    id: 'spec-sojida',
    name: 'Palvanova Sojida',
    role: 'Pedagog-Defektolog, Logoped',
    experience: 'Katta amaliy korreksion tajriba',
    education: 'Oliy ma’lumotli defektolog va logoped mutaxassisi',
    branch: 'Logoped City filiali',
    specialization: [
      'Duduqlanish, Dislaliya, Alaliya, Rinolaliya',
      'Autizm, ZPR, ZRR tashxisli bolalar korreksiyasi',
      'Aqliy va nutqiy qobiliyatlarni rivojlantirish',
      'Turli xil zamonaviy metodikalar orqali o‘qitish'
    ],
    avatarBg: 'bg-pink-100 text-pink-800',
    gender: 'female',
    photoUrl: '/specialists/sojida-palvanova.png'
  },
  {
    id: 'spec-dilnura',
    name: 'Olimova Dilnura Raximberganovna',
    role: 'Defektolog-Logoped',
    experience: 'Amaliyotchi defektolog-logoped',
    education: 'Korreksion pedagogika va logopediya',
    branch: 'Logoped City filiali',
    specialization: [
      'Duduqlanish, Dislaliya, Alaliya, Rinolaliya',
      'Autizm, ZPR, ZRR diagnozli bolalar bilan ishlash',
      'Individual yondashuv asosida korreksiya',
      'Natijaga yo‘naltirilgan nutqiy mashg‘ulotlar'
    ],
    avatarBg: 'bg-emerald-100 text-emerald-800',
    gender: 'female',
    photoUrl: '/specialists/dilnura-olimova.png'
  },
  {
    id: 'spec-qunduz',
    name: 'Abdrimova Qunduz',
    role: 'ABA Terapevt (Xulq-atvor tahlilchisi)',
    experience: 'Malakali ABA mutaxassisi',
    education: 'Amaliy xulq-atvor tahlili (ABA) va bolalar rivojlanishi',
    branch: 'Logoped City filiali',
    specialization: [
      'Autizm, ZPR va RAS tashxisli bolalar bilan ishlash',
      'Nutq va rivojlanishdagi kechikishlarni korreksiya qilish',
      'Xulq-atvor tahlili va ijtimoiy muloqot',
      'Mustaqil hayotiy ko‘nikmalarni shakllantirish'
    ],
    avatarBg: 'bg-fuchsia-100 text-fuchsia-800',
    gender: 'female',
    photoUrl: '/specialists/qunduz-abdrimova.png'
  },
  {
    id: 'spec-dildora',
    name: 'Sultonzarova Dildora',
    role: 'ABA Terapevt (Xulq-atvor tahlilchisi)',
    experience: 'Malakali ABA terapevt',
    education: 'Korreksion pedagogika va xulq-atvor tahlili',
    branch: 'Logoped City filiali',
    specialization: [
      'Autizm (RAS), ZPR tashxislari bo‘yicha ABA terapiya',
      'Nutq va kognitiv rivojlanishda kechikishlarni bartaraf etish',
      'Ijobiy motivatsiya va moslashuv ko‘nikmalari',
      'O‘yin terapiyasi va ijtimoiy integratsiya'
    ],
    avatarBg: 'bg-pink-100 text-pink-800',
    gender: 'female',
    photoUrl: '/specialists/dildora-sultonzarova.png'
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
