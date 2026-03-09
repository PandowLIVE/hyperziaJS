/* ═══════════════════════════════════════════
   SANDBOX — JS & TypeScript Code Editor
   ═══════════════════════════════════════════ */

let sandboxLang = 'javascript'; // 'javascript', 'typescript', or 'python'
let pyodideInstance = null;

const STARTER_CODE = {
  javascript: `// 🧪 JavaScript Sandbox
// Write any JS code and tap "Run" to see output.

const greeting = "Hello, World!";
console.log(greeting);

// Try some math
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

// Arrow functions
const double = n => n * 2;
console.log("Doubled:", nums.map(double));`,

  typescript: `// 🔷 TypeScript Sandbox
// Write TS code — it compiles to JS before running.

interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 25 };
console.log(user.name + " is " + user.age + " years old");

// Generics
function identity<T>(val: T): T {
  return val;
}
console.log(identity(42));
console.log(identity("hello"));

// Enums
enum Color { Red, Green, Blue }
console.log("Blue =", Color.Blue);`,

  python: `# 🐍 Python Sandbox
# Write Python code and click "Run" (uses Pyodide)

print("Hello, Python!")

# Calculate something
nums = [1, 2, 3, 4, 5]
total = sum(nums)
print(f"Sum: {total}")

# Functions
def double(n):
    return n * 2

print("Doubled:", list(map(double, nums)))`,

  bash: `# 🐚 Bash Sandbox
# Type commands and click "Run" (Simulated)

echo "Hello from Bash!"

# Navigation
pwd
ls -l

# Variables
NAME="Hyperzia"
echo "Welcome to $NAME"`
};

function initSandbox() {
  const editor = document.getElementById('sandbox-editor');
  const output = document.getElementById('sandbox-output');
  const runBtn = document.getElementById('sandbox-run');
  const clearBtn = document.getElementById('sandbox-clear');

  if (!editor || !runBtn) return;

  // Set default code
  if (!editor.value) {
    editor.value = STARTER_CODE.javascript;
  }

  runBtn.addEventListener('click', () => runCode(editor, output));
  clearBtn.addEventListener('click', () => {
    output.innerHTML = '<span class="sandbox-placeholder">Output will appear here…</span>';
  });

  // Tab key support
  editor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 2;
    }
  });

  // Language tabs
  document.querySelectorAll('.sandbox-lang-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.dataset.lang;
      switchSandboxLang(lang);
    });
  });
}

function switchSandboxLang(lang) {
  sandboxLang = lang;
  document.querySelectorAll('.sandbox-lang-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.lang === lang);
  });
  const editor = document.getElementById('sandbox-editor');
  if (editor) {
    editor.value = STARTER_CODE[lang] || STARTER_CODE.javascript;
    if (lang === 'python') {
      editor.placeholder = "Write Python code here...";
    } else if (lang === 'typescript') {
      editor.placeholder = "Write TypeScript code here...";
    } else if (lang === 'bash') {
      editor.placeholder = "Type Bash commands here...";
    } else {
      editor.placeholder = typeof t === 'function' ? t('sandbox_ph') : "Type your JavaScript here...";
    }
  }
  const output = document.getElementById('sandbox-output');
  if (output) {
    output.innerHTML = '<span class="sandbox-placeholder">Output will appear here…</span>';
  }
}

function runCode(editor, outputEl) {
  const code = editor.value;
  outputEl.innerHTML = '';

  if (sandboxLang === 'typescript') {
    runTypeScript(code, outputEl);
  } else if (sandboxLang === 'python') {
    runPython(code, outputEl);
  } else if (sandboxLang === 'bash') {
    runBash(code, outputEl);
  } else {
    runJavaScript(code, outputEl);
  }
}

/* ── Python Runner ─────────────────────── */
async function runPython(code, outputEl) {
  if (!pyodideInstance) {
    displayOutput(outputEl, [{ type: 'log', text: '📥 Loading Python engine (Pyodide)...' }]);
    try {
      pyodideInstance = await loadPyodide();
      displayOutput(outputEl, [{ type: 'log', text: '✅ Python ready!' }]);
    } catch (err) {
      displayOutput(outputEl, [{ type: 'error', text: 'Failed to load Pyodide: ' + err.message }]);
      return;
    }
  }

  const logs = [];
  pyodideInstance.setStdout({
    batched: (str) => logs.push({ type: 'log', text: str.trim() })
  });
  pyodideInstance.setStderr({
    batched: (str) => logs.push({ type: 'error', text: str.trim() })
  });

  try {
    await pyodideInstance.runPythonAsync(code);
    displayOutput(outputEl, logs);
  } catch (err) {
    logs.push({ type: 'error', text: err.toString() });
    displayOutput(outputEl, logs);
  }
}

