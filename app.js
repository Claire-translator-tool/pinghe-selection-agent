const lessons = [
  {
    id: "inquiry",
    title: "客户询盘与需求确认",
    stage: "询盘阶段",
    theme: "询盘回复",
    level: "基础到进阶",
    scenario: "客户第一次联系你，询问产品、价格、起订量和目录。你要听懂需求，并用专业但自然的英文确认细节。",
    focus: ["询问产品型号", "确认数量", "索要目的港", "承诺发送目录和报价"],
    listen: "Hello, I am interested in your stainless steel water bottles. Could you send me your catalog, MOQ, best price and delivery time for 500 pieces?",
    speak: "Thank you for your inquiry. Could you please confirm the model, quantity, and destination port?",
    read: "When a buyer sends the first inquiry, your reply should be fast, clear, and helpful. A good reply usually includes thanks, product confirmation, clarifying questions, and the next step.",
    prompt: "客户询问 500 个保温杯的目录、MOQ、最优价格和交货期。写一封 80 字以内的英文回复。",
    questions: ["客户想要什么产品？", "客户问了哪四个关键信息？", "客户的数量是多少？"],
    starters: ["Thank you for your inquiry about our...", "Could you please confirm the exact model and destination port?", "I will send you our catalog and quotation shortly."],
    terms: [["inquiry", "询盘"], ["catalog", "产品目录"], ["MOQ", "最小起订量"], ["best price", "最优价格"], ["delivery time", "交货时间"]]
  },
  {
    id: "quotation",
    title: "报价与议价",
    stage: "报价阶段",
    theme: "报价谈判",
    level: "实用核心",
    scenario: "客户要求更低价格，你需要说明价格构成，同时留下谈判空间。",
    focus: ["解释单价", "说明 MOQ", "给阶梯价", "设置报价有效期"],
    listen: "Your price is a little high. Can you offer a better price if we order 2,000 pieces? Also, please include the packing details in your quotation.",
    speak: "For 2,000 pieces, we can offer a better unit price. The quotation will include packing details and validity.",
    read: "A quotation is not only a price. It should include product name, specification, unit price, MOQ, packaging, lead time, payment terms, shipping terms, and validity.",
    prompt: "客户说价格高，若 2000 个能否优惠。请写英文回复，包含阶梯价思路、包装信息和报价有效期。",
    questions: ["客户觉得什么偏高？", "客户提到的订单数量是多少？", "客户希望报价里包含什么？"],
    starters: ["For a quantity of 2,000 pieces, we can improve the unit price.", "The quotation includes product specification, packing details, and lead time.", "This offer is valid for 15 days."],
    terms: [["quotation", "报价单"], ["unit price", "单价"], ["tiered pricing", "阶梯价"], ["validity", "有效期"], ["packing details", "包装细节"]]
  },
  {
    id: "sample",
    title: "样品与确认",
    stage: "样品阶段",
    theme: "样品沟通",
    level: "实战表达",
    scenario: "客户想先拿样品测试，你需要说明样品费、快递费、周期和可退还条件。",
    focus: ["确认样品规格", "说明样品费", "说明快递费", "安排寄样"],
    listen: "Before placing a bulk order, we need samples for testing. How much is the sample fee and how long will it take to ship the samples?",
    speak: "The sample fee is refundable after you place the bulk order. We can ship the samples within three working days.",
    read: "Samples help buyers check quality before a bulk order. Your sample reply should confirm model, color, logo, packaging, sample fee, freight cost, and shipping time.",
    prompt: "客户要样品测试。请写英文回复，说明样品费、大货后可退、3 个工作日内寄出，并询问收货地址。",
    questions: ["客户下大货前想先做什么？", "客户询问了哪两个费用或时间问题？", "你回复时要确认哪些样品信息？"],
    starters: ["We can arrange samples for your testing.", "The sample fee can be refunded after the bulk order is placed.", "Please send us your courier address and contact number."],
    terms: [["sample fee", "样品费"], ["refundable", "可退还的"], ["bulk order", "大货订单"], ["courier address", "快递地址"], ["working days", "工作日"]]
  },
  {
    id: "order",
    title: "订单确认与付款",
    stage: "订单阶段",
    theme: "订单推进",
    level: "交易闭环",
    scenario: "客户准备下单，你要确认 PI、付款方式、生产前信息和生产周期。",
    focus: ["确认订单信息", "发送形式发票", "说明付款条件", "提醒生产资料"],
    listen: "We are ready to place the order. Please send us the proforma invoice with your bank details. Can we pay 30 percent deposit and 70 percent before shipment?",
    speak: "We will prepare the proforma invoice with bank details. The payment term of 30 percent deposit and 70 percent before shipment is acceptable.",
    read: "Before production, both sides should confirm product specification, quantity, unit price, total amount, payment terms, delivery time, shipping mark, packaging, and artwork.",
    prompt: "客户同意下单并要求 PI。请写英文回复，确认 30% 定金、70% 发货前付款，并请客户确认 logo 文件。",
    questions: ["客户准备做什么？", "客户要求你发送什么文件？", "客户提出的付款条件是什么？"],
    starters: ["Thank you for confirming the order.", "We will send the proforma invoice with our bank details today.", "Please confirm the logo artwork before production."],
    terms: [["proforma invoice", "形式发票"], ["bank details", "银行信息"], ["deposit", "定金"], ["before shipment", "发货前"], ["artwork", "设计文件"]]
  },
  {
    id: "shipping",
    title: "生产进度与物流",
    stage: "出货阶段",
    theme: "交期物流",
    level: "跟单必备",
    scenario: "客户催交期、询问物流方式和跟踪号，你要清楚说明进度并管理预期。",
    focus: ["同步生产进度", "说明预计完成时间", "确认运输方式", "提供跟踪信息"],
    listen: "Could you update me on the production status? We need the goods urgently. Please let us know the earliest shipping date and the freight cost by air.",
    speak: "Production is on schedule. The earliest shipping date is next Friday, and we are checking the air freight cost now.",
    read: "Shipping communication should be proactive. Buyers care about production status, inspection, packing, shipping date, freight cost, tracking number, and shipping documents.",
    prompt: "客户催生产和空运费。请写英文回复，说明生产按计划、下周五最早出货、正在确认空运费。",
    questions: ["客户为什么着急？", "客户想知道最早什么日期？", "客户询问哪种运输方式的费用？"],
    starters: ["Production is going smoothly and remains on schedule.", "The earliest shipping date is next Friday.", "We are checking the latest air freight cost and will update you shortly."],
    terms: [["production status", "生产进度"], ["on schedule", "按计划"], ["shipping date", "出货日期"], ["air freight", "空运费"], ["tracking number", "跟踪号"]]
  },
  {
    id: "afterSales",
    title: "售后与投诉处理",
    stage: "售后阶段",
    theme: "客诉处理",
    level: "高情商表达",
    scenario: "客户反馈质量或数量问题。你要先安抚，再收集证据，最后给解决方案。",
    focus: ["表达歉意", "索要照片视频", "核查批次", "提出补发或折扣方案"],
    listen: "We received the goods, but some cartons were damaged and several items have scratches. Please tell us how you will solve this issue.",
    speak: "We are sorry for the inconvenience. Please send us photos and videos, and we will check with our warehouse immediately.",
    read: "A professional complaint reply should be calm and solution-oriented. First, apologize for the inconvenience. Then ask for photos, videos, carton labels, and order number.",
    prompt: "客户说纸箱破损、部分产品有划痕。请写英文回复，表示歉意，索要照片视频和箱唛，并承诺马上核查。",
    questions: ["客户收到货后发现了哪两个问题？", "客户要求你说明什么？", "你需要向客户索要哪些证据？"],
    starters: ["We are sorry for the inconvenience caused.", "Could you please send us clear photos, videos, and carton labels?", "We will check this issue with our warehouse and offer a solution as soon as possible."],
    terms: [["damaged cartons", "破损纸箱"], ["scratches", "划痕"], ["inconvenience", "不便"], ["carton labels", "箱唛"], ["replacement", "补发/替换"]]
  }
];

