/* ==========================================================================
   Переводы интерфейса (RU / EN)
   ========================================================================== */

const I18N = {
  ru: {
    page_title: 'EntropyLab — генераторы паролей, логинов и seed-фраз',

    nav_aria: 'Разделы генераторов',
    nav_about: 'О наборе',
    nav_pw: 'Пароли',
    nav_login: 'Логины',
    nav_seed: 'Seed-фразы',

    lang_aria: 'Переключить язык сайта',
    lang_ru: 'Русский',
    lang_en: 'Английский',
    theme_aria: 'Тема оформления',
    theme_dark: 'Тёмная',
    theme_light: 'Светлая',

    about_eyebrow: '[ LOCAL FIRST · ZERO DEPENDENCIES ]',
    about_headline_1: 'EntropyLab — набор из трёх генераторов, работающих полностью ',
    about_accent: 'локально',
    about_headline_2: ' в вашем браузере.',
    about_lead_1: 'Вся случайность берётся из Web Crypto API (',
    about_lead_2: '), а не из ',
    about_lead_3: '. Ничего не отправляется на сервер — можно даже отключить интернет и продолжить пользоваться страницей.',
    about_note: 'Это открытый инструмент, а не аппаратный кошелёк. Для хранения реальных крипто-средств используйте офлайн-генерацию и проверенное защищённое устройство — подробности на вкладке «Seed-фразы».',

    tool_tag: '[ GENERATOR ]',
    tool_title_pw: 'Пароли',
    tool_desc_pw: 'Настраиваемая длина, наборы символов, гарантия хотя бы одного символа из каждой выбранной категории, шкала энтропии.',
    tool_title_login: 'Логины',
    tool_desc_login: 'Случайные имена пользователей: читаемые (слово+слово+число) или полностью случайные строки.',
    tool_title_seed: 'Seed-фразы',
    tool_desc_seed: 'Мнемонические фразы по стандарту BIP-39 (официальный английский словарь, 12–24 слова) с корректной контрольной суммой SHA-256.',

    length_label: 'Длина',

    pw_eyebrow: '[ PASSWORD GENERATOR ]',
    pw_headline_1: 'Генератор',
    pw_accent: 'паролей',
    pw_opt_upper: 'Заглавные',
    pw_opt_lower: 'Строчные',
    pw_opt_numbers: 'Цифры',
    pw_opt_symbols: 'Символы',
    pw_generate_btn: 'Сгенерировать пароль',
    pw_copy_aria: 'Скопировать пароль',
    pw_length_aria: 'Длина пароля',
    strength_aria: 'Уровень энтропии пароля',
    warn_min_category: 'Нужен хотя бы один тип символов — строчные буквы включены автоматически.',
    strength_1: 'Слабый',
    strength_2: 'Средний',
    strength_3: 'Хороший',
    strength_4: 'Очень хороший',

    login_eyebrow: '[ USERNAME GENERATOR ]',
    login_headline_1: 'Генератор',
    login_accent: 'логинов',
    login_mode_aria: 'Режим генерации логина',
    login_mode_readable: 'Читаемый (слово+слово)',
    login_mode_random: 'Случайные символы',
    login_digits_label: 'Добавить цифры',
    login_generate_btn: 'Сгенерировать логин',
    login_copy_aria: 'Скопировать логин',
    login_length_aria: 'Длина логина',

    seed_eyebrow: '[ BIP-39 MNEMONIC GENERATOR ]',
    seed_headline_1: 'Генератор',
    seed_accent: 'seed-фраз',
    seed_warning: 'Никогда не вводите seed-фразу от кошелька с реальными средствами на каком-либо сайте, включая этот. Для настоящих денег генерируйте фразу офлайн на проверенном устройстве (аппаратный кошелёк). Здесь — только для обучения, тестовых кошельков и экспериментов.',
    seed_count_aria: 'Количество слов в seed-фразе',
    seed_count_12: '12 слов',
    seed_count_15: '15 слов',
    seed_count_18: '18 слов',
    seed_count_21: '21 слово',
    seed_count_24: '24 слова',
    seed_hint: 'Нажмите «Скопировать», чтобы получить фразу одной строкой',
    seed_generate_btn: 'Сгенерировать seed-фразу',
    seed_copy_aria: 'Скопировать seed-фразу',
    seed_grid_aria: 'Сгенерированные слова seed-фразы',

    toast_copied: 'Скопировано в буфер обмена',

    modal_title: 'Прежде чем начать',
    modal_body: 'EntropyLab генерирует пароли, логины и seed-фразы локально в вашем браузере, с помощью криптографически стойкого генератора случайных чисел. Мы не видим, не собираем и не храним то, что вы здесь создаёте. Но мы не несём ответственности за то, как вы храните, передаёте или используете сгенерированные данные — если аккаунт или кошелёк будут скомпрометированы из-за утечки на вашей стороне, фишинга или несоблюдения правил безопасности, это не ответственность EntropyLab. Seed-фразы для реальных криптокошельков генерируйте только офлайн, на проверенном устройстве.',
    modal_button: 'Понимаю, продолжить'
  },
  en: {
    page_title: 'EntropyLab — password, username and seed phrase generators',

    nav_aria: 'Generator sections',
    nav_about: 'About',
    nav_pw: 'Passwords',
    nav_login: 'Logins',
    nav_seed: 'Seed phrases',

    lang_aria: 'Switch site language',
    lang_ru: 'Russian',
    lang_en: 'English',
    theme_aria: 'Color theme',
    theme_dark: 'Dark',
    theme_light: 'Light',

    about_eyebrow: '[ LOCAL FIRST · ZERO DEPENDENCIES ]',
    about_headline_1: 'EntropyLab is a set of three generators that run entirely ',
    about_accent: 'locally',
    about_headline_2: ' in your browser.',
    about_lead_1: 'All randomness comes from the Web Crypto API (',
    about_lead_2: '), not from ',
    about_lead_3: '. Nothing is sent to a server — you can even disconnect from the internet and keep using the page.',
    about_note: 'This is an open tool, not a hardware wallet. For real crypto funds, use offline generation and a trusted, secure device — see the details on the "Seed phrases" tab.',

    tool_tag: '[ GENERATOR ]',
    tool_title_pw: 'Passwords',
    tool_desc_pw: 'Adjustable length, character sets, a guarantee of at least one character from each selected category, and an entropy meter.',
    tool_title_login: 'Logins',
    tool_desc_login: 'Random usernames: readable (word+word+number) or fully random strings.',
    tool_title_seed: 'Seed phrases',
    tool_desc_seed: 'BIP-39 standard mnemonic phrases (official English wordlist, 12–24 words) with a correctly computed SHA-256 checksum.',

    length_label: 'Length',

    pw_eyebrow: '[ PASSWORD GENERATOR ]',
    pw_headline_1: 'Password',
    pw_accent: 'generator',
    pw_opt_upper: 'Uppercase',
    pw_opt_lower: 'Lowercase',
    pw_opt_numbers: 'Numbers',
    pw_opt_symbols: 'Symbols',
    pw_generate_btn: 'Generate password',
    pw_copy_aria: 'Copy password',
    pw_length_aria: 'Password length',
    strength_aria: 'Password entropy level',
    warn_min_category: 'You need at least one character type — lowercase letters have been enabled automatically.',
    strength_1: 'Weak',
    strength_2: 'Medium',
    strength_3: 'Strong',
    strength_4: 'Very strong',

    login_eyebrow: '[ USERNAME GENERATOR ]',
    login_headline_1: 'Login',
    login_accent: 'generator',
    login_mode_aria: 'Username generation mode',
    login_mode_readable: 'Readable (word+word)',
    login_mode_random: 'Random characters',
    login_digits_label: 'Add digits',
    login_generate_btn: 'Generate username',
    login_copy_aria: 'Copy username',
    login_length_aria: 'Username length',

    seed_eyebrow: '[ BIP-39 MNEMONIC GENERATOR ]',
    seed_headline_1: 'Seed phrase',
    seed_accent: 'generator',
    seed_warning: 'Never enter a seed phrase from a wallet holding real funds on any website, including this one. For real money, generate the phrase offline on a trusted device (a hardware wallet). This tool is for learning, test wallets, and experiments only.',
    seed_count_aria: 'Number of words in the seed phrase',
    seed_count_12: '12 words',
    seed_count_15: '15 words',
    seed_count_18: '18 words',
    seed_count_21: '21 words',
    seed_count_24: '24 words',
    seed_hint: 'Click "Copy" to get the phrase as a single line',
    seed_generate_btn: 'Generate seed phrase',
    seed_copy_aria: 'Copy seed phrase',
    seed_grid_aria: 'Generated seed phrase words',

    toast_copied: 'Copied to clipboard',

    modal_title: 'Before you start',
    modal_body: 'EntropyLab generates passwords, usernames, and seed phrases locally in your browser, using a cryptographically secure random generator. We never see, collect, or store what you create here. But we are not responsible for how you store, share, or use the generated data — if an account or wallet is compromised because of a leak on your side, phishing, or poor security habits, that is not EntropyLab’s responsibility. For real crypto wallets, generate seed phrases offline, on a trusted device only.',
    modal_button: 'I understand, continue'
  }
};


