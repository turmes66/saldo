const icons = {
  home: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  cash: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="2.4" stroke="currentColor" stroke-width="1.7"/><path d="M7 12h.01M17 12h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.7"/><path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 19c1.2-3 3.2-4.5 5.5-4.5S13.3 16 14.5 19M16 8a2.5 2.5 0 1 0 0- .1M15.2 14.6c1.7.3 3.1 1.4 4.3 4.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v18H7.5A2.5 2.5 0 0 0 5 22.5V4.5Z" stroke="currentColor" stroke-width="1.7"/><path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H20" stroke="currentColor" stroke-width="1.7"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.7"/><path d="M3 10h18M16 14.5h2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  invite: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.7"/><path d="M3.8 19c1-3 2.9-4.5 5.2-4.5M16 8v6M13 11h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20h4l11-11-4-4L4 16v4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m13 5 4 4" stroke="currentColor" stroke-width="1.7"/></svg>`,
  rocket: `<svg viewBox="0 0 24 24" fill="none"><path d="M14 4c3 1 5 4 6 8-3 0-5.5-.5-8-2-1.5-2.5-2-5-2-8 3 1 4 1.5 4 2Z" stroke="currentColor" stroke-width="1.7"/><path d="m10 10-5 2 3 3 2-5Zm-1 6-3 3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.7"/><path d="M12 8v4.5l3 1.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  inflow: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M12 9v6M9.5 12.5 12 15l2.5-2.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  flow: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 8h11M12 5l3 3-3 3M20 16H9M12 13l-3 3 3 3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

const state = {
  role: null, // admin | user
  userId: null,
  sessionEpoch: null,
  page: "home",
  dictTab: "companies",
  users: [
    { id: 1, lastName: "Балашова", firstName: "Юлия", middleName: "Алексеевна", email: "y.balashova@example.com", phone: "+7 (900) 111-22-33", role: "Администратор", status: "Активен", created: "2026-01-12", password: "demo", mustResetPassword: false, sessionEpoch: 0 },
    { id: 2, lastName: "Петров", firstName: "Иван", middleName: "Алексеевич", email: "i.petrov@example.com", phone: "+7 (900) 222-33-44", role: "Пользователь", status: "Активен", created: "2026-02-03", password: "demo", mustResetPassword: false, sessionEpoch: 0 },
    { id: 3, lastName: "Смирнова", firstName: "Анна", middleName: "Игоревна", email: "a.smirnova@example.com", phone: "+7 (900) 333-44-55", role: "Пользователь", status: "Заблокирован", created: "2026-03-18", password: "demo", mustResetPassword: false, sessionEpoch: 0 },
    { id: 4, lastName: "Козлов", firstName: "Сергей", middleName: "Петрович", email: "s.kozlov@example.com", phone: "+7 (900) 444-55-66", role: "Пользователь", status: "Активен", created: "2026-05-21", password: "demo", mustResetPassword: false, sessionEpoch: 0 },
    { id: 5, lastName: "Орлова", firstName: "Мария", middleName: "", email: "m.orlova@example.com", phone: "+7 (900) 555-66-77", role: "Пользователь", status: "Активен", created: "2026-06-09", password: "demo", mustResetPassword: false, sessionEpoch: 0 },
    { id: 6, lastName: "Волков", firstName: "Дмитрий", middleName: "Николаевич", email: "d.volkov@example.com", phone: "+7 (900) 666-77-88", role: "Пользователь", status: "Активен", created: "2026-07-14", password: "demo", mustResetPassword: false, sessionEpoch: 0 },
    { id: 7, lastName: "Новикова", firstName: "Елена", middleName: "Викторовна", email: "e.novikova@example.com", phone: "+7 (900) 777-88-99", role: "Пользователь", status: "Активен", created: "2026-08-01", password: "demo", mustResetPassword: false, sessionEpoch: 0 },
  ],
  issues: [
    { id: 101, userId: 2, recipientType: "user", amount: 100000, date: "2026-07-02", used: 100000, rest: 0, purpose: "Командировка", company: "ССПБ", procedure: "", note: "Командировка / хоз. нужды", status: "Активна", issueKind: "targeted", createdByName: "Балашова Юлия Алексеевна" },
    { id: 102, userId: 4, recipientType: "user", amount: 45000, date: "2026-07-20", used: 12000, rest: 33000, purpose: "Оплата услуг", company: "ССПБ", procedure: "Дело А40-112", note: "Процедура № А40-112", status: "Активна", issueKind: "targeted", createdByName: "Балашова Юлия Алексеевна" },
    { id: 103, userId: 3, recipientType: "user", amount: 20000, date: "2026-06-11", used: 20000, rest: 0, purpose: "", company: "", procedure: "", note: "Транспортные расходы", status: "Активна", issueKind: "untargeted", createdByName: "Балашова Юлия Алексеевна" },
    { id: 104, userId: 2, recipientType: "user", amount: 30000, date: "2026-08-05", used: 0, rest: 30000, purpose: "Пополнение баланса", company: "ССПБ", procedure: "", note: "Выдача от администратора", status: "Активна", issueKind: "untargeted", createdByName: "Балашова Юлия Алексеевна" },
  ],
  receipts: [
    {
      id: 201,
      payerType: "company",
      payerId: 1,
      payerName: "ССПБ",
      amount: 250000,
      date: "2026-07-01",
      purpose: "Финансирование операционной деятельности",
      note: "Перечисление от компании",
      status: "Активна",
      issueId: null,
      createdByName: "Балашова Юлия Алексеевна",
    },
    {
      id: 202,
      payerType: "user",
      payerId: 2,
      payerName: "Петров Иван Алексеевич",
      amount: 15000,
      date: "2026-08-05",
      purpose: "Возврат неиспользованных средств",
      note: "Возврат остатка по выдаче № 101",
      status: "Активна",
      issueId: 101,
      createdByName: "Балашова Юлия Алексеевна",
    },
    {
      id: 203,
      payerType: "company",
      payerId: 2,
      payerName: "ААУ «Сириус»",
      amount: 80000,
      date: "2026-08-10",
      purpose: "Целевое финансирование",
      note: "",
      status: "Активна",
      issueId: null,
      createdByName: "Балашова Юлия Алексеевна",
    },
  ],
  userIncomes: [
    {
      id: 301,
      userId: 2,
      amount: 35000,
      date: "2026-08-03",
      type: "asset_sale",
      company: "ССПБ",
      fromName: "",
      purpose: "Ноутбук и монитор",
      procedure: "",
      note: "Продажа списанной офисной техники",
      status: "Активна",
    },
    {
      id: 302,
      userId: 2,
      amount: 12000,
      date: "2026-08-11",
      type: "counterparty",
      company: "ССПБ",
      fromName: "ООО «Север»",
      purpose: "Оплата услуг по сопровождению",
      procedure: "Дело А40-88",
      note: "",
      status: "Активна",
    },
  ],
  reports: [
    {
      id: "R-2401",
      authorId: 2,
      title: "Командировка август",
      purpose: "Командировка",
      company: "ССПБ",
      procedure: "—",
      sum: 60000,
      status: "На проверке",
      date: "2026-08-01",
      source: "Из полученной выдачи",
      issueId: 101,
      reviewComment: "",
    },
    {
      id: "R-2402",
      authorId: 2,
      title: "Хознужды офис",
      purpose: "Оплата услуг",
      company: "Сириус",
      procedure: "Дело А40-88",
      sum: 25000,
      status: "Утверждён",
      date: "2026-08-04",
      source: "Из полученной выдачи",
      issueId: 101,
      reviewComment: "",
    },
    {
      id: "R-2403",
      authorId: 4,
      title: "Сопровождение процедуры",
      purpose: "Оплата услуг",
      company: "ССПБ",
      procedure: "Дело А40-112",
      sum: 12000,
      status: "На доработке",
      date: "2026-08-08",
      source: "Из полученной выдачи",
      issueId: 102,
      reviewComment: "Укажите подтверждающие документы и уточните назначение платежа.",
    },
    {
      id: "R-2404",
      authorId: 2,
      title: "Такси до аэропорта",
      purpose: "Иное",
      company: "ССПБ",
      procedure: "—",
      sum: 5000,
      status: "Черновик",
      date: "2026-08-10",
      source: "Из полученной выдачи",
      issueId: 104,
      reviewComment: "",
    },
  ],
  myFunds: [],
  dicts: {
    companies: [
      { id: 1, name: "ССПБ", status: "Активна" },
      { id: 2, name: "ААУ «Сириус»", status: "Активна" },
      { id: 3, name: "Партнёр Плюс", status: "Архив" },
    ],
    procedures: [
      { id: 1, name: "Дело А40-88", debtor: "ООО «Север»", status: "Активна" },
      { id: 2, name: "Дело А40-112", debtor: "АО «Вектор»", status: "Активна" },
      { id: 3, name: "Дело А41-19", debtor: "ИП Орлов", status: "Архив" },
    ],
    purposes: [
      { id: 1, name: "Оплата услуг", status: "Активно" },
      { id: 2, name: "Командировка", status: "Активно" },
      { id: 3, name: "Иное", status: "Активно" },
    ],
    expenses: [
      { id: 1, name: "Командировочные расходы", status: "Активна" },
      { id: 2, name: "Хозяйственные расходы", status: "Активна" },
      { id: 3, name: "Транспортные расходы", status: "Активна" },
      { id: 4, name: "Расходы по процедуре", status: "Активна" },
    ],
  },
  activityLog: [
    {
      id: 1,
      at: "2026-08-12T10:15:00",
      actorId: 1,
      actorName: "Балашова Юлия Алексеевна",
      actorRole: "admin",
      action: "create",
      entity: "issue",
      entityLabel: "Выдача № 101",
      detail: "Создана выдача 100 000,00 ₽ для Петров Иван Алексеевич",
    },
    {
      id: 2,
      at: "2026-08-12T11:40:00",
      actorId: 2,
      actorName: "Петров Иван Алексеевич",
      actorRole: "user",
      action: "submit",
      entity: "report",
      entityLabel: "R-2401",
      detail: "Отчёт «Командировка август» отправлен на проверку",
    },
    {
      id: 3,
      at: "2026-08-12T14:05:00",
      actorId: 1,
      actorName: "Балашова Юлия Алексеевна",
      actorRole: "admin",
      action: "archive",
      entity: "dict",
      entityLabel: "Компании · Партнёр Плюс",
      detail: "Запись справочника архивирована",
    },
  ],
};

const els = {
  login: document.getElementById("screen-login"),
  app: document.getElementById("screen-app"),
  nav: document.getElementById("nav-main"),
  content: document.getElementById("content"),
  pageTitle: document.getElementById("page-title"),
  userName: document.getElementById("user-name"),
  userRole: document.getElementById("user-role"),
};

function money(n) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(n) || 0);
}

/** Отображение суммы в поле: 50 000,00 */
function formatAmount(n) {
  return new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(n) || 0);
}

/** Разбор "50 000,00" / "50000.00" → number; пустая строка → NaN */
function parseAmount(value) {
  const raw = String(value || "")
    .replace(/\s/g, "")
    .replace(",", ".");
  if (!raw) return NaN;
  const num = Number(raw);
  return Number.isFinite(num) ? Math.round(num * 100) / 100 : NaN;
}

function bindAmountInputs(root = document) {
  root.querySelectorAll("[data-amount]").forEach((input) => {
    const apply = () => {
      const n = parseAmount(input.value);
      if (Number.isFinite(n)) input.value = formatAmount(n);
    };
    input.addEventListener("blur", apply);
    input.addEventListener("focus", () => {
      const n = parseAmount(input.value);
      if (Number.isFinite(n)) input.value = String(n).replace(".", ",");
    });
    apply();
  });
}

function fullName(u) {
  return [u.lastName, u.firstName, u.middleName].filter(Boolean).join(" ");
}

/** Mask: +7 (XXX) XXX-XX-XX */
function formatRuPhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7")) digits = "7" + digits;
  digits = digits.slice(0, 11);

  const a = digits.slice(1, 4);
  const b = digits.slice(4, 7);
  const c = digits.slice(7, 9);
  const d = digits.slice(9, 11);

  let out = "+7";
  if (a.length) out += ` (${a}`;
  if (a.length === 3) out += ")";
  if (b.length) out += ` ${b}`;
  if (c.length) out += `-${c}`;
  if (d.length) out += `-${d}`;
  return out;
}

function bindPhoneMask(input) {
  if (!input) return;
  const apply = () => {
    input.value = formatRuPhone(input.value);
  };
  input.addEventListener("input", apply);
  input.addEventListener("focus", () => {
    if (!input.value.trim()) input.value = "+7 (";
  });
  input.addEventListener("blur", () => {
    if (input.value.replace(/\D/g, "").length <= 1) input.value = "";
  });
  apply();
}

function badge(status) {
  const map = {
    Активен: "ok",
    Активна: "ok",
    Активно: "ok",
    Заблокирован: "off",
    Архив: "neutral",
    "На проверке": "warn",
    Утверждён: "ok",
    Выплачено: "ok",
    Завершён: "ok",
    Черновик: "neutral",
    "На доработке": "rework",
    Отклонён: "off",
  };
  return `<span class="badge ${map[status] || "neutral"}">${status}</span>`;
}

function userById(id) {
  return state.users.find((u) => u.id === Number(id)) || null;
}

function currentUserId() {
  return state.userId || null;
}

function currentUser() {
  return userById(currentUserId());
}

function currentActor() {
  const u = currentUser();
  return {
    actorId: currentUserId(),
    actorName: u ? fullName(u) : state.role === "admin" ? "Администратор" : "Пользователь",
    actorRole: state.role || "guest",
  };
}

function bumpSession(user) {
  if (!user) return;
  user.sessionEpoch = (Number(user.sessionEpoch) || 0) + 1;
  persistSessionEpochs();
}

const SESSION_EPOCH_KEY = "saldo_session_epochs_v1";
const AUTH_SESSION_KEY = "saldo_auth_session_v1";

function persistSessionEpochs() {
  try {
    const map = {};
    state.users.forEach((u) => {
      map[u.id] = Number(u.sessionEpoch) || 0;
    });
    localStorage.setItem(SESSION_EPOCH_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

function loadSessionEpochs() {
  try {
    const raw = localStorage.getItem(SESSION_EPOCH_KEY);
    if (!raw) return;
    const map = JSON.parse(raw);
    state.users.forEach((u) => {
      if (map[u.id] != null) u.sessionEpoch = Number(map[u.id]) || 0;
    });
  } catch {
    /* ignore */
  }
}

function persistAuthSession() {
  try {
    if (!state.userId || !state.role) {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
      return;
    }
    sessionStorage.setItem(
      AUTH_SESSION_KEY,
      JSON.stringify({
        userId: state.userId,
        sessionEpoch: state.sessionEpoch,
        role: state.role,
      })
    );
  } catch {
    /* ignore */
  }
}

function clearAuthSession() {
  try {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  } catch {
    /* ignore */
  }
}

function startSession(user) {
  bumpSession(user);
  state.userId = user.id;
  state.sessionEpoch = user.sessionEpoch;
  state.role = user.role === "Администратор" ? "admin" : "user";
  persistAuthSession();
}

function invalidateUserSession(user, { logoutIfCurrent = true, message } = {}) {
  if (!user) return;
  bumpSession(user);
  if (logoutIfCurrent && state.userId === user.id) {
    forceLogout(message || "Сессия завершена администратором. Войдите снова.");
  }
}

function forceLogout(message) {
  const hadRole = Boolean(state.role);
  state.role = null;
  state.userId = null;
  state.sessionEpoch = null;
  clearAuthSession();
  els.app.classList.add("hidden");
  els.app.setAttribute("aria-hidden", "true");
  els.login.classList.remove("hidden");
  closeModal();
  closeAppDialog();
  if (hadRole && message) showAlert(message, "Сессия завершена");
}

/** Проверка сессии: кик, блок, сброс пароля админом */
function assertSession() {
  if (!state.role || !state.userId) return false;
  const u = currentUser();
  if (!u) {
    forceLogout("Учётная запись не найдена.");
    return false;
  }
  if (u.status === "Заблокирован") {
    forceLogout("Учётная запись заблокирована. Обратитесь к администратору.");
    return false;
  }
  if ((Number(u.sessionEpoch) || 0) !== Number(state.sessionEpoch)) {
    forceLogout("Сессия завершена администратором. Войдите снова.");
    return false;
  }
  if (u.mustResetPassword || !u.password) {
    forceLogout("Пароль сброшен администратором. Получите новый пароль у администратора.");
    return false;
  }
  const expectedRole = u.role === "Администратор" ? "admin" : "user";
  if (state.role !== expectedRole) {
    state.role = expectedRole;
  }
  return true;
}

function isCompensationSource(source) {
  return String(source || "").toLowerCase().includes("собственн");
}

function isIssueSource(source) {
  return String(source || "").includes("выдачи");
}

function isIssueActive(issue) {
  return !String(issue?.status || "Активна").startsWith("Архив");
}

function activeIssues(list = state.issues) {
  return list.filter(isIssueActive);
}

function logActivity({ action, entity, entityLabel, detail }) {
  if (!state.role) return;
  const actor = currentActor();
  state.activityLog.unshift({
    id: Date.now() + Math.floor(Math.random() * 1000),
    at: new Date().toISOString(),
    ...actor,
    action,
    entity,
    entityLabel: entityLabel || "—",
    detail: detail || "",
  });
}

function activityActionLabel(action) {
  const map = {
    create: "Создание",
    update: "Изменение",
    archive: "Архивирование",
    restore: "Восстановление",
    block: "Блокировка",
    unblock: "Разблокировка",
    reset_password: "Сброс пароля",
    kick: "Принудительный выход",
    login: "Вход",
    logout: "Выход",
    submit: "Отправка",
    approve: "Утверждение",
    rework: "Возврат на доработку",
    reject: "Отклонение",
    withdraw: "Отзыв",
    pay: "Выплата",
    return_funds: "Возврат средств",
    delete: "Удаление",
  };
  return map[action] || action;
}

function activityEntityLabel(entity) {
  const map = {
    issue: "Выдача",
    receipt: "Поступление",
    report: "Отчёт",
    income: "Приход",
    user: "Пользователь",
    dict: "Справочник",
    session: "Сессия",
    system: "Система",
  };
  return map[entity] || entity;
}

function formatDateTime(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function visibleActivityLog() {
  if (state.role === "admin") return state.activityLog;
  const uid = currentUserId();
  return state.activityLog.filter((e) => e.actorId === uid);
}

function myReports() {
  return state.reports.filter((r) => r.authorId === currentUserId());
}

function adminReports() {
  return state.reports.filter((r) => r.status !== "Черновик");
}

function reportAuthorName(r) {
  const u = userById(r.authorId);
  return u ? fullName(u) : "—";
}

function findReport(id) {
  return state.reports.find((r) => r.id === id);
}

function canUserEdit(r) {
  return r.status === "Черновик" || r.status === "На доработке";
}

function reportCountsAgainstIssue(r) {
  if (!r) return false;
  if (r.status === "Черновик" || r.status === "Отклонён") return false;
  if (!isIssueSource(r.source)) return false;
  if (!r.issueId) return false;
  return true;
}

function issueAllocatedByReports(issueId, excludeReportId = null) {
  return state.reports
    .filter(
      (r) =>
        Number(r.issueId) === Number(issueId) &&
        reportCountsAgainstIssue(r) &&
        (!excludeReportId || r.id !== excludeReportId)
    )
    .reduce((s, r) => s + Number(r.sum || 0), 0);
}

function issueReturnedAmount(issueId, excludeReceiptId = null) {
  return activeReceipts()
    .filter(
      (r) =>
        Number(r.issueId) === Number(issueId) &&
        (!excludeReceiptId || r.id !== excludeReceiptId)
    )
    .reduce((s, r) => s + Number(r.amount || 0), 0);
}

function issueUsage(issueId, { excludeReportId = null, excludeReceiptId = null } = {}) {
  const used =
    issueAllocatedByReports(issueId, excludeReportId) + issueReturnedAmount(issueId, excludeReceiptId);
  return Math.round(used * 100) / 100;
}

function issueAvailableRest(issueId, { excludeReportId = null, excludeReceiptId = null } = {}) {
  const issue = state.issues.find((i) => i.id === Number(issueId));
  if (!issue || !isIssueActive(issue)) return 0;
  const used = issueUsage(issueId, { excludeReportId, excludeReceiptId });
  return Math.max(0, Math.round((Number(issue.amount || 0) - used) * 100) / 100);
}

/** Выдано / в отчётах и возвратах / остаток по пользователю (архивные выдачи не учитываются) */
function userFundSummary(userId) {
  const issues = activeIssues().filter(
    (i) => i.recipientType !== "company" && i.userId === Number(userId)
  );
  const issued = issues.reduce((s, i) => s + Number(i.amount || 0), 0);
  const allocated = issues.reduce((s, i) => s + issueUsage(i.id), 0);
  const rest = Math.max(0, Math.round((issued - allocated) * 100) / 100);
  return {
    issued: Math.round(issued * 100) / 100,
    allocated: Math.round(allocated * 100) / 100,
    rest,
  };
}

function syncIssueBalancesForUser(userId) {
  const userIssues = state.issues.filter(
    (i) => i.userId === Number(userId) && i.recipientType !== "company"
  );
  userIssues.forEach((issue) => {
    const used = issueUsage(issue.id);
    issue.used = Math.min(Number(issue.amount || 0), used);
    issue.rest = Math.round((Number(issue.amount || 0) - issue.used) * 100) / 100;
  });

  state.myFunds = userIssues
    .filter(isIssueActive)
    .map((i) => ({
      id: i.id,
      amount: i.amount,
      date: i.date,
      used: i.used,
      rest: i.rest,
      note: i.note || "Выдача от администратора",
      status: i.status || "Активна",
    }));
}

function usersFundRows() {
  const ids = [
    ...new Set(
      activeIssues()
        .filter((i) => i.recipientType !== "company" && i.userId)
        .map((i) => i.userId)
    ),
  ];
  return ids
    .map((id) => {
      const u = userById(id);
      syncIssueBalancesForUser(id);
      const s = userFundSummary(id);
      return { userId: id, name: u ? fullName(u) : `Пользователь #${id}`, ...s };
    })
    .sort((a, b) => b.rest - a.rest);
}

