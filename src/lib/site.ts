const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || `http://127.0.0.1:3847${basePath}`).replace(/\/+$/, ""),
  basePath,
  name: "海兔集運",
  englishName: "Haitu Freight",
  tagline: "大件寄台灣，整件送到家",
  phone: "",
  hours: "週一至週六 9:00–20:00",
  email: "",
  wechat: "",
  line: "",
  lineQr: "",
  address: "",
  icp: "",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "大件服務" },
  { href: "/process", label: "運送流程" },
  { href: "/pricing", label: "計費方式" },
  { href: "/warehouse", label: "倉庫與包裝" },
  { href: "/guide", label: "寄送須知" },
  { href: "/articles", label: "大件知識" },
  { href: "/about", label: "關於海兔" },
  { href: "/contact", label: "聯絡我們" },
] as const;

export const footerLinks = {
  services: [
    { href: "/services", label: "大件服務" },
    { href: "/pricing", label: "計費方式" },
    { href: "/estimate", label: "才數試算" },
    { href: "/process", label: "運送流程" },
  ],
  support: [
    { href: "/warehouse", label: "倉庫與包裝" },
    { href: "/guide", label: "寄送須知" },
    { href: "/guide#not-accepted", label: "不收寄品項" },
    { href: "/articles", label: "大件知識" },
  ],
  company: [
    { href: "/about", label: "關於海兔" },
    { href: "/about#commitments", label: "服務承諾" },
    { href: "/contact", label: "聯絡我們" },
  ],
};

