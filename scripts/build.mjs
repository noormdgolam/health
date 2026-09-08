#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';

const SITE_URL = 'https://health.bongshai.com';
const TODAY = '2026-09-08';

function getHash(filePath) {
  return createHash('sha1').update(readFileSync(filePath)).digest('hex').slice(0, 8);
}

const styleHash = getHash('style.css');
const appHash = getHash('app.js');

console.log(`[build] Assets hashed: style.css?v=${styleHash} | app.js?v=${appHash}`);

const layoutTemplate = readFileSync('src/layout.html', 'utf8');
const headTemplate = readFileSync('src/partials/head.html', 'utf8');
const headerPartial = readFileSync('src/partials/header.html', 'utf8');
const footerPartial = readFileSync('src/partials/footer.html', 'utf8');

const legacyRedirectScript = `  <!-- Legacy hash deep-link redirector -->
  <script>
    (function () {
      var hash = window.location.hash;
      if (!hash || hash.length <= 1) return;
      var id = hash.slice(1);
      var map = {
        'lab-decoder': '/lab-decoder/',
        'tofi-calculator': '/lab-decoder/',
        'biomarkers': '/lab-decoder/',
        'cooking-oil-section': '/cooking-oils/',
        'egg-nutrition-section': '/eggs/',
        'disease-reversal': '/disease-reversal/',
        'tab-diabetes': '/disease-reversal/#tab-diabetes',
        'tab-hypertension': '/disease-reversal/#tab-hypertension',
        'tab-fattyliver': '/disease-reversal/#tab-fattyliver',
        'tab-stress': '/disease-reversal/#tab-stress',
        'tab-content-diabetes': '/disease-reversal/#tab-diabetes',
        'tab-content-hypertension': '/disease-reversal/#tab-hypertension',
        'tab-content-fattyliver': '/disease-reversal/#tab-fattyliver',
        'tab-content-stress': '/disease-reversal/#tab-stress',
        'heart-mind-section': '/breathing/#heart-mind-section',
        'vagus-pacer': '/breathing/#vagus-pacer',
        'mythbusters-section': '/mythbusters/',
        'myth-header-1': '/mythbusters/#myth-header-1',
        'myth-header-2': '/mythbusters/#myth-header-2',
        'myth-header-3': '/mythbusters/#myth-header-3',
        'myth-header-4': '/mythbusters/#myth-header-4',
        'myth-header-5': '/mythbusters/#myth-header-5',
        'fasting-tracker': '/fasting/',
        'plate-builder': '/plate-builder/',
        'habit-tracker': '/habit-tracker/',
        'doctor-passport': '/doctor-passport/'
      };
      if (map[id]) {
        window.location.replace(map[id]);
      }
    })();
  </script>`;

// Shared FAQ items
const homeFaqItems = [
  {
    q: '৯৯ শতাংশ মানুষ স্বাস্থ্যঝুঁকিতে থাকার কারণ কী',
    a: 'চিকিৎসাবিজ্ঞান ও মেটাবলিক বিশ্লেষণ অনুযায়ী, প্রক্রিয়াজাত অস্বাস্থ্যকর খাবার, রিফাইন্ড তেল, শারীরিক নিষ্ক্রিয়তা, দেরিতে ঘুমানো এবং অবিরত মানসিক চাপের কারণে মানুষের রোগ প্রতিরোধ ক্ষমতা ও কোষের স্ব-নিরাময় ক্ষমতা নষ্ট হয়ে যায়।'
  },
  {
    q: 'ওষুধ ছাড়া কি দীর্ঘস্থায়ী রোগ নিরাময় সম্ভব',
    a: 'হ্যাঁ, লাইফস্টাইল মেডিসিনের মূল ভিত্তি হলো রোগের মূল কারণ দূর করা। খাদ্যাভ্যাস থেকে বিষাক্ত উপাদান বর্জন, ১৪-১৬ ঘণ্টার অটোফেজি এবং নিয়মিত হাঁটার মাধ্যমে হাজার হাজার মানুষ প্রেশার ও সুগারের ওষুধ থেকে মুক্ত হয়েছেন।'
  },
  {
    q: 'ইন্টারমিটেন্ট ফাস্টিংয়ের সময় কী খাওয়া যাবে',
    a: 'উপবাস বা পরিপাক বিরতির সময়ে পর্যাপ্ত সাধারণ পানি, হালকা লেবু-পানি বা চিনি ছাড়া গ্রিন টি পান করা যাবে। তবে কোনো ক্যালরিবহুল খাবার বা পানীয় গ্রহণ করা যাবে না।'
  }
];