/* ==========================================================================
   Текущий язык и тема интерфейса
   ========================================================================== */

let currentLang = 'ru';
let currentTheme = 'dark';


/* ==========================================================================
   Общие крипто-хелперы
   ========================================================================== */

function secureRandomInt(max) {
  if (!Number.isInteger(max) || max <= 0) {
    throw new RangeError('secureRandomInt: max must be a positive integer');
  }

  if (max === 1) return 0;

  const buffer = new Uint32Array(1);
  const limit = Math.floor(0x100000000 / max) * max;
  let value;

  do {
    crypto.getRandomValues(buffer);
    value = buffer[0];
  } while (value >= limit);

  return value % max;
}

function secureRandomChar(str) {
  return str[secureRandomInt(str.length)];
}

function secureShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}


/* ==========================================================================
   Уведомление и копирование в буфер обмена
   ========================================================================== */

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');

  toast.textContent = message;
  toast.classList.add('is-visible');
  toast.setAttribute('aria-hidden', 'false');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.setAttribute('aria-hidden', 'true');
  }, 1800);
}

async function copyText(text, btn, iconCopy, iconCheck) {
  if (!text) return false;

  let copied = true;

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    copied = false;

    const textarea = document.createElement('textarea');

    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();

    try {
      copied = document.execCommand('copy');
    } catch (fallbackErr) {
      copied = false;
    }

    document.body.removeChild(textarea);
  }

  if (!copied) return false;

  iconCopy.hidden = true;
  iconCheck.hidden = false;
  btn.classList.add('is-copied');

  showToast(I18N[currentLang].toast_copied);

  setTimeout(() => {
    iconCopy.hidden = false;
    iconCheck.hidden = true;
    btn.classList.remove('is-copied');
  }, 1600);

  return true;
}