function activeIssuesForUser(userId, { withRestOnly = false, includeIssueId = null } = {}) {
  return activeIssues()
    .filter((i) => i.recipientType !== "company" && i.userId === Number(userId))
    .filter((i) => {
      if (includeIssueId && Number(i.id) === Number(includeIssueId)) return true;
      if (!withRestOnly) return true;
      return issueAvailableRest(i.id) > 0.001;
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)) || b.id - a.id);
}

function issueOptionLabel(issue, { excludeReportId = null, excludeReceiptId = null } = {}) {
  const rest = issueAvailableRest(issue.id, { excludeReportId, excludeReceiptId });
  const purpose = issue.purpose || issue.note || "Без назначения";
  return `№ ${issue.id} · ${purpose} · остаток ${money(rest)} · ${issue.date}`;
}

function fundProgress(rest, issued) {
  if (!issued) return 0;
  return Math.min(100, Math.round((rest / issued) * 100));
}

function findUserByLogin(email) {
  const e = String(email || "").trim().toLowerCase();
  if (!e) return null;
  if (e === "admin@example.com") return state.users.find((u) => u.id === 1) || null;
  return state.users.find((u) => u.email.toLowerCase() === e) || null;
}

function tryLogin(email, password) {
  const user = findUserByLogin(email);
  if (!user) {
    showAlert("Неверный e-mail или пароль.", "Вход не выполнен");
    return false;
  }
  if (user.status === "Заблокирован") {
    showAlert("Учётная запись заблокирована. Обратитесь к администратору.", "Вход не выполнен");
    return false;
  }
  if (user.mustResetPassword || !user.password) {
    showAlert(
      "Пароль сброшен администратором. Войти со старым паролем нельзя — дождитесь нового пароля от администратора. Отчёты и данные сохранены.",
      "Пароль сброшен"
    );
    return false;
  }
  if (String(password) !== String(user.password)) {
    showAlert("Неверный e-mail или пароль.", "Вход не выполнен");
    return false;
  }
  enter(user);
  logActivity({
    action: "login",
    entity: "session",
    entityLabel: user.email,
    detail: `Вход в систему: ${fullName(user)}`,
  });
  return true;
}

async function resetAllUserPasswords() {
  const count = state.users.length;
  const ok = await showConfirm(
    `Сбросить пароли всех пользователей (${count})?\n\n` +
      "После этого никто не сможет войти со старым паролем.\n" +
      "Отчёты, выдачи и данные пользователей не удаляются.\n" +
      "Учётные записи не блокируются — администратор сможет выдать новые пароли точечно.\n" +
      "Все активные сессии будут завершены.",
    "Сброс всех паролей"
  );
  if (!ok) return;

  state.users.forEach((u) => {
    u.password = "";
    u.mustResetPassword = true;
    bumpSession(u);
  });

  const admin = state.users.find((u) => u.id === state.userId) || state.users.find((u) => u.role === "Администратор");
  const temp = "TempAdmin24";
  if (admin) {
    admin.password = temp;
    admin.mustResetPassword = false;
    bumpSession(admin);
    state.sessionEpoch = admin.sessionEpoch;
    state.userId = admin.id;
  }

  logActivity({
    action: "reset_password",
    entity: "user",
    entityLabel: "Все пользователи",
    detail: `Массовый сброс паролей (${count}). Администратору выдан временный пароль. Сессии завершены.`,
  });

  await showAlert(
    `Пароли сброшены у ${count} пользователей.\n\n` +
      "Данные и отчёты сохранены. Сессии других пользователей завершены.\n" +
      `Временный пароль администратора (${admin?.email || "admin"}): ${temp}\n` +
      "Остальным выдайте новый пароль через «Сброс пароля» в строке пользователя.",
    "Пароли сброшены"
  );
}

function enter(user) {
  try {
    startSession(user);
    state.page = "home";
    els.login.classList.add("hidden");
    els.app.classList.remove("hidden");
    els.app.setAttribute("aria-hidden", "false");

    els.userName.textContent = fullName(user);
    els.userRole.textContent = user.role;

    [...new Set(state.issues.filter((i) => i.recipientType !== "company" && i.userId).map((i) => i.userId))].forEach(
      syncIssueBalancesForUser
    );
    renderNav();
    render();
  } catch (err) {
    console.error(err);
    showAlert("Ошибка входа: " + (err && err.message ? err.message : err), "Ошибка");
  }
}

function logout() {
  if (state.role) {
    logActivity({
      action: "logout",
      entity: "session",
      entityLabel: currentActor().actorName,
      detail: "Выход из системы",
    });
  }
  state.role = null;
  state.userId = null;
  state.sessionEpoch = null;
  clearAuthSession();
  els.app.classList.add("hidden");
  els.app.setAttribute("aria-hidden", "true");
  els.login.classList.remove("hidden");
  closeModal();
  closeAppDialog();
}

function navButton(id, label, icon, active) {
  return `<button type="button" class="nav-item ${active ? "active" : ""}" data-page="${id}">${icon}<span>${label}</span></button>`;
}

function renderNav() {
  const p = state.page;
  if (state.role === "admin") {
    els.nav.innerHTML = `
      ${navButton("issues", "Выдача денежных средств", icons.cash, p === "issues")}
      ${navButton("receipts", "Получение денежных средств", icons.inflow, p === "receipts")}
      ${navButton("cashflow", "Движение денежных средств", icons.flow, p === "cashflow")}
      ${navButton("reports", "Отчёты", icons.report, p === "reports")}
      ${navButton("users", "Пользователи", icons.users, p === "users")}
      ${navButton("dicts", "Справочники", icons.book, p === "dicts" || String(p).startsWith("dict-"))}
      ${navButton("history", "Журнал действий", icons.history, p === "history")}
    `;
  } else {
    els.nav.innerHTML = `
      ${navButton("funds", "Мои средства", icons.wallet, p === "funds" || p === "my-income")}
      ${navButton("my-reports", "Создание отчётов", icons.report, p === "my-reports")}
      ${navButton("report-summary", "Сводка отчётов", icons.doc, p === "report-summary")}
    `;
  }

  els.nav.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.page = btn.dataset.page;
      renderNav();
      render();
    });
  });
}

function setTitle(t) {
  els.pageTitle.textContent = t;
}

function render() {
  if (state.role && !assertSession()) return;
  const page = state.page;
  if (state.role === "admin") {
    if (page === "home") return renderAdminHome();
    if (page === "issues" || page === "balances") return renderIssues();
    if (page === "receipts") return renderReceipts();
    if (page === "cashflow") return renderCashflow();
    if (page === "reports") return renderReportsAdmin();
    if (page === "users") return renderUsers();
    if (page === "dicts") return renderDictsBoard();
    if (page.startsWith("dict-")) return renderDictList(page.replace("dict-", ""));
    if (page === "history") return renderActivityLog();
  } else {
    if (page === "home") return renderUserHome();
    if (page === "funds" || page === "my-income") return renderFunds();
    if (page === "my-reports") return renderMyReports();
    if (page === "report-summary") return renderReportSummary();
  }
}

function balancesTable(rows) {
  return `
    <div class="users-panel">
      <table class="users-table funds-by-user">
        <thead>
          <tr>
            <th>Пользователь</th>
            <th>Выдано</th>
            <th>В отчётах</th>
            <th>Остаток</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map(
                    (r) => `<tr>
            <td class="user-cell">${r.name}</td>
            <td class="money">${money(r.issued)}</td>
            <td>${money(r.allocated)}</td>
            <td>
              <div class="money">${money(r.rest)}</div>
              <div class="mini-progress"><span style="width:${fundProgress(r.rest, r.issued)}%"></span></div>
            </td>
            <td class="hint-cell">${r.rest > 0 ? "есть нераспределённые" : "полностью распределено"}</td>
          </tr>`
                  )
                  .join("")
              : `<tr><td colspan="5" class="empty">Пока нет выдач пользователям</td></tr>`
          }
        </tbody>
      </table>
    </div>`;
}

function renderBalances() {
  // legacy alias — раздел объединён с выдачей
  renderIssues();
}

function renderAdminHome() {
  setTitle("Главная");
  const rows = usersFundRows();
  const issued = rows.reduce((s, r) => s + r.issued, 0);
  const rest = rows.reduce((s, r) => s + r.rest, 0);
  const activeUsers = state.users.filter((u) => u.status === "Активен").length;
  const withRest = rows.filter((r) => r.rest > 0).length;

  els.content.innerHTML = `
    <div class="grid-2">
      <div class="card soft">
        <h3 class="widget-title">${icons.invite} Сводка по системе</h3>
        <p style="margin:0 0 14px;color:var(--muted);font-size:.9rem;line-height:1.45">Контроль движения денежных средств между сотрудниками, компаниями и процедурами.</p>
        <button type="button" class="btn btn-primary" data-go="issues">Перейти к выдачам</button>
      </div>
      <button type="button" class="card card-link" data-go="issues">
        <h3 class="widget-title">${icons.wallet} Остаток нераспределённых средств</h3>
        <div class="stat" style="padding:0">
          <div class="value">${money(rest)}</div>
          <div class="progress"><span style="width:${fundProgress(rest, issued)}%"></span></div>
          <div class="hint">из ${money(issued)} выданных · у ${withRest} польз. есть остаток</div>
        </div>
        <span class="card-link-cta">Открыть выдачи →</span>
      </button>
    </div>

    <div class="section">
      <div class="grid-4">
        <button type="button" class="card stat card-link" data-go="users"><div class="label">Активные пользователи</div><div class="value">${activeUsers}</div><div class="hint">из ${state.users.length} учётных записей</div></button>
        <button type="button" class="card stat card-link" data-go="issues"><div class="label">Выдачи</div><div class="value">${state.issues.length}</div><div class="hint">всего операций</div></button>
        <button type="button" class="card stat card-link" data-go="reports"><div class="label">Отчёты</div><div class="value">${adminReports().length}</div><div class="hint">на проверке и утверждённые</div></button>
        <button type="button" class="card stat card-link" data-go="reports"><div class="label">На проверке</div><div class="value">${state.reports.filter((r) => r.status === "На проверке").length}</div><div class="hint">требуют внимания</div></button>
      </div>
    </div>

    <div class="section">
      <div class="section-head">
        <h3><span class="icon">${icons.rocket}</span> Часто используемые разделы</h3>
      </div>
      <div class="product-grid product-grid-3">
        <button type="button" class="product-card g1" data-go="issues">
          <span class="pc-icon">${icons.cash}</span>
          <strong>Выдача ДС</strong>
          <p>Создать выдачу — поступление у пользователя появится автоматически.</p>
          <span class="pc-go">Перейти</span>
        </button>
        <button type="button" class="product-card g3" data-go="reports">
          <span class="pc-icon">${icons.report}</span>
          <strong>Отчёты</strong>
          <p>Сводный просмотр отчётов по авторам, компаниям и процедурам.</p>
          <span class="pc-go">Перейти</span>
        </button>
        <button type="button" class="product-card g4" data-go="users">
          <span class="pc-icon">${icons.users}</span>
          <strong>Пользователи</strong>
          <p>Создание учётных записей, блокировка и сброс пароля.</p>
          <span class="pc-go">Перейти</span>
        </button>
      </div>
    </div>
  `;
  bindGo();
}
function renderUserHome() {
  setTitle("Главная");
  const funds = userFundSummary(currentUserId());
  const draftLike = myReports().filter((r) => r.status === "Черновик" || r.status === "На доработке" || r.status === "На проверке").length;
  const incomeMonth = myActiveIncomesThisMonth().reduce((s, r) => s + Number(r.amount || 0), 0);
  const monthLabel = formatMonthLabel();

  els.content.innerHTML = `
    <div class="grid-2">
      <div class="card soft">
        <h3 class="widget-title">${icons.wallet} Доступный остаток</h3>
        <div class="stat" style="padding:0">
          <div class="value">${money(funds.rest)}</div>
          <div class="progress"><span style="width:${fundProgress(funds.rest, funds.issued)}%"></span></div>
          <div class="hint">из ${money(funds.issued)} полученных · в отчётах ${money(funds.allocated)}</div>
        </div>
        <button type="button" class="btn btn-primary" style="margin-top:14px" data-go="funds">Мои средства</button>
      </div>
      <div class="card">
        <h3 class="widget-title">${icons.inflow} Принятые поступления</h3>
        <div class="stat" style="padding:0">
          <div class="value">${money(incomeMonth)}</div>
          <div class="hint">за ${monthLabel.toLowerCase()} · деньги бизнеса, принятые вами</div>
        </div>
        <button type="button" class="btn btn-secondary" style="margin-top:14px" data-action="new-income">Зарегистрировать приход</button>
      </div>
    </div>

    <div class="section">
      <div class="section-head">
        <h3><span class="icon">${icons.rocket}</span> Быстрые действия</h3>
      </div>
      <div class="product-grid product-grid-3">
        <button type="button" class="product-card g1" data-action="new-report">
          <span class="pc-icon">${icons.report}</span>
          <strong>Новый отчёт</strong>
          <p>Зафиксировать расходы по компании или процедуре банкротства.</p>
          <span class="pc-go">Создать</span>
        </button>
        <button type="button" class="product-card g2" data-action="new-income">
          <span class="pc-icon">${icons.inflow}</span>
          <strong>Зарегистрировать приход</strong>
          <p>Оплата от контрагента, поступление по процедуре или продажа имущества компании.</p>
          <span class="pc-go">Добавить</span>
        </button>
        <button type="button" class="product-card g4" data-go="report-summary">
          <span class="pc-icon">${icons.doc}</span>
          <strong>Сводка отчётов</strong>
          <p>Просмотр по периоду и статусам · в работе: ${draftLike}</p>
          <span class="pc-go">Перейти</span>
        </button>
      </div>
    </div>
  `;
  bindGo();
  document.querySelectorAll("[data-action='new-report']").forEach((el) => el.addEventListener("click", openNewReportModal));
  document.querySelectorAll("[data-action='new-income']").forEach((el) => el.addEventListener("click", openMyIncomeModal));
}