const mythFaqItems = [
  {
    q: 'ডিমের কুসুম খেলে রক্তনালী ব্লক হয়ে হার্ট অ্যাটাক হয়',
    a: 'সম্পূর্ণ ভিত্তিহীন। গবেষণায় প্রমাণিত হয়েছে ডিমের কুসুমে থাকা স্বাস্থ্যকর ফ্যাট রক্তে ভালো কোলেস্টেরল (HDL) বাড়ায়। রক্তনালীর আসল ক্ষতি করে পরিশোধিত চিনি, ময়দা ও সয়াবিন তেল দ্বারা সৃষ্ট প্রদাহ।'
  },
  {
    q: 'ভেজিটেবল অয়েল (সয়াবিন/পাম তেল) উদ্ভিজ্জ ও হার্টের জন্য উপকারী',
    a: 'মার্কেটিং প্রোপাগান্ডা। সয়াবিন ও পাম তেল কোনো তাজা উদ্ভিজ্জ রস নয়; এগুলোকে রাসায়নিক দ্রাবক ও অত্যন্ত উচ্চতাপে পরিশোধন করা হয়, যার ফলে বিষাক্ত ওমেগা-৬ ফ্রি রেডিক্যাল তৈরি হয় যা ধমনীতে প্রদাহ বাড়ায়। খাঁটি সরিষা বা নারকেল তেলই প্রকৃত স্বাস্থ্যকর।'
  },
  {
    q: 'ফ্যাট বা চর্বিজাতীয় খাবার খেলেই মানুষ মোটা হয়',
    a: 'ভুল ধারণা। চর্বি ইনসুলিন হরমোন বৃদ্ধি করে না। স্থূলতার আসল চাবিকাঠি হলো উচ্চ শর্করা ও চিনিযুক্ত খাবার, যা ইনসুলিন স্পাইক করিয়ে অতিরিক্ত ক্যালরি চর্বি হিসেবে কোষে লক করে রাখে। প্রাকৃতিক ভালো ফ্যাট খেলে ক্ষুধা কমে ও মেটাবলিজম চাঙ্গা হয়।'
  },
  {
    q: 'উচ্চ রক্তচাপ বা ডায়াবেটিসের ওষুধ একবার শুরু করলে কি সারা জীবন খেতে হবে',
    a: 'লাইফস্টাইল চিকিৎসায় এটি ভুল প্রমাণিত। ওষুধ কেবল উপসর্গ কৃত্রিমভাবে দমিয়ে রাখে। খাদ্যাভ্যাস থেকে চিনি ও প্রক্রিয়াজাত খাবার বাদ দিয়ে, ১৪-১৬ ঘণ্টার অটোফেজি ফাস্টিং ও দৈনিক ৪৫ মিনিট হাঁটলে হাজারো মানুষ সম্পূর্ণ প্রাকৃতিকভাবে রক্তচাপ ও সুগার নিয়ন্ত্রণে আনতে সক্ষম হয়েছেন।'
  },
  {
    q: 'সকালের নাস্তা বাদ দিলে কি গ্যাস্ট্রিক ও মেটাবলিজম নষ্ট হয়',
    a: 'সকাল ৯টা-১০টা পর্যন্ত নাস্তা বিলম্বিত করা প্রকৃতপক্ষে ইন্টারমিটেন্ট ফাস্টিং বা অটোফেজি তৈরি করে। এতে পরিপাকতন্ত্র পূর্ণ বিশ্রাম পায়, ইনসুলিন লেভেল সর্বনিম্ন থাকে এবং শরীর সঞ্চিত চর্বি বার্ন করে মেটাবলিক নমনীয়তা অর্জন করে। গ্যাস্ট্রিক দূর করতে প্রয়োজন প্রক্রিয়াজাত খাবার বন্ধ করা।'
  }
];