const samples = {
  price: "Could you send me your best price, MOQ and delivery time for 500 pieces? Please also include packing details.",
  shipping: "We need the goods urgently. What is the earliest shipping date and how much is the air freight to Los Angeles?",
  complaint: "We received the goods, but some cartons were damaged and several items have scratches. How will you solve this issue?"
};

const phrasebook = [
  ["could you", "请问你能否"], ["catalog", "产品目录"], ["best price", "最优价格"], ["unit price", "单价"],
  ["quotation", "报价单"], ["moq", "最小起订量"], ["delivery time", "交货时间"], ["lead time", "生产/交货周期"],
  ["packing details", "包装细节"], ["sample fee", "样品费"], ["bulk order", "大货订单"], ["proforma invoice", "形式发票"],
  ["bank details", "银行信息"], ["deposit", "定金"], ["before shipment", "发货前"], ["production status", "生产进度"],
  ["shipping date", "出货日期"], ["air freight", "空运费"], ["tracking number", "物流跟踪号"], ["destination port", "目的港"],
  ["damaged", "破损"], ["scratches", "划痕"], ["quality issue", "质量问题"], ["replacement", "补发/替换"]
];

const intents = [
  ["价格/报价", ["price", "quotation", "quote", "discount", "unit price", "best price", "报价", "价格"], "客户主要在询问价格、报价细节或折扣空间。", "Dear Customer,\n\nThank you for your inquiry. Could you please confirm the model, quantity, packing requirement, and destination port? Then I will send you a complete quotation shortly.\n\nBest regards,"],
  ["样品", ["sample", "testing", "sample fee", "样品", "测试"], "客户想确认样品、样品费、寄样时间或快递安排。", "Dear Customer,\n\nYes, we can arrange samples for your testing. Please confirm the model, color, logo requirement, and courier address. We will check the sample fee and shipping time for you.\n\nBest regards,"],
  ["订单/付款", ["order", "proforma invoice", "invoice", "payment", "deposit", "订单", "付款"], "客户正在推进订单、PI、付款方式或银行信息。", "Dear Customer,\n\nThank you for confirming the order. We will prepare the proforma invoice with our bank details. Please also confirm the product specification, quantity, packaging, and artwork before production.\n\nBest regards,"],
  ["生产/物流", ["shipping", "delivery", "freight", "air freight", "tracking", "production status", "urgent", "物流", "发货", "交期"], "客户关心生产进度、交货期、运费、出货日期或物流跟踪。", "Dear Customer,\n\nThank you for your message. We are checking the latest production status and freight cost now. I will update you with the earliest shipping date and shipping option shortly.\n\nBest regards,"],
  ["售后/客诉", ["damaged", "scratch", "defect", "quality issue", "complaint", "solve", "problem", "破损", "划痕", "质量"], "客户反馈货物、包装或质量问题，需要安抚和解决方案。", "Dear Customer,\n\nWe are sorry for the inconvenience caused. Could you please send us clear photos, videos, carton labels, and the order number? We will check this issue with our warehouse and offer a solution as soon as possible.\n\nBest regards,"]
];

