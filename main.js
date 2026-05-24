/* ══════════════════════════════════════════
   Saleem Afandi Hotel — main.js
   ══════════════════════════════════════════ */

'use strict';

/* ════ TRANSLATIONS ════ */
const T = {
  en: {
    'brand.main': 'Saleem Afandi', 'brand.sub': 'Luxury Hotel',
    'nav.home': 'Home', 'nav.rooms': 'Rooms', 'nav.about': 'About',
    'nav.services': 'Services', 'nav.gallery': 'Gallery', 'nav.contact': 'Contact', 'nav.cta': 'Contact Us',
    'hero.badge': 'Nablus · Palestine · Est. 2013',
    'hero.title': 'Welcome to<br><em>Saleem Afandi</em><br>Hotel',
    'hero.sub': 'Comfort, elegance, and a perfect stay',
    'hero.btn1': 'View Rooms', 'hero.btn2': 'Contact Us', 'hero.scroll': 'Scroll',
    'stats.rooms': 'Luxury Rooms', 'stats.years': 'Years of Excellence',
    'stats.guests': 'Happy Guests', 'stats.rating': 'Guest Rating',
    'about.sub': 'Our Story',
    'about.title': 'A Heritage of <span>Refined Hospitality</span>',
    'about.badge': 'Years of Luxury',
    'about.p1': 'Saleem Afandi Hotel is a distinguished landmark of hospitality in the heart of Nablus, Palestine. We offer our guests a unique blend of authentic warmth and modern comfort, creating an atmosphere where every detail is carefully considered.',
    'about.p2': 'From our elegantly appointed rooms to our welcoming coffee shop and cozy seating areas, we are dedicated to providing a relaxing and memorable experience for every guest — whether for business, leisure, or family stays.',
    'about.f1': 'Prime city-centre location', 'about.f2': 'Coffee Shop & Café on-site',
    'about.f3': 'Free high-speed Wi-Fi', 'about.f4': '24-hour reception service',
    'about.btn': 'Explore Our Rooms',
    'rooms.sub': 'Accommodation', 'rooms.title': 'Our <span>Rooms & Suites</span>',
    'rooms.desc': 'Select a room type below to explore photos and details.',
    'rooms.tab.double': 'Large Double Room', 'rooms.tab.suite': 'Romeo & Juliette Suite',
    'rooms.tab.deluxe': 'Deluxe Junior Suite', 'rooms.tab.triple': 'Deluxe Triple Room',
    'rooms.tab.vip': 'VIP Suite with Sauna', 'rooms.enquire': 'Enquire Now',
    'rooms.double.name': 'Large Double Room', 'rooms.double.name_ar': 'غرفة مزدوجة كبيرة',
    'rooms.double.desc': 'A spacious and elegantly furnished double room designed for comfort and relaxation. Perfect for couples or guests seeking extra space, with warm décor and all modern amenities.',
    'rooms.suite.name': 'Romeo & Juliette Suite', 'rooms.suite.name_ar': 'جناح روميو وجولييت',
    'rooms.suite.desc': 'Our most romantic VIP suite — a breathtaking blend of passion and luxury. Designed for unforgettable moments, with stunning décor, a plush king bed, and exclusive amenities.',
    'rooms.deluxe.name': 'Deluxe Junior Suite', 'rooms.deluxe.name_ar': 'سويت عائلي - ديلوكس جونيور',
    'rooms.deluxe.desc': 'A beautifully appointed family suite combining elegance with generous space. Ideal for families or small groups, featuring premium furnishings and a warm, welcoming atmosphere.',
    'rooms.triple.name': 'Deluxe Triple Room', 'rooms.triple.name_ar': 'غرفة ثلاثية ديلوكس',
    'rooms.triple.desc': 'A stylish triple room perfect for families or groups of three. Featuring three comfortable beds, elegant décor, and all the amenities needed for a comfortable stay.',
    'rooms.vip.name': 'Deluxe Family Suite with Sauna', 'rooms.vip.name_ar': 'سويت عائلي فاخر مع ساونا — 6 أشخاص',
    'rooms.vip.desc': 'The ultimate family luxury experience. Accommodates up to 6 guests with a private sauna, premium furnishings, spacious living areas, and everything for an indulgent stay.',
    'rf.king': 'King Bed', 'rf.wifi': 'Free Wi-Fi', 'rf.ac': 'Air Conditioning',
    'rf.bath': 'Private Bathroom', 'rf.tv': 'Smart TV',
    'rf.2pax': '2 Persons', 'rf.3pax': '3 Persons', 'rf.4pax': 'Up to 4 Persons',
    'rf.6pax': 'Up to 6 Persons', 'rf.vip': 'VIP Suite', 'rf.family': 'Family Suite',
    'rf.3beds': '3 Beds', 'rf.sauna': 'Private Sauna', 'rf.living': 'Living Area', 'rf.balcony': 'Balcony',
    'svc.sub': 'What We Offer', 'svc.title': 'Hotel <span style="color:var(--gold-l)">Services</span>',
    'svc.desc': 'Every service is delivered with genuine care and meticulous attention to your comfort.',
    'svc.s1.name': 'Free Wi-Fi', 'svc.s1.desc': 'High-speed complimentary internet available throughout all hotel areas.',
    'svc.s2.name': '24/7 Reception', 'svc.s2.desc': 'Our friendly front desk team is available around the clock to assist you.',
    'svc.s3.name': 'Coffee Shop / Café', 'svc.s3.desc': 'Enjoy freshly brewed coffee, hot drinks, and light bites in our welcoming café.',
    'svc.s4.name': 'Cleaning Service', 'svc.s4.desc': 'Daily professional housekeeping with fresh linens and premium toiletries.',
    'svc.s5.name': 'Comfortable Seating Areas', 'svc.s5.desc': 'Relaxing common lounges and seating areas for guests to unwind.',
    'svc.s6.name': 'Google Maps', 'svc.s6.desc': 'Find us easily — tap Google Maps in our Contact section.',
    'svc.s7.name': 'Waze Navigation', 'svc.s7.desc': 'Navigate directly to the hotel using Waze with one tap.',
    'gal.sub': 'Visual Journey', 'gal.title': 'Photo <span>Gallery</span>',
    'gal.tab.lobby': 'Hotel Lobby', 'gal.tab.cafe': 'Coffee Shop', 'gal.tab.rooms': 'Rooms',
    'gal.l.lobby1': 'Hotel Lobby', 'gal.l.lobby2': 'Grand Entrance',
    'gal.l.lobby3': 'Reception Area', 'gal.l.lobby4': 'Hotel Interior',
    'gal.l.cafe1': 'Coffee Shop', 'gal.l.cafe2': 'Café Seating',
    'gal.l.cafe3': 'Café Interior', 'gal.l.cafe4': 'Café Ambiance',
    'gal.l.r1': 'Large Double Room', 'gal.l.r2': 'Romeo & Juliette Suite',
    'gal.l.r3': 'Deluxe Junior Suite', 'gal.l.r4': 'Deluxe Triple Room',
    'gal.l.r5': 'VIP Suite with Sauna', 'gal.l.r6': 'Suite Interior',
    'lb.prev': '‹ Prev', 'lb.next': 'Next ›',
    'con.sub': 'Get in Touch', 'con.title': 'Contact <span>Information</span>',
    'con.addrlbl': 'Address', 'con.addrval': 'Nablus Municipal Complex, 7th Floor, Nablus, Palestine',
    'con.phonelbl': 'Phone / WhatsApp', 'con.emaillbl': 'Email',
    'con.phone2lbl': 'Landline', 'con.phone2val': '09-237-3338',
    'con.fblbl': 'Facebook', 'con.fbval': 'Saleem Afandi Hotel',
    'con.cilbl': 'Check-in Time', 'con.cival': '2:00 PM',
    'con.colbl': 'Check-out Time', 'con.coval': '11:30 AM',
    'con.btn.call': 'Call Now', 'con.btn.wa': 'WhatsApp', 'con.btn.email': 'Email',
    'con.btn.gmaps': 'Google Maps', 'con.btn.waze': 'Waze',
    'con.btn.ig': 'Instagram', 'con.btn.tik': 'TikTok', 'con.btn.fb': 'Facebook',
    'con.maplbl': 'Nablus Municipal Complex, 7th Floor',
    'footer.brand': 'Saleem <span>Afandi</span> Hotel',
    'footer.tag': 'Luxury · Comfort · Elegance — Nablus, Palestine · Est. 2013',
    'footer.owner': 'Built with care for Saleem Afandi Hotel',
    'footer.copy': '© 2013–2025 Saleem Afandi Hotel. All rights reserved. Nablus, Palestine.'
  },
  ar: {
    'brand.main': 'سليم أفندي', 'brand.sub': 'فندق فاخر',
    'nav.home': 'الرئيسية', 'nav.rooms': 'الغرف', 'nav.about': 'عن الفندق',
    'nav.services': 'الخدمات', 'nav.gallery': 'المعرض', 'nav.contact': 'تواصل', 'nav.cta': 'تواصل معنا',
    'hero.badge': 'نابلس · فلسطين · تأسس 2013',
    'hero.title': 'أهلاً بكم في<br><em>فندق سليم أفندي</em>',
    'hero.sub': 'راحة وأناقة وإقامة مثالية',
    'hero.btn1': 'استعرض الغرف', 'hero.btn2': 'تواصل معنا', 'hero.scroll': 'تمرير',
    'stats.rooms': 'غرفة فاخرة', 'stats.years': 'عام من التميز',
    'stats.guests': 'ضيف سعيد', 'stats.rating': 'تقييم الضيوف',
    'about.sub': 'قصتنا',
    'about.title': 'إرث من <span>الضيافة الراقية</span>',
    'about.badge': 'عاماً من الفخامة',
    'about.p1': 'فندق سليم أفندي علامة بارزة في عالم الضيافة في قلب مدينة نابلس، فلسطين. نقدم لضيوفنا مزيجاً فريداً من الدفء الأصيل والراحة العصرية، في أجواء يُعنى فيها بكل تفصيل.',
    'about.p2': 'من الغرف المُجهّزة بأناقة إلى مقهانا المرحب ومناطق الجلوس المريحة، نحرص على تقديم تجربة لا تُنسى لكل ضيف — للعمل أو الترفيه أو الرحلات العائلية.',
    'about.f1': 'موقع مركزي مميز', 'about.f2': 'مقهى وكافيه داخل الفندق',
    'about.f3': 'واي فاي مجاني وعالي السرعة', 'about.f4': 'استقبال على مدار الساعة',
    'about.btn': 'استعرض غرفنا',
    'rooms.sub': 'الإقامة', 'rooms.title': 'غرفنا <span>وأجنحتنا</span>',
    'rooms.desc': 'اختر نوع الغرفة أدناه لاستعراض الصور والتفاصيل.',
    'rooms.tab.double': 'غرفة مزدوجة كبيرة', 'rooms.tab.suite': 'جناح روميو وجولييت',
    'rooms.tab.deluxe': 'سويت عائلي ديلوكس', 'rooms.tab.triple': 'غرفة ثلاثية ديلوكس',
    'rooms.tab.vip': 'سويت VIP مع ساونا', 'rooms.enquire': 'استفسر الآن',
    'rooms.double.name': 'غرفة مزدوجة كبيرة', 'rooms.double.name_ar': 'Large Double Room',
    'rooms.double.desc': 'غرفة مزدوجة فسيحة وأنيقة مصممة للراحة والاسترخاء. مثالية للأزواج أو الضيوف الباحثين عن مساحة إضافية، بديكور دافئ وجميع وسائل الراحة العصرية.',
    'rooms.suite.name': 'جناح روميو وجولييت', 'rooms.suite.name_ar': 'Romeo & Juliette Suite',
    'rooms.suite.desc': 'أرقى أجنحتنا الرومانسية — مزيج رائع من العاطفة والفخامة. مصمم للحظات التي لا تُنسى، بديكور خلاب وسرير كينج فاخر وامتيازات حصرية.',
    'rooms.deluxe.name': 'سويت عائلي ديلوكس جونيور', 'rooms.deluxe.name_ar': 'Deluxe Junior Suite',
    'rooms.deluxe.desc': 'جناح عائلي رائع يجمع بين الأناقة والمساحة الرحبة. مثالي للعائلات أو المجموعات الصغيرة، بأثاث فاخر وأجواء ترحيبية دافئة.',
    'rooms.triple.name': 'غرفة ثلاثية ديلوكس', 'rooms.triple.name_ar': 'Deluxe Triple Room',
    'rooms.triple.desc': 'غرفة ثلاثية أنيقة مثالية للعائلات أو مجموعات من ثلاثة أشخاص. بثلاثة أسرة مريحة وديكور راقٍ وجميع وسائل الراحة.',
    'rooms.vip.name': 'سويت عائلي فاخر مع ساونا', 'rooms.vip.name_ar': 'Deluxe Family Suite with Sauna',
    'rooms.vip.desc': 'تجربة الفخامة العائلية بامتياز. يستوعب حتى 6 أشخاص مع ساونا خاصة وأثاث فاخر ومساحات معيشة رحبة وكل ما تحتاجه عائلتك لإقامة استثنائية.',
    'rf.king': 'سرير كينج', 'rf.wifi': 'واي فاي مجاني', 'rf.ac': 'تكييف',
    'rf.bath': 'حمام خاص', 'rf.tv': 'تلفزيون ذكي',
    'rf.2pax': 'شخصان', 'rf.3pax': '3 أشخاص', 'rf.4pax': 'حتى 4 أشخاص',
    'rf.6pax': 'حتى 6 أشخاص', 'rf.vip': 'جناح VIP', 'rf.family': 'جناح عائلي',
    'rf.3beds': '3 أسرة', 'rf.sauna': 'ساونا خاصة', 'rf.living': 'صالة معيشة', 'rf.balcony': 'شرفة',
    'svc.sub': 'ما نقدمه', 'svc.title': 'خدمات <span style="color:var(--gold-l)">الفندق</span>',
    'svc.desc': 'تُقدَّم كل خدمة باهتمام حقيقي وعناية فائقة براحتكم.',
    'svc.s1.name': 'واي فاي مجاني', 'svc.s1.desc': 'إنترنت لاسلكي مجاني وعالي السرعة في جميع أنحاء الفندق.',
    'svc.s2.name': 'استقبال 24 ساعة', 'svc.s2.desc': 'فريق الاستقبال الودود متاح على مدار الساعة لمساعدتكم.',
    'svc.s3.name': 'مقهى وكافيه', 'svc.s3.desc': 'استمتع بالقهوة الطازجة والمشروبات الساخنة والوجبات الخفيفة في مقهانا.',
    'svc.s4.name': 'خدمة التنظيف', 'svc.s4.desc': 'تنظيف يومي احترافي مع بياضات نظيفة ومستلزمات فاخرة.',
    'svc.s5.name': 'مناطق جلوس مريحة', 'svc.s5.desc': 'صالات استرخاء ومناطق جلوس مريحة للضيوف.',
    'svc.s6.name': 'خرائط Google', 'svc.s6.desc': 'اعثر علينا بسهولة عبر خرائط Google من قسم التواصل.',
    'svc.s7.name': 'ملاحة Waze', 'svc.s7.desc': 'تنقل مباشرة إلى الفندق عبر Waze بنقرة واحدة.',
    'gal.sub': 'جولة بصرية', 'gal.title': 'معرض <span>الصور</span>',
    'gal.tab.lobby': 'لوبي الفندق', 'gal.tab.cafe': 'المقهى', 'gal.tab.rooms': 'الغرف',
    'gal.l.lobby1': 'لوبي الفندق', 'gal.l.lobby2': 'المدخل الرئيسي',
    'gal.l.lobby3': 'منطقة الاستقبال', 'gal.l.lobby4': 'داخل الفندق',
    'gal.l.cafe1': 'المقهى', 'gal.l.cafe2': 'جلسات المقهى',
    'gal.l.cafe3': 'داخل المقهى', 'gal.l.cafe4': 'أجواء المقهى',
    'gal.l.r1': 'غرفة مزدوجة كبيرة', 'gal.l.r2': 'جناح روميو وجولييت',
    'gal.l.r3': 'سويت عائلي ديلوكس', 'gal.l.r4': 'غرفة ثلاثية ديلوكس',
    'gal.l.r5': 'سويت VIP مع ساونا', 'gal.l.r6': 'داخل الجناح',
    'lb.prev': '‹ السابق', 'lb.next': 'التالي ›',
    'con.sub': 'تواصل معنا', 'con.title': 'معلومات <span>التواصل</span>',
    'con.addrlbl': 'العنوان', 'con.addrval': 'نابلس - مجمع بلدية نابلس - الطابق السابع',
    'con.phonelbl': 'هاتف / واتساب', 'con.emaillbl': 'البريد الإلكتروني',
    'con.phone2lbl': 'هاتف أرضي', 'con.phone2val': '09-237-3338',
    'con.fblbl': 'فيسبوك', 'con.fbval': 'فندق سليم أفندي',
    'con.cilbl': 'وقت الوصول', 'con.cival': '2:00 ظهراً',
    'con.colbl': 'وقت المغادرة', 'con.coval': '11:30 صباحاً',
    'con.btn.call': 'اتصل الآن', 'con.btn.wa': 'واتساب', 'con.btn.email': 'راسلنا',
    'con.btn.gmaps': 'خرائط Google', 'con.btn.waze': 'Waze',
    'con.btn.ig': 'إنستغرام', 'con.btn.tik': 'تيك توك', 'con.btn.fb': 'فيسبوك',
    'con.maplbl': 'مجمع بلدية نابلس - الطابق السابع',
    'footer.brand': 'فندق <span>سليم أفندي</span>',
    'footer.tag': 'فخامة · راحة · أناقة — نابلس، فلسطين · تأسس 2013',
    'footer.owner': 'صُنع بعناية لفندق سليم أفندي',
    'footer.copy': '© 2013–2025 فندق سليم أفندي. جميع الحقوق محفوظة. نابلس، فلسطين.'
  }
};