/* ── Bash Runner (Mock) ────────────────── */
function runBash(code, outputEl) {
  const lines = code.split('\n');
  const logs = [];
  const vars = { PWD: '/home/user', NAME: 'User' };
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    // Direct variable assignment
    if (/^\w+=/.test(trimmed)) {
      const [key, ...val] = trimmed.split('=');
      vars[key] = val.join('=').replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
      return;
    }

    const replaceVars = (str) => str.replace(/\$(\w+)/g, (_, key) => vars[key] || '');

    if (trimmed.startsWith('echo ')) {
      logs.push({ type: 'log', text: replaceVars(trimmed.substring(5).replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1')) });
    } else if (trimmed === 'pwd') {
      logs.push({ type: 'log', text: vars.PWD });
    } else if (trimmed.startsWith('ls')) {
      logs.push({ type: 'log', text: 'total 3\n-rw-r--r--  1 user  group    42 Mar  9 09:42 README.md\ndrwxr-xr-x  2 user  group    64 Mar  9 09:42 src\n-rwxr-xr-x  1 user  group  1024 Mar  9 09:42 main.sh' });
    } else if (trimmed.startsWith('mkdir ') || trimmed.startsWith('touch ') || trimmed.startsWith('rm ')) {
      logs.push({ type: 'log', text: `› ${trimmed.split(' ')[0]}: success` });
    } else {
      logs.push({ type: 'warn', text: `bash: ${trimmed.split(' ')[0]}: command not found (Simulation)` });
    }
  });

  displayOutput(outputEl, logs);
}

/* ── JavaScript Runner ─────────────────── */
function runJavaScript(code, outputEl) {
  executeInIframe(code, outputEl);
}

/* ── TypeScript Runner ─────────────────── */
function runTypeScript(code, outputEl) {
  let jsCode;
  try {
    jsCode = transpileTS(code);
  } catch (err) {
    displayOutput(outputEl, [{ type: 'error', text: 'TS Compile Error: ' + err.message }]);
    return;
  }
  executeInIframe(jsCode, outputEl);
}

function transpileTS(ts) {
  // Process line by line for safer handling
  const lines = ts.split('\n');
  const output = [];
  let insideInterface = false;
  let insideType = false;
  let braceDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();

    // Skip single-line interface/type declarations
    if (/^(export\s+)?(interface|type)\s+\w+/.test(trimmed)) {
      // Check if it's a single-line type alias (no opening brace or has closing on same line)
      if (/^(export\s+)?type\s+\w+\s*=\s*[^{]*$/.test(trimmed) || /^(export\s+)?type\s+\w+\s*=\s*.*;\s*$/.test(trimmed)) {
        // Single-line type alias — skip it
        continue;
      }
      if (trimmed.includes('{') && trimmed.includes('}')) {
        // Single-line interface — skip it
        continue;
      }
      if (trimmed.includes('{')) {
        // Start of multi-line interface/type
        insideInterface = true;
        braceDepth = 1;
        continue;
      }
      if (!trimmed.includes('{') && !trimmed.includes('=')) {
        // interface Foo\n{  — next line has brace
        insideInterface = true;
        braceDepth = 0;
        continue;
      }
    }

    // Track multi-line interface/type blocks
    if (insideInterface) {
      for (const ch of line) {
        if (ch === '{') braceDepth++;
        if (ch === '}') braceDepth--;
      }
      if (braceDepth <= 0) {
        insideInterface = false;
      }
      continue;
    }

    // Convert enum to const object
    const enumMatch = trimmed.match(/^(export\s+)?enum\s+(\w+)\s*\{(.*)\}?\s*$/);
    if (enumMatch || /^(export\s+)?enum\s+(\w+)\s*\{/.test(trimmed)) {
      // Collect full enum body
      let enumName = '';
      let enumBody = '';
      const startMatch = trimmed.match(/^(export\s+)?enum\s+(\w+)\s*\{(.*)$/);
      if (startMatch) {
        enumName = startMatch[2];
        enumBody = startMatch[3];
        if (!enumBody.includes('}')) {
          // Multi-line enum
          for (let j = i + 1; j < lines.length; j++) {
            enumBody += ' ' + lines[j].trim();
            if (lines[j].includes('}')) {
              i = j;
              break;
            }
          }
        }
      }
      // Remove trailing }
      enumBody = enumBody.replace(/\}\s*$/, '').trim();
      // Parse members
      const members = enumBody.split(',').map(m => m.trim()).filter(Boolean);
      let autoVal = 0;
      const entries = members.map(m => {
        const parts = m.split('=').map(s => s.trim());
        const key = parts[0];
        if (parts.length > 1) {
          const val = parts[1].replace(/,\s*$/, '');
          const numVal = Number(val);
          if (!isNaN(numVal)) {
            autoVal = numVal + 1;
            return `  ${key}: ${numVal}`;
          }
          return `  ${key}: ${val}`;
        }
        return `  ${key}: ${autoVal++}`;
      });
      const indent = line.match(/^(\s*)/)[1];
      output.push(`${indent}const ${enumName} = {\n${entries.join(',\n')}\n${indent}};`);
      continue;
    }

    // Remove type annotations from the line
    line = stripTypeAnnotations(line);

    output.push(line);
  }

  return output.join('\n');
}

function stripTypeAnnotations(line) {
  // Remove 'as Type' casts
  line = line.replace(/\s+as\s+\w+(\[\])?/g, '');

  // Remove access modifiers
  line = line.replace(/\b(public|private|protected|readonly)\s+/g, '');

  // Remove generic type params from function calls and definitions: func<Type>(
  // Match <...> followed by ( or preceded by function name
  line = line.replace(/(<[^>]*>)\s*(?=\()/g, '');
  // Match function name<...>(
  line = line.replace(/(\w+)\s*<[^>]*>/g, '$1');

  // Remove return type annotations: ): Type {  or ): Type =>
  line = line.replace(/\):\s*[A-Za-z_]\w*(\[\])?(\s*\|?\s*[A-Za-z_]\w*(\[\])?)*\s*(\{|=>|$)/g, ') $4');

  // Remove parameter type annotations: (param: Type)
  // Handle (a: string, b: number) patterns
  line = line.replace(/(\w+)\??:\s*[A-Za-z_]\w*(\[\])?(\s*\|\s*[A-Za-z_]\w*(\[\])?)*(\s*[,\)=])/g, '$1$5');

  // Remove variable type annotations: let x: Type =  or const x: Type =
  line = line.replace(/((?:let|const|var)\s+\w+)\s*:\s*[A-Za-z_]\w*(\[\])?(\s*\|\s*[A-Za-z_]\w*(\[\])?)*(\s*[=;])/g, '$1$5');

  // Remove standalone type annotations after property names: { name: string; }
  // Be careful not to remove object literal values
  // Only strip if it looks like a type declaration (followed by ; or just whitespace)
  line = line.replace(/(\w+)\??:\s*(string|number|boolean|any|void|never|unknown|object|null|undefined)(\[\])?(\s*[;\}])/g, '$1$4');

  // Remove 'implements X' from class declarations
  line = line.replace(/\s+implements\s+\w+(\s*,\s*\w+)*/g, '');

  return line;
}

/* ── Shared iframe executor ────────────── */
function executeInIframe(code, outputEl) {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.sandbox = 'allow-scripts';
  document.body.appendChild(iframe);

  const wrappedCode = `
    <script>
      const __logs = [];
      console.log = function(...args) {
        const line = args.map(a => {
          if (a === null) return 'null';
          if (a === undefined) return 'undefined';
          if (typeof a === 'object') {
            try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); }
          }
          return String(a);
        }).join(' ');
        __logs.push({ type: 'log', text: line });
      };
      console.error = function(...args) {
        __logs.push({ type: 'error', text: args.map(String).join(' ') });
      };
      console.warn = function(...args) {
        __logs.push({ type: 'warn', text: args.map(String).join(' ') });
      };
      console.table = function(data) {
        __logs.push({ type: 'log', text: JSON.stringify(data, null, 2) });
      };

      try {
        ${code}
      } catch(err) {
        __logs.push({ type: 'error', text: err.toString() });
      }

      parent.postMessage({ type: 'sandbox-result', logs: __logs }, '*');
    <\/script>
  `;

  const handler = (event) => {
    if (event.data && event.data.type === 'sandbox-result') {
      window.removeEventListener('message', handler);
      displayOutput(outputEl, event.data.logs);
      iframe.remove();
    }
  };
  window.addEventListener('message', handler);
  iframe.srcdoc = wrappedCode;

  setTimeout(() => {
    window.removeEventListener('message', handler);
    if (document.body.contains(iframe)) {
      iframe.remove();
      if (outputEl.innerHTML === '') {
        displayOutput(outputEl, [{ type: 'warn', text: '⏱ Execution timed out (5s limit).' }]);
      }
    }
  }, 5000);
}

function displayOutput(outputEl, logs) {
  if (logs.length === 0) {
    outputEl.innerHTML = '<span class="sandbox-line log">✓ Code ran successfully (no output)</span>';
    return;
  }

  outputEl.innerHTML = logs.map(l => {
    const escaped = l.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<div class="sandbox-line ${l.type}">${l.type === 'error' ? '✗ ' : l.type === 'warn' ? '⚠ ' : '› '}${escaped}</div>`;
  }).join('');

  outputEl.scrollTop = outputEl.scrollHeight;
}