export const services = [
  {
    id: "furniture",
    title: "家具海運",
    summary: "沙發、床架、床墊、餐桌椅、衣櫃與書櫃，依尺寸計價，可代為拆裝與木架加固。",
    examples: ["實木家具", "布藝沙發", "床架床墊", "系統櫃"],
  },
  {
    id: "appliances",
    title: "大型家電",
    summary: "冰箱、洗衣機、按摩椅、跑步機等大件電器，出倉前拍照確認外觀，全程防撞包裝。",
    examples: ["冰箱", "洗衣機", "按摩椅", "健身器材"],
  },
  {
    id: "building",
    title: "建材與衛浴",
    summary: "磁磚、木地板、浴櫃、燈具、門窗五金，適合裝修整批採購，可依工地進度分批送貨。",
    examples: ["磁磚地板", "浴櫃馬桶", "燈具", "門窗五金"],
  },
  {
    id: "moving",
    title: "搬家與整櫃",
    summary: "回台搬家、工作室遷移或大量備貨，可評估併櫃或 20 呎 / 40 呎整櫃，由專人規劃裝櫃。",
    examples: ["搬家行李", "整櫃專送", "工作室遷移", "大量備貨"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "傳照片估價",
    desc: "把商品連結、尺寸或照片傳給客服，我們依才數與送貨條件給出報價。",
  },
  {
    step: "02",
    title: "寄到大件倉",
    desc: "確認報價後，下單時把收件地址填成客服提供的大件倉，並附上您的專屬編號。",
  },
  {
    step: "03",
    title: "驗貨與包裝",
    desc: "到倉後拍照確認外觀與數量，依品項加上氣泡、護角或木架，避免運送碰撞。",
  },
  {
    step: "04",
    title: "海運與清關",
    desc: "併櫃或整櫃出運，依實際品名與貨值申報，清關進度由客服同步。",
  },
  {
    step: "05",
    title: "送貨到府",
    desc: "到台後預約送貨時間，可選一樓交貨、搬運上樓或代為組裝。",
  },
];

export const pricingPlans = [
  {
    name: "併櫃海運",
    basis: "依才數計價",
    fits: "單件或數件家具、家電",
    note: "有最低計費才數，未達以最低才數計",
  },
  {
    name: "整櫃海運",
    basis: "20 呎 / 40 呎整櫃報價",
    fits: "搬家、裝修整批、大量備貨",
    note: "依裝櫃量與送貨地點評估",
  },
  {
    name: "大件快線",
    basis: "依才數計價",
    fits: "急需到貨的單件大件",
    note: "船期較密，費用高於一般併櫃",
  },
];

export const addOnFees = [
  { name: "木架加固", fee: "依尺寸報價", desc: "實木家具、玻璃、石材建議加購" },
  { name: "拆裝與組裝", fee: "依品項報價", desc: "大件家具可代拆寄出、到府組裝" },
  { name: "搬運上樓", fee: "依樓層與電梯報價", desc: "無電梯或樓梯狹窄需事先告知" },
  { name: "偏遠地區派送", fee: "依地區報價", desc: "山區、離島另行評估" },
  { name: "倉儲", fee: "到倉後免費保管一段時間", desc: "逾期天數與費用以客服說明為準" },
  { name: "保價", fee: "依申報貨值計算", desc: "高價家具、家電建議投保" },
];

export const warehouseInfo = {
  name: "海兔集運 · 大件倉",
  receiverHint: "海兔集運（您的專屬編號）",
  province: "",
  city: "",
  district: "",
  detail: "",
  phone: "",
  postcode: "",
  rules: [
    "收件人請填「海兔集運＋專屬編號」，倉庫才能對應到您的貨。",
    "單件超過 2 公尺或 100 公斤，請下單前先告知客服安排卸貨。",
    "賣家出貨前請確認外包裝完整，到倉時如有破損會先拍照通知您。",
    "倉庫收貨時間：週一至週六 9:00–18:00，國定假日另行公告。",
  ],
  packing: [
    {
      title: "基本防護",
      desc: "氣泡布、珍珠棉與紙護角，適合布藝沙發、床墊、一般家具。",
    },
    {
      title: "木架加固",
      desc: "外加木條框架，適合實木家具、玻璃桌面、石材與易碎大件。",
    },
    {
      title: "拆件分裝",
      desc: "可拆的床架、櫃體先拆開分箱，縮小體積、降低運費。",
    },
  ],
};

export const guideSections = [
  {
    id: "measure",
    title: "尺寸怎麼量",
    items: [
      "量外包裝的最長、最寬、最高處，不是商品本體尺寸。",
      "不規則形狀（如 L 型沙發）以能包住整件的長方體來量。",
      "多件請分別提供尺寸與數量，報價會更準確。",
    ],
  },
  {
    id: "packing",
    title: "包裝要求",
    items: [
      "玻璃、石材、實木雕花等易碎品建議加購木架。",
      "可拆的家具盡量拆件寄送，能明顯降低才數。",
      "家電請保留原廠紙箱與內部固定材料。",
    ],
  },
  {
    id: "delivery",
    title: "送貨到府前",
    items: [
      "請先確認大門、電梯與樓梯轉角尺寸，避免大件搬不進門。",
      "巷弄過窄、無法臨停時，請先告知客服安排小車接駁。",
      "需要上樓或組裝的服務，請在出貨前一併預約。",
    ],
  },
  {
    id: "customs",
    title: "清關與稅費",
    items: [
      "所有貨物依實際品名、數量與貨值申報，稅費依台灣海關規定繳納。",
      "我們不提供低報貨值、拆單或借用他人名義申報等服務。",
      "部分電器、建材依台灣規定需符合檢驗或標示要求，下單前可先詢問客服。",
    ],
  },
  {
    id: "not-accepted",
    title: "不收寄品項",
    items: [
      "易燃易爆品、壓縮氣體、化學品與油漆。",
      "含肉類成分的食品、植物、種子與土壤。",
      "仿冒侵權商品、武器與管制物品。",
      "不確定的品項，請先把商品連結傳給客服確認。",
    ],
  },
];

export const faqs = [
  {
    q: "一張沙發大概多少錢？",
    a: "大件以才數計價，主要看包裝後的長寬高。把商品連結或尺寸傳給客服，就能拿到正式報價，也可以先用才數試算工具估算體積。",
  },
  {
    q: "可以只寄一件家具嗎？",
    a: "可以。單件走併櫃海運，有最低計費才數；數量多時再評估是否改走整櫃比較划算。",
  },
  {
    q: "到台灣後可以送上樓嗎？",
    a: "可以選一樓交貨、搬運上樓或代為組裝。上樓費用依樓層與有無電梯計算，請在出貨前告知。",
  },
  {
    q: "運送途中壞了怎麼辦？",
    a: "出倉前會拍照留存外觀。運送責任範圍內的損壞，依保價或事先約定的方式處理，高價品項建議加購保價。",
  },
];

export const promises = [
  {
    title: "先估價再寄",
    desc: "依尺寸與送貨條件先報價，確認後才寄倉，不會到倉後才加價。",
  },
  {
    title: "出倉前拍照",
    desc: "到倉與出倉都會拍照留存，外觀與數量有疑問可隨時核對。",
  },
  {
    title: "大件專門包裝",
    desc: "依品項選擇氣泡、護角或木架，減少長途運輸的碰撞與擠壓。",
  },
  {
    title: "送貨前預約",
    desc: "到台後先聯絡您預約時間，再依樓層與電梯安排人力。",
  },
];
