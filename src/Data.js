

const allProducts = [
  {
    id: 1,
    name: "کراتین کوین لورون",
    price: 2000000,
    img: "./../Images/Products/2.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/2.webp" },
      { id: 2, img: "./../Images/Products/2-2.webp" },
    ],
    categury: "creatin",
    categurytext: "creatin",
    taste: [],
    info: {
      type: "پودر",
      origin: "آلمان",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 2,
    name: "کراتین رونی کلمن",
    price: 2750000,
    img: "./../Images/Products/1.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/1.webp" },
      { id: 2, img: "./../Images/Products/1-1.webp" },
    ],
    categury: "creatin",
    categurytext: "creatin",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 72,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 3,
    name: "کراتین اپلاید",
    price: 3250000,
    img: "./../Images/Products/3.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/3-2.webp" },
      { id: 2, img: "./../Images/Products/3-3.webp" },
    ],
    categury: "creatin",
    categurytext: "creatin",
    taste: [],
    info: {
      type: "پودر",
      origin: "انگلیس",
      servings: 50,
      tasteCount: 0,
    },
    status: "0",
  },
  {
    id: 4,
    name: "پروتعین وی اپلاید 3 کیلویی",
    price: 4000000,
    img: "./../Images/Products/4.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/4-2.webp" },
      { id: 2, img: "./../Images/Products/4-3.webp" },
    ],
    categury: "protein",
    categurytext: "protein",
    taste: [
      { id: 1, title: "توت فرنگی", status: "1" },
      { id: 2, title: "کیک بلوبری", status: "0" },
      { id: 3, title: "پاپ کورن", status: "1" },
      { id: 4, title: "کارامل", status: "1" },
      { id: 5, title: "کاکائو", status: "1" },
      { id: 6, title: "وانیلی", status: "0" },
      { id: 7, title: "کیک هویج", status: "0" },
    ],
    info: {
      type: "پودر",
      origin: "انگلیس",
      servings: 75,
      tasteCount: 7,
    },
    status: "1",
  },
  {
    id: 5,
    name: "گلوتامین ماسلتک",
    price: 825000,
    img: "./../Images/Products/5.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/5.webp" },
      { id: 2, img: "./../Images/Products/5-1.webp" },
    ],
    categury : "glotamin",
    categurytext: "Unknown",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 6,
    name: "کراتین مونوهیدرات ماسلتک",
    img: "./../Images/Products/8-2.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/8-2.webp" },
      { id: 2, img: "./../Images/Products/8-3.webp" },
      { id: 3, img: "./../Images/Products/8-1.webp" },
    ],
    categury: "creatin",
    categurytext: "creatin",
    price : 3_600_000,
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 80,
      tasteCount: 0,
    },
    status: "0",
  },
  {
    id: 7,
    name: "گینر رول وان کیسه ای ",
    price: 5490000,
    img: "./../Images/Products/10-1.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/10-1.webp" },
      { id: 2, img: "./../Images/Products/10-2.webp" },
    ],
    categury: "gainer",
    categurytext: "Gainer",
    taste: [],
    qty: 1,
    info: {
      type: "پودر",
      origin: "کانادا",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 8,
    name: "قرص هورمون رشد یونیورسال جی اچ مکس",
    price: 3290000,
    img: "./../Images/Products/12-1.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/12-1.webp" },
      { id: 2, img: "./../Images/Products/12-2.webp" },
    ],
    categury: "Growth hormone",
    categurytext: "Growth Hormone",
    taste: [],
    info: {
      type: "قرص",
      origin: "آمریکا",
      servings: 60,
      tasteCount: 0,
    },
    status: "0",
  },
  {
    id: 9,
    name: "آمینواسید بی‌پی‌آی",
    price: 1950000,
    img: "./../Images/Products/13.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/13.webp" },
      { id: 2, img: "./../Images/Products/13-2.webp" },
    ],
    categury: "aminos",
    categurytext: "amino",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 30,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 10,
    name: "پمپ نوتری نیترو",
    price: 1890000,
    img: "./../Images/Products/14.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/14-1.webp" },
    ],
    categury: "pump",
    categurytext: "Pump",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 40,
      tasteCount: 0,
    },
    status: "0",
  },
  {
    id: 11,
    name: "پروتئین دایت وی آلمانی",
    price: 3850000,
    img: "./../Images/Products/15.webp",
    subImg: [],
    categury: "protein",
    categurytext: "Protein",
    taste: [],
    info: {
      type: "پودر",
      origin: "آلمان",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 12,
    name: "آمینواسید اپتیموم نوتریشن",
    price: 2780000,
    img: "./../Images/Products/16.webp",
    subImg: [],
    categury: "aminos",
    categurytext: "Amino Acids",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 65,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 13,
    name: "گینر اپتیموم 2 کیلویی",
    price: 4980000,
    img: "./../Images/Products/17.webp",
    subImg: [],
    categury: "gainer",
    categurytext: "Gainer",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 54,
      tasteCount: 0,
    },
    status: "0",
  },
  {
    id: 14,
    name: "وی پروتئین ژن استار",
    price: 1790000,
    img: "./../Images/Products/18.webp",
    subImg: [],
    categury: "protein",
    categurytext: "Protein",
    taste: [],
    info: {
      type: "پودر",
      origin: "ایران",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 15,
    name: "پمپ رونی کلمن",
    price: 2250000,
    img: "./../Images/Products/19.webp",
    subImg: [],
    categury: "pump",
    categurytext: "Pump",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 30,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 16,
    name: "کراتین ناترند",
    price: 3100000,
    img: "./../Images/Products/20.webp",
    subImg: [],
    categury: "creatin",
    categurytext: "creatin",
    taste: [],
    info: {
      type: "پودر",
      origin: "چک",
      servings: 100,
      tasteCount: 0,
    },
    status: "0",
  },
  {
    id: 17,
    name: "گلوتامین الیت",
    price: 1100000,
    img: "./../Images/Products/21.webp",
    subImg: [],
    categury: "glotamin",
    categurytext: "glotamin",
    taste: [],
    info: {
      type: "پودر",
      origin: "ایران",
      servings: 50,
      tasteCount: 0,
    },
    status: "1",
  },
   {
    id: 19,
    name: "آمینو وی ناترکس",
    price: 1980000,
    img: "./../Images/Products/amino1.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/amino1.webp" },
      { id: 2, img: "./../Images/Products/amino1-1.webp" },
    ],
    categury: "amino",
    categurytext: "amino",
    taste: ["انبه", "لیمویی"],
    info: {
      type: "قرص",
      origin: "آمریکا",
      servings: 300,
      tasteCount: 2,
    },
    status: "1",
  },
  {
    id: 20,
    name: "آمینو 5600 سایتک",
    price: 1600000,
    img: "./../Images/Products/amino2.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/amino2.webp" },
      { id: 2, img: "./../Images/Products/amino2-1.webp" },
    ],
    categury: "amino",
    categurytext: "amino",
    taste: [],
    info: {
      type: "قرص",
      origin: "مجارستان",
      servings: 500,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 21,
    name: "آمینو انرژی اپتیموم",
    price: 2450000,
    img: "./../Images/Products/amino3.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/amino3.webp" },
      { id: 2, img: "./../Images/Products/amino3-1.webp" },
    ],
    categury: "amino",
    categurytext: "amino",
    taste: ["هندوانه", "بلوبری"],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 65,
      tasteCount: 2,
    },
    status: "1",
  },
  {
    id: 22,
    name: "آمینو فول استار لبز",
    price: 1790000,
    img: "./../Images/Products/amino4.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/amino4.webp" },
      { id: 2, img: "./../Images/Products/amino4-1.webp" },
    ],
    categury: "amino",
    categurytext: "amino",
    taste: [],
    info: {
      type: "قرص",
      origin: "کانادا",
      servings: 400,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 23,
    name: "آمینو ایکس بی‌اس‌ان",
    price: 2300000,
    img: "./../Images/Products/amino5.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/amino5.webp" },
      { id: 2, img: "./../Images/Products/amino5-1.webp" },
    ],
    categury: "amino",
    categurytext: "amino",
    taste: ["آناناس", "پرتقال خونی"],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 70,
      tasteCount: 2,
    },
    status: "1",
  },
   {
    id: 24,
    name: "گلوتامین اپتیموم نوتریشن",
    price: 2100000,
    img: "./../Images/Products/glutamine1.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/glutamine1.webp" },
      { id: 2, img: "./../Images/Products/glutamine1-1.webp" },
    ],
    categury: "glotamin",
    categurytext: "glotamin",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 25,
    name: "گلوتامین سایتک نوتریشن",
    price: 1890000,
    img: "./../Images/Products/glutamine2.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/glutamine2.webp" },
      { id: 2, img: "./../Images/Products/glutamine2-1.webp" },
    ],
    categury: "glotamin",
    categurytext: "glotamin",
    taste: ["لیمو"],
    info: {
      type: "پودر",
      origin: "مجارستان",
      servings: 50,
      tasteCount: 1,
    },
    status: "1",
  },
  {
    id: 26,
    name: "گلوتامین بی‌پی‌آی اسپرتس",
    price: 2000000,
    img: "./../Images/Products/glutamine3.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/glutamine3.webp" },
      { id: 2, img: "./../Images/Products/glutamine3-1.webp" },
    ],
    categury: "glotamin",
    categurytext: "glotamin",
    taste: ["هندوانه"],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 60,
      tasteCount: 1,
    },
    status: "1",
  },
  {
    id: 27,
    name: "گلوتامین ناترکس",
    price: 1750000,
    img: "./../Images/Products/glutamine4.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/glutamine4.webp" },
      { id: 2, img: "./../Images/Products/glutamine4-1.webp" },
    ],
    categury: "glotamin",
    categurytext: "glotamin",
    taste: [],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 80,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 28,
    name: "گلوتامین رونی کلمن",
    price: 2200000,
    img: "./../Images/Products/glutamine5.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/glutamine5.webp" },
      { id: 2, img: "./../Images/Products/glutamine5-1.webp" },
    ],
    categury: "glotamin",
    categurytext: "glotamin",
    taste: ["آناناس", "پرتقال"],
    info: {
      type: "پودر",
      origin: "آمریکا",
      servings: 70,
      tasteCount: 2,
    },
    status: "1",
  },
   {
    id: 29,
    name: "مولتی ویتامین اپتی-من اپتیموم",
    price: 1650000,
    img: "./../Images/Products/multi1.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/multi1.webp" },
      { id: 2, img: "./../Images/Products/multi1-1.webp" },
    ],
    categury: "multivitamin",
    categurytext: "multivitamin",
    taste: [],
    info: {
      type: "قرص",
      origin: "آمریکا",
      servings: 90,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 30,
    name: "مولتی ویتامین ویوا تون",
    price: 980000,
    img: "./../Images/Products/multi2.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/multi2.webp" },
      { id: 2, img: "./../Images/Products/multi2-1.webp" },
    ],
    categury: "multivitamin",
    categurytext: "multivitamin",
    taste: [],
    info: {
      type: "کپسول",
      origin: "انگلستان",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 31,
    name: "مولتی ویتامین فارماتون",
    price: 1390000,
    img: "./../Images/Products/multi3.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/multi3.webp" },
      { id: 2, img: "./../Images/Products/multi3-1.webp" },
    ],
    categury: "multivitamin",
    categurytext: "multivitamin",
    taste: [],
    info: {
      type: "کپسول",
      origin: "سوئیس",
      servings: 100,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 32,
    name: "مولتی ویتامین یونی زینک",
    price: 750000,
    img: "./../Images/Products/multi4.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/multi4.webp" },
      { id: 2, img: "./../Images/Products/multi4-1.webp" },
    ],
    categury: "moltivitamin",
    categurytext: "moltivitamin",
    taste: [],
    info: {
      type: "قرص",
      origin: "ایران",
      servings: 60,
      tasteCount: 0,
    },
    status: "1",
  },
  {
    id: 33,
    name: "مولتی ویتامین مینرال سنتروم",
    price: 1850000,
    img: "./../Images/Products/multi5.webp",
    subImg: [
      { id: 1, img: "./../Images/Products/multi5.webp" },
      { id: 2, img: "./../Images/Products/multi5-1.webp" },
    ],
    categury: "moltivitamin",
    categurytext: "moltivitamin",
    taste: [],
    info: {
      type: "قرص",
      origin: "آمریکا",
      servings: 100,
      tasteCount: 0,
    },
    status: "1",
  },
];