let state = {
  lesson: lessons[0].id,
  skill: "overview",
  progress: JSON.parse(localStorage.getItem("tradeEnglishProgress") || "{}"),
  translation: ""
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const esc = (text) => String(text).replace(/[&"<>]/g, (char) => ({ "&": "&amp;", "\"": "&quot;", "<": "&lt;", ">": "&gt;" }[char]));
const current = () => lessons.find((lesson) => lesson.id === state.lesson) || lessons[0];

document.addEventListener("DOMContentLoaded", () => {
  $("#customerMessage").value = samples.price;
  bindEvents();
  render();
  translateMessage();
});

function bindEvents() {
  $$(".skill-tab").forEach((button) => button.addEventListener("click", () => {
    state.skill = button.dataset.skill;
    render();
  }));
  $("#markCurrent").addEventListener("click", () => {
    state.progress[state.lesson] = { ...(state.progress[state.lesson] || {}), [state.skill]: true };
    localStorage.setItem("tradeEnglishProgress", JSON.stringify(state.progress));
    render();
  });
  $("#resetProgress").addEventListener("click", () => {
    state.progress = {};
    localStorage.removeItem("tradeEnglishProgress");
    render();
  });
  $("#openAssistant").addEventListener("click", () => $("#assistantPanel").scrollIntoView({ behavior: "smooth" }));
  $("#translateMessage").addEventListener("click", translateMessage);
  $("#readOriginal").addEventListener("click", () => speak($("#customerMessage").value, hasChinese($("#customerMessage").value) ? "zh-CN" : "en-US"));
  $("#readTranslation").addEventListener("click", () => speak(state.translation, hasChinese(state.translation) ? "zh-CN" : "en-US"));
  $$(".tiny-button").forEach((button) => button.addEventListener("click", () => {
    $("#customerMessage").value = samples[button.dataset.sample];
    translateMessage();
  }));
  $("#lessonContent").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.speak) speak(button.dataset.speak, button.dataset.lang || "en-US", Number(button.dataset.rate || 0.92));
    if (button.id === "checkWriting") checkWriting();
    if (button.id === "startSpeech") startSpeechCheck();
  });
}