/* ════ TESTIMONIALS DATA ════ */
const testimonials = {
  en: [
    { q: 'Every visit to Saleem Afandi Hotel feels like coming home — the warmth of the staff, the elegance of the rooms, and the genuine care for every guest make it truly special.', a: '— A Valued Guest', stars: 5 },
    { q: 'The Romeo & Juliette Suite was absolutely stunning. Perfect for our anniversary — an unforgettable experience from check-in to check-out.', a: '— Ahmad & Rania', stars: 5 },
    { q: 'Exceptional service and a wonderful location in the heart of Nablus. The café is a gem — we spent every morning there. Highly recommended!', a: '— Mohammed T.', stars: 5 },
    { q: 'Clean, beautiful, and incredibly welcoming. The VIP suite with sauna was the highlight of our family trip. We will definitely return.', a: '— Layla & Family', stars: 5 }
  ],
  ar: [
    { q: 'كل زيارة لفندق سليم أفندي تشعرك وكأنك عدت إلى البيت — دفء الموظفين وأناقة الغرف والاهتمام الحقيقي بكل ضيف تجعله مكاناً استثنائياً.', a: '— ضيف عزيز', stars: 5 },
    { q: 'جناح روميو وجولييت كان ببساطة رائعاً. مثالي لذكرى زواجنا — تجربة لا تُنسى من لحظة الوصول حتى المغادرة.', a: '— أحمد ورانيا', stars: 5 },
    { q: 'خدمة استثنائية وموقع رائع في قلب نابلس. المقهى كنز حقيقي — قضينا فيه كل صباح. ننصح به بشدة!', a: '— محمد ت.', stars: 5 },
    { q: 'نظيف وجميل وترحيبي بشكل استثنائي. سويت VIP مع الساونا كان أبرز لحظات رحلتنا العائلية. سنعود حتماً.', a: '— ليلى وعائلتها', stars: 5 }
  ]
};