/* ==========================================================================
   Вкладки
   ========================================================================== */

document.querySelectorAll('.nav-pill').forEach((btn, index, tabs) => {
  btn.addEventListener('click', () => activateTab(btn));

  btn.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const dir = event.key === 'ArrowRight' ? 1 : -1;
      const next = (index + dir + tabs.length) % tabs.length;
      tabs[next].focus();
      activateTab(tabs[next]);
    }
  });
});

function activateTab(btn) {
  document.querySelectorAll('.nav-pill').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });

  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');

  document.querySelectorAll('.panel').forEach(panel => panel.hidden = true);
  document.getElementById('panel-' + btn.dataset.tab).hidden = false;
  btn.focus();
}

/* ==========================================================================
   Парол
   ========================================================================== */

const CHAR_SETS = {
  upper:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower:   'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

const TIER_CLASS = {
  1: 'strength--weak',
  2: 'strength--medium',
  3: 'strength--strong',
  4: 'strength--very-strong'
};

const pw = {
  text:        document.getElementById('pwText'),
  copyBtn:     document.getElementById('pwCopyBtn'),
  iconCopy:    document.getElementById('pwIconCopy'),
  iconCheck:   document.getElementById('pwIconCheck'),
  bars:        document.getElementById('pwBars'),
  label:       document.getElementById('pwLabel'),
  warning:     document.getElementById('pwWarning'),
  length:      document.getElementById('pwLength'),
  lengthValue: document.getElementById('pwLengthValue'),
  upper:       document.getElementById('pwUpper'),
  lower:       document.getElementById('pwLower'),
  numbers:     document.getElementById('pwNumbers'),
  symbols:     document.getElementById('pwSymbols'),
  genBtn:      document.getElementById('pwGenerateBtn')
};

let currentPassword = '';
let pwLastTier = 1;
let pwWarningActive = false;

function pwActiveCats() {
  const cats = [];

  if (pw.upper.checked)   cats.push('upper');
  if (pw.lower.checked)   cats.push('lower');
  if (pw.numbers.checked) cats.push('numbers');
  if (pw.symbols.checked) cats.push('symbols');

  return cats;
}

function pwEnsureCategory() {
  if (pwActiveCats().length > 0) {
    pwWarningActive = false;
    renderPwWarning();
    return;
  }

  pw.lower.checked = true;
  pwWarningActive = true;
  renderPwWarning();
}

function generatePassword(length, categories) {
  const pools = categories.map(key => CHAR_SETS[key]);
  const combined = pools.join('');
  const chars = [];

  for (const pool of pools) {
    chars.push(secureRandomChar(pool));
  }

  for (let i = chars.length; i < length; i++) {
    chars.push(secureRandomChar(combined));
  }

  return secureShuffle(chars).slice(0, length).join('');
}

function pwEntropyBits(length, categories) {
  const poolSize = categories.reduce((sum, key) => sum + CHAR_SETS[key].length, 0);

  return poolSize === 0 ? 0 : length * Math.log2(poolSize);
}

function entropyToTier(bits) {
  if (bits < 40)  return 1;
  if (bits < 70)  return 2;
  if (bits < 100) return 3;

  return 4;
}

function renderPwStrength() {
  pw.bars.className = 'strength-bars ' + TIER_CLASS[pwLastTier];
  pw.label.textContent = I18N[currentLang][`strength_${pwLastTier}`];
}

function renderPwWarning() {
  if (!pwWarningActive) {
    pw.warning.hidden = true;
    return;
  }

  pw.warning.hidden = false;
  pw.warning.textContent = I18N[currentLang].warn_min_category;
}

function pwRun() {
  pwEnsureCategory();

  const length = parseInt(pw.length.value, 10);
  const cats = pwActiveCats();

  currentPassword = generatePassword(length, cats);
  pw.text.textContent = currentPassword;

  const bits = pwEntropyBits(length, cats);
  pwLastTier = entropyToTier(bits);
  renderPwStrength();

  pw.iconCopy.hidden = false;
  pw.iconCheck.hidden = true;
  pw.copyBtn.classList.remove('is-copied');
}

let pwDebounceTimer = null;

pw.length.addEventListener('input', () => {
  pw.lengthValue.textContent = pw.length.value;
  clearTimeout(pwDebounceTimer);
  pwDebounceTimer = setTimeout(pwRun, 150);
});

[pw.upper, pw.lower, pw.numbers, pw.symbols].forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    pwEnsureCategory();
    pwRun();
  });
});