const allCategury = [
  { id: 1, name: "پروتئین وی", img: "./Images/Categury/1.webp" , link : "/categuryByProducts/protein"},
  { id: 2, name: "آمینواسید ها", img: "./Images/Categury/5.webp" , link : "/categuryByProducts/amino"},
  { id: 3, name: "گینر", img: "./Images/Categury/3.webp" , link : "/categuryByProducts/gainer"},
  { id: 4, name: "کربو مس ", img: "./Images/Categury/4.webp" , link : "/categuryByProducts/carbomas"},
  { id: 5, name: "کراتین", img: "./Images/Categury/6.webp" , link : "/categuryByProducts/ceratin"},
  { id: 6, name: "تست بوستر", img: "./Images/Categury/11.webp" , link : "/categuryByProducts/testboaster"},
  { id: 7, name: "گلوتامین", img: "./Images/Categury/8.webp" , link : "/categuryByProducts/glotamin"},
  { id: 8, name: "مولتی ویتامین", img: "./Images/Categury/12.webp" , link : "/categuryByProducts/moltivitamin"},
  { id: 9, name: "بی سی ای ای", img: "./Images/Categury/2.png" , link : "/categuryByProducts/bcaa"},
  { id: 10, name: "پروتئین وی ", img: "./Images/Categury/1.webp" , link : "/categuryByProducts/protein"},
];