/* ════ STATE ════ */
let lang = 'en';
let tqIdx = 0;
let tqTimer = null;
let dark = false;

/* ════ LANGUAGE ════ */
function applyLang(l) {
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-h]').forEach(el => {
    const k = el.getAttribute('data-i18n-h');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
}

function setLang(l) {
  lang = l;
  const html = document.documentElement;
  html.setAttribute('lang', l);
  html.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
  document.title = l === 'ar' ? 'فندق سليم أفندي' : 'Saleem Afandi Hotel';
  applyLang(l);
  document.getElementById('langBtnTxt').textContent = l === 'ar' ? 'اللغة' : 'Language';
  document.getElementById('optEn').classList.toggle('active', l === 'en');
  document.getElementById('optAr').classList.toggle('active', l === 'ar');
  document.getElementById('mlEn').classList.toggle('active', l === 'en');
  document.getElementById('mlAr').classList.toggle('active', l === 'ar');
  document.getElementById('langWrap').classList.remove('open');
  tqIdx = 0;
  buildTestimonials(l);
  startTqAuto();
}

function toggleLang() {
  document.getElementById('langWrap').classList.toggle('open');
}

document.addEventListener('click', e => {
  const w = document.getElementById('langWrap');
  if (w && !w.contains(e.target)) w.classList.remove('open');
});

