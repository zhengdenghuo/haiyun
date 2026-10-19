const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || `http://127.0.0.1:3847${basePath}`).replace(/\/+$/, ""),
  basePath,
  name: "鯨魚海運",
  englishName: "Whale Ocean Shipping",
  tagline: "跨境集運，穩妥到家",
  phone: "15280164581",
  hours: "工作日 9:00–21:00",
  email: "806251069@qq.com",
  wechat: "zdh19330418",
  line: "https://lin.ee/4y43hZh",
  lineQr: `${basePath}/line-qr.png`,
  address: "廣東省東莞市虎門鎮龍眼八路38號",
  icp: "",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/services", label: "集運服務" },
  { href: "/process", label: "集運流程" },
  { href: "/pricing", label: "收費標準" },
  { href: "/warehouse", label: "收貨倉庫" },
  { href: "/guide", label: "集運須知" },
  { href: "/articles", label: "集運知識" },
  { href: "/about", label: "關於鯨魚" },
  { href: "/contact", label: "聯繫我們" },
] as const;

export const footerLinks = {
  services: [
    { href: "/services", label: "服務介紹" },
    { href: "/process", label: "集運流程" },
    { href: "/pricing", label: "收費標準" },
    { href: "/estimate", label: "運費估算" },
  ],
  support: [
    { href: "/guide", label: "集運須知" },
    { href: "/warehouse", label: "收貨倉庫" },
    { href: "/guide#prohibited", label: "違禁品說明" },
    { href: "/articles", label: "集運知識" },
    { href: "/contact", label: "在線諮詢" },
  ],
  company: [
    { href: "/about", label: "關於鯨魚" },
    { href: "/about#promise", label: "服務承諾" },
    { href: "/contact", label: "聯繫方式" },
  ],
};