const howToSteps = [
  {
    pos: 1,
    name: '১. ১৪–১৬ ঘণ্টার ইন্টারমিটেন্ট ফাস্টিং সম্পন্ন',
    text: 'রাত ৮টার মধ্যে রাতের খাবার শেষ করে সকাল ১০টা পর্যন্ত পরিপাক বিরতি।',
    url: `${SITE_URL}/habit-tracker/`
  },
  {
    pos: 2,
    name: '২. ৪৫ মিনিট রোদে দ্রুত হাঁটা ও শারীরিক ঘাম ঝরানো',
    text: 'সকালের প্রাকৃতিক রোদে দ্রুত হাঁটা ও ইনসুলিন সংবেদনশীলতা বৃদ্ধি।',
    url: `${SITE_URL}/habit-tracker/`
  },
  {
    pos: 3,
    name: '৩. চিনি, মিষ্টি ও সয়াবিন/পাম তেল সম্পূর্ণ বর্জন',
    text: 'শুধুমাত্র সবুজ শাকসবজি, খাঁটি সরিষার তেল ও পুষ্টিকর প্রাকৃতিক খাবার গ্রহণ।',
    url: `${SITE_URL}/habit-tracker/`
  },
  {
    pos: 4,
    name: '৪. ২.৫ থেকে ৩ লিটার বিশুদ্ধ পানি ও লেবুপানি',
    text: 'পর্যাপ্ত সেলুলার হাইড্রেশন ও লিভার-কিডনির বিষাক্ত বর্জ্য নিষ্কাশন।',
    url: `${SITE_URL}/habit-tracker/`
  },
  {
    pos: 5,
    name: '৫. ১০–১৫ মিনিট শ্বাসক্রিয়া বা ধ্যান (মেডিটেশন)',
    text: 'ভ্যাগাস নার্ভ সক্রিয়করণ, মানসিক চাপ ও কর্টিসোল হরমোন হ্রাস।',
    url: `${SITE_URL}/habit-tracker/`
  },
  {
    pos: 6,
    name: '৬. রাত ১১:০০ টার পূর্বেই শান্ত পরিবেশে বিছানায় ঘুমানো',
    text: 'সার্কাডিয়ান ছন্দে মেলাটোনিন বৃদ্ধি ও ৭-৮ ঘণ্টার গভীর আরামদায়ক ঘুম।',
    url: `${SITE_URL}/habit-tracker/`
  }
];

