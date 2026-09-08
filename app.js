/**
 * Preventive Lifestyle Medicine & Health Assessment Platform
 * Interactive Logic, Risk Diagnostic Engine, Multilingual i18n & WebMCP Bindings
 */

(function() {
  'use strict';

  // --- Translation Dictionary (Bangla & English) ---
  const translations = {
    bn: {
      skip_to_content: "মূল বিষয়বস্তুতে যান",
      topbar_accreditation: "আমেরিকান কলেজ অব লাইফস্টাইল মেডিসিন (ACLM) ও নোবেল বিজয়ী অটোফেজি গবেষণা সমর্থিত",
      topbar_update: "সর্বশেষ ক্লিনিক্যাল আপডেট: সেপ্টেম্বর ২০২৬ | এভিডেন্স স্কোর: ৯৯.৪%",
      brand_title: "মেটাপ্রিভেন্ট™",
      brand_badge_text: "CLINICAL",
      brand_subtext: "প্রিভেন্টিভ লাইফস্টাইল মেডিসিন প্ল্যাটফর্ম",
      nav_group_diagnostics: "ডায়াগনস্টিকস ও ল্যাব",
      nav_group_diagnostics_sub: "ক্লিনিক্যাল মূল্যায়ন ও বায়োমার্কার টুলস",
      nav_diag_risk: "মেটাবলিক ঝুঁকি মূল্যায়ন",
      nav_diag_risk_desc: "৬টি ক্লিনিক্যাল স্তম্ভের আলোকে ব্যক্তিগত স্কোর",
      nav_diag_lab: "ল্যাব বায়োমার্কার ডিকোডার",
      nav_diag_lab_desc: "HbA1c, ইনসুলিন, TG/HDL ও ভিসেরাল ফ্যাট (TOFI)",
      nav_diag_oil: "ভোজ্যতেল তুলনামূলক ম্যাট্রিক্স",
      nav_diag_oil_desc: "নিরাপদ প্রাকৃতিক ফ্যাট বনাম ক্ষতিকর ইন্ডাস্ট্রিয়াল তেল",
      nav_diag_egg: "ডিম ও কোলেস্টেরল বিজ্ঞান",
      nav_diag_egg_desc: "কুসুমের পূর্ণাঙ্গ পুষ্টি ও দৈনিক ক্যালকুলেটর",
      nav_group_protocols: "ক্লিনিক্যাল প্রোটোকল",
      nav_group_protocols_sub: "বিজ্ঞানভিত্তিক নিরাময় ও প্রতিরোধ নির্দেশিকা",
      nav_prot_rx: "ব্যক্তিগত লাইফস্টাইল প্রেসক্রিপশন",
      nav_prot_rx_desc: "সম্পূর্ণ দৈনিক রুটিন, ডায়েট ও স্লিপ গাইড",
      nav_prot_reversal: "রোগ নিরাময় জ্ঞানভাণ্ডার",
      nav_prot_reversal_desc: "ডায়াবেটিস, প্রেশার ও ফ্যাটি লিভার রিভার্সাল",
      nav_prot_vagus: "ভ্যাগাস নার্ভ ব্রিদিং পেসার",
      nav_prot_vagus_desc: "৪-৭-৮, বক্স ব্রিদিং ও কার্ডিয়াক কোহেরেন্স বাবল",
      nav_prot_heart_mind: "হার্ট-মাইন্ড সাইকোলজি",
      nav_prot_heart_mind_desc: "স্ট্রেস ডিটক্স ও নিউরো-ইমিউনোলজি ব্যালেন্স",
      nav_prot_myths: "মেডিকেল মিথ বাস্টার্স",
      nav_prot_myths_desc: "কোলেস্টেরল ও ক্যালোরি গণনা সংক্রান্ত বিভ্রান্তি নিরসন",
      nav_group_tools: "দৈনিক টুলস",
      nav_group_tools_sub: "দৈনিক মনিটরিং ও সুস্থতার অভ্যাস",
      nav_tool_fasting: "ইন্টারমিটেন্ট ফাস্টিং টাইমার",
      nav_tool_fasting_desc: "১৪-১৬ ঘণ্টার লাইভ অটোফেজি স্টেজ মনিটর",
      nav_tool_plate: "দেশি পুষ্টি প্লেট বিল্ডার",
      nav_tool_plate_desc: "৫০% শাকসবজি অনুপাত ও বাজেট ডায়েট প্ল্যান",
      nav_tool_habits: "মেটাবলিক অভ্যাস ট্র্যাকার",
      nav_tool_habits_desc: "৭টি মেটাবলিক রুটিনের ধারাবাহিকতা স্কোর",
      nav_passport_btn: "ডক্টর পাসপোর্ট",
      aeo_badge: "বিজ্ঞানসম্মত ক্লিনিক্যাল নির্যাস",
      aeo_time: "৩০ সেকেন্ড সংক্ষিপ্ত উত্তর",
      direct_answer_content: "আধুনিক ক্রনিক রোগসমূহ যেমন ডায়াবেটিস, উচ্চ রক্তচাপ ও হৃদরোগ মূলত ভুল খাদ্যাভ্যাস, রিফাইন্ড তেল, শারীরিক নিষ্ক্রিয়তা এবং দীর্ঘস্থায়ী মানসিক চাপের কারণে সৃষ্ট। প্রাকৃতিক পুষ্টিকর খাবার, দৈনিক ১৪–১৬ ঘণ্টা উপবাস (অটোফেজি), ৪৫ মিনিট হাঁটা ও মেডিটেশন এই মেটাবলিক ক্ষতি সম্পূর্ণ দূর করতে সক্ষম।",
      hero_title: "মেটাবলিক স্বাস্থ্যঝুঁকি ও রোগ নিরাময় লাইফস্টাইল প্রটোকল",
      doc_name: "লাইফস্টাইল মেডিসিন ও প্রিভেন্টিভ কার্ডিওলজি টিম",
      doc_role: "ক্লিনিক্যাল প্রিভেন্টিভ কেয়ার গবেষক",
      seminar_ref: "প্রটোকল সূত্র: মেটাবলিক কার্ডিওলজি ও অটোফেজি গবেষণা",
      last_updated_label: "সর্বশেষ হালনাগাদ:",
      tag_assessment: "ইন্টারেক্টিভ ডায়াগনস্টিক ইঞ্জিন",
      title_assessment: "৬টি স্তম্ভের আলোকে ব্যক্তিগত স্বাস্থ্যঝুঁকি নির্ণয়",
      desc_assessment: "মেটাবলিক স্বাস্থ্যবিজ্ঞানের আলোকে ৯৯% মানুষের সম্ভাব্য স্বাস্থ্যঝুঁকির কারণগুলো বিশ্লেষণ করে আপনার বর্তমান অভ্যাস যাচাই করুন।",
      q1_title: "চিনি, মিষ্টি ও প্রক্রিয়াজাত প্যাকেটজাত খাদ্য গ্রহণ",
      q1_opt1: "কখনোই বা কালেভদ্রে খাই",
      q1_desc1: "চিনি ও প্যাকেটজাত খাবার সম্পূর্ণ বর্জন",
      q1_opt2: "মাঝে মাঝে (সপ্তাহে ২-৩ দিন)",
      q1_desc2: "চায়ে চিনি, হালকা মিষ্টি বা কোমল পানীয়",
      q1_opt3: "প্রতিদিনই খাই (নিয়মিত)",
      q1_desc3: "মিষ্টি, বেকারি পণ্য, কোল্ড ড্রিঙ্কস বা ফাস্টফুড",
      q2_title: "রান্নায় ব্যবহৃত তেলের ধরণ",
      q2_opt1: "ঘানিভাঙ্গা সরিষা / এক্সট্রা ভার্জিন অলিভ / নারকেল তেল",
      q2_desc1: "অরিজিনাল ও কোল্ড-প্রেসড প্রাকৃতিক তেল",
      q2_opt2: "সরিষা ও সাধারণ সয়াবিনের মিশ্রণ",
      q2_desc2: "বাইরের খাবার ও ঘরের সাধারণ রান্না",
      q2_opt3: "রিফাইন্ড সয়াবিন / পাম অয়েল / ডালডা",
      q2_desc3: "হোটেল-রেস্তোরাঁর খাবার ও বাণিজ্যিকভাবে পরিশোধিত তেল",
      q3_title: "রাতের খাবারের সময় ও উপবাসের বিরতি (Autophagy Window)",
      q3_opt1: "১৪-১৬ ঘণ্টা পরিপাক বিরতি",
      q3_desc1: "রাত ৮টার মধ্যে রাতের খাবার সমাপ্তি",
      q3_opt2: "১০-১২ ঘণ্টা বিরতি",
      q3_desc2: "রাত ৯টা-১০টায় ডিনার এবং সকালে নাস্তা",
      q3_opt3: "৮ ঘণ্টার কম বিরতি ও লেট নাইট স্ন্যাকিং",
      q3_desc3: "মধ্যরাতে খাওয়া এবং সকালে দেরিতে নাস্তা",
      q4_title: "দৈনিক হাঁটা ও শারীরিক পরিশ্রমের পরিমাণ",
      q4_opt1: "দৈনিক ৪০-৬০ মিনিট দ্রুত হাঁটা / ব্যায়াম",
      q4_desc1: "প্রতিদিন ঘাম ঝরিয়ে সক্রিয় জীবনযাপন",
      q4_opt2: "মাঝে মাঝে ২০-৩০ মিনিট সাধারণ হাঁটা",
      q4_desc2: "সপ্তাহে ২-৩ দিন সক্রিয় থাকা",
      q4_opt3: "প্রায় কোনো শরীরচর্চা বা হাঁটা হয় না",
      q4_desc3: "সারাদিন বসে থাকা ডেস্কে কাজ বা নিষ্ক্রিয় জীবন",
      q5_title: "ঘুমের সময়সূচী ও গভীরতা",
      q5_opt1: "রাত ১০:৩০ এর মধ্যে ঘুম এবং ৭-৮ ঘণ্টা গভীর ঘুম",
      q5_desc1: "প্রাকৃতিক ছন্দে সতেজ ঘুম",
      q5_opt2: "রাত ১২টার পরে ঘুম কিন্তু ৬-৭ ঘণ্টা বিশ্রাম",
      q5_desc2: "দেরিতে ঘুমানো কিন্তু মোটামুটি ঘুম হয়",
      q5_opt3: "রাত ১টা-২টার পর ঘুম, অনিদ্রা ও অস্থিরতা",
      q5_desc3: "ঘুমের স্বল্পতা ও সকালে ক্লান্তিভাব",
      q6_title: "মানসিক চাপ, রাগ ও শারীরিক মেটাবলিক লক্ষণ",
      q6_opt1: "নিয়মিত মেডিটেশন/প্রার্থনা, শান্ত মন ও কোনো লক্ষণ নেই",
      q6_desc1: "ওজন স্বাভাবিক, রক্তচাপ ও সুগার নিয়ন্ত্রণে",
      q6_opt2: "কাজের চাপ বা মেজাজ খিটখিটে, সামান্য পেটে চর্বি",
      q6_desc2: "বর্ডারলাইন প্রেশার বা হালকা অবসাদ",
      q6_opt3: "তীব্র স্ট্রেস, অনিয়ন্ত্রিত রাগ, ডায়াবেটিস/উচ্চ রক্তচাপ বিদ্যমান",
      q6_desc3: "ফ্যাটি লিভার, পেটে অতিরিক্ত চর্বি বা নিয়মিত ওষুধ খাচ্ছেন",
      btn_calc_risk: "আমার স্বাস্থ্যঝুঁকি বিশ্লেষণ করুন",
      btn_reset: "পুনরায় শুরু",
      badge_awaiting: "ফলাফলের অপেক্ষায়",
      title_resilience: "মেটাবলিক সক্ষমতা স্কোর",
      tier_prompt: "প্রশ্নগুলোর উত্তর প্রদান করে আপনার স্কোর জেনে নিন",
      label_risk_tier: "ঝুঁকির স্তর:",
      label_cellular_health: "অটোফেজি ও কোষের সুরক্ষা:",
      label_heart_vessel: "হৃদযন্ত্র ও রক্তনালী প্রদাহ:",
      presc_prompt: "মূল্যায়ন সম্পন্ন হলে নিচে আপনার জন্য সুনির্দিষ্ট বৈজ্ঞানিক লাইফস্টাইল প্রেসক্রিপশন তৈরি হবে।",
      btn_view_presc: "সম্পূর্ণ প্রেসক্রিপশন দেখুন ↓",
      tag_prescription: "ক্লিনিক্যাল লাইফস্টাইল সমাধান",
      title_prescription: "ব্যক্তিগত সমন্বিত সুস্থতার লাইফস্টাইল প্রেসক্রিপশন",
      desc_prescription: "আপনার অভ্যাসের মূল্যায়নের ওপর ভিত্তি করে তৈরি সুনির্দিষ্ট দৈনিক রুটিন ও পুষ্টি নির্দেশিকা।",
      rx_title: "লাইফস্টাইল রিভার্সাল প্রটোকল",
      rx_subtitle: "ওষুধ নির্ভরতা কমিয়ে প্রাকৃতিক জীবনযাত্রায় রোগ নিরাময়",
      btn_print_pdf: "প্রেসক্রিপশন প্রিন্ট / সংরক্ষণ",
      rx_diet_title: "১. খাদ্যাভ্যাস ও পুষ্টির পরিবর্তন",
      rx_diet_1: "<strong>সাদা বিষ বর্জন:</strong> চিনি, ময়দা, সাদা চাল এবং মিষ্টি কোমল পানীয় অবিলম্বে বন্ধ করুন।",
      rx_diet_2: "<strong>নিরাপদ তেল ব্যবহার:</strong> রান্নায় শুধুমাত্র ঘানিভাঙ্গা খাঁটি সরিষার তেল, নারকেল তেল বা এক্সট্রা ভার্জিন অলিভ অয়েল গ্রহণ করুন।",
      rx_diet_3: "<strong>প্রচুর কাঁচা সালাদ ও শাকসবজি:</strong> প্রতিবেলার খাবারের অন্তত ৫০% রাখুন রঙিন মৌসুমি কাঁচা সালাদ ও শাকসবজি।",
      rx_fasting_title: "২. ইন্টারমিটেন্ট ফাস্টিং ও পরিপাক বিরতি",
      rx_fasting_1: "<strong>সূর্যাস্তের পর দ্রুত ডিনার:</strong> রাত ৭:৩০ থেকে ৮:০০ টার মধ্যে রাতের খাবার শেষ করে দাঁত ব্রাশ করুন।",
      rx_fasting_2: "<strong>১৪-১৬ ঘণ্টার অটোফেজি উইন্ডো:</strong> রাতে খাওয়ার পর পরবর্তী খাবার সকাল ৯টা বা ১০টায় গ্রহণ করুন। মাঝে শুধু পানি বা গ্রিন টি।",
      rx_fasting_3: "<strong>মধ্যরাতের স্ন্যাকিং নিষিদ্ধ:</strong> ঘুমের সময় পেটে খাবার থাকলে শরীর নিরাময় ও চর্বি পোড়াতে পারে না।",
      rx_movement_title: "৩. গতিময় জীবন ও সক্রিয় হাঁটা",
      rx_movement_1: "<strong>দৈনিক ৪৫ মিনিট দ্রুত হাঁটা:</strong> সকালের মৃদু রোদে অথবা বিকেলে একটানা ঘাম ঝরিয়ে দ্রুত হাঁটুন।",
      rx_movement_2: "<strong>বসে থাকার সময় কমানো:</strong> প্রতি ৪৫ মিনিট পর পর অন্তত ৩-৫ মিনিট দাঁড়িয়ে হাত-পা নাড়াচাড়া করুন।",
      rx_movement_3: "<strong>হালকা ফ্রি-হ্যান্ড এক্সারসাইজ:</strong> পেশি সক্রিয় রাখতে নিয়মিত স্কোয়াট, স্ট্রেচিং ও ডিপ ব্রিদিং করুন।",
      rx_mind_title: "৪. ঘুম ও মানসিক প্রশান্তি (স্ট্রেস ডিটক্স)",
      rx_mind_1: "<strong>রাত ১০:৩০ এর মধ্যে বিছানায় যাওয়া:</strong> ঘুমের অন্তত ১ ঘণ্টা পূর্বে মোবাইল, ল্যাপটপ বা ব্লু-লাইট স্ক্রিন বন্ধ রাখুন।",
      rx_mind_2: "<strong>দৈনিক ২০ মিনিট মেডিটেশন:</strong> সকালে বা সন্ধ্যায় নিরিবিলিতে কোয়ান্টাম মেডিটেশন বা প্রার্থনায় শান্ত থাকুন।",
      rx_mind_3: "<strong>শোকরিয়া ও ইতিবাচক দৃষ্টিভঙ্গি:</strong> অপ্রয়োজনীয় ক্ষোভ ও দুশ্চিন্তা রক্তনালীতে প্রদাহ তৈরি করে; সবসময় কৃতজ্ঞতা প্রকাশ করুন।",
      schedule_title: "বিজ্ঞানসম্মত আদর্শ দৈনিক জীবনপদ্ধতি ও রুটিন",
      th_time: "সময়কাল",
      th_activity: "করণীয় কার্যক্রম",
      th_benefit: "মেটাবলিক ও বৈজ্ঞানিক উপকারিতা",
      r1_act: "ঘুম থেকে ওঠা, কুসুম গরম পানি পান ও ৪৫ মিনিট দ্রুত হাঁটা",
      r1_ben: "ইনসুলিন সংবেদনশীলতা বৃদ্ধি এবং মেটাবলিক সক্রিয়তা শুরু",
      r2_act: "১০-১৫ মিনিট মেডিটেশন ও গভীর শ্বাস-প্রশ্বাস চর্চা",
      r2_ben: "কর্টিসল হরমোন নিয়ন্ত্রণ এবং মানসিক একাগ্রতা বৃদ্ধি",
      r3_act: "পুষ্টিকর প্রাতরাশ (সবুজ শাকসবজি, ডিম, বাদাম, সালাদ)",
      r3_ben: "১৪ ঘণ্টার অটোফেজি সফল সমাপনী ও দীর্ঘস্থায়ী শক্তি সরবরাহ",
      r4_act: "দুপুরের খাবার (বেশি সালাদ, পরিমিত মাছ/মাংস, সামান্য লাল চালের ভাত)",
      r4_ben: "রক্তে সুগারের স্পাইক প্রতিরোধ ও হজমশক্তি সুরক্ষা",
      r5_act: "হালকা রাতের খাবার (স্যুপ, সেদ্ধ সবজি ও সালাদ)",
      r5_ben: "হজম নালীর পূর্ণ বিশ্রাম ও ঘুমের ভেতর চর্বি পোড়ানোর প্রস্তুতি",
      r6_act: "স্ক্রিন অফ করে শান্ত পরিবেশে ঘুমাতে যাওয়া",
      r6_ben: "মেলাটোনিন নিঃসরন ও কোষের গভীর ডিটক্সিফিকেশন",
      tag_reversal: "রোগ নিরাময় জ্ঞানভাণ্ডার",
      title_reversal: "মূল কারণ নিরাময় বনাম লক্ষণভিত্তিক চিকিৎসা",
      desc_reversal: "মেটাবলিক বিজ্ঞানীদের বিশ্লেষণ: ওষুধ দিয়ে শুধু লক্ষণ চাপা দেওয়া হয়, সঠিক লাইফস্টাইলে রোগ গোড়া থেকে দূর হয়।",
      tab_diabetes: "টাইপ-২ ডায়াবেটিস নিরাময়",
      tab_hypertension: "রক্তচাপ ও হৃদরোগ প্রতিরোধ",
      tab_fattyliver: "ফ্যাটি লিভার ও স্থূলতা",
      tab_stress: "মানসিক চাপ ও স্নায়ুতন্ত্রের সুস্থতা",
      d_title: "ইনসুলিন রেজিস্ট্যান্স দূরীকরণের বৈজ্ঞানিক সত্য",
      d_desc: "ক্লিনিক্যাল গবেষণায় দেখা যায়: ডায়াবেটিস মূলত ইনসুলিনের ঘাটতি নয়, বরং অতিরিক্ত শর্বরা ও ভোজ্যতেলের কারণে কোষে অতিরিক্ত ইনসুলিনের অকার্যকারিতা (Hyperinsulinemia)। ইনসুলিনের মাত্রা না কমিয়ে শুধু ওষুধ খেলে কিডনি ও চোখের রক্তনালী ধ্বংস হয়।",
      d_step1: "সবধরনের পরিশোধিত চিনি ও ফলের মিষ্টি জুস সম্পূর্ণ বর্জন করুন।",
      d_step2: "১৬ ঘণ্টার ইন্টারমিটেন্ট ফাস্টিং শরীরে জমে থাকা গ্লাইকোজেন ও চর্বি পোড়াতে বাধ্য করে।",
      d_step3: "বড় পেশির ব্যায়াম (যেমন দ্রুত হাঁটা ও সিঁড়ি ওঠা) ইনসুলিন ছাড়াই গ্লুকোজ শোষণ বৃদ্ধি করে।",
      quote_tag: "ক্লিনিক্যাল রিসার্চ নোট",
      d_quote: "\"ডায়াবেটিস কোনো আজীবনের রোগ নয়। খাবার থেকে বিষাক্ত উপাদান বাদ দিলে এবং পরিপাকতন্ত্রকে বিশ্রাম দিলে শরীর নিজেই নিজের ইনসুলিন সংবেদনশীলতা ফিরিয়ে আনে।\"",
      h_title: "রক্তনালীর স্থিতিস্থাপকতা ও প্রদাহমুক্ত কার্ডিয়াক স্বাস্থ্য",
      h_desc: "উচ্চ রক্তচাপ কোনো রক্তরোগ নয়, এটি রক্তনালীর দেয়ালের প্রদাহ (Endothelial Dysfunction) ও শক্ত হয়ে যাওয়ার ফল। শিল্পজাত সয়াবিন তেলের ওমেগা-৬ ফ্যাটি এসিড এবং মাত্রাতিরিক্ত স্ট্রেস এই প্রদাহ ত্বরান্বিত করে।",
      h_step1: "বিষাক্ত রিফাইন্ড ভেজিটেবল অয়েল বাদ দিয়ে সরিষার তেল ও কাঁচা সালাদ গ্রহণ করুন।",
      h_step2: "প্রতিদিন ১০-১৫ মিনিট গভীর দমচর্চা রক্তনালীকে প্রসারিত করে রক্তচাপ কমায়।",
      h_step3: "প্রাকৃতিক পটাশিয়ামসমৃদ্ধ শাকসবজি সোডিয়াম-পটাশিয়াম ভারসাম্য রক্ষা করে।",
      h_quote: "\"প্রেসারের ওষুধ কেবল পাইপকে কৃত্রিমভাবে ফুলিয়ে রাখে, কিন্তু দেয়ালের প্রদাহ সারায় না। খাদ্যাভ্যাস পরিবর্তন করলে রক্তচাপ এমনিতেই স্বাভাবিক হয়ে আসে।\"",
      f_title: "ফ্যাটি লিভার ও পেটের চর্বি গলানোর উপায়",
      f_desc: "নন-অ্যালকোহলিক ফ্যাটি লিভার (NAFLD) মহামারীর মতো ছড়িয়ে পড়ছে। এর প্রধান কারণ অতিরিক্ত ফ্রুকটোজ (চিনি ও প্রসেসড মিষ্টি) এবং অনিয়ন্ত্রিত গভীর রাতের খাবার। লিভারের চর্বি সরাসরি হার্ট অ্যাটাকের ঝুঁকি বাড়িয়ে দেয়।",
      f_step1: "সন্ধ্যা ৭টার পর কোনো ভারী বা ক্যালরিবহুল খাবার না খাওয়ার অভ্যাস গড়ে তুলুন।",
      f_step2: "অটোফেজি চলাকালে লিভার জমে থাকা ট্রাইগ্লিসারাইড শক্তি হিসেবে পুড়িয়ে ফেলে।",
      f_step3: "লেবুর পানি, অ্যাপেল সিডার ভিনেগার ও তিতা করলার রস লিভার ডিটক্সে সহায়ক।",
      f_quote: "\"লিভারের চর্বি দূর করতে কোনো জাদুকরী ওষুধের প্রয়োজন নেই; ১৪ ঘণ্টা না খেয়ে থাকার চেয়ে শক্তিশালী লিভার ক্লিনজার পৃথিবীতে আর নেই।\"",
      s_title: "ক্রনিক মানসিক চাপ ও কর্টিসলের বিষক্রিয়া থেকে মুক্তি",
      s_desc: "আধুনিক জীবনে উদ্বেগ, হতাশা, পরশ্রীকাতরতা এবং অতিরিক্ত স্ক্রিন টাইম স্নায়ুতন্ত্রকে অবিরাম 'ফাইট অর ফ্লাইট' মোডে রাখে। এটি কর্টিসল বাড়িয়ে রক্তে সুগার বাড়ায় এবং রোগ প্রতিরোধ ক্ষমতা শূন্যে নামিয়ে দেয়।",
      s_step1: "প্রতিদিন সকাল ও সন্ধ্যায় কোয়ান্টাম শিথিলায়ন বা মেডিটেশন চর্চা করুন।",
      s_step2: "অন্যের প্রতি ক্ষমাশীলতা ও কৃতজ্ঞতার মনোভাব রক্তনালীকে শিথিল রাখে।",
      s_step3: "রাত ১০:৩০ এর মধ্যে ঘুমানো মস্তিষ্কের গ্লাইমফ্যাটিক সিস্টেমকে বিষমুক্ত করে।",
      s_quote: "\"মন ভালো না থাকলে সেরা খাবার খেয়েও সুস্থ থাকা যায় না। আত্মিক প্রশান্তি ও মানসিক নির্মলতাই প্রকৃত আরোগ্য।\"",
      tag_faq: "সচরাচর জিজ্ঞাসা",
      title_faq: "লাইফস্টাইল পরিবর্তন সম্পর্কিত প্রয়োজনীয় প্রশ্নাবলি",
      faq_q1: "৯৯ শতাংশ মানুষ স্বাস্থ্যঝুঁকিতে থাকার কারণ কী",
      faq_a1: "চিকিৎসাবিজ্ঞান ও মেটাবলিক বিশ্লেষণ অনুযায়ী, প্রক্রিয়াজাত অস্বাস্থ্যকর খাবার, রিফাইন্ড তেল, শারীরিক নিষ্ক্রিয়তা, দেরিতে ঘুমানো এবং অবিরত মানসিক চাপের কারণে মানুষের রোগ প্রতিরোধ ক্ষমতা ও কোষের স্ব-নিরাময় ক্ষমতা নষ্ট হয়ে যায়।",
      faq_q2: "ওষুধ ছাড়া কি দীর্ঘস্থায়ী রোগ নিরাময় সম্ভব",
      faq_a2: "হ্যাঁ, লাইফস্টাইল মেডিসিনের মূল ভিত্তি হলো রোগের মূল কারণ দূর করা। খাদ্যাভ্যাস থেকে বিষাক্ত উপাদান বর্জন, ১৪-১৬ ঘণ্টার অটোফেজি এবং নিয়মিত হাঁটার মাধ্যমে হাজার হাজার মানুষ প্রেশার ও সুগারের ওষুধ থেকে মুক্ত হয়েছেন।",
      faq_q3: "ইন্টারমিটেন্ট ফাস্টিংয়ের সময় কী খাওয়া যাবে",
      faq_a3: "উপবাস বা পরিপাক বিরতির সময়ে পর্যাপ্ত সাধারণ পানি, হালকা লেবু-পানি বা চিনি ছাড়া গ্রিন টি পান করা যাবে। তবে কোনো ক্যালরিবহুল খাবার বা পানীয় গ্রহণ করা যাবে না।",
      footer_credits: "প্রিভেন্টিভ কার্ডিওলজি ও আধুনিক লাইফস্টাইল মেডিসিনের বৈজ্ঞানিক প্রটোকল ভিত্তিক একটি জনসচেতনতামূলক ডিজিটাল স্বাস্থ্য উদ্যোগ।",
      tag_oil: "ভোজ্যতেল বিজ্ঞান ও বিশ্লেষণ",
      title_oil: "কোন তেল স্বাস্থ্যসম্মত? ভোজ্যতেলের তুলনামূলক বিজ্ঞান",
      desc_oil: "রান্নায় ব্যবহৃত তেলের ধরণই নির্ধারণ করে আপনার রক্তনালীর বয়স ও প্রদাহের মাত্রা। জেনে নিন নিরাপদ ও বর্জনীয় তেলের বৈজ্ঞানিক তথ্য।",
      filter_oil_all: "সকল ভোজ্যতেল",
      filter_oil_safe: "নিরাপদ ও স্বাস্থ্যকর তেল",
      filter_oil_danger: "বর্জনীয় শিল্পজাত তেল",
      oil_badge_optimal: "সর্বোৎকৃষ্ট ও নিরাপদ",
      oil_badge_traditional: "ঐতিহ্যবাহী ও নিরাপদ",
      oil_badge_protective: "কার্ডিও-প্রটেক্টিভ",
      oil_badge_avoid: "বর্জনীয় ও ক্ষতিকর",
      oil1_name: "খাঁটি নারকেল তেল (Cold-Pressed)",
      oil1_desc: "মাঝারি চেইনের ট্রাইগ্লিসারাইড (MCT) ও লরিক এসিডসমৃদ্ধ। উচ্চ তাপে জারিত হয় না এবং সরাসরি লিভারে গিয়ে শক্তি উৎপন্ন করে।",
      oil1_fat: "স্যাচুরেটেড (MCTs)",
      oil_stab_high: "অত্যন্ত উচ্চ (জারণ-মুক্ত)",
      oil1_vessel: "এইচডিএল বৃদ্ধি ও অ্যান্টি-মাইক্রোবিয়াল",
      oil2_name: "ঘানিভাঙ্গা খাঁটি সরিষার তেল",
      oil2_desc: "প্রাকৃতিক মনো-আনস্যাচুরেটেড ফ্যাট (MUFA) ও ওমেগা-৩ যুক্ত। বাঙালির দৈনন্দিন রান্নার উচ্চ তাপে সম্পূর্ণ স্থিতিশীল ও নিরাপদ।",
      oil2_fat: "MUFA ও সুষম ওমেগা-৩:৬",
      oil2_vessel: "হৃদযন্ত্রবান্ধব ও রক্ত জমাট বাঁধা প্রতিরোধী",
      oil3_name: "এক্সট্রা ভার্জিন অলিভ অয়েল",
      oil3_desc: "শক্তিশালী অ্যান্টিঅক্সিডেন্ট পলিফেনল ও ওলিক এসিডে সমৃদ্ধ। কাঁচা সালাদ ও হালকা তাপমাত্রার রান্নায় রক্তনালীর প্রদাহ প্রশমন করে।",
      oil3_fat: "ওলিক এসিড (MUFA)",
      oil3_stab: "মাঝারি (সালাদ ও হালকা রান্না)",
      oil3_vessel: "এন্ডোথেলিয়াল সুরক্ষা ও রক্তচাপ নিয়ন্ত্রণ",
      oil4_name: "শিল্পজাত রিফাইন্ড সয়াবিন / পাম / ক্যানোলা",
      oil4_desc: "উচ্চ তাপ ও রাসায়নিক দ্রাবকে নিষ্কাশিত। অতিরিক্ত ওমেগা-৬ লিনোলিক এসিড ধমনীর দেয়ালে অক্সিডেটিভ ক্ষতি ও দীর্ঘস্থায়ী প্রদাহ সৃষ্টি করে।",
      oil4_fat: "প্রদাহ সৃষ্টিকারী ওমেগা-৬ PUFA",
      oil4_stab: "অত্যন্ত ভঙ্গুর (উচ্চ তাপে টক্সিন উৎপন্ন)",
      oil4_vessel: "এলডিএল জারণ ও ধমনীতে প্লাক সৃষ্টি",
      spec_fat_type: "ফ্যাট প্রোফাইল:",
      spec_heat_stability: "উত্তাপ সহনশীলতা:",
      spec_vessel_impact: "রক্তনালীর প্রভাব:",
      tag_egg: "সুপারফুড পুষ্টি বিজ্ঞান",
      title_egg: "সম্পূর্ণ ডিমের সুপারফুড ক্ষমতা ও কোলেস্টেরলের বিজ্ঞান",
      desc_egg: "খাদ্যের কোলেস্টেরল রক্তনালীতে চর্বি জমায় না। ডিমের কুসুম বর্জন না করে সম্পূর্ণ ডিম কেন মানবদেহের সেরা জৈবপ্রোটিন?",
      egg_truth_title: "ডিম সম্পর্কিত ৩টি বৈজ্ঞানিক সত্য",
      egg_fact1_t: "কুসুমে ৯০% মাইক্রোনিউট্রিয়েন্ট:",
      egg_fact1_d: "ভিটামিন এ, ডি, ই, কে, বি১২ এবং মস্তিষ্কের জন্য অতি-প্রয়োজনীয় কোলিন ও চোখের সুরক্ষায় লিউটিন সবই থাকে ডিমের কুসুমে।",
      egg_fact2_t: "খাবারের কোলেস্টেরল হার্ট ব্লকের কারণ নয়:",
      egg_fact2_d: "শরীরের ৮০% কোলেস্টেরল লিভার নিজে তৈরি করে। অতিরিক্ত শর্করা ও প্রদাহজনিত কারণে খারাপ এলডিএল জারিত হয়, ডিম খাওয়ার কারণে নয়।",
      egg_fact3_t: "দৈনিক ২-৪টি ডিম খাওয়া নিরাপদ:",
      egg_fact3_d: "সুস্থ প্রাপ্তবয়স্ক ব্যক্তিরা প্রতিদিন কুসুমসহ ডিম অনায়াসে খেতে পারেন। এটি পেশি ক্ষয় রোধ করে এবং দীর্ঘক্ষণ ক্ষুধা নিবারণ করে।",
      egg_calc_title: "দৈনিক ডিম ও পুষ্টি ক্যালকুলেটর",
      egg_calc_desc: "আপনার দৈনিক ডিমের সংখ্যা নির্বাচন করে পুষ্টির মাত্রা হিসাব করুন:",
      label_egg_count: "ডিমের সংখ্যা:",
      m_protein: "উচ্চমানের প্রোটিন",
      m_choline: "কোলিন (মস্তিষ্ক পুষ্টি)",
      m_vitd: "ভিটামিন ডি ও বি১২",
      m_satiety: "তৃপ্তি ও মেটাবলিক স্কোর",
      egg_cooking_tip: "পরামর্শ: ডিম পোচ বা হাফ-বয়েল করে খান। ভাজতে চাইলে অবশ্যই খাঁটি সরিষার তেল বা নারকেল তেল ব্যবহার করুন, কখনোই সয়াবিন তেল নয়।",
      tag_heart_mind: "কার্ডিও-নিউরো বিজ্ঞান",
      title_heart_mind: "হৃদযন্ত্রের দীর্ঘায়ু, মেডিটেশন ও মানসিক প্রশান্তি",
      desc_heart_mind: "মানসিক অহংকার, রাগ ও অবিরাম উদ্বেগ ধমনীর দেয়াল ছিঁড়ে ফেলে। ভ্যাগাস নার্ভ সক্রিয়করণ ও গভীর শ্বাসপ্রশ্বাসে হৃদযন্ত্র সুরক্ষা করুন।",
      cardio_title: "মেডিটেশনের কার্ডিওভাসকুলার মেকানিজম",
      s1_t: "ভ্যাগাস নার্ভ স্টিমুলেশন:",
      s1_d: "মন শান্ত হলে প্যারাসিম্প্যাথেটিক স্নায়ুতন্ত্র সক্রিয় হয়, যা অতিরিক্ত দ্রুত হৃদস্পন্দন স্বাভাবিক করে এবং কার্ডিয়াক লোড কমায়।",
      s2_t: "নাইট্রিক অক্সাইড নিঃসরণ:",
      s2_d: "গভীর শ্বাসপ্রশ্বাসে ধমনীর ভেতরের আস্তরণ (Endothelium) প্রসারিত হয় এবং রক্তচাপ স্বয়ংক্রিয়ভাবে স্বাভাবিক মাত্রায় নেমে আসে।",
      s3_t: "বিনম্রতা ও রাগ নিয়ন্ত্রণ (Emotional Detox):",
      s3_d: "সুফি মিজানুর রহমান ও কার্ডিওলজিস্টদের গবেষণায় দেখা যায়: অহংকার ও ক্রোধ কর্টিসল হরমোনের তীব্র ঝড় তোলে, যা হার্ট অ্যাটাকের অন্যতম গোপন নিয়ামক। বিনম্রতা মন ও রক্তনালীকে কোমল রাখে।",
      breath_title: "২ মিনিটের কার্ডিয়াক কোহেরেন্স দমচর্চা",
      breath_desc: "রক্তচাপ ও স্নায়বিক চাপ কমাতে নিচের বৃত্তের ছন্দে শ্বাস নিন ও ছাড়ুন:",
      breath_ready: "প্রস্তুত হন",
      btn_start_breath: "দমচর্চা শুরু করুন",
      btn_reset_breath: "রিসেট",
      tag_myths: "টোটাল ফিটনেস ও সত্য উন্মোচন",
      title_myths: "সাধারণ স্বাস্থ্যভ্রান্তি নিরসন ও ফিটনেস প্রশ্নোত্তর",
      desc_myths: "বহু বছর ধরে প্রচারিত প্রচলিত ভুল ধারণাগুলো বিজ্ঞানসম্মত প্রমাণের মাধ্যমে জেনে নিন।",
      tag_myth_label: "ভ্রান্ত ধারণা",
      badge_science_fact: "বৈজ্ঞানিক সত্য",
      m1_q: "ডিমের কুসুম খেলে রক্তনালী ব্লক হয়ে হার্ট অ্যাটাক হয়?",
      m1_a: "সম্পূর্ণ ভিত্তিহীন। গবেষণায় প্রমাণিত হয়েছে ডিমের কুসুমে থাকা স্বাস্থ্যকর ফ্যাট রক্তে ভালো কোলেস্টেরল (HDL) বাড়ায়। রক্তনালীর আসল ক্ষতি করে পরিশোধিত চিনি, ময়দা ও সয়াবিন তেল দ্বারা সৃষ্ট প্রদাহ।",
      m2_q: "ভেজিটেবল অয়েল (সয়াবিন/পাম তেল) উদ্ভিজ্জ ও হার্টের জন্য উপকারী?",
      m2_a: "মার্কেটিং প্রোপাগান্ডা। সয়াবিন ও পাম তেল কোনো তাজা উদ্ভিজ্জ রস নয়; এগুলোকে রাসায়নিক দ্রাবক ও অত্যন্ত উচ্চতাপে পরিশোধন করা হয়, যার ফলে বিষাক্ত ওমেগা-৬ ফ্রি রেডিক্যাল তৈরি হয় যা ধমনীতে প্রদাহ বাড়ায়। খাঁটি সরিষা বা নারকেল তেলই প্রকৃত স্বাস্থ্যকর।",
      m3_q: "ফ্যাট বা চর্বিজাতীয় খাবার খেলেই মানুষ মোটা হয়?",
      m3_a: "ভুল ধারণা। চর্বি ইনসুলিন হরমোন বৃদ্ধি করে না। স্থূলতার আসল চাবিকাঠি হলো উচ্চ শর্করা ও চিনিযুক্ত খাবার, যা ইনসুলিন স্পাইক করিয়ে অতিরিক্ত ক্যালরি চর্বি হিসেবে কোষে লক করে রাখে। প্রাকৃতিক ভালো ফ্যাট খেলে ক্ষুধা কমে ও মেটাবলিজম চাঙ্গা হয়।",
      m4_q: "উচ্চ রক্তচাপ বা ডায়াবেটিসের ওষুধ একবার শুরু করলে কি সারা জীবন খেতে হবে?",
      m4_a: "লাইফস্টাইল চিকিৎসায় এটি ভুল প্রমাণিত। ওষুধ কেবল উপসর্গ কৃত্রিমভাবে দমিয়ে রাখে। খাদ্যাভ্যাস থেকে চিনি ও প্রক্রিয়াজাত খাবার বাদ দিয়ে, ১৪-১৬ ঘণ্টার অটোফেজি ফাস্টিং ও দৈনিক ৪৫ মিনিট হাঁটলে হাজারো মানুষ সম্পূর্ণ প্রাকৃতিকভাবে রক্তচাপ ও সুগার নিয়ন্ত্রণে আনতে সক্ষম হয়েছেন।",
      m5_q: "সকালের নাস্তা বাদ দিলে কি গ্যাস্ট্রিক ও মেটাবলিজম নষ্ট হয়?",
      m5_a: "সকাল ৯টা-১০টা পর্যন্ত নাস্তা বিলম্বিত করা প্রকৃতপক্ষে ইন্টারমিটেন্ট ফাস্টিং বা অটোফেজি তৈরি করে। এতে পরিপাকতন্ত্র পূর্ণ বিশ্রাম পায়, ইনসুলিন লেভেল সর্বনিম্ন থাকে এবং শরীর সঞ্চিত চর্বি বার্ন করে মেটাবলিক নমনীয়তা অর্জন করে। গ্যাস্ট্রিক দূর করতে প্রয়োজন প্রক্রিয়াজাত খাবার বন্ধ করা।",


      // Fasting Tracker
      tag_fasting: "নোবেলজয়ী কোষীয় বিজ্ঞান",
      title_fasting: "অটোফেজি ও ফাস্টিং স্টেজ লাইভ ট্র্যাকার",
      desc_fasting: "১৪–১৬ ঘণ্টার উপবাসে শরীর ক্ষতিগ্রস্ত কোষ ও অ্যামাইলয়েড প্রোটিন ধ্বংস করে সুস্থ কোষ তৈরি করে। আপনার ফাস্টিং সময় সেট করে বর্তমান কোষীয় অবস্থা দেখুন।",
      lbl_last_meal: "সর্বশেষ খাবার গ্রহণের সময়:",
      btn_fast_now: "এখন শুরু করুন",
      lbl_presets: "প্রিসেট:",
      preset_12h: "১২ ঘণ্টা আগে",
      preset_14h: "১৪ ঘণ্টা আগে",
      preset_16h: "১৬ ঘণ্টা আগে",
      lbl_fasting_elapsed: "উপবাস অতিবাহিত",
      stage_1_badge: "গ্লাইকোজেন ক্ষয় পর্ব",
      stage_2_badge: "কিটোসিস ও চর্বি গলানো",
      stage_3_badge: "অটোফেজি শীর্ষ পর্যায়",
      stage_4_badge: "গভীর মেরামত ও গ্রোথ হরমোন",
      stage_5_badge: "স্টেম সেল নবায়ন",
      btn_start_fast_timer: "টাইমার চালু করুন",
      btn_pause_fast_timer: "টাইমার থামান",
      btn_reset_fast_timer: "রিসেট",
      title_fasting_stages: "মানবদেহের ৫টি পর্যায়ক্রমিক জৈবরাসায়নিক পরিবর্তন",
      st1_title: "রক্তে শর্করা হ্রাস ও গ্লাইকোজেন নিঃশেষ",
      st1_desc: "ইনসুলিন ক্ষরণ নেমে যায়, রক্তে থাকা অতিরিক্ত গ্লুকোজ খরচ হয় এবং লিভারের সংরক্ষিত গ্লাইকোজেন শক্তিতে রূপান্তরিত হয়।",
      st2_title: "কিটোন উৎপাদন ও চর্বি গলানোর সুইচ অন",
      st2_desc: "শরীর গ্লুকোজ বিপাক থেকে চর্বি বিপাকে প্রবেশ করে। রক্তে কিটোন বডি তৈরি শুরু হয়, যা মস্তিষ্কের নিউরনকে সতেজ করে।",
      badge_autophagy_peak: "অটোফেজি পিক (নোবেল পুরস্কার প্রাপ্ত মেকানিজম)",
      st3_title: "কোষের আবর্জনা ও জীর্ণ প্রোটিন পুনর্ব্যবহার",
      st3_desc: "লাইসোজোম সক্রিয় হয়ে ক্ষতিগ্রস্ত কোষ, ব্যাকটেরিয়াল বর্জ্য এবং রক্তনালীর প্রদাহজনক উপাদান হজম করে নতুন সুস্থ কোষে রূপান্তর করে।",
      st4_title: "গভীর ইনসুলিন সংবেদনশীলতা ও গ্রোথ হরমোন",
      st4_desc: "ইনসুলিন রেজিস্ট্যান্স উল্লেখযোগ্যভাবে হ্রাস পায়। মানব গ্রোথ হরমোন (HGH) বহুগুণ বৃদ্ধি পেয়ে পেশি রক্ষা করে এবং চর্বি পোড়ায়।",
      st5_title: "স্টেম সেল পুনরুজ্জীবন ও পূর্ণ রোগ প্রতিরোধ",
      st5_desc: "অন্ত্রের মিউকোসাল আস্তরণ মেরামত হয় এবং রোগ প্রতিরোধক শ্বেতকণিকাগুলোর সম্পূর্ণ নবায়ন ঘটে।",

      // Lab Decoder
      tag_lab_decoder: "মেটাবলিক বায়োমার্কার ডিকোডার",
      title_lab_decoder: "ক্লিনিক্যাল রক্ত পরীক্ষা ও দক্ষিণ এশীয় ইনসুলিন রেজিস্ট্যান্স বিশ্লেষণ",
      desc_lab_decoder: "কেবল বিএমআই (BMI) দিয়ে দক্ষিণ এশীয়দের ঝুঁকি বোঝা যায় না। পেটের চর্বি (TOFI), ট্রাইগ্লিসারাইড-এইচডিএল অনুপাত ও রক্ত পরীক্ষার মান বিশ্লেষণ করে প্রকৃত ঝুঁকি জানুন।",
      title_tofi: "১. দক্ষিণ এশীয় \"থিন-ফ্যাট\" (TOFI) ও ভিসেরাল ফ্যাট সূচক",
      desc_tofi: "বাইরে থেকে চিকন দেখালেও দক্ষিণ এশীয়দের লিভার ও পেটের ভেতর বিষাক্ত চর্বি থাকে। কোমর ও উচ্চতার অনুপাত (WHtR) দিয়ে এটি নির্ণয় করা যায়।",
      lbl_waist: "কোমরের মাপ (নাভির সমান দিয়ে ইঞ্চি):",
      lbl_height: "উচ্চতা (ইঞ্চি):",
      lbl_tg: "ট্রাইগ্লিসারাইড (TG mg/dL):",
      lbl_hdl: "এইচডিএল (HDL mg/dL):",
      btn_calc_tofi: "ভিসেরাল ফ্যাট ও ইনসুলিন রেজিস্ট্যান্স গণনা করুন",
      lbl_whtr: "কোমর-উচ্চতা অনুপাত (WHtR):",
      lbl_tg_hdl: "TG / HDL অনুপাত:",
      lbl_tyg: "TyG ইনসুলিন সূচক:",
      title_biomarkers: "২. রক্ত পরীক্ষা বায়োমার্কার ডিকোডার (Lab Evaluator)",
      desc_biomarkers: "আপনার সাম্প্রতিক রক্ত পরীক্ষার মানগুলো বসিয়ে ট্র্যাফিক-লাইট বিশ্লেষণ ও লাইফস্টাইল প্রতিকার জেনে নিন।",
      lbl_bm_fbs: "ফাস্টিং সুগার (FBS mg/dL):",
      lbl_bm_hba1c: "এইচবিএওয়ানসি (HbA1c %):",
      lbl_bm_insulin: "ফাস্টিং ইনসুলিন (Fasting Insulin µIU/mL):",
      lbl_bm_hscrp: "এইচএস-সিআরপি প্রদাহ (hs-CRP mg/L):",
      lbl_bm_sgpt: "এসজিপিটি/লিভার এনজাইম (SGPT/ALT U/L):",
      lbl_bm_vitd: "ভিটামিন ডি৩ (Serum Vitamin D3 ng/mL):",
      lbl_bm_uric: "ইউরিক এসিড (Uric Acid mg/dL):",
      btn_decode_biomarkers: "ল্যাব রিপোর্ট বিশ্লেষণ ও প্রতিকার দেখুন",
      title_biomarker_analysis: "ক্লিনিক্যাল বিশ্লেষণ ও লাইফস্টাইল অ্যাকশন প্ল্যান",

      // Plate Builder
      tag_plate: "দেশি পুষ্টি ও অ্যান্টি-ইনফ্ল্যামেটরি বিজ্ঞান",
      title_plate: "বাংলাদেশি অ্যান্টি-ইনফ্ল্যামেটরি প্লেট বিল্ডার ও বাজেট ডায়েট",
      desc_plate: "অতিরিক্ত দামি বিদেশি খাবার নয়—স্থানীয় দেশি শাকসবজি, দেশি মাছ ও ঘানিভাঙ্গা সরিষার তেল দিয়েই রক্তনালীর প্রদাহ ও ক্রনিক রোগ নিরাময় সম্ভব।",
      title_plate_visual: "আদর্শ নিরাময়কারী ভাতের থালা (৫০% শাকসবজি + ২৫% প্রোটিন + ২৫% জটিল কার্ব)",
      zone_veg: "৫০% সবুজ শাকসবজি ও সালাদ",
      zone_protein: "২৫% দেশি প্রোটিন",
      zone_carb: "২৫% লাল চাল / ডাল",
      zone_fat: "ঘানিভাঙ্গা সরিষা / খাঁটি ঘি",
      lbl_ai_score: "প্রদাহরোধী স্কোর:",
      lbl_gi_load: "গ্লাইসেমিক লোড:",
      lbl_fiber_content: "আঁশ বা ফাইবার:",
      f_group_veg: "শাকসবজি নির্বাচন করুন (৫০%):",
      f_group_protein: "প্রোটিন নির্বাচন করুন (২৫%):",
      f_group_carb: "কার্বোহাইড্রেট নির্বাচন করুন (২৫%):",
      title_detox: "🧪 স্থানীয় বাজারের শাকসবজি বিষমুক্তকরণ পদ্ধতি (Detox Protocol)",
      desc_detox: "ফরমালিন, পেস্টিসাইড ও কীটনাশকের অবশিষ্টাংশ দূর করতে বিজ্ঞানসম্মত ৩ ধাপ:",
      d_st1: "১. সাধারণ পরিষ্কার পানিতে ধোয়া: দৃশ্যমান ধূলিবালি দূর করতে ৩ মিনিট পরিষ্কার পানিতে ভালো করে ধুয়ে নিন।",
      d_st2: "২. লবণ ও বেকিং সোডার দ্রবণ (১৫ মিনিট): ১ লিটার পানিতে ১ চা-চামচ খাঁটি লবণ ও ১ চা-চামচ বেকিং সোডা (সোডিয়াম বাইকার্বোনেট) গুলিয়ে সবজি ১৫ মিনিট ভিজিয়ে রাখুন। এটি ক্ষতিকর রাসায়নিক ভেঙে ফেলে।",
      d_st3: "৩. চূড়ান্ত বিশুদ্ধ ধৌতকরণ: তুলে আবার স্বাভাবিক প্রবাহমান পানিতে ধুয়ে রান্নায় ব্যবহার করুন।",
      title_7day: "📅 ৭ দিনের বাজেট মেটাবলিক রিসেট ডায়েট চার্ট",
      tab_plan_village: "১. স্বল্পবাজেট / গ্রামীন স্তর",
      tab_plan_family: "২. পারিবারিক স্ট্যান্ডার্ড",
      tab_plan_executive: "৩. এক্সিকিউটিভ স্তর",

      // Vagus Pacer
      tag_vagus: "নিউরো-কার্ডিয়াক উদ্দীপনা",
      title_vagus: "ভ্যাগাস নার্ভ উদ্দীপক ও হার্ট রেট ভ্যারিয়াবিলিটি (HRV) ব্রিদিং বাবল",
      desc_vagus: "ধীর ও গভীর ছন্দময় শ্বাস-প্রশ্বাস সরাসরি মস্তিষ্কের প্যারাসিম্প্যাথেটিক ভ্যাগাস নার্ভকে সচল করে অ্যাড্রেনালিন কমায় এবং রক্তচাপ স্বাভাবিক করে।",
      mode_478: "৪-৭-৮ রিল্যাক্সেশন (গভীর প্রশান্তি)",
      mode_box: "বক্স ব্রিদিং ৪-৪-৪-৪ (মানসিক স্থিরতা)",
      mode_resonant: "রেজোনেন্স ৫.৫ সে. (কার্ডিয়াক কোহেরেন্স)",
      lbl_sound_on: "শব্দ চালু",
      lbl_sound_off: "শব্দ বন্ধ",
      bubble_idle: "শুরু করতে প্রস্তুত",
      bubble_inhale: "নাক দিয়ে ধীরে শ্বাস নিন...",
      bubble_hold: "বাতাস ধরে রাখুন...",
      bubble_exhale: "মুখ দিয়ে দীর্ঘ শ্বাস ছাড়ুন...",
      lbl_cycle_count: "সম্পন্ন চক্র:",
      lbl_session_time: "সেশন সময়কাল:",
      lbl_vagal_tone: "ভ্যাগাল টোন প্রভাব:",
      vagal_ready: "প্রস্তুত",
      vagal_active: "সক্রিয় হচ্ছে (নাড়ির গতি কমছে)",
      vagal_deep: "গভীর শান্ত অবস্থা অর্জিত",
      btn_start_breathing: "শ্বাসক্রিয়া সেশন শুরু করুন",
      btn_pause_breathing: "বিরতি",
      btn_reset_breathing: "পুনরায় শুরু",

      // Habit Tracker
      tag_habits: "দৈনিক ধারাবাহিকতা ও নিউরোপ্লাস্টিসিটি",
      title_habits: "৬টি স্তম্ভের সুস্থতা অভ্যাস ও ধারাবাহিকতা ট্র্যাকার",
      desc_habits: "রোগ নিরাময় কোনো একদিনের ম্যাজিক নয়—এটি প্রতিদিনের ধারাবাহিক অভ্যাসের ফল। আপনার প্রতিদিনের ৬টি স্তম্ভ টিক দিন এবং ধারাবাহিকতা রক্ষা করুন।",
      title_daily_check: "দৈনিক স্বাস্থ্য চেকলিস্ট",
      lbl_streak_days: "দিনের অবিচ্ছিন্ন স্ট্রিক",
      lbl_today_progress: "আজকের সম্পন্ন হার:",
      h1_title: "১. ১৪–১৬ ঘণ্টার ইন্টারমিটেন্ট ফাস্টিং সম্পন্ন",
      h1_desc: "রাত ৮টার মধ্যে রাতের খাবার শেষ করে সকাল ১০টা পর্যন্ত পরিপাক বিরতি।",
      h2_title: "২. ৪৫ মিনিট রোদে দ্রুত হাঁটা ও শারীরিক ঘাম ঝরানো",
      h2_desc: "সকালের প্রাকৃতিক রোদে দ্রুত হাঁটা ও ইনসুলিন সংবেদনশীলতা বৃদ্ধি।",
      h3_title: "৩. চিনি, মিষ্টি ও সয়াবিন/পাম তেল সম্পূর্ণ বর্জন",
      h3_desc: "শুধুমাত্র সবুজ শাকসবজি, খাঁটি সরিষার তেল ও পুষ্টিকর প্রাকৃতিক খাবার গ্রহণ।",
      h4_title: "৪. ২.৫ থেকে ৩ লিটার বিশুদ্ধ পানি ও লেবুপানি",
      h4_desc: "পর্যাপ্ত সেলুলার হাইড্রেশন ও লিভার-কিডনির বিষাক্ত বর্জ্য নিষ্কাশন।",
      h5_title: "৫. ১০–১৫ মিনিট শ্বাসক্রিয়া বা ধ্যান (মেডিটেশন)",
      h5_desc: "ভ্যাগাস নার্ভ সক্রিয়করণ, মানসিক চাপ ও কর্টিসোল হরমোন হ্রাস।",
      h6_title: "৬. রাত ১১:০০ টার পূর্বেই শান্ত পরিবেশে বিছানায় ঘুমানো",
      h6_desc: "সার্কাডিয়ান ছন্দে মেলাটোনিন বৃদ্ধি ও ৭-৮ ঘণ্টার গভীর আরামদায়ক ঘুম।",
      lbl_last_7_days: "বিগত ৭ দিনের ধারাবাহিকতা:",
      btn_save_habits: "অভ্যাস সংরক্ষণ করুন",
      msg_celebrate: "অভিনন্দন! আজকের ৬টি স্তম্ভের সবকটি আপনি সফলভাবে পূরণ করেছেন! আপনার কোষীয় স্ব-নিরাময় আজ সর্বোচ্চ পর্যায়ে।",

      // Doctor Passport
      tag_passport: "ক্লিনিক্যাল সমন্বয়",
      title_passport: "ডক্টর ডিসকাশন শিট ও স্বাস্থ্য পাসপোর্ট",
      desc_passport: "আপনার নিজস্ব চিকিৎসকের সাথে পরামর্শের সময় এই সারসংক্ষেপটি উপস্থাপন করুন যাতে তিনি জীবনযাত্রার উন্নতির সাথে সাথে ওষুধের ডোজ নিরাপদে সমন্বয় করতে পারেন।",
      passport_card_title: "মেটাবলিক স্বাস্থ্য পাসপোর্ট ও ক্লিনিক্যাল রিভিউ সামারি",
      passport_card_sub: "প্রিভেন্টিভ লাইফস্টাইল মেডিসিন ও রোগীর স্ব-মূল্যায়ন প্রতিবেদন",
      lbl_print_date: "তারিখ:",
      pp_risk_pending: "ঝুঁকি স্তর: নির্ণয় বাকি",
      passport_col1_title: "১. মেটাবলিক স্বাস্থ্য সূচক ও জীবনধারা স্থিতি",
      pp_resilience: "মেটাবলিক রেজিলিয়েন্স স্কোর:",
      pp_fasting_status: "দৈনিক উপবাস (Fasting Window):",
      pp_tofi_whtr: "কোমর-উচ্চতা অনুপাত (WHtR):",
      pp_tghdl: "TG / HDL রেশিও:",
      pp_habit_streak: "অভ্যাস ধারাবাহিকতা স্ট্রিক:",
      pp_not_assessed: "অনির্ণীত",
      pp_fasting_desired: "১৪-১৬ ঘণ্টা কাঙ্ক্ষিত",
      passport_col2_title: "২. চিকিৎসকের সাথে আলোচনা করার জন্য ৫টি মূল প্রশ্ন",
      pp_q1: "\"আমি চিনি ও রিফাইন্ড তেল বাদ দিয়ে ১৪ ঘণ্টা ফাস্টিং ও ৪৫ মিনিট হাঁটা শুরু করেছি। রক্তচাপ/সুগার কমলে ওষুধের ডোজ কীভাবে ধীরে ধীরে সমন্বয় (Taper) করব?\"",
      pp_q2: "\"আমার ট্রাইগ্লিসারাইড-এইচডিএল অনুপাত এবং পেটের চর্বি (ভিসেরাল ফ্যাট) বিবেচনায় ফ্যাটি লিভার ও কার্ডিয়াক ঝুঁকির বর্তমান অবস্থা কী?\"",
      pp_q3: "\"আমার জন্য কি প্রতি ৩ মাস পর পর ফাস্টিং ইনসুলিন (HOMA-IR) ও HbA1c টেস্ট করে অগ্ন্যাশয়ের সক্ষমতা দেখা প্রয়োজন?\"",
      pp_q4: "\"আমার বর্তমান প্রেসক্রিপশনের কোনো ওষুধের দীর্ঘমেয়াদী সাইড-ইফেক্ট লিভার বা কিডনির ওপর প্রভাব ফেলছে কি না?\"",
      pp_q5: "\"জীবনযাত্রার বিজ্ঞানসম্মত পরিবর্তনের মাধ্যমে ওষুধ স্থায়ীভাবে বন্ধ করার একটি নির্দিষ্ট মনিটরিং প্ল্যান তৈরি করা যায় কি?\"",
      btn_print_passport: "🖨️ ডক্টর শিট প্রিন্ট / পিডিএফ সংরক্ষণ করুন",
      btn_copy_passport: "📋 কপি টেক্সট সামারি"
    },
    en: {
      skip_to_content: "Skip to main content",
      topbar_accreditation: "Aligned with American College of Lifestyle Medicine (ACLM) & Nobel-Winning Autophagy Research",
      topbar_update: "Latest Clinical Update: Sept 2026 | Evidence Score: 99.4%",
      brand_title: "METAPREVENT™",
      brand_badge_text: "CLINICAL",
      brand_subtext: "Preventive Lifestyle Medicine Platform",
      nav_group_diagnostics: "Diagnostics & Labs",
      nav_group_diagnostics_sub: "Clinical Evaluation & Biomarker Diagnostic Tools",
      nav_diag_risk: "Metabolic Risk Engine",
      nav_diag_risk_desc: "6-Pillar personalized resilience evaluation",
      nav_diag_lab: "Biomarker Lab Decoder",
      nav_diag_lab_desc: "HbA1c, Insulin, TG/HDL & Visceral Fat (TOFI)",
      nav_diag_oil: "Cooking Oil Matrix",
      nav_diag_oil_desc: "Safe traditional fats vs. inflammatory industrial seed oils",
      nav_diag_egg: "Whole Egg & Cholesterol",
      nav_diag_egg_desc: "Yolk micronutrient density & daily intake calculator",
      nav_group_protocols: "Clinical Protocols",
      nav_group_protocols_sub: "Evidence-Based Reversal & Prevention Guidelines",
      nav_prot_rx: "Lifestyle Prescription",
      nav_prot_rx_desc: "Full daily circadian routine, nutrition & sleep plan",
      nav_prot_reversal: "Disease Reversal Hub",
      nav_prot_reversal_desc: "Type-2 diabetes, hypertension & fatty liver protocols",
      nav_prot_vagus: "Vagus Nerve Breathing",
      nav_prot_vagus_desc: "4-7-8, Box breathing & cardiac coherence pacer",
      nav_prot_heart_mind: "Heart-Mind Coherence",
      nav_prot_heart_mind_desc: "Stress neurobiology & psycho-neuro-immunology",
      nav_prot_myths: "Medical Mythbusters",
      nav_prot_myths_desc: "Clinical truths debunking cholesterol & calorie myths",
      nav_group_tools: "Daily Tools",
      nav_group_tools_sub: "Daily Monitoring & Habit Formation Trackers",
      nav_tool_fasting: "Intermittent Fasting Timer",
      nav_tool_fasting_desc: "14-16h circadian autophagy stage tracker",
      nav_tool_plate: "Desi Plate Builder",
      nav_tool_plate_desc: "50% vegetable ratio & budget meal plan",
      nav_tool_habits: "Metabolic Habit Tracker",
      nav_tool_habits_desc: "7 daily health routines & consistency streak",
      nav_passport_btn: "Doctor Passport",
      aeo_badge: "Clinical Direct Answer",
      aeo_time: "30-Second Summary",
      direct_answer_content: "Chronic non-communicable diseases—type-2 diabetes, hypertension, dyslipidemia, and atherosclerosis—stem from hyperinsulinemia, industrial seed oils, sedentary lifestyles, and chronic distress. Whole-food nutrition, 14–16 hour intermittent fasting, 45 minutes brisk walking, and mindfulness reverse this metabolic damage.",
      hero_title: "Metabolic Risk Etiology & Evidence-Based Reversal Protocol",
      doc_name: "Preventive Cardiology & Lifestyle Medicine Initiative",
      doc_role: "Clinical Preventive Care Researchers",
      seminar_ref: "Protocol Source: Metabolic Cardiology & Autophagy Research",
      last_updated_label: "Last Updated:",
      tag_assessment: "Interactive Assessment Engine",
      title_assessment: "Personalized Metabolic Health Evaluation Across 6 Pillars",
      desc_assessment: "Assess your lifestyle habits against the clinical epidemiological framework exposing why 99% of modern people face metabolic risks.",
      q1_title: "Intake of Refined Sugar & Ultra-Processed Foods",
      q1_opt1: "Never or Extremely Rare",
      q1_desc1: "Completely zero refined sugars and packaged food",
      q1_opt2: "Occasionally (2-3 times per week)",
      q1_desc2: "Sugar in tea, occasional desserts or soft drinks",
      q1_opt3: "Daily Routine (Regular Consumption)",
      q1_desc3: "Sweets, bakery products, soft drinks, or fast foods",
      q2_title: "Selection of Cooking Oil & Dietary Fats",
      q2_opt1: "Cold-Pressed Mustard / Extra Virgin Olive / Coconut Oil",
      q2_desc1: "Unrefined cold-pressed traditional and fruit oils",
      q2_opt2: "Blend of Mustard and Commercial Soybean Oil",
      q2_desc2: "Dining out occasionally with home-cooked mixes",
      q2_opt3: "Refined Soybean Oil / Palm Olein / Dalda",
      q2_desc3: "Commercial seed oils with high omega-6 inflammatory profiles",
      q3_title: "Dinner Timing & Intermittent Digestive Rest (Autophagy Window)",
      q3_opt1: "14-16 Hours Digestive Rest",
      q3_desc1: "Dinner completed before 8:00 PM consistently",
      q3_opt2: "10-12 Hours Fasting Window",
      q3_desc2: "Dinner around 9-10 PM followed by morning breakfast",
      q3_opt3: "Under 8 Hours Window & Late-Night Snacking",
      q3_desc3: "Midnight eating habits and delayed morning meals",
      q4_title: "Daily Physical Movement & Aerobic Conditioning",
      q4_opt1: "40-60 Minutes Daily Brisk Walking / Conditioning",
      q4_desc1: "Sustained sweat-inducing daily physical activity",
      q4_opt2: "Intermittent 20-30 Minutes Casual Walking",
      q4_desc2: "Active only 2-3 days a week",
      q4_opt3: "Almost Completely Sedentary",
      q4_desc3: "Prolonged desk-bound sitting without scheduled movement",
      q5_title: "Circadian Rhythm Alignment & Sleep Architecture",
      q5_opt1: "Asleep by 10:30 PM with 7-8 Hours Restful Sleep",
      q5_desc1: "Synchronized natural circadian biological rhythm",
      q5_opt2: "Bedtime Past Midnight with 6-7 Hours Sleep",
      q5_desc2: "Late sleeping habit with moderate morning grogginess",
      q5_opt3: "Sleeping Past 1-2 AM, Insomnia & Restlessness",
      q5_desc3: "Severe sleep debt and chronic daytime fatigue",
      q6_title: "Psychological Distress & Metabolic Symptom Markers",
      q6_opt1: "Daily Meditation/Prayer, Calm Mind, Zero Metabolic Flags",
      q6_desc1: "Optimal waistline, controlled blood pressure & blood sugar",
      q6_opt2: "Work Stress, Irritability, Mild Abdominal Visceral Fat",
      q6_desc2: "Borderline hypertension or mild daytime fatigue",
      q6_opt3: "Chronic Anxiety, Uncontrolled Anger, Diagnosed Diabetes/Hypertension",
      q6_desc3: "Fatty liver, central visceral adiposity, or multiple medications",
      btn_calc_risk: "Analyze My Metabolic Health Risk",
      btn_reset: "Reset Assessment",
      badge_awaiting: "Awaiting Assessment",
      title_resilience: "Metabolic Resilience Score",
      tier_prompt: "Complete the 6 diagnostic questions to reveal your score",
      label_risk_tier: "Risk Stratification:",
      label_cellular_health: "Autophagy & Cell Repair:",
      label_heart_vessel: "Vascular & Endothelial Health:",
      presc_prompt: "Upon assessment completion, a personalized clinical lifestyle prescription will be generated below.",
      btn_view_presc: "View Full Lifestyle Prescription ↓",
      tag_prescription: "Clinical Lifestyle Solutions",
      title_prescription: "Personalized Lifestyle Medicine Protocol",
      desc_prescription: "Evidence-informed daily routine and nutritional guidance tailored to your specific metabolic audit.",
      rx_title: "Metabolic Reversal Prescription",
      rx_subtitle: "Minimizing Pharmaceutical Dependency Through Cellular Rest & Whole Foods",
      btn_print_pdf: "Print / Save Lifestyle Prescription",
      rx_diet_title: "1. Dietary Restructuring & Whole Nutrition",
      rx_diet_1: "<strong>Eliminate Refined Sugars:</strong> Cease white sugar, refined flour, and sugary soft drinks immediately.",
      rx_diet_2: "<strong>Safe Cooking Fats:</strong> Restrict cooking oils to unrefined cold-pressed mustard oil, coconut oil, or extra virgin olive oil.",
      rx_diet_3: "<strong>Vegetable Dominance:</strong> Ensure at least 50% of every lunch and dinner consists of fresh raw salads and leafy greens.",
      rx_fasting_title: "2. Circadian Autophagy & Intermittent Fasting",
      rx_fasting_1: "<strong>Early Dinner Window:</strong> Conclude dinner strictly between 7:30 PM and 8:00 PM.",
      rx_fasting_2: "<strong>14–16 Hour Cellular Fast:</strong> Delay morning breakfast until 9:30 or 10:00 AM. Drink only plain water or unsweetened green tea.",
      rx_fasting_3: "<strong>No Midnight Snacking:</strong> Digesting food while sleeping inhibits growth hormone and halts fat oxidation.",
      rx_movement_title: "3. Kinetic Movement & Daily Aerobic Exercise",
      rx_movement_1: "<strong>45 Minutes Daily Brisk Walk:</strong> Engage in continuous brisk walking outdoors during morning sunlight or early evening.",
      rx_movement_2: "<strong>Interrupt Prolonged Sitting:</strong> Stand up and move for 3-5 minutes every 45 minutes of desk work.",
      rx_movement_3: "<strong>Bodyweight Movements:</strong> Incorporate light squats, stretching, and deep breathing daily to preserve skeletal muscle mass.",
      rx_mind_title: "4. Sleep Hygiene & Stress Downregulation",
      rx_mind_1: "<strong>In Bed by 10:30 PM:</strong> Disconnect digital screens, mobile phones, and blue light at least 60 minutes before bed.",
      rx_mind_2: "<strong>20 Minutes Daily Meditation:</strong> Practice morning and evening breathing meditation or quiet prayer to quiet the sympathetic nervous system.",
      rx_mind_3: "<strong>Gratitude & Forgiveness:</strong> Eliminate grudge and chronic anxiety which accelerate arterial inflammatory cascades.",
      schedule_title: "Evidence-Based Recommended Daily Circadian Protocol",
      th_time: "Time Interval",
      th_activity: "Prescribed Health Action",
      th_benefit: "Metabolic & Scientific Rationale",
      r1_act: "Wake up, drink warm water, 45 minutes brisk walk outdoors",
      r1_ben: "Enhances insulin sensitivity and kickstarts mitochondrial metabolism",
      r2_act: "10-15 minutes breathing meditation & quiet mindfulness",
      r2_ben: "Downregulates morning cortisol spikes and enhances mental clarity",
      r3_act: "Nutrient-dense breakfast (leafy greens, eggs, nuts, salad)",
      r3_ben: "Breaks 14-hour autophagy window with stable blood glucose",
      r4_act: "Whole lunch (generous salad, lean fish/meat, moderate brown rice)",
      r4_ben: "Prevents postprandial glucose excursions and protects gut lining",
      r5_act: "Light dinner (vegetable soup, steamed vegetables, greens)",
      r5_ben: "Allows full digestive rest before sleep for optimal nocturnal repair",
      r6_act: "Screens off, quiet dark room, sleep by 10:30 PM",
      r6_ben: "Triggers nocturnal melatonin release and deep lymphatic cellular detox",
      tag_reversal: "Clinical Disease Reversal",
      title_reversal: "Root Cause Resolution vs. Symptom Management",
      desc_reversal: "Clinical Thesis: Pharmaceuticals merely mask biological symptoms, whereas lifestyle medicine resolves root metabolic derangements.",
      tab_diabetes: "Type-2 Diabetes Reversal",
      tab_hypertension: "Hypertension & Vascular Health",
      tab_fattyliver: "Fatty Liver & Visceral Fat",
      tab_stress: "Stress & Autonomic Balance",
      d_title: "Resolving Hyperinsulinemia and Insulin Resistance",
      d_desc: "Clinical Evidence Highlights: Type-2 diabetes is not insulin deficiency, but rather cellular insulin toxicity (Hyperinsulinemia) driven by excess refined carbs and toxic seed oils. Escalating medications without dietary correction damages microvasculature.",
      d_step1: "Eliminate refined sugars, fruit juices, and refined flour completely.",
      d_step2: "A 16-hour fasting window forces glycogen depletion and triggers lipid mobilization.",
      d_step3: "Large-muscle resistance walking activates GLUT4 glucose uptake independent of insulin.",
      quote_tag: "Clinical Evidence Note",
      d_quote: "\"Diabetes is not a lifelong sentence. Remove dietary toxins and rest the digestive tract, and the human cellular machinery will restore its own insulin sensitivity.\"",
      h_title: "Vascular Endothelial Health & Arterial Elasticity",
      h_desc: "Hypertension is primarily an inflammatory disease of the arterial endothelium caused by oxidative seed oils, high fructose, and unmitigated sympathetic nervous overdrive.",
      h_step1: "Swap industrial seed oils for cold-pressed mustard oil and raw greens.",
      h_step2: "Practice 10-15 minutes of deep diaphragmatic breathing to stimulate nitric oxide release.",
      h_step3: "Potassium-rich green vegetables naturally restore optimal sodium-potassium homeostatic ratios.",
      h_quote: "\"Hypertension drugs merely artificially dilate constricted pipes without repairing the inflamed vascular wall. Fixing lifestyle restores natural vascular elasticity.\"",
      f_title: "Reversing Non-Alcoholic Fatty Liver (NAFLD)",
      f_desc: "Fatty liver disease is an epidemic driven by dietary fructose and late-night caloric overloading. Hepatic steatosis directly multiplies coronary artery disease risk.",
      f_step1: "Establish a strict cut-off for caloric consumption at 7:30 PM.",
      f_step2: "Autophagy forces hepatic parenchymal cells to consume accumulated intracellular triglycerides.",
      f_step3: "Consume lemon water, raw cruciferous salads, and bitter greens for hepatic detox support.",
      f_quote: "\"No pharmaceutical pill can cleanse a fatty liver. A 14-hour daily digestive rest is the single most potent liver detoxifier known to medical science.\"",
      s_title: "Eliminating Cortisol Neurotoxicity & Chronic Distress",
      s_desc: "Modern screen-induced hyperarousal traps the autonomic nervous system in permanent sympathetic overdrive, causing glucocorticoid resistance and systemic inflammation.",
      s_step1: "Practice structured morning and evening mindfulness or prayer.",
      s_step2: "Cultivate forgiveness and emotional equanimity to protect arterial walls.",
      s_step3: "Retire to bed by 10:30 PM to allow glymphatic cerebrospinal fluid to clear brain metabolites.",
      s_quote: "\"Without psychological calm and spiritual peace, the cleanest diet cannot produce vibrant health. A peaceful mind is the cornerstone of cellular immunity.\"",
      tag_faq: "Clinical Inquiries",
      title_faq: "Frequently Asked Questions on Lifestyle Medicine",
      faq_q1: "Why are 99% of modern individuals at chronic health risk?",
      faq_a1: "According to metabolic lifestyle research, modern industrial diets high in refined carbs and seed oils, coupled with sedentary desk hours, late-night sleep disruptions, and unrelenting mental tension, dismantle the body's innate self-healing mechanisms.",
      faq_q2: "Can chronic non-communicable diseases truly be reversed without lifelong medication?",
      faq_a2: "Yes. Lifestyle medicine addresses the root metabolic defect. Eliminating refined dietary triggers, adopting 14-16 hours of daily digestive rest, and daily aerobic movement have allowed thousands of patients to safely taper off hypertension and glycemic drugs under medical supervision.",
      faq_q3: "What can be consumed during the intermittent fasting window?",
      faq_a3: "During the fasting or digestive rest window, plain water, lemon-infused water, or unsweetened green tea are permissible. Any caloric beverages or foods that trigger insulin release must be strictly avoided.",
      footer_credits: "Evidence-informed digital public health initiative based on clinical preventive lifestyle medicine protocols.",
      tag_oil: "Cooking Oil Science",
      title_oil: "Which Cooking Oil is Truly Healthy? Comparative Matrix",
      desc_oil: "The type of culinary oil you consume determines arterial age and systemic inflammation. Understand the clinical difference between safe traditional fats and toxic industrial seed oils.",
      filter_oil_all: "All Cooking Oils",
      filter_oil_safe: "Safe & Protective Oils",
      filter_oil_danger: "Toxic Industrial Oils",
      oil_badge_optimal: "Optimal & Safe",
      oil_badge_traditional: "Traditional & Safe",
      oil_badge_protective: "Cardio-Protective",
      oil_badge_avoid: "Avoid - Inflammatory",
      oil1_name: "Cold-Pressed Virgin Coconut Oil",
      oil1_desc: "Rich in Medium-Chain Triglycerides (MCTs) and Lauric Acid. Highly heat-stable, directly converted into ketone energy in the liver.",
      oil1_fat: "Saturated Fats (MCTs)",
      oil_stab_high: "Extremely High (Oxidation-Resistant)",
      oil1_vessel: "Boosts HDL & Exhibits Antimicrobial Properties",
      oil2_name: "Cold-Pressed Mustard Oil (Kachi Ghani)",
      oil2_desc: "Contains natural Monounsaturated Fatty Acids (MUFA) and a balanced Omega-3 to Omega-6 ratio. Excellent smoke point for high-heat cooking.",
      oil2_fat: "MUFA & Balanced Omega-3:6",
      oil2_vessel: "Cardioprotective & Anti-Thrombotic Support",
      oil3_name: "Extra Virgin Olive Oil (Cold-Pressed)",
      oil3_desc: "Abundant in antioxidant polyphenols and Oleic Acid. Protects vascular endothelium when consumed raw or used for gentle low-heat cooking.",
      oil3_fat: "Oleic Acid (MUFA)",
      oil3_stab: "Moderate (Salads & Gentle Cooking)",
      oil3_vessel: "Endothelial Protection & Blood Pressure Regulation",
      oil4_name: "Industrial Refined Soybean / Palm / Canola",
      oil4_desc: "Chemical solvent-extracted under high industrial heat. High concentration of fragile Omega-6 Linoleic Acid oxidizes into atherogenic free radicals.",
      oil4_fat: "Pro-inflammatory Omega-6 PUFA",
      oil4_stab: "Extremely Fragile (Forms Lipid Peroxides)",
      oil4_vessel: "Accelerates LDL Oxidation & Arterial Plaque",
      spec_fat_type: "Fat Profile:",
      spec_heat_stability: "Thermal Stability:",
      spec_vessel_impact: "Vascular Impact:",
      tag_egg: "Superfood Science",
      title_egg: "Whole Egg Superfood Science & The Truth About Cholesterol",
      desc_egg: "Dietary cholesterol does not clog coronary arteries. Discover why whole eggs with their yolks provide the most complete biological nourishment.",
      egg_truth_title: "3 Evidence-Based Facts on Whole Eggs",
      egg_fact1_t: "90% of Micronutrients are in the Yolk:",
      egg_fact1_d: "Vitamins A, D, E, K, B12, brain-essential Choline, and macular protective antioxidants (Lutein/Zeaxanthin) are almost exclusively concentrated in the egg yolk.",
      egg_fact2_t: "Dietary Cholesterol is Not Arterial Plaque:",
      egg_fact2_d: "The liver synthesizes over 80% of circulating cholesterol. Vascular inflammation and oxidized LDL are driven by excess refined carbs and seed oils, not egg consumption.",
      egg_fact3_t: "Consuming 2-4 Whole Eggs Daily is Safe:",
      egg_fact3_d: "Healthy individuals can safely eat 2 to 4 whole eggs per day. It prevents muscle sarcopenia, stabilizes postprandial glucose, and promotes lasting satiety.",
      egg_calc_title: "Daily Egg Nutrition Calculator",
      egg_calc_desc: "Select your daily whole egg intake to calculate key bioavailable nutrients:",
      label_egg_count: "Egg Quantity:",
      m_protein: "Complete Protein",
      m_choline: "Choline (Brain Fuel)",
      m_vitd: "Vitamin D & B12",
      m_satiety: "Satiety & Metabolic Index",
      egg_cooking_tip: "Clinical Tip: Consume eggs poached, soft-boiled, or cooked in pure mustard oil or coconut oil. Never fry in commercial soybean oil.",
      tag_heart_mind: "Cardio-Neuro Science",
      title_heart_mind: "Cardiovascular Longevity, Meditation & Inner Peace",
      desc_heart_mind: "Uncontrolled rage, chronic hyperarousal, and arrogance shear delicate arterial walls. Activate vagal tone and restore endothelial elasticity through mindfulness.",
      cardio_title: "Cardiovascular Mechanisms of Mindfulness",
      s1_t: "Vagus Nerve Stimulation:",
      s1_d: "Slowing down mental chatter triggers the parasympathetic nervous system, lowering resting cardiac workload and resting pulse rate.",
      s2_t: "Endothelial Nitric Oxide Release:",
      s2_d: "Deep diaphragmatic respiration stimulates endothelial nitric oxide synthase (eNOS), inducing vascular dilation and lowering systemic blood pressure.",
      s3_t: "Humility & Anger Attenuation (Emotional Detox):",
      s3_d: "Clinical and spiritual evidence shows that ego, resentment, and chronic irritability release destructive catecholamine surges. Humility preserves vascular softness.",
      breath_title: "2-Minute Cardiac Coherence Breathing",
      breath_desc: "Inhale and exhale synchronized with the visual rhythm below to normalize arterial tension:",
      breath_ready: "Get Ready",
      btn_start_breath: "Start Breathing Cycle",
      btn_reset_breath: "Reset",
      tag_myths: "Evidence-Based Mythbusters",
      title_myths: "Common Health Myths vs. Clinical Evidence",
      desc_myths: "Dispelling decades of misleading dietary advice with rigorous physiological evidence.",
      tag_myth_label: "Myth",
      badge_science_fact: "Scientific Fact",
      m1_q: "Does eating egg yolks cause arterial blockages and heart attacks?",
      m1_a: "Completely false. Robust clinical trials prove egg yolks increase protective HDL. Coronary plaque is driven by vascular endothelial inflammation from refined sugars and seed oils.",
      m2_q: "Is commercial vegetable oil (soybean/palm) plant-based and heart-healthy?",
      m2_a: "A marketing myth. Industrial seed oils are heavily processed with chemical solvents (hexane) at high temperatures, creating inflammatory trans-fats and lipid peroxides. Cold-pressed traditional fats are vastly superior.",
      m3_q: "Does consuming healthy fats make you overweight?",
      m3_a: "False. Dietary fats do not stimulate insulin secretion. Obesity is driven by high-glycemic carbohydrates and sugars that spike insulin, trapping energy in adipocytes.",
      m4_q: "Must hypertension or diabetes medication be taken for a lifetime?",
      m4_a: "Lifestyle medicine disproves this fatalism. Medications merely suppress symptoms. Correcting dietary triggers, incorporating 14-16 hours of daily autophagy, and daily walking allow patients to safely achieve disease remission under medical guidance.",
      m5_q: "Does skipping early breakfast cause gastric ulcers and slow metabolism?",
      m5_a: "Delaying breakfast until 9:30-10:00 AM activates cellular autophagy and intermittent lipid oxidation. The gastrointestinal tract receives restorative rest while insulin sensitivity sharpens.",

      // Fasting Tracker
      tag_fasting: "Nobel Prize Cellular Science",
      title_fasting: "Autophagy & Fasting Stage Live Tracker",
      desc_fasting: "14–16 hours of daily digestive rest stimulates cellular autophagy, recycling damaged proteins and senescent cells. Set your last meal time to track live cellular milestones.",
      lbl_last_meal: "Last Meal Finished At:",
      btn_fast_now: "Start Now",
      lbl_presets: "Presets:",
      preset_12h: "12 Hours Ago",
      preset_14h: "14 Hours Ago",
      preset_16h: "16 Hours Ago",
      lbl_fasting_elapsed: "Fast Elapsed",
      stage_1_badge: "Glycogen Depletion Phase",
      stage_2_badge: "Ketosis & Fat Oxidation",
      stage_3_badge: "Autophagy Peak Phase",
      stage_4_badge: "Deep Cellular Repair & HGH",
      stage_5_badge: "Stem Cell Renewal",
      btn_start_fast_timer: "Start Fasting Timer",
      btn_pause_fast_timer: "Pause Timer",
      btn_reset_fast_timer: "Reset",
      title_fasting_stages: "5 Sequential Biochemical Stages Inside Your Body",
      st1_title: "Blood Glucose Drop & Glycogen Depletion",
      st1_desc: "Insulin levels fall to baseline, circulating blood glucose is consumed, and hepatic glycogen stores are mobilized for clean cellular energy.",
      st2_title: "Ketone Generation & Fat Burning Switch",
      st2_desc: "Metabolism shifts from glucose to fatty acid oxidation. Ketone bodies enter circulation, enhancing neurocognitive clarity.",
      badge_autophagy_peak: "Autophagy Peak (Yoshinori Ohsumi Nobel Discovery)",
      st3_title: "Cellular Recycling & Senescent Waste Cleanup",
      st3_desc: "Intracellular lysosomes actively engulf damaged mitochondria, misfolded proteins, and vascular inflammatory debris, converting them into fresh amino acids.",
      st4_title: "Deep Insulin Resensitization & Growth Hormone",
      st4_desc: "Peripheral insulin resistance drops substantially. Human Growth Hormone (HGH) surges to preserve lean muscle while burning visceral fat.",
      st5_title: "Stem Cell Regeneration & Immune Reboot",
      st5_desc: "Intestinal mucosal barrier undergoes deep restoration and white blood cell reserves are rejuvenated.",

      // Lab Decoder
      tag_lab_decoder: "Metabolic Biomarker Decoder",
      title_lab_decoder: "Clinical Lab Report Decoder & South Asian Insulin Resistance",
      desc_lab_decoder: "BMI alone misses high visceral adiposity in South Asians (TOFI phenotype). Decode your Waist-to-Height Ratio, TG:HDL index, and blood biomarkers.",
      title_tofi: "1. South Asian 'Thin-Fat' (TOFI) & Visceral Adiposity Calculator",
      desc_tofi: "South Asians frequently harbour dangerous ectopic fat in the liver and viscera at normal body weight. Waist-to-Height Ratio (WHtR) exposes this hidden risk.",
      lbl_waist: "Waist Circumference (at navel, inches):",
      lbl_height: "Height (inches):",
      lbl_tg: "Triglycerides (TG mg/dL):",
      lbl_hdl: "HDL Cholesterol (mg/dL):",
      btn_calc_tofi: "Calculate Visceral Fat & Insulin Resistance",
      lbl_whtr: "Waist-to-Height Ratio (WHtR):",
      lbl_tg_hdl: "TG / HDL Ratio:",
      lbl_tyg: "TyG Insulin Index:",
      title_biomarkers: "2. Blood Biomarker Traffic-Light Evaluator",
      desc_biomarkers: "Enter your recent clinical laboratory metrics to receive an instant traffic-light assessment and evidence-based lifestyle antidotes.",
      lbl_bm_fbs: "Fasting Blood Sugar (FBS mg/dL):",
      lbl_bm_hba1c: "Glycated Hemoglobin (HbA1c %):",
      lbl_bm_insulin: "Fasting Serum Insulin (µIU/mL):",
      lbl_bm_hscrp: "Cardiovascular hs-CRP (mg/L):",
      lbl_bm_sgpt: "Liver ALT / SGPT Enzyme (U/L):",
      lbl_bm_vitd: "Serum 25(OH) Vitamin D3 (ng/mL):",
      lbl_bm_uric: "Serum Uric Acid (mg/dL):",
      btn_decode_biomarkers: "Analyze Lab Metrics & Generate Action Plan",
      title_biomarker_analysis: "Clinical Analysis & Lifestyle Intervention Protocol",

      // Plate Builder
      tag_plate: "Desi Anti-Inflammatory Nutrition",
      title_plate: "Bangladeshi Anti-Inflammatory Plate Builder & Budget Reset",
      desc_plate: "No expensive exotic superfoods needed. Local indigenous greens, seasonal fish, and cold-pressed mustard oil resolve endothelial inflammation cost-effectively.",
      title_plate_visual: "Optimal Therapeutic Plate (50% Vegetables + 25% Clean Protein + 25% Complex Carbs)",
      zone_veg: "50% Greens & Raw Salad",
      zone_protein: "25% Indigenous Protein",
      zone_carb: "25% Red Rice / Pulses",
      zone_fat: "Kachi Ghani Mustard Oil / Ghee",
      lbl_ai_score: "Anti-Inflammatory Score:",
      lbl_gi_load: "Glycemic Load:",
      lbl_fiber_content: "Dietary Fiber:",
      f_group_veg: "Select Vegetables & Greens (50%):",
      f_group_protein: "Select Clean Protein (25%):",
      f_group_carb: "Select Carbohydrate Source (25%):",
      title_detox: "🧪 Local Bazaar Produce Detox Protocol",
      desc_detox: "Scientific 3-step washing protocol to neutralize organophosphate pesticide residues and surface contaminants:",
      d_st1: "1. Running Tap Water Rinse: Wash thoroughly under flowing water for 3 minutes to remove surface grit and particulate matter.",
      d_st2: "2. Saline & Baking Soda Soak (15 min): Dissolve 1 tsp sea salt + 1 tsp sodium bicarbonate (baking soda) per liter of water. Soak for 15 minutes to hydrolyze acidic pesticides.",
      d_st3: "3. Final Clean Water Rinse: Remove produce and rinse once more in clean filtered water before cooking.",
      title_7day: "📅 7-Day Budget-Tiered Metabolic Reset Menu",
      tab_plan_village: "1. Low-Cost / Village Tier",
      tab_plan_family: "2. Standard Family Tier",
      tab_plan_executive: "3. Executive Tier",

      // Vagus Pacer
      tag_vagus: "Neuro-Cardiovascular Activation",
      title_vagus: "Vagus Nerve Stimulator & Heart Rate Variability (HRV) Breathing Bubble",
      desc_vagus: "Rhythmic slow breathing stimulates the parasympathetic vagus nerve, immediately attenuating adrenergic sympathetic tone and lowering acute blood pressure.",
      mode_478: "4-7-8 Relaxation (Deep Sleep Induction)",
      mode_box: "Box Breathing 4-4-4-4 (Mental Focus)",
      mode_resonant: "Coherence 5.5s (Maximum HRV Resonance)",
      lbl_sound_on: "Audio On",
      lbl_sound_off: "Audio Off",
      bubble_idle: "Ready to Begin",
      bubble_inhale: "Inhale Slowly Through Nose...",
      bubble_hold: "Hold Your Breath...",
      bubble_exhale: "Exhale Fully Through Mouth...",
      lbl_cycle_count: "Cycles Completed:",
      lbl_session_time: "Session Time:",
      lbl_vagal_tone: "Vagal Tone Response:",
      vagal_ready: "Ready",
      vagal_active: "Activating (Slowing Heart Rate)",
      vagal_deep: "Deep Parasympathetic State Achieved",
      btn_start_breathing: "Start Breathing Session",
      btn_pause_breathing: "Pause",
      btn_reset_breathing: "Reset",

      // Habit Tracker
      tag_habits: "Daily Consistency & Neuroplasticity",
      title_habits: "6-Pillar Daily Habit Loop & Consistency Streak Tracker",
      desc_habits: "Disease remission is not an overnight miracle—it is the compound effect of relentless daily micro-habits. Check off your 6 pillars daily.",
      title_daily_check: "Daily Health Checklist",
      lbl_streak_days: "Day Unbroken Streak",
      lbl_today_progress: "Today's Completion:",
      h1_title: "1. 14–16 Hour Intermittent Fasting Achieved",
      h1_desc: "Finish dinner by 8:00 PM and extend digestive fast until 10:00 AM next morning.",
      h2_title: "2. 45 Minutes Outdoor Brisk Walk & Sunlight",
      h2_desc: "Early morning aerobic movement for mitochondrial density and insulin sensitivity.",
      h3_title: "3. Zero Added Sugar & Zero Refined Seed Oils",
      h3_desc: "Strict avoidance of soybean/palm oil, sweets, and bakery flour goods.",
      h4_title: "4. 2.5 to 3 Liters Pure Water / Lemon Water",
      h4_desc: "Optimal cellular hydration and toxic metabolic clearance.",
      h5_title: "5. 10–15 Minutes Mindful Breathwork / Meditation",
      h5_desc: "Vagal nerve stimulation, downregulating chronic sympathetic distress.",
      h6_title: "6. In Bed Before 11:00 PM in Dark Environment",
      h6_desc: "Circadian melatonin synchronization for 7-8 hours restorative sleep.",
      lbl_last_7_days: "Past 7 Days Consistency:",
      btn_save_habits: "Save Today's Habits",
      msg_celebrate: "Congratulations! You have completed all 6 lifestyle pillars today! Your cellular self-healing is firing at peak biological potential.",

      // Doctor Passport
      tag_passport: "Clinical Integration",
      title_passport: "Doctor Discussion Sheet & Health Passport",
      desc_passport: "Present this consolidated summary to your attending physician during clinical consultations to guide safe, gradual medication de-escalation.",
      passport_card_title: "Metabolic Health Passport & Clinical Summary",
      passport_card_sub: "Preventive Lifestyle Medicine Self-Assessment Clinical Record",
      lbl_print_date: "Date:",
      pp_risk_pending: "Risk Tier: Pending Assessment",
      passport_col1_title: "1. Metabolic Indices & Lifestyle Status",
      pp_resilience: "Metabolic Resilience Score:",
      pp_fasting_status: "Daily Fasting Window:",
      pp_tofi_whtr: "Waist-to-Height Ratio (WHtR):",
      pp_tghdl: "TG / HDL Ratio:",
      pp_habit_streak: "Habit Consistency Streak:",
      pp_not_assessed: "Not Assessed",
      pp_fasting_desired: "14-16 Hours Desired",
      passport_col2_title: "2. Five Evidence-Based Questions for Your Physician",
      pp_q1: "\"I have eliminated added sugars and industrial seed oils while practicing 14h fasting and daily walking. As blood pressure and glucose normalize, how should we taper my prescription dosage?\"",
      pp_q2: "\"Given my Triglyceride-to-HDL ratio and waist circumference, what is my current grade of fatty liver and coronary endothelial risk?\"",
      pp_q3: "\"Should we monitor Fasting Serum Insulin (HOMA-IR) alongside HbA1c every 3 months to evaluate pancreatic beta-cell recovery?\"",
      pp_q4: "\"Do any of my current chronic medications have long-term hepatic or renal side effects that necessitate periodic biochemical monitoring?\"",
      pp_q5: "\"Can we establish a structured medical monitoring roadmap to safely de-prescribe medications as metabolic health normalizes?\"",
      btn_print_passport: "🖨️ Print / Save Doctor Sheet (PDF)",
      btn_copy_passport: "📋 Copy Text Summary"
    }
  };

  // Dev guard: the two locales must expose an identical key set.
  (function assertLocaleParity() {
    const bn = Object.keys(translations.bn);
    const en = Object.keys(translations.en);
    const missingInEn = bn.filter(k => !(k in translations.en));
    const missingInBn = en.filter(k => !(k in translations.bn));
    if (missingInEn.length || missingInBn.length) {
      console.warn('[i18n] locale key mismatch', { missingInEn, missingInBn });
    }
  })();

  let currentLang = 'bn';

  // --- Lightweight, accessible feedback: transient toast + inline field errors ---
  let toastTimer = null;
  function showToast(msg) {
    let el = document.getElementById('app-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'app-toast';
      el.className = 'app-toast';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3200);
  }

  function showFieldError(id, msg) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    if (typeof el.focus === 'function') el.focus();
  }
  function clearFieldError(id) {
    const el = document.getElementById(id);
    if (el) { el.hidden = true; el.textContent = ''; }
  }
  const t = (bn, en) => (currentLang === 'bn' ? bn : en);

  // Push a milestone message to the polite live region (#sr-live).
  let announceTimer = null;
  function announce(msg) {
    const el = document.getElementById('sr-live');
    if (!el) return;
    clearTimeout(announceTimer);
    el.textContent = '';
    announceTimer = setTimeout(() => { el.textContent = msg; }, 60);
  }

  // --- Session persistence (wrapped: private windows / disabled storage throw) ---
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const LS_ASSESS = 'health_assessment_answers';
  const LS_LAB = 'health_lab_inputs';
  const LS_PLATE = 'health_plate_chips';

  function persistAssessmentAnswers() {
    const form = document.getElementById('health-assessment-form');
    if (!form) return;
    const data = {};
    form.querySelectorAll('input[type="radio"]:checked').forEach(r => { data[r.name] = r.value; });
    store.set(LS_ASSESS, JSON.stringify(data));
  }
  function restoreAssessmentAnswers() {
    const raw = store.get(LS_ASSESS);
    if (!raw) return;
    let data;
    try { data = JSON.parse(raw); } catch (e) { return; }
    const form = document.getElementById('health-assessment-form');
    if (!form) return;
    let any = false;
    Object.entries(data).forEach(([name, val]) => {
      const input = form.querySelector(`input[name="${name}"][value="${val}"]`);
      if (input) { input.checked = true; any = true; }
    });
    if (any) executeHealthRiskAssessment(false);
  }

  function persistLabInputs() {
    const ids = ['input-waist', 'input-height', 'input-tg', 'input-hdl',
      'bm-fbs', 'bm-hba1c', 'bm-insulin', 'bm-hscrp', 'bm-sgpt', 'bm-vitd', 'bm-uric'];
    const data = {};
    ids.forEach(id => { const el = document.getElementById(id); if (el && el.value) data[id] = el.value; });
    store.set(LS_LAB, JSON.stringify(data));
  }
  function restoreLabInputs() {
    const raw = store.get(LS_LAB);
    if (!raw) return;
    let data;
    try { data = JSON.parse(raw); } catch (e) { return; }
    Object.entries(data).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.value = val;
    });
  }

  function persistPlateChips() {
    const active = [...document.querySelectorAll('.chip-toggle.active')]
      .map(c => c.getAttribute('data-name'));
    store.set(LS_PLATE, JSON.stringify(active));
  }
  function restorePlateChips() {
    const raw = store.get(LS_PLATE);
    if (!raw) return;
    let names;
    try { names = JSON.parse(raw); } catch (e) { return; }
    if (!Array.isArray(names) || !names.length) return;
    const chips = document.querySelectorAll('.chip-toggle');
    if (!chips.length) return;
    chips.forEach(c => c.classList.toggle('active', names.includes(c.getAttribute('data-name'))));
    if (typeof updatePlateMetrics === 'function') updatePlateMetrics();
  }

  function restoreSession() {
    restoreAssessmentAnswers();
    restoreLabInputs();
    restorePlateChips();
  }

  // --- WebMCP Global Action Registry ---
  window.WebMCP = {
    actions: {
      calculate_health_risk: () => executeHealthRiskAssessment(true),
      reset_assessment: () => resetAssessmentForm(),
      toggle_language: () => toggleLanguage(),
      toggle_theme: () => toggleTheme(),
      export_health_report: () => exportHealthReport(),
      filter_health_topics: (topic) => filterHealthTopic(topic),
      filter_oil_type: (cat) => filterOilType(cat),
      calculate_egg_protein: (count) => {
        const slider = document.getElementById('egg-range-slider');
        updateEggCalculator(parseInt(count, 10) || (slider ? parseInt(slider.value, 10) : 2));
      },
      start_breathing_exercise: () => startBreathingExercise(),
      reset_breathing_exercise: () => resetBreathingExercise(),
      toggle_myth_item: (param, el) => toggleMythItem(param, el),
      // New Suite Actions
      set_fast_start_now: () => setFastingStartNow(),
      toggle_fasting_timer: () => toggleFastingTimer(),
      reset_fasting_timer: () => resetFastingTimer(),
      calculate_insulin_resistance: () => calculateTofiIndices(),
      decode_biomarkers: () => decodeBiomarkers(),
      trigger_breathing_session: () => toggleVagusBreathing(),
      toggle_breathing_chime: () => toggleVagusAudio(),
      log_daily_habits: () => saveDailyHabits(),
      export_doctor_discussion_sheet: () => printDoctorPassport(),
      open_doctor_passport: () => scrollToPassport()
    },
    // sourceEl is the DOM element that triggered the action (when via a real click),
    // so element-scoped actions (e.g. toggle_myth_item) know which node to act on.
    dispatch: function(actionName, params, sourceEl) {
      if (typeof this.actions[actionName] === 'function') {
        return this.actions[actionName](params, sourceEl);
      } else {
        console.warn(`[WebMCP] Action "${actionName}" not found.`);
      }
    }
  };

  // --- Initial Setup on DOM Load ---
  document.addEventListener('DOMContentLoaded', () => {
    initNavigationSystem();
    initLanguage();
    initTheme();
    initAssessmentEvents();
    initDiseaseReversalTabs();
    initOilFilters();
    initEggCalculator();
    initBreathingExercise();
    initMythbustersAccordion();
    // Initialize 6 New Interactive Modules
    initFastingTracker();
    initLabDecoder();
    initPlateBuilder();
    initVagusPacer();
    initHabitTracker();
    initDoctorPassport();
    initWebMCPEvents();
    initAnchorNavigation();
    restoreSession();
  });

  // --- In-page anchor navigation -------------------------------------------
  // Offset is handled entirely by `scroll-padding-top` on <html>; this only
  // opens the right tab/accordion when a deep link points inside one.
  function revealTarget(id) {
    const tabBtn = document.getElementById('tab-' + id) ||
      document.querySelector(`.tab-btn[aria-controls="${id}"], .tab-btn[data-tab="${id}"]`);
    if (tabBtn && typeof filterHealthTopic === 'function') {
      filterHealthTopic(tabBtn.getAttribute('data-tab'));
    }
    const mythItem = document.getElementById(id)?.closest?.('.myth-item');
    if (mythItem && !mythItem.classList.contains('active')) {
      toggleMythItem(null, mythItem.querySelector('.myth-header'));
    }
  }

  function initAnchorNavigation() {
    // native smooth scroll + scroll-padding-top do the work; we just keep the
    // hash in the URL and reveal collapsed targets
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link || link.getAttribute('href') === '#') return;
      revealTarget(link.getAttribute('href').slice(1));
    });
    window.addEventListener('hashchange', () => revealTarget(location.hash.slice(1)));
    if (location.hash && location.hash.length > 1) {
      const id = location.hash.slice(1);
      revealTarget(id);
      // re-jump once webfonts have settled so the target isn't left mid-page by FOUT reflow
      const jump = () => document.getElementById(id)?.scrollIntoView({ block: 'start' });
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(jump, 50));
      } else {
        setTimeout(jump, 300);
      }
    }
  }

  // --- Professional Navigation System ---
  function initNavigationSystem() {
    // 1. Dropdown disclosure (click + keyboard)
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(drop => {
      const trigger = drop.querySelector('.nav-dropdown-trigger');
      if (!trigger) return;
      const items = () => [...drop.querySelectorAll('.dropdown-item')];

      const open = (focusFirst) => {
        closeAllDropdowns();
        drop.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        if (focusFirst) items()[0]?.focus();
      };
      const close = (focusTrigger) => {
        drop.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        if (focusTrigger) trigger.focus();
      };

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        drop.classList.contains('is-open') ? close(false) : open(false);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); open(true); }
        else if (e.key === 'Escape') close(false);
      });

      drop.querySelector('.dropdown-flyout')?.addEventListener('keydown', (e) => {
        const list = items();
        const i = list.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); list[Math.min(i + 1, list.length - 1)]?.focus(); }
        else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (i <= 0) close(true); else list[i - 1].focus();
        }
        else if (e.key === 'Escape') { e.preventDefault(); close(true); }
        else if (e.key === 'Tab') close(false);
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        closeAllDropdowns();
      }
    });

    // Close on Escape key (drawer + any stray dropdown)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
        closeMobileDrawer();
      }
    });

    // 2. Mobile Drawer Toggle
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const closeDrawerBtn = document.getElementById('btn-close-drawer');

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeMobileDrawer);
    }

    // Close drawer when clicking any link inside it
    if (mobileDrawer) {
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileDrawer);
      });
    }

    // 3. Header Elevate on Scroll (rAF-throttled)
    const header = document.getElementById('site-header');
    if (header) {
      let ticking = false;
      const syncHeader = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
        ticking = false;
      };
      window.addEventListener('scroll', () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(syncHeader);
        }
      }, { passive: true });
      syncHeader();
    }

    // 4. Scroll-spy: mark the nav entry for the section currently in view
    initScrollSpy();
  }

  // --- Scroll-spy — reflects the active section on desktop triggers + mobile links ---
  function initScrollSpy() {
    const sectionIds = [
      'assessment-section', 'prescription-section', 'fasting-tracker', 'lab-decoder',
      'disease-reversal', 'cooking-oil-section', 'egg-nutrition-section', 'plate-builder',
      'heart-mind-section', 'vagus-pacer', 'mythbusters-section', 'habit-tracker', 'doctor-passport'
    ];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;

    let activeId = null;
    const setActive = id => {
      if (id === activeId) return;
      activeId = id;
      document.querySelectorAll('[aria-current="true"]').forEach(a => a.removeAttribute('aria-current'));
      document.querySelectorAll('.nav-dropdown-trigger[data-section-active]')
        .forEach(t => t.removeAttribute('data-section-active'));
      document.querySelectorAll(
        `.nav-clinical-menu a[href="#${id}"], .mobile-nav-drawer a[href="#${id}"], .nav-passport-pill[href="#${id}"]`
      ).forEach(a => a.setAttribute('aria-current', 'true'));
      document.querySelector(`.nav-dropdown a[href="#${id}"]`)
        ?.closest('.nav-dropdown')
        ?.querySelector('.nav-dropdown-trigger')
        ?.setAttribute('data-section-active', 'true');
    };

    // "Active" = the last section whose top has scrolled above a line just below
    // the sticky header. Recomputed on a rAF-throttled scroll (robust for tall
    // sections where intersectionRatio is misleading).
    let ticking = false;
    const sync = () => {
      ticking = false;
      const line = 120; // just under the sticky header
      let current = sections[0];
      for (const s of sections) {
        if (s.getBoundingClientRect().top - line <= 0) current = s;
      }
      // near the very bottom, force the last section active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sections[sections.length - 1];
      }
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(sync); }
    }, { passive: true });
    sync();
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.nav-dropdown').forEach(drop => {
      drop.classList.remove('is-open');
      const trigger = drop.querySelector('.nav-dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  let drawerTrapHandler = null;

  function openMobileDrawer() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (!drawer) return;

    drawer.classList.add('is-open');
    drawer.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    if (mobileToggle) {
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }

    const focusables = () => [...drawer.querySelectorAll('a[href], button:not([disabled])')];
    // Let visibility flip before moving focus so .focus() actually lands
    setTimeout(() => {
      (document.getElementById('btn-close-drawer') || focusables()[0])?.focus();
    }, 30);

    drawerTrapHandler = (e) => {
      if (e.key !== 'Tab') return;
      const f = focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    drawer.addEventListener('keydown', drawerTrapHandler);
  }

  function closeMobileDrawer() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) {
      const wasOpen = drawer.classList.contains('is-open');
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (drawerTrapHandler) {
        drawer.removeEventListener('keydown', drawerTrapHandler);
        drawerTrapHandler = null;
      }
      if (wasOpen && mobileToggle) mobileToggle.focus();
    }
    if (mobileToggle) {
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  // --- Language Management ---
  function initLanguage() {
    const savedLang = localStorage.getItem('site_lang') || 'bn';
    setLanguage(savedLang);
    // #lang-toggle-btn carries data-mcp-action="toggle_language" — dispatched by initWebMCPEvents()
  }

  function toggleLanguage() {
    const newLang = currentLang === 'bn' ? 'en' : 'bn';
    setLanguage(newLang);
  }

  const PAGE_META = {
    bn: {
      title: 'সুস্থ থাকার বৈজ্ঞানিক লাইফস্টাইল ও স্বাস্থ্যঝুঁকি মূল্যায়ন | Preventive Lifestyle Medicine',
      desc: 'প্রিভেন্টিভ লাইফস্টাইল মেডিসিন ও মেটাবলিক স্বাস্থ্যবিজ্ঞানের আলোকে আপনার স্বাস্থ্যঝুঁকি নির্ণয় করুন এবং ডায়াবেটিস, প্রেশার ও হৃদরোগ প্রতিরোধে সঠিক জীবনযাত্রা গ্রহণ করুন।'
    },
    en: {
      title: 'Preventive Lifestyle Medicine & Metabolic Health Risk Assessment',
      desc: 'Assess your metabolic health risk with evidence-informed preventive cardiology and lifestyle medicine tools — interactive risk score, autophagy fasting tracker, and clinical lab decoder.'
    }
  };

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;

    const meta = PAGE_META[lang] || PAGE_META.bn;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.desc);

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'bn' ? 'English' : 'বাংলা';
    }

    // Apply translations
    const dict = translations[lang] || translations.bn;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Re-render score details if already calculated
    updateCalculatedDisplay();

    // Re-render new interactive modules
    if (typeof updateFastingDisplay === 'function') updateFastingDisplay();
    if (typeof updatePlateMetrics === 'function') updatePlateMetrics();
    if (typeof updateHabitProgress === 'function') updateHabitProgress(false);
    if (typeof updatePassportState === 'function') updatePassportState();
  }

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem('site_theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    // #theme-toggle-btn carries data-mcp-action="toggle_theme" — dispatched by initWebMCPEvents()
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site_theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // --- Assessment Form & Scoring Engine ---
  let lastScoreData = null;

  function initAssessmentEvents() {
    const form = document.getElementById('health-assessment-form');
    // #submit-assessment-btn / #reset-assessment-btn / #print-presc-btn carry data-mcp-action
    // attributes and are dispatched by initWebMCPEvents().

    // Dynamic update + persistence when any radio button changes
    if (form) {
      form.addEventListener('change', () => {
        executeHealthRiskAssessment(false); // soft calculate without scroll
        if (typeof persistAssessmentAnswers === 'function') persistAssessmentAnswers();
      });
    }
  }

  function executeHealthRiskAssessment(shouldScroll = true) {
    const form = document.getElementById('health-assessment-form');
    if (!form) return;

    const fields = ['sugar_intake', 'oil_type', 'fasting_window', 'physical_movement', 'sleep_quality', 'stress_symptoms'];
    let totalRisk = 0;
    let answeredCount = 0;
    const values = {};

    fields.forEach(field => {
      const checked = form.querySelector(`input[name="${field}"]:checked`);
      if (checked) {
        const val = parseInt(checked.value, 10);
        values[field] = val;
        totalRisk += val;
        answeredCount++;
      } else {
        values[field] = null;
      }
    });

    if (answeredCount === 0) {
      if (shouldScroll) showFieldError('assessment-error', t('অনুগ্রহ করে অন্তত কয়েকটি প্রশ্নের উত্তর নির্বাচন করুন।', 'Please answer at least a few questions to run the analysis.'));
      return;
    }

    // Maximum risk score is 120 points (6 questions * 20 max each)
    // Resilience Score: 100 - ((totalRisk / 120) * 100)
    const resilienceScore = Math.max(5, Math.round(100 - (totalRisk / 120) * 100));

    lastScoreData = {
      resilienceScore,
      totalRisk,
      values,
      answeredCount
    };

    updateCalculatedDisplay();

    if (shouldScroll) {
      const badge = document.getElementById('risk-badge');
      const tier = document.getElementById('score-tier-text');
      announce(t(
        `আপনার মেটাবলিক রেজিলিয়েন্স স্কোর ${convertToBanglaNumber(resilienceScore)}। ${badge ? badge.textContent : ''}. ${tier ? tier.textContent : ''}`,
        `Your metabolic resilience score is ${resilienceScore}. ${badge ? badge.textContent : ''}. ${tier ? tier.textContent : ''}`
      ));
      if (answeredCount >= 4) {
        const jumpBtn = document.getElementById('jump-to-plan-btn');
        if (jumpBtn) jumpBtn.style.display = 'inline-flex';
      }
    }

    return lastScoreData;
  }

  function updateCalculatedDisplay() {
    if (!lastScoreData) return;

    const { resilienceScore, values } = lastScoreData;
    const isBn = currentLang === 'bn';

    // Elements
    const scoreNumEl = document.getElementById('resilience-score');
    const gaugeBar = document.getElementById('gauge-progress');
    const badgeEl = document.getElementById('risk-badge');
    const tierTextEl = document.getElementById('score-tier-text');
    const valRiskLevel = document.getElementById('val-risk-level');
    const valAutophagy = document.getElementById('val-autophagy');
    const valInflammation = document.getElementById('val-inflammation');
    const prescSummary = document.getElementById('prescription-summary');

    // Update gauge
    // Circumference = 2 * PI * 42 ~= 263.89
    const maxOffset = 264;
    const offset = maxOffset - (maxOffset * (resilienceScore / 100));
    if (gaugeBar) {
      gaugeBar.style.strokeDashoffset = offset;
    }

    if (scoreNumEl) {
      scoreNumEl.textContent = isBn ? convertToBanglaNumber(resilienceScore) : resilienceScore;
    }

    // Tier Classification
    let tierClass = '';
    let badgeText = '';
    let tierText = '';
    let autophagyStatus = '';
    let inflammationStatus = '';
    let summaryText = '';

    if (resilienceScore >= 80) {
      tierClass = 'badge-low-risk';
      badgeText = isBn ? 'সর্বোচ্চ স্বাস্থ্য সুরক্ষা (Low Risk)' : 'High Resilience (Low Risk)';
      tierText = isBn ? 'আপনার বর্তমান খাদ্যাভ্যাস ও রুটিন শরীরের মেটাবলিক ভারসাম্য চমৎকারভাবে বজায় রাখছে।' : 'Your lifestyle habits are providing optimal metabolic and cellular protection.';
      if (gaugeBar) gaugeBar.style.stroke = 'var(--success)';
    } else if (resilienceScore >= 50) {
      tierClass = 'badge-med-risk';
      badgeText = isBn ? 'মাঝারি স্বাস্থ্যঝুঁকি (Moderate Risk)' : 'Moderate Vulnerability';
      tierText = isBn ? 'আপনার খাদ্যাভ্যাস ও রুটিনে কিছু মারাত্মক ত্রুটি রয়েছে যা ভবিষ্যতের ক্রনিক রোগের দিকে ঠেলে দিচ্ছে।' : 'Subtle metabolic stresses are present; proactive adjustments are recommended.';
      if (gaugeBar) gaugeBar.style.stroke = 'var(--warning)';
    } else {
      tierClass = 'badge-high-risk';
      badgeText = isBn ? 'তীব্র স্বাস্থ্যঝুঁকি (High Risk - ৯৯% ঝুঁকিতে)' : 'High Metabolic Risk (Vulnerable)';
      tierText = isBn ? 'সতর্কতা: আধুনিক গবেষণায় প্রাপ্ত ৯৯% ঝুঁকিপূর্ণ জীবনযাত্রার মধ্যে আপনার অভ্যাসগুলো অন্তর্ভুক্ত।' : 'Warning: High vulnerability to hyperinsulinemia, hypertension, and arterial inflammation.';
      if (gaugeBar) gaugeBar.style.stroke = 'var(--danger)';
    }

    // Autophagy evaluation
    if (values.fasting_window === 0) {
      autophagyStatus = isBn ? 'সক্রিয় (প্রতি রাতে কোষ নিরাময়)' : 'Active (Restorative Daily Autophagy)';
    } else if (values.fasting_window === 10) {
      autophagyStatus = isBn ? 'আংশিক (১০-১২ ঘণ্টা)' : 'Partial (10-12 hr Window)';
    } else {
      autophagyStatus = isBn ? 'সম্পূর্ণ নিষ্ক্রিয় (চর্বি জমা হচ্ছে)' : 'Inactive (Halting Cellular Repair)';
    }

    // Vascular Inflammation evaluation
    if (values.oil_type === 0 && values.sugar_intake === 0) {
      inflammationStatus = isBn ? 'নিম্ন প্রদাহ (রক্তনালী সুরক্ষিত)' : 'Low Vascular Inflammation';
    } else if (values.oil_type === 20 || values.sugar_intake === 20) {
      inflammationStatus = isBn ? 'তীব্র প্রদাহের আশঙ্কা (উচ্চ ঝুঁকির তেল/চিনি)' : 'High Arterial Inflammation Risk';
    } else {
      inflammationStatus = isBn ? 'মাঝারি ঝুঁকি (নজরদারি প্রয়োজন)' : 'Moderate Endothelial Stress';
    }

    // Summary callout
    if (resilienceScore >= 80) {
      summaryText = isBn 
        ? 'চমৎকার! বর্তমান অভ্যাসগুলো বজায় রাখুন এবং নিচে আপনার দীর্ঘায়ুর দৈনিক রুটিন যাচাই করে নিন।'
        : 'Excellent resilience! Maintain your whole-food and movement routine.';
    } else {
      summaryText = isBn
        ? 'বিজ্ঞানসম্মত লাইফস্টাইল রিভার্সাল প্রেসক্রিপশন অনুযায়ী সয়াবিন তেল, চিনি ও গভীর রাতের খাবার বাদ দিয়ে স্বাভাবিক ছন্দে ফিরুন।'
        : 'Immediate lifestyle reversal recommended: eliminate seed oils, stop late dining, and introduce daily walking.';
    }

    if (badgeEl) {
      badgeEl.className = `badge-status ${tierClass}`;
      badgeEl.textContent = badgeText;
    }
    if (tierTextEl) tierTextEl.textContent = tierText;
    if (valRiskLevel) valRiskLevel.textContent = badgeText;
    if (valAutophagy) valAutophagy.textContent = autophagyStatus;
    if (valInflammation) valInflammation.textContent = inflammationStatus;
    if (prescSummary) prescSummary.textContent = summaryText;

    if (typeof updatePassportState === 'function') {
      updatePassportState();
    }
  }

  function resetAssessmentForm() {
    const form = document.getElementById('health-assessment-form');
    if (form) form.reset();
    store.del(LS_ASSESS);
    clearFieldError('assessment-error');

    lastScoreData = null;

    const scoreNumEl = document.getElementById('resilience-score');
    const gaugeBar = document.getElementById('gauge-progress');
    const badgeEl = document.getElementById('risk-badge');
    const tierTextEl = document.getElementById('score-tier-text');
    const valRiskLevel = document.getElementById('val-risk-level');
    const valAutophagy = document.getElementById('val-autophagy');
    const valInflammation = document.getElementById('val-inflammation');
    const prescSummary = document.getElementById('prescription-summary');
    const jumpBtn = document.getElementById('jump-to-plan-btn');

    if (gaugeBar) {
      gaugeBar.style.strokeDashoffset = 264;
      gaugeBar.style.stroke = 'var(--primary)';
    }
    if (scoreNumEl) scoreNumEl.textContent = '--';
    if (badgeEl) {
      badgeEl.className = 'badge-status';
      badgeEl.textContent = currentLang === 'bn' ? 'ফলাফলের অপেক্ষায়' : 'Awaiting Assessment';
    }
    if (tierTextEl) {
      tierTextEl.textContent = currentLang === 'bn' ? 'প্রশ্নগুলোর উত্তর প্রদান করে আপনার স্কোর জেনে নিন' : 'Complete the 6 diagnostic questions to reveal your score';
    }
    if (valRiskLevel) valRiskLevel.textContent = '--';
    if (valAutophagy) valAutophagy.textContent = '--';
    if (valInflammation) valInflammation.textContent = '--';
    if (prescSummary) {
      prescSummary.textContent = currentLang === 'bn' 
        ? 'মূল্যায়ন সম্পন্ন হলে নিচে আপনার জন্য সুনির্দিষ্ট বৈজ্ঞানিক লাইফস্টাইল প্রেসক্রিপশন তৈরি হবে।'
        : 'Upon assessment completion, a personalized clinical lifestyle prescription will be generated below.';
    }
    if (jumpBtn) jumpBtn.style.display = 'none';
  }

  // --- Disease Reversal Tab Switcher (ARIA tablist + keyboard) ---
  function initDiseaseReversalTabs() {
    const tablist = document.querySelector('.reversal-tabs');
    if (tablist) enableTablistKeys(tablist, topic => filterHealthTopic(topic), 'data-tab');
    // Click routes through data-mcp-action="filter_health_topics" -> filterHealthTopic()
  }

  function filterHealthTopic(topic) {
    document.querySelectorAll('.tab-btn').forEach(t => {
      const on = t.getAttribute('data-tab') === topic;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll('.reversal-tab-content').forEach(c => {
      const on = c.id === `tab-content-${topic}`;
      c.classList.toggle('active', on);
      c.hidden = !on;
    });
  }

  /* Arrow-key navigation for a role="tablist". `select` receives the value of
     `attr` on the focused tab; tabs are the direct role="tab" children. */
  function enableTablistKeys(tablist, select, attr) {
    const tabs = () => [...tablist.querySelectorAll('[role="tab"]')];
    tablist.addEventListener('keydown', (e) => {
      const list = tabs();
      const i = list.indexOf(document.activeElement);
      if (i < 0) return;
      let next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = list[(i + 1) % list.length];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = list[(i - 1 + list.length) % list.length];
      else if (e.key === 'Home') next = list[0];
      else if (e.key === 'End') next = list[list.length - 1];
      if (!next) return;
      e.preventDefault();
      next.focus();
      select(next.getAttribute(attr));
    });
  }

  // --- Print / Export Action ---
  function exportHealthReport() {
    printScoped('printing-rx');
  }

  // Print one card cleanly: scope the print stylesheet with a body class, then clear it.
  function printScoped(mode) {
    const body = document.body;
    body.classList.add(mode);
    const cleanup = () => {
      body.classList.remove('printing-rx', 'printing-passport');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    // Fallback for browsers that never fire afterprint
    setTimeout(cleanup, 1000);
    window.print();
  }

  // --- Helper: Convert Number to Bangla Digits ---
  function convertToBanglaNumber(num) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).split('').map(d => bnDigits[d] !== undefined ? bnDigits[d] : d).join('');
  }

  // --- Module 1: Oil Matrix Filter Controller ---
  function initOilFilters() {
    // .filter-chip buttons carry data-mcp-action="filter_oil_type" -> filterOilType()
    const bar = document.querySelector('.filter-controls-bar');
    if (bar) {
      bar.setAttribute('role', 'group');
      bar.setAttribute('aria-label', currentLang === 'bn' ? 'ভোজ্যতেল ফিল্টার' : 'Cooking oil filter');
    }
  }

  function filterOilType(category) {
    if (!category) return;
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(c => {
      const on = c.getAttribute('data-oil-filter') === category;
      c.classList.toggle('active', on);
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    const cards = document.querySelectorAll('.oil-card');
    let shown = 0;
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      const on = category === 'all' || cardCat === category;
      card.style.display = on ? 'flex' : 'none';
      if (on) {
        card.style.animation = 'fadeIn 0.35s ease';
        shown++;
      }
    });
    announce(t(`${convertToBanglaNumber(shown)}টি ভোজ্যতেল দেখানো হচ্ছে।`, `Showing ${shown} cooking oils.`));
  }

  // --- Module 2: Egg Nutrition Calculator ---
  function initEggCalculator() {
    const slider = document.getElementById('egg-range-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        updateEggCalculator(parseInt(e.target.value, 10));
      });
      updateEggCalculator(2);
    }
  }

  function updateEggCalculator(count) {
    if (!count) {
      const slider = document.getElementById('egg-range-slider');
      count = slider ? parseInt(slider.value, 10) : 2;
    }

    const isBn = currentLang === 'bn';
    const displayCountEl = document.getElementById('egg-count-display');
    const proteinEl = document.getElementById('egg-val-protein');
    const cholineEl = document.getElementById('egg-val-choline');
    const vitEl = document.getElementById('egg-val-vit');
    const satietyEl = document.getElementById('egg-val-satiety');

    // Stats: ~6.3g protein, ~145mg choline, ~41 IU vit D per egg
    const protein = (count * 6.3).toFixed(1);
    const choline = Math.round(count * 145);
    const vitD = Math.round(count * 41);
    const satiety = Math.min(99, 70 + (count * 6));

    if (displayCountEl) {
      displayCountEl.textContent = isBn ? `${convertToBanglaNumber(count)} টি ডিম` : `${count} Egg${count > 1 ? 's' : ''}`;
    }
    if (proteinEl) {
      proteinEl.textContent = isBn ? `${convertToBanglaNumber(protein)} গ্রাম` : `${protein} g`;
    }
    if (cholineEl) {
      cholineEl.textContent = isBn ? `${convertToBanglaNumber(choline)} মিলিগ্রাম` : `${choline} mg`;
    }
    if (vitEl) {
      vitEl.textContent = isBn ? `${convertToBanglaNumber(vitD)} আইইউ` : `${vitD} IU`;
    }
    if (satietyEl) {
      satietyEl.textContent = isBn ? `${convertToBanglaNumber(satiety)}% উচ্চ` : `${satiety}% High`;
    }
  }

  // --- Module 3: Heart & Meditation Breathing Timer ---
  let breathInterval = null;
  let breathTimeRemaining = 120; // 2 minutes
  let breathRunning = false;

  function initBreathingExercise() {
    const startBtn = document.getElementById('start-breath-btn');
    const resetBtn = document.getElementById('reset-breath-btn');

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (!breathRunning) {
          startBreathingExercise();
        } else {
          pauseBreathingExercise();
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetBreathingExercise();
      });
    }
  }

  function startBreathingExercise() {
    const startBtn = document.getElementById('start-breath-btn');
    const circle = document.getElementById('breath-circle');
    const instEl = document.getElementById('breath-instruction');
    const timerEl = document.getElementById('breath-timer-count');
    const isBn = currentLang === 'bn';

    breathRunning = true;
    if (startBtn) {
      startBtn.innerHTML = `<span class="btn-icon">⏸</span> <span>${isBn ? 'বিরতি দিন' : 'Pause'}</span>`;
    }

    let cycleStep = 0; // 0: inhale (4s), 1: hold (4s), 2: exhale (4s), 3: hold (4s)
    let cycleSec = 0;

    runCycleStep();

    breathInterval = setInterval(() => {
      breathTimeRemaining--;
      cycleSec++;

      if (cycleSec >= 4) {
        cycleSec = 0;
        cycleStep = (cycleStep + 1) % 4;
        runCycleStep();
      }

      const mins = Math.floor(breathTimeRemaining / 60);
      const secs = breathTimeRemaining % 60;
      const formattedTime = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
      if (timerEl) {
        timerEl.textContent = isBn ? convertToBanglaNumber(formattedTime) : formattedTime;
      }

      if (breathTimeRemaining <= 0) {
        resetBreathingExercise();
        if (instEl) {
          instEl.textContent = isBn ? 'দমচর্চা সম্পন্ন!' : 'Session Complete!';
        }
      }
    }, 1000);

    function runCycleStep() {
      if (!circle || !instEl) return;
      circle.className = 'breath-circle';

      if (cycleStep === 0) {
        circle.classList.add('inhale');
        instEl.textContent = isBn ? 'শ্বাস নিন (৪ সে.)' : 'Inhale (4s)';
      } else if (cycleStep === 1) {
        circle.classList.add('hold');
        instEl.textContent = isBn ? 'শ্বাস ধরে রাখুন (৪ সে.)' : 'Hold (4s)';
      } else if (cycleStep === 2) {
        circle.classList.add('exhale');
        instEl.textContent = isBn ? 'ধীরে শ্বাস ছাড়ুন (৪ সে.)' : 'Exhale (4s)';
      } else {
        circle.classList.add('hold');
        instEl.textContent = isBn ? 'প্রশান্ত থাকুন (৪ সে.)' : 'Relax (4s)';
      }
    }
  }

  function pauseBreathingExercise() {
    breathRunning = false;
    clearInterval(breathInterval);
    const startBtn = document.getElementById('start-breath-btn');
    const isBn = currentLang === 'bn';
    if (startBtn) {
      startBtn.innerHTML = `<span class="btn-icon">▶</span> <span>${isBn ? 'চালু রাখুন' : 'Resume'}</span>`;
    }
  }

  function resetBreathingExercise() {
    breathRunning = false;
    clearInterval(breathInterval);
    breathTimeRemaining = 120;

    const startBtn = document.getElementById('start-breath-btn');
    const circle = document.getElementById('breath-circle');
    const instEl = document.getElementById('breath-instruction');
    const timerEl = document.getElementById('breath-timer-count');
    const isBn = currentLang === 'bn';

    if (circle) circle.className = 'breath-circle';
    if (instEl) instEl.textContent = isBn ? 'প্রস্তুত হন' : 'Get Ready';
    if (timerEl) timerEl.textContent = isBn ? '০২:০০' : '02:00';
    if (startBtn) {
      startBtn.innerHTML = `<span class="btn-icon">▶</span> <span>${isBn ? 'দমচর্চা শুরু করুন' : 'Start Breathing Cycle'}</span>`;
    }
  }

  // --- Module 4: Mythbusters Accordion ---
  function initMythbustersAccordion() {
    // Click routes through data-mcp-action="toggle_myth_item" on each .myth-header button.
    document.querySelectorAll('.myth-header').forEach(btn => {
      const open = btn.closest('.myth-item').classList.contains('active');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function toggleMythItem(param, sourceEl) {
    // sourceEl set when triggered by a real click; param ('1'..'5') when called programmatically
    let btn = sourceEl && sourceEl.closest('.myth-header');
    if (!btn && param != null) {
      btn = document.getElementById('myth-header-' + param) ||
            document.querySelectorAll('.myth-header')[parseInt(param, 10) - 1];
    }
    const item = btn ? btn.closest('.myth-item') : null;
    if (!item) return;

    const willOpen = !item.classList.contains('active');
    // Single-open accordion
    document.querySelectorAll('.myth-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.myth-header')?.setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  // =========================================================================
  // UTILITY: Localized Numbers & Date Formatting
  // =========================================================================
  function convertToBanglaNumber(num) {
    if (num === null || num === undefined) return '';
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).replace(/[0-9]/g, digit => banglaDigits[parseInt(digit, 10)]);
  }

  function formatLocalNumber(num) {
    return currentLang === 'bn' ? convertToBanglaNumber(num) : String(num);
  }

  // =========================================================================
  // MODULE 5: Autophagy & Intermittent Fasting Live Stage Tracker
  // =========================================================================
  let fastingInterval = null;
  let fastingStartTime = null;
  let fastingIsRunning = false;
  let lastFastingStage = 0;
  const FASTING_TARGET_HOURS = 16;
  const FASTING_GAUGE_CIRCUMFERENCE = 565.48; // 2 * PI * 90

  function initFastingTracker() {
    const timeInput = document.getElementById('last-meal-time');
    const fastNowBtn = document.getElementById('btn-fast-now');
    const toggleBtn = document.getElementById('btn-toggle-fasting');
    const resetBtn = document.getElementById('btn-reset-fasting');
    const presetChips = document.querySelectorAll('.chip-btn[data-preset-hours]');

    // Restore saved fasting start time if present
    const savedStart = localStorage.getItem('health_fasting_start');
    const wasRunning = localStorage.getItem('health_fasting_running') === 'true';

    if (savedStart) {
      fastingStartTime = new Date(parseInt(savedStart, 10));
      if (timeInput) {
        timeInput.value = formatDateTimeLocal(fastingStartTime);
      }
    } else {
      // Default: 14 hours ago for an immediate satisfying demonstration
      const defaultStart = new Date(Date.now() - 14 * 3600 * 1000);
      fastingStartTime = defaultStart;
      if (timeInput) {
        timeInput.value = formatDateTimeLocal(defaultStart);
      }
    }

    if (timeInput) {
      timeInput.addEventListener('change', (e) => {
        if (e.target.value) {
          fastingStartTime = new Date(e.target.value);
          localStorage.setItem('health_fasting_start', fastingStartTime.getTime().toString());
          updateFastingDisplay();
        }
      });
    }

    if (fastNowBtn) {
      fastNowBtn.addEventListener('click', () => {
        setFastingStartNow();
      });
    }

    presetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const hours = parseFloat(chip.getAttribute('data-preset-hours')) || 14;
        fastingStartTime = new Date(Date.now() - hours * 3600 * 1000);
        localStorage.setItem('health_fasting_start', fastingStartTime.getTime().toString());
        if (timeInput) {
          timeInput.value = formatDateTimeLocal(fastingStartTime);
        }
        updateFastingDisplay();
      });
    });

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        toggleFastingTimer();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetFastingTimer();
      });
    }

    // Auto-resume if active
    if (wasRunning) {
      startFastingTimer();
    } else {
      updateFastingDisplay();
    }
  }

  function formatDateTimeLocal(date) {
    const pad = num => String(num).padStart(2, '0');
    const yyyy = date.getFullYear();
    const mm = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const min = pad(date.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
  }

  function setFastingStartNow() {
    fastingStartTime = new Date();
    localStorage.setItem('health_fasting_start', fastingStartTime.getTime().toString());
    const timeInput = document.getElementById('last-meal-time');
    if (timeInput) {
      timeInput.value = formatDateTimeLocal(fastingStartTime);
    }
    if (!fastingIsRunning) {
      startFastingTimer();
    } else {
      updateFastingDisplay();
    }
  }

  function toggleFastingTimer() {
    if (fastingIsRunning) {
      pauseFastingTimer();
    } else {
      startFastingTimer();
    }
  }

  function startFastingTimer() {
    if (!fastingStartTime) {
      fastingStartTime = new Date();
      localStorage.setItem('health_fasting_start', fastingStartTime.getTime().toString());
    }
    fastingIsRunning = true;
    localStorage.setItem('health_fasting_running', 'true');

    const toggleBtn = document.getElementById('btn-toggle-fasting');
    if (toggleBtn) {
      toggleBtn.textContent = currentLang === 'bn' ? '⏸ টাইমার থামান' : '⏸ Pause Timer';
    }

    if (fastingInterval) clearInterval(fastingInterval);
    fastingInterval = setInterval(updateFastingDisplay, 1000);
    updateFastingDisplay();
  }

  function pauseFastingTimer() {
    fastingIsRunning = false;
    localStorage.setItem('health_fasting_running', 'false');
    if (fastingInterval) clearInterval(fastingInterval);

    const toggleBtn = document.getElementById('btn-toggle-fasting');
    if (toggleBtn) {
      toggleBtn.textContent = currentLang === 'bn' ? '▶ পুনরায় চালু করুন' : '▶ Resume Timer';
    }
  }

  function resetFastingTimer() {
    pauseFastingTimer();
    fastingStartTime = new Date();
    localStorage.setItem('health_fasting_start', fastingStartTime.getTime().toString());
    const timeInput = document.getElementById('last-meal-time');
    if (timeInput) {
      timeInput.value = formatDateTimeLocal(fastingStartTime);
    }
    const toggleBtn = document.getElementById('btn-toggle-fasting');
    if (toggleBtn) {
      toggleBtn.textContent = currentLang === 'bn' ? 'টাইমার চালু করুন' : 'Start Timer';
    }
    updateFastingDisplay();
  }

  function updateFastingDisplay() {
    if (!fastingStartTime) return;

    const now = new Date();
    const elapsedMs = Math.max(0, now.getTime() - fastingStartTime.getTime());
    const elapsedSec = Math.floor(elapsedMs / 1000);
    const hours = Math.floor(elapsedSec / 3600);
    const minutes = Math.floor((elapsedSec % 3600) / 60);
    const seconds = elapsedSec % 60;

    const pad = n => String(n).padStart(2, '0');
    const timeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    const elapsedEl = document.getElementById('fasting-elapsed-display');
    if (elapsedEl) {
      elapsedEl.textContent = currentLang === 'bn' ? convertToBanglaNumber(timeStr) : timeStr;
    }

    // Gauge circle animation
    const progressBar = document.getElementById('fasting-progress-bar');
    const progressFraction = Math.min(1, (elapsedMs / (FASTING_TARGET_HOURS * 3600 * 1000)));
    const offset = FASTING_GAUGE_CIRCUMFERENCE - (FASTING_GAUGE_CIRCUMFERENCE * progressFraction);
    if (progressBar) {
      progressBar.style.strokeDashoffset = offset;
      if (hours >= 14) {
        progressBar.style.stroke = 'var(--success)';
      } else if (hours >= 12) {
        progressBar.style.stroke = 'var(--secondary)';
      } else {
        progressBar.style.stroke = 'var(--primary)';
      }
    }

    // Biological Stage determination
    let currentStage = 1;
    let pillText = '';
    const isBn = currentLang === 'bn';

    if (hours < 12) {
      currentStage = 1;
      pillText = isBn ? 'গ্লাইকোজেন ক্ষয় পর্ব' : 'Glycogen Depletion';
    } else if (hours < 14) {
      currentStage = 2;
      pillText = isBn ? 'কিটোন ও ফ্যাট বার্ন শুরু' : 'Ketosis / Fat Burn Active';
    } else if (hours < 16) {
      currentStage = 3;
      pillText = isBn ? 'অটোফেজি পিক সক্রিয়' : 'Autophagy Peak Active';
    } else if (hours < 24) {
      currentStage = 4;
      pillText = isBn ? 'গভীর ইনসুলিন সংবেদনশীলতা' : 'Deep Insulin Sensitivity & HGH';
    } else {
      currentStage = 5;
      pillText = isBn ? 'স্টেম সেল পুনরুজ্জীবন' : 'Stem Cell Renewal & Total Reset';
    }

    const stagePill = document.getElementById('fasting-stage-pill');
    if (stagePill) {
      stagePill.textContent = pillText;
    }

    // Announce only when the biological stage actually changes
    if (currentStage !== lastFastingStage) {
      if (lastFastingStage !== 0) {
        announce(t(
          `উপবাসের নতুন পর্যায়: ${pillText}। ${convertToBanglaNumber(hours)} ঘণ্টা অতিবাহিত।`,
          `Fasting stage changed: ${pillText}. ${hours} hours elapsed.`));
      }
      lastFastingStage = currentStage;
    }

    // Update timeline step highlights
    document.querySelectorAll('.stage-step').forEach(step => {
      const stageNum = parseInt(step.getAttribute('data-stage'), 10);
      if (stageNum === currentStage) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // Sync to Health Passport
    const passportFastingEl = document.getElementById('pp-fasting');
    if (passportFastingEl) {
      const fastingStr = isBn
        ? `${convertToBanglaNumber(hours)} ঘণ্টা ${convertToBanglaNumber(minutes)} মিনিট (${pillText})`
        : `${hours}h ${minutes}m (${pillText})`;
      passportFastingEl.textContent = fastingStr;
    }
  }

  // =========================================================================
  // MODULE 6: Clinical Lab Report Decoder & South Asian TOFI Indices
  // =========================================================================
  let lastTofiData = null;

  function initLabDecoder() {
    const calcTofiBtn = document.getElementById('btn-calc-tofi');
    const decodeBmBtn = document.getElementById('btn-decode-biomarkers');

    if (calcTofiBtn) {
      calcTofiBtn.addEventListener('click', () => {
        calculateTofiIndices();
      });
    }

    if (decodeBmBtn) {
      decodeBmBtn.addEventListener('click', () => {
        decodeBiomarkers();
      });
    }
  }

  function calculateTofiIndices() {
    const waistIn = parseFloat(document.getElementById('input-waist').value);
    const heightIn = parseFloat(document.getElementById('input-height').value);
    const tgVal = parseFloat(document.getElementById('input-tg').value);
    const hdlVal = parseFloat(document.getElementById('input-hdl').value);
    const isBn = currentLang === 'bn';

    if (!waistIn || !heightIn || waistIn <= 0 || heightIn <= 0) {
      showFieldError('tofi-error', t('অনুগ্রহ করে কোমর ও উচ্চতার সঠিক মাপ (ইঞ্চিতে) প্রদান করুন।', 'Please enter valid waist and height measurements in inches.'));
      return;
    }
    clearFieldError('tofi-error');

    // 1. Waist-to-Height Ratio (WHtR)
    const whtr = parseFloat((waistIn / heightIn).toFixed(2));
    let whtrStatus = '';
    let whtrClass = '';
    if (whtr < 0.50) {
      whtrStatus = isBn ? 'সর্বোত্তম (ঝুঁকিমুক্ত)' : 'Optimal (< 0.50)';
      whtrClass = 'text-success';
    } else if (whtr <= 0.59) {
      whtrStatus = isBn ? 'মাঝারি ঝুঁকি (TOFI প্রবণতা)' : 'Increased Risk (0.50 - 0.59)';
      whtrClass = 'text-warning';
    } else {
      whtrStatus = isBn ? 'উচ্চ ভিসেরাল ফ্যাট ও তীব্র ঝুঁকি' : 'High Cardiovascular Risk (≥ 0.60)';
      whtrClass = 'text-danger';
    }

    // 2. Triglyceride to HDL Ratio
    let tgHdlRatio = null;
    let tgHdlStatus = isBn ? 'ল্যাব মান অনুপস্থিত' : 'Metrics not provided';
    let tgHdlClass = '';
    if (tgVal && hdlVal && hdlVal > 0) {
      tgHdlRatio = parseFloat((tgVal / hdlVal).toFixed(2));
      if (tgHdlRatio < 2.0) {
        tgHdlStatus = isBn ? 'ইনসুলিন সংবেদনশীল (আদর্শ < ২.০)' : 'Insulin Sensitive (< 2.0)';
        tgHdlClass = 'text-success';
      } else if (tgHdlRatio <= 3.0) {
        tgHdlStatus = isBn ? 'বর্ডারলাইন রেজিস্ট্যান্স (২.০-৩.০)' : 'Borderline Resistance (2.0 - 3.0)';
        tgHdlClass = 'text-warning';
      } else {
        tgHdlStatus = isBn ? 'তীব্র ইনসুলিন রেজিস্ট্যান্স (> ৩.০)' : 'High Insulin Resistance (> 3.0)';
        tgHdlClass = 'text-danger';
      }
    }

    // 3. TyG Index = ln( (TG [mg/dL] * FBS [mg/dL]) / 2 )
    // If FBS input is filled in Panel B, use it; otherwise use reference 100
    const fbsInputVal = parseFloat(document.getElementById('bm-fbs')?.value) || 100;
    let tygVal = null;
    let tygStatus = isBn ? 'TG তথ্য প্রয়োজন' : 'TG required';
    let tygClass = '';
    if (tgVal && tgVal > 0) {
      tygVal = parseFloat(Math.log((tgVal * fbsInputVal) / 2).toFixed(2));
      if (tygVal < 8.5) {
        tygStatus = isBn ? 'স্বাভাবিক মেটাবলিজম (< ৮.৫)' : 'Normal (< 8.5)';
        tygClass = 'text-success';
      } else if (tygVal <= 8.8) {
        tygStatus = isBn ? 'মাঝারি মেটাবলিক ঝুঁকি (৮.৫-৮.৮)' : 'Moderate Risk (8.5 - 8.8)';
        tygClass = 'text-warning';
      } else {
        tygStatus = isBn ? 'তীব্র ইনসুলিন রেজিস্ট্যান্স (> ৮.৮)' : 'Severe Resistance (> 8.8)';
        tygClass = 'text-danger';
      }
    }

    lastTofiData = { whtr, whtrStatus, tgHdlRatio, tgHdlStatus, tygVal, tygStatus };

    // Update Result Elements
    const resultBox = document.getElementById('tofi-result-box');
    const valWhtrEl = document.getElementById('val-whtr');
    const statusWhtrEl = document.getElementById('status-whtr');
    const valTgHdlEl = document.getElementById('val-tg-hdl');
    const statusTgHdlEl = document.getElementById('status-tg-hdl');
    const valTygEl = document.getElementById('val-tyg');
    const statusTygEl = document.getElementById('status-tyg');
    const verdictEl = document.getElementById('tofi-verdict-text');

    if (valWhtrEl) valWhtrEl.textContent = formatLocalNumber(whtr);
    if (statusWhtrEl) {
      statusWhtrEl.textContent = whtrStatus;
      statusWhtrEl.className = `metric-status ${whtrClass}`;
    }

    if (valTgHdlEl) {
      valTgHdlEl.textContent = tgHdlRatio !== null ? formatLocalNumber(tgHdlRatio) : '--';
    }
    if (statusTgHdlEl) {
      statusTgHdlEl.textContent = tgHdlStatus;
      statusTgHdlEl.className = `metric-status ${tgHdlClass}`;
    }

    if (valTygEl) {
      valTygEl.textContent = tygVal !== null ? formatLocalNumber(tygVal) : '--';
    }
    if (statusTygEl) {
      statusTygEl.textContent = tygStatus;
      statusTygEl.className = `metric-status ${tygClass}`;
    }

    // Dynamic Clinical Verdict
    let verdictText = '';
    if (whtr >= 0.50 || (tgHdlRatio && tgHdlRatio >= 2.5)) {
      verdictText = isBn
        ? `<strong>ক্লিনিক্যাল মূল্যায়ন:</strong> আপনার কোমর-উচ্চতার অনুপাত (${convertToBanglaNumber(whtr)}) দক্ষিণ এশীয় ‘থিন-আউটসাইড-ফ্যাট-ইনসাইড’ (TOFI) নির্দেশ করছে। বাইরে থেকে ওজন স্বাভাবিক মনে হলেও অভ্যন্তরীণ অঙ্গ ও লিভারে চর্বি জমার ঝুঁকি রয়েছে। <em>সুপারিশ:</em> চিনি ও রিফাইন্ড সয়াবিন তেল সম্পূর্ণ বর্জন করুন এবং প্রতিদিন ১৪–১৬ ঘণ্টা ফাস্টিং শুরু করুন।`
        : `<strong>Clinical Assessment:</strong> Your Waist-to-Height Ratio (${whtr}) indicates classic South Asian TOFI (Thin-Outside-Fat-Inside) phenotypical risk. Even with normal BMI, visceral adipose tissue stresses cardiac metabolism. <em>Intervention:</em> Immediate elimination of industrial seed oils and initiation of 14-16h fasting.`;
    } else {
      verdictText = isBn
        ? `<strong>ক্লিনিক্যাল মূল্যায়ন:</strong> আপনার ভিসেরাল ফ্যাট ও ইনসুলিন মার্কার সুরক্ষিত সীমার মধ্যে রয়েছে। এই মেটাবলিক দীর্ঘায়ু বজায় রাখতে প্রাকৃতিক খাদ্যাভ্যাস ও নিয়মিত হাঁটার অভ্যাস ধরে রাখুন।`
        : `<strong>Clinical Assessment:</strong> Visceral fat and lipid-insulin markers are within optimal protective thresholds. Maintain anti-inflammatory nutrition and daily movement.`;
    }

    if (verdictEl) verdictEl.innerHTML = verdictText;
    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    persistLabInputs();
    announce(t('ভিসেরাল ফ্যাট ও ইনসুলিন রেজিস্ট্যান্স ফলাফল প্রস্তুত।', 'Visceral fat and insulin resistance results are ready.'));

    // Sync to Health Passport
    const ppWhtrEl = document.getElementById('pp-whtr');
    const ppTgHdlEl = document.getElementById('pp-tghdl');
    if (ppWhtrEl) {
      ppWhtrEl.textContent = `${formatLocalNumber(whtr)} (${whtrStatus})`;
    }
    if (ppTgHdlEl && tgHdlRatio !== null) {
      ppTgHdlEl.textContent = `${formatLocalNumber(tgHdlRatio)} (${tgHdlStatus})`;
    }
  }

  function decodeBiomarkers() {
    const isBn = currentLang === 'bn';
    const fbs = parseFloat(document.getElementById('bm-fbs')?.value);
    const hba1c = parseFloat(document.getElementById('bm-hba1c')?.value);
    const insulin = parseFloat(document.getElementById('bm-insulin')?.value);
    const hscrp = parseFloat(document.getElementById('bm-hscrp')?.value);
    const sgpt = parseFloat(document.getElementById('bm-sgpt')?.value);
    const vitd = parseFloat(document.getElementById('bm-vitd')?.value);
    const uric = parseFloat(document.getElementById('bm-uric')?.value);

    const cards = [];

    // 1. Fasting Blood Sugar
    if (!isNaN(fbs)) {
      if (fbs < 100) {
        cards.push({
          name: isBn ? 'ফাস্টিং রক্তে শর্করা (FBS)' : 'Fasting Blood Sugar (FBS)',
          val: `${formatLocalNumber(fbs)} mg/dL`,
          tier: 'good',
          status: isBn ? 'স্বাভাবিক (< ১০০ mg/dL)' : 'Optimal (< 100 mg/dL)',
          advice: isBn ? 'অগ্ন্যাশয়ের বেসাল ইনসুলিন সংবেদনশীলতা চমৎকার।' : 'Healthy basal glucose homeostasis.'
        });
      } else if (fbs <= 125) {
        cards.push({
          name: isBn ? 'ফাস্টিং রক্তে শর্করা (FBS)' : 'Fasting Blood Sugar (FBS)',
          val: `${formatLocalNumber(fbs)} mg/dL`,
          tier: 'warn',
          status: isBn ? 'প্রি-ডায়াবেটিস (১০০–১২৫ mg/dL)' : 'Prediabetes (100–125 mg/dL)',
          advice: isBn ? 'লিভার রাতে অতিরিক্ত গ্লুকোজ তৈরি করছে। রাতের খাবার রাত ৮টার মধ্যে শেষ করুন।' : 'Nocturnal hepatic gluconeogenesis elevated. Finish dinner before 8 PM.'
        });
      } else {
        cards.push({
          name: isBn ? 'ফাস্টিং রক্তে শর্করা (FBS)' : 'Fasting Blood Sugar (FBS)',
          val: `${formatLocalNumber(fbs)} mg/dL`,
          tier: 'danger',
          status: isBn ? 'ডায়াবেটিস রেঞ্জ (≥ ১২৬ mg/dL)' : 'Diabetic Threshold (≥ 126 mg/dL)',
          advice: isBn ? 'চিনি, মিষ্টি, ভাত-রুটির মাত্রা কঠোরভাবে নিয়ন্ত্রণ করুন এবং চিকিৎসকের সাথে লাইফস্টাইল সমন্বয় করুন।' : 'Strict carbohydrate restriction and medical lifestyle review required.'
        });
      }
    }

    // 2. HbA1c
    if (!isNaN(hba1c)) {
      if (hba1c < 5.7) {
        cards.push({
          name: isBn ? 'গ্লাইকেটেড হিমোগ্লোবিন (HbA1c)' : 'HbA1c (3-Month Average)',
          val: `${formatLocalNumber(hba1c)}%`,
          tier: 'good',
          status: isBn ? 'ঝুঁকিমুক্ত (< ৫.৭%)' : 'Optimal (< 5.7%)',
          advice: isBn ? 'রক্তের লোহিত কণিকায় সুগারের ক্ষতি নেই।' : 'No glycation injury to red blood cells.'
        });
      } else if (hba1c <= 6.4) {
        cards.push({
          name: isBn ? 'গ্লাইকেটেড হিমোগ্লোবিন (HbA1c)' : 'HbA1c (3-Month Average)',
          val: `${formatLocalNumber(hba1c)}%`,
          tier: 'warn',
          status: isBn ? 'প্রি-ডায়াবেটিস (৫.৭% – ৬.৪%)' : 'Prediabetic Range (5.7% - 6.4%)',
          advice: isBn ? 'গত ৯০ দিনের গড় রক্ত শর্করা বৃদ্ধি পেয়েছে। প্রতিদিন ৪৫ মিনিট দ্রুত হাঁটুন।' : 'Elevated 90-day average. 45-min daily aerobic walking required.'
        });
      } else {
        cards.push({
          name: isBn ? 'গ্লাইকেটেড হিমোগ্লোবিন (HbA1c)' : 'HbA1c (3-Month Average)',
          val: `${formatLocalNumber(hba1c)}%`,
          tier: 'danger',
          status: isBn ? 'ডায়াবেটিক গ্লাইকেশন (≥ ৬.৫%)' : 'High Diabetic Glycation (≥ 6.5%)',
          advice: isBn ? 'ধমনী ও কিডনির কৈশিক নালীর ক্ষতি রোধে অনতিবিলম্বে কার্বোহাইড্রেট নিয়ন্ত্রণ করুন।' : 'High microvascular endothelial risk. Immediate metabolic reset.'
        });
      }
    }

    // 3. Fasting Insulin
    if (!isNaN(insulin)) {
      if (insulin < 6.0) {
        cards.push({
          name: isBn ? 'ফাস্টিং ইনসুলিন (Fasting Insulin)' : 'Fasting Insulin (µIU/mL)',
          val: `${formatLocalNumber(insulin)} µIU/mL`,
          tier: 'good',
          status: isBn ? 'আদর্শ সংবেদনশীলতা (< ৬.০)' : 'Optimal Sensitivity (< 6.0)',
          advice: isBn ? 'অগ্ন্যাশয়কে অতিরিক্ত চাপ নিতে হচ্ছে না; ইনসুলিন রেজিস্ট্যান্স নেই।' : 'Minimal pancreatic beta-cell strain; no insulin resistance.'
        });
      } else if (insulin <= 10.0) {
        cards.push({
          name: isBn ? 'ফাস্টিং ইনসুলিন (Fasting Insulin)' : 'Fasting Insulin (µIU/mL)',
          val: `${formatLocalNumber(insulin)} µIU/mL`,
          tier: 'warn',
          status: isBn ? 'বর্ডারলাইন ইনসুলিন রেজিস্ট্যান্স (৬–১০)' : 'Borderline Hyperinsulinemia (6–10)',
          advice: isBn ? 'রক্তে সুগার স্বাভাবিক রাখতে শরীরকে বেশি ইনসুলিন ছাড়তে হচ্ছে। ১৪ ঘণ্টা উপবাস জরুরি।' : 'Pancreas working harder to clear glucose. 14h fasting indicated.'
        });
      } else {
        cards.push({
          name: isBn ? 'ফাস্টিং ইনসুলিন (Fasting Insulin)' : 'Fasting Insulin (µIU/mL)',
          val: `${formatLocalNumber(insulin)} µIU/mL`,
          tier: 'danger',
          status: isBn ? 'তীব্র হাইপার-ইনসুলিনেমিয়া (> ১০.০)' : 'Severe Hyperinsulinemia (> 10.0)',
          advice: isBn ? 'ডায়াবেটিস দেখা দেওয়ার আগেই তীব্র চর্বি জমার সংকেত। রিফাইন্ড তেল ও চিনি অবিলম্বে বর্জন করুন।' : 'Severe silent metabolic root cause. Zero sugar, zero seed oils.'
        });
      }
    }

    // 4. hs-CRP
    if (!isNaN(hscrp)) {
      if (hscrp < 1.0) {
        cards.push({
          name: isBn ? 'এইচএস-সিআরপি প্রদাহ (hs-CRP)' : 'hs-CRP (Endothelial Inflammation)',
          val: `${formatLocalNumber(hscrp)} mg/L`,
          tier: 'good',
          status: isBn ? 'নিম্ন কার্ডিও ঝুঁকি (< ১.০ mg/L)' : 'Low Cardiovascular Risk (< 1.0)',
          advice: isBn ? 'রক্তনালীর ভেতরের আস্তরণে প্রদাহ নেই; হার্ট সুরক্ষিত।' : 'Healthy arterial endothelium with minimal inflammation.'
        });
      } else if (hscrp <= 3.0) {
        cards.push({
          name: isBn ? 'এইচএস-সিআরপি প্রদাহ (hs-CRP)' : 'hs-CRP (Endothelial Inflammation)',
          val: `${formatLocalNumber(hscrp)} mg/L`,
          tier: 'warn',
          status: isBn ? 'মাঝারি ধমনী প্রদাহ (১.০–৩.০)' : 'Moderate Arterial Stress (1.0–3.0)',
          advice: isBn ? 'সয়াবিন তেলের ওমেগা-৬ ধমনীতে প্রদাহ তৈরি করছে। খাঁটি সরিষার তেল গ্রহণ করুন।' : 'Seed oils inducing vascular friction. Switch to cold-pressed mustard oil.'
        });
      } else {
        cards.push({
          name: isBn ? 'এইচএস-সিআরপি প্রদাহ (hs-CRP)' : 'hs-CRP (Endothelial Inflammation)',
          val: `${formatLocalNumber(hscrp)} mg/L`,
          tier: 'danger',
          status: isBn ? 'তীব্র ভাস্কুলার প্রদাহ (> ৩.০)' : 'Severe Endothelial Inflammation (> 3.0)',
          advice: isBn ? 'ধমনীতে প্লাক ফেটে যাওয়ার উচ্চ ঝুঁকি। স্ট্রেস কমান এবং প্রদাহরোধী সবুজ শাকসবজি বাড়ান।' : 'High vulnerable plaque risk. Immediate stress and diet intervention.'
        });
      }
    }

    // 5. SGPT / ALT
    if (!isNaN(sgpt)) {
      if (sgpt < 30) {
        cards.push({
          name: isBn ? 'এসজিপিটি (SGPT/ALT লিভার)' : 'SGPT/ALT (Liver Enzyme)',
          val: `${formatLocalNumber(sgpt)} U/L`,
          tier: 'good',
          status: isBn ? 'সুস্থ লিভার (< ৩০ U/L)' : 'Healthy Hepatic Function (< 30)',
          advice: isBn ? 'লিভার কোষে কোনো চর্বি বা প্রদাহজনিত ক্ষত নেই।' : 'No hepatic steatosis or cellular injury.'
        });
      } else if (sgpt <= 45) {
        cards.push({
          name: isBn ? 'এসজিপিটি (SGPT/ALT লিভার)' : 'SGPT/ALT (Liver Enzyme)',
          val: `${formatLocalNumber(sgpt)} U/L`,
          tier: 'warn',
          status: isBn ? 'ফ্যাটি লিভার সংকেত (৩০–৪৫)' : 'Early Fatty Liver Stress (30–45)',
          advice: isBn ? 'অতিরিক্ত ফ্রুক্টোজ ও কার্বোহাইড্রেট লিভারে চর্বি জমাচ্ছে। মিষ্টি ও জুস সম্পূর্ণ বর্জন করুন।' : 'Fructose and refined carbs accumulating in liver. Stop sugary drinks.'
        });
      } else {
        cards.push({
          name: isBn ? 'এসজিপিটি (SGPT/ALT লিভার)' : 'SGPT/ALT (Liver Enzyme)',
          val: `${formatLocalNumber(sgpt)} U/L`,
          tier: 'danger',
          status: isBn ? 'হেপাটিক প্রদাহ/স্টেকটোসিস (> ৪৫)' : 'Active Hepatic Steatohepatitis (> 45)',
          advice: isBn ? 'লিভার ক্ষতিগ্রস্ত হচ্ছে। ১৬ ঘণ্টার ফাস্টিং দিয়ে লিভারের চর্বি পরিষ্কার করুন।' : 'Liver injury active. 16h fasting clears hepatic fat stores.'
        });
      }
    }

    // 6. Vitamin D3
    if (!isNaN(vitd)) {
      if (vitd >= 30) {
        cards.push({
          name: isBn ? 'ভিটামিন ডি৩ (Vitamin D3)' : 'Serum Vitamin D3 (25-OH)',
          val: `${formatLocalNumber(vitd)} ng/mL`,
          tier: 'good',
          status: isBn ? 'পর্যাপ্ত মাত্রা (≥ ৩০ ng/mL)' : 'Sufficient (≥ 30 ng/mL)',
          advice: isBn ? 'ইনসুলিন সংবেদনশীলতা ও ইমিউন কোষের জন্য আদর্শ স্তর।' : 'Optimal for cellular immunity and insulin signaling.'
        });
      } else if (vitd >= 20) {
        cards.push({
          name: isBn ? 'ভিটামিন ডি৩ (Vitamin D3)' : 'Serum Vitamin D3 (25-OH)',
          val: `${formatLocalNumber(vitd)} ng/mL`,
          tier: 'warn',
          status: isBn ? 'স্বল্পতা (২০–২৯ ng/mL)' : 'Insufficient (20–29 ng/mL)',
          advice: isBn ? 'প্রতিদিন সকালের মিষ্টি রোদে ২০-৩০ মিনিট থাকুন ও কুসুমসহ ডিম খান।' : '20-30 min morning sunlight exposure and whole eggs recommended.'
        });
      } else {
        cards.push({
          name: isBn ? 'ভিটামিন ডি৩ (Vitamin D3)' : 'Serum Vitamin D3 (25-OH)',
          val: `${formatLocalNumber(vitd)} ng/mL`,
          tier: 'danger',
          status: isBn ? 'তীব্র ঘাটতি (< ২০ ng/mL)' : 'Severe Deficiency (< 20 ng/mL)',
          advice: isBn ? 'মেটাবলিক ক্ষমতা ও রোগ প্রতিরোধ ধসে পড়ছে। চিকিৎসকের পরামর্শে সাপ্লিমেন্ট গ্রহণ করুন।' : 'Suppressed metabolic resilience. Clinical supplementation needed.'
        });
      }
    }

    // 7. Uric Acid
    if (!isNaN(uric)) {
      if (uric <= 6.0) {
        cards.push({
          name: isBn ? 'ইউরিক এসিড (Uric Acid)' : 'Serum Uric Acid',
          val: `${formatLocalNumber(uric)} mg/dL`,
          tier: 'good',
          status: isBn ? 'স্বাভাবিক (≤ ৬.০ mg/dL)' : 'Optimal (≤ 6.0 mg/dL)',
          advice: isBn ? 'নাইট্রিক অক্সাইড উৎপাদন বাধামুক্ত; রক্তনালী কোমল রয়েছে।' : 'Endothelial nitric oxide production intact.'
        });
      } else {
        cards.push({
          name: isBn ? 'ইউরিক এসিড (Uric Acid)' : 'Serum Uric Acid',
          val: `${formatLocalNumber(uric)} mg/dL`,
          tier: 'danger',
          status: isBn ? 'উচ্চ মাত্রা (> ৬.০ mg/dL)' : 'Hyperuricemia (> 6.0 mg/dL)',
          advice: isBn ? 'উচ্চ ফ্রুক্টোজ কর্ন সিরাপ ও অ্যালকোহল ইউরিক এসিড বাড়ায়, যা রক্তচাপ বৃদ্ধি করে।' : 'Driven by fructose and metabolic syndrome; inhibits nitric oxide.'
        });
      }
    }

    const resultsBox = document.getElementById('biomarker-results-box');
    const cardsList = document.getElementById('biomarker-cards-list');

    if (cards.length === 0) {
      showFieldError('biomarker-error', t('অনুগ্রহ করে অন্তত একটি রক্ত পরীক্ষার মান লিখুন।', 'Please enter at least one blood biomarker value.'));
      return;
    }
    clearFieldError('biomarker-error');

    if (cardsList) {
      cardsList.innerHTML = cards.map(c => `
        <div class="biomarker-result-card card-${c.tier}">
          <div class="bmc-header">
            <span class="bmc-name">${c.name}</span>
            <span class="bmc-badge badge-${c.tier}">${c.status}</span>
          </div>
          <div class="bmc-value">${c.val}</div>
          <p class="bmc-advice">💡 ${c.advice}</p>
        </div>
      `).join('');
    }

    if (resultsBox) {
      resultsBox.style.display = 'block';
      resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    persistLabInputs();
    announce(t(
      `${convertToBanglaNumber(cards.length)}টি বায়োমার্কারের বিশ্লেষণ ও লাইফস্টাইল প্রতিকার প্রস্তুত।`,
      `Analysis and lifestyle advice ready for ${cards.length} biomarkers.`));
  }

  // =========================================================================
  // MODULE 7: Anti-Inflammatory Plate Builder & 7-Day Reset Plan
  // =========================================================================
  const MEAL_PLANS = {
    village: {
      title_bn: "স্বল্পবাজেট / গ্রামীণ ও শহরতলী স্তর (দৈনিক বাজেট: ৭০–১২০ টাকা)",
      title_en: "Low-Cost / Rural Tier (Daily Budget: 70–120 BDT)",
      days: [
        {
          day: "শনিবার (Day 1)",
          b: "১০:০০ AM: ২টি দেশি ডিমের পোচ (সরিষার তেলে) + একমুঠো ভাজা চিনাবাদাম + শসা",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + প্রচুর কলমি শাক ভাজি + পাতলা মসুর ডাল + কাঁচা মরিচ ও লেবু",
          d: "৭:৩০ PM: ছোট দেশি কাচকি বা মলা মাছের চচ্চড়ি + পেঁপে-আলুহীন সবজি তরকারি (ডিনারে ভাত বর্জন)"
        },
        {
          day: "রবিবার (Day 2)",
          b: "১০:০০ AM: সেদ্ধ ডিম ২টি + ১টি দেশি পেয়ারা + পুদিনা পাতা ও লেবু পানি",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + লাল শাক ভাজি + ছোট নদীর ট্যাংরা মাছের ঝোল",
          d: "৭:৩০ PM: মিষ্টি কুমড়ার শাক ও কাঁচা পেঁপের ঝোল + সেদ্ধ ডিম ১টি"
        },
        {
          day: "সোমবার (Day 3)",
          b: "১০:০০ AM: কাঁচা ছোলা ভেজানো (লেবু ও আদা কুচি দিয়ে) + ১টি ডিম ভাজি",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + তেতো করলা ভাজি + রুই মাছের পাতলা ঝোল",
          d: "৭:৩০ PM: সবজি খিচুড়ি সামান্য (লাল চাল ও বেশি ডাল দিয়ে) অথবা সবজি স্যুপ"
        },
        {
          day: "মঙ্গলবার (Day 4)",
          b: "১০:০০ AM: ২টি ডিম হাফ বয়েল + শসা-টমেটো সালাদ ও এক চিমটি বিট লবণ",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + পুঁই শাক ও ডাল + দেশি মুরগির ১ টুকরো ঝোল",
          d: "৭:৩০ PM: ছোট মাছের চচ্চড়ি + লাউ শাকের ঝোল"
        },
        {
          day: "বুধবার (Day 5)",
          b: "১০:০০ AM: ওমেগা-৩ যুক্ত তিলের ভর্তা বা বাদাম + ২টি ডিমের অমলেট",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + সজনে ডাঁটা ও ডাল + দেশি পাবদা/শিং মাছ",
          d: "৭:৩০ PM: শসা-পেঁপে সালাদ + ১ বাটি পাতলা ডাল ও ডিম পোচ"
        },
        {
          day: "বৃহস্পতিবার (Day 6)",
          b: "১০:০০ AM: ২টি সেদ্ধ ডিম + ১মুঠো কাঁচা ছোলা ও শসা",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + পালং শাক ভাজি + নদীর পোয়া বা বাটা মাছ",
          d: "৭:৩০ PM: ফুলকপি বা বাঁধাকপি ভাজি সরিষার তেলে + ডিম"
        },
        {
          day: "শুক্রবার (Day 7)",
          b: "১০:০০ AM: বিশেষ ডিম-শাক ভাজি (পেঁয়াজ, মরিচ, খাঁটি সরিষার তেল দিয়ে) + চা (চিনি ছাড়া)",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + এক টুকরো ইলিশ মাছ অথবা দেশি মুরগি + প্রচুর লেবু সালাদ",
          d: "৭:৩০ PM: ক্লিয়ার ভেজিটেবল স্যুপ + ফাস্টিং প্রস্তুতি (রাত ৮টার পর খাদ্য গ্রহণ বন্ধ)"
        }
      ]
    },
    family: {
      title_bn: "পারিবারিক স্ট্যান্ডার্ড স্তর (সুষম পুষ্টি ও পরিবারের স্বাভাবিক খাবার)",
      title_en: "Standard Family Tier (Balanced Household Nutrition)",
      days: [
        {
          day: "শনিবার (Day 1)",
          b: "১০:০০ AM: ২টি ডিমের ওমলেট (খাঁটি ঘিয়ে বা সরিষার তেলে) + মিশ্র কাঁচা সালাদ + আখরোট/বাদাম",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + দেশি রুই মাছের ঝোল + করলা-আলুহীন ভাজি + ডাল",
          d: "৭:৩০ PM: গ্রিল করা দেশি মুরগির ১ পিস + প্রচুর লেটুস, শসা, জলপাই তেল বা সরিষার তেলের সালাদ"
        },
        {
          day: "রবিবার (Day 2)",
          b: "১০:০০ AM: ডিম পোচ ২টি + চিয়া সিড ভেজানো পানি ও লেবু + পেয়ারা",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + কাচকি মাছের টক চচ্চড়ি + পালং শাক ভাজি",
          d: "৭:৩০ PM: বাঁধাকপির স্যুপ + নদীর কাতলা মাছের ১ টুকরো"
        },
        {
          day: "সোমবার (Day 3)",
          b: "১০:০০ AM: ২টি ডিম সেদ্ধ + কাঠবাদাম ৬টি + কাঁচা হলুদ ও আদা চা",
          l: "১:৩০ PM: ১টি লাল আটার রুটি অথবা ১ কাপ লাল চালের ভাত + পাবদা মাছ + লাল শাক",
          d: "৭:৩০ PM: দেশি মুরগির মাংসের স্যুপ (হাড়সহ ঝোল - Collagen Rich)"
        },
        {
          day: "মঙ্গলবার (Day 4)",
          b: "১০:০০ AM: ডিম ভাজি ২টি + অ্যাভোকাডো অথবা দেশি নারিকেল কোড়ানো + শসা",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + ছোট মাছের পাতুরি + মিষ্টি কুমড়া শাক",
          d: "৭:৩০ PM: সেদ্ধ সবজি বাটি (ব্রকলি, গাজর, বরবটি) + ডিম পোচ"
        },
        {
          day: "বুধবার (Day 5)",
          b: "১০:০০ AM: অমলেট ২টি + ভেজানো ছোলা ও চিনাবাদাম সালাদ",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + নদীর আইড় বা বোয়াল মাছ + কচু শাক ভাজি",
          d: "৭:৩০ PM: টমেটো-সবজি স্যুপ + ১ টুকরো গ্রিলড ফিশ"
        },
        {
          day: "বৃহস্পতিবার (Day 6)",
          b: "১০:০০ AM: ২টি ডিমের পোচ + পুষ্টিকর পেয়ারা বা আমড়া + দারুচিনি গ্রিন টি",
          l: "১:৩০ PM: ১ কাপ লাল চালের ভাত + ইলিশ মাছের পাতলা ঝোল + শসা-লেবু সালাদ",
          d: "৭:৩০ PM: মিশ্র শাক ভাজি + পাতলা মসুর ডাল ও ১টি ডিম"
        },
        {
          day: "শুক্রবার (Day 7)",
          b: "১০:০০ AM: বিশেষ ডিম ভুনা (সরিষা ও ঘিতে) + বাদাম ও শসা",
          l: "১:৩০ PM: অল্প লাল চালের পোলাও (ঘিয়ে রান্না) + দেশি খাসি বা মুরগির মাংস + প্রচুর শসা সালাদ",
          d: "৭:৩০ PM: হালকা পেঁপে স্যুপ + পরবর্তী দিনের ১৬ ঘণ্টা অটোফেজি ফাস্টিংয়ের প্রস্তুতি"
        }
      ]
    },
    executive: {
      title_bn: "এক্সিকিউটিভ স্তর (প্রিমিয়াম ওমেগা-৩ ও মাইক্রোনিউট্রিয়েন্ট সমৃদ্ধ)",
      title_en: "Executive Tier (High-Omega-3 & Micronutrient Dense)",
      days: [
        {
          day: "Day 1 to Day 7 Highlights",
          b: "১০:০০ AM: ৩টি দেশি ডিম (ঘিয়ে অর্গানিক স্ক্র্যাম্বল্ড) + অ্যাভোকাডো সালাদ + ব্রাজিল নাট ও আখরোট",
          l: "১:৩০ PM: ৩/৪ কাপ অর্গানিক ব্ল্যাক বা রেড রাইস + পদ্মার ইলিশ / চিতল পেটি + সতেজ বেবি স্পিনাচ ও এক্সট্রা ভার্জিন অলিভ অয়েল ড্রেসিং",
          d: "৭:৩০ PM: অর্গানিক বোন ব্রোথ (Bone Broth) স্যুপ + স্টিমড স্যামন বা দেশি ভেটকি ফিলে + মাশরুম সতে"
        }
      ]
    }
  };

  function initPlateBuilder() {
    const chipButtons = document.querySelectorAll('.chip-toggle');
    chipButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        if (type === 'carb') {
          // Single select for carbs
          document.querySelectorAll(`.chip-toggle[data-type="carb"]`).forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
        } else if (type === 'protein') {
          // Toggle protein
          btn.classList.toggle('active');
        } else {
          // Multi-select veg
          btn.classList.toggle('active');
        }
        updatePlateMetrics();
        persistPlateChips();
      });
    });

    const mealTabList = document.querySelector('.meal-tabs');
    const mealTabs = document.querySelectorAll('.m-tab[data-plan]');
    const selectMealTab = (plan) => {
      mealTabs.forEach(tb => {
        const on = tb.getAttribute('data-plan') === plan;
        tb.classList.toggle('active', on);
        tb.setAttribute('aria-selected', on ? 'true' : 'false');
        tb.tabIndex = on ? 0 : -1;
      });
      renderMealPlan(plan);
    };
    mealTabs.forEach(tab => {
      tab.addEventListener('click', () => selectMealTab(tab.getAttribute('data-plan') || 'village'));
    });
    if (mealTabList) enableTablistKeys(mealTabList, selectMealTab, 'data-plan');

    updatePlateMetrics();
    renderMealPlan('village');
  }

  function updatePlateMetrics() {
    const activeVeg = Array.from(document.querySelectorAll('#veg-chips .chip-toggle.active'));
    const activeProt = Array.from(document.querySelectorAll('#protein-chips .chip-toggle.active'));
    const activeCarb = Array.from(document.querySelectorAll('#carb-chips .chip-toggle.active'));

    const isBn = currentLang === 'bn';

    // Names
    const vegNames = activeVeg.map(c => c.getAttribute('data-name')).join(', ') || (isBn ? 'সবজি নির্বাচন করুন' : 'Select greens');
    const protNames = activeProt.map(c => c.getAttribute('data-name')).join(', ') || (isBn ? 'প্রোটিন নির্বাচন করুন' : 'Select protein');
    const carbNames = activeCarb.map(c => c.getAttribute('data-name')).join(', ') || (isBn ? 'কার্বোহাইড্রেট নির্বাচন করুন' : 'Select carb');

    const selVegEl = document.getElementById('selected-veg-text');
    const selProtEl = document.getElementById('selected-protein-text');
    const selCarbEl = document.getElementById('selected-carb-text');

    if (selVegEl) selVegEl.textContent = vegNames;
    if (selProtEl) selProtEl.textContent = protNames;
    if (selCarbEl) selCarbEl.textContent = carbNames;

    // Calculate score
    let score = 50;
    activeVeg.forEach(c => score += (parseInt(c.getAttribute('data-score'), 10) || 0));
    activeProt.forEach(c => score += (parseInt(c.getAttribute('data-score'), 10) || 0));
    activeCarb.forEach(c => score += (parseInt(c.getAttribute('data-score'), 10) || 0));

    // Cap between 20 and 99
    score = Math.max(20, Math.min(99, score));

    // Glycemic load
    let giText = isBn ? 'নিম্ন (সুরক্ষিত)' : 'Low (Safe)';
    const hasDangerCarb = activeCarb.some(c => c.classList.contains('danger-chip'));
    if (hasDangerCarb) {
      giText = isBn ? 'উচ্চ ঝুঁকিপূর্ণ (সুগার স্পাইক)' : 'High (Spikes Glucose)';
      score = Math.min(score, 45);
    }

    // Fiber
    const fiberGrams = Math.min(24, 10 + (activeVeg.length * 3) + (hasDangerCarb ? 0 : 3));
    const fiberText = isBn ? `উচ্চ (${convertToBanglaNumber(fiberGrams)} গ্রাম)` : `High (${fiberGrams}g)`;

    const scoreEl = document.getElementById('plate-ai-score');
    const giEl = document.getElementById('plate-gi-load');
    const fiberEl = document.getElementById('plate-fiber-val');

    if (scoreEl) {
      scoreEl.textContent = isBn ? `${convertToBanglaNumber(score)} / ১০০` : `${score} / 100`;
      scoreEl.className = score >= 75 ? 'pm-val text-success' : score >= 50 ? 'pm-val text-warning' : 'pm-val text-danger';
    }
    if (giEl) {
      giEl.textContent = giText;
      giEl.className = hasDangerCarb ? 'pm-val text-danger' : 'pm-val text-success';
    }
    if (fiberEl) fiberEl.textContent = fiberText;
  }

  function renderMealPlan(planKey) {
    const container = document.getElementById('meal-plan-content');
    if (!container) return;

    const data = MEAL_PLANS[planKey] || MEAL_PLANS.village;
    const isBn = currentLang === 'bn';

    container.innerHTML = `
      <div class="meal-plan-table-wrap">
        <h5 class="plan-table-title">${isBn ? data.title_bn : data.title_en}</h5>
        <table class="meal-schedule-table">
          <thead>
            <tr>
              <th>${isBn ? 'দিন' : 'Day'}</th>
              <th>${isBn ? 'সকালের নাস্তা (১০:০০ AM)' : 'Breakfast (10:00 AM)'}</th>
              <th>${isBn ? 'দুপুরের খাবার (১:৩০ PM)' : 'Lunch (1:30 PM)'}</th>
              <th>${isBn ? 'রাতের খাবার (৭:৩০ PM)' : 'Dinner (7:30 PM)'}</th>
            </tr>
          </thead>
          <tbody>
            ${data.days.map(d => `
              <tr>
                <td class="day-cell"><strong>${d.day}</strong></td>
                <td>${d.b}</td>
                <td>${d.l}</td>
                <td>${d.d}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // =========================================================================
  // MODULE 8: Vagus Nerve Stimulator & HRV Breathing Bubble (Web Audio API)
  // =========================================================================
  let vagusTimer = null;
  let vagusSessionSec = 0;
  let vagusCycleCount = 0;
  let vagusIsRunning = false;
  let vagusAudioEnabled = true;
  let vagusCurrentMode = '478'; // '478', 'box', 'resonant'
  let vagusAudioCtx = null;

  // Patterns in seconds: [ { phase: 'inhale', s: 4 }, { phase: 'hold', s: 7 }, ... ]
  const VAGUS_MODES = {
    '478': [
      { phase: 'inhale', dur: 4, msg_bn: 'নাক দিয়ে ধীরে শ্বাস নিন...', msg_en: 'Inhale Slowly Through Nose...' },
      { phase: 'hold', dur: 7, msg_bn: 'বাতাস ধরে রাখুন...', msg_en: 'Hold Your Breath...' },
      { phase: 'exhale', dur: 8, msg_bn: 'মুখ দিয়ে দীর্ঘ শ্বাস ছাড়ুন...', msg_en: 'Exhale Fully Through Mouth...' }
    ],
    'box': [
      { phase: 'inhale', dur: 4, msg_bn: 'শ্বাস নিন (৪ সে.)...', msg_en: 'Inhale (4s)...' },
      { phase: 'hold', dur: 4, msg_bn: 'ধরে রাখুন (৪ সে.)...', msg_en: 'Hold (4s)...' },
      { phase: 'exhale', dur: 4, msg_bn: 'শ্বাস ছাড়ুন (৪ সে.)...', msg_en: 'Exhale (4s)...' },
      { phase: 'hold', dur: 4, msg_bn: 'প্রশান্ত থাকুন (৪ সে.)...', msg_en: 'Rest (4s)...' }
    ],
    'resonant': [
      { phase: 'inhale', dur: 5.5, msg_bn: 'ধীর ও ছন্দময় শ্বাস নিন...', msg_en: 'Smooth Inhale (5.5s)...' },
      { phase: 'exhale', dur: 5.5, msg_bn: 'সমান ছন্দে শ্বাস ছাড়ুন...', msg_en: 'Smooth Exhale (5.5s)...' }
    ]
  };

  function initVagusPacer() {
    const modeBtns = document.querySelectorAll('.breath-mode-btn');
    const soundBtn = document.getElementById('btn-toggle-sound');
    const startBtn = document.getElementById('btn-start-breathing');
    const pauseBtn = document.getElementById('btn-pause-breathing');
    const resetBtn = document.getElementById('btn-reset-breathing');

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        vagusCurrentMode = btn.getAttribute('data-mode') || '478';
        resetVagusBreathing();
      });
    });

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        toggleVagusAudio();
      });
    }

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        startVagusBreathing();
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        pauseVagusBreathing();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetVagusBreathing();
      });
    }
  }

  function playVagusChime(frequency = 528, duration = 0.8) {
    if (!vagusAudioEnabled) return;
    try {
      if (!vagusAudioCtx) {
        vagusAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (vagusAudioCtx.state === 'suspended') {
        vagusAudioCtx.resume();
      }

      const osc = vagusAudioCtx.createOscillator();
      const gain = vagusAudioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, vagusAudioCtx.currentTime);

      // Smooth soft attack and natural exponential decay
      gain.gain.setValueAtTime(0.001, vagusAudioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, vagusAudioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, vagusAudioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(vagusAudioCtx.destination);

      osc.start();
      osc.stop(vagusAudioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext unavailable or blocked by policy
    }
  }

  function toggleVagusAudio() {
    vagusAudioEnabled = !vagusAudioEnabled;
    const soundIcon = document.getElementById('sound-icon');
    const soundLabel = document.getElementById('sound-label');
    const isBn = currentLang === 'bn';

    if (soundIcon) soundIcon.textContent = vagusAudioEnabled ? '🔔' : '🔕';
    if (soundLabel) {
      soundLabel.textContent = vagusAudioEnabled 
        ? (isBn ? 'শব্দ চালু' : 'Audio On') 
        : (isBn ? 'শব্দ বন্ধ' : 'Audio Off');
    }
    if (vagusAudioEnabled) {
      playVagusChime(528, 0.4);
    }
  }

  let vagusPhaseIndex = 0;
  let vagusPhaseSecRemaining = 0;

  function toggleVagusBreathing() {
    if (vagusIsRunning) {
      pauseVagusBreathing();
    } else {
      startVagusBreathing();
    }
  }

  function startVagusBreathing() {
    vagusIsRunning = true;
    const startBtn = document.getElementById('btn-start-breathing');
    const pauseBtn = document.getElementById('btn-pause-breathing');

    if (startBtn) startBtn.style.display = 'none';
    if (pauseBtn) pauseBtn.style.display = 'inline-flex';

    if (vagusPhaseSecRemaining <= 0) {
      vagusPhaseIndex = 0;
      loadVagusPhase();
    }

    if (vagusTimer) clearInterval(vagusTimer);
    vagusTimer = setInterval(() => {
      vagusSessionSec++;
      vagusPhaseSecRemaining -= 1;

      updateVagusMetrics();

      if (vagusPhaseSecRemaining <= 0) {
        advanceVagusPhase();
      } else {
        const timerSecEl = document.getElementById('bubble-timer-seconds');
        if (timerSecEl) {
          timerSecEl.textContent = formatLocalNumber(Math.ceil(vagusPhaseSecRemaining));
        }
      }
    }, 1000);
  }

  function loadVagusPhase() {
    const pattern = VAGUS_MODES[vagusCurrentMode] || VAGUS_MODES['478'];
    const currentPhase = pattern[vagusPhaseIndex];
    vagusPhaseSecRemaining = currentPhase.dur;

    const bubble = document.getElementById('breathing-bubble');
    const ring = document.getElementById('breathing-ring-outer');
    const actionText = document.getElementById('bubble-action-text');
    const timerSecEl = document.getElementById('bubble-timer-seconds');
    const isBn = currentLang === 'bn';

    if (actionText) actionText.textContent = isBn ? currentPhase.msg_bn : currentPhase.msg_en;
    if (timerSecEl) timerSecEl.textContent = formatLocalNumber(Math.ceil(currentPhase.dur));

    if (bubble) {
      bubble.className = `breathing-bubble phase-${currentPhase.phase}`;
    }
    if (ring) {
      ring.className = `breathing-ring-outer pulse-${currentPhase.phase}`;
    }

    // Audio chime on phase change
    if (currentPhase.phase === 'inhale') {
      playVagusChime(528, 0.7); // Solfeggio 528Hz transformation chime
    } else if (currentPhase.phase === 'exhale') {
      playVagusChime(396, 0.9); // Solfeggio 396Hz grounding chime
    }
  }

  function advanceVagusPhase() {
    const pattern = VAGUS_MODES[vagusCurrentMode] || VAGUS_MODES['478'];
    vagusPhaseIndex++;

    if (vagusPhaseIndex >= pattern.length) {
      vagusPhaseIndex = 0;
      vagusCycleCount++;
      updateVagusMetrics();
    }

    loadVagusPhase();
  }

  function updateVagusMetrics() {
    const cycleEl = document.getElementById('breath-cycle-count');
    const timeEl = document.getElementById('breath-session-time');
    const vagalToneEl = document.getElementById('breath-vagal-status');
    const isBn = currentLang === 'bn';

    const mm = Math.floor(vagusSessionSec / 60);
    const ss = vagusSessionSec % 60;
    const timeStr = `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;

    if (cycleEl) cycleEl.textContent = formatLocalNumber(vagusCycleCount);
    if (timeEl) timeEl.textContent = formatLocalNumber(timeStr);

    if (vagalToneEl) {
      if (vagusCycleCount >= 5) {
        vagalToneEl.textContent = isBn ? 'গভীর শান্ত অবস্থা অর্জিত' : 'Deep Parasympathetic State';
        vagalToneEl.className = 'bs-val text-success';
      } else if (vagusCycleCount >= 2) {
        vagalToneEl.textContent = isBn ? 'সক্রিয় হচ্ছে (নাড়ির গতি কমছে)' : 'Activating (Heart Rate Decelerating)';
        vagalToneEl.className = 'bs-val text-primary';
      } else {
        vagalToneEl.textContent = isBn ? 'প্রস্তুত' : 'Ready';
      }
    }
  }

  function pauseVagusBreathing() {
    vagusIsRunning = false;
    if (vagusTimer) clearInterval(vagusTimer);

    const startBtn = document.getElementById('btn-start-breathing');
    const pauseBtn = document.getElementById('btn-pause-breathing');
    if (startBtn) {
      startBtn.style.display = 'inline-flex';
      startBtn.textContent = currentLang === 'bn' ? 'চালু রাখুন' : 'Resume';
    }
    if (pauseBtn) pauseBtn.style.display = 'none';
  }

  function resetVagusBreathing() {
    pauseVagusBreathing();
    vagusSessionSec = 0;
    vagusCycleCount = 0;
    vagusPhaseIndex = 0;
    vagusPhaseSecRemaining = 0;

    const startBtn = document.getElementById('btn-start-breathing');
    if (startBtn) {
      startBtn.textContent = currentLang === 'bn' ? 'শ্বাসক্রিয়া সেশন শুরু করুন' : 'Start Breathing Session';
    }

    const bubble = document.getElementById('breathing-bubble');
    const ring = document.getElementById('breathing-ring-outer');
    const actionText = document.getElementById('bubble-action-text');
    const timerSecEl = document.getElementById('bubble-timer-seconds');
    const isBn = currentLang === 'bn';

    if (bubble) bubble.className = 'breathing-bubble';
    if (ring) ring.className = 'breathing-ring-outer';
    if (actionText) actionText.textContent = isBn ? 'শুরু করতে প্রস্তুত' : 'Ready to Begin';
    if (timerSecEl) timerSecEl.textContent = '--';

    updateVagusMetrics();
  }

  // =========================================================================
  // MODULE 9: 6-Pillar Daily Habit Loop & Streak Tracker (Local-First Offline)
  // =========================================================================
  const HABIT_KEYS = ['fasting', 'walk', 'diet', 'water', 'mind', 'sleep'];

  function getTodayDateString() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function initHabitTracker() {
    const todayStr = getTodayDateString();
    const isBn = currentLang === 'bn';

    const dateBadge = document.getElementById('habit-today-date');
    if (dateBadge) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateBadge.textContent = new Date().toLocaleDateString(isBn ? 'bn-BD' : 'en-US', options);
    }

    // Load saved checklist for today
    const savedHabits = JSON.parse(localStorage.getItem(`health_habits_${todayStr}`) || '{}');
    HABIT_KEYS.forEach(k => {
      const chk = document.querySelector(`input[data-habit="${k}"]`);
      if (chk) {
        chk.checked = !!savedHabits[k];
        chk.addEventListener('change', () => {
          updateHabitProgress();
        });
      }
    });

    const saveBtn = document.getElementById('btn-save-habits');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        saveDailyHabits();
      });
    }

    render7DayDots();
    updateHabitProgress(false);
  }

  function updateHabitProgress(triggerCelebration = true) {
    let completedCount = 0;
    HABIT_KEYS.forEach(k => {
      const chk = document.querySelector(`input[data-habit="${k}"]`);
      if (chk && chk.checked) completedCount++;
    });

    const pct = Math.round((completedCount / 6) * 100);
    const isBn = currentLang === 'bn';

    const pctEl = document.getElementById('habit-progress-pct');
    const barFill = document.getElementById('habit-progress-bar-fill');
    const banner = document.getElementById('habit-celebration-banner');

    if (pctEl) {
      pctEl.textContent = isBn
        ? `${convertToBanglaNumber(pct)}% (${convertToBanglaNumber(completedCount)}/৬)`
        : `${pct}% (${completedCount}/6)`;
    }

    if (barFill) {
      barFill.style.width = `${pct}%`;
      barFill.style.backgroundColor = pct === 100 ? 'var(--success)' : 'var(--primary)';
    }

    if (banner) {
      if (completedCount === 6) {
        banner.style.display = 'block';
      } else {
        banner.style.display = 'none';
      }
    }

    // Sync streak display
    const streak = parseInt(localStorage.getItem('health_habits_streak') || '0', 10);
    const streakEl = document.getElementById('habit-streak-count');
    const ppStreakEl = document.getElementById('pp-streak');

    if (streakEl) streakEl.textContent = formatLocalNumber(streak);
    if (ppStreakEl) ppStreakEl.textContent = isBn ? `${convertToBanglaNumber(streak)} দিন` : `${streak} Days`;
  }

  function saveDailyHabits() {
    const todayStr = getTodayDateString();
    const habitState = {};
    let completedCount = 0;

    HABIT_KEYS.forEach(k => {
      const chk = document.querySelector(`input[data-habit="${k}"]`);
      const val = chk ? chk.checked : false;
      habitState[k] = val;
      if (val) completedCount++;
    });

    localStorage.setItem(`health_habits_${todayStr}`, JSON.stringify(habitState));

    // Update streak logic
    let streak = parseInt(localStorage.getItem('health_habits_streak') || '0', 10);
    const lastSavedDate = localStorage.getItem('health_habits_last_date');

    if (completedCount >= 4) { // 4 or more habits counts towards consistency streak
      if (lastSavedDate !== todayStr) {
        streak++;
        localStorage.setItem('health_habits_streak', streak.toString());
        localStorage.setItem('health_habits_last_date', todayStr);
      }
    }

    render7DayDots();
    updateHabitProgress();

    showToast(t('আজকের স্বাস্থ্য অভ্যাসগুলো সংরক্ষিত হয়েছে।', 'Today’s habits have been saved.'));
  }

  function render7DayDots() {
    const container = document.getElementById('dot-days-container');
    if (!container) return;

    const isBn = currentLang === 'bn';
    const dayNamesBn = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'];
    const dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dotsHtml = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      const dateKey = `${yyyy}-${mm}-${dd}`;

      const saved = JSON.parse(localStorage.getItem(`health_habits_${dateKey}`) || '{}');
      const count = Object.values(saved).filter(Boolean).length;
      const isComplete = count >= 5;
      const isPartial = count >= 2 && count < 5;

      const dayLabel = isBn ? dayNamesBn[d.getDay()] : dayNamesEn[d.getDay()];
      const statusClass = isComplete ? 'dot-complete' : isPartial ? 'dot-partial' : 'dot-empty';

      dotsHtml.push(`
        <div class="habit-dot-col" title="${dateKey}: ${count}/6">
          <span class="habit-dot ${statusClass}"></span>
          <span class="habit-dot-day">${dayLabel}</span>
        </div>
      `);
    }

    container.innerHTML = dotsHtml.join('');
  }

  // =========================================================================
  // MODULE 10: Clinical Doctor Discussion Sheet & Health Passport
  // =========================================================================
  function initDoctorPassport() {
    const printDateEl = document.getElementById('passport-print-date');
    const isBn = currentLang === 'bn';
    if (printDateEl) {
      const now = new Date();
      printDateEl.textContent = now.toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    const printBtn = document.getElementById('btn-print-passport');
    const copyBtn = document.getElementById('btn-copy-summary');

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        printDoctorPassport();
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        copyDoctorPassportSummary();
      });
    }

    // Sync whatever state we already have
    updatePassportState();
  }

  function updatePassportState() {
    const isBn = currentLang === 'bn';

    // 1. Resilience Score & Risk Tier
    if (lastScoreData) {
      const ppScoreEl = document.getElementById('pp-score');
      const riskPill = document.getElementById('passport-risk-pill');
      if (ppScoreEl) {
        ppScoreEl.textContent = `${formatLocalNumber(lastScoreData.resilienceScore)} / 100`;
      }
      if (riskPill) {
        if (lastScoreData.resilienceScore >= 80) {
          riskPill.textContent = isBn ? 'সর্বোচ্চ সুরক্ষা (Low Risk)' : 'High Resilience (Low Risk)';
          riskPill.className = 'passport-badge-risk badge-low-risk';
        } else if (lastScoreData.resilienceScore >= 50) {
          riskPill.textContent = isBn ? 'মাঝারি ঝুঁকি (Moderate Risk)' : 'Moderate Risk';
          riskPill.className = 'passport-badge-risk badge-med-risk';
        } else {
          riskPill.textContent = isBn ? 'তীব্র ঝুঁকি (High Risk)' : 'High Risk';
          riskPill.className = 'passport-badge-risk badge-high-risk';
        }
      }
    }

    // 2. TOFI Indices
    if (lastTofiData) {
      const ppWhtrEl = document.getElementById('pp-whtr');
      const ppTgHdlEl = document.getElementById('pp-tghdl');
      if (ppWhtrEl) {
        ppWhtrEl.textContent = `${formatLocalNumber(lastTofiData.whtr)} (${lastTofiData.whtrStatus})`;
      }
      if (ppTgHdlEl && lastTofiData.tgHdlRatio !== null) {
        ppTgHdlEl.textContent = `${formatLocalNumber(lastTofiData.tgHdlRatio)} (${lastTofiData.tgHdlStatus})`;
      }
    }

    // 3. Fasting
    if (typeof updateFastingDisplay === 'function') {
      updateFastingDisplay();
    }

    // 4. Streak
    const streak = localStorage.getItem('health_habits_streak') || '0';
    const ppStreakEl = document.getElementById('pp-streak');
    if (ppStreakEl) {
      ppStreakEl.textContent = isBn ? `${convertToBanglaNumber(streak)} দিন` : `${streak} Days`;
    }
  }

  function printDoctorPassport() {
    printScoped('printing-passport');
  }

  function scrollToPassport() {
    const passportEl = document.getElementById('doctor-passport');
    if (passportEl) {
      passportEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function copyDoctorPassportSummary() {
    const isBn = currentLang === 'bn';
    const scoreText = document.getElementById('pp-score')?.textContent || '--';
    const fastingText = document.getElementById('pp-fasting')?.textContent || '--';
    const whtrText = document.getElementById('pp-whtr')?.textContent || '--';
    const tghdlText = document.getElementById('pp-tghdl')?.textContent || '--';
    const streakText = document.getElementById('pp-streak')?.textContent || '--';

    const summaryText = isBn ? `
[মেটাবলিক স্বাস্থ্য পাসপোর্ট ও ক্লিনিক্যাল সারসংক্ষেপ]
তারিখ: ${new Date().toLocaleDateString('bn-BD')}
-----------------------------------------------------
১. মেটাবলিক স্বাস্থ্য সূচক ও জীবনধারা স্থিতি:
- মেটাবলিক রেজিলিয়েন্স স্কোর: ${scoreText}
- দৈনিক উপবাস সময়কাল: ${fastingText}
- কোমর-উচ্চতা অনুপাত (WHtR): ${whtrText}
- ট্রাইগ্লিসারাইড-এইচডিএল অনুপাত: ${tghdlText}
- লাইফস্টাইল অভ্যাস স্ট্রিক: ${streakText}

২. চিকিৎসকের সাথে আলোচনার ৫টি মূল প্রশ্ন:
১. "আমি চিনি ও রিফাইন্ড তেল বাদ দিয়ে ১৪ ঘণ্টা ফাস্টিং ও ৪৫ মিনিট হাঁটা শুরু করেছি। রক্তচাপ/সুগার কমলে ওষুধের ডোজ কীভাবে ধীরে ধীরে সমন্বয় (Taper) করব?"
২. "আমার ট্রাইগ্লিসারাইড-এইচডিএল অনুপাত এবং পেটের চর্বি বিবেচনায় ফ্যাটি লিভার ও কার্ডিয়াক ঝুঁকির বর্তমান অবস্থা কী?"
৩. "আমার জন্য কি প্রতি ৩ মাস পর পর ফাস্টিং ইনসুলিন (HOMA-IR) ও HbA1c টেস্ট করে অগ্ন্যাশয়ের সক্ষমতা দেখা প্রয়োজন?"
৪. "আমার প্রেসক্রিপশনের কোনো ওষুধের দীর্ঘমেয়াদী সাইড-ইফেক্ট লিভার বা কিডনির ওপর প্রভাব ফেলছে কি না?"
৫. "জীবনযাত্রার পরিবর্তনের মাধ্যমে ওষুধ স্থায়ীভাবে বন্ধ করার একটি নির্দিষ্ট মনিটরিং প্ল্যান তৈরি করা যায় কি?"
-----------------------------------------------------
উৎস: প্রিভেন্টিভ লাইফস্টাইল মেডিসিন প্ল্যাটফর্ম
    `.trim() : `
[Metabolic Health Passport & Clinical Summary]
Date: ${new Date().toLocaleDateString('en-US')}
-----------------------------------------------------
1. Metabolic Biomarkers & Lifestyle Status:
- Metabolic Resilience Score: ${scoreText}
- Daily Fasting Window: ${fastingText}
- Waist-to-Height Ratio (WHtR): ${whtrText}
- TG / HDL Ratio: ${tghdlText}
- Habit Consistency Streak: ${streakText}

2. Five Clinical Discussion Questions for Your Physician:
1. "I have eliminated added sugars and industrial seed oils while practicing 14h fasting and daily walking. As blood pressure and glucose normalize, how should we taper my prescription dosage?"
2. "Given my Triglyceride-to-HDL ratio and waist circumference, what is my current grade of fatty liver and coronary endothelial risk?"
3. "Should we monitor Fasting Serum Insulin (HOMA-IR) alongside HbA1c every 3 months to evaluate pancreatic beta-cell recovery?"
4. "Do any of my current chronic medications have long-term hepatic or renal side effects that necessitate periodic biochemical monitoring?"
5. "Can we establish a structured medical monitoring roadmap to safely de-prescribe medications as metabolic health normalizes?"
-----------------------------------------------------
Source: Preventive Lifestyle Medicine Platform
    `.trim();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(summaryText).then(() => {
        showToast(t('ডক্টর সামারি ক্লিপবোর্ডে কপি করা হয়েছে।', 'Doctor summary copied to clipboard.'));
      }).catch(() => {
        fallbackCopyText(summaryText);
      });
    } else {
      fallbackCopyText(summaryText);
    }
  }

  function fallbackCopyText(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(t('ডক্টর সামারি ক্লিপবোর্ডে কপি করা হয়েছে।', 'Doctor summary copied to clipboard.'));
    } catch (err) {
      showToast(t('কপি করা সম্ভব হয়নি।', 'Could not copy the text.'));
    }
    document.body.removeChild(ta);
  }

  // --- WebMCP Generic Listener ---
  // Single delegated handler: every [data-mcp-action] click (button, link, form) routes
  // through window.WebMCP.dispatch() exactly once. No element wires its own listener.
  function initWebMCPEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-mcp-action]');
      if (!target) return;

      const action = target.getAttribute('data-mcp-action');
      if (!action) return;
      const param = target.getAttribute('data-mcp-param') || null;
      window.WebMCP.dispatch(action, param, target);
    });
  }

})();