const preSellProducts = [
  {
    id: 1,
    name: `کراتین کوین لورون`,
    price: 2_000_000,
    img: "./../Images/Products/2.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/2-2.webp",
      },
    ],
    taste : [],
    qty : 1

  },
  {
    id: 2,
    name: "کراتین رونی کلمن",
    price: 2_750_000,
    img: "./../Images/Products/1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/1-2.webp",
      },
    ],
    taste : [],
    qty : 1

  },
  {
    id: 3,
    name: "کراتین اپلاید",
    price: 3_250_000,
    img: "./../Images/Products/3.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/3-2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/3-3.webp",
      },
    ],
    taste : [],
    qty : 1


  },
  {
    id: 4,
    name: "پروتعین وی اپلاید 3 کیلویی",
    price: 4_000_000,
    img: "./../Images/Products/4.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/4.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/4-2.webp",
      },
      {
        id: 3,
        img: "./../Images/Products/4-3.webp",
      },
    ],
    taste: [
      { id: 1, title: " آدامس بادکنکی", status: '1' },
      { id: 2, title: "  کیک بلوبری", status: '0' },
      { id: 3, title: " تافی پاپ کورن ", status: '1' },
      { id: 4, title: "  بستنی وانیلی", status: '0' },
      { id: 5, title: " کارامل " },
      { id: 6, title: "  کیک هویج", status: '0' }
    ],
    qty : 1

  },
  {
    id: 5,
    name: "گلوتامین ماسلتک",
    price: 825_000,
    img: "./../Images/Products/5.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/5.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/5-2.webp",
      },

    ],
    taste : [],
    qty : 1


  },
  {
    id: 6,
    name: "کراتین مونوهیدرات ماسلتک 1.5 کیلویی",
    img: "./../Images/Products/8-2.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/8-2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/8-3.webp",
      },
    ],
    price: 3_600_000,
    taste : [],
    qty : 1


  },
  {
    id: 7,
    name: "گینر رول وان کیسه ای ",
    price: 5_490_000,
    img: "./../Images/Products/10-1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/10-1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/10-2.webp",
      },
    ],
    taste : [],
    qty : 1


  },
  {
    id: 8,
    name: " قرص هورمون رشد یونیورسال جی اچ مکس ",
    price: 3_290_000,
    img: "./../Images/Products/12-1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/12-1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/12-2.webp",
      },
    ],
    taste : [],
    qty : 1


  },
];