/* ════ DARK MODE ════ */
function toggleDark() {
  dark = !dark;
  document.body.classList.toggle('dark-mode', dark);
  document.getElementById('darkBtn').textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', dark ? '1' : '0');
}

/* Restore dark mode preference */
if (localStorage.getItem('darkMode') === '1') {
  dark = true;
  document.body.classList.add('dark-mode');
  document.getElementById('darkBtn').textContent = '☀️';
}

/* ════ NAVBAR ════ */
const nav = document.getElementById('navbar');

/* ════ MOBILE MENU ════ */
function toggleMob() {
  const mob = document.getElementById('mobMenu');
  const ham = document.getElementById('hamBtn');
  mob.classList.toggle('open');
  ham.classList.toggle('open');
  document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
}

function closeMob() {
  document.getElementById('mobMenu').classList.remove('open');
  document.getElementById('hamBtn').classList.remove('open');
  document.body.style.overflow = '';
}

/* ════ HERO — صورة ثابتة من اللوبي ════ */
const heroBg = document.getElementById('heroBg');
heroBg.style.backgroundImage = "url('https://i.ibb.co/1tLz7G3K/w1.png')";

/* ════ ROOM GALLERY ════ */
const rmImgs = {
  double: ['https://i.ibb.co/TMZzNbFD/rr1.png','https://i.ibb.co/kgQR5nSf/rr2.png','https://i.ibb.co/sdMpLF6d/rr3.png','https://i.ibb.co/q3TQhgdB/rr4.png','https://i.ibb.co/hRq90V5Q/rr5.png','https://i.ibb.co/tw9gTcts/rr6.png'],
  suite:  ['https://i.ibb.co/5z0b2s9/v1.png','https://i.ibb.co/DD2R2dM2/v2.png','https://i.ibb.co/qMSh2NLT/v3.png','https://i.ibb.co/B2PS8P2H/v4.png','https://i.ibb.co/GQH5z6f8/v5.png'],
  deluxe: ['https://i.ibb.co/nMLxkbzY/r1.png','https://i.ibb.co/qLzxydqc/r2.png','https://i.ibb.co/5WgvBNf1/r3.png','https://i.ibb.co/Y7xm2CnB/r4.png'],
  triple: ['https://i.ibb.co/0jfCXtzC/e1.png','https://i.ibb.co/xKz91hVB/e2.png','https://i.ibb.co/Fb71RQyq/e3.png','https://i.ibb.co/3Y9TdsjY/e4.png'],
  vip:    ['https://i.ibb.co/bgDQyzYg/w2.png','https://i.ibb.co/bgdyM6t9/w3.png','https://i.ibb.co/fdCPGZN4/w4.png','https://i.ibb.co/LVwf29L/w5.png','https://i.ibb.co/tM7zmS9C/w6.png','https://i.ibb.co/wrc2kcf6/w7.png','https://i.ibb.co/ZRQp7f50/w8.png']
};
const rIdx = { double: 0, suite: 0, deluxe: 0, triple: 0, vip: 0 };