export const services = [
  {
    title: "大陸至台灣海運專線",
    summary: "珠三角直航拼櫃，適合體積較大、時效靈活的日常包裹。",
    points: ["免費短期倉儲", "合箱加固打包", "到府或自提可選"],
  },
  {
    title: "海快精選線路",
    summary: "兼顧海運成本與較快時效，適合節慶備貨與店鋪補貨。",
    points: ["節點透明可查", "包稅方案可選", "支持拍照驗貨"],
  },
  {
    title: "空運普貨通道",
    summary: "輕小件優先，適合急需簽收的服飾、配件與日用品。",
    points: ["當日截單次日發", "敏感貨需提前申報", "簽收短信提醒"],
  },
  {
    title: "東南亞與港澳線路",
    summary: "覆蓋常用跨境目的地，統一倉庫地址、統一賬單結算。",
    points: ["多倉收貨", "雙清到門可選", "企業賬戶月結"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "與商家溝通",
    desc: "透過電話、微信或 LINE 聯繫鯨魚海運客服，說明貨物品類與目的地，確認線路後取得專屬大陸倉收件信息。",
  },
  {
    step: "02",
    title: "購物寄倉",
    desc: "在電商平台下單時，將收件地址填寫為鯨魚海運提供的專屬倉庫地址。",
  },
  {
    step: "03",
    title: "包裹預報",
    desc: "將快遞單號與商品品類發給客服登記，便於倉內快速入庫。",
  },
  {
    step: "04",
    title: "合箱打包",
    desc: "包裹到齊後通知客服申請集運，可選加固、分箱、去除發票等服務。",
  },
  {
    step: "05",
    title: "支付發運",
    desc: "客服確認體積重量與運費後付款，倉庫出庫並同步軌跡更新。",
  },
  {
    step: "06",
    title: "簽收確認",
    desc: "抵達目的地後按所選方式派送或自提，異常件由客服跟進處理。",
  },
];

export const pricingRows = [
  {
    lane: "台灣海運 · 普貨",
    unit: "低至 2.5 元 / kg",
    volume: "依材積計，以客服報價為準",
    eta: "約 7–12 工作日",
    note: "含基礎合箱；偏遠地區另計",
  },
  {
    lane: "台灣海快 · 包稅",
    unit: "低至 7.5 元 / kg",
    volume: "依材積計，以客服報價為準",
    eta: "約 5–8 工作日",
    note: "依實際貨值如實申報，稅費代繳並計入報價",
  },
  {
    lane: "台灣空運 · 普貨",
    unit: "低至 21 元 / kg",
    volume: "按實重計費為主",
    eta: "約 2–4 工作日",
    note: "輕小件更划算；特貨需審核",
  },
  {
    lane: "港澳專線",
    unit: "¥22 / kg 起",
    volume: "¥72 / 材 起",
    eta: "約 3–6 工作日",
    note: "企業件可申請月結",
  },
];

export const addOnFees = [
  { name: "加固包裝", fee: "¥8 / 件起" },
  { name: "開箱拍照", fee: "¥5 / 件" },
  { name: "去除吊牌/發票", fee: "¥3 / 件" },
  { name: "超長件附加", fee: "按最長邊計" },
  { name: "倉儲逾期", fee: "免費 30 天，其後 ¥1 / 件·日" },
  { name: "保價服務", fee: "申報貨值的 1.5%" },
];

export const warehouseInfo = {
  name: "鯨魚海運 · 東莞虎門倉",
  receiverHint: "鯨魚海運轉（您的專屬編號）",
  province: "廣東省",
  city: "東莞市",
  district: "虎門鎮",
  detail: "龍眼八路38號",
  phone: "15280164581",
  postcode: "523900",
  tips: [
    "請務必在收件人姓名後註明專屬編號，便於自動匹配入庫。",
    "生鮮、液體、粉末、電池類請先諮詢客服是否可收。",
    "倉庫工作時間：週一至週六 9:00–18:30，法定節假日另行公告。",
  ],
};

export const guideSections = [
  {
    id: "prep",
    title: "下單前準備",
    items: [
      "確認商品屬於可運範圍，並保留購物訂單截圖以便核對。",
      "同一店鋪多件可合併預報，減少入庫等待。",
      "貴重物品建議加購保價，並在預報中註明品類。",
    ],
  },
  {
    id: "pack",
    title: "集運打包建議",
    items: [
      "易碎品請在申請集運時告知客服加固；玻璃、陶瓷建議原廠盒保留。",
      "鞋服類可去除多餘紙盒以節省體積，需在備註中說明。",
      "發票、宣傳單默認去除；如需保留請提前告知客服。",
    ],
  },
  {
    id: "customs",
    title: "清關與稅費",
    items: [
      "包稅線路依實際品名與貨值如實申報，稅費由我們代為向海關繳納並計入報價；非包稅線路如需繳稅，由收件人依目的地規定繳納。",
      "申報品名、數量與貨值請如實提供，避免延誤清關。",
      "我們不提供低報貨值、拆單規避稅費或借用他人名義申報等服務，以免收件人承擔法律責任。",
      "同一收件人短期內大量同類商品可能觸發查驗，請合理規劃。",
    ],
  },
  {
    id: "prohibited",
    title: "違禁品與限制品",
    items: [
      "嚴禁：武器彈藥、毒品、活體動植物、淫穢物品、仿冒侵權商品。",
      "限制：含鋰電池設備、液體化妝品、粉末保健品——須事先申報並經審核。",
      "不確定的品類請先聯繫客服確認，擅自寄送可能導致退運或銷毀。",
    ],
  },
];

export const aboutStats = [
  { label: "服務客戶", value: "12 萬+" },
  { label: "年均出庫", value: "80 萬票" },
  { label: "合作線路", value: "18 條" },
  { label: "倉配節點", value: "珠三角雙倉" },
];

export const promises = [
  {
    title: "軌跡可查",
    desc: "入庫、合箱、出庫、幹線、清關到派送，關鍵節點及時同步。",
  },
  {
    title: "異常包賠",
    desc: "運輸責任範圍內的丟失損壞，按約定保價或行業慣例協商賠付。",
  },
  {
    title: "專屬客服",
    desc: "客戶可加微信 / LINE 客服，節假日前提供發貨窗口提醒。",
  },
  {
    title: "透明計費",
    desc: "體積重與實重取大值規則公開，賬單明細可向客服索取核對。",
  },
];