pw.genBtn.addEventListener('click', pwRun);

pw.copyBtn.addEventListener('click', () => {
  copyText(currentPassword, pw.copyBtn, pw.iconCopy, pw.iconCheck);
});

pwRun();


/* ==========================================================================
   Логины
   ========================================================================== */

const ADJ = [
  'quiet', 'brave', 'lucky', 'swift', 'clever', 'bold', 'calm', 'sharp', 'bright', 'silent',
  'cosmic', 'solar', 'lunar', 'arctic', 'crimson', 'amber', 'azure', 'rapid', 'ancient', 'noble',
  'wild', 'gentle', 'fierce', 'loyal', 'vivid', 'frozen', 'golden', 'stormy', 'hidden', 'mighty'
];

const NOUN = [
  'falcon', 'tiger', 'otter', 'maple', 'comet', 'harbor', 'ember', 'canyon', 'glacier', 'raven',
  'willow', 'summit', 'ripple', 'orbit', 'lantern', 'thistle', 'beacon', 'meadow', 'quartz', 'voyager',
  'cipher', 'anchor', 'sable', 'griffin', 'tundra', 'vortex', 'crystal', 'marlin', 'pixel', 'forge'
];

const login = {
  text:          document.getElementById('loginText'),
  copyBtn:       document.getElementById('loginCopyBtn'),
  iconCopy:      document.getElementById('loginIconCopy'),
  iconCheck:     document.getElementById('loginIconCheck'),
  digits:        document.getElementById('loginDigits'),
  length:        document.getElementById('loginLength'),
  lengthValue:   document.getElementById('loginLengthValue'),
  readableOpts:  document.getElementById('loginReadableOpts'),
  randomOpts:    document.getElementById('loginRandomOpts'),
  genBtn:        document.getElementById('loginGenerateBtn')
};

let currentLogin = '';
let loginMode = 'readable';

function loginRun() {
  if (loginMode === 'readable') {
    const adjective = ADJ[secureRandomInt(ADJ.length)];
    const noun = NOUN[secureRandomInt(NOUN.length)].replace(/^./, c => c.toUpperCase());
    let name = adjective + noun;

    if (login.digits.checked) name += secureRandomInt(90) + 10;

    currentLogin = name;
  } else {
    const pool = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const length = parseInt(login.length.value, 10);
    const chars = [];

    for (let i = 0; i < length; i++) {
      chars.push(secureRandomChar(pool));
    }

    currentLogin = chars.join('');
  }

  login.text.textContent = currentLogin;

  login.iconCopy.hidden = false;
  login.iconCheck.hidden = true;
  login.copyBtn.classList.remove('is-copied');
}

login.digits.addEventListener('change', loginRun);
login.genBtn.addEventListener('click', loginRun);

document.querySelectorAll('#loginModeRow .chip').forEach((chip, index, chips) => {
  chip.addEventListener('click', () => activateChip(chip, chips));

  chip.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const dir = event.key === 'ArrowRight' ? 1 : -1;
      const next = (index + dir + chips.length) % chips.length;
      chips[next].focus();
      activateChip(chips[next], chips);
    }
  });
});

function activateChip(chip, chips) {
  chips.forEach(c => c.classList.remove('active'));
  chips.forEach(c => c.setAttribute('aria-checked', 'false'));
  chip.classList.add('active');
  chip.setAttribute('aria-checked', 'true');

  loginMode = chip.dataset.mode;
  login.readableOpts.hidden = loginMode !== 'readable';
  login.randomOpts.hidden = loginMode !== 'random';
  loginRun();
}

login.length.addEventListener('input', () => {
  login.lengthValue.textContent = login.length.value;
  loginRun();
});

login.copyBtn.addEventListener('click', () => {
  copyText(currentLogin, login.copyBtn, login.iconCopy, login.iconCheck);
});

loginRun();


/* ==========================================================================
   SEED-ФРАЗЫ (BIP-39)
   ========================================================================== */

