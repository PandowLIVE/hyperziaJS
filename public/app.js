/* ═══════════════════════════════════════════
   BITE-SIZED JS — Application Logic
   ═══════════════════════════════════════════ */

/* ── CURRENT USER ──────────────────────── */
let currentUser = null; // { username, xp, completed }

/* ── STATE ─────────────────────────────── */
let state = { xp: 0, completed: [] };
let currentModule = null;
let currentStep = 0;
let filledBlanks = {};
let selectedBlankId = null;
let currentTab = 'home'; // 'home' or 'sandbox'
let activeCourse = 'all'; // 'all', 'js', 'ts', 'node'

/* ── DOM REFS ──────────────────────────── */
const $ = id => document.getElementById(id);
const authScreen = $('auth-screen');
const appWrapper = $('app-wrapper');
const homeScreen = $('home-screen');
const lessonScreen = $('lesson-screen');
const completeScreen = $('complete-screen');
const sandboxScreen = $('sandbox-screen');
const actionBar = $('action-bar');
const actionBtn = $('action-btn');
const modalOverlay = $('modal-overlay');
const bottomNav = $('bottom-nav');

/* ═══════════════════════════════════════════
   AUTH
   ═══════════════════════════════════════════ */
let authMode = 'login'; // 'login' or 'register'

function switchAuthTab(mode) {
    authMode = mode;
    $('tab-login').classList.toggle('active', mode === 'login');
    $('tab-register').classList.toggle('active', mode === 'register');
    $('auth-submit-btn').textContent = mode === 'login' ? 'Log In' : 'Sign Up';
    $('auth-error').textContent = '';
}

async function handleAuth(e) {
    e.preventDefault();
    const username = $('auth-username').value.trim();
    const password = $('auth-password').value;
    const errorEl = $('auth-error');
    const submitBtn = $('auth-submit-btn');

    errorEl.textContent = '';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Loading…';

    try {
        const endpoint = authMode === 'login' ? '/api/login' : '/api/register';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (!res.ok) {
            errorEl.textContent = data.error || 'Something went wrong.';
            submitBtn.disabled = false;
            submitBtn.textContent = authMode === 'login' ? 'Log In' : 'Sign Up';
            return;
        }

        // Success — enter app
        currentUser = data.user;
        state.xp = currentUser.xp;
        state.completed = currentUser.completed;
        enterApp();

    } catch (err) {
        errorEl.textContent = 'Network error. Is the server running?';
        submitBtn.disabled = false;
        submitBtn.textContent = authMode === 'login' ? 'Log In' : 'Sign Up';
    }
}

function enterApp() {
    authScreen.classList.remove('active');
    renderHome();
    initSandbox();
}

function logout() {
    currentUser = null;
    state = { xp: 0, completed: [] };
    authScreen.classList.add('active');
    $('auth-username').value = '';
    $('auth-password').value = '';
    $('auth-error').textContent = '';
    switchAuthTab('login');
}

/* ── SAVE PROGRESS TO SERVER ───────────── */
async function saveProgress() {
    if (!currentUser) return;
    try {
        await fetch('/api/progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: currentUser.username,
                xp: state.xp,
                completed: state.completed
            })
        });
    } catch (e) {
        // Silently fail — progress saves are best-effort
    }
}

/* ═══════════════════════════════════════════
   TAB SWITCHING (Learn / Sandbox)
   ═══════════════════════════════════════════ */
function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.screen === tab);
    });

    if (tab === 'home') {
        sandboxScreen.classList.remove('active');
        actionBar.style.display = 'none';
        renderHome();
    } else if (tab === 'sandbox') {
        [homeScreen, lessonScreen, completeScreen].forEach(s => s.classList.remove('active'));
        sandboxScreen.classList.add('active');
        actionBar.style.display = 'none';
        bottomNav.style.display = 'flex';
    }
}

/* ═══════════════════════════════════════════
   COURSE FILTER
   ═══════════════════════════════════════════ */
function filterCourse(cat) {
    activeCourse = cat;
    document.querySelectorAll('.course-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.cat === cat);
    });
    renderModuleList();
}

/* ═══════════════════════════════════════════
   RENDER HOME
   ═══════════════════════════════════════════ */