function render() {
  const lesson = current();
  $("#lessonStage").textContent = lesson.stage;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonScenario").textContent = lesson.scenario;
  $("#currentTheme").textContent = lesson.theme;
  $$(".skill-tab").forEach((button) => button.classList.toggle("active", button.dataset.skill === state.skill));
  renderModules();
  renderContent(lesson);
  const done = lessons.reduce((sum, item) => sum + Object.values(state.progress[item.id] || {}).filter(Boolean).length, 0);
  $("#doneCount").textContent = `${done}/${lessons.length * 5} 项`;
}

function renderModules() {
  $("#moduleList").innerHTML = lessons.map((lesson, index) => {
    const progress = state.progress[lesson.id] || {};
    const done = Object.values(progress).filter(Boolean).length;
    const dots = ["overview", "listening", "speaking", "reading", "writing"].map((skill) => `<span class="progress-dot ${progress[skill] ? "done" : ""}"></span>`).join("");
    return `<button class="module-card ${lesson.id === state.lesson ? "active" : ""}" type="button" data-id="${lesson.id}">
      <strong>${index + 1}. ${lesson.title}</strong>
      <span class="module-meta">${lesson.stage} · ${lesson.level}</span>
      <span class="module-meta">完成 ${done}/5</span>
      <span class="progress-line">${dots}</span>
    </button>`;
  }).join("");
  $$(".module-card").forEach((button) => button.addEventListener("click", () => {
    state.lesson = button.dataset.id;
    state.skill = "overview";
    render();
  }));
}