function buildGallery(name) {
  const imgs   = rmImgs[name];
  const stage  = document.getElementById('stage-' + name);
  const strip  = document.getElementById('strip-' + name);
  const dotsEl = document.getElementById('dots-' + name);
  if (!stage || !strip || !dotsEl) return;

  imgs.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src; img.alt = ''; img.loading = 'lazy';
    if (i === 0) img.className = 'active';
    stage.appendChild(img);
  });

  imgs.forEach((src, i) => {
    const th  = document.createElement('div');
    th.className = 'rgal-thumb' + (i === 0 ? ' active' : '');
    th.addEventListener('click', () => rmGo(name, i));
    const img = document.createElement('img');
    img.src = src; img.loading = 'lazy';
    th.appendChild(img);
    strip.appendChild(th);
  });

  imgs.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'rgal-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', e => { e.stopPropagation(); rmGo(name, i); });
    dotsEl.appendChild(d);
  });

  /* Touch swipe */
  let tx = 0;
  stage.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) rmNav(name, dx < 0 ? 1 : -1);
  }, { passive: true });
}

['double', 'suite', 'deluxe', 'triple', 'vip'].forEach(n => buildGallery(n));

function rmGo(name, idx) {
  rIdx[name] = idx;
  const stage = document.getElementById('stage-' + name);
  if (!stage) return;
  stage.querySelectorAll('img').forEach((im, i) => im.classList.toggle('active', i === idx));
  const cnt = document.getElementById('cnt-' + name);
  if (cnt) cnt.textContent = idx + 1;
  const strip = document.getElementById('strip-' + name);
  if (strip) {
    strip.querySelectorAll('.rgal-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
    const active = strip.querySelectorAll('.rgal-thumb')[idx];
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
  const dotsEl = document.getElementById('dots-' + name);
  if (dotsEl) dotsEl.querySelectorAll('.rgal-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

function rmNav(name, dir) {
  const imgs = rmImgs[name];
  rIdx[name] = (rIdx[name] + dir + imgs.length) % imgs.length;
  rmGo(name, rIdx[name]);
}

function switchRoom(id, btn) {
  document.querySelectorAll('.room-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.rtab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

/* ════ GALLERY TABS ════ */
function switchGal(id, btn) {
  document.querySelectorAll('.gal-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.gtab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

/* ════ LIGHTBOX ════ */
let lbImgs = [], lbIdx = 0;

const lobbyImgs = ['https://i.ibb.co/1tLz7G3K/w1.png','https://i.ibb.co/RMGzWsL/lobby1.png','https://i.ibb.co/67yXg9KJ/lobby2.png','https://i.ibb.co/hRp1BSp9/lobby3.png'];
const cafeImgs  = ['https://i.ibb.co/dshTCT4Y/c1.png','https://i.ibb.co/nNdtCDNP/c2.png','https://i.ibb.co/Tx13Z3xh/c3.png','https://i.ibb.co/LzjK7Kmd/c4.png'];
const groomImgs = ['https://i.ibb.co/TMZzNbFD/rr1.png','https://i.ibb.co/5z0b2s9/v1.png','https://i.ibb.co/nMLxkbzY/r1.png','https://i.ibb.co/0jfCXtzC/e1.png','https://i.ibb.co/bgDQyzYg/w2.png','https://i.ibb.co/DD2R2dM2/v2.png'];

const galSets = {
  lobby: lobbyImgs, cafe: cafeImgs, grooms: groomImgs,
  double: rmImgs.double, suite: rmImgs.suite, deluxe: rmImgs.deluxe,
  triple: rmImgs.triple, vip: rmImgs.vip
};

function openLb(imgsOrSet, idx) {
  lbImgs = Array.isArray(imgsOrSet) ? imgsOrSet : (galSets[imgsOrSet] || []);
  lbIdx  = idx || 0;
  document.getElementById('lbImg').src = lbImgs[lbIdx];
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function lbNav(dir) {
  lbIdx = (lbIdx + dir + lbImgs.length) % lbImgs.length;
  document.getElementById('lbImg').src = lbImgs[lbIdx];
}

function closeLb() {
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow = '';
}

const lbEl = document.getElementById('lb');
lbEl.addEventListener('click', e => { if (e.target === lbEl) closeLb(); });

/* Lightbox touch swipe */
let lbTx = 0;
lbEl.addEventListener('touchstart', e => { lbTx = e.touches[0].clientX; }, { passive: true });
lbEl.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - lbTx;
  if (Math.abs(dx) > 40) lbNav(dx < 0 ? 1 : -1);
}, { passive: true });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape')      closeLb();
  if (e.key === 'ArrowRight')  lbNav(1);
  if (e.key === 'ArrowLeft')   lbNav(-1);
});

/* ════ TESTIMONIALS CAROUSEL ════ */
function buildTestimonials(l) {
  const slider = document.getElementById('tqSlider');
  const dotsEl = document.getElementById('tqDots');
  const list   = testimonials[l];
  slider.innerHTML = '';
  dotsEl.innerHTML = '';

  list.forEach((t, i) => {
    const slide = document.createElement('div');
    slide.className = 'tq-slide' + (i === tqIdx ? ' active' : '');
    slide.innerHTML = `<div class="tq-stars">${'★'.repeat(t.stars)}</div><p class="tq">${t.q}</p><p class="ta">${t.a}</p>`;
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'tq-dot' + (i === tqIdx ? ' active' : '');
    dot.addEventListener('click', () => goTq(i));
    dotsEl.appendChild(dot);
  });
}

function goTq(i) {
  const slides = document.querySelectorAll('.tq-slide');
  const dots   = document.querySelectorAll('.tq-dot');
  if (!slides[tqIdx] || !slides[i]) return;
  slides[tqIdx].classList.remove('active');
  dots[tqIdx].classList.remove('active');
  tqIdx = i;
  slides[tqIdx].classList.add('active');
  dots[tqIdx].classList.add('active');
}

function startTqAuto() {
  clearInterval(tqTimer);
  tqTimer = setInterval(() => {
    goTq((tqIdx + 1) % testimonials[lang].length);
  }, 5000);
}

/* ════ SCROLL HANDLER (single listener for performance) ════ */
const progressBar = document.getElementById('progress-bar');
const backTop     = document.getElementById('back-top');
const waFloat     = document.getElementById('wa-float');

window.addEventListener('scroll', () => {
  const scrollY  = window.scrollY;
  const doc      = document.documentElement;
  const scrollPx = doc.scrollTop;
  const totalPx  = doc.scrollHeight - doc.clientHeight;

  /* Navbar */
  nav.classList.toggle('scrolled', scrollY > 55);

  /* Progress bar */
  progressBar.style.width = (totalPx > 0 ? (scrollPx / totalPx) * 100 : 0) + '%';

  /* Floating buttons */
  const show = scrollY > 400;
  backTop.classList.toggle('show', show);
  waFloat.classList.toggle('show', show);
}, { passive: true });

/* ════ SCROLL REVEAL ════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ════ INIT ════ */
buildTestimonials('en');
startTqAuto();