const allBrandLogo = [
  {
    id: 1,
    img: "./Images/logo/1.webp",
    name: "cevinlevron",
    title: "کوین لورون | KEVIN LEVRONE",
    desc: "معرفی برند مکمل کوین لورون امریکا : کوین لورون یک بدنساز حرفه ای IFBB است و به عنوان یکی از جذاب ترین و با استعداد ترین ورزشکاران در تمام دوران ها شناخته می شود. طی سال های گذشته ، سری محصولات تغذیه ورزشی Levrone Signature Series در سراسر اروپا راه افتاده و به سرعت رد پای خود را در بسیاری از کشورهای جهان گسترش داده است. مکمل های کمپانی کوین لورون امریکا و توزیع کننده لهستان مجموعه ای از فرمول های پیشرفته مبتنی بر عملکرد هستند که همه با استفاده از بهترین مواد تشکیل دهنده و دقیق ترین استانداردهای کنترل کیفیت تولید شده اند. لوورون ، یک بار دیگر ، مصمم بود که خط تولید محصولات تغذیه ای ورزشی را برای هر کسی که قصد دارد قدرت افسانه ای ، عضله ، قدرت ، استقامت و رسیدن به بالاترین سطح آمادگی .جسمانی و زیبایی ظاهری را داشته باشد ، ت",
    products: [
      {
        id: 1,
        img: "./Images/cevinlevron/1.webp",
        price: "258000",
        name: "کراتین کوین لورون",
      },
      {
        id: 2,
        img: "./Images/cevinlevron/2.webp",
        price: "365000",
        name: "کراتین کوین لورون",
      },
      {
        id: 3,
        img: "./Images/cevinlevron/3.webp",
        price: "2200000",
        name: "کراتین کوین لورون",
      },
      {
        id: 4,
        img: "./Images/cevinlevron/4.webp",
        price: "780000",
        name: "کراتین کوین لورون",
      },
      {
        id: 5,
        img: "./Images/cevinlevron/5.webp",
        price: "4500000",
        name: "کراتین کوین لورون",
      },
    ],
  },
  {
    id: 2,
    img: "./Images/logo/2.webp",
    name: "on",
    title: "اپتیموم نوتریشن | Optimum Nutrition",
    desc: " این کمپانی از همان ابتدا به دلیل کیفیت بالا محصولات تولیدی خود مطرح شد و در مدت زمان کوتاهی به یکی از برند های پر فروش در این صنعت بزرگ تبدیل شد ، به مرور زمان گستره محصولات خود را افزایش داد و توانست بخش بزرگی از این صنعت را در اختیار بگیرد .پروتئین وی گلد استاندرارد اپتیموم نوتریشن طی سال های متوالی جزو پرفروش ترین مکمل های پروتئینی در دنیا محسوب میشود و این نشانه کیفیت بالا و رضایت مصرف کننده است کمپانی Optimum Nutrition در سال ۱۹۸۶ در امریکا تاسیس شد",
    products: [
      {
        id: 1,
        img: "./Images/onnotritions/1.webp",
        name: "مس گینر",
        price: 2500000,
      },
      {
        id: 2,
        img: "./Images/onnotritions/2.webp",
        name: "آمینو 2222",
        price: 3650000,
      },
      {
        id: 3,
        img: "./Images/onnotritions/3.webp",
        name: "مس گینر 3.5 کیلویی",
        price: 850000,
      },
      {
        id: 4,
        img: "./Images/onnotritions/4.webp",
        name: "پروتعین وی ایزوله ",
        price: 9850000,
      },
      {
        id: 5,
        img: "./Images/onnotritions/5.webp",
        name: "کراتین مونوهیدرات",
        price: 2500000,
      },
    ],
  },
  {
    id: 3,
    img: "./Images/logo/3.webp",
    name: "applaid",
    title: "اپلاید نوتریشن | Applied Nutrition",
    desc: "Applied Nutrition دارای گواهینامه های متعدد استاندارد مواد غذایی (BRC ، ISO۲۲۰۰۰ ، GMP ، Informed Sport و Halal Trust) را دریافت کرده است و این نشان می دهد که این کمپانی چقدر علاقه به کیفیت و ساخت محصولاتی دارید که مورد اعتماد ورزشکاران در سراسر جهان هستیم کمپانی Applied Nutrition ، یک چشم انداز دارد – “تبدیل شدن به معتبرترین برند تغذیه ورزشی جهان” در نتیجه تلاش بی وقفه برای رسیدن به کمال ، Applied Nutrition انقلابی را آغاز کرده است ، نحوه مصرف مکمل ورزشی ،طعم و مزه آن و مهمتر از همه ، چگونه به شما در عملکرد کمک می کند!",
    products: [
      {
        id: 1,
        img: "./Images/applied/1.webp",
        name: "مس گینر 2.5 کیلویی اپلاید",
        price: 5500000,
      },
      {
        id: 2,
        img: "./Images/applied/2.webp",
        name: "مس گینر 5 کیلویی اپلاید",
        price: 12000000,
      },
      {
        id: 3,
        img: "./Images/applied/3.webp",
        name: "ایزو ویی اپلاید",
        price: 3600000,
      },
      {
        id: 4,
        img: "./Images/applied/4.webp",
        name: "لآمینو اپلاید",
        price: 5000000,
      },
      {
        id: 5,
        img: "./Images/applied/5.webp",
        name: "bcaa اپلاید",
        price: 4200000,
      },
    ],
  },
  {
    id: 4,
    img: "./Images/logo/4.webp",
    name: "bpi",
    title: "بی پی آی | BPI SPORTS",
    desc: "کمپانی بزرگ و مطرح bpi sports یکی از غول ها در صعنت مکمل های غذایی میباشد .این کمپانی امریکایی به تمام مشتریان خود این اطمینان را میدهد که محصولی با بالاترین کیفیت و خلوص را در اختیارشان قرار میدهد . شعار کمپانی بزرگ بی پی ای این است که (بهترین محصول را بسازید ، پشت آنچه می سازید بایستیدبرند BPI ، مخفف Be Powerful Incorporated ، یعنی با قدرت همراه باشید .کمپانی مکمل BPI Sports یک مورد یک برند نوظهور در بازار مکمل های ورزشی است با این وجود به سرعت به یکی از کمپانی های برجسته در این زمینه تبدیل شده است .دفتر مرکزی کمپانی بی پی ای اسپورت در جنوب فلوریدا اکنون بیش از ۵۳،۰۰۰ فوت مربع را شامل می شود و در حال رشد است.در مجاورت فضای اداری یک سالن ورزشی BPI کاملاً تجاری است که برای ورزشکاران و اعضای تیم خود ساخته است .",
    products: [
      { id: 1, img: "./Images/bpi/1.webp", name: "بست کراتین", price: 2500000 },
      { id: 2, img: "./Images/bpi/2.webp", name: "ایزو HD", price: 6850000 },
      { id: 3, img: "./Images/bpi/3.webp", name: "MRK", price: 3600000 },
      { id: 4, img: "./Images/bpi/4.webp", name: "بست آمینو", price: 4500000 },
      { id: 5, img: "./Images/bpi/5.webp", name: "کراتین CLA", price: 2650000 },
    ],
  },
  {
    id: 5,
    img: "./Images/logo/5.webp",
    name: "museltech",
    title: "ماسل تک / MuscleTech",
    desc: "شرکت ماسل تک آمریکا فعالیت خود را در سال ۱۹۹۵ میلادی در زمینه تولید مکمل های غذایی و ورزشی با کیفیت و متنوع آغاز نمود و ظرف مدت کمتر از ۳ سال به یکی از تخصصی ترین و برترین برندهای تولیدکننده مکمل های بدنسازی در سرتاسر جهان تبدیل شد .یکی از اصلی ترین وجه های تمایز شرکت ماسل تک نسبت به سایر شرکت های تولید کننده مکمل های ورزشی، توجه راسخ این برند به علم و پژوهش می باشد .امروزه ماسل تچ Muscletech بیش از یک دهه است که نمادی از بهترین و والاترین کیفیت می باشد . اگر فقط بخواهیم چندتایی از محصولات معروف ماسل تک را نام ببریم این لیست شامل کراتین سل تک ( Cell-Tech )، کربو پروتئین مس تک ( Mass-Tech ) ، پروتئین وی نیترو تچ ( Nitro-Tech ) ، پروتئین فاز ۸ ( Phase ۸ ) ، چربی سوز هیدروکس کات ( Hydroxycut ) ، پمپاژ خون نانو ویپور ( Nano Vapor ) ، پمپ عضله شاتر اس ایکس سون ( Shatter SX ۷ ) ، عضله ساز آنابولیک هالو ( Anabolic Halo ) ، آمینو بیلد ( Amino Build ) می باشد .",
    products: [
      {
        id: 1,
        img: "./Images/muscletech/1.webp",
        name: "مولتی ویتامین",
        price: 1500000,
      },
      { id: 2, img: "./Images/muscletech/2.webp", name: "fv", price: 3650000 },
      {
        id: 3,
        img: "./Images/muscletech/3.webp",
        name: "کراتین سلتک",
        price: 3560000,
      },
      {
        id: 4,
        img: "./Images/muscletech/4.webp",
        name: "کلیر ماسل",
        price: 5000000,
      },
      {
        id: 5,
        img: "./Images/muscletech/5.webp",
        name: "آمینو بیلد",
        price: 3257000,
      },
    ],
  },
  {
    id: 6,
    img: "./Images/logo/6.webp",
    name: "nutrex",
    title: "ناترکس | Nutrex Research",
    desc: "معرفی برند Nutrex Research امریکا :کمپانی Nutrex Research ، در سال ۲۰۰۲ تاسیس شده ، همیشه به ارائه محصولات پیشرفته در صنعت بهداشت و تناسب اندام اختصاص یافته است. ناترکس با بیش از ۱۶ سال تجربه ، متعهد هست که از طریق نوآوری و محصولات با کیفیت ، تمام جنبه های صنعت تناسب اندام را پوشش دهد . ناترکس در خط مقدم سلامتی و عملکرد ورزشی ایستاده است . کمپانی ناترکس اولین شرکت سازنده مکمل کپسول های مایع بود . در حالی که کمپانی های دیگر مشغول تلاش برای کپی کردن فرمول موفقیت آمیز کپسول مایع Nutrex  بودند . کمپانی مکمل ناترکس سطح بعدی با توسعه کپسول های چند فاز مایع، که دو کپسول در یک است. چربی سوزهای این کمپانی باعث معروف شدن Nutrex شد ، اما سازمان آن به گسترش آن در سراسر جهان تناسب اندام کمک کرده است. ناترکس ریسرچ یک کمپانی بر پایه جدید ترین تحقیقات علمی در صتعت مکمل های غذایی و تناسب اندام است که در نتیجه برترین و موثر ترین محصولات در جهت بهبود وضعیت بدنی روانه بارار کرده اند",
    products: [
      { id: 1, img: "./Images/nutrex/1.webp", name: "آرژنین", price: 2500000 },
      {
        id: 2,
        img: "./Images/nutrex/2.webp",
        name: "HMB اچ ام بی",
        price: 3650000,
      },
      {
        id: 3,
        img: "./Images/nutrex/3.webp",
        name: "پروتعین وی ایزوله",
        price: 638000,
      },
      {
        id: 4,
        img: "./Images/nutrex/4.webp",
        name: "لیپو سیکس",
        price: 550000,
      },
      { id: 5, img: "./Images/nutrex/5.webp", name: "لیپو سون", price: 966000 },
    ],
  },
];