function renderContent(lesson) {
  const terms = lesson.terms.map(([en, zh]) => `<span class="badge">${en} · ${zh}</span>`).join("");
  if (state.skill === "overview") {
    $("#lessonContent").innerHTML = `<div class="content-grid"><div class="block"><h3>本课目标</h3><p class="muted">把这个场景练到能听懂、说清、读懂、写出可直接发给客户的英文。</p><ul class="check-list">${lesson.focus.map((item) => `<li>${item}</li>`).join("")}</ul><div class="badge-row">${terms}</div></div><div class="drill-card"><h3>今日 20 分钟练法</h3><ul class="check-list"><li>听 3 遍客户原句，第一遍只抓关键词。</li><li>跟读核心回复 5 遍。</li><li>读短文并圈出关键词。</li><li>写一封短回复，再检查结构。</li></ul></div></div>`;
    return;
  }
  if (state.skill === "listening") {
    $("#lessonContent").innerHTML = `<div class="content-grid"><div class="block"><h3>听力材料</h3><p class="muted">先点击播放，第一遍只抓关键词。</p><div class="script-box">${lesson.listen}</div><div class="practice-actions" style="margin-top:12px;"><button class="primary-button" type="button" data-speak="${esc(lesson.listen)}">播放客户原句</button><button class="ghost-button" type="button" data-speak="${esc(lesson.listen)}" data-rate="0.78">慢速播放</button></div></div><div class="drill-card"><h3>听后回答</h3><ul class="check-list">${lesson.questions.map((item) => `<li>${item}</li>`).join("")}</ul></div></div>`;
    return;
  }
  if (state.skill === "speaking") {
    $("#lessonContent").innerHTML = `<div class="content-grid"><div class="block"><h3>跟读句</h3><p class="script-box">${lesson.speak}</p><div class="practice-actions" style="margin-top:12px;"><button class="primary-button" type="button" data-speak="${esc(lesson.speak)}">听示范</button><button class="ghost-button" type="button" id="startSpeech">开始跟读识别</button></div><div class="feedback-box" id="speechResult" style="margin-top:12px;"><p class="muted">点击后用英文读出上面的句子。Chrome 或 Edge 支持最好。</p></div></div><div class="drill-card"><h3>发音提醒</h3><p class="muted">语速放慢，重音放在外贸关键词上。</p><div class="term-cloud">${terms}</div></div></div>`;
    return;
  }
  if (state.skill === "reading") {
    $("#lessonContent").innerHTML = `<div class="content-grid"><div class="block"><h3>阅读短文</h3><div class="reading-box">${lesson.read}</div><div class="practice-actions" style="margin-top:12px;"><button class="primary-button" type="button" data-speak="${esc(lesson.read)}">朗读短文</button></div></div><div class="drill-card"><h3>关键词</h3><ul class="term-list">${lesson.terms.map(([en, zh]) => `<li><strong>${en}</strong><span>${zh}</span></li>`).join("")}</ul></div></div>`;
    return;
  }
  $("#lessonContent").innerHTML = `<div class="content-grid"><div class="block"><h3>写作任务</h3><p class="muted">${lesson.prompt}</p><textarea id="writingAnswer" rows="8" placeholder="在这里写英文回复..."></textarea><div class="practice-actions" style="margin-top:12px;"><button class="primary-button" type="button" id="checkWriting">检查回复</button></div><div class="feedback-box" id="writingFeedback" style="margin-top:12px;"><p class="muted">检查会提醒你是否包含感谢、数量、价格/交期、下一步这些要素。</p></div></div><div class="drill-card"><h3>可套用句</h3><div class="starter-grid">${lesson.starters.map((item) => `<div class="starter">${item}</div>`).join("")}</div></div></div>`;
}

function translateMessage() {
  const text = $("#customerMessage").value.trim();
  if (!text) {
    $("#translationBox").innerHTML = `<p class="muted">请先粘贴客户消息。</p>`;
    return;
  }
  const intent = detectIntent(text);
  const terms = phrasebook.filter(([en, zh]) => text.toLowerCase().includes(en) || text.includes(zh)).map(([en, zh]) => `${en} · ${zh}`).slice(0, 10);
  const qty = text.match(/\b\d[\d,]*\s*(pieces|pcs|units|sets|cartons|boxes)?\b/i)?.[0];
  const parts = [];
  if (/price|quotation|quote|discount|unit price|报价|价格/i.test(text)) parts.push("客户在询问价格、报价或折扣。");
  if (/moq|起订量/i.test(text)) parts.push("客户想确认最小起订量。");
  if (/delivery|lead time|shipping date|交期|交货/i.test(text)) parts.push("客户想了解交货时间或出货日期。");
  if (/sample|testing|样品/i.test(text)) parts.push("客户想安排样品或确认样品费。");
  if (/freight|shipping|tracking|物流|运费/i.test(text)) parts.push("客户在询问物流、运费或跟踪信息。");
  if (/damaged|scratch|quality|problem|破损|划痕|质量/i.test(text)) parts.push("客户反馈质量或售后问题，需要解决方案。");
  if (qty) parts.push(`客户提到的数量是 ${qty}。`);
  state.translation = parts.join(" ") || "我识别到这是一条客户消息，请结合上下文确认产品、数量、价格、交期和下一步。";
  $("#translationBox").innerHTML = `<h3>${hasChinese(text) ? "英文参考" : "中文翻译"}</h3><p>${state.translation}</p><div class="result-card"><h3>客户意图：${intent[0]}</h3><p class="muted">${intent[2]}</p>${terms.length ? `<div class="term-cloud">${terms.map((term) => `<span class="term-chip">${term}</span>`).join("")}</div>` : ""}</div><div class="reply"><strong>可回复英文</strong><p>${intent[3].replace(/\n/g, "<br>")}</p><div class="utility-row"><button class="copy-button" type="button" id="copyReply">复制回复</button><button class="copy-button" type="button" id="readReply">朗读回复</button></div></div><p class="warning-note">这是本地短语和场景翻译，适合快速理解客户意思。涉及价格、合同、索赔时，发送前建议再人工确认一次。</p>`;
  $("#copyReply").addEventListener("click", () => navigator.clipboard.writeText(intent[3]));
  $("#readReply").addEventListener("click", () => speak(intent[3]));
}