function reportsTable(rows) {
  if (!rows.length) return `<div class="empty card">Нет отчётов для отображения</div>`;
  return `
    <div class="table-wrap">
      <table class="data">
        <thead>
          <tr>
            <th>№</th><th>Название</th><th>Назначение</th><th>Автор</th><th>Компания</th><th>Сумма</th><th>Статус</th><th>Дата</th><th></th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (r) => `<tr>
              <td>${r.id}</td>
              <td>${r.title || "—"}</td>
              <td>${r.purpose || "—"}</td>
              <td>${reportAuthorName(r)}</td>
              <td>${r.company}</td>
              <td class="money">${money(r.sum)}</td>
              <td>${badge(r.status)}</td>
              <td>${r.date}</td>
              <td><button type="button" class="btn btn-secondary btn-sm" data-open-report="${r.id}">Открыть</button></td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function bindOpenReports(root = document) {
  root.querySelectorAll("[data-open-report]").forEach((btn) => {
    btn.addEventListener("click", () => openReportModal(btn.dataset.openReport));
  });
}

function renderReportsAdmin() {
  setTitle("Отчёты");
  const rows = adminReports();
  const awaiting = rows.filter((r) => r.status === "На проверке").length;
  const companies = [...new Set(adminReports().map((r) => r.company).filter(Boolean))];
  const purposes = [...new Set(adminReports().map((r) => r.purpose).filter(Boolean))];

  els.content.innerHTML = `
    <div class="workflow-hint card soft">
      <strong>Согласование отчётов.</strong>
      Пользователь отправляет отчёт на проверку → вы утверждаете, возвращаете на доработку или отклоняете с комментарием.
      Для компенсации из своих средств после утверждения доступен статус «Выплачено».
      Сейчас на проверке: <strong>${awaiting}</strong>
    </div>
    <div class="filters-bar">
      <div class="search-wrap filters-search">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <input class="search" id="report-search" placeholder="Поиск по автору, № или названию..." />
      </div>
      <select id="filter-status" class="filter-select" title="Статус">
        <option value="all" selected>Все статусы</option>
        <option value="На проверке">На проверке</option>
        <option value="На доработке">На доработке</option>
        <option value="Утверждён">Утверждён</option>
        <option value="Выплачено">Выплачено</option>
        <option value="Отклонён">Отклонён</option>
      </select>
      <select id="filter-company" class="filter-select" title="Компания">
        <option value="all">Все компании</option>
        ${companies.map((c) => `<option value="${c}">${c}</option>`).join("")}
      </select>
      <select id="filter-purpose" class="filter-select" title="Назначение">
        <option value="all">Все назначения</option>
        ${purposes.map((p) => `<option value="${p}">${p}</option>`).join("")}
      </select>
      <button type="button" class="btn btn-secondary btn-sm filters-reset" id="btn-clear-filters" title="Сбросить поиск и фильтры">Снять все фильтры</button>
    </div>
    <div id="reports-wrap"></div>
  `;

  const paint = () => {
    const q = document.getElementById("report-search").value.toLowerCase();
    const status = document.getElementById("filter-status").value;
    const company = document.getElementById("filter-company").value;
    const purpose = document.getElementById("filter-purpose").value;

    let list = adminReports();
    if (status !== "all") list = list.filter((r) => r.status === status);
    if (company !== "all") list = list.filter((r) => r.company === company);
    if (purpose !== "all") list = list.filter((r) => r.purpose === purpose);
    list = list.filter(
      (r) =>
        r.id.toLowerCase().includes(q) ||
        reportAuthorName(r).toLowerCase().includes(q) ||
        (r.title || "").toLowerCase().includes(q) ||
        (r.purpose || "").toLowerCase().includes(q) ||
        (r.company || "").toLowerCase().includes(q)
    );
    document.getElementById("reports-wrap").innerHTML = reportsTable(list);
    bindOpenReports();
  };

  ["report-search", "filter-status", "filter-company", "filter-purpose"].forEach((id) => {
    const el = document.getElementById(id);
    el.addEventListener(id === "report-search" ? "input" : "change", paint);
  });

  document.getElementById("btn-clear-filters").addEventListener("click", () => {
    document.getElementById("report-search").value = "";
    document.getElementById("filter-status").value = "all";
    document.getElementById("filter-company").value = "all";
    document.getElementById("filter-purpose").value = "all";
    paint();
  });

  paint();
}

function issueRecipientName(issue) {
  if (issue.recipientType === "company") {
    if (issue.recipientName) return issue.recipientName;
    const c = state.dicts.companies.find((x) => x.id === Number(issue.companyId));
    return c ? c.name : issue.company || "Компания";
  }
  const u = userById(issue.userId);
  return u ? fullName(u) : issue.user || "—";
}

function issueRecipientKind(issue) {
  return issue.recipientType === "company" ? "Компания" : "Пользователь";
}

function buildRecipientOptions() {
  const users = state.users
    .filter((u) => u.role === "Пользователь" && u.status === "Активен")
    .map((u) => ({
      key: `user:${u.id}`,
      type: "user",
      id: u.id,
      label: fullName(u),
      meta: "Пользователь",
      search: `${fullName(u)} ${u.email}`.toLowerCase(),
    }));
  const companies = state.dicts.companies
    .filter((c) => c.status === "Активна")
    .map((c) => ({
      key: `company:${c.id}`,
      type: "company",
      id: c.id,
      label: c.name,
      meta: "Компания",
      search: c.name.toLowerCase(),
    }));
  return [...users, ...companies].sort((a, b) => a.label.localeCompare(b.label, "ru"));
}

function issueRows(rows) {
  const iconArchive = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 11h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  const iconRestore = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  return rows
    .map((i) => {
      const archived = !isIssueActive(i);
      return `<tr class="${archived ? "is-archived" : ""}" data-issue-id="${i.id}">
        <td>${i.id}</td>
        <td>
          <div class="dict-primary">
            <div class="dict-name">${issueRecipientName(i)}</div>
            <div class="dict-sub">${issueRecipientKind(i)}</div>
          </div>
        </td>
        <td class="money">${money(i.amount)}</td>
        <td>${archived ? "—" : money(i.used)}</td>
        <td class="money">${archived ? "—" : money(i.rest)}</td>
        <td>${i.date}</td>
        <td>
          <div class="dict-primary">
            <div class="dict-name">${i.purpose || "—"}</div>
            ${
              i.issueKind
                ? `<div class="dict-sub">${i.issueKind === "targeted" ? "Целевая" : "Нецелевая"}</div>`
                : ""
            }
          </div>
        </td>
        <td>${i.company || "—"}</td>
        <td>${i.procedure || "—"}</td>
        <td>${i.note || "—"}</td>
        <td>${badge(archived ? "Архив" : "Активна")}</td>
        <td>
          <div class="dict-actions">
            <button type="button" class="dict-act archive" data-act="archive-issue" title="${archived ? "Вернуть из архива" : "Архивировать"}">${archived ? iconRestore : iconArchive}</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function bindIssueArchiveActions(rowsRoot = document) {
  rowsRoot.querySelectorAll("[data-act='archive-issue']").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const tr = btn.closest("tr");
      const id = Number(tr?.dataset.issueId);
      const issue = state.issues.find((x) => x.id === id);
      if (!issue) return;
      const archived = !isIssueActive(issue);
      const ok = await showConfirm(
        archived
          ? `Вернуть выдачу № ${issue.id} в учёт остатков?`
          : `Архивировать выдачу № ${issue.id}?\n\nОна перестанет учитываться в сводках и остатках. Удаление не выполняется.`,
        archived ? "Вернуть из архива" : "Архивировать выдачу"
      );
      if (!ok) return;
      issue.status = archived ? "Активна" : "Архив";
      logActivity({
        action: archived ? "restore" : "archive",
        entity: "issue",
        entityLabel: `Выдача № ${issue.id}`,
        detail: archived
          ? `Выдача возвращена в учёт (${money(issue.amount)})`
          : `Выдача архивирована и исключена из сводок (${money(issue.amount)})`,
      });
      if (issue.userId) syncIssueBalancesForUser(issue.userId);
      renderIssues();
    });
  });
}

function renderIssues() {
  setTitle("Выдача денежных средств");
  [...new Set(state.issues.filter((i) => i.recipientType !== "company" && i.userId).map((i) => i.userId))].forEach(
    syncIssueBalancesForUser
  );

  const recipients = [...new Set(state.issues.map((i) => issueRecipientName(i)).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
  const companies = [...new Set(state.issues.map((i) => i.company).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
  const purposes = [...new Set(state.issues.map((i) => i.purpose).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );

  els.content.innerHTML = `
    <p class="section-note" style="margin-top:0">Архивная выдача не входит в «получено / остаток», история сохраняется.</p>
    <div class="filters-bar">
      <select id="issue-filter-recipient" class="filter-select" title="Получатель">
        <option value="all" selected>Все получатели</option>
        ${recipients.map((n) => `<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join("")}
      </select>
      <label class="filter-date"><span>Период с</span><input type="date" id="issue-filter-from" class="filter-select" value="" /></label>
      <label class="filter-date"><span>по</span><input type="date" id="issue-filter-to" class="filter-select" value="" /></label>
      <select id="issue-filter-company" class="filter-select" title="Компания">
        <option value="all" selected>Все компании</option>
        ${companies.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}
      </select>
      <select id="issue-filter-purpose" class="filter-select" title="Назначение">
        <option value="all" selected>Все назначения</option>
        ${purposes.map((p) => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join("")}
      </select>
      <div class="filters-actions">
        <button type="button" class="btn btn-secondary btn-sm filters-reset" id="issue-clear-filters">Снять все фильтры</button>
        <button type="button" class="btn btn-primary btn-sm" id="btn-new-issue">Создать выдачу</button>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data">
        <thead>
          <tr>
            <th>ID</th><th>Получатель</th><th>Сумма</th><th>Использовано</th><th>Остаток</th><th>Дата</th><th>Назначение</th><th>Компания</th><th>Процедура</th><th>Комментарий</th><th>Статус</th><th></th>
          </tr>
        </thead>
        <tbody id="issues-body"></tbody>
      </table>
    </div>
  `;

  const paint = () => {
    const recipient = document.getElementById("issue-filter-recipient").value;
    const from = document.getElementById("issue-filter-from").value;
    const to = document.getElementById("issue-filter-to").value;
    const company = document.getElementById("issue-filter-company").value;
    const purpose = document.getElementById("issue-filter-purpose").value;

    let list = state.issues.slice();
    if (recipient !== "all") list = list.filter((i) => issueRecipientName(i) === recipient);
    if (from) list = list.filter((i) => i.date >= from);
    if (to) list = list.filter((i) => i.date <= to);
    if (company !== "all") list = list.filter((i) => i.company === company);
    if (purpose !== "all") list = list.filter((i) => i.purpose === purpose);

    document.getElementById("issues-body").innerHTML = list.length
      ? issueRows(list)
      : `<tr><td colspan="12" class="empty">Нет выдач по выбранным фильтрам</td></tr>`;
    bindIssueArchiveActions();
  };

  ["issue-filter-recipient", "issue-filter-from", "issue-filter-to", "issue-filter-company", "issue-filter-purpose"].forEach(
    (id) => document.getElementById(id).addEventListener("change", paint)
  );
  document.getElementById("issue-clear-filters").addEventListener("click", () => {
    document.getElementById("issue-filter-recipient").value = "all";
    document.getElementById("issue-filter-from").value = "";
    document.getElementById("issue-filter-to").value = "";
    document.getElementById("issue-filter-company").value = "all";
    document.getElementById("issue-filter-purpose").value = "all";
    paint();
  });
  document.getElementById("btn-new-issue").addEventListener("click", openIssueModal);
  paint();
}

function openIssueModal() {
  const recipients = buildRecipientOptions();
  const purposes = state.dicts.purposes.filter((p) => !String(p.status).startsWith("Архив"));
  const companies = state.dicts.companies.filter((c) => c.status === "Активна");
  const procedures = state.dicts.procedures.filter((c) => c.status === "Активна");

  showModal(`
    <h3>Новая выдача денежных средств</h3>
    <form id="issue-form" class="form-grid">
      <div class="field full">
        <span>Получатель</span>
        <div class="recipient-picker" id="recipient-picker">
          <input type="hidden" name="recipientKey" id="recipient-key" value="" required />
          <div class="search-wrap recipient-search-wrap">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            <input type="search" class="search" id="recipient-search" placeholder="Введите получателя" autocomplete="off" value="" />
          </div>
          <div class="recipient-list" id="recipient-list" role="listbox"></div>
        </div>
      </div>
      <label class="field"><span>Сумма, ₽</span><input name="amount" data-amount inputmode="decimal" required placeholder="0,00" value="50000,00" /></label>
      <label class="field"><span>Дата</span><input name="date" type="date" required value="2026-08-12" /></label>
      <div class="field full">
        <span>Тип выдачи</span>
        <div class="password-mode issue-kind-mode" role="group" aria-label="Тип выдачи">
          <button type="button" class="password-mode-btn is-active" data-issue-kind="targeted">Целевая</button>
          <button type="button" class="password-mode-btn" data-issue-kind="untargeted">Нецелевая</button>
        </div>
        <input type="hidden" name="issueKind" id="issue-kind" value="targeted" />
      </div>
      <label class="field full">
        <span id="issue-purpose-label">Назначение</span>
        <select name="purpose" id="issue-purpose" required></select>
      </label>
      <label class="field">
        <span>Компания <em class="optional-mark">необязательно</em></span>
        <select name="company" id="issue-company">
          <option value="">Не указано</option>
          ${companies.map((c) => `<option value="${c.name}">${c.name}</option>`).join("")}
        </select>
      </label>
      <label class="field">
        <span>Процедура <em class="optional-mark">необязательно</em></span>
        <select name="procedure">
          <option value="">Не указано</option>
          ${procedures.map((p) => `<option value="${p.name}">${p.name}</option>`).join("")}
        </select>
      </label>
      <label class="field full"><span>Комментарий</span><input name="note" placeholder="Дополнительные сведения" value="Оперативные расходы" /></label>
      <p class="login-hint full" style="grid-column:1/-1">После сохранения поступление отразится у выбранного получателя.</p>
    </form>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" data-close>Отмена</button>
      <button type="submit" form="issue-form" class="btn btn-primary">Сохранить выдачу</button>
    </div>
  `);

  bindAmountInputs(document.getElementById("issue-form"));
  bindRecipientPicker(recipients);

  const kindInput = document.getElementById("issue-kind");
  const purposeSelect = document.getElementById("issue-purpose");
  const purposeLabel = document.getElementById("issue-purpose-label");

  const syncIssuePurposeOptions = (kind) => {
    const prev = purposeSelect.value;
    if (kind === "untargeted") {
      purposeLabel.innerHTML = "Назначение";
      purposeSelect.innerHTML = `
        <option value="Пополнение баланса">Пополнение баланса</option>
        <option value="Иное">Иное</option>
      `;
      purposeSelect.value = prev === "Иное" ? "Иное" : "Пополнение баланса";
      purposeSelect.required = true;
      return;
    }

    purposeLabel.innerHTML = "Назначение";
    const options = purposes.length
      ? purposes.map((p) => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)}</option>`).join("")
      : `<option value="Иное">Иное</option>`;
    purposeSelect.innerHTML = `<option value="" disabled>Выберите назначение</option>${options}`;
    if (prev && [...purposeSelect.options].some((o) => o.value === prev && o.value)) {
      purposeSelect.value = prev;
    } else {
      purposeSelect.value = "";
    }
    purposeSelect.required = true;
  };

  document.querySelectorAll("[data-issue-kind]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const kind = btn.dataset.issueKind;
      kindInput.value = kind;
      document.querySelectorAll("[data-issue-kind]").forEach((b) => {
        b.classList.toggle("is-active", b.dataset.issueKind === kind);
      });
      syncIssuePurposeOptions(kind);
    });
  });
  syncIssuePurposeOptions("targeted");

  document.getElementById("issue-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const amount = parseAmount(fd.get("amount"));
    if (!Number.isFinite(amount) || amount <= 0) {
      showAlert("Укажите сумму с двумя знаками после запятой, например 50 000,00", "Проверьте сумму");
      return;
    }
    const key = String(fd.get("recipientKey") || "");
    const selected = recipients.find((r) => r.key === key);
    if (!selected) {
      showAlert("Выберите получателя из списка.", "Получатель не выбран");
      return;
    }

    const issueKind = String(fd.get("issueKind") || "targeted");
    const purpose = String(fd.get("purpose") || "").trim();
    if (!purpose) {
      showAlert(
        issueKind === "targeted"
          ? "Для целевой выдачи укажите назначение."
          : "Укажите назначение выдачи.",
        "Назначение не выбрано"
      );
      return;
    }
    if (issueKind === "untargeted" && purpose !== "Пополнение баланса" && purpose !== "Иное") {
      showAlert("Для нецелевой выдачи доступны только «Пополнение баланса» или «Иное».", "Проверьте назначение");
      return;
    }

    const row = {
      id: 100 + state.issues.length + 1,
      amount,
      date: String(fd.get("date")),
      used: 0,
      rest: amount,
      issueKind,
      purpose,
      company: String(fd.get("company") || ""),
      procedure: String(fd.get("procedure") || ""),
      note: String(fd.get("note") || "—"),
      status: "Активна",
      recipientType: selected.type,
      userId: selected.type === "user" ? selected.id : null,
      companyId: selected.type === "company" ? selected.id : null,
      recipientName: selected.label,
      createdByName: currentActor().actorName,
    };
    if (selected.type === "company" && !row.company) row.company = selected.label;

    state.issues.unshift(row);
    logActivity({
      action: "create",
      entity: "issue",
      entityLabel: `Выдача № ${row.id}`,
      detail: `Создана ${issueKind === "targeted" ? "целевая" : "нецелевая"} выдача ${money(amount)} для ${issueRecipientName(row)} (${issueRecipientKind(row)}) · ${purpose}`,
    });
    if (row.userId) syncIssueBalancesForUser(row.userId);
    closeModal();
    renderIssues();
  });
}

function bindRecipientPicker(recipients) {
  const search = document.getElementById("recipient-search");
  const list = document.getElementById("recipient-list");
  const hidden = document.getElementById("recipient-key");
  const companySelect = document.getElementById("issue-company");
  const picker = document.getElementById("recipient-picker");
  if (!search || !list || !hidden || !picker) return;

  const paint = (query = "") => {
    const q = query.toLowerCase().trim();
    const filtered = recipients.filter((r) => !q || r.search.includes(q) || r.meta.toLowerCase().includes(q));
    if (!filtered.length) {
      list.innerHTML = `<div class="recipient-empty">Ничего не найдено</div>`;
      return;
    }
    list.innerHTML = filtered
      .map(
        (r) => `<button type="button" class="recipient-option ${hidden.value === r.key ? "is-selected" : ""}" data-key="${r.key}" role="option">
          <span class="recipient-option-main">
            <strong>${escapeHtml(r.label)}</strong>
            <em>${escapeHtml(r.meta)}</em>
          </span>
        </button>`
      )
      .join("");

    list.querySelectorAll("[data-key]").forEach((btn) => {
      btn.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const item = recipients.find((r) => r.key === btn.dataset.key);
        if (!item) return;
        hidden.value = item.key;
        search.value = item.label;
        if (item.type === "company" && companySelect) {
          const opt = [...companySelect.options].find((o) => o.value === item.label);
          if (opt) companySelect.value = item.label;
        }
        list.classList.remove("is-open");
        paint(item.label);
        hidden.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
  };

  const showList = () => {
    list.classList.add("is-open");
    paint(search.value);
  };

  search.addEventListener("focus", showList);
  search.addEventListener("click", showList);
  search.addEventListener("input", () => {
    // если пользователь печатает — считаем выбор незавершённым, пока не кликнет опцию
    const exact = recipients.find((r) => r.label.toLowerCase() === search.value.trim().toLowerCase());
    hidden.value = exact ? exact.key : "";
    showList();
  });

  search.addEventListener("blur", () => {
    setTimeout(() => list.classList.remove("is-open"), 120);
  });

  list.classList.remove("is-open");
  paint("");
}

function isReceiptActive(r) {
  return !String(r?.status || "Активна").startsWith("Архив");
}

function activeReceipts(list = state.receipts) {
  return list.filter(isReceiptActive);
}

function receiptPayerName(r) {
  return r.payerName || (r.payerType === "company" ? "Компания" : "Пользователь");
}

function receiptPayerKind(r) {
  return r.payerType === "company" ? "Компания" : "Пользователь";
}

function receiptRows(rows) {
  const iconArchive = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 11h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  const iconRestore = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  return rows
    .map((r) => {
      const archived = !isReceiptActive(r);
      return `<tr class="${archived ? "is-archived" : ""}" data-receipt-id="${r.id}">
        <td>${r.id}</td>
        <td>
          <div class="dict-primary">
            <div class="dict-name">${receiptPayerName(r)}</div>
            <div class="dict-sub">${receiptPayerKind(r)}</div>
          </div>
        </td>
        <td class="money">${money(r.amount)}</td>
        <td>${r.date}</td>
        <td>${r.purpose || "—"}</td>
        <td>${r.issueId ? `Выдача № ${r.issueId}` : "—"}</td>
        <td>${r.note || "—"}</td>
        <td>${badge(archived ? "Архив" : "Активна")}</td>
        <td>
          <div class="dict-actions">
            <button type="button" class="dict-act archive" data-act="archive-receipt" title="${archived ? "Вернуть из архива" : "Архивировать"}">${archived ? iconRestore : iconArchive}</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function bindReceiptArchiveActions() {
  document.querySelectorAll("[data-act='archive-receipt']").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = Number(btn.closest("tr")?.dataset.receiptId);
      const row = state.receipts.find((x) => x.id === id);
      if (!row) return;
      const archived = !isReceiptActive(row);
      const ok = await showConfirm(
        archived
          ? `Вернуть поступление № ${row.id} в учёт движения?`
          : `Архивировать поступление № ${row.id}?\n\nОно перестанет учитываться в движении ДС. Удаление не выполняется.`,
        archived ? "Вернуть из архива" : "Архивировать поступление"
      );
      if (!ok) return;
      row.status = archived ? "Активна" : "Архив";
      logActivity({
        action: archived ? "restore" : "archive",
        entity: "receipt",
        entityLabel: `Поступление № ${row.id}`,
        detail: archived
          ? `Поступление возвращено в учёт (${money(row.amount)}) от ${receiptPayerName(row)}`
          : `Поступление архивировано (${money(row.amount)}) от ${receiptPayerName(row)}`,
      });
      if (row.issueId && row.payerType === "user" && row.payerId) {
        syncIssueBalancesForUser(row.payerId);
      }
      renderReceipts();
    });
  });
}

function renderReceipts() {
  setTitle("Получение денежных средств");

  const payers = [...new Set(state.receipts.map((r) => receiptPayerName(r)).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
  const companies = [
    ...new Set(
      state.receipts
        .filter((r) => r.payerType === "company")
        .map((r) => receiptPayerName(r))
        .filter(Boolean)
    ),
  ].sort((a, b) => a.localeCompare(b, "ru"));
  const purposes = [...new Set(state.receipts.map((r) => r.purpose).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );

  els.content.innerHTML = `
    <p class="section-note" style="margin-top:0">
      Здесь фиксируются поступления администратору: от пользователей (возвраты, передачи) и от компаний.
      Удаление не используется — записи архивируются и не входят в сводку движения.
    </p>
    <div class="filters-bar">
      <select id="receipt-filter-payer" class="filter-select" title="От кого">
        <option value="all" selected>Все плательщики</option>
        ${payers.map((n) => `<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join("")}
      </select>
      <label class="filter-date"><span>Период с</span><input type="date" id="receipt-filter-from" class="filter-select" value="" /></label>
      <label class="filter-date"><span>по</span><input type="date" id="receipt-filter-to" class="filter-select" value="" /></label>
      <select id="receipt-filter-company" class="filter-select" title="Компания">
        <option value="all" selected>Все компании</option>
        ${companies.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}
      </select>
      <select id="receipt-filter-purpose" class="filter-select" title="Назначение">
        <option value="all" selected>Все назначения</option>
        ${purposes.map((p) => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join("")}
      </select>
      <div class="filters-actions">
        <button type="button" class="btn btn-secondary btn-sm filters-reset" id="receipt-clear-filters">Снять все фильтры</button>
        <button type="button" class="btn btn-primary btn-sm" id="btn-new-receipt">Зафиксировать поступление</button>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data">
        <thead>
          <tr>
            <th>ID</th><th>От кого</th><th>Сумма</th><th>Дата</th><th>Назначение</th><th>Выдача</th><th>Комментарий</th><th>Статус</th><th></th>
          </tr>
        </thead>
        <tbody id="receipts-body"></tbody>
      </table>
    </div>
  `;

  const paint = () => {
    const payer = document.getElementById("receipt-filter-payer").value;
    const from = document.getElementById("receipt-filter-from").value;
    const to = document.getElementById("receipt-filter-to").value;
    const company = document.getElementById("receipt-filter-company").value;
    const purpose = document.getElementById("receipt-filter-purpose").value;

    let list = state.receipts.slice();
    if (payer !== "all") list = list.filter((r) => receiptPayerName(r) === payer);
    if (from) list = list.filter((r) => r.date >= from);
    if (to) list = list.filter((r) => r.date <= to);
    if (company !== "all") {
      list = list.filter((r) => r.payerType === "company" && receiptPayerName(r) === company);
    }
    if (purpose !== "all") list = list.filter((r) => r.purpose === purpose);

    document.getElementById("receipts-body").innerHTML = list.length
      ? receiptRows(list)
      : `<tr><td colspan="9" class="empty">Нет поступлений по выбранным фильтрам</td></tr>`;
    bindReceiptArchiveActions();
  };

  ["receipt-filter-payer", "receipt-filter-from", "receipt-filter-to", "receipt-filter-company", "receipt-filter-purpose"].forEach(
    (id) => document.getElementById(id).addEventListener("change", paint)
  );
  document.getElementById("receipt-clear-filters").addEventListener("click", () => {
    document.getElementById("receipt-filter-payer").value = "all";
    document.getElementById("receipt-filter-from").value = "";
    document.getElementById("receipt-filter-to").value = "";
    document.getElementById("receipt-filter-company").value = "all";
    document.getElementById("receipt-filter-purpose").value = "all";
    paint();
  });
  document.getElementById("btn-new-receipt").addEventListener("click", openReceiptModal);
  paint();
}

function openReceiptModal() {
  const payers = buildRecipientOptions(); // пользователи + компании
  showModal(`
    <h3>Новое поступление денежных средств</h3>
    <form id="receipt-form" class="form-grid">
      <div class="field full">
        <span>От кого (плательщик)</span>
        <div class="recipient-picker" id="recipient-picker">
          <input type="hidden" name="payerKey" id="recipient-key" value="" required />
          <div class="search-wrap recipient-search-wrap">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            <input type="search" class="search" id="recipient-search" placeholder="Введите плательщика" autocomplete="off" value="" />
          </div>
          <div class="recipient-list" id="recipient-list" role="listbox"></div>
        </div>
      </div>
      <label class="field"><span>Сумма, ₽</span><input name="amount" data-amount inputmode="decimal" required placeholder="0,00" value="25000,00" /></label>
      <label class="field"><span>Дата</span><input name="date" type="date" required value="2026-08-13" /></label>
      <label class="field full" id="receipt-issue-wrap">
        <span>Выдача для списания остатка</span>
        <select name="issueId" id="receipt-issue">
          <option value="">Сначала выберите пользователя</option>
        </select>
        <p class="password-hint" id="receipt-issue-hint">Для возврата от пользователя укажите выдачу — остаток по ней уменьшится.</p>
      </label>
      <label class="field full"><span>Назначение</span><input name="purpose" placeholder="Например, возврат остатка / финансирование" value="Поступление средств" /></label>
      <label class="field full"><span>Комментарий <em class="optional-mark">необязательно</em></span><input name="note" placeholder="Дополнительные сведения" /></label>
      <p class="login-hint full" style="grid-column:1/-1">Поступление отражается у администратора и участвует в разделе «Движение денежных средств». Возврат от пользователя уменьшает остаток выбранной выдачи.</p>
    </form>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" data-close>Отмена</button>
      <button type="submit" form="receipt-form" class="btn btn-primary">Сохранить поступление</button>
    </div>
  `);

  bindAmountInputs(document.getElementById("receipt-form"));
  bindRecipientPicker(payers);

  const issueWrap = document.getElementById("receipt-issue-wrap");
  const issueSelect = document.getElementById("receipt-issue");
  const issueHint = document.getElementById("receipt-issue-hint");
  const purposeInput = document.querySelector('#receipt-form [name="purpose"]');

  const syncIssueField = () => {
    const key = document.getElementById("recipient-key")?.value || "";
    const selected = payers.find((r) => r.key === key);
    if (!selected || selected.type !== "user") {
      issueWrap.classList.add("hidden");
      issueSelect.innerHTML = `<option value="">—</option>`;
      issueSelect.required = false;
      issueSelect.value = "";
      return;
    }
    issueWrap.classList.remove("hidden");
    syncIssueBalancesForUser(selected.id);
    const issues = activeIssuesForUser(selected.id, { withRestOnly: true });
    if (!issues.length) {
      issueSelect.innerHTML = `<option value="">Нет выдач с остатком</option>`;
      issueSelect.required = true;
      issueHint.textContent = "У пользователя нет активных выдач с остатком — возврат зафиксировать нельзя.";
      return;
    }
    issueSelect.innerHTML =
      `<option value="" disabled selected>Выберите выдачу</option>` +
      issues.map((i) => `<option value="${i.id}">${escapeHtml(issueOptionLabel(i))}</option>`).join("");
    issueSelect.required = true;
    issueHint.textContent = "Сумма возврата не может превышать остаток по выбранной выдаче.";
    if (purposeInput && (!purposeInput.value || purposeInput.value === "Поступление средств")) {
      purposeInput.value = "Возврат неиспользованных средств";
    }
  };

  const keyInput = document.getElementById("recipient-key");
  keyInput.addEventListener("change", syncIssueField);
  document.getElementById("recipient-list")?.addEventListener("mousedown", () => setTimeout(syncIssueField, 0));
  document.getElementById("recipient-search")?.addEventListener("blur", () => setTimeout(syncIssueField, 150));
  syncIssueField();

  document.getElementById("receipt-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const amount = parseAmount(fd.get("amount"));
    if (!Number.isFinite(amount) || amount <= 0) {
      showAlert("Укажите сумму с двумя знаками после запятой, например 25 000,00", "Проверьте сумму");
      return;
    }
    const key = String(fd.get("payerKey") || "");
    const selected = payers.find((r) => r.key === key);
    if (!selected) {
      showAlert("Выберите плательщика из списка.", "Плательщик не выбран");
      return;
    }

    let issueId = null;
    if (selected.type === "user") {
      issueId = Number(fd.get("issueId") || 0);
      if (!issueId) {
        showAlert("Для возврата от пользователя выберите выдачу, с которой списывается остаток.", "Выдача не выбрана");
        return;
      }
      const available = issueAvailableRest(issueId);
      if (amount > available + 0.001) {
        showAlert(
          `Сумма возврата превышает остаток по выдаче № ${issueId}.\nДоступно: ${money(available)}.`,
          "Превышение остатка"
        );
        return;
      }
    }

    const row = {
      id: 200 + state.receipts.length + 1,
      payerType: selected.type,
      payerId: selected.id,
      payerName: selected.label,
      amount,
      date: String(fd.get("date")),
      purpose: String(fd.get("purpose") || "").trim(),
      note: String(fd.get("note") || "").trim(),
      status: "Активна",
      issueId,
      createdByName: currentActor().actorName,
    };
    state.receipts.unshift(row);
    if (issueId) syncIssueBalancesForUser(selected.id);
    logActivity({
      action: "create",
      entity: "receipt",
      entityLabel: `Поступление № ${row.id}`,
      detail: issueId
        ? `Возврат ${money(amount)} от ${row.payerName} по выдаче № ${issueId}`
        : `Поступление ${money(amount)} от ${row.payerName} (${receiptPayerKind(row)})`,
    });
    closeModal();
    renderReceipts();
  });
}

/** Реестр движения: поступления vs выдачи за период */
function collectCashMovements(from = "", to = "") {
  const inRange = (date) => {
    if (from && date < from) return false;
    if (to && date > to) return false;
    return true;
  };

  const adminName = "Балашова Юлия Алексеевна";
  const rows = [];
  activeReceipts().forEach((r) => {
    if (!inRange(r.date)) return;
    rows.push({
      date: r.date,
      kind: "in",
      kindLabel: "Поступление",
      counterparty: receiptPayerName(r),
      counterpartyKind: receiptPayerKind(r),
      actor: r.createdByName || adminName,
      inflow: Number(r.amount) || 0,
      outflow: 0,
      ref: `П-${r.id}`,
      note: r.purpose || r.note || "",
    });
  });
  activeIssues().forEach((i) => {
    if (!inRange(i.date)) return;
    rows.push({
      date: i.date,
      kind: "out",
      kindLabel: "Выдача",
      counterparty: issueRecipientName(i),
      counterpartyKind: issueRecipientKind(i),
      actor: i.createdByName || adminName,
      inflow: 0,
      outflow: Number(i.amount) || 0,
      ref: `В-${i.id}`,
      note: i.purpose || i.note || "",
    });
  });

  rows.sort((a, b) => (a.date === b.date ? a.ref.localeCompare(b.ref) : a.date.localeCompare(b.date)));
  return rows;
}

function renderCashflow() {
  setTitle("Движение денежных средств");
  const defaultFrom = "2026-07-01";
  const defaultTo = "2026-08-13";

  els.content.innerHTML = `
    <div class="filters-bar">
      <label class="filter-date"><span>Период с</span><input type="date" id="cf-from" class="filter-select" value="${defaultFrom}" /></label>
      <label class="filter-date"><span>по</span><input type="date" id="cf-to" class="filter-select" value="${defaultTo}" /></label>
      <select id="cf-kind" class="filter-select" title="Тип операции">
        <option value="all">Все операции</option>
        <option value="in">Только поступления</option>
        <option value="out">Только выдачи</option>
      </select>
      <div class="search-wrap filters-search">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <input class="search" id="cf-search" placeholder="Поиск по контрагенту или назначению..." />
      </div>
      <button type="button" class="btn btn-secondary btn-sm filters-reset" id="cf-clear">Снять все фильтры</button>
    </div>
    <div class="grid-3" id="cf-stats"></div>
    <div class="section" style="margin-top:18px">
      <div class="section-head"><h3><span class="icon">${icons.doc}</span> Реестр операций</h3></div>
      <div class="table-wrap" id="cf-journal"></div>
    </div>
  `;

  const paint = () => {
    const from = document.getElementById("cf-from").value;
    const to = document.getElementById("cf-to").value;
    const kind = document.getElementById("cf-kind").value;
    const q = document.getElementById("cf-search").value.toLowerCase().trim();

    let moves = collectCashMovements(from, to);
    if (kind !== "all") moves = moves.filter((m) => m.kind === kind);
    if (q) {
      moves = moves.filter(
        (m) =>
          m.counterparty.toLowerCase().includes(q) ||
          m.note.toLowerCase().includes(q) ||
          m.ref.toLowerCase().includes(q) ||
          m.kindLabel.toLowerCase().includes(q)
      );
    }

    const inflow = Math.round(moves.reduce((s, m) => s + m.inflow, 0) * 100) / 100;
    const outflow = Math.round(moves.reduce((s, m) => s + m.outflow, 0) * 100) / 100;
    const delta = Math.round((inflow - outflow) * 100) / 100;

    document.getElementById("cf-stats").innerHTML = `
      <div class="card soft stat"><div class="label">Поступления (приход)</div><div class="value">${money(inflow)}</div><div class="hint">входящие за период</div></div>
      <div class="card soft stat"><div class="label">Выдачи (расход)</div><div class="value">${money(outflow)}</div><div class="hint">исходящие за период</div></div>
      <div class="card soft stat"><div class="label">Сальдо за период</div><div class="value">${money(delta)}</div><div class="hint">поступления − выдачи</div></div>
    `;

    let running = 0;
    const body = moves.length
      ? moves
          .map((m) => {
            running = Math.round((running + m.inflow - m.outflow) * 100) / 100;
            return `<tr>
              <td>${formatDate(m.date)}</td>
              <td>${m.ref}</td>
              <td><span class="history-pill ${m.kind === "in" ? "pill-in" : "pill-out"}">${m.kindLabel}</span></td>
              <td>
                <div class="dict-primary">
                  <div class="dict-name">${m.counterparty}</div>
                  <div class="dict-sub">${m.counterpartyKind}</div>
                </div>
              </td>
              <td class="user-cell">${m.actor || "—"}</td>
              <td class="money">${m.inflow ? money(m.inflow) : "—"}</td>
              <td class="money">${m.outflow ? money(m.outflow) : "—"}</td>
              <td class="money ${running >= 0 ? "delta-plus" : "delta-minus"}">${money(running)}</td>
              <td>${m.note || "—"}</td>
            </tr>`;
          })
          .join("")
      : `<tr><td colspan="9" class="empty">Нет операций за выбранный период</td></tr>`;

    document.getElementById("cf-journal").innerHTML = `
      <table class="data">
        <thead>
          <tr>
            <th>Дата</th>
            <th>№</th>
            <th>Операция</th>
            <th>Контрагент</th>
            <th>Кем зафиксировано</th>
            <th>Поступление</th>
            <th>Выдача</th>
            <th>Сальдо нараст.</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>${body}</tbody>
        <tfoot>
          <tr>
            <td colspan="5"><strong>Итого за период</strong></td>
            <td class="money"><strong>${money(inflow)}</strong></td>
            <td class="money"><strong>${money(outflow)}</strong></td>
            <td class="money ${delta >= 0 ? "delta-plus" : "delta-minus"}"><strong>${money(delta)}</strong></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    `;
  };

  ["cf-from", "cf-to", "cf-kind", "cf-search"].forEach((id) => {
    document.getElementById(id).addEventListener(id === "cf-search" ? "input" : "change", paint);
  });
  document.getElementById("cf-clear").addEventListener("click", () => {
    document.getElementById("cf-from").value = defaultFrom;
    document.getElementById("cf-to").value = defaultTo;
    document.getElementById("cf-kind").value = "all";
    document.getElementById("cf-search").value = "";
    paint();
  });
  paint();
}

function formatDate(iso) {
  const [y, m, d] = String(iso).split("-");
  if (!y || !m || !d) return iso;
  return `${d}.${m}.${y}`;
}

function renderUsers() {
  setTitle("");
  els.content.innerHTML = `
    <div class="page-heading">
      <div class="ph-icon">${icons.users}</div>
      <div>
        <h2>Пользователи</h2>
        <p>Управление учётными записями и ролями системы</p>
      </div>
    </div>

    <div class="users-toolbar">
      <div class="search-wrap">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <input class="search" id="user-search" placeholder="Поиск по email или имени..." />
      </div>
      <button type="button" class="btn btn-secondary btn-toolbar" id="btn-logout-all" title="Завершить все активные сессии">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 7V5a2 2 0 0 1 2-2h7v18h-7a2 2 0 0 1-2-2v-2M15 12H4m0 0 3-3M4 12l3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Выйти всех
      </button>
      <button type="button" class="btn btn-secondary btn-toolbar" id="btn-reset-passwords" title="Сбросить пароли всех пользователей">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="8" cy="14" r="3.2" stroke="currentColor" stroke-width="1.8"/><path d="M10.5 11.5 18 4l2 2-2.5 2.5L19 10l-2 1-1.5-1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Сбросить все пароли
      </button>
      <button type="button" class="btn btn-primary btn-toolbar" id="btn-new-user">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Добавить
      </button>
    </div>

    <div class="users-panel">
      <table class="users-table">
        <thead>
          <tr>
            <th>Пользователь</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Роль</th>
            <th>Статус</th>
            <th>Дата регистрации</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody id="users-body">${usersRows(state.users)}</tbody>
      </table>
    </div>
  `;
  document.getElementById("btn-new-user").addEventListener("click", () => openUserModal());
  document.getElementById("btn-logout-all").addEventListener("click", async () => {
    const others = state.users.filter((u) => u.id !== state.userId && u.status === "Активен");
    const ok = await showConfirm(
      `Завершить все активные сессии других пользователей (${others.length})?\n\n` +
        "Это принудительный выход всех, кто сейчас в системе (кроме вас).\n" +
        "Пароли не меняются — войти снова можно теми же учётными данными.\n" +
        "Учётные записи не блокируются, данные не удаляются.",
      "Подтвердите действие"
    );
    if (!ok) return;
    others.forEach((u) => bumpSession(u));
    logActivity({
      action: "kick",
      entity: "session",
      entityLabel: "Все пользователи",
      detail: `Принудительный выход всех активных сессий (${others.length}), кроме текущего администратора`,
    });
    await showAlert(
      `Принудительный выход выполнен для ${others.length} пользователей.\nПри следующем действии они будут возвращены на экран входа.`,
      "Сессии завершены"
    );
  });
  document.getElementById("btn-reset-passwords").addEventListener("click", resetAllUserPasswords);
  document.getElementById("user-search").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = state.users.filter(
      (u) => fullName(u).toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
    document.getElementById("users-body").innerHTML = usersRows(filtered);
    bindUserActions();
  });
  bindUserActions();
}

function usersRows(rows) {
  const iconLogout = `<svg viewBox="0 0 24 24" fill="none"><path d="M10 7V5a2 2 0 0 1 2-2h7v18h-7a2 2 0 0 1-2-2v-2M15 12H4m0 0 3-3M4 12l3 3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconKey = `<svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="14" r="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M10.5 11.5 18 4l2 2-2.5 2.5L19 10l-2 1-1.5-1.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconLock = `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  const iconUnlock = `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 11V8a4 4 0 0 1 7.5-2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  const iconEdit = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20h4l11-11-4-4L4 16v4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m13 5 4 4" stroke="currentColor" stroke-width="1.7"/></svg>`;
  const iconMailOk = `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="m8.5 12.2 2.2 2.2 4.8-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  return rows
    .map((u) => {
      const blocked = u.status === "Заблокирован";
      return `<tr data-id="${u.id}">
      <td class="user-cell">${fullName(u)}</td>
      <td>
        <span class="email-cell">
          ${u.email}
          <span class="ok-dot" title="Email указан">${iconMailOk}</span>
        </span>
      </td>
      <td class="phone-cell">${u.phone}</td>
      <td>
        <select class="role-select ${u.role === "Администратор" ? "is-admin" : ""}" data-act="role" aria-label="Роль">
          <option value="Пользователь" ${u.role === "Пользователь" ? "selected" : ""}>Пользователь</option>
          <option value="Администратор" ${u.role === "Администратор" ? "selected" : ""}>Администратор</option>
        </select>
      </td>
      <td>${badge(u.status)}</td>
      <td class="muted-date">${formatDate(u.created)}</td>
      <td>
        <div class="icon-actions">
          <button type="button" class="icon-btn act-logout" data-act="kick" title="Принудительный выход">${iconLogout}</button>
          <button type="button" class="icon-btn act-mail" data-act="reset" title="Сброс пароля">${iconKey}</button>
          <button type="button" class="icon-btn act-lock" data-act="toggle" title="${blocked ? "Активировать" : "Заблокировать"}">${blocked ? iconUnlock : iconLock}</button>
          <button type="button" class="icon-btn act-edit" data-act="edit" title="Редактировать">${iconEdit}</button>
        </div>
      </td>
    </tr>`;
    })
    .join("");
}

function bindUserActions() {
  document.querySelectorAll("#users-body tr").forEach((tr) => {
    const id = Number(tr.dataset.id);
    const user = () => state.users.find((x) => x.id === id);

    tr.querySelector('[data-act="toggle"]')?.addEventListener("click", () => {
      const u = user();
      const blocking = u.status === "Активен";
      u.status = blocking ? "Заблокирован" : "Активен";
      logActivity({
        action: blocking ? "block" : "unblock",
        entity: "user",
        entityLabel: fullName(u),
        detail: blocking ? "Учётная запись заблокирована" : "Учётная запись разблокирована",
      });
      if (blocking) {
        invalidateUserSession(u, {
          message: "Учётная запись заблокирована администратором.",
        });
        if (!state.role) return;
      }
      renderUsers();
    });
    tr.querySelector('[data-act="reset"]')?.addEventListener("click", async () => {
      const u = user();
      const ok = await showConfirm(
        `Сбросить пароль для «${fullName(u)}»?\n\n` +
          "Старый пароль перестанет работать.\n" +
          "Активная сессия пользователя будет завершена.\n" +
          "Отчёты и данные сохранятся. Новый временный пароль нужно передать пользователю лично.",
        "Сброс пароля"
      );
      if (!ok) return;
      const temp = generateTempPassword();
      u.password = temp;
      u.mustResetPassword = false;
      bumpSession(u);
      const kickedSelf = state.userId === u.id;
      if (kickedSelf) {
        state.sessionEpoch = u.sessionEpoch;
      }
      logActivity({
        action: "reset_password",
        entity: "user",
        entityLabel: fullName(u),
        detail: "Пароль пользователя сброшен, выдан временный. Сессия пользователя завершена.",
      });
      showAlert(
        `Пароль для «${fullName(u)}» сброшен.\nВременный пароль: ${temp}\nОтчёты и данные сохранены.\nАктивная сессия пользователя завершена — передайте новый пароль лично.`,
        "Пароль сброшен"
      );
    });
    tr.querySelector('[data-act="kick"]')?.addEventListener("click", async () => {
      const u = user();
      if (u.id === state.userId) {
        showAlert("Нельзя завершить собственную сессию этой кнопкой. Используйте «Выйти».", "Сессия");
        return;
      }
      const ok = await showConfirm(
        `Принудительно завершить сессию «${fullName(u)}»?\n\n` +
          "Пользователь будет выброшен из системы при следующем действии.\n" +
          "Пароль не меняется — войти снова можно теми же учётными данными.\n" +
          "Данные и отчёты не удаляются.",
        "Принудительный выход"
      );
      if (!ok) return;
      bumpSession(u);
      logActivity({
        action: "kick",
        entity: "session",
        entityLabel: fullName(u),
        detail: "Принудительный выход пользователя",
      });
      showAlert(
        `Сессия «${fullName(u)}» завершена.\nПри следующем действии пользователь вернётся на экран входа.`,
        "Выход выполнен"
      );
    });
    tr.querySelector('[data-act="edit"]')?.addEventListener("click", () => {
      openUserModal(user());
    });
    tr.querySelector('[data-act="role"]')?.addEventListener("change", (e) => {
      const u = user();
      const prev = u.role;
      u.role = e.target.value;
      e.target.classList.toggle("is-admin", u.role === "Администратор");
      logActivity({
        action: "update",
        entity: "user",
        entityLabel: fullName(u),
        detail: `Роль изменена: ${prev} → ${u.role}`,
      });
      if (u.id === state.userId) {
        state.role = u.role === "Администратор" ? "admin" : "user";
        els.userRole.textContent = u.role;
        renderNav();
        render();
      }
    });
  });
}

function generateTempPassword(length = 10) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  let out = "";
  const bytes = new Uint8Array(length);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  for (let i = 0; i < length; i++) out += alphabet[bytes[i] % alphabet.length];
  return out;
}

function openUserModal(existing) {
  const edit = Boolean(existing);
  const generated = generateTempPassword();
  showModal(`
    <h3>${edit ? "Редактирование пользователя" : "Новый пользователь"}</h3>
    <form id="user-form" class="form-grid">
      <label class="field"><span>Фамилия</span><input name="lastName" required placeholder="Иванов" value="${existing?.lastName || ""}" /></label>
      <label class="field"><span>Имя</span><input name="firstName" required placeholder="Иван" value="${existing?.firstName || ""}" /></label>
      <label class="field full">
        <span>Отчество <em class="optional-mark">необязательно</em></span>
        <input name="middleName" placeholder="Иванович" value="${existing?.middleName || ""}" />
      </label>
      <label class="field"><span>E-mail</span><input name="email" type="email" required placeholder="name@example.com" value="${existing?.email || ""}" /></label>
      <label class="field"><span>Телефон</span><input name="phone" id="user-phone" inputmode="tel" placeholder="+7 (___) ___-__-__" value="${existing?.phone || ""}" /></label>
      <label class="field"><span>Роль</span>
        <select name="role">
          <option ${existing?.role === "Пользователь" ? "selected" : ""}>Пользователь</option>
          <option ${existing?.role === "Администратор" ? "selected" : ""}>Администратор</option>
        </select>
      </label>
      ${
        edit
          ? ""
          : `<div class="field full password-field">
        <span>Пароль</span>
        <div class="password-mode" role="group" aria-label="Способ задания пароля">
          <button type="button" class="password-mode-btn is-active" data-pass-mode="auto">Сгенерировать</button>
          <button type="button" class="password-mode-btn" data-pass-mode="manual">Задать вручную</button>
        </div>
        <div class="password-input-row">
          <input name="password" id="user-password" type="text" required value="${generated}" readonly autocomplete="new-password" />
          <button type="button" class="btn btn-secondary btn-sm" id="btn-regen-password" title="Сгенерировать новый пароль">Обновить</button>
        </div>
        <p class="password-hint" id="password-hint">Пароль сгенерирован автоматически. Можно обновить или переключиться на ручной ввод.</p>
      </div>`
      }
    </form>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" data-close>Отмена</button>
      <button type="submit" form="user-form" class="btn btn-primary">${edit ? "Сохранить" : "Создать"}</button>
    </div>
  `);

  bindPhoneMask(document.getElementById("user-phone"));

  if (!edit) {
    const passInput = document.getElementById("user-password");
    const regenBtn = document.getElementById("btn-regen-password");
    const hint = document.getElementById("password-hint");
    let mode = "auto";

    const setMode = (next) => {
      mode = next;
      document.querySelectorAll("[data-pass-mode]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.passMode === mode);
      });
      if (mode === "auto") {
        passInput.value = generateTempPassword();
        passInput.readOnly = true;
        regenBtn.classList.remove("hidden");
        hint.textContent = "Пароль сгенерирован автоматически. Можно обновить или переключиться на ручной ввод.";
      } else {
        passInput.readOnly = false;
        passInput.value = "";
        passInput.placeholder = "Введите пароль";
        regenBtn.classList.add("hidden");
        hint.textContent = "Задайте свой пароль. Передайте его пользователю при выдаче доступа.";
        passInput.focus();
      }
    };

    document.querySelectorAll("[data-pass-mode]").forEach((btn) => {
      btn.addEventListener("click", () => setMode(btn.dataset.passMode));
    });
    regenBtn.addEventListener("click", () => {
      if (mode !== "auto") return;
      passInput.value = generateTempPassword();
    });
  }

  document.getElementById("user-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const phoneRaw = String(fd.get("phone") || "");
    const phoneDigits = phoneRaw.replace(/\D/g, "");
    if (phoneRaw && phoneDigits.length !== 11) {
      showAlert("Введите полный номер телефона в формате +7 (XXX) XXX-XX-XX", "Проверьте телефон");
      return;
    }
    const payload = {
      lastName: String(fd.get("lastName")).trim(),
      firstName: String(fd.get("firstName")).trim(),
      middleName: String(fd.get("middleName") || "").trim(),
      email: String(fd.get("email")),
      phone: phoneRaw ? formatRuPhone(phoneRaw) : "—",
      role: String(fd.get("role")),
    };
    if (edit) {
      Object.assign(existing, payload);
      logActivity({
        action: "update",
        entity: "user",
        entityLabel: fullName(existing),
        detail: "Карточка пользователя изменена",
      });
    } else {
      const password = String(fd.get("password") || "").trim();
      if (password.length < 6) {
        showAlert("Пароль должен быть не короче 6 символов.", "Проверьте пароль");
        return;
      }
      const created = {
        id: state.users.length + 10,
        ...payload,
        password,
        mustResetPassword: false,
        sessionEpoch: 0,
        status: "Активен",
        created: "2026-08-12",
      };
      state.users.unshift(created);
      logActivity({
        action: "create",
        entity: "user",
        entityLabel: fullName(created),
        detail: `Создан пользователь ${created.email}`,
      });
      closeModal();
      renderUsers();
      showAlert(
        `Пользователь «${fullName(created)}» создан.\nПароль для входа: ${password}\nСохраните и передайте его пользователю.`,
        "Пользователь создан"
      );
      return;
    }
    closeModal();
    renderUsers();
  });
}

const DICT_META = {
  companies: {
    title: "Компании",
    desc: "Организации, по которым ведутся выдачи и отчёты",
    icon: "building",
  },
  procedures: {
    title: "Процедуры",
    desc: "Дела и процедуры банкротства",
    icon: "folder",
  },
  purposes: {
    title: "Назначения платежа",
    desc: "Типовые назначения для выдач и отчётов",
    icon: "list",
  },
  expenses: {
    title: "Статьи расходов",
    desc: "Классификация расходов в отчётности",
    icon: "tag",
  },
};

function dictIcon(kind) {
  const map = {
    building: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20V8l8-4 8 4v12" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 20v-6h6v6M9 10h.01M15 10h.01M12 10h.01M9 13h.01M15 13h.01M12 13h.01" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
    folder: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H9l2 2h8.5A1.5 1.5 0 0 1 21 9.5v8A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
    list: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 7h11M9 12h11M9 17h11M5 7h.01M5 12h.01M5 17h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    tag: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 12V5.5A1.5 1.5 0 0 1 4.5 4H12l9 9-7.5 7.5L3 12Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/></svg>`,
  };
  return map[kind] || icons.book;
}

function dictActiveLabel(key) {
  return key === "purposes" ? "Активно" : "Активна";
}

function isDictArchived(row) {
  return String(row.status || "").startsWith("Архив");
}

function renderDictsBoard() {
  setTitle("Справочники");
  const tiles = Object.keys(DICT_META)
    .map((key) => {
      const meta = DICT_META[key];
      const rows = state.dicts[key] || [];
      const active = rows.filter((r) => !isDictArchived(r)).length;
      return `
        <button type="button" class="dict-tile" data-dict="${key}">
          <span class="dict-tile-icon">${dictIcon(meta.icon)}</span>
          <strong>${meta.title}</strong>
          <span class="dict-tile-meta">${active} активн. · ${rows.length} всего</span>
        </button>`;
    })
    .join("");

  els.content.innerHTML = `
    <p class="section-note" style="margin-top:0">Выберите справочник. Записи не удаляются — при необходимости архивируются, чтобы сохранить историю отчётов и выдач.</p>
    <div class="dict-board">${tiles}</div>
  `;

  els.content.querySelectorAll("[data-dict]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.page = `dict-${btn.dataset.dict}`;
      renderNav();
      render();
    });
  });
}

function dictPrimaryCell(key, row) {
  if (key === "procedures") {
    return `<div class="dict-primary">
      <div class="dict-name">${row.debtor || "—"}</div>
      <div class="dict-sub">${row.name}</div>
    </div>`;
  }
  return `<div class="dict-primary"><div class="dict-name">${row.name}</div></div>`;
}

function dictRowsHtml(key, rows) {
  const iconEdit = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20h4l11-11-4-4L4 16v4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m13 5 4 4" stroke="currentColor" stroke-width="1.7"/></svg>`;
  const iconArchive = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 11h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  const iconRestore = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  if (!rows.length) {
    return `<tr><td colspan="3" class="empty">Записей не найдено</td></tr>`;
  }

  return rows
    .map((r) => {
      const archived = isDictArchived(r);
      return `<tr class="${archived ? "is-archived" : ""}" data-id="${r.id}">
        <td>${dictPrimaryCell(key, r)}</td>
        <td>${badge(r.status)}</td>
        <td>
          <div class="dict-actions">
            <button type="button" class="dict-act edit" data-act="edit" title="Редактировать">${iconEdit}</button>
            <button type="button" class="dict-act archive" data-act="archive" title="${archived ? "Вернуть из архива" : "Архивировать"}">${archived ? iconRestore : iconArchive}</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function openDictItemModal(key, existing) {
  const edit = Boolean(existing);
  const meta = DICT_META[key];
  showModal(`
    <h3>${edit ? "Редактирование" : "Новая запись"} · ${meta.title}</h3>
    <form id="dict-item-form" class="form-grid">
      <label class="field full"><span>Название</span>
        <input name="name" required value="${existing?.name || ""}" placeholder="Введите название" />
      </label>
      ${
        key === "procedures"
          ? `<label class="field full"><span>Должник</span>
              <input name="debtor" value="${existing?.debtor || ""}" placeholder="ООО «…» / ИП …" />
            </label>`
          : ""
      }
    </form>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" data-close>Отмена</button>
      <button type="submit" form="dict-item-form" class="btn btn-primary">${edit ? "Сохранить" : "Добавить"}</button>
    </div>
  `);

  document.getElementById("dict-item-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = String(fd.get("name") || "").trim();
    if (!name) return;
    if (edit) {
      existing.name = name;
      if (key === "procedures") existing.debtor = String(fd.get("debtor") || "").trim() || "—";
      logActivity({
        action: "update",
        entity: "dict",
        entityLabel: `${meta.title} · ${name}`,
        detail: "Запись справочника изменена",
      });
    } else {
      const item = {
        id: Date.now(),
        name,
        status: dictActiveLabel(key),
      };
      if (key === "procedures") item.debtor = String(fd.get("debtor") || "").trim() || "—";
      state.dicts[key].unshift(item);
      logActivity({
        action: "create",
        entity: "dict",
        entityLabel: `${meta.title} · ${name}`,
        detail: "Добавлена запись справочника",
      });
    }
    closeModal();
    renderDictList(key);
  });
}

function renderDictList(key) {
  const meta = DICT_META[key];
  if (!meta || !state.dicts[key]) {
    state.page = "dicts";
    return renderDictsBoard();
  }

  setTitle("");
  const all = state.dicts[key];

  els.content.innerHTML = `
    <div class="dict-list-head">
      <button type="button" class="btn-back" id="btn-dict-back" title="К справочникам" aria-label="Назад">
        <svg viewBox="0 0 24 24" fill="none"><path d="M15 6 9 12l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <h2 class="dict-list-title">${meta.title}</h2>
      <button type="button" class="btn btn-primary" id="btn-add-dict">+ Добавить</button>
    </div>
    <p class="section-note">${meta.desc}. Удаление не используется — записи архивируются.</p>
    <div class="search-wrap dict-search">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      <input class="search" id="dict-search" placeholder="Поиск" />
    </div>
    <div class="users-panel dict-panel">
      <table class="users-table dict-table">
        <thead>
          <tr>
            <th>${key === "procedures" ? "Должник" : "Название"}</th>
            <th>Статус</th>
            <th class="th-actions">Действия</th>
          </tr>
        </thead>
        <tbody id="dict-body">${dictRowsHtml(key, all)}</tbody>
      </table>
    </div>
    <div class="dict-total" id="dict-total">Всего: ${all.length}</div>
  `;

  const paint = (q = "") => {
    const query = q.toLowerCase().trim();
    const filtered = all.filter((r) => {
      if (!query) return true;
      return (
        String(r.name || "").toLowerCase().includes(query) ||
        String(r.debtor || "").toLowerCase().includes(query) ||
        String(r.status || "").toLowerCase().includes(query)
      );
    });
    document.getElementById("dict-body").innerHTML = dictRowsHtml(key, filtered);
    document.getElementById("dict-total").textContent = `Всего: ${filtered.length}${query ? ` (из ${all.length})` : ""}`;
    bindDictRowActions(key);
  };

  document.getElementById("btn-dict-back").addEventListener("click", () => {
    state.page = "dicts";
    renderNav();
    render();
  });
  document.getElementById("btn-add-dict").addEventListener("click", () => openDictItemModal(key));
  document.getElementById("dict-search").addEventListener("input", (e) => paint(e.target.value));
  bindDictRowActions(key);
}

function bindDictRowActions(key) {
  document.querySelectorAll("#dict-body tr[data-id]").forEach((tr) => {
    const id = Number(tr.dataset.id);
    const row = () => state.dicts[key].find((x) => x.id === id);

    tr.querySelector('[data-act="edit"]')?.addEventListener("click", () => {
      openDictItemModal(key, row());
    });
    tr.querySelector('[data-act="archive"]')?.addEventListener("click", async () => {
      const r = row();
      if (!r) return;
      const archived = isDictArchived(r);
      const ok = await showConfirm(
        archived
          ? `Вернуть «${r.name}» из архива в работу?`
          : `Архивировать «${r.name}»?\n\nЗапись исчезнет из выбора в формах, но история отчётов сохранится. Удаление не выполняется.`,
        archived ? "Вернуть из архива" : "Архивировать запись"
      );
      if (!ok) return;
      r.status = archived ? dictActiveLabel(key) : "Архив";
      logActivity({
        action: archived ? "restore" : "archive",
        entity: "dict",
        entityLabel: `${DICT_META[key].title} · ${r.name}`,
        detail: archived ? "Запись возвращена из архива" : "Запись архивирована (удаление не используется)",
      });
      renderDictList(key);
    });
  });
}

function renderActivityLog() {
  setTitle(state.role === "admin" ? "Журнал действий" : "Мои действия");
  const all = visibleActivityLog();
  const isAdmin = state.role === "admin";

  const actions = [...new Set(all.map((r) => r.action))];
  const entities = [...new Set(all.map((r) => r.entity))];
  const actors = isAdmin ? [...new Set(all.map((r) => r.actorName).filter(Boolean))] : [];

  els.content.innerHTML = `
    <p class="section-note" style="margin-top:0">
      ${
        isAdmin
          ? "Полная история действий по системе. Записи не удаляются автоматически."
          : "История ваших действий в системе. Записи не удаляются автоматически."
      }
      Удаление данных в продукте не используется — применяется архивирование.
    </p>
    <div class="filters-bar">
      <div class="search-wrap filters-search">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <input class="search" id="history-search" placeholder="Поиск по описанию или объекту..." />
      </div>
      <select id="history-action" class="filter-select" title="Действие">
        <option value="all">Все действия</option>
        ${actions.map((a) => `<option value="${a}">${activityActionLabel(a)}</option>`).join("")}
      </select>
      <select id="history-entity" class="filter-select" title="Объект">
        <option value="all">Все объекты</option>
        ${entities.map((e) => `<option value="${e}">${activityEntityLabel(e)}</option>`).join("")}
      </select>
      ${
        isAdmin
          ? `<select id="history-actor" class="filter-select" title="Кто">
              <option value="all">Все пользователи</option>
              ${actors.map((a) => `<option value="${escapeHtml(a)}">${escapeHtml(a)}</option>`).join("")}
            </select>`
          : ""
      }
      <label class="filter-date">
        <span>с</span>
        <input type="date" id="history-date-from" class="filter-select" />
      </label>
      <label class="filter-date">
        <span>по</span>
        <input type="date" id="history-date-to" class="filter-select" />
      </label>
      <button type="button" class="btn btn-secondary btn-sm filters-reset" id="history-clear" title="Сбросить фильтры">Снять все фильтры</button>
    </div>
    <div class="users-panel">
      <table class="users-table history-table">
        <thead>
          <tr>
            <th>Дата и время</th>
            ${isAdmin ? "<th>Кто</th>" : ""}
            <th>Действие</th>
            <th>Объект</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody id="history-body">${activityRowsHtml(all)}</tbody>
      </table>
    </div>
    <div class="dict-total" id="history-total">Всего: ${all.length}</div>
  `;

  const dayKey = (iso) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const paint = () => {
    const q = document.getElementById("history-search").value.toLowerCase().trim();
    const action = document.getElementById("history-action").value;
    const entity = document.getElementById("history-entity").value;
    const actorEl = document.getElementById("history-actor");
    const actor = actorEl ? actorEl.value : "all";
    const from = document.getElementById("history-date-from").value;
    const to = document.getElementById("history-date-to").value;

    let list = all.slice();
    if (action !== "all") list = list.filter((r) => r.action === action);
    if (entity !== "all") list = list.filter((r) => r.entity === entity);
    if (actor !== "all") list = list.filter((r) => r.actorName === actor);
    if (from) list = list.filter((r) => dayKey(r.at) >= from);
    if (to) list = list.filter((r) => dayKey(r.at) <= to);
    if (q) {
      list = list.filter(
        (r) =>
          activityActionLabel(r.action).toLowerCase().includes(q) ||
          activityEntityLabel(r.entity).toLowerCase().includes(q) ||
          String(r.entityLabel || "").toLowerCase().includes(q) ||
          String(r.detail || "").toLowerCase().includes(q) ||
          String(r.actorName || "").toLowerCase().includes(q)
      );
    }

    document.getElementById("history-body").innerHTML = activityRowsHtml(list);
    const narrowed = action !== "all" || entity !== "all" || actor !== "all" || from || to || q;
    document.getElementById("history-total").textContent = `Всего: ${list.length}${narrowed ? ` (из ${all.length})` : ""}`;
  };

  ["history-search", "history-action", "history-entity", "history-date-from", "history-date-to"]
    .concat(isAdmin ? ["history-actor"] : [])
    .forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener(id === "history-search" ? "input" : "change", paint);
    });

  document.getElementById("history-clear").addEventListener("click", () => {
    document.getElementById("history-search").value = "";
    document.getElementById("history-action").value = "all";
    document.getElementById("history-entity").value = "all";
    if (document.getElementById("history-actor")) document.getElementById("history-actor").value = "all";
    document.getElementById("history-date-from").value = "";
    document.getElementById("history-date-to").value = "";
    paint();
  });
}

function activityRowsHtml(rows) {
  if (!rows.length) {
    const cols = state.role === "admin" ? 5 : 4;
    return `<tr><td colspan="${cols}" class="empty">Записей пока нет</td></tr>`;
  }
  return rows
    .map(
      (r) => `<tr>
        <td class="muted-date">${formatDateTime(r.at)}</td>
        ${state.role === "admin" ? `<td class="user-cell">${r.actorName || "—"}</td>` : ""}
        <td><span class="history-pill">${activityActionLabel(r.action)}</span></td>
        <td>
          <div class="dict-primary">
            <div class="dict-name">${activityEntityLabel(r.entity)}</div>
            <div class="dict-sub">${r.entityLabel || "—"}</div>
          </div>
        </td>
        <td>${r.detail || "—"}</td>
      </tr>`
    )
    .join("");
}

function isUserIncomeActive(row) {
  return !String(row?.status || "Активна").startsWith("Архив");
}

/** Типы бизнес-приходов, которые пользователь принял от имени компании */
const USER_INCOME_TYPES = {
  counterparty: {
    id: "counterparty",
    label: "Оплата от контрагента",
    hint: "Клиент или контрагент передал деньги вам, а это средства компании.",
    purposeLabel: "Основание / за что",
    purposePlaceholder: "Например, оплата услуг",
    fromRequired: true,
    procedureRequired: false,
  },
  procedure: {
    id: "procedure",
    label: "Поступление по процедуре",
    hint: "Деньги приняты в рамках дела или процедуры банкротства.",
    purposeLabel: "Основание",
    purposePlaceholder: "Например, возврат / поступление по делу",
    fromRequired: false,
    procedureRequired: true,
  },
  asset_sale: {
    id: "asset_sale",
    label: "Продажа имущества компании",
    hint: "Выручка от продажи имущества или ТМЦ компании, не личных вещей.",
    purposeLabel: "Что продано",
    purposePlaceholder: "Например, ноутбук и монитор",
    fromRequired: false,
    procedureRequired: false,
  },
  other: {
    id: "other",
    label: "Иное бизнес-поступление",
    hint: "Другой приход денег компании через вас. Личные доходы сюда не относятся.",
    purposeLabel: "Описание основания",
    purposePlaceholder: "Кратко опишите бизнес-основание",
    fromRequired: false,
    procedureRequired: false,
  },
};

function normalizeUserIncome(row) {
  if (!row || typeof row !== "object") return row;
  if (!row.type) {
    if (String(row.purpose || "").toLowerCase().includes("продаж")) row.type = "asset_sale";
    else if (row.incomeKind === "targeted" || row.procedure) row.type = "procedure";
    else if (row.source === "Административный") row.type = "other";
    else row.type = "other";
  }
  if (!USER_INCOME_TYPES[row.type]) row.type = "other";
  row.company = row.company || "";
  row.fromName = row.fromName || "";
  row.procedure = row.procedure || "";
  row.purpose = row.purpose || row.purposeDetail || "";
  row.note = row.note || "";
  return row;
}

function incomeTypeMeta(typeOrRow) {
  const type = typeof typeOrRow === "string" ? typeOrRow : normalizeUserIncome(typeOrRow)?.type;
  return USER_INCOME_TYPES[type] || USER_INCOME_TYPES.other;
}

function incomeTypeLabel(typeOrRow) {
  return incomeTypeMeta(typeOrRow).label;
}

function myIncomes(list = state.userIncomes) {
  return list.filter((r) => r.userId === currentUserId()).map(normalizeUserIncome);
}

function myActiveIncomes() {
  return myIncomes().filter(isUserIncomeActive);
}

function currentMonthPrefix(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function isInCurrentMonth(isoDate, date = new Date()) {
  return String(isoDate || "").startsWith(currentMonthPrefix(date));
}

function myActiveIncomesThisMonth() {
  return myActiveIncomes().filter((r) => isInCurrentMonth(r.date));
}

function formatMonthLabel(date = new Date()) {
  const label = date.toLocaleDateString("ru-RU", { month: "long", year: "numeric" });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function userIncomeRows(rows) {
  const iconArchive = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 11h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  const iconRestore = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  return rows
    .map((r) => {
      const row = normalizeUserIncome(r);
      const archived = !isUserIncomeActive(row);
      const sub = [row.fromName ? `от: ${row.fromName}` : "", row.procedure ? `процедура: ${row.procedure}` : ""]
        .filter(Boolean)
        .join(" · ");
      return `<tr class="${archived ? "is-archived" : ""}" data-income-id="${row.id}">
        <td>${row.id}</td>
        <td>${formatDate(row.date)}</td>
        <td>${escapeHtml(incomeTypeLabel(row))}</td>
        <td>${escapeHtml(row.company || "—")}</td>
        <td>
          <div class="dict-primary">
            <div class="dict-name">${escapeHtml(row.purpose || "—")}</div>
            ${sub ? `<div class="dict-sub">${escapeHtml(sub)}</div>` : ""}
          </div>
        </td>
        <td class="money">${money(row.amount)}</td>
        <td>${escapeHtml(row.note || "—")}</td>
        <td>${badge(archived ? "Архив" : "Активна")}</td>
        <td>
          <div class="dict-actions">
            <button type="button" class="dict-act archive" data-act="archive-income" title="${archived ? "Вернуть из архива" : "Архивировать"}">${archived ? iconRestore : iconArchive}</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function bindUserIncomeArchiveActions() {
  document.querySelectorAll("[data-act='archive-income']").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = Number(btn.closest("tr")?.dataset.incomeId);
      const row = state.userIncomes.find((x) => x.id === id);
      if (!row || row.userId !== currentUserId()) return;
      const archived = !isUserIncomeActive(row);
      const ok = await showConfirm(
        archived
          ? `Вернуть приход № ${row.id} в список активных?`
          : `Архивировать приход № ${row.id}?\n\nЗапись останется в истории. Удаление не выполняется.`,
        archived ? "Вернуть из архива" : "Архивировать приход"
      );
      if (!ok) return;
      row.status = archived ? "Активна" : "Архив";
      logActivity({
        action: archived ? "restore" : "archive",
        entity: "income",
        entityLabel: `Приход № ${row.id}`,
        detail: archived
          ? `Приход возвращён (${money(row.amount)}): ${incomeTypeLabel(row)} · ${row.purpose || row.company}`
          : `Приход архивирован (${money(row.amount)}): ${incomeTypeLabel(row)} · ${row.purpose || row.company}`,
      });
      renderFunds();
    });
  });
}

