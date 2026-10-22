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
  line: "https://line.me/R/ti/p/@785iicjj",
  taobaoShop: "https://yijiahaiyun.taobao.com/",
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
    summary: "沙發、床架、床墊、餐桌椅、衣櫃與書櫃，依包裝尺寸和重量計價，可打木架加固。",
    examples: ["實木家具", "布藝沙發", "床架床墊", "系統櫃"],
  },
  {
    id: "appliances",
    title: "大型家電",
    summary: "冰箱、洗衣機、跑步機等大件電器，出倉前拍照確認外觀，全程防撞包裝。",
    note: "實際可寄品項與規格，請先諮詢客服。",
    examples: ["冰箱", "洗衣機", "跑步機", "健身器材"],
  },
  {
    id: "building",
    title: "建材與衛浴",
    summary: "浴櫃、燈具、門窗五金，適合裝修整批採購，可依工地進度分批送貨。磁磚、瓷磚暫不收寄。",
    examples: ["浴櫃馬桶", "燈具", "門窗五金"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "傳照片估價",
    desc: "把商品連結、照片、包裝尺寸和重量傳給客服，我們依送貨條件給出報價。",
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
    desc: "海運出貨，依實際品名申報，清關進度由客服同步。",
  },
  {
    step: "05",
    title: "送貨到府",
    desc: "到台後預約送貨時間，可選一樓交貨、搬運上樓或代為組裝。",
  },
];

export const CM3_PER_CAI = 28317;
export const VOLUME_DIVISOR = 6000;

export function halfVolumeWeight(actualKg: number, volumeKg: number) {
  return volumeKg > actualKg ? actualKg + (volumeKg - actualKg) / 2 : actualKg;
}

export const pricingLanes = [
  {
    id: "sea",
    name: "台灣海運 · 家具",
    unit: "¥4.5 / kg 起",
    volume: "¥25 / 才 起",
    eta: "約 10–12 工作日",
    note: "重量運費與材積運費取較高者",
    perKg: 4.5,
    perCai: 25,
  },
  {
    id: "sea-fast",
    name: "台灣海快（不包稅）",
    unit: "¥10 / kg 起",
    volume: "按半拋計算",
    eta: "約 3–6 工作日",
    note: "不含稅費，如需繳稅由收件人依台灣海關規定繳納",
    perKg: 10,
    perCai: 0,
  },
  {
    id: "air",
    name: "台灣空運 · 普貨",
    unit: "¥25 / kg 起",
    volume: "按半拋計算",
    eta: "約 2–4 工作日",
    note: "急件適用；特殊品項需先審核",
    perKg: 25,
    perCai: 0,
  },
] as const;

export function laneCost(lane: (typeof pricingLanes)[number], actualKg: number, cm3: number) {
  if (lane.perCai) {
    return Math.max(actualKg * lane.perKg, (cm3 / CM3_PER_CAI) * lane.perCai);
  }
  return halfVolumeWeight(actualKg, cm3 / VOLUME_DIVISOR) * lane.perKg;
}

export const addOnFees = [
  { name: "木架加固", fee: "依尺寸報價", desc: "實木家具、玻璃、石材建議加購" },
  { name: "到府組裝", fee: "依品項報價", desc: "分箱出貨的家具可預約到府組裝" },
  { name: "搬運上樓", fee: "依樓層與電梯報價", desc: "無電梯或樓梯狹窄需事先告知" },
  { name: "偏遠地區派送", fee: "依地區報價", desc: "山區、離島另行評估" },
  { name: "倉儲", fee: "到倉後免費保管一段時間", desc: "逾期天數與費用以客服說明為準" },
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
      title: "原箱加強",
      desc: "家電與分箱出貨的家具保留原廠紙箱，外加護角與纏膜加強保護。",
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
      "下單時優先選擇賣家分箱出貨的款式，能明顯降低才數。",
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
      "所有貨物依實際品名、數量申報，稅費依台灣海關規定繳納。",
      "我們不提供拆單或借用他人名義申報等服務。",
      "部分電器、建材依台灣規定需符合檢驗或標示要求，下單前可先詢問客服。",
    ],
  },
  {
    id: "not-accepted",
    title: "不收寄品項",
    items: [
      "易燃易爆品、壓縮氣體、化學品與油漆。",
      "含肉類成分的食品、植物、種子與土壤。",
      "磁磚、瓷磚等建材。",
      "仿冒侵權商品、武器與管制物品。",
      "不確定的品項，請先把商品連結傳給客服確認。",
    ],
  },
];

export const faqs = [
  {
    q: "一張沙發大概多少錢？",
    a: "海運家具每才 ¥25 起、每公斤 ¥4.5 起，兩者取較高者計費。以 200 × 90 × 85 公分的三人座沙發為例約 54 才，可以先用才數試算工具估算，再把商品連結傳給客服拿正式報價。",
  },
  {
    q: "可以只寄一件家具嗎？",
    a: "可以。單件也能寄，有最低計費才數；如果有其他大件可以一起寄，攤平成本。",
  },
  {
    q: "到台灣後可以送上樓嗎？",
    a: "可以。除了基本送達外，也能加購搬運上樓及到府組裝服務；費用會依樓層、有無電梯與現場條件評估，請在出貨前先告知客服。",
  },
  {
    q: "運送途中壞了怎麼辦？",
    a: "出倉前會拍照留存外觀。運送責任範圍內的損壞，會依事先約定的方式協助處理；高價或易碎品建議先和客服確認包裝方案。",
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