function renderHome() {
    showScreen('home');
    actionBar.style.display = 'none';
    bottomNav.style.display = 'flex';

    // Stats (all modules)
    const done = state.completed.length;
    const total = MODULES.length;
    $('stat-completed').textContent = `${done} / ${total}`;
    $('stat-xp').textContent = state.xp;
    $('xp-display').textContent = `${state.xp} XP`;
    $('progress-fill').style.width = `${(done / total) * 100}%`;

    // Greeting
    const hr = new Date().getHours();
    let greetWord = hr < 12 ? 'Good Morning' : hr < 18 ? 'Good Afternoon' : 'Good Evening';
    const name = currentUser ? `, ${currentUser.username}` : '';
    $('greeting-text').textContent = `${greetWord}${name} ⚡`;

    // Restore active tab
    document.querySelectorAll('.course-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.cat === activeCourse);
    });

    renderModuleList();
}

function renderModuleList() {
    const filtered = activeCourse === 'all'
        ? MODULES
        : MODULES.filter(m => m.category === activeCourse);

    const list = $('module-list');
    list.innerHTML = '';
    filtered.forEach((mod) => {
        const globalIdx = MODULES.indexOf(mod);
        const isDone = state.completed.includes(mod.id);
        // Lock: only within same category
        const prevInCat = MODULES.slice(0, globalIdx).filter(m => m.category === mod.category);
        const prevMod = prevInCat.length > 0 ? prevInCat[prevInCat.length - 1] : null;
        const isLocked = prevMod && !state.completed.includes(prevMod.id) && !isDone;
        const card = document.createElement('div');
        card.className = `module-card${isDone ? ' completed' : ''}${isLocked ? ' locked' : ''}`;
        card.innerHTML = `
      <div class="module-icon">${mod.icon}</div>
      <div class="module-info">
        <h3>${mod.title}</h3>
        <p>${mod.desc}</p>
      </div>
      <span class="module-badge ${isDone ? 'done' : isLocked ? 'lock' : 'xp'}">
        ${isDone ? '✓ Done' : isLocked ? '🔒' : `+${mod.xp} XP`}
      </span>
    `;
        if (!isLocked) card.addEventListener('click', () => startModule(mod));
        list.appendChild(card);
    });
}

/* ── SCREEN MANAGEMENT ─────────────────── */
function showScreen(name) {
    [homeScreen, lessonScreen, completeScreen, sandboxScreen].forEach(s => s.classList.remove('active'));
    if (name === 'home') homeScreen.classList.add('active');
    else if (name === 'lesson') lessonScreen.classList.add('active');
    else if (name === 'complete') completeScreen.classList.add('active');
    else if (name === 'sandbox') sandboxScreen.classList.add('active');
    window.scrollTo(0, 0);
}

/* ── START MODULE ──────────────────────── */
function startModule(mod) {
    currentModule = mod;
    currentStep = 0;
    filledBlanks = {};
    selectedBlankId = null;
    $('lesson-title').textContent = mod.title;
    bottomNav.style.display = 'none';
    renderStep();
    showScreen('lesson');
}

/* ── RENDER STEP ───────────────────────── */
function renderStep() {
    const steps = currentModule.steps;
    const step = steps[currentStep];

    $('step-indicator').textContent = `${currentStep + 1} / ${steps.length}`;

    const dotsEl = $('step-dots');
    dotsEl.innerHTML = '';
    steps.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `step-dot${i < currentStep ? ' completed' : i === currentStep ? ' current' : ''}`;
        dotsEl.appendChild(dot);
    });

    const content = $('lesson-content');
    content.innerHTML = '';
    filledBlanks = {};
    selectedBlankId = null;

    if (step.type === 'theory') {
        renderTheory(content, step);
        actionBar.style.display = 'block';
        actionBtn.textContent = 'Continue';
        actionBtn.disabled = false;
        actionBtn.className = 'btn-primary success';
        actionBtn.onclick = nextStep;
    } else if (step.type === 'quiz') {
        renderQuiz(content, step);
        actionBar.style.display = 'block';
        actionBtn.textContent = 'Check Answer';
        actionBtn.disabled = true;
        actionBtn.className = 'btn-primary';
        actionBtn.onclick = () => checkAnswer(step);
    }
}