const BIP39_WORDS = [
  'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
  'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act',
  'action', 'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit',
  'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent',
  'agree', 'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert',
  'alien', 'all', 'alley', 'allow', 'almost', 'alone', 'alpha', 'already', 'also', 'alter',
  'always', 'amateur', 'amazing', 'among', 'amount', 'amused', 'analyst', 'anchor', 'ancient', 'anger',
  'angle', 'angry', 'animal', 'ankle', 'announce', 'annual', 'another', 'answer', 'antenna', 'antique',
  'anxiety', 'any', 'apart', 'apology', 'appear', 'apple', 'approve', 'april', 'arch', 'arctic',
  'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around', 'arrange', 'arrest',
  'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault', 'asset',
  'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract', 'auction',
  'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake',
  'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge',
  'bag', 'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain',
  'barrel', 'base', 'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become',
  'beef', 'before', 'begin', 'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit',
  'best', 'betray', 'better', 'between', 'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology',
  'bird', 'birth', 'bitter', 'black', 'blade', 'blame', 'blanket', 'blast', 'bleak', 'bless',
  'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush', 'board', 'boat', 'body',
  'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow', 'boss',
  'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread',
  'breeze', 'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze',
  'broom', 'brother', 'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb',
  'bulk', 'bullet', 'bundle', 'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy',
  'butter', 'buyer', 'buzz', 'cabbage', 'cabin', 'cable', 'cactus', 'cage', 'cake', 'call',
  'calm', 'camera', 'camp', 'can', 'canal', 'cancel', 'candy', 'cannon', 'canoe', 'canvas',
  'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card', 'cargo', 'carpet', 'carry',
  'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch', 'category',
  'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census', 'century',
  'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge', 'chase',
  'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child',
  'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle',
  'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk',
  'clever', 'click', 'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close',
  'cloth', 'cloud', 'clown', 'club', 'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut',
  'code', 'coffee', 'coil', 'coin', 'collect', 'color', 'column', 'combine', 'come', 'comfort',
  'comic', 'common', 'company', 'concert', 'conduct', 'confirm', 'congress', 'connect', 'consider', 'control',
  'convince', 'cook', 'cool', 'copper', 'copy', 'coral', 'core', 'corn', 'correct', 'cost',
  'cotton', 'couch', 'country', 'couple', 'course', 'cousin', 'cover', 'coyote', 'crack', 'cradle',
  'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy', 'cream', 'credit', 'creek',
  'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch', 'crowd', 'crucial',
  'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture', 'cup',
  'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle', 'dad',
  'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal',
  'debate', 'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense',
  'define', 'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny',
  'depart', 'depend', 'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk',
  'despair', 'destroy', 'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond',
  'diary', 'dice', 'diesel', 'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur',
  'direct', 'dirt', 'disagree', 'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance',
  'divert', 'divide', 'divorce', 'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain',
  'donate', 'donkey', 'donor', 'door', 'dose', 'double', 'dove', 'draft', 'dragon', 'drama',
  'drastic', 'draw', 'dream', 'dress', 'drift', 'drill', 'drink', 'drip', 'drive', 'drop',
  'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty', 'dwarf',
  'dynamic', 'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo',
  'ecology', 'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow',
  'elder', 'electric', 'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody',
  'embrace', 'emerge', 'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless',
  'endorse', 'enemy', 'energy', 'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough',
  'enrich', 'enroll', 'ensure', 'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip',
  'era', 'erase', 'erode', 'erosion', 'error', 'erupt', 'escape', 'essay', 'essence', 'estate',
  'eternal', 'ethics', 'evidence', 'evil', 'evoke', 'evolve', 'exact', 'example', 'excess', 'exchange',
  'excite', 'exclude', 'excuse', 'execute', 'exercise', 'exhaust', 'exhibit', 'exile', 'exist', 'exit',
  'exotic', 'expand', 'expect', 'expire', 'explain', 'expose', 'express', 'extend', 'extra', 'eye',
  'eyebrow', 'fabric', 'face', 'faculty', 'fade', 'faint', 'faith', 'fall', 'false', 'fame',
  'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal', 'father',
  'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female',
  'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file',
  'film', 'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first',
  'fiscal', 'fish', 'fit', 'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor',
  'flee', 'flight', 'flip', 'float', 'flock', 'floor', 'flower', 'fluid', 'flush', 'fly',
  'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food', 'foot', 'force', 'forest',
  'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found', 'fox', 'fragile',
  'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown', 'frozen',
  'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future', 'gadget', 'gain', 'galaxy',
  'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp',
  'gate', 'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture',
  'ghost', 'giant', 'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance',
  'glare', 'glass', 'glide', 'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue',
  'goat', 'goddess', 'gold', 'good', 'goose', 'gorilla', 'gospel', 'gossip', 'govern', 'gown',
  'grab', 'grace', 'grain', 'grant', 'grape', 'grass', 'gravity', 'great', 'green', 'grid',
  'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess', 'guide', 'guilt',
  'guitar', 'gun', 'gym', 'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy',
  'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health',
  'heart', 'heavy', 'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden',
  'high', 'hill', 'hint', 'hip', 'hire', 'history', 'hobby', 'hockey', 'hold', 'hole',
  'holiday', 'hollow', 'home', 'honey', 'hood', 'hope', 'horn', 'horror', 'horse', 'hospital',
  'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble', 'humor', 'hundred',
  'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid', 'ice', 'icon', 'idea',
  'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune',
  'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate',
  'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury',
  'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install',
  'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue',
  'item', 'ivory', 'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel',
  'job', 'join', 'joke', 'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior',
  'junk', 'just', 'kangaroo', 'keen', 'keep', 'ketchup', 'key', 'kick', 'kid', 'kidney',
  'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten', 'kiwi', 'knee', 'knife',
  'knock', 'know', 'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp', 'language',
  'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit',
  'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal',
  'legend', 'leisure', 'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level',
  'liar', 'liberty', 'library', 'license', 'life', 'lift', 'light', 'like', 'limb', 'limit',
  'link', 'lion', 'liquid', 'list', 'little', 'live', 'lizard', 'load', 'loan', 'lobster',
  'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery', 'loud', 'lounge', 'love',
  'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics', 'machine', 'mad',
  'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage',
  'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market',
  'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum',
  'maze', 'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt',
  'member', 'memory', 'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message',
  'metal', 'method', 'middle', 'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor',
  'minute', 'miracle', 'mirror', 'misery', 'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile',
  'model', 'modify', 'mom', 'moment', 'monitor', 'monkey', 'monster', 'month', 'moon', 'moral',
  'more', 'morning', 'mosquito', 'mother', 'motion', 'motor', 'mountain', 'mouse', 'move', 'movie',
  'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom', 'music', 'must', 'mutual',
  'myself', 'mystery', 'myth', 'naive', 'name', 'napkin', 'narrow', 'nasty', 'nation', 'nature',
  'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest', 'net',
  'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee',
  'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now',
  'nuclear', 'number', 'nurse', 'nut', 'oak', 'obey', 'object', 'oblige', 'obscure', 'observe',
  'obtain', 'obvious', 'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often',
  'oil', 'okay', 'old', 'olive', 'olympic', 'omit', 'once', 'one', 'onion', 'online',
  'only', 'open', 'opera', 'opinion', 'oppose', 'option', 'orange', 'orbit', 'orchard', 'order',
  'ordinary', 'organ', 'orient', 'original', 'orphan', 'ostrich', 'other', 'outdoor', 'outer', 'output',
  'outside', 'oval', 'oven', 'over', 'own', 'owner', 'oxygen', 'oyster', 'ozone', 'pact',
  'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic', 'panther', 'paper',
  'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient', 'patrol',
  'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen',
  'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo',
  'phrase', 'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot',
  'pink', 'pioneer', 'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate',
  'play', 'please', 'pledge', 'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar',
  'pole', 'police', 'pond', 'pony', 'pool', 'popular', 'portion', 'position', 'possible', 'post',
  'potato', 'pottery', 'poverty', 'powder', 'power', 'practice', 'praise', 'predict', 'prefer', 'prepare',
  'present', 'pretty', 'prevent', 'price', 'pride', 'primary', 'print', 'priority', 'prison', 'private',
  'prize', 'problem', 'process', 'produce', 'profit', 'program', 'project', 'promote', 'proof', 'property',
  'prosper', 'protect', 'proud', 'provide', 'public', 'pudding', 'pull', 'pulp', 'pulse', 'pumpkin',
  'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose', 'purse', 'push', 'put', 'puzzle',
  'pyramid', 'quality', 'quantum', 'quarter', 'question', 'quick', 'quit', 'quiz', 'quote', 'rabbit',
  'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally', 'ramp',
  'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor',
  'ready', 'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle',
  'reduce', 'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release',
  'relief', 'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen',
  'repair', 'repeat', 'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response',
  'result', 'retire', 'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib',
  'ribbon', 'rice', 'rich', 'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot',
  'ripple', 'risk', 'ritual', 'rival', 'river', 'road', 'roast', 'robot', 'robust', 'rocket',
  'romance', 'roof', 'rookie', 'room', 'rose', 'rotate', 'rough', 'round', 'route', 'royal',
  'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural', 'sad', 'saddle', 'sadness',
  'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand',
  'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter',
  'scene', 'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script',
  'scrub', 'sea', 'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed',
  'seek', 'segment', 'select', 'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service',
  'session', 'settle', 'setup', 'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell',
  'sheriff', 'shield', 'shift', 'shine', 'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop',
  'short', 'shoulder', 'shove', 'shrimp', 'shrug', 'shuffle', 'shy', 'sibling', 'sick', 'side',
  'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver', 'similar', 'simple', 'since',
  'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski', 'skill',
  'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight',
  'slim', 'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth',
  'snack', 'snake', 'snap', 'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda',
  'soft', 'solar', 'soldier', 'solid', 'solution', 'solve', 'someone', 'song', 'soon', 'sorry',
  'sort', 'soul', 'sound', 'soup', 'source', 'south', 'space', 'spare', 'spatial', 'spawn',
  'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice', 'spider', 'spike', 'spin',
  'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray', 'spread', 'spring',
  'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs', 'stamp',
  'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick',
  'still', 'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street',
  'strike', 'strong', 'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway',
  'success', 'such', 'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny',
  'sunset', 'super', 'supply', 'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey',
  'suspect', 'sustain', 'swallow', 'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim',
  'swing', 'switch', 'sword', 'symbol', 'symptom', 'syrup', 'system', 'table', 'tackle', 'tag',
  'tail', 'talent', 'talk', 'tank', 'tape', 'target', 'task', 'taste', 'tattoo', 'taxi',
  'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term', 'test', 'text',
  'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought',
  'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber',
  'time', 'tiny', 'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler',
  'toe', 'together', 'toilet', 'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool',
  'tooth', 'top', 'topic', 'topple', 'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist',
  'toward', 'tower', 'town', 'toy', 'track', 'trade', 'traffic', 'tragic', 'train', 'transfer',
  'trap', 'trash', 'travel', 'tray', 'treat', 'tree', 'trend', 'trial', 'tribe', 'trick',
  'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true', 'truly', 'trumpet', 'trust',
  'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey', 'turn', 'turtle',
  'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical', 'ugly', 'umbrella',
  'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy', 'uniform',
  'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update', 'upgrade',
  'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful',
  'useless', 'usual', 'utility', 'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van',
  'vanish', 'vapor', 'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue',
  'verb', 'verify', 'version', 'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory',
  'video', 'view', 'village', 'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual',
  'vital', 'vivid', 'vocal', 'voice', 'void', 'volcano', 'volume', 'vote', 'voyage', 'wage',
  'wagon', 'wait', 'walk', 'wall', 'walnut', 'want', 'warfare', 'warm', 'warrior', 'wash',
  'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear', 'weasel', 'weather',
  'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what', 'wheat',
  'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will',
  'win', 'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise',
  'wish', 'witness', 'wolf', 'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world',
  'worry', 'worth', 'wrap', 'wreck', 'wrestle', 'wrist', 'write', 'wrong', 'yard', 'year',
  'yellow', 'you', 'young', 'youth', 'zebra', 'zero', 'zone', 'zoo'
];