// Page Map
const pages = [
  {
    slug: '',
    srcFile: 'src/pages/index.html',
    destFile: 'index.html',
    priority: '1.0',
    titleBn: 'সুস্থ থাকার বৈজ্ঞানিক লাইফস্টাইল ও স্বাস্থ্যঝুঁকি মূল্যায়ন | Preventive Lifestyle Medicine',
    descBn: 'প্রিভেন্টিভ লাইফস্টাইল মেডিসিন ও মেটাবলিক স্বাস্থ্যবিজ্ঞানের আলোকে আপনার স্বাস্থ্যঝুঁকি নির্ণয় করুন এবং ডায়াবেটিস, প্রেশার ও হৃদরোগ প্রতিরোধে সঠিক জীবনযাত্রা গ্রহণ করুন।',
    titleEn: 'Preventive Lifestyle Medicine & Metabolic Health Risk Assessment | MetaPrevent',
    descEn: 'Assess your metabolic health risk with evidence-informed preventive cardiology and lifestyle medicine tools — interactive risk score, autophagy fasting tracker, and clinical lab decoder.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` }
    ],
    conditions: ['Type 2 Diabetes Mellitus', 'Hypertension', 'Non-alcoholic fatty liver disease', 'Insulin resistance'],
    faq: homeFaqItems,
    isHome: true
  },
  {
    slug: 'lab-decoder',
    srcFile: 'src/pages/lab-decoder.html',
    destFile: 'lab-decoder/index.html',
    priority: '0.8',
    titleBn: 'ল্যাব বায়োমার্কার ডিকোডার ও ভিসেরাল ফ্যাট ক্যালকুলেটর | MetaPrevent',
    descBn: 'HbA1c, ফাস্টিং ইনসুলিন, ট্রাইগ্লিসারাইড-এইচডিএল অনুপাত এবং কোমর-উচ্চতা অনুপাত (WHtR) দিয়ে আপনার লুকানো মেটাবলিক ডিসফাংশন ও ভিসেরাল ফ্যাট (TOFI) নির্ণয় করুন।',
    titleEn: 'Clinical Lab Biomarker Decoder & TOFI Visceral Fat Calculator | MetaPrevent',
    descEn: 'Decode fasting insulin, HbA1c, TG/HDL ratio, and Waist-to-Height ratio (WHtR) to detect hidden metabolic syndrome and visceral fat (TOFI).',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'ডায়াগনস্টিকস ও ল্যাব', url: `${SITE_URL}/#diagnostics` },
      { name: 'ল্যাব বায়োমার্কার ডিকোডার', url: `${SITE_URL}/lab-decoder/` }
    ],
    conditions: ['Insulin resistance', 'Dyslipidemia', 'Visceral adiposity', 'Non-alcoholic fatty liver disease']
  },
  {
    slug: 'cooking-oils',
    srcFile: 'src/pages/cooking-oils.html',
    destFile: 'cooking-oils/index.html',
    priority: '0.8',
    titleBn: 'ভোজ্যতেল তুলনামূলক স্বাস্থ্য ম্যাট্রিক্স ও স্মোক পয়েন্ট গাইড | MetaPrevent',
    descBn: 'সরিষা, নারকেল, ঘি, অলিভ অয়েল বনাম ক্ষতিকর সয়াবিন ও পাম তেল — বৈজ্ঞানিক স্মোক পয়েন্ট, ফ্যাটি অ্যাসিড প্রোফাইল ও রক্তনালীর প্রদাহ বিশ্লেষণ।',
    titleEn: 'Cooking Oil Health Matrix & Smoke Point Guide | MetaPrevent',
    descEn: 'Evidence-based cooking oil comparison: Mustard, Coconut, Ghee, Olive oil vs industrial seed oils (Soybean, Palm) — smoke points and oxidative stability.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'ডায়াগনস্টিকস ও ল্যাব', url: `${SITE_URL}/#diagnostics` },
      { name: 'ভোজ্যতেল তুলনামূলক ম্যাট্রিক্স', url: `${SITE_URL}/cooking-oils/` }
    ],
    conditions: ['Vascular Inflammation', 'Atherosclerosis', 'Metabolic Syndrome']
  },
  {
    slug: 'eggs',
    srcFile: 'src/pages/eggs.html',
    destFile: 'eggs/index.html',
    priority: '0.8',
    titleBn: 'ডিম ও কোলেস্টেরল বিজ্ঞান ও পুষ্টি ক্যালকুলেটর | MetaPrevent',
    descBn: 'ডিমের কুসুম ও কোলেস্টেরল নিয়ে চিকিৎসা গবেষণার সত্যতা — কোলিন, লুটিন, ভালো চর্বি ও দৈনিক ডিম পুষ্টি গ্রহণের বিজ্ঞানভিত্তিক ক্যালকুলেটর।',
    titleEn: 'Whole Egg Nutrition Science & Cholesterol Guide | MetaPrevent',
    descEn: 'Cardiovascular science of dietary cholesterol in whole eggs: Choline, lutein, HDL benefits, and daily egg nutrition calculator.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'ডায়াগনস্টিকস ও ল্যাব', url: `${SITE_URL}/#diagnostics` },
      { name: 'ডিম ও কোলেস্টেরল বিজ্ঞান', url: `${SITE_URL}/eggs/` }
    ],
    conditions: ['Hypercholesterolemia', 'Dietary Deficiency', 'Cardiovascular Disease']
  },
  {
    slug: 'disease-reversal',
    srcFile: 'src/pages/disease-reversal.html',
    destFile: 'disease-reversal/index.html',
    priority: '0.8',
    titleBn: 'দীর্ঘস্থায়ী রোগ নিরাময় প্রোটোকল ও জ্ঞানভাণ্ডার | MetaPrevent',
    descBn: 'টাইপ-২ ডায়াবেটিস, উচ্চ রক্তচাপ, নন-অ্যালকোহলিক ফ্যাটি লিভার ও দীর্ঘস্থায়ী মানসিক চাপ নিরাময়ে চার স্তম্ভের লাইফস্টাইল মেডিসিন গাইড।',
    titleEn: 'Chronic Disease Reversal Protocols | MetaPrevent',
    descEn: 'Clinical protocols for reversing Type 2 Diabetes, Hypertension, Non-alcoholic Fatty Liver Disease (NAFLD), and chronic distress via lifestyle medicine.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'ক্লিনিক্যাল প্রোটোকল', url: `${SITE_URL}/#protocols` },
      { name: 'রোগ নিরাময় জ্ঞানভাণ্ডার', url: `${SITE_URL}/disease-reversal/` }
    ],
    conditions: ['Type 2 Diabetes Mellitus', 'Essential Hypertension', 'Non-alcoholic fatty liver disease', 'Chronic Stress']
  },
  {
    slug: 'breathing',
    srcFile: 'src/pages/breathing.html',
    destFile: 'breathing/index.html',
    priority: '0.8',
    titleBn: 'ভ্যাগাস নার্ভ ব্রিদিং পেসার ও হার্ট-মাইন্ড সাইকোলজি | MetaPrevent',
    descBn: 'কার্ডিয়াক কোহেরেন্স, ৪-৭-৮ ও বক্স ব্রিদিং পেসার — ভ্যাগাস নার্ভ উদ্দীপনা, হার্ট রেট ভ্যারিয়েবিলিটি (HRV) বৃদ্ধি ও কর্টিসোল প্রশমন টুল।',
    titleEn: 'Vagus Nerve Breathing Pacer & Heart-Mind Psychology | MetaPrevent',
    descEn: 'Interactive cardiac coherence, 4-7-8, and box breathing pacer to stimulate the vagus nerve, boost HRV, and reduce sympathetic stress.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'ক্লিনিক্যাল প্রোটোকল', url: `${SITE_URL}/#protocols` },
      { name: 'ভ্যাগাস ও হার্ট-মাইন্ড ব্রিদিং', url: `${SITE_URL}/breathing/` }
    ],
    conditions: ['Autonomic Nervous System Dysfunction', 'Chronic Distress', 'Hypertension']
  },
  {
    slug: 'mythbusters',
    srcFile: 'src/pages/mythbusters.html',
    destFile: 'mythbusters/index.html',
    priority: '0.8',
    titleBn: 'মেডিকেল মিথ বাস্টার্স — খাদ্য ও কোলেস্টেরল বিভ্রান্তি | MetaPrevent',
    descBn: 'ডিমের কুসুম, ভেজিটেবল অয়েল, ফ্যাট বনাম স্থূলতা এবং দীর্ঘমেয়াদী ওষুধের প্রচলিত ৫টি মারাত্মক চিকিৎসা ভ্রান্তি নিরসন।',
    titleEn: 'Medical Mythbusters — Dietary & Cholesterol Evidence | MetaPrevent',
    descEn: 'Debunking 5 common metabolic myths regarding egg yolks, industrial vegetable oils, low-fat diets, chronic medication dependence, and breakfast timing.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'ক্লিনিক্যাল প্রোটোকল', url: `${SITE_URL}/#protocols` },
      { name: 'মেডিকেল মিথ বাস্টার্স', url: `${SITE_URL}/mythbusters/` }
    ],
    conditions: ['Metabolic Syndrome', 'Cardiovascular Disease', 'Nutritional Misinformation'],
    faq: mythFaqItems
  },
  {
    slug: 'fasting',
    srcFile: 'src/pages/fasting.html',
    destFile: 'fasting/index.html',
    priority: '0.8',
    titleBn: 'ইন্টারমিটেন্ট ফাস্টিং ও অটোফেজি টাইমার | MetaPrevent',
    descBn: '১৪–১৬ ঘণ্টার লাইভ উপবাস মনিটর — ব্লাড সুগার ড্রপ, গ্লাইকোজেন ক্ষয়, কিটোসিস সূচনা ও সেলুলার অটোফেজি স্টেজ ট্র্যাকার।',
    titleEn: 'Intermittent Fasting & Autophagy Tracker | MetaPrevent',
    descEn: 'Real-time intermittent fasting tracker monitoring cellular metabolic transitions: glycogen depletion, ketosis onset, and cellular autophagy stages.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'দৈনিক টুলস', url: `${SITE_URL}/#tools` },
      { name: 'ইন্টারমিটেন্ট ফাস্টিং টাইমার', url: `${SITE_URL}/fasting/` }
    ],
    conditions: ['Insulin resistance', 'Cellular Senescence', 'Obesity']
  },
  {
    slug: 'plate-builder',
    srcFile: 'src/pages/plate-builder.html',
    destFile: 'plate-builder/index.html',
    priority: '0.8',
    titleBn: 'দেশি পুষ্টি প্লেট বিল্ডার ও ৭ দিনের মিল প্ল্যান | MetaPrevent',
    descBn: '৫০% সবুজ শাকসবজি, ২৫% প্রোটিন ও ২৫% জটিল কার্বোহাইড্রেটের দেশি পুষ্টি প্লেট বিল্ডার ও সাশ্রয়ী স্থানীয় সাপ্তাহিক ডায়েট চার্ট।',
    titleEn: 'Desi Nutrition Plate Builder & 7-Day Meal Plan | MetaPrevent',
    descEn: 'Interactive metabolic plate designer: 50% vegetables, 25% healthy protein, 25% complex carbs with localized 7-day budget-friendly meal plans.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'দৈনিক টুলস', url: `${SITE_URL}/#tools` },
      { name: 'দেশি পুষ্টি প্লেট বিল্ডার', url: `${SITE_URL}/plate-builder/` }
    ],
    conditions: ['Dietary Inbalance', 'Type 2 Diabetes Mellitus', 'Metabolic Syndrome']
  },
  {
    slug: 'habit-tracker',
    srcFile: 'src/pages/habit-tracker.html',
    destFile: 'habit-tracker/index.html',
    priority: '0.8',
    titleBn: '৬ স্তম্ভের মেটাবলিক অভ্যাস ও স্ট্রিক ট্র্যাকার | MetaPrevent',
    descBn: 'ফাস্টিং, হাঁটা, পুষ্টিকর খাবার, হাইড্রেশন, শ্বাসের ব্যায়াম ও গভীর ঘুম — ৬টি মেটাবলিক নিয়মের দৈনিক প্রোগ্রেস ও ৭ দিনের স্ট্রিক মনিটর।',
    titleEn: '6-Pillar Metabolic Habit & Streak Tracker | MetaPrevent',
    descEn: 'Daily checklist tracking 6 foundational metabolic pillars: fasting, exercise, clean nutrition, hydration, vagal breathing, and circadian sleep.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'দৈনিক টুলস', url: `${SITE_URL}/#tools` },
      { name: 'মেটাবলিক অভ্যাস ট্র্যাকার', url: `${SITE_URL}/habit-tracker/` }
    ],
    conditions: ['Lifestyle Risk Factors', 'Metabolic Syndrome'],
    hasHowTo: true
  },
  {
    slug: 'doctor-passport',
    srcFile: 'src/pages/doctor-passport.html',
    destFile: 'doctor-passport/index.html',
    priority: '0.8',
    titleBn: 'ডক্টর ডিসকাশন হেলথ পাসপোর্ট ও ক্লিনিক্যাল সামারি | MetaPrevent',
    descBn: 'আপনার মেটাবলিক স্কোর, ল্যাব সূচক, উপবাস সময় ও অভ্যাসের ক্লিনিক্যাল সামারি প্রিন্ট বা কপি করুন এবং চিকিৎসকের সাথে আলোচনার ৫টি মোক্ষম প্রশ্ন।',
    titleEn: 'Clinical Doctor Discussion Sheet & Health Passport | MetaPrevent',
    descEn: 'Physician consultation passport summarizing metabolic risk score, WHtR, TG/HDL ratio, and 5 evidence-based de-prescribing discussion questions.',
    breadcrumbs: [
      { name: 'হোম', url: `${SITE_URL}/` },
      { name: 'ক্লিনিক্যাল সামারি', url: `${SITE_URL}/#summary` },
      { name: 'ডক্টর পাসপোর্ট', url: `${SITE_URL}/doctor-passport/` }
    ],
    conditions: ['Doctor Consultation Planning', 'Chronic Disease Monitoring']
  }
];

