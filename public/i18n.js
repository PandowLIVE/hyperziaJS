const i18n = {
    en: {
        app_title: "Hyperzia JS",
        app_subtitle: "Learn JavaScript, one bite at a time",
        tab_login: "Log In",
        tab_signup: "Sign Up",
        username: "Username",
        username_ph: "Enter username",
        password: "Password",
        password_ph: "Enter password",
        btn_login: "Log In",
        btn_signup: "Sign Up",
        header_title: "Hyperzia JS",
        logout: "Log out",
        greeting_morning: "Good Morning",
        greeting_afternoon: "Good Afternoon",
        greeting_evening: "Good Evening",
        greeting_sub: "Tap a module to begin a lesson",
        stat_completed: "Completed",
        stat_xp: "Total XP",
        section_modules: "Modules",
        tab_all: "All",
        tab_js: "⚡ JavaScript",
        tab_ts: "🔷 TypeScript",
        tab_node: "🟢 Node.js",
        tab_py: "🐍 Python",
        tab_bash: "🐚 Bash",
        module_done: "✓ Done",
        module_lock: "🔒",
        module_xp: "XP",
        lesson_back: "Go back",
        sandbox_title: "🧪 Sandbox",
        sandbox_sub: "Write and run code freely",
        sandbox_ph: "Type your JavaScript here...",
        btn_run: "▶ Run",
        btn_clear: "✕ Clear",
        console_label: "Console Output",
        console_ph: "Output will appear here…",
        btn_check: "Check Answer",
        btn_continue: "Continue",
        nav_learn: "Learn",
        nav_sandbox: "Sandbox",
        modal_correct: "Correct! 🎉",
        modal_incorrect: "Not quite…",
        modal_try_again: "Try Again",
        complete_title: "Module Complete!",
        complete_msg_more: "Great work! You have {n} module(s) left to conquer.",
        complete_msg_all: "You've completed all modules! You're a JavaScript rockstar! 🎸",
        complete_back: "Back to Modules",
        auth_error: "Something went wrong.",
        auth_network: "Network error. Is the server running?",
        auth_loading: "Loading…",
        choose_option: "Choose an option"
    },
    fr: {
        app_title: "Hyperzia JS",
        app_subtitle: "Apprenez JavaScript, une bouchée à la fois",
        tab_login: "Connexion",
        tab_signup: "S'inscrire",
        username: "Nom d'utilisateur",
        username_ph: "Entrez votre nom d'utilisateur",
        password: "Mot de passe",
        password_ph: "Entrez votre mot de passe",
        btn_login: "Se connecter",
        btn_signup: "S'inscrire",
        header_title: "Hyperzia JS",
        logout: "Se déconnecter",
        greeting_morning: "Bonjour",
        greeting_afternoon: "Bon après-midi",
        greeting_evening: "Bonsoir",
        greeting_sub: "Appuyez sur un module pour commencer",
        stat_completed: "Terminé",
        stat_xp: "XP Total",
        section_modules: "Modules",
        tab_all: "Tout",
        tab_js: "⚡ JavaScript",
        tab_ts: "🔷 TypeScript",
        tab_node: "🟢 Node.js",
        tab_py: "🐍 Python",
        tab_bash: "🐚 Bash",
        module_done: "✓ Fait",
        module_lock: "🔒",
        module_xp: "XP",
        lesson_back: "Retour",
        sandbox_title: "🧪 Bac à sable",
        sandbox_sub: "Écrivez et testez du code librement",
        sandbox_ph: "Tapez votre JavaScript ici...",
        btn_run: "▶ Exécuter",
        btn_clear: "✕ Effacer",
        console_label: "Sortie Console",
        console_ph: "La sortie apparaîtra ici…",
        btn_check: "Vérifier la réponse",
        btn_continue: "Continuer",
        nav_learn: "Apprendre",
        nav_sandbox: "Bac à sable",
        modal_correct: "Correct ! 🎉",
        modal_incorrect: "Pas tout à fait…",
        modal_try_again: "Réessayer",
        complete_title: "Module terminé !",
        complete_msg_more: "Bon travail ! Il vous reste {n} module(s) à conquérir.",
        complete_msg_all: "Vous avez terminé tous les modules ! Vous êtes une rockstar JavaScript ! 🎸",
        complete_back: "Retour aux Modules",
        auth_error: "Une erreur est survenue.",
        auth_network: "Erreur réseau. Le serveur est-il allumé ?",
        auth_loading: "Chargement…",
        choose_option: "Choisissez une option"
    }
};

let currentLang = localStorage.getItem('hyperzia_lang') || 'en';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('hyperzia_lang', lang);
    applyTranslations();
}

function t(key) {
    return i18n[currentLang][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = t(key);
        } else {
            el.textContent = t(key);
        }
    });

    document.documentElement.lang = currentLang;
    
    const langSelects = document.querySelectorAll('.lang-select');
    langSelects.forEach(sel => sel.value = currentLang);
    
    // dynamically trigger renders if needed
    if (typeof updateDynamicTranslation === 'function') {
        updateDynamicTranslation();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});