const seed = {
  grid:      document.getElementById('seedGrid'),
  copyBtn:   document.getElementById('seedCopyBtn'),
  iconCopy:  document.getElementById('seedIconCopy'),
  iconCheck: document.getElementById('seedIconCheck'),
  genBtn:    document.getElementById('seedGenerateBtn')
};

const SEED_TABLE = {
  12: { ent: 128, cs: 4 },
  15: { ent: 160, cs: 5 },
  18: { ent: 192, cs: 6 },
  21: { ent: 224, cs: 7 },
  24: { ent: 256, cs: 8 }
};

let seedWordCount = 15;
let currentSeedWords = [];

async function generateMnemonic(wordCount) {
  const { ent, cs } = SEED_TABLE[wordCount];

  const entropyBytes = new Uint8Array(ent / 8);
  crypto.getRandomValues(entropyBytes);

  const hashBuffer = await crypto.subtle.digest('SHA-256', entropyBytes);
  const hashBytes = new Uint8Array(hashBuffer);

  let entropyBits = '';
  entropyBytes.forEach(byte => entropyBits += byte.toString(2).padStart(8, '0'));

  const checksumBits = hashBytes[0].toString(2).padStart(8, '0').slice(0, cs);
  const fullBits = entropyBits + checksumBits;

  const words = [];

  for (let i = 0; i < fullBits.length; i += 11) {
    const index = parseInt(fullBits.substr(i, 11), 2);
    words.push(BIP39_WORDS[index]);
  }

  return words;
}

