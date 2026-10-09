export const site = {
  name: "壹家海运",
  englishName: "Yijia Ocean Shipping",
  tagline: "跨境集运，稳妥到家",
  phone: "400-812-6680",
  hours: "工作日 9:00–21:00",
  email: "service@yijia-ocean.example",
  wechat: "YijiaHaiyun_KF",
  line: "@yijia-ocean",
  address: "广东省东莞市沙田镇港口大道壹家物流园 A 仓",
  icp: "粤ICP备2026XXXX号（占位）",
};

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/services", label: "集运服务" },
  { href: "/process", label: "集运流程" },
  { href: "/pricing", label: "收费标准" },
  { href: "/warehouse", label: "收货仓库" },
  { href: "/guide", label: "集运须知" },
  { href: "/about", label: "关于壹家" },
  { href: "/contact", label: "联系我们" },
] as const;

export const footerLinks = {
  services: [
    { href: "/services", label: "服务介绍" },
    { href: "/process", label: "集运流程" },
    { href: "/pricing", label: "收费标准" },
    { href: "/estimate", label: "运费估算" },
  ],
  support: [
    { href: "/guide", label: "集运须知" },
    { href: "/warehouse", label: "收货仓库" },
    { href: "/guide#prohibited", label: "违禁品说明" },
    { href: "/contact", label: "在线咨询" },
  ],
  company: [
    { href: "/about", label: "关于壹家" },
    { href: "/about#promise", label: "服务承诺" },
    { href: "/contact", label: "联系方式" },
  ],
};

export const services = [
  {
    title: "大陆至台湾海运专线",
    summary: "珠三角直航拼柜，适合体积较大、时效灵活的日常包裹。",
    points: ["免费短期仓储", "合箱加固打包", "到府或自提可选"],
  },
  {
    title: "海快精选线路",
    summary: "兼顾海运成本与较快时效，适合节庆备货与店铺补货。",
    points: ["节点透明可查", "包税方案可选", "支持拍照验货"],
  },
  {
    title: "空运普货通道",
    summary: "轻小件优先，适合急需签收的服饰、配件与日用品。",
    points: ["当日截单次日发", "敏感货需提前申报", "签收短信提醒"],
  },
  {
    title: "东南亚与港澳线路",
    summary: "覆盖常用跨境目的地，统一会员仓地址、统一账单结算。",
    points: ["多仓收货", "双清到门可选", "企业账户月结"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "注册会员",
    desc: "免费开通壹家海运会员，系统自动分配专属大陆仓收件信息。",
  },
  {
    step: "02",
    title: "购物寄仓",
    desc: "在电商平台下单时，将收件地址填写为您的壹家会员仓库地址。",
  },
  {
    step: "03",
    title: "包裹预报",
    desc: "登录会员中心提交快递单号与商品品类，便于仓内快速入库。",
  },
  {
    step: "04",
    title: "合箱打包",
    desc: "包裹齐套后一键申请集运，可选加固、分箱、去除发票等服务。",
  },
  {
    step: "05",
    title: "支付发运",
    desc: "确认体积重量与线路后在线支付，仓库出库并同步轨迹更新。",
  },
  {
    step: "06",
    title: "签收确认",
    desc: "抵达目的地后按所选方式派送或自提，异常件由客服跟进处理。",
  },
];

export const pricingRows = [
  {
    lane: "台湾海运 · 普货",
    unit: "¥18 / kg 起",
    volume: "¥68 / 材 起",
    eta: "约 7–12 工作日",
    note: "含基础合箱；偏远地区另计",
  },
  {
    lane: "台湾海快 · 包税",
    unit: "¥28 / kg 起",
    volume: "¥98 / 材 起",
    eta: "约 5–8 工作日",
    note: "税费预估入报价，签收更省心",
  },
  {
    lane: "台湾空运 · 普货",
    unit: "¥46 / kg 起",
    volume: "按实重计费为主",
    eta: "约 2–4 工作日",
    note: "轻小件更划算；特货需审核",
  },
  {
    lane: "港澳专线",
    unit: "¥22 / kg 起",
    volume: "¥72 / 材 起",
    eta: "约 3–6 工作日",
    note: "企业件可申请月结",
  },
];

export const addOnFees = [
  { name: "加固包装", fee: "¥8 / 件起" },
  { name: "开箱拍照", fee: "¥5 / 件" },
  { name: "去除吊牌/发票", fee: "¥3 / 件" },
  { name: "超长件附加", fee: "按最长边计" },
  { name: "仓储逾期", fee: "免费 30 天，其后 ¥1 / 件·日" },
  { name: "保价服务", fee: "申报货值的 1.5%" },
];

export const warehouseInfo = {
  name: "壹家海运 · 东莞沙田仓",
  receiverHint: "壹家海运转（您的会员号）",
  province: "广东省",
  city: "东莞市",
  district: "沙田镇",
  detail: "港口大道壹家物流园 A 仓（示例地址，可替换）",
  phone: "0769-8888-6680（仓内电话占位）",
  postcode: "523980",
  tips: [
    "请务必在收件人姓名后注明会员号，便于自动匹配入库。",
    "生鲜、液体、粉末、电池类请先咨询客服是否可收。",
    "仓库工作时间：周一至周六 9:00–18:30，法定节假日另行公告。",
  ],
};

export const guideSections = [
  {
    id: "prep",
    title: "下单前准备",
    items: [
      "确认商品属于可运范围，并保留购物订单截图以便核对。",
      "同一店铺多件可合并预报，减少入库等待。",
      "贵重物品建议加购保价，并在预报中注明品类。",
    ],
  },
  {
    id: "pack",
    title: "集运打包建议",
    items: [
      "易碎品请在申请集运时勾选加固；玻璃、陶瓷建议原厂盒保留。",
      "鞋服类可去除多余纸盒以节省体积，需在备注中说明。",
      "发票、宣传单默认去除；如需保留请提前勾选。",
    ],
  },
  {
    id: "customs",
    title: "清关与税费",
    items: [
      "包税线路报价已含常规税费预估；非包税线路税费按目的地规则另行结算。",
      "申报品名请如实填写，避免延误清关。",
      "同一收件人短期内大量同类商品可能触发查验，请合理规划。",
    ],
  },
  {
    id: "prohibited",
    title: "违禁品与限制品",
    items: [
      "严禁：武器弹药、毒品、活体动植物、淫秽物品、仿冒侵权商品。",
      "限制：含锂电池设备、液体化妆品、粉末保健品——须事先申报并经审核。",
      "不确定的品类请先联系客服确认，擅自寄送可能导致退运或销毁。",
    ],
  },
];

export const aboutStats = [
  { label: "服务会员", value: "12 万+" },
  { label: "年均出库", value: "80 万票" },
  { label: "合作线路", value: "18 条" },
  { label: "仓配节点", value: "珠三角双仓" },
];

export const promises = [
  {
    title: "轨迹可查",
    desc: "入库、合箱、出库、干线、清关到派送，关键节点及时同步。",
  },
  {
    title: "异常包赔",
    desc: "运输责任范围内的丢失损坏，按约定保价或行业惯例协商赔付。",
  },
  {
    title: "专属客服",
    desc: "会员可绑定微信 / LINE 客服，节假日前提供发货窗口提醒。",
  },
  {
    title: "透明计费",
    desc: "体积重与实重取大值规则公开，账单明细可下载核对。",
  },
];