const allArticles = [
  {
    id: 1,
    title: "قرص امگا 3 برای چیست؟ فواید تا زمان مصرف",
    img: "./Images/Articles/1.webp",
    disc: "اسیدهای چرب امگا 3 بخش مهمی از رژیم غذایی انسان هستند و نقش بسیار حیاتی در سیستم‌های مختلف بدن ایفا می‌کنند. خواص شگفت‌انگیز امگا 3 سبب می‌شود برخی افراد بخواهند از قرص امگا 3 در کنار یک رژیم غذایی م",
  },
  {
    id: 2,
    title: "تفاوت آمینو پودری و قرصی چیست؟",
    img: "./Images/Articles/2.webp",
    disc: "بدنسازان و ورزشکاران برای بهبود عملکرد تمرینی خود و گرفتن نتایج بهتر، از مکمل‌های ورزشی مختلفی استفاده می‌کنند",
  },
  {
    id: 3,
    title: "همه چیز درباره ملاتونین ",
    img: "./Images/Articles/3.webp",
    disc: "بدن شگفت‌انگیز ما به طور مداوم در حال تولید هورمون‌های مختلف و مواد موردنیازمان است. هر یک از این مواد تولید شده در بدن نقش مهمی را در حفظ هماهنگی و کارکرد درست تمام ارگان‌ها ایفا می‌کنند. ملاتونین ی...",
  },
  {
    id: 4,
    title: "عوارض و فواید روزه‌ برای ورزشکاران ",
    img: "./Images/Articles/4.webp",
    disc: "اگر ورزشکار هستید و دوست دارید بدانید روزه‌گرفتن در ماه رمضان چه فواید و عوارضی برایتان به همراه دارد تا انتهای این مقاله از سم سون شاپ همراه ما باشید...",
  },
  {
    id: 5,
    title: "بهترین کراتین ترکیبی برای حجم",
    img: "./Images/Articles/5.webp",
    disc: "کراتین ترکیبی، به‌عنوان یک فرم پیشرفته‌تر از کراتین، ترکیبی از انواع مختلف کراتین و سایر مواد مغذی است که به افزایش جذب و اثربخشی آن کمک می‌کند...",
  },
];
const papularSearchesInwebsite = [
  { id: 1, title: "کراتین" },
  { id: 2, title: "گینر" },
  { id: 3, title: "پمپ" },
  { id: 4, title: "ماسلتک" },
  { id: 5, title: "اپلاید" },
  { id: 6, title: "وی" },
];