function renderMyIncome() {
  // legacy: доход объединён с «Мои средства»
  state.page = "funds";
  renderNav();
  renderFunds();
}

function openMyIncomeModal() {
  const companies = state.dicts.companies.filter((c) => c.status === "Активна");
  const procedures = state.dicts.procedures.filter((p) => p.status === "Активна");
  const today = new Date().toISOString().slice(0, 10);
  const typeButtons = Object.values(USER_INCOME_TYPES)
    .map(
      (t, idx) =>
        `<button type="button" class="password-mode-btn${idx === 0 ? " is-active" : ""}" data-income-type="${t.id}">${escapeHtml(t.label)}</button>`
    )
    .join("");

  showModal(`
    <h3>Зарегистрировать приход</h3>
    <p class="section-note" style="margin-top:0">
      Фиксируйте только деньги <strong>бизнеса</strong>, которые вы приняли.
      Личные доходы, зарплата и премии здесь не учитываются.
    </p>
    <form id="income-form" class="form-grid">
      <div class="field full">
        <span>Тип прихода</span>
        <div class="password-mode issue-kind-mode income-type-mode" role="group" aria-label="Тип прихода">
          ${typeButtons}
        </div>
        <input type="hidden" name="type" id="income-type" value="counterparty" />
        <p class="password-hint" id="income-type-hint">${escapeHtml(USER_INCOME_TYPES.counterparty.hint)}</p>
      </div>
      <label class="field"><span>Сумма, ₽</span><input name="amount" data-amount inputmode="decimal" required placeholder="0,00" value="" /></label>
      <label class="field"><span>Дата</span><input name="date" type="date" required value="${today}" /></label>
      <label class="field full">
        <span>Компания</span>
        <select name="company" id="income-company" required>
          <option value="" disabled selected>Выберите компанию</option>
          ${companies.map((c) => `<option value="${escapeHtml(c.name)}">${escapeHtml(c.name)}</option>`).join("")}
        </select>
      </label>
      <label class="field full" id="income-from-wrap">
        <span>От кого</span>
        <input name="fromName" id="income-from" placeholder="Контрагент или плательщик" />
      </label>
      <label class="field full" id="income-procedure-wrap">
        <span id="income-procedure-label">Процедура <em class="optional-mark">необязательно</em></span>
        <select name="procedure" id="income-procedure">
          <option value="">Не указано</option>
          ${procedures.map((p) => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)}${p.debtor ? ` · ${escapeHtml(p.debtor)}` : ""}</option>`).join("")}
        </select>
      </label>
      <label class="field full" id="income-purpose-wrap">
        <span id="income-purpose-label">Основание / за что</span>
        <input name="purpose" id="income-purpose" required placeholder="Например, оплата услуг" />
      </label>
      <label class="field full">
        <span>Комментарий <em class="optional-mark">необязательно</em></span>
        <input name="note" placeholder="Дополнительные сведения" />
      </label>
    </form>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" data-close>Отмена</button>
      <button type="submit" form="income-form" class="btn btn-primary">Сохранить</button>
    </div>
  `);

  bindAmountInputs(document.getElementById("income-form"));

  const typeInput = document.getElementById("income-type");
  const typeHint = document.getElementById("income-type-hint");
  const fromWrap = document.getElementById("income-from-wrap");
  const fromInput = document.getElementById("income-from");
  const procedureWrap = document.getElementById("income-procedure-wrap");
  const procedureLabel = document.getElementById("income-procedure-label");
  const procedureSelect = document.getElementById("income-procedure");
  const purposeLabel = document.getElementById("income-purpose-label");
  const purposeInput = document.getElementById("income-purpose");

  const syncTypeUi = (type) => {
    const meta = incomeTypeMeta(type);
    typeInput.value = meta.id;
    typeHint.textContent = meta.hint;
    document.querySelectorAll("[data-income-type]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.incomeType === meta.id);
    });

    fromWrap.classList.toggle("hidden", meta.id === "asset_sale");
    fromInput.required = meta.fromRequired;

    procedureSelect.required = meta.procedureRequired;
    procedureLabel.innerHTML = meta.procedureRequired
      ? "Процедура"
      : `Процедура <em class="optional-mark">необязательно</em>`;
    procedureWrap.classList.toggle("hidden", meta.id === "asset_sale");

    purposeLabel.textContent = meta.purposeLabel;
    purposeInput.placeholder = meta.purposePlaceholder;
  };

  document.querySelectorAll("[data-income-type]").forEach((btn) => {
    btn.addEventListener("click", () => syncTypeUi(btn.dataset.incomeType));
  });
  syncTypeUi("counterparty");

  document.getElementById("income-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const amount = parseAmount(fd.get("amount"));
    if (!Number.isFinite(amount) || amount <= 0) {
      showAlert("Укажите сумму с двумя знаками после запятой, например 35 000,00", "Проверьте сумму");
      return;
    }

    const type = String(fd.get("type") || "other");
    const meta = incomeTypeMeta(type);
    const company = String(fd.get("company") || "").trim();
    const fromName = String(fd.get("fromName") || "").trim();
    const procedure = String(fd.get("procedure") || "").trim();
    const purpose = String(fd.get("purpose") || "").trim();
    const note = String(fd.get("note") || "").trim();

    if (!company) {
      showAlert("Укажите компанию — приход должен относиться к бизнесу.", "Проверьте данные");
      return;
    }
    if (meta.fromRequired && !fromName) {
      showAlert("Укажите, от кого приняты деньги.", "Проверьте данные");
      return;
    }
    if (meta.procedureRequired && !procedure) {
      showAlert("Для поступления по процедуре выберите процедуру.", "Проверьте данные");
      return;
    }
    if (!purpose) {
      showAlert(`Заполните поле «${meta.purposeLabel}».`, "Проверьте данные");
      return;
    }

    const nextId = state.userIncomes.reduce((m, r) => Math.max(m, Number(r.id) || 0), 300) + 1;
    const row = normalizeUserIncome({
      id: nextId,
      userId: currentUserId(),
      amount,
      date: String(fd.get("date")),
      type: meta.id,
      company,
      fromName,
      purpose,
      procedure: meta.id === "asset_sale" ? "" : procedure,
      note,
      status: "Активна",
    });
    state.userIncomes.unshift(row);
    logActivity({
      action: "create",
      entity: "income",
      entityLabel: `Приход № ${row.id}`,
      detail: `${incomeTypeLabel(row)} · ${row.company}${row.fromName ? ` · от ${row.fromName}` : ""} · ${row.purpose} · ${money(row.amount)}`,
    });
    closeModal();
    state.page = "funds";
    renderNav();
    render();
  });
}

function paintFundsIncomeTable() {
  const searchEl = document.getElementById("income-search");
  const fromEl = document.getElementById("income-filter-from");
  const toEl = document.getElementById("income-filter-to");
  const typeEl = document.getElementById("income-filter-type");
  const body = document.getElementById("income-body");
  if (!searchEl || !fromEl || !toEl || !typeEl || !body) return;

  const q = searchEl.value.toLowerCase().trim();
  const from = fromEl.value;
  const to = toEl.value;
  const type = typeEl.value;

  let list = myIncomes();
  if (from) list = list.filter((r) => r.date >= from);
  if (to) list = list.filter((r) => r.date <= to);
  if (type !== "all") list = list.filter((r) => r.type === type);
  if (q) {
    list = list.filter(
      (r) =>
        String(r.purpose || "").toLowerCase().includes(q) ||
        String(r.note || "").toLowerCase().includes(q) ||
        String(r.company || "").toLowerCase().includes(q) ||
        String(r.fromName || "").toLowerCase().includes(q) ||
        String(r.procedure || "").toLowerCase().includes(q) ||
        incomeTypeLabel(r).toLowerCase().includes(q)
    );
  }

  body.innerHTML = list.length
    ? userIncomeRows(list)
    : `<tr><td colspan="9" class="empty">${
        myIncomes().length
          ? "Ничего не найдено по выбранным условиям"
          : "Приходов пока нет — зарегистрируйте первое поступление денег бизнеса"
      }</td></tr>`;
  bindUserIncomeArchiveActions();
}

function fundsIssuePurpose(issue) {
  return String(issue?.purpose || issue?.note || "").trim();
}

function fundsIssueCardHtml(f) {
  const archived = !isIssueActive(f);
  const rest = Number(f.rest || 0);
  const canArchive = !archived && rest <= 0.001;
  const canReturn = !archived && rest > 0.001;
  const label = fundsIssuePurpose(f) || "Поступление от администратора";
  return `<div class="list-card${archived ? " list-card-archived" : ""}" data-issue-id="${f.id}">
    <div>
      <h4>Поступление № ${f.id}${archived ? ` ${badge("Архив")}` : ""}</h4>
      <p>${f.date} · ${escapeHtml(label)}</p>
      <p style="margin-top:6px">Использовано ${money(f.used)} из ${money(f.amount)}</p>
      <div class="progress"><span style="width:${f.amount ? Math.round((f.used / f.amount) * 100) : 0}%"></span></div>
    </div>
    <div class="list-card-side">
      <div class="money">${money(f.rest)}</div>
      <div class="funds-card-actions">
        ${
          canReturn
            ? `<button type="button" class="btn btn-secondary btn-sm" data-act="return-issue" title="Вернуть остаток администратору">Вернуть остаток</button>`
            : ""
        }
        ${
          canArchive
            ? `<button type="button" class="btn btn-secondary btn-sm" data-act="archive-user-issue" title="Архивировать полностью использованное поступление">В архив</button>`
            : ""
        }
      </div>
    </div>
  </div>`;
}

function openReturnFundsModal(issueId) {
  const issue = state.issues.find((x) => x.id === Number(issueId));
  if (!issue || issue.userId !== currentUserId() || !isIssueActive(issue)) return;
  syncIssueBalancesForUser(currentUserId());
  const available = issueAvailableRest(issue.id);
  if (available <= 0.001) {
    showAlert("По этой выдаче нет остатка для возврата.", "Возврат");
    return;
  }

  showModal(`
    <h3>Вернуть остаток</h3>
    <p class="section-note" style="margin-top:0">
      Возврат уменьшит остаток по выдаче № ${issue.id} и сразу появится у администратора как поступление.
      Доступно: <strong>${money(available)}</strong>.
    </p>
    <form id="return-form" class="form-grid">
      <label class="field"><span>Сумма возврата, ₽</span><input name="amount" data-amount inputmode="decimal" required placeholder="0,00" value="${formatAmount(available)}" /></label>
      <label class="field"><span>Дата</span><input name="date" type="date" required value="${new Date().toISOString().slice(0, 10)}" /></label>
      <label class="field full"><span>Комментарий <em class="optional-mark">необязательно</em></span><input name="note" placeholder="Например, неиспользованный остаток" /></label>
    </form>
    <div class="modal-actions">
      <button type="button" class="btn btn-secondary" data-close>Отмена</button>
      <button type="submit" form="return-form" class="btn btn-primary">Вернуть</button>
    </div>
  `);

  bindAmountInputs(document.getElementById("return-form"));
  document.getElementById("return-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const amount = parseAmount(fd.get("amount"));
    if (!Number.isFinite(amount) || amount <= 0) {
      showAlert("Укажите сумму с двумя знаками после запятой.", "Проверьте сумму");
      return;
    }
    const restNow = issueAvailableRest(issue.id);
    if (amount > restNow + 0.001) {
      showAlert(`Сумма превышает остаток. Доступно: ${money(restNow)}.`, "Превышение остатка");
      return;
    }
    const me = currentUser();
    const row = {
      id: 200 + state.receipts.length + 1,
      payerType: "user",
      payerId: currentUserId(),
      payerName: me ? fullName(me) : "Пользователь",
      amount,
      date: String(fd.get("date")),
      purpose: "Возврат неиспользованных средств",
      note: String(fd.get("note") || "").trim() || `Возврат остатка по выдаче № ${issue.id}`,
      status: "Активна",
      issueId: issue.id,
      createdByName: currentActor().actorName,
    };
    state.receipts.unshift(row);
    syncIssueBalancesForUser(currentUserId());
    logActivity({
      action: "return_funds",
      entity: "receipt",
      entityLabel: `Поступление № ${row.id}`,
      detail: `Пользователь вернул ${money(amount)} по выдаче № ${issue.id}`,
    });
    closeModal();
    renderFunds();
  });
}

function bindFundsArchiveActions() {
  document.querySelectorAll("[data-act='archive-user-issue']").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = Number(btn.closest("[data-issue-id]")?.dataset.issueId);
      const issue = state.issues.find((x) => x.id === id);
      if (!issue || issue.userId !== currentUserId()) return;
      if (Number(issue.rest || 0) > 0.001) {
        showAlert("В архив можно отправить только поступления с нулевым остатком.", "Архивирование");
        return;
      }
      const ok = await showConfirm(
        `Архивировать поступление № ${issue.id}?\n\nОно исчезнет из активного списка. История сохранится, удаление не выполняется.`,
        "Архивировать поступление"
      );
      if (!ok) return;
      issue.status = "Архив";
      logActivity({
        action: "archive",
        entity: "issue",
        entityLabel: `Поступление № ${issue.id}`,
        detail: `Пользователь архивировал полностью использованное поступление (${money(issue.amount)})`,
      });
      syncIssueBalancesForUser(currentUserId());
      renderFunds();
    });
  });
  document.querySelectorAll("[data-act='return-issue']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.closest("[data-issue-id]")?.dataset.issueId);
      openReturnFundsModal(id);
    });
  });
}

function paintFundsReceiptsList() {
  const searchEl = document.getElementById("receipts-search");
  const fromEl = document.getElementById("receipts-filter-from");
  const toEl = document.getElementById("receipts-filter-to");
  const purposeEl = document.getElementById("receipts-filter-purpose");
  const scopeEl = document.getElementById("receipts-filter-scope");
  const amountFromEl = document.getElementById("receipts-filter-amount-from");
  const amountToEl = document.getElementById("receipts-filter-amount-to");
  const listEl = document.getElementById("receipts-list");
  if (!searchEl || !fromEl || !toEl || !purposeEl || !scopeEl || !amountFromEl || !amountToEl || !listEl) return;

  const uid = currentUserId();
  const mine = state.issues.filter((i) => i.userId === uid);
  const scope = scopeEl.value;
  const pool =
    scope === "archive" ? mine.filter((i) => !isIssueActive(i)) : mine.filter(isIssueActive);

  const q = searchEl.value.trim().toLowerCase();
  const from = fromEl.value;
  const to = toEl.value;
  const purpose = purposeEl.value;
  const amountFrom = parseAmount(amountFromEl.value);
  const amountTo = parseAmount(amountToEl.value);

  let list = pool.slice();
  if (from) list = list.filter((i) => i.date >= from);
  if (to) list = list.filter((i) => i.date <= to);
  if (purpose !== "all") list = list.filter((i) => fundsIssuePurpose(i) === purpose);
  if (Number.isFinite(amountFrom)) list = list.filter((i) => Number(i.amount || 0) >= amountFrom);
  if (Number.isFinite(amountTo)) list = list.filter((i) => Number(i.amount || 0) <= amountTo);
  if (q) {
    list = list.filter((i) => String(i.id).toLowerCase().includes(q));
  }

  listEl.innerHTML = list.length
    ? list.map(fundsIssueCardHtml).join("")
    : `<div class="empty card">${
        pool.length
          ? "Ничего не найдено по выбранным условиям"
          : scope === "archive"
            ? "В архиве пока нет поступлений"
            : "Поступлений пока нет"
      }</div>`;
  bindFundsArchiveActions();
}

function renderFunds() {
  setTitle("Мои средства");
  syncIssueBalancesForUser(currentUserId());
  const myIssues = activeIssues().filter((i) => i.userId === currentUserId());
  const myIssuesAll = state.issues.filter((i) => i.userId === currentUserId());
  const receiptsRest = myIssues.reduce((s, i) => s + Number(i.rest || 0), 0);
  const purposes = [...new Set(myIssuesAll.map(fundsIssuePurpose).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
  const incomeTypes = Object.values(USER_INCOME_TYPES);

  els.content.innerHTML = `
    <div class="funds-stack">
      <section class="funds-block" id="funds-receipts-block">
        <div class="section-head">
          <button type="button" class="funds-collapse-toggle" id="funds-receipts-toggle" aria-expanded="true" aria-controls="funds-receipts-body">
            <span class="icon">${icons.cash}</span>
            <span class="funds-collapse-copy">
              <strong>Поступления</strong>
              <span class="funds-block-hint">Средства от администратора и остаток по каждой выдаче</span>
            </span>
          </button>
          <div class="funds-block-aside">
            <div class="funds-block-metric">
              <span>Остаток</span>
              <strong>${money(receiptsRest)}</strong>
            </div>
          </div>
          <span class="funds-collapse-chevron" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>
        <div class="funds-collapse-body" id="funds-receipts-body">
          <div class="filters-bar">
            <div class="search-wrap filters-search">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <input class="search" id="receipts-search" placeholder="Поиск" inputmode="numeric" />
            </div>
            <label class="filter-date"><span>Период с</span><input type="date" id="receipts-filter-from" class="filter-select" value="" /></label>
            <label class="filter-date"><span>по</span><input type="date" id="receipts-filter-to" class="filter-select" value="" /></label>
            <select id="receipts-filter-purpose" class="filter-select" title="Назначение">
              <option value="all" selected>Все назначения</option>
              ${purposes.map((p) => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join("")}
            </select>
            <select id="receipts-filter-scope" class="filter-select" title="Статус">
              <option value="active" selected>Активные</option>
              <option value="archive">Архив</option>
            </select>
            <label class="filter-date filter-amount"><span>Сумма от</span><input type="text" id="receipts-filter-amount-from" class="filter-select" inputmode="decimal" placeholder="—" /></label>
            <label class="filter-date filter-amount"><span>до</span><input type="text" id="receipts-filter-amount-to" class="filter-select" inputmode="decimal" placeholder="—" /></label>
            <button type="button" class="btn btn-secondary btn-sm filters-reset" id="receipts-clear-filters">Снять все фильтры</button>
          </div>
          <div class="list-cards" id="receipts-list"></div>
        </div>
      </section>

      <section class="funds-block" id="funds-income-block">
        <div class="section-head">
          <button type="button" class="funds-collapse-toggle" id="funds-income-toggle" aria-expanded="true" aria-controls="funds-income-body">
            <span class="icon">${icons.inflow}</span>
            <span class="funds-collapse-copy">
              <strong>Принятые поступления</strong>
              <span class="funds-block-hint">Деньги бизнеса, которые вы приняли. Личные доходы здесь не учитываются</span>
            </span>
          </button>
          <div class="funds-block-aside">
            <button type="button" class="btn btn-primary btn-sm" id="btn-new-income">Зарегистрировать приход</button>
          </div>
          <span class="funds-collapse-chevron" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>
        <div class="funds-collapse-body" id="funds-income-body">
          <div class="filters-bar">
            <div class="search-wrap filters-search">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <input class="search" id="income-search" placeholder="Поиск" />
            </div>
            <label class="filter-date"><span>Период с</span><input type="date" id="income-filter-from" class="filter-select" value="" /></label>
            <label class="filter-date"><span>по</span><input type="date" id="income-filter-to" class="filter-select" value="" /></label>
            <select id="income-filter-type" class="filter-select" title="Тип прихода">
              <option value="all" selected>Все типы</option>
              ${incomeTypes.map((t) => `<option value="${t.id}">${escapeHtml(t.label)}</option>`).join("")}
            </select>
            <button type="button" class="btn btn-secondary btn-sm filters-reset" id="income-clear-filters">Снять все фильтры</button>
          </div>
          <div class="table-wrap">
            <table class="data">
              <thead>
                <tr>
                  <th>№</th><th>Дата</th><th>Тип</th><th>Компания</th><th>Основание</th><th>Сумма</th><th>Комментарий</th><th>Статус</th><th></th>
                </tr>
              </thead>
              <tbody id="income-body"></tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `;

  document.getElementById("income-search").addEventListener("input", paintFundsIncomeTable);
  ["income-filter-from", "income-filter-to", "income-filter-type"].forEach((id) => {
    document.getElementById(id).addEventListener("change", paintFundsIncomeTable);
  });
  document.getElementById("income-clear-filters").addEventListener("click", () => {
    document.getElementById("income-search").value = "";
    document.getElementById("income-filter-from").value = "";
    document.getElementById("income-filter-to").value = "";
    document.getElementById("income-filter-type").value = "all";
    paintFundsIncomeTable();
  });
  document.getElementById("btn-new-income").addEventListener("click", openMyIncomeModal);

  document.getElementById("receipts-search").addEventListener("input", paintFundsReceiptsList);
  ["receipts-filter-from", "receipts-filter-to", "receipts-filter-purpose", "receipts-filter-scope"].forEach((id) => {
    document.getElementById(id).addEventListener("change", paintFundsReceiptsList);
  });
  ["receipts-filter-amount-from", "receipts-filter-amount-to"].forEach((id) => {
    document.getElementById(id).addEventListener("input", paintFundsReceiptsList);
  });
  document.getElementById("receipts-clear-filters").addEventListener("click", () => {
    document.getElementById("receipts-search").value = "";
    document.getElementById("receipts-filter-from").value = "";
    document.getElementById("receipts-filter-to").value = "";
    document.getElementById("receipts-filter-purpose").value = "all";
    document.getElementById("receipts-filter-scope").value = "active";
    document.getElementById("receipts-filter-amount-from").value = "";
    document.getElementById("receipts-filter-amount-to").value = "";
    paintFundsReceiptsList();
  });

  const bindFundsCollapse = (blockId, toggleId, storageKey) => {
    const block = document.getElementById(blockId);
    const toggle = document.getElementById(toggleId);
    const chevron = block?.querySelector(".funds-collapse-chevron");
    const setCollapsed = (collapsed) => {
      block?.classList.toggle("is-collapsed", collapsed);
      toggle?.setAttribute("aria-expanded", collapsed ? "false" : "true");
      try {
        sessionStorage.setItem(storageKey, collapsed ? "1" : "0");
      } catch {
        /* ignore */
      }
    };
    let saved = false;
    try {
      saved = sessionStorage.getItem(storageKey) === "1";
    } catch {
      saved = false;
    }
    setCollapsed(saved);
    const onToggle = () => setCollapsed(!block.classList.contains("is-collapsed"));
    toggle?.addEventListener("click", onToggle);
    chevron?.addEventListener("click", onToggle);
  };
  bindFundsCollapse("funds-receipts-block", "funds-receipts-toggle", "funds-receipts-collapsed");
  bindFundsCollapse("funds-income-block", "funds-income-toggle", "funds-income-collapsed");

  paintFundsReceiptsList();
  paintFundsIncomeTable();
}

function renderMyReports() {
  setTitle("Создание отчётов");
  els.content.innerHTML = `
    <div class="workflow-hint card soft">
      <strong>Создание и отправка отчётов.</strong>
      Сохраните черновик → отправьте администратору на проверку → при возврате исправьте замечания и отправьте снова.
      С проверки можно отозвать отчёт обратно в черновик. Отклонённый отчёт не редактируется.
      Готовые и отправленные отчёты также можно смотреть в разделе «Сводка отчётов».
    </div>
    <div class="toolbar">
      <input class="search" placeholder="Поиск по названию или компании" id="my-report-search" />
      <button type="button" class="btn btn-primary" id="btn-new-report">Создать отчёт</button>
    </div>
    <div class="list-cards" id="my-reports-list">
      ${myReportCards(myReports())}
    </div>
  `;
  document.getElementById("btn-new-report").addEventListener("click", () => openReportEditor());
  document.getElementById("my-report-search").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = myReports().filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        (r.purpose || "").toLowerCase().includes(q) ||
        r.company.toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q)
    );
    document.getElementById("my-reports-list").innerHTML = myReportCards(filtered);
    bindMyReportCards();
  });
  bindMyReportCards();
}

function renderReportSummary() {
  setTitle("Сводка отчётов");
  const rows = myReports();
  const companies = [...new Set(rows.map((r) => r.company).filter(Boolean))].sort((a, b) => a.localeCompare(b, "ru"));
  const purposes = [...new Set(rows.map((r) => r.purpose).filter(Boolean))].sort((a, b) => a.localeCompare(b, "ru"));
  const totalSum = rows.reduce((s, r) => s + Number(r.sum || 0), 0);
  const inReview = rows.filter((r) => r.status === "На проверке").length;
  const approved = rows.filter((r) => r.status === "Утверждён").length;

  els.content.innerHTML = `
    <p class="section-note" style="margin-top:0">
      Просмотр ваших отчётов по периоду, статусу и назначению. Создать или отредактировать отчёт можно в разделе «Создание отчётов».
    </p>
    <div class="grid-3" style="margin-bottom:16px">
      <div class="card soft stat"><div class="label">Всего сумма</div><div class="value">${money(totalSum)}</div><div class="hint">${rows.length} отчёт(ов)</div></div>
      <div class="card stat"><div class="label">На проверке</div><div class="value">${inReview}</div></div>
      <div class="card stat"><div class="label">Утверждено</div><div class="value">${approved}</div></div>
    </div>
    <div class="filters-bar">
      <div class="search-wrap filters-search">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <input class="search" id="rs-search" placeholder="Поиск по №, названию или компании..." />
      </div>
      <label class="filter-date"><span>Период с</span><input type="date" id="rs-from" class="filter-select" value="" /></label>
      <label class="filter-date"><span>по</span><input type="date" id="rs-to" class="filter-select" value="" /></label>
      <select id="rs-status" class="filter-select" title="Статус">
        <option value="all" selected>Все статусы</option>
        <option value="Черновик">Черновик</option>
        <option value="На проверке">На проверке</option>
        <option value="На доработке">На доработке</option>
        <option value="Утверждён">Утверждён</option>
        <option value="Выплачено">Выплачено</option>
        <option value="Отклонён">Отклонён</option>
      </select>
      <select id="rs-company" class="filter-select" title="Компания">
        <option value="all" selected>Все компании</option>
        ${companies.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}
      </select>
      <select id="rs-purpose" class="filter-select" title="Назначение">
        <option value="all" selected>Все назначения</option>
        ${purposes.map((p) => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join("")}
      </select>
      <div class="filters-actions">
        <button type="button" class="btn btn-secondary btn-sm filters-reset" id="rs-clear">Снять все фильтры</button>
        <button type="button" class="btn btn-primary btn-sm" id="rs-create" data-go="my-reports">К созданию</button>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data">
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>Название</th>
            <th>Назначение</th>
            <th>Компания</th>
            <th>Процедура</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="rs-body"></tbody>
      </table>
    </div>
  `;

  const paint = () => {
    const q = document.getElementById("rs-search").value.toLowerCase().trim();
    const from = document.getElementById("rs-from").value;
    const to = document.getElementById("rs-to").value;
    const status = document.getElementById("rs-status").value;
    const company = document.getElementById("rs-company").value;
    const purpose = document.getElementById("rs-purpose").value;

    let list = myReports().slice();
    if (from) list = list.filter((r) => r.date >= from);
    if (to) list = list.filter((r) => r.date <= to);
    if (status !== "all") list = list.filter((r) => r.status === status);
    if (company !== "all") list = list.filter((r) => r.company === company);
    if (purpose !== "all") list = list.filter((r) => r.purpose === purpose);
    if (q) {
      list = list.filter(
        (r) =>
          String(r.id).toLowerCase().includes(q) ||
          String(r.title || "").toLowerCase().includes(q) ||
          String(r.company || "").toLowerCase().includes(q) ||
          String(r.purpose || "").toLowerCase().includes(q)
      );
    }

    const sum = list.reduce((s, r) => s + Number(r.sum || 0), 0);
    document.getElementById("rs-body").innerHTML = list.length
      ? list
          .map((r) => {
            const actionLabel = canUserEdit(r) ? "Редактировать" : "Открыть";
            return `<tr>
              <td>${escapeHtml(r.id)}</td>
              <td>${escapeHtml(r.date)}</td>
              <td>${escapeHtml(r.title || "—")}</td>
              <td>${escapeHtml(r.purpose || "—")}</td>
              <td>${escapeHtml(r.company || "—")}</td>
              <td>${escapeHtml(r.procedure || "—")}</td>
              <td class="money">${money(r.sum)}</td>
              <td>${badge(r.status)}</td>
              <td><button type="button" class="btn btn-secondary btn-sm" data-open-report="${escapeHtml(r.id)}">${actionLabel}</button></td>
            </tr>`;
          })
          .join("") +
        `<tr class="rs-total"><td colspan="6"><strong>Итого по выборке</strong></td><td class="money"><strong>${money(sum)}</strong></td><td colspan="2"></td></tr>`
      : `<tr><td colspan="9" class="empty">${
          myReports().length ? "Ничего не найдено по выбранным условиям" : "Отчётов пока нет"
        }</td></tr>`;
    bindOpenReports();
  };

  document.getElementById("rs-search").addEventListener("input", paint);
  ["rs-from", "rs-to", "rs-status", "rs-company", "rs-purpose"].forEach((id) => {
    document.getElementById(id).addEventListener("change", paint);
  });
  document.getElementById("rs-clear").addEventListener("click", () => {
    document.getElementById("rs-search").value = "";
    document.getElementById("rs-from").value = "";
    document.getElementById("rs-to").value = "";
    document.getElementById("rs-status").value = "all";
    document.getElementById("rs-company").value = "all";
    document.getElementById("rs-purpose").value = "all";
    paint();
  });
  bindGo();
  paint();
}

function myReportCards(rows) {
  if (!rows.length) return `<div class="empty card">Отчётов пока нет</div>`;
  return rows
    .map((r) => {
      const action =
        canUserEdit(r)
          ? `<button type="button" class="btn btn-secondary btn-sm" data-open-report="${r.id}">Редактировать</button>`
          : `<button type="button" class="btn btn-secondary btn-sm" data-open-report="${r.id}">Открыть</button>`;
      return `<div class="list-card report-card">
      <div>
        <h4>${r.title} <span style="color:var(--muted);font-weight:600">· ${r.id}</span></h4>
        <p>${r.purpose || "—"} · ${r.company} · процедура: ${r.procedure} · ${r.date}${
          r.receipt?.dataUrl || r.receipt?.qr ? " · чек прикреплён" : ""
        }</p>
        ${r.status === "На доработке" && r.reviewComment ? `<p class="rework-note">Замечание: ${r.reviewComment}</p>` : ""}
      </div>
      <div class="report-card-side">
        <div class="money">${money(r.sum)}</div>
        <div style="margin-top:6px">${badge(r.status)}</div>
        <div style="margin-top:10px">${action}</div>
      </div>
    </div>`;
    })
    .join("");
}

function bindMyReportCards() {
  bindOpenReports();
}

function applyFundUsage(sum, source) {
  // оставлено для совместимости: баланс теперь считается из отчётов
  syncIssueBalancesForUser(currentUserId());
}

const RECEIPT_MAX_BYTES = 3.5 * 1024 * 1024;

function parseFiscalQr(raw) {
  const text = String(raw || "").trim();
  if (!text) return null;
  try {
    const query = text.includes("?") ? text.slice(text.indexOf("?") + 1) : text;
    const params = new URLSearchParams(query);
    const sumRaw = params.get("s");
    const sum = sumRaw != null && sumRaw !== "" ? Number(String(sumRaw).replace(",", ".")) : null;
    return {
      raw: text,
      sum: Number.isFinite(sum) ? sum : null,
      paidAt: params.get("t") || null,
      fn: params.get("fn") || null,
      fd: params.get("i") || null,
      fp: params.get("fp") || null,
    };
  } catch {
    return { raw: text, sum: null, paidAt: null, fn: null, fd: null, fp: null };
  }
}

function compressImageFile(file, maxSide = 1280, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      try {
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/jpeg", quality));
      } catch (err) {
        URL.revokeObjectURL(url);
        reject(err);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Не удалось прочитать изображение"));
    };
    img.src = url;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Не удалось прочитать файл"));
    reader.readAsDataURL(file);
  });
}

async function fileToReceiptAttachment(file) {
  if (!file) return null;
  if (file.size > RECEIPT_MAX_BYTES) {
    throw new Error("Файл чека слишком большой. Максимум около 3,5 МБ.");
  }
  const isImage = String(file.type || "").startsWith("image/");
  const dataUrl = isImage ? await compressImageFile(file) : await readFileAsDataUrl(file);
  return {
    name: file.name || (isImage ? "check.jpg" : "check.pdf"),
    mime: isImage ? "image/jpeg" : file.type || "application/octet-stream",
    dataUrl,
    qr: null,
    source: "upload",
  };
}

function receiptAttachMarkup(existing) {
  const has = Boolean(existing?.dataUrl || existing?.qr);
  return `
    <div class="field full receipt-attach" id="receipt-attach">
      <span>Чек <em class="optional-mark">необязательно</em></span>
      <p class="receipt-attach-hint">При желании прикрепите фото/PDF или считайте QR с кассового чека.</p>
      <div class="receipt-attach-actions">
        <button type="button" class="btn btn-secondary btn-sm" id="btn-receipt-upload">Загрузить файл</button>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-receipt-scan">Сканировать QR</button>
        <input type="file" id="receipt-file" accept="image/*,application/pdf" hidden />
      </div>
      <div class="receipt-preview ${has ? "" : "hidden"}" id="receipt-preview">
        <div class="receipt-preview-media" id="receipt-preview-media"></div>
        <div class="receipt-preview-meta">
          <div class="receipt-preview-name" id="receipt-preview-name"></div>
          <div class="receipt-preview-qr muted-inline" id="receipt-preview-qr"></div>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" id="btn-receipt-clear" title="Удалить чек">Удалить</button>
      </div>
      <div class="qr-scanner hidden" id="qr-scanner">
        <video id="qr-video" playsinline muted></video>
        <p class="receipt-attach-hint">Наведите камеру на QR-код чека</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-qr-cancel">Отменить сканирование</button>
      </div>
    </div>
  `;
}

function renderReceiptPreview(receipt) {
  const box = document.getElementById("receipt-preview");
  const media = document.getElementById("receipt-preview-media");
  const nameEl = document.getElementById("receipt-preview-name");
  const qrEl = document.getElementById("receipt-preview-qr");
  if (!box || !media || !nameEl || !qrEl) return;

  if (!receipt || (!receipt.dataUrl && !receipt.qr)) {
    box.classList.add("hidden");
    media.innerHTML = "";
    nameEl.textContent = "";
    qrEl.textContent = "";
    return;
  }

  box.classList.remove("hidden");
  nameEl.textContent = receipt.name || (receipt.qr ? "Чек по QR" : "Чек");
  if (receipt.dataUrl && String(receipt.mime || "").startsWith("image/")) {
    media.innerHTML = `<img src="${receipt.dataUrl}" alt="Чек" />`;
  } else if (receipt.dataUrl) {
    media.innerHTML = `<div class="receipt-file-chip">PDF</div>`;
  } else {
    media.innerHTML = `<div class="receipt-file-chip">QR</div>`;
  }
  qrEl.textContent = receipt.qr ? `QR: ${receipt.qr.length > 72 ? `${receipt.qr.slice(0, 72)}…` : receipt.qr}` : "";
}

function receiptViewMarkup(receipt) {
  if (!receipt || (!receipt.dataUrl && !receipt.qr)) return "";
  const media =
    receipt.dataUrl && String(receipt.mime || "").startsWith("image/")
      ? `<a class="receipt-view-link" href="${receipt.dataUrl}" target="_blank" rel="noopener"><img src="${receipt.dataUrl}" alt="Чек" /></a>`
      : receipt.dataUrl
        ? `<a class="receipt-view-link" href="${receipt.dataUrl}" target="_blank" rel="noopener">${escapeHtml(receipt.name || "Открыть файл чека")}</a>`
        : "";
  const qr = receipt.qr
    ? `<div class="readonly receipt-qr-text">${escapeHtml(receipt.qr)}</div>`
    : "";
  return `<div class="field full"><span>Чек</span>
    <div class="receipt-view">
      ${media}
      ${qr || (!media ? `<div class="readonly">${escapeHtml(receipt.name || "Прикреплён")}</div>` : "")}
    </div>
  </div>`;
}

function bindReceiptAttach({ initial = null, onChange } = {}) {
  let receipt = initial && (initial.dataUrl || initial.qr) ? { ...initial } : null;
  const fileInput = document.getElementById("receipt-file");
  const scanner = document.getElementById("qr-scanner");
  const video = document.getElementById("qr-video");
  let stream = null;
  let scanTimer = null;
  let detecting = false;

  const emit = () => {
    renderReceiptPreview(receipt);
    onChange?.(receipt);
  };

  const stopScanner = () => {
    detecting = false;
    if (scanTimer) {
      clearTimeout(scanTimer);
      scanTimer = null;
    }
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    }
    if (video) video.srcObject = null;
    scanner?.classList.add("hidden");
  };

  const setReceipt = (next) => {
    receipt = next;
    emit();
  };

  const applyQrPayload = async (raw) => {
    const parsed = parseFiscalQr(raw);
    if (!parsed) return;
    setReceipt({
      name: receipt?.name || "Чек по QR",
      mime: receipt?.mime || "text/plain",
      dataUrl: receipt?.dataUrl || null,
      qr: parsed.raw,
      source: "qr",
      fiscal: parsed,
    });
    stopScanner();
    if (parsed.sum != null && parsed.sum > 0) {
      const sumInput = document.querySelector('#report-form input[name="sum"]');
      if (sumInput) {
        const current = parseAmount(sumInput.value);
        if (!Number.isFinite(current) || current <= 0 || Math.abs(current - parsed.sum) > 0.001) {
          const ok = await showConfirm(
            `В QR указана сумма ${money(parsed.sum)}. Подставить её в поле «Сумма»?`,
            "Сумма из чека"
          );
          if (ok) {
            sumInput.value = formatAmount(parsed.sum);
            sumInput.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }
      }
    }
  };

  const tickDetect = async () => {
    if (!detecting || !video || !("BarcodeDetector" in window)) return;
    try {
      const detector = new BarcodeDetector({ formats: ["qr_code"] });
      const codes = await detector.detect(video);
      if (codes?.length && codes[0].rawValue) {
        await applyQrPayload(codes[0].rawValue);
        return;
      }
    } catch {
      /* continue scanning */
    }
    scanTimer = setTimeout(tickDetect, 350);
  };

  document.getElementById("btn-receipt-upload")?.addEventListener("click", () => fileInput?.click());
  document.getElementById("btn-receipt-clear")?.addEventListener("click", () => {
    stopScanner();
    if (fileInput) fileInput.value = "";
    setReceipt(null);
  });
  document.getElementById("btn-qr-cancel")?.addEventListener("click", stopScanner);

  fileInput?.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      const next = await fileToReceiptAttachment(file);
      if (receipt?.qr) next.qr = receipt.qr;
      setReceipt(next);

      if (String(file.type || "").startsWith("image/") && "BarcodeDetector" in window) {
        try {
          const detector = new BarcodeDetector({ formats: ["qr_code"] });
          const bmp = await createImageBitmap(file);
          const codes = await detector.detect(bmp);
          bmp.close?.();
          if (codes?.length && codes[0].rawValue) {
            await applyQrPayload(codes[0].rawValue);
          }
        } catch {
          /* QR на фото необязателен */
        }
      }
    } catch (err) {
      showAlert(err?.message || "Не удалось прикрепить чек", "Чек");
      fileInput.value = "";
    }
  });

  document.getElementById("btn-receipt-scan")?.addEventListener("click", async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      showAlert("Камера недоступна в этом браузере. Загрузите фото чека файлом.", "Сканер QR");
      return;
    }
    if (!("BarcodeDetector" in window)) {
      showAlert(
        "Сканирование QR в этом браузере не поддерживается. Загрузите фото чека — при возможности QR распознается с изображения.",
        "Сканер QR"
      );
      fileInput?.click();
      return;
    }
    try {
      stopScanner();
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      scanner?.classList.remove("hidden");
      if (video) {
        video.srcObject = stream;
        await video.play();
      }
      detecting = true;
      tickDetect();
    } catch {
      stopScanner();
      showAlert("Не удалось открыть камеру. Разрешите доступ или загрузите фото чека.", "Сканер QR");
    }
  });

  emit();

  return {
    getReceipt: () => receipt,
    stop: stopScanner,
  };
}

function openReportEditor(existingId) {
  const existing = existingId ? findReport(existingId) : null;
  if (existing && !canUserEdit(existing) && state.role === "user") {
    return openReportModal(existingId);
  }

  syncIssueBalancesForUser(currentUserId());
  const title = existing ? "Редактирование отчёта" : "Новый отчёт";
  const issueOptions = activeIssuesForUser(currentUserId(), {
    withRestOnly: true,
    includeIssueId: existing?.issueId || null,
  });

  showModal(`
    <h3>${title}</h3>
    ${existing?.status === "На доработке" && existing.reviewComment
      ? `<div class="review-banner">Вернули на доработку: ${existing.reviewComment}</div>`
      : ""}
    <form id="report-form" class="form-grid">
      <label class="field full"><span>Название</span><input name="title" required placeholder="Краткое название отчёта, например Командировка август" value="${existing?.title || ""}" /></label>
      <label class="field">
        <span>Назначение платежа</span>
        <select name="purpose" required>
          ${state.dicts.purposes
            .filter((p) => !String(p.status).startsWith("Архив"))
            .map((p) => `<option value="${p.name}" ${existing?.purpose === p.name ? "selected" : ""}>${p.name}</option>`)
            .join("")}
        </select>
      </label>
      <label class="field"><span>Компания</span>
        <select name="company">${state.dicts.companies.filter((c) => c.status === "Активна").map((c) => `<option ${existing?.company === c.name ? "selected" : ""}>${c.name}</option>`).join("")}</select>
      </label>
      <label class="field"><span>Процедура <em class="optional-mark">необязательно</em></span>
        <select name="procedure"><option value="—">—</option>${state.dicts.procedures.filter((c) => c.status === "Активна").map((c) => `<option ${existing?.procedure === c.name ? "selected" : ""}>${c.name}</option>`).join("")}</select>
      </label>
      <label class="field"><span>Сумма, ₽</span><input name="sum" data-amount inputmode="decimal" required placeholder="0,00" value="${formatAmount(existing?.sum ?? 15000)}" /></label>
      <label class="field full"><span>Источник средств</span>
        <select name="source" id="report-source">
          <option value="Из полученной выдачи" ${!existing || isIssueSource(existing.source) ? "selected" : ""}>Из полученной выдачи</option>
          <option value="Собственные средства (компенсация)" ${existing && isCompensationSource(existing.source) ? "selected" : ""}>Собственные средства (компенсация)</option>
        </select>
      </label>
      <label class="field full" id="report-issue-wrap">
        <span>Выдача</span>
        <select name="issueId" id="report-issue">
          ${
            issueOptions.length
              ? `<option value="" disabled ${existing?.issueId ? "" : "selected"}>Выберите выдачу</option>` +
                issueOptions
                  .map((i) => {
                    const label = issueOptionLabel(i, { excludeReportId: existing?.id || null });
                    return `<option value="${i.id}" ${Number(existing?.issueId) === i.id ? "selected" : ""}>${escapeHtml(label)}</option>`;
                  })
                  .join("")
              : `<option value="">Нет выдач с доступным остатком</option>`
          }
        </select>
        <p class="password-hint">Отчёт списывается с выбранной выдачи. Сумма не может превышать её остаток.</p>
      </label>
      ${receiptAttachMarkup(existing?.receipt)}
    </form>
    <div class="modal-actions modal-actions-fill">
      <button type="button" class="btn btn-secondary" data-close>Отмена</button>
      ${
        existing?.status === "Черновик"
          ? `<button type="button" class="btn btn-danger" id="btn-delete-draft">Удалить черновик</button>`
          : ""
      }
      <button type="button" class="btn btn-secondary" id="btn-save-draft">Сохранить черновик</button>
      <button type="button" class="btn btn-primary" id="btn-submit-report">Отправить на проверку</button>
    </div>
  `);

  bindAmountInputs(document.getElementById("report-form"));
  const receiptCtl = bindReceiptAttach({ initial: existing?.receipt || null });
  const sourceSelect = document.getElementById("report-source");
  const issueWrap = document.getElementById("report-issue-wrap");
  const issueSelect = document.getElementById("report-issue");

  const syncSourceUi = () => {
    const fromIssue = isIssueSource(sourceSelect.value);
    issueWrap.classList.toggle("hidden", !fromIssue);
    issueSelect.required = fromIssue;
  };
  sourceSelect.addEventListener("change", syncSourceUi);
  syncSourceUi();

  const readForm = () => {
    const fd = new FormData(document.getElementById("report-form"));
    const source = String(fd.get("source"));
    const issueId = isIssueSource(source) ? Number(fd.get("issueId") || 0) || null : null;
    return {
      title: String(fd.get("title")).trim(),
      purpose: String(fd.get("purpose")),
      company: String(fd.get("company")),
      procedure: String(fd.get("procedure")),
      sum: parseAmount(fd.get("sum")),
      source,
      issueId,
      receipt: receiptCtl.getReceipt(),
    };
  };

  const save = (status) => {
    const form = document.getElementById("report-form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = readForm();
    if (!data.title) return;
    if (!Number.isFinite(data.sum) || data.sum <= 0) {
      showAlert("Укажите сумму с двумя знаками после запятой, например 15 000,00", "Проверьте сумму");
      return;
    }

    if (isIssueSource(data.source)) {
      if (!data.issueId) {
        showAlert("Выберите выдачу, с которой списывается сумма отчёта.", "Выдача не выбрана");
        return;
      }
      const available = issueAvailableRest(data.issueId, { excludeReportId: existing?.id || null });
      // черновик не занимает остаток — при сохранении черновика тоже не даём указать больше доступного
      if (data.sum > available + 0.001) {
        showAlert(
          `Сумма превышает остаток по выдаче № ${data.issueId}.\nДоступно: ${money(available)}.`,
          "Превышение остатка"
        );
        return;
      }
    } else {
      data.issueId = null;
    }

    receiptCtl.stop();

    if (existing) {
      Object.assign(existing, data, {
        status,
        reviewComment: status === "На проверке" ? "" : existing.reviewComment,
        date: existing.date || new Date().toISOString().slice(0, 10),
      });
      logActivity({
        action: status === "На проверке" ? "submit" : "update",
        entity: "report",
        entityLabel: existing.id,
        detail:
          status === "На проверке"
            ? `Отчёт «${existing.title}» отправлен на проверку (${money(existing.sum)}${existing.issueId ? `, выдача № ${existing.issueId}` : ""})`
            : `Черновик отчёта «${existing.title}» сохранён`,
      });
    } else {
      const row = {
        id: `R-${2400 + state.reports.length + 5}`,
        authorId: currentUserId(),
        ...data,
        status,
        date: new Date().toISOString().slice(0, 10),
        reviewComment: "",
      };
      state.reports.unshift(row);
      logActivity({
        action: status === "На проверке" ? "submit" : "create",
        entity: "report",
        entityLabel: row.id,
        detail:
          status === "На проверке"
            ? `Отчёт «${row.title}» создан и отправлен на проверку (${money(row.sum)}${row.issueId ? `, выдача № ${row.issueId}` : ""})`
            : `Создан черновик отчёта «${row.title}»`,
      });
    }

    syncIssueBalancesForUser(currentUserId());
    closeModal();
    state.page = "my-reports";
    renderNav();
    render();
  };

  document.getElementById("btn-save-draft").addEventListener("click", () => save("Черновик"));
  document.getElementById("btn-submit-report").addEventListener("click", () => save("На проверке"));
  document.getElementById("btn-delete-draft")?.addEventListener("click", async () => {
    if (!existing || existing.status !== "Черновик") return;
    const ok = await showConfirm(
      `Удалить черновик «${existing.title || existing.id}»?\n\nЭто действие нельзя отменить.`,
      "Удаление черновика"
    );
    if (!ok) return;
    receiptCtl.stop();
    const idx = state.reports.findIndex((r) => r.id === existing.id);
    if (idx >= 0) state.reports.splice(idx, 1);
    logActivity({
      action: "delete",
      entity: "report",
      entityLabel: existing.id,
      detail: `Удалён черновик отчёта «${existing.title || existing.id}»`,
    });
    syncIssueBalancesForUser(currentUserId());
    closeModal();
    state.page = "my-reports";
    renderNav();
    render();
  });
}

function openReportModal(id) {
  const r = findReport(id);
  if (!r) return;

  if (state.role === "user" && canUserEdit(r)) {
    return openReportEditor(id);
  }

  const isAdminReview = state.role === "admin" && r.status === "На проверке";
  const isAdminApprovedComp =
    state.role === "admin" && r.status === "Утверждён" && isCompensationSource(r.source);
  const canWithdraw = state.role === "user" && r.status === "На проверке";
  const issueLabel = r.issueId ? `№ ${r.issueId}` : "—";

  showModal(`
    <h3>${r.title}</h3>
    <div class="report-meta">${badge(r.status)} <span class="muted-inline">${r.id}</span></div>
    <div class="form-grid report-view">
      <div class="field"><span>Автор</span><div class="readonly">${reportAuthorName(r)}</div></div>
      <div class="field"><span>Дата</span><div class="readonly">${r.date}</div></div>
      <div class="field"><span>Название</span><div class="readonly">${r.title || "—"}</div></div>
      <div class="field"><span>Назначение платежа</span><div class="readonly">${r.purpose || "—"}</div></div>
      <div class="field"><span>Компания</span><div class="readonly">${r.company}</div></div>
      <div class="field"><span>Процедура</span><div class="readonly">${r.procedure || "—"}</div></div>
      <div class="field"><span>Сумма</span><div class="readonly money">${money(r.sum)}</div></div>
      <div class="field"><span>Источник</span><div class="readonly">${r.source || "—"}</div></div>
      <div class="field"><span>Выдача</span><div class="readonly">${issueLabel}</div></div>
      ${receiptViewMarkup(r.receipt)}
      ${r.reviewComment ? `<div class="field full"><span>Комментарий проверки</span><div class="readonly rework-box">${r.reviewComment}</div></div>` : ""}
      ${
        isAdminReview
          ? `<label class="field full"><span>Комментарий <em class="optional-mark">нужен для доработки или отклонения</em></span>
              <textarea name="reviewComment" id="review-comment" rows="3" placeholder="Что нужно исправить или почему отклонён"></textarea>
            </label>`
          : ""
      }
    </div>
    <div class="modal-actions modal-actions-split">
      <button type="button" class="btn btn-secondary" data-close>Закрыть</button>
      <div class="modal-actions-right">
        ${
          isAdminReview
            ? `<button type="button" class="btn btn-danger" id="btn-reject">Отклонить</button>
               <button type="button" class="btn btn-rework" id="btn-rework">На доработку</button>
               <button type="button" class="btn btn-primary" id="btn-approve">Утвердить</button>`
            : ""
        }
        ${
          isAdminApprovedComp
            ? `<button type="button" class="btn btn-primary" id="btn-mark-paid">Отметить выплаченным</button>`
            : ""
        }
        ${
          canWithdraw
            ? `<button type="button" class="btn btn-secondary" id="btn-withdraw">Отозвать с проверки</button>`
            : ""
        }
      </div>
    </div>
  `);

  document.getElementById("btn-approve")?.addEventListener("click", () => {
    r.status = "Утверждён";
    r.reviewComment = "";
    logActivity({
      action: "approve",
      entity: "report",
      entityLabel: r.id,
      detail: `Отчёт «${r.title}» утверждён (${money(r.sum)})`,
    });
    syncIssueBalancesForUser(r.authorId);
    closeModal();
    render();
  });

  document.getElementById("btn-rework")?.addEventListener("click", () => {
    const comment = (document.getElementById("review-comment")?.value || "").trim();
    if (!comment) {
      showAlert("Укажите комментарий — пользователь должен понять, что исправить.", "Нужен комментарий");
      return;
    }
    r.status = "На доработке";
    r.reviewComment = comment;
    logActivity({
      action: "rework",
      entity: "report",
      entityLabel: r.id,
      detail: `Отчёт «${r.title}» возвращён на доработку`,
    });
    syncIssueBalancesForUser(r.authorId);
    closeModal();
    render();
  });

  document.getElementById("btn-reject")?.addEventListener("click", async () => {
    const comment = (document.getElementById("review-comment")?.value || "").trim();
    if (!comment) {
      showAlert("Укажите причину отклонения.", "Нужен комментарий");
      return;
    }
    const ok = await showConfirm(
      `Отклонить отчёт «${r.title}»?\n\nСумма перестанет занимать остаток по выдаче. Пользователь не сможет отправить этот отчёт снова — нужно создать новый.`,
      "Отклонить отчёт"
    );
    if (!ok) return;
    r.status = "Отклонён";
    r.reviewComment = comment;
    logActivity({
      action: "reject",
      entity: "report",
      entityLabel: r.id,
      detail: `Отчёт «${r.title}» отклонён (${money(r.sum)})`,
    });
    syncIssueBalancesForUser(r.authorId);
    closeModal();
    render();
  });

  document.getElementById("btn-mark-paid")?.addEventListener("click", async () => {
    const ok = await showConfirm(
      `Отметить отчёт «${r.title}» как выплаченный?\n\nЭто финальный статус для компенсации из собственных средств.`,
      "Выплата"
    );
    if (!ok) return;
    r.status = "Выплачено";
    logActivity({
      action: "pay",
      entity: "report",
      entityLabel: r.id,
      detail: `Компенсация по отчёту «${r.title}» отмечена как выплаченная (${money(r.sum)})`,
    });
    closeModal();
    render();
  });

  document.getElementById("btn-withdraw")?.addEventListener("click", async () => {
    const ok = await showConfirm(
      `Отозвать отчёт «${r.title}» с проверки?\n\nОн вернётся в черновики — можно править и отправить снова.`,
      "Отзыв отчёта"
    );
    if (!ok) return;
    r.status = "Черновик";
    logActivity({
      action: "withdraw",
      entity: "report",
      entityLabel: r.id,
      detail: `Отчёт «${r.title}» отозван с проверки`,
    });
    syncIssueBalancesForUser(r.authorId);
    closeModal();
    state.page = "my-reports";
    renderNav();
    render();
  });
}

function openNewReportModal() {
  openReportEditor();
}

function showModal(html) {
  closeModal();
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.id = "modal";
  backdrop.innerHTML = `<div class="modal">${html}</div>`;
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop || e.target.matches("[data-close]")) closeModal();
  });
  document.body.appendChild(backdrop);
}

function closeModal() {
  const video = document.getElementById("qr-video");
  const stream = video?.srcObject;
  if (stream && typeof stream.getTracks === "function") {
    stream.getTracks().forEach((t) => t.stop());
  }
  document.getElementById("modal")?.remove();
}

function closeAppDialog() {
  document.getElementById("app-dialog")?.remove();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDialogText(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

/** Диалог в стиле Сальдо вместо системных alert/confirm */
function showDialog({ title = "Подтвердите действие", message = "", mode = "alert", okText, cancelText = "Нет" } = {}) {
  return new Promise((resolve) => {
    closeAppDialog();
    const isConfirm = mode === "confirm";
    const primary = okText || (isConfirm ? "Да" : "Понятно");
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop dialog-layer";
    backdrop.id = "app-dialog";
    backdrop.innerHTML = `
      <div class="modal dialog-modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <h3 class="dialog-title" id="dialog-title">${escapeHtml(title)}</h3>
        <p class="dialog-body">${formatDialogText(message)}</p>
        <div class="modal-actions">
          ${isConfirm ? `<button type="button" class="btn btn-secondary" data-dialog="no">${escapeHtml(cancelText)}</button>` : ""}
          <button type="button" class="btn btn-primary" data-dialog="yes">${escapeHtml(primary)}</button>
        </div>
      </div>
    `;

    const finish = (value) => {
      closeAppDialog();
      resolve(value);
    };

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) finish(isConfirm ? false : true);
    });
    backdrop.querySelector('[data-dialog="yes"]')?.addEventListener("click", () => finish(true));
    backdrop.querySelector('[data-dialog="no"]')?.addEventListener("click", () => finish(false));
    document.body.appendChild(backdrop);
    backdrop.querySelector('[data-dialog="yes"]')?.focus();
  });
}

function showAlert(message, title = "Сообщение") {
  return showDialog({ title, message, mode: "alert", okText: "Понятно" });
}

function showConfirm(message, title = "Подтвердите действие") {
  return showDialog({ title, message, mode: "confirm", okText: "Да", cancelText: "Нет" });
}

function bindGo() {
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", () => {
      state.page = el.dataset.go;
      renderNav();
      render();
    });
  });
}

/* —— boot —— */
try {
  loadSessionEpochs();

  window.addEventListener("storage", (e) => {
    if (e.key !== SESSION_EPOCH_KEY) return;
    loadSessionEpochs();
    if (state.role) assertSession();
  });

  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    tryLogin(email, password);
  });

  document.querySelectorAll("[data-demo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.demo === "admin") {
        document.getElementById("login-email").value = "admin@example.com";
        document.getElementById("login-password").value = "demo";
      } else {
        document.getElementById("login-email").value = "i.petrov@example.com";
        document.getElementById("login-password").value = "demo";
      }
      tryLogin(document.getElementById("login-email").value, document.getElementById("login-password").value);
    });
  });

  document.getElementById("btn-logout").addEventListener("click", logout);

  document.getElementById("brand-home").addEventListener("click", () => {
    if (!state.role) return;
    state.page = "home";
    renderNav();
    render();
  });
} catch (err) {
  console.error(err);
  showAlert("Ошибка инициализации: " + (err && err.message ? err.message : err), "Ошибка");
}