function detectIntent(text) {
  const lower = text.toLowerCase();
  return intents.map((intent) => [intent, intent[1].filter((word) => lower.includes(word.toLowerCase()) || text.includes(word)).length]).sort((a, b) => b[1] - a[1])[0][0];
}

function hasChinese(text) {
  return /[\u4e00-\u9fff]/.test(text);
}

function speak(text, lang = "en-US", rate = 0.92) {
  if (!text) return;
  if (!("speechSynthesis" in window)) {
    alert("当前浏览器不支持语音朗读。建议使用 Chrome 或 Edge。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g, ""));
  utterance.lang = lang;
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}

function startSpeechCheck() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    $("#speechResult").innerHTML = `<p class="warning-note">当前浏览器不支持语音识别。你仍然可以点击“听示范”跟读。</p>`;
    return;
  }
  const rec = new SpeechRecognition();
  rec.lang = "en-US";
  rec.interimResults = false;
  $("#speechResult").innerHTML = `<p class="muted">正在听，请读出上面的英文句子...</p>`;
  rec.onresult = (event) => {
    const said = event.results[0][0].transcript;
    const target = current().speak.toLowerCase().split(/\W+/).filter(Boolean);
    const words = said.toLowerCase().split(/\W+/).filter(Boolean);
    const score = Math.round(Math.min(100, words.filter((word) => target.includes(word)).length / target.length * 100));
    $("#speechResult").innerHTML = `<div class="practice-panel"><span class="score">${score}</span><div><strong>识别结果</strong><p>${said}</p><p class="muted">${score >= 80 ? "很稳，可以练得更自然一点。" : "再练一遍，重点对齐关键词。"}</p></div></div>`;
  };
  rec.onerror = () => $("#speechResult").innerHTML = `<p class="warning-note">没有识别成功，请确认浏览器允许麦克风权限。</p>`;
  rec.start();
}

function checkWriting() {
  const text = $("#writingAnswer").value.trim().toLowerCase();
  if (!text) {
    $("#writingFeedback").innerHTML = `<p class="warning-note">先写一段英文回复，我再帮你检查结构。</p>`;
    return;
  }
  const checks = [
    ["感谢客户", /thank|appreciate/.test(text)],
    ["确认需求或数量", /confirm|quantity|pieces|pcs|model|specification/.test(text)],
    ["提到报价/交期/付款/物流等关键细节", /price|quotation|delivery|lead time|payment|shipping|sample|freight|invoice/.test(text)],
    ["给出下一步", /send|update|arrange|check|prepare|shortly/.test(text)],
    ["语气礼貌", /please|could|would|thank/.test(text)]
  ];
  const passed = checks.filter(([, ok]) => ok).length;
  $("#writingFeedback").innerHTML = `<strong>结构评分：${passed}/5</strong><ul class="check-list" style="margin-top:10px;">${checks.map(([label, ok]) => `<li>${ok ? "已包含" : "建议补上"}：${label}</li>`).join("")}</ul>`;
}