let seedRequestId = 0;

async function seedRun() {
  const requestId = ++seedRequestId;
  const words = await generateMnemonic(seedWordCount);

  if (requestId !== seedRequestId) return;

  currentSeedWords = words;
  seed.grid.innerHTML = '';

  currentSeedWords.forEach((word, i) => {
    const el = document.createElement('div');

    el.className = 'seed-word';
    el.setAttribute('role', 'listitem');

    const num = document.createElement('i');
    num.textContent = String(i + 1);

    const span = document.createElement('span');
    span.textContent = word;

    el.append(num, span);
    seed.grid.appendChild(el);
  });

  seed.iconCopy.hidden = false;
  seed.iconCheck.hidden = true;
  seed.copyBtn.classList.remove('is-copied');
}

document.querySelectorAll('#seedWordCountRow .chip').forEach((chip, index, chips) => {
  chip.addEventListener('click', () => activateSeedChip(chip, chips));

  chip.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const dir = event.key === 'ArrowRight' ? 1 : -1;
      const next = (index + dir + chips.length) % chips.length;
      chips[next].focus();
      activateSeedChip(chips[next], chips);
    }
  });
});

function activateSeedChip(chip, chips) {
  chips.forEach(c => c.classList.remove('active'));
  chips.forEach(c => c.setAttribute('aria-checked', 'false'));
  chip.classList.add('active');
  chip.setAttribute('aria-checked', 'true');

  seedWordCount = parseInt(chip.dataset.count, 10);
  seedRun();
}

seed.genBtn.addEventListener('click', seedRun);

seed.copyBtn.addEventListener('click', () => {
  copyText(currentSeedWords.join(' '), seed.copyBtn, seed.iconCopy, seed.iconCheck);
});