const RelatedProducts = [
  {
    id: 1,
    name: `کراتین کوین لورون`,
    price: 2_000_000,
    img: "./../Images/Products/1.webp",
  },
  {
    id: 2,
    name: "کراتین رونی کلمن",
    price: 2_750_000,
    img: "./../Images/Products/2.webp",
  },
  {
    id: 3,
    name: "کراتین اپلاید",
    price: 3_250_000,
    img: "./../Images/Products/3.webp",
  },
  {
    id: 4,
    name: "پروتعین وی اپلاید 3 کیلویی",
    price: 4_000_000,
    img: "./../Images/Products/4.webp",
  },
  {
    id: 5,
    name: "کراتین ماسلتک",
    price: 825_000,
    img: "./../Images/Products/5.webp",
  },
  { id: 6, name: "کراتین مونوهیدرات ماسلتک", img: "./Images/Products/6.webp" , price: 3_600_000,},
  {
    id: 7,
    name: "مس گینر",
    price: 67_500_000,
    img: "./../Images/Products/7.webp",
  },
];

const DataFrequentlyAskedQuestions = [
  {id : 1 , qustion : "کدام مکمل برای افزایش حجم و وزن بهتر است؟"  , answer : "گینر و کراتین بهترین مکمل‌ها برای افزایش حجم و وزن هستند."},
  {id : 2 , qustion : "بهترین مکمل برای سوزاندن چربی و کاهش وزن چیست؟"  , answer : "بهترین مکمل برای کاهش وزن چربی‌سوز است."},
  {id : 3 , qustion : "آیا مصرف مکمل‌های بدنسازی عوارضی دارد؟", answer : "مصرف بیش از توصیه شده امکان آسیب دارد. "},
  {id : 4 , qustion : "آیا مکمل‌هایی که در فروشگاه محمدی به فروش می‌رسند اصل و قابل اعتماد هستند؟"  , answer : "بله همه مکمل‌ها وارداتی هستند و به صورت اورجینال ارائه می‌شوند."},
  {id : 5 , qustion : "آیا مکمل‌های بدنسازی امکان بازگشت و مرجوعی دارند؟"  , answer : "بله درصورتی که پلمپ محصول باز نشده باشد."},
]

const TitleCategury = [
  "پیش فرض",
  "پرفروش ترین",
  "ارزان ترین",
  "جدید ترین",
  "گران ترین",
]



export {
  allCategury,
  RelatedProducts,
  allProducts,
  preSellProducts,
  allBrandLogo,
  allArticles,
  papularSearchesInwebsite,
  DataFrequentlyAskedQuestions,
  TitleCategury
};