function generateJsonLd(page) {
  const canonicalUrl = `${SITE_URL}/${page.slug ? `${page.slug}/` : ''}`;
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#org`,
      name: 'MetaPrevent — Preventive Lifestyle Medicine Platform',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon.svg`,
      sameAs: []
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'MetaPrevent',
      inLanguage: 'bn',
      publisher: {
        '@id': `${SITE_URL}/#org`
      }
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: page.titleBn,
      description: page.descBn,
      inLanguage: 'bn',
      isPartOf: {
        '@id': `${SITE_URL}/#website`
      },
      about: page.conditions ? page.conditions.map(c => ({ '@type': 'MedicalCondition', name: c })) : [],
      audience: {
        '@type': 'MedicalAudience',
        audienceType: 'Patient'
      },
      reviewedBy: {
        '@type': 'Organization',
        name: 'Preventive Cardiology & Lifestyle Medicine Research Initiative'
      },
      lastReviewed: TODAY,
      datePublished: '2026-09-06',
      dateModified: TODAY,
      author: {
        '@type': 'Organization',
        name: 'Preventive Cardiology & Lifestyle Medicine Research Initiative',
        url: `${SITE_URL}/`
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-cover.png`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: page.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url
      }))
    }
  ];

  if (page.faq && page.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      inLanguage: 'bn',
      mainEntity: page.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    });
  }

  if (page.hasHowTo) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#daily-protocol`,
      inLanguage: 'bn',
      name: '৬ স্তম্ভের দৈনিক মেটাবলিক সুস্থতা প্রোটোকল',
      description: 'হ্যাঁ, লাইফস্টাইল মেডিসিনের মূল ভিত্তি হলো রোগের মূল কারণ দূর করা। খাদ্যাভ্যাস থেকে বিষাক্ত উপাদান বর্জন, ১৪-১৬ ঘণ্টার অটোফেজি এবং নিয়মিত হাঁটার মাধ্যমে হাজার হাজার মানুষ প্রেশার ও সুগারের ওষুধ থেকে মুক্ত হয়েছেন।',
      totalTime: 'P1D',
      step: howToSteps.map(s => ({
        '@type': 'HowToStep',
        position: s.pos,
        name: s.name,
        text: s.text,
        url: s.url
      }))
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

// Generate pages
for (const page of pages) {
  const canonicalUrl = `${SITE_URL}/${page.slug ? `${page.slug}/` : ''}`;
  const pageMetaJson = JSON.stringify({
    bn: { title: page.titleBn, desc: page.descBn },
    en: { title: page.titleEn, desc: page.descEn }
  });

  const jsonLdStr = generateJsonLd(page);
  const mainContent = readFileSync(page.srcFile, 'utf8');

  let headHtml = headTemplate
    .replace('{{LEGACY_REDIRECT_SCRIPT}}', page.isHome ? legacyRedirectScript : '')
    .replace(/\{\{TITLE\}\}/g, page.titleBn)
    .replace(/\{\{DESCRIPTION\}\}/g, page.descBn)
    .replace(/\{\{CANONICAL_URL\}\}/g, canonicalUrl)
    .replace(/\{\{OG_TITLE\}\}/g, page.titleBn)
    .replace(/\{\{OG_DESCRIPTION\}\}/g, page.descBn)
    .replace(/\{\{STYLE_HASH\}\}/g, styleHash)
    .replace(/\{\{APP_HASH\}\}/g, appHash)
    .replace('{{PAGE_META_JSON}}', pageMetaJson)
    .replace('{{JSON_LD}}', jsonLdStr);

  let fullHtml = layoutTemplate
    .replace('{{HEAD}}', headHtml)
    .replace('{{HEADER}}', headerPartial)
    .replace('{{MAIN}}', mainContent)
    .replace('{{FOOTER}}', footerPartial);

  const outDir = dirname(page.destFile);
  if (outDir && outDir !== '.' && !existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  writeFileSync(page.destFile, fullHtml);
  console.log(`[build] Emitted ${page.destFile} (canonical: ${canonicalUrl})`);
}

// Generate sitemap.xml
const sitemapUrls = pages.map(p => {
  const url = `${SITE_URL}/${p.slug ? `${p.slug}/` : ''}`;
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
}).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;

writeFileSync('sitemap.xml', sitemapXml);
console.log(`[build] Emitted sitemap.xml with ${pages.length} URLs`);

console.log('[build] Build completed successfully!');