seedRun();


/* ==========================================================================
   Переключение языка и темы оформления
   ========================================================================== */

const langToggle = document.getElementById('langToggle');
const langList = document.getElementById('langList');
const themeToggle = document.getElementById('themeToggle');
const themeList = document.getElementById('themeList');

function buildLeadBody(dict) {
  return dict.about_lead_1 +
    '<code>crypto.getRandomValues</code>' +
    dict.about_lead_2 +
    '<code>Math.random()</code>' +
    dict.about_lead_3;
}

function applyLanguage(lang) {
  if (!I18N[lang]) lang = 'ru';

  const dict = I18N[lang];
  currentLang = lang;

  document.documentElement.lang = lang;
  document.title = dict.page_title;

  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;

    if (dict[key] === undefined) return;

    if (key === 'about_lead_body') {
      node.innerHTML = buildLeadBody(dict);
      return;
    }

    node.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(node => {
    const key = node.dataset.i18nAria;

    if (dict[key] !== undefined) node.setAttribute('aria-label', dict[key]);
  });

  langToggle.textContent = lang === 'ru' ? 'RU' : 'EN';
  langToggle.setAttribute('aria-label', lang === 'ru' ? 'RU — Русский' : 'EN — English');

  langList.querySelectorAll('li').forEach(li => {
    li.setAttribute('aria-selected', String(li.dataset.lang === lang));
  });

  applyTheme(currentTheme);

  renderPwStrength();
  renderPwWarning();
}

function applyTheme(theme) {
  const dict = I18N[currentLang];
  currentTheme = theme === 'light' ? 'light' : 'dark';

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.style.colorScheme = 'light';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.body.style.colorScheme = 'dark';
  }

  themeToggle.innerHTML = currentTheme === 'dark'
    ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"></path></svg>'
    : '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg>';
  themeToggle.setAttribute('aria-label', dict.theme_aria + ': ' + (currentTheme === 'dark' ? dict.theme_dark : dict.theme_light));

  themeList.querySelectorAll('li').forEach(li => {
    li.setAttribute('aria-selected', String(li.dataset.theme === currentTheme));
  });
}

const DROPDOWNS = [
  { list: langList, toggle: langToggle },
  { list: themeList, toggle: themeToggle }
];

function closeDropdowns() {
  DROPDOWNS.forEach(({ list, toggle }) => {
    list.setAttribute('hidden', '');
    toggle.setAttribute('aria-expanded', 'false');
  });
}

function openDropdown(list, toggle) {
  closeDropdowns();
  list.removeAttribute('hidden');
  toggle.setAttribute('aria-expanded', 'true');

  const first = list.querySelector('li');
  if (first) first.focus();
}

function toggleDropdown(list, toggle) {
  if (list.hasAttribute('hidden')) {
    openDropdown(list, toggle);
  } else {
    closeDropdowns();
    toggle.focus();
  }
}

DROPDOWNS.forEach(({ list, toggle }) => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(list, toggle);
  });

  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
      e.preventDefault();
      openDropdown(list, toggle);
    }
  });

  list.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  list.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      if (li.dataset.lang) applyLanguage(li.dataset.lang);
      if (li.dataset.theme) applyTheme(li.dataset.theme);

      closeDropdowns();
      toggle.focus();
    });
  });

  list.addEventListener('keydown', (e) => {
    const items = Array.from(list.querySelectorAll('li'));
    const current = items.indexOf(document.activeElement);

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      const next = (Math.max(current, 0) + dir + items.length) % items.length;
      items[next].focus();
      return;
    }

    if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      items[e.key === 'Home' ? 0 : items.length - 1].focus();
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (current >= 0) items[current].click();
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      closeDropdowns();
      toggle.focus();
      return;
    }

    if (e.key === 'Tab') {
      closeDropdowns();
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropbtn-wrap')) closeDropdowns();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDropdowns();
});

applyLanguage('ru');
applyTheme('dark');


/* ==========================================================================
   Предупреждение при входе: один раз за вкладку браузера
   ========================================================================== */

const disclaimerOverlay = document.getElementById('disclaimerOverlay');
const disclaimerBtn = document.getElementById('disclaimerBtn');

function dismissDisclaimer() {
  disclaimerOverlay.classList.add('is-hidden');

  try {
    sessionStorage.setItem('entropylab_disclaimer_seen', '1');
  } catch (err) {
  }
}

let disclaimerAlreadySeen = false;

try {
  disclaimerAlreadySeen = sessionStorage.getItem('entropylab_disclaimer_seen') === '1';
} catch (err) {
  disclaimerAlreadySeen = false;
}

if (disclaimerAlreadySeen) {
  disclaimerOverlay.classList.add('is-hidden');
} else {
  disclaimerBtn.focus();
}

disclaimerBtn.addEventListener('click', dismissDisclaimer);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !disclaimerOverlay.classList.contains('is-hidden')) {
    dismissDisclaimer();
  }
});