/* ── THEORY RENDERING ──────────────────── */
function renderTheory(container, step) {
    const card = document.createElement('div');
    card.className = 'theory-card';
    card.innerHTML = `<h3>📖 ${step.title}</h3><p>${step.body}</p>`;
    container.appendChild(card);
}

/* ── QUIZ RENDERING ────────────────────── */
function renderQuiz(container, step) {
    const titleEl = document.createElement('div');
    titleEl.className = 'theory-card';
    titleEl.innerHTML = `<h3>🧩 ${step.title}</h3><p>Tap a blank, then tap an option to fill it in.</p>`;
    container.appendChild(titleEl);

    const codeEl = document.createElement('div');
    codeEl.className = 'code-block';
    codeEl.id = 'quiz-code';
    let lineNum = 1;
    let html = `<span class="line-num">${String(lineNum).padStart(2, ' ')}</span>`;

    step.code.forEach(part => {
        if (part.text === '\n' || part.text === '\n\n') {
            const breaks = part.text === '\n\n' ? 2 : 1;
            for (let b = 0; b < breaks; b++) {
                lineNum++;
                html += `\n<span class="line-num">${String(lineNum).padStart(2, ' ')}</span>`;
            }
        } else if (part.blank) {
            html += `<span class="blank-slot" data-id="${part.id}" data-answer="${part.answer}" id="blank-${part.id}">${'_'.repeat(Math.max(part.answer.length, 4))}</span>`;
        } else if (part.type === 'comment') {
            html += `<span class="cmt">${escHTML(part.text)}</span>`;
        } else {
            html += syntaxHighlight(part.text);
        }
    });
    codeEl.innerHTML = html;
    container.appendChild(codeEl);

    codeEl.querySelectorAll('.blank-slot').forEach(slot => {
        slot.addEventListener('click', () => selectBlank(slot.dataset.id, step));
    });

    const optLabel = document.createElement('div');
    optLabel.className = 'options-label';
    optLabel.textContent = 'Choose an option';
    container.appendChild(optLabel);

    const optGrid = document.createElement('div');
    optGrid.className = 'options-grid';
    optGrid.id = 'options-grid';

    step.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => pickOption(opt, step));
        optGrid.appendChild(btn);
    });
    container.appendChild(optGrid);

    const blanks = codeEl.querySelectorAll('.blank-slot');
    if (blanks.length > 0) selectBlank(blanks[0].dataset.id, step);
}

function selectBlank(id, step) {
    selectedBlankId = id;
    document.querySelectorAll('.blank-slot').forEach(s => {
        s.style.boxShadow = s.dataset.id === id ? `0 0 0 2px var(--accent), 0 0 12px var(--accent-glow)` : 'none';
    });
}

function pickOption(value, step) {
    if (!selectedBlankId) return;
    filledBlanks[selectedBlankId] = value;

    const slotEl = document.getElementById(`blank-${selectedBlankId}`);
    if (slotEl) {
        slotEl.textContent = value;
        slotEl.classList.add('filled');
    }

    updateOptionsUsed(step);

    const blanks = step.code.filter(p => p.blank);
    const nextEmpty = blanks.find(b => !filledBlanks[b.id]);
    if (nextEmpty) {
        selectBlank(nextEmpty.id, step);
    } else {
        selectedBlankId = null;
        document.querySelectorAll('.blank-slot').forEach(s => s.style.boxShadow = 'none');
    }

    const allFilled = blanks.every(b => filledBlanks[b.id]);
    actionBtn.disabled = !allFilled;
}

function updateOptionsUsed(step) {
    const usedValues = Object.values(filledBlanks);
    const optBtns = document.querySelectorAll('#options-grid .option-btn');
    const usedCounts = {};
    usedValues.forEach(v => { usedCounts[v] = (usedCounts[v] || 0) + 1; });

    optBtns.forEach(btn => {
        const val = btn.textContent;
        const availableCount = step.options.filter(o => o === val).length;
        const usedCount = usedCounts[val] || 0;
        btn.classList.toggle('used', usedCount >= availableCount);
        btn.classList.toggle('selected', usedValues.includes(val));
    });
}

/* ── CHECK ANSWER ──────────────────────── */
function checkAnswer(step) {
    const blanks = step.code.filter(p => p.blank);
    let allCorrect = true;

    blanks.forEach(b => {
        const slotEl = document.getElementById(`blank-${b.id}`);
        if (filledBlanks[b.id] === b.answer) {
            slotEl.classList.add('correct');
        } else {
            slotEl.classList.add('incorrect');
            allCorrect = false;
        }
    });

    showFeedbackModal(allCorrect, step);
}

