const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// Ensure users file exists
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify({ users: [] }, null, 2));
}

// Helpers
function readUsers() {
    try {
        return JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
    } catch (e) {
        return { users: [] };
    }
}

function writeUsers(data) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2));
}

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ── AUTH ROUTES ──────────────────────── */

// Register
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }
    if (username.length < 2 || username.length > 20) {
        return res.status(400).json({ error: 'Username must be 2–20 characters.' });
    }
    if (password.length < 4) {
        return res.status(400).json({ error: 'Password must be at least 4 characters.' });
    }

    const data = readUsers();
    const exists = data.users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (exists) {
        return res.status(409).json({ error: 'Username already taken.' });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = {
        username,
        password_hash: hash,
        xp: 0,
        completed: [],
        created: new Date().toISOString()
    };

    data.users.push(user);
    writeUsers(data);

    res.json({ ok: true, user: { username: user.username, xp: user.xp, completed: user.completed } });
});

// Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    const data = readUsers();
    const user = data.users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }

    res.json({ ok: true, user: { username: user.username, xp: user.xp, completed: user.completed } });
});

/* ── PROGRESS ROUTES ─────────────────── */

// Save progress
app.post('/api/progress', (req, res) => {
    const { username, xp, completed } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required.' });
    }

    const data = readUsers();
    const user = data.users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }

    user.xp = xp ?? user.xp;
    user.completed = completed ?? user.completed;
    writeUsers(data);

    res.json({ ok: true });
});

// Load progress
app.get('/api/progress/:username', (req, res) => {
    const data = readUsers();
    const user = data.users.find(u => u.username.toLowerCase() === req.params.username.toLowerCase());
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ username: user.username, xp: user.xp, completed: user.completed });
});

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`⚡ Hyperzia JS server running at http://localhost:${PORT}`);
});