/* ── FEEDBACK MODAL ────────────────────── */
function showFeedbackModal(correct, step) {
    const iconEl = $('modal-icon');
    const titleEl = $('modal-title');
    const textEl = $('modal-text');
    const btnEl = $('modal-btn');

    if (correct) {
        iconEl.className = 'icon-circle correct';
        iconEl.textContent = '✓';
        titleEl.className = 'correct-title';
        titleEl.textContent = 'Correct! 🎉';
        textEl.innerHTML = step.explanation;
        btnEl.className = 'btn-modal correct-btn';
        btnEl.textContent = 'Continue';
        btnEl.onclick = () => { hideModal(); nextStep(); };
    } else {
        iconEl.className = 'icon-circle incorrect';
        iconEl.textContent = '✗';
        titleEl.className = 'incorrect-title';
        titleEl.textContent = 'Not quite…';
        textEl.innerHTML = step.explanation;
        btnEl.className = 'btn-modal incorrect-btn';
        btnEl.textContent = 'Try Again';
        btnEl.onclick = () => { hideModal(); renderStep(); };
    }

    modalOverlay.classList.add('active');
}

function hideModal() {
    modalOverlay.classList.remove('active');
}

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) hideModal();
});

/* ── STEP NAVIGATION ───────────────────── */
function nextStep() {
    currentStep++;
    if (currentStep >= currentModule.steps.length) {
        completeModule();
    } else {
        renderStep();
        window.scrollTo(0, 0);
    }
}

/* ── COMPLETE MODULE ───────────────────── */
function completeModule() {
    if (!state.completed.includes(currentModule.id)) {
        state.completed.push(currentModule.id);
        state.xp += currentModule.xp;
        saveProgress(); // Save to server
    }

    actionBar.style.display = 'none';
    $('complete-title').textContent = `${currentModule.title} Complete!`;
    $('complete-xp').innerHTML = `⭐ +${currentModule.xp} XP`;
    $('xp-display').textContent = `${state.xp} XP`;

    const remaining = MODULES.length - state.completed.length;
    $('complete-msg').textContent = remaining > 0
        ? `Great work! You have ${remaining} module${remaining > 1 ? 's' : ''} left to conquer.`
        : `You've completed all modules! You're a JavaScript rockstar! 🎸`;

    showScreen('complete');
    launchConfetti();
}

/* ── CONFETTI ──────────────────────────── */
function launchConfetti() {
    const container = $('confetti-container');
    container.innerHTML = '';
    const colors = ['#6c5ce7', '#a29bfe', '#00cec9', '#feca57', '#ff6b6b', '#fd79a8', '#0984e3'];
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 1.5 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (6 + Math.random() * 8) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        container.appendChild(piece);
    }
    setTimeout(() => { container.innerHTML = ''; }, 4000);
}

/* ── SYNTAX HIGHLIGHTING ───────────────── */
function syntaxHighlight(text) {
    return text
        .replace(/\b(const|let|var|function|return|if|else|for|while|new|class|import|export|from|default|async|await|try|catch|finally|throw|typeof|switch|case|break|interface|type|enum|extends|implements|readonly|require)\b/g, '<span class="kw">$1</span>')
        .replace(/\b(console\.log|Math\.\w+|document\.\w+|\.map|\.filter|\.find|\.forEach|\.reduce|\.then|\.catch|\.finally|fetch|setTimeout|Promise)\b/g, '<span class="fn">$1</span>')
        .replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span class="str">$&</span>')
        .replace(/\b(\d+)\b/g, '<span class="num">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="cmt">$1</span>');
}

function escHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ── NAV ───────────────────────────────── */
$('back-btn').addEventListener('click', () => {
    actionBar.style.display = 'none';
    bottomNav.style.display = 'flex';
    renderHome();
});

$('complete-home-btn').addEventListener('click', () => {
    bottomNav.style.display = 'flex';
    renderHome();
});

$('logout-btn').addEventListener('click', logout);

/* ── INIT (show auth screen) ───────────── */
// App starts on the auth screen — no auto-login
