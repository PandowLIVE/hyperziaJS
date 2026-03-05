/* ═══════════════════════════════════════════
   MODULES DATA — 20 Modules across 3 courses
   ═══════════════════════════════════════════ */
const MODULES = [

    /* ──────────────────────────────────────────
       1. VARIABLES & CONSTANTS
       ────────────────────────────────────────── */
    {
        id: 'variables',
        category: 'js',
        title: 'Variables & Constants',
        desc: 'let, const, and when to use each',
        icon: '📦',
        xp: 50,
        steps: [
            {
                type: 'theory',
                title: 'Declaring Variables',
                body: 'In modern JavaScript, we use <code>let</code> for values that change and <code>const</code> for values that stay the same. The old <code>var</code> keyword is rarely used today because it lacks block scoping.'
            },
            {
                type: 'quiz',
                title: 'Fill in the blanks',
                code: [
                    { text: '// A value that will change', type: 'comment' },
                    { text: '', blank: true, answer: 'let', id: 'b1' },
                    { text: ' score = 0;', type: 'normal' },
                    { text: '\n' },
                    { text: '// A value that stays fixed', type: 'comment' },
                    { text: '', blank: true, answer: 'const', id: 'b2' },
                    { text: ' MAX_LIVES = 3;', type: 'normal' },
                ],
                options: ['var', 'let', 'const', 'define'],
                explanation: '<b>let</b> is for variables that will be reassigned. <b>const</b> is for constants — values that never change after assignment.'
            },
            {
                type: 'quiz',
                title: 'Fix the bug',
                code: [
                    { text: 'const greeting = "Hello";', type: 'normal' },
                    { text: '\n' },
                    { text: '// Oops, we need to change it!', type: 'comment' },
                    { text: '', blank: true, answer: 'let', id: 'b1' },
                    { text: ' greeting = "Hi there";', type: 'normal' },
                ],
                options: ['const', 'let', 'var', 'set'],
                explanation: 'Since we need to reassign <code>greeting</code>, the original declaration should use <b>let</b> instead of <code>const</code>. You can\'t reassign a <code>const</code>.'
            },
            {
                type: 'quiz',
                title: 'Block scoping',
                code: [
                    { text: 'if (true) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'let', id: 'b1' },
                    { text: ' x = 10;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n' },
                    { text: '// x is NOT accessible here', type: 'comment' },
                ],
                options: ['let', 'var', 'const', 'global'],
                explanation: '<b>let</b> and <b>const</b> are block-scoped — they only exist inside the <code>{ }</code> block where they\'re declared. <code>var</code> would leak out.'
            },
            {
                type: 'quiz',
                title: 'Const with objects',
                code: [
                    { text: 'const user = { name: "Jo" };', type: 'normal' },
                    { text: '\n' },
                    { text: '// This is ALLOWED:', type: 'comment' },
                    { text: 'user.', type: 'normal' },
                    { text: '', blank: true, answer: 'name', id: 'b1' },
                    { text: ' = "Zoe";', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// This would THROW:', type: 'comment' },
                    { text: '// ', type: 'comment' },
                    { text: '', blank: true, answer: 'user', id: 'b2' },
                    { text: ' = { name: "New" };', type: 'normal' },
                ],
                options: ['name', 'user', 'const', 'key'],
                explanation: '<code>const</code> prevents <b>reassignment</b> of the variable, but you can still mutate the object\'s properties. Changing <code>user.name</code> is fine; reassigning <code>user</code> itself throws.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       2. DATA TYPES
       ────────────────────────────────────────── */
    {
        id: 'data-types',
        category: 'js',
        title: 'Data Types',
        desc: 'Strings, numbers, booleans & more',
        icon: '🔤',
        xp: 60,
        steps: [
            {
                type: 'theory',
                title: 'Primitive Types',
                body: 'JavaScript has 7 primitive data types: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, and <code>bigint</code>. You can check a value\'s type using <code>typeof</code>.'
            },
            {
                type: 'quiz',
                title: 'What\'s the type?',
                code: [
                    { text: 'let name = "Alice";', type: 'normal' },
                    { text: '\n' },
                    { text: 'console.log(', type: 'normal' },
                    { text: '', blank: true, answer: 'typeof', id: 'b1' },
                    { text: ' name);', type: 'normal' },
                    { text: '\n' },
                    { text: '// Outputs: "', type: 'comment' },
                    { text: '', blank: true, answer: 'string', id: 'b2' },
                    { text: '"', type: 'comment' },
                ],
                options: ['typeof', 'typeOf', 'string', 'number', 'boolean'],
                explanation: 'The <b>typeof</b> operator returns a string indicating the type. <code>"Alice"</code> is a <b>string</b>.'
            },
            {
                type: 'quiz',
                title: 'True or false?',
                code: [
                    { text: 'let isActive = ', type: 'normal' },
                    { text: '', blank: true, answer: 'true', id: 'b1' },
                    { text: ';', type: 'normal' },
                    { text: '\n' },
                    { text: 'let count = ', type: 'normal' },
                    { text: '', blank: true, answer: '42', id: 'b2' },
                    { text: ';', type: 'normal' },
                ],
                options: ['true', '"true"', '42', '"42"', 'yes'],
                explanation: 'Booleans are <code>true</code> or <code>false</code> (no quotes). Numbers like <b>42</b> are written without quotes — with quotes they\'d be strings.'
            },
            {
                type: 'quiz',
                title: 'Null vs Undefined',
                code: [
                    { text: 'let a;', type: 'normal' },
                    { text: '\n' },
                    { text: 'console.log(a);', type: 'normal' },
                    { text: '\n' },
                    { text: '// Output: ', type: 'comment' },
                    { text: '', blank: true, answer: 'undefined', id: 'b1' },
                    { text: '\n\n' },
                    { text: 'let b = ', type: 'normal' },
                    { text: '', blank: true, answer: 'null', id: 'b2' },
                    { text: ';  // intentionally empty', type: 'normal' },
                ],
                options: ['undefined', 'null', 'NaN', 'void', 'empty'],
                explanation: 'A declared but unassigned variable is <b>undefined</b>. <b>null</b> is explicitly assigned to mean "no value on purpose."'
            },
            {
                type: 'quiz',
                title: 'Type coercion trap',
                code: [
                    { text: 'console.log(typeof ', type: 'normal' },
                    { text: '', blank: true, answer: 'NaN', id: 'b1' },
                    { text: ');', type: 'normal' },
                    { text: '\n' },
                    { text: '// Output: "', type: 'comment' },
                    { text: '', blank: true, answer: 'number', id: 'b2' },
                    { text: '"  // surprise!', type: 'comment' },
                ],
                options: ['NaN', 'null', 'number', 'undefined', 'NaN'],
                explanation: '<code>NaN</code> stands for "Not a Number" but its <code>typeof</code> is ironically <b>"number"</b>. This is one of JavaScript\'s famous quirks!'
            }
        ]
    },

    /* ──────────────────────────────────────────
       3. TEMPLATE LITERALS
       ────────────────────────────────────────── */
    {
        id: 'template-literals',
        category: 'js',
        title: 'Template Literals',
        desc: 'Backticks, interpolation & multi-line',
        icon: '✨',
        xp: 60,
        steps: [
            {
                type: 'theory',
                title: 'String Interpolation',
                body: 'Template literals use backticks (<code>`</code>) instead of quotes. They let you embed expressions inside <code>${ }</code> placeholders — no more messy string concatenation!'
            },
            {
                type: 'quiz',
                title: 'Build a greeting',
                code: [
                    { text: 'const user = "Sam";', type: 'normal' },
                    { text: '\n' },
                    { text: 'const msg = ', type: 'normal' },
                    { text: '', blank: true, answer: '`', id: 'b1' },
                    { text: 'Hello, ', type: 'normal' },
                    { text: '', blank: true, answer: '${user}', id: 'b2' },
                    { text: '!', type: 'normal' },
                    { text: '', blank: true, answer: '`', id: 'b3' },
                    { text: ';', type: 'normal' },
                ],
                options: ['`', '"', '${user}', '${name}', '+ user +'],
                explanation: 'Template literals start and end with a <b>backtick</b> (<code>`</code>). Use <b>${expression}</b> to embed variables inline.'
            },
            {
                type: 'quiz',
                title: 'Multi-line magic',
                code: [
                    { text: 'const html = `', type: 'normal' },
                    { text: '\n' },
                    { text: '  <div>', type: 'normal' },
                    { text: '\n' },
                    { text: '    <h1>', type: 'normal' },
                    { text: '', blank: true, answer: '${title}', id: 'b1' },
                    { text: '</h1>', type: 'normal' },
                    { text: '\n' },
                    { text: '  </div>', type: 'normal' },
                    { text: '\n' },
                    { text: '`;', type: 'normal' },
                ],
                options: ['${title}', '${Title}', '+ title +', '{title}'],
                explanation: 'Inside template literals, <b>${title}</b> inserts the variable. Curly braces alone <code>{title}</code> won\'t work — you need the dollar sign.'
            },
            {
                type: 'quiz',
                title: 'Expression inside ${}',
                code: [
                    { text: 'const price = 9.99;', type: 'normal' },
                    { text: '\n' },
                    { text: 'const qty = 3;', type: 'normal' },
                    { text: '\n' },
                    { text: 'const total = `Pay: $', type: 'normal' },
                    { text: '', blank: true, answer: '${', id: 'b1' },
                    { text: 'price * qty', type: 'normal' },
                    { text: '', blank: true, answer: '}', id: 'b2' },
                    { text: '`;', type: 'normal' },
                ],
                options: ['${', '}', '(', ')', '+', '"'],
                explanation: 'You can put <b>any expression</b> inside <code>${ }</code> — not just variables. <code>${price * qty}</code> computes and inserts the result directly.'
            },
            {
                type: 'quiz',
                title: 'Tagged template',
                code: [
                    { text: 'const name = "Ada";', type: 'normal' },
                    { text: '\n' },
                    { text: 'const age = 30;', type: 'normal' },
                    { text: '\n' },
                    { text: 'const bio = `', type: 'normal' },
                    { text: '', blank: true, answer: '${name}', id: 'b1' },
                    { text: ' is ', type: 'normal' },
                    { text: '', blank: true, answer: '${age}', id: 'b2' },
                    { text: ' years old`;', type: 'normal' },
                ],
                options: ['${name}', '${age}', '${Name}', '${years}', 'name'],
                explanation: 'Each <code>${ }</code> placeholder maps to a specific variable. <b>${name}</b> inserts "Ada" and <b>${age}</b> inserts 30.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       4. ARROW FUNCTIONS
       ────────────────────────────────────────── */
    {
        id: 'arrow-functions',
        category: 'js',
        title: 'Arrow Functions',
        desc: 'Concise syntax with =>',
        icon: '➡️',
        xp: 70,
        steps: [
            {
                type: 'theory',
                title: 'The Arrow Syntax',
                body: 'Arrow functions (<code>=></code>) provide a shorter way to write functions. If the function body is a single expression, you can omit the curly braces and the <code>return</code> keyword — the value is returned implicitly.'
            },
            {
                type: 'quiz',
                title: 'Convert to arrow',
                code: [
                    { text: '// Traditional', type: 'comment' },
                    { text: 'function double(n) { return n * 2; }', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// Arrow version', type: 'comment' },
                    { text: 'const double = (n) ', type: 'normal' },
                    { text: '', blank: true, answer: '=>', id: 'b1' },
                    { text: ' n ', type: 'normal' },
                    { text: '', blank: true, answer: '*', id: 'b2' },
                    { text: ' 2;', type: 'normal' },
                ],
                options: ['=>', '->', ':', '*', '+', 'return'],
                explanation: 'The <b>=></b> (fat arrow) replaces the <code>function</code> keyword. With a single expression, the return is <b>implicit</b> — no need for braces or <code>return</code>.'
            },
            {
                type: 'quiz',
                title: 'Arrow with body',
                code: [
                    { text: 'const greet = (name) => ', type: 'normal' },
                    { text: '', blank: true, answer: '{', id: 'b1' },
                    { text: '\n' },
                    { text: '  const msg = `Hi, ${name}!`;', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'return', id: 'b2' },
                    { text: ' msg;', type: 'normal' },
                    { text: '\n' },
                    { text: '', blank: true, answer: '}', id: 'b3' },
                    { text: ';', type: 'normal' },
                ],
                options: ['{', '}', 'return', 'yield', '(', ')'],
                explanation: 'When the function body has <b>multiple statements</b>, you need curly braces <code>{ }</code> and an explicit <b>return</b>.'
            },
            {
                type: 'quiz',
                title: 'No parentheses shortcut',
                code: [
                    { text: '// One parameter = no parens needed', type: 'comment' },
                    { text: 'const square = ', type: 'normal' },
                    { text: '', blank: true, answer: 'n', id: 'b1' },
                    { text: ' => n * n;', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'console.log(square(', type: 'normal' },
                    { text: '', blank: true, answer: '5', id: 'b2' },
                    { text: ')); // 25', type: 'normal' },
                ],
                options: ['n', '(n)', '5', '25', 'x'],
                explanation: 'When there\'s exactly <b>one parameter</b>, you can drop the parentheses: <code>n => n * n</code>. Calling <code>square(5)</code> returns 25.'
            },
            {
                type: 'quiz',
                title: 'Arrow in callback',
                code: [
                    { text: 'const nums = [1, 2, 3];', type: 'normal' },
                    { text: '\n' },
                    { text: 'nums.forEach(', type: 'normal' },
                    { text: '', blank: true, answer: 'n', id: 'b1' },
                    { text: ' ', type: 'normal' },
                    { text: '', blank: true, answer: '=>', id: 'b2' },
                    { text: ' console.log(n));', type: 'normal' },
                ],
                options: ['n', 'num', '=>', '->', 'function'],
                explanation: 'Arrow functions are perfect for <b>callbacks</b>. <code>n => console.log(n)</code> is much cleaner than writing a full function expression.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       5. ARRAY MAPPING
       ────────────────────────────────────────── */
    {
        id: 'array-map',
        category: 'js',
        title: 'Array Mapping',
        desc: '.map() to transform arrays',
        icon: '🗺️',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'Transforming Arrays',
                body: 'The <code>.map()</code> method creates a <b>new array</b> by calling a function on every element of the original. It doesn\'t modify the original array — it\'s a pure transformation.'
            },
            {
                type: 'quiz',
                title: 'Double every number',
                code: [
                    { text: 'const nums = [1, 2, 3, 4];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const doubled = nums.', type: 'normal' },
                    { text: '', blank: true, answer: 'map', id: 'b1' },
                    { text: '(n ', type: 'normal' },
                    { text: '', blank: true, answer: '=>', id: 'b2' },
                    { text: ' n * 2);', type: 'normal' },
                    { text: '\n' },
                    { text: '// [2, 4, 6, 8]', type: 'comment' },
                ],
                options: ['map', 'forEach', 'filter', '=>', '->', 'return'],
                explanation: '<b>.map()</b> returns a new array. Combined with an <b>arrow function</b>, it\'s the cleanest way to transform data. <code>.forEach()</code> doesn\'t return anything.'
            },
            {
                type: 'quiz',
                title: 'Extract names',
                code: [
                    { text: 'const users = [', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "Ana", age: 25 },', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "Ben", age: 30 }', type: 'normal' },
                    { text: '\n' },
                    { text: '];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const names = users.', type: 'normal' },
                    { text: '', blank: true, answer: 'map', id: 'b1' },
                    { text: '(u => u.', type: 'normal' },
                    { text: '', blank: true, answer: 'name', id: 'b2' },
                    { text: ');', type: 'normal' },
                    { text: '\n' },
                    { text: '// ["Ana", "Ben"]', type: 'comment' },
                ],
                options: ['map', 'filter', 'find', 'name', 'age', 'user'],
                explanation: '<b>.map(u => u.name)</b> pulls out just the <code>name</code> property from each object, producing a clean array of strings.'
            },
            {
                type: 'quiz',
                title: 'Map with index',
                code: [
                    { text: 'const letters = ["a", "b", "c"];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const result = letters.map((', type: 'normal' },
                    { text: '', blank: true, answer: 'letter', id: 'b1' },
                    { text: ', i) => `${i}: ${letter}`);', type: 'normal' },
                    { text: '\n' },
                    { text: '// ["0: a", "1: b", "2: c"]', type: 'comment' },
                ],
                options: ['letter', 'item', 'index', 'l', 'el'],
                explanation: '<code>.map()</code> passes each element as the first argument and the <b>index</b> as the second. Name them whatever makes sense!'
            },
            {
                type: 'quiz',
                title: 'Chaining map',
                code: [
                    { text: 'const prices = [10, 20, 30];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const withTax = prices', type: 'normal' },
                    { text: '\n' },
                    { text: '  .', type: 'normal' },
                    { text: '', blank: true, answer: 'map', id: 'b1' },
                    { text: '(p => p * 1.2)', type: 'normal' },
                    { text: '\n' },
                    { text: '  .', type: 'normal' },
                    { text: '', blank: true, answer: 'map', id: 'b2' },
                    { text: '(p => p.toFixed(2));', type: 'normal' },
                    { text: '\n' },
                    { text: '// ["12.00", "24.00", "36.00"]', type: 'comment' },
                ],
                options: ['map', 'filter', 'reduce', 'forEach'],
                explanation: 'Since <code>.map()</code> returns a new array, you can <b>chain</b> multiple <code>.map()</code> calls. First adds tax, second formats to 2 decimal places.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       6. CONDITIONALS
       ────────────────────────────────────────── */
    {
        id: 'conditionals',
        category: 'js',
        title: 'Conditionals',
        desc: 'if/else, ternary & logical operators',
        icon: '🔀',
        xp: 70,
        steps: [
            {
                type: 'theory',
                title: 'Making Decisions',
                body: 'Use <code>if</code>/<code>else</code> to branch your code based on conditions. For shorter checks, the <b>ternary operator</b> (<code>condition ? a : b</code>) is perfect. JavaScript also has <code>&&</code> (AND) and <code>||</code> (OR) for combining conditions.'
            },
            {
                type: 'quiz',
                title: 'Basic if/else',
                code: [
                    { text: 'const age = 20;', type: 'normal' },
                    { text: '\n\n' },
                    { text: '', blank: true, answer: 'if', id: 'b1' },
                    { text: ' (age >= 18) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Adult");', type: 'normal' },
                    { text: '\n' },
                    { text: '} ', type: 'normal' },
                    { text: '', blank: true, answer: 'else', id: 'b2' },
                    { text: ' {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Minor");', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['if', 'else', 'when', 'then', 'switch'],
                explanation: '<b>if</b> checks the condition — if truthy, run the first block. <b>else</b> runs when the condition is falsy.'
            },
            {
                type: 'quiz',
                title: 'Ternary operator',
                code: [
                    { text: 'const score = 85;', type: 'normal' },
                    { text: '\n' },
                    { text: 'const grade = score >= 70 ', type: 'normal' },
                    { text: '', blank: true, answer: '?', id: 'b1' },
                    { text: ' "Pass" ', type: 'normal' },
                    { text: '', blank: true, answer: ':', id: 'b2' },
                    { text: ' "Fail";', type: 'normal' },
                ],
                options: ['?', ':', '&&', '||', 'if'],
                explanation: 'The ternary operator is <code>condition <b>?</b> trueValue <b>:</b> falseValue</code>. It\'s a compact one-line if/else.'
            },
            {
                type: 'quiz',
                title: 'Strict equality',
                code: [
                    { text: 'const val = "5";', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'console.log(val == 5);   // true', type: 'normal' },
                    { text: '\n' },
                    { text: 'console.log(val ', type: 'normal' },
                    { text: '', blank: true, answer: '===', id: 'b1' },
                    { text: ' 5);  // ', type: 'normal' },
                    { text: '', blank: true, answer: 'false', id: 'b2' },
                ],
                options: ['===', '==', '!=', 'false', 'true', 'null'],
                explanation: '<b>===</b> checks both value AND type (strict). <code>"5" === 5</code> is <b>false</b> because string ≠ number. Always prefer <code>===</code>.'
            },
            {
                type: 'quiz',
                title: 'Logical AND short-circuit',
                code: [
                    { text: 'const user = { name: "Jo" };', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// Only greet if user exists', type: 'comment' },
                    { text: 'user ', type: 'normal' },
                    { text: '', blank: true, answer: '&&', id: 'b1' },
                    { text: ' console.log(user.name);', type: 'normal' },
                ],
                options: ['&&', '||', '??', '!', 'if'],
                explanation: '<b>&&</b> short-circuits: if the left side is falsy, it stops and doesn\'t evaluate the right side. Great for safe property access.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       7. OBJECTS
       ────────────────────────────────────────── */
    {
        id: 'objects',
        category: 'js',
        title: 'Objects',
        desc: 'Properties, methods & destructuring',
        icon: '🧱',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'Object Basics',
                body: 'Objects store data as <b>key-value pairs</b>. Access properties with <code>dot notation</code> (<code>obj.key</code>) or <code>bracket notation</code> (<code>obj["key"]</code>). <b>Destructuring</b> lets you unpack properties into variables in one line.'
            },
            {
                type: 'quiz',
                title: 'Create an object',
                code: [
                    { text: 'const car = ', type: 'normal' },
                    { text: '', blank: true, answer: '{', id: 'b1' },
                    { text: '\n' },
                    { text: '  brand: "Tesla",', type: 'normal' },
                    { text: '\n' },
                    { text: '  year: 2024', type: 'normal' },
                    { text: '\n' },
                    { text: '', blank: true, answer: '}', id: 'b2' },
                    { text: ';', type: 'normal' },
                ],
                options: ['{', '}', '[', ']', '(', ')'],
                explanation: 'Objects are defined with <b>curly braces</b> <code>{ }</code>. Arrays use <code>[ ]</code>, function calls use <code>( )</code>.'
            },
            {
                type: 'quiz',
                title: 'Dot vs bracket',
                code: [
                    { text: 'const user = { name: "Kai", age: 28 };', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// Dot notation', type: 'comment' },
                    { text: 'console.log(user.', type: 'normal' },
                    { text: '', blank: true, answer: 'name', id: 'b1' },
                    { text: ');', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// Dynamic key', type: 'comment' },
                    { text: 'const key = "age";', type: 'normal' },
                    { text: '\n' },
                    { text: 'console.log(user[', type: 'normal' },
                    { text: '', blank: true, answer: 'key', id: 'b2' },
                    { text: ']);', type: 'normal' },
                ],
                options: ['name', 'key', '"key"', 'age', '"name"'],
                explanation: 'Dot notation uses the literal property name. Bracket notation with a <b>variable</b> (<code>key</code>, not <code>"key"</code>) lets you access properties dynamically.'
            },
            {
                type: 'quiz',
                title: 'Destructuring',
                code: [
                    { text: 'const book = { title: "Dune", pages: 412 };', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const { ', type: 'normal' },
                    { text: '', blank: true, answer: 'title', id: 'b1' },
                    { text: ', ', type: 'normal' },
                    { text: '', blank: true, answer: 'pages', id: 'b2' },
                    { text: ' } = book;', type: 'normal' },
                    { text: '\n' },
                    { text: '// title = "Dune", pages = 412', type: 'comment' },
                ],
                options: ['title', 'pages', 'book', 'name', 'key'],
                explanation: 'Destructuring unpacks <code>{ title, pages }</code> from the object. The variable names must <b>match</b> the property names.'
            },
            {
                type: 'quiz',
                title: 'Shorthand properties',
                code: [
                    { text: 'const x = 10;', type: 'normal' },
                    { text: '\n' },
                    { text: 'const y = 20;', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// Shorthand: { x: x, y: y }', type: 'comment' },
                    { text: 'const point = { ', type: 'normal' },
                    { text: '', blank: true, answer: 'x', id: 'b1' },
                    { text: ', ', type: 'normal' },
                    { text: '', blank: true, answer: 'y', id: 'b2' },
                    { text: ' };', type: 'normal' },
                ],
                options: ['x', 'y', 'x: x', 'y: y', 'point'],
                explanation: 'When the property name matches the variable name, you can use <b>shorthand</b>: <code>{ x, y }</code> is the same as <code>{ x: x, y: y }</code>.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       8. ARRAY FILTER
       ────────────────────────────────────────── */
    {
        id: 'array-filter',
        category: 'js',
        title: 'Array Filter',
        desc: '.filter() to select elements',
        icon: '🔍',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Filtering Arrays',
                body: 'The <code>.filter()</code> method creates a new array containing only the elements that pass a <b>test function</b>. If the callback returns <code>true</code>, the element is kept; if <code>false</code>, it\'s excluded.'
            },
            {
                type: 'quiz',
                title: 'Keep even numbers',
                code: [
                    { text: 'const nums = [1, 2, 3, 4, 5, 6];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const evens = nums.', type: 'normal' },
                    { text: '', blank: true, answer: 'filter', id: 'b1' },
                    { text: '(n => n % 2 ', type: 'normal' },
                    { text: '', blank: true, answer: '===', id: 'b2' },
                    { text: ' 0);', type: 'normal' },
                    { text: '\n' },
                    { text: '// [2, 4, 6]', type: 'comment' },
                ],
                options: ['filter', 'map', 'find', '===', '!==', '=='],
                explanation: '<b>.filter()</b> keeps elements where the callback returns truthy. <code>n % 2 === 0</code> checks if a number is even.'
            },
            {
                type: 'quiz',
                title: 'Filter objects',
                code: [
                    { text: 'const users = [', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "Ana", active: true },', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "Bob", active: false },', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "Cat", active: true }', type: 'normal' },
                    { text: '\n' },
                    { text: '];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const active = users.filter(u => u.', type: 'normal' },
                    { text: '', blank: true, answer: 'active', id: 'b1' },
                    { text: ');', type: 'normal' },
                ],
                options: ['active', 'name', 'true', 'status', 'isActive'],
                explanation: 'Since <code>u.active</code> is already a boolean, you can return it directly — no need for <code>=== true</code>.'
            },
            {
                type: 'quiz',
                title: 'Chain filter + map',
                code: [
                    { text: 'const products = [', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "A", price: 5 },', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "B", price: 15 },', type: 'normal' },
                    { text: '\n' },
                    { text: '  { name: "C", price: 25 }', type: 'normal' },
                    { text: '\n' },
                    { text: '];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const expensive = products', type: 'normal' },
                    { text: '\n' },
                    { text: '  .', type: 'normal' },
                    { text: '', blank: true, answer: 'filter', id: 'b1' },
                    { text: '(p => p.price > 10)', type: 'normal' },
                    { text: '\n' },
                    { text: '  .', type: 'normal' },
                    { text: '', blank: true, answer: 'map', id: 'b2' },
                    { text: '(p => p.name);', type: 'normal' },
                    { text: '\n' },
                    { text: '// ["B", "C"]', type: 'comment' },
                ],
                options: ['filter', 'map', 'find', 'reduce', 'forEach'],
                explanation: '<b>Filter first</b>, then <b>map</b>. This pattern is extremely common: narrow down the list, then transform what remains.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       9. SPREAD & REST
       ────────────────────────────────────────── */
    {
        id: 'spread-rest',
        category: 'js',
        title: 'Spread & Rest',
        desc: 'The ... operator for arrays & objects',
        icon: '🌊',
        xp: 85,
        steps: [
            {
                type: 'theory',
                title: 'The Three Dots',
                body: 'The <code>...</code> operator has two roles: <b>spread</b> expands an array or object into individual elements, while <b>rest</b> collects multiple arguments into an array. Same syntax, opposite direction!'
            },
            {
                type: 'quiz',
                title: 'Spread into array',
                code: [
                    { text: 'const a = [1, 2];', type: 'normal' },
                    { text: '\n' },
                    { text: 'const b = [3, 4];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const merged = [', type: 'normal' },
                    { text: '', blank: true, answer: '...a', id: 'b1' },
                    { text: ', ', type: 'normal' },
                    { text: '', blank: true, answer: '...b', id: 'b2' },
                    { text: '];', type: 'normal' },
                    { text: '\n' },
                    { text: '// [1, 2, 3, 4]', type: 'comment' },
                ],
                options: ['...a', '...b', 'a', 'b', '...[a]'],
                explanation: '<b>...a</b> spreads the elements of array <code>a</code> into the new array. Without <code>...</code>, you\'d get a nested array.'
            },
            {
                type: 'quiz',
                title: 'Spread into object',
                code: [
                    { text: 'const defaults = { theme: "dark", lang: "en" };', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const settings = {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: '...defaults', id: 'b1' },
                    { text: ',', type: 'normal' },
                    { text: '\n' },
                    { text: '  lang: "fr"', type: 'normal' },
                    { text: '\n' },
                    { text: '};', type: 'normal' },
                    { text: '\n' },
                    { text: '// { theme: "dark", lang: "fr" }', type: 'comment' },
                ],
                options: ['...defaults', 'defaults', '...settings', 'Object.assign'],
                explanation: 'Spreading <code>...defaults</code> copies all properties. Later properties (like <code>lang: "fr"</code>) <b>override</b> earlier ones.'
            },
            {
                type: 'quiz',
                title: 'Rest parameters',
                code: [
                    { text: 'function sum(', type: 'normal' },
                    { text: '', blank: true, answer: '...nums', id: 'b1' },
                    { text: ') {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return nums.', type: 'normal' },
                    { text: '', blank: true, answer: 'reduce', id: 'b2' },
                    { text: '((a, b) => a + b, 0);', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n' },
                    { text: 'sum(1, 2, 3); // 6', type: 'normal' },
                ],
                options: ['...nums', 'nums', '...args', 'reduce', 'map', 'forEach'],
                explanation: '<b>...nums</b> as a parameter <b>collects</b> all arguments into an array. Then <code>.reduce()</code> sums them all up.'
            },
            {
                type: 'quiz',
                title: 'Rest in destructuring',
                code: [
                    { text: 'const [first, ', type: 'normal' },
                    { text: '', blank: true, answer: '...rest', id: 'b1' },
                    { text: '] = [1, 2, 3, 4, 5];', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// first = 1', type: 'comment' },
                    { text: '\n' },
                    { text: '// rest = [2, 3, 4, 5]', type: 'comment' },
                ],
                options: ['...rest', '...others', 'rest', '...first', '...all'],
                explanation: '<b>...rest</b> in destructuring collects the <b>remaining</b> elements. It must always be the last item in the pattern.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       10. PROMISES & ASYNC/AWAIT
       ────────────────────────────────────────── */
    {
        id: 'async-await',
        category: 'js',
        title: 'Promises & Async',
        desc: 'Async/await for asynchronous code',
        icon: '⏳',
        xp: 100,
        steps: [
            {
                type: 'theory',
                title: 'Asynchronous JavaScript',
                body: 'Promises represent values that will be available <b>in the future</b>. The <code>async</code>/<code>await</code> syntax makes asynchronous code look synchronous, making it much easier to read and write.'
            },
            {
                type: 'quiz',
                title: 'Create a promise',
                code: [
                    { text: 'const p = new ', type: 'normal' },
                    { text: '', blank: true, answer: 'Promise', id: 'b1' },
                    { text: '((resolve, reject) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  setTimeout(() => ', type: 'normal' },
                    { text: '', blank: true, answer: 'resolve', id: 'b2' },
                    { text: '("Done!"), 1000);', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['Promise', 'Async', 'resolve', 'reject', 'return'],
                explanation: '<code>new <b>Promise</b></code> takes a function with <code>resolve</code> and <code>reject</code> callbacks. Call <b>resolve</b> to fulfill the promise with a value.'
            },
            {
                type: 'quiz',
                title: 'Using .then()',
                code: [
                    { text: 'fetch("/api/data")', type: 'normal' },
                    { text: '\n' },
                    { text: '  .', type: 'normal' },
                    { text: '', blank: true, answer: 'then', id: 'b1' },
                    { text: '(res => res.json())', type: 'normal' },
                    { text: '\n' },
                    { text: '  .', type: 'normal' },
                    { text: '', blank: true, answer: 'then', id: 'b2' },
                    { text: '(data => console.log(data))', type: 'normal' },
                    { text: '\n' },
                    { text: '  .', type: 'normal' },
                    { text: '', blank: true, answer: 'catch', id: 'b3' },
                    { text: '(err => console.error(err));', type: 'normal' },
                ],
                options: ['then', 'catch', 'finally', 'await', 'resolve'],
                explanation: '<b>.then()</b> chains handlers. Each <code>.then()</code> gets the previous result. <b>.catch()</b> handles any error in the chain.'
            },
            {
                type: 'quiz',
                title: 'Async function',
                code: [
                    { text: '', blank: true, answer: 'async', id: 'b1' },
                    { text: ' function getData() {', type: 'normal' },
                    { text: '\n' },
                    { text: '  const res = ', type: 'normal' },
                    { text: '', blank: true, answer: 'await', id: 'b2' },
                    { text: ' fetch("/api");', type: 'normal' },
                    { text: '\n' },
                    { text: '  const data = await res.json();', type: 'normal' },
                    { text: '\n' },
                    { text: '  return data;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['async', 'await', 'function', 'return', 'yield'],
                explanation: '<b>async</b> marks a function as asynchronous. Inside it, <b>await</b> pauses execution until the promise resolves. No more <code>.then()</code> chains!'
            },
            {
                type: 'quiz',
                title: 'Error handling',
                code: [
                    { text: 'async function load() {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'try', id: 'b1' },
                    { text: ' {', type: 'normal' },
                    { text: '\n' },
                    { text: '    const data = await fetchData();', type: 'normal' },
                    { text: '\n' },
                    { text: '  } ', type: 'normal' },
                    { text: '', blank: true, answer: 'catch', id: 'b2' },
                    { text: ' (err) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    console.error(err);', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['try', 'catch', 'finally', 'throw', 'if'],
                explanation: 'Use <b>try/catch</b> with async/await for error handling. It\'s the same pattern as synchronous error handling — clean and familiar.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       11. DESTRUCTURING
       ────────────────────────────────────────── */
    {
        id: 'destructuring',
        category: 'js',
        title: 'Destructuring',
        desc: 'Unpack arrays & objects in one line',
        icon: '📦',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Unpacking Made Easy',
                body: '<b>Destructuring</b> lets you extract values from arrays or properties from objects into variables in a single, readable line. It\'s cleaner than manually accessing indices or keys.'
            },
            {
                type: 'quiz',
                title: 'Array destructuring',
                code: [
                    { text: 'const colors = ["red", "green", "blue"];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const [', type: 'normal' },
                    { text: '', blank: true, answer: 'first', id: 'b1' },
                    { text: ', second] = colors;', type: 'normal' },
                    { text: '\n' },
                    { text: '// first = "red"', type: 'comment' },
                ],
                options: ['first', 'colors', '0', 'red', 'item'],
                explanation: 'Array destructuring uses <b>position</b>. The first variable gets the first element, second gets the second, etc.'
            },
            {
                type: 'quiz',
                title: 'Skip elements',
                code: [
                    { text: 'const [, , ', type: 'normal' },
                    { text: '', blank: true, answer: 'third', id: 'b1' },
                    { text: '] = [10, 20, 30];', type: 'normal' },
                    { text: '\n' },
                    { text: '// third = ', type: 'comment' },
                    { text: '', blank: true, answer: '30', id: 'b2' },
                ],
                options: ['third', 'last', '30', '20', '10'],
                explanation: 'Use <b>commas</b> to skip elements. <code>[, , third]</code> skips the first two and grabs index 2.'
            },
            {
                type: 'quiz',
                title: 'Default values',
                code: [
                    { text: 'const { name, role = ', type: 'normal' },
                    { text: '', blank: true, answer: '"guest"', id: 'b1' },
                    { text: ' } = { name: "Jo" };', type: 'normal' },
                    { text: '\n' },
                    { text: '// role = "guest"', type: 'comment' },
                ],
                options: ['"guest"', '"admin"', 'undefined', 'null', '"Jo"'],
                explanation: 'Default values kick in when the property is <b>undefined</b>. Since <code>role</code> wasn\'t in the object, it falls back to <code>"guest"</code>.'
            },
            {
                type: 'quiz',
                title: 'Rename properties',
                code: [
                    { text: 'const user = { name: "Kai", age: 25 };', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const { name: ', type: 'normal' },
                    { text: '', blank: true, answer: 'userName', id: 'b1' },
                    { text: ' } = user;', type: 'normal' },
                    { text: '\n' },
                    { text: '// userName = "Kai"', type: 'comment' },
                ],
                options: ['userName', 'name', 'user', 'alias', 'key'],
                explanation: '<code>name: userName</code> extracts <code>name</code> and assigns it to a new variable called <b>userName</b>.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       12. CLASSES
       ────────────────────────────────────────── */
    {
        id: 'classes',
        category: 'js',
        title: 'Classes',
        desc: 'Constructors, methods & inheritance',
        icon: '🏗️',
        xp: 90,
        steps: [
            {
                type: 'theory',
                title: 'Object-Oriented JS',
                body: 'ES6 <b>classes</b> provide a cleaner syntax for creating objects and dealing with inheritance. A class has a <code>constructor</code> method called when you create an instance with <code>new</code>.'
            },
            {
                type: 'quiz',
                title: 'Define a class',
                code: [
                    { text: '', blank: true, answer: 'class', id: 'b1' },
                    { text: ' Animal {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'constructor', id: 'b2' },
                    { text: '(name) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    this.name = name;', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['class', 'function', 'object', 'constructor', 'init', 'create'],
                explanation: '<b>class</b> declares a class. The <b>constructor</b> runs when you call <code>new Animal("Rex")</code>.'
            },
            {
                type: 'quiz',
                title: 'Add methods',
                code: [
                    { text: 'class Dog {', type: 'normal' },
                    { text: '\n' },
                    { text: '  constructor(name) { this.name = name; }', type: 'normal' },
                    { text: '\n\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'bark', id: 'b1' },
                    { text: '() {', type: 'normal' },
                    { text: '\n' },
                    { text: '    return `${this.name} says woof!`;', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['bark', 'function bark', 'this.bark', 'Dog.bark'],
                explanation: 'Methods are defined <b>without</b> the <code>function</code> keyword inside classes. Just write <code>methodName() { }</code>.'
            },
            {
                type: 'quiz',
                title: 'Inheritance',
                code: [
                    { text: 'class Cat ', type: 'normal' },
                    { text: '', blank: true, answer: 'extends', id: 'b1' },
                    { text: ' Animal {', type: 'normal' },
                    { text: '\n' },
                    { text: '  constructor(name, color) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    ', type: 'normal' },
                    { text: '', blank: true, answer: 'super', id: 'b2' },
                    { text: '(name);', type: 'normal' },
                    { text: '\n' },
                    { text: '    this.color = color;', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['extends', 'inherits', 'from', 'super', 'this', 'parent'],
                explanation: '<b>extends</b> makes Cat inherit from Animal. <b>super()</b> calls the parent constructor.'
            },
            {
                type: 'quiz',
                title: 'Static method',
                code: [
                    { text: 'class MathHelper {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'static', id: 'b1' },
                    { text: ' add(a, b) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    return a + b;', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n' },
                    { text: 'MathHelper.add(2, 3); // 5', type: 'normal' },
                ],
                options: ['static', 'const', 'public', 'class'],
                explanation: '<b>static</b> methods are called on the class itself (<code>MathHelper.add()</code>), not on instances.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       13. ERROR HANDLING
       ────────────────────────────────────────── */
    {
        id: 'error-handling',
        category: 'js',
        title: 'Error Handling',
        desc: 'try, catch, throw & custom errors',
        icon: '🛡️',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'Catching Errors',
                body: 'Errors happen — use <code>try/catch</code> to handle them gracefully. The <code>throw</code> keyword lets you create your own errors. The <code>finally</code> block always runs, whether there was an error or not.'
            },
            {
                type: 'quiz',
                title: 'Basic try/catch',
                code: [
                    { text: '', blank: true, answer: 'try', id: 'b1' },
                    { text: ' {', type: 'normal' },
                    { text: '\n' },
                    { text: '  JSON.parse("invalid");', type: 'normal' },
                    { text: '\n' },
                    { text: '} ', type: 'normal' },
                    { text: '', blank: true, answer: 'catch', id: 'b2' },
                    { text: ' (err) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Error:", err.message);', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['try', 'catch', 'if', 'then', 'error'],
                explanation: '<b>try</b> wraps risky code. <b>catch</b> receives the error object if something goes wrong.'
            },
            {
                type: 'quiz',
                title: 'Throw your own',
                code: [
                    { text: 'function divide(a, b) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if (b === 0) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    ', type: 'normal' },
                    { text: '', blank: true, answer: 'throw', id: 'b1' },
                    { text: ' new ', type: 'normal' },
                    { text: '', blank: true, answer: 'Error', id: 'b2' },
                    { text: '("Cannot divide by zero");', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '  return a / b;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['throw', 'Error', 'return', 'reject', 'new', 'Exception'],
                explanation: '<b>throw new Error()</b> creates and throws an error. The message describes what went wrong.'
            },
            {
                type: 'quiz',
                title: 'Finally block',
                code: [
                    { text: 'try {', type: 'normal' },
                    { text: '\n' },
                    { text: '  riskyOperation();', type: 'normal' },
                    { text: '\n' },
                    { text: '} catch (e) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  handleError(e);', type: 'normal' },
                    { text: '\n' },
                    { text: '} ', type: 'normal' },
                    { text: '', blank: true, answer: 'finally', id: 'b1' },
                    { text: ' {', type: 'normal' },
                    { text: '\n' },
                    { text: '  cleanup(); // always runs', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['finally', 'always', 'then', 'done'],
                explanation: '<b>finally</b> runs no matter what — whether the try succeeded or the catch handled an error. Perfect for cleanup.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       14. CLOSURES & SCOPE
       ────────────────────────────────────────── */
    {
        id: 'closures',
        category: 'js',
        title: 'Closures & Scope',
        desc: 'Lexical scope & function closures',
        icon: '🔒',
        xp: 95,
        steps: [
            {
                type: 'theory',
                title: 'Understanding Closures',
                body: 'A <b>closure</b> is a function that remembers the variables from its outer scope, even after the outer function has finished. This is possible because of JavaScript\'s <b>lexical scoping</b> — inner functions have access to the outer function\'s variables.'
            },
            {
                type: 'quiz',
                title: 'Basic closure',
                code: [
                    { text: 'function makeCounter() {', type: 'normal' },
                    { text: '\n' },
                    { text: '  let count = 0;', type: 'normal' },
                    { text: '\n' },
                    { text: '  return function() {', type: 'normal' },
                    { text: '\n' },
                    { text: '    ', type: 'normal' },
                    { text: '', blank: true, answer: 'count', id: 'b1' },
                    { text: '++;', type: 'normal' },
                    { text: '\n' },
                    { text: '    return count;', type: 'normal' },
                    { text: '\n' },
                    { text: '  };', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n' },
                    { text: 'const counter = makeCounter();', type: 'normal' },
                    { text: '\n' },
                    { text: 'counter(); // ', type: 'normal' },
                    { text: '', blank: true, answer: '1', id: 'b2' },
                ],
                options: ['count', 'this.count', 'i', '1', '0', '2'],
                explanation: 'The inner function <b>closes over</b> the <code>count</code> variable. Each call increments the same <code>count</code>. First call returns <b>1</b>.'
            },
            {
                type: 'quiz',
                title: 'Private variables',
                code: [
                    { text: 'function createWallet(initial) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  let ', type: 'normal' },
                    { text: '', blank: true, answer: 'balance', id: 'b1' },
                    { text: ' = initial;', type: 'normal' },
                    { text: '\n' },
                    { text: '  return {', type: 'normal' },
                    { text: '\n' },
                    { text: '    spend: (amt) => balance -= amt,', type: 'normal' },
                    { text: '\n' },
                    { text: '    check: () => balance', type: 'normal' },
                    { text: '\n' },
                    { text: '  };', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['balance', 'money', 'amount', 'total'],
                explanation: '<code>balance</code> is <b>private</b> — it can\'t be accessed directly from outside. Only <code>spend</code> and <code>check</code> can touch it. This is the <b>module pattern</b>.'
            },
            {
                type: 'quiz',
                title: 'IIFE pattern',
                code: [
                    { text: 'const app = (', type: 'normal' },
                    { text: '', blank: true, answer: 'function', id: 'b1' },
                    { text: '() {', type: 'normal' },
                    { text: '\n' },
                    { text: '  let secret = 42;', type: 'normal' },
                    { text: '\n' },
                    { text: '  return { getSecret: () => secret };', type: 'normal' },
                    { text: '\n' },
                    { text: '})', type: 'normal' },
                    { text: '', blank: true, answer: '()', id: 'b2' },
                    { text: ';', type: 'normal' },
                ],
                options: ['function', 'class', '=>', '()', '[]', '{}'],
                explanation: 'An <b>IIFE</b> (Immediately Invoked Function Expression) creates a closure that runs right away. The <code>()</code> at the end invokes it instantly.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       15. STRING METHODS
       ────────────────────────────────────────── */
    {
        id: 'string-methods',
        category: 'js',
        title: 'String Methods',
        desc: 'slice, split, includes & more',
        icon: '🔤',
        xp: 70,
        steps: [
            {
                type: 'theory',
                title: 'Working with Strings',
                body: 'Strings have many built-in methods. <code>.includes()</code> checks if a string contains text, <code>.split()</code> breaks a string into an array, <code>.slice()</code> extracts a portion, and <code>.trim()</code> removes whitespace.'
            },
            {
                type: 'quiz',
                title: 'Search in strings',
                code: [
                    { text: 'const msg = "Hello, World!";', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'msg.', type: 'normal' },
                    { text: '', blank: true, answer: 'includes', id: 'b1' },
                    { text: '("World"); // true', type: 'normal' },
                    { text: '\n' },
                    { text: 'msg.', type: 'normal' },
                    { text: '', blank: true, answer: 'startsWith', id: 'b2' },
                    { text: '("Hello"); // true', type: 'normal' },
                ],
                options: ['includes', 'startsWith', 'has', 'contains', 'find'],
                explanation: '<b>.includes()</b> checks if the string contains the text anywhere. <b>.startsWith()</b> checks the beginning.'
            },
            {
                type: 'quiz',
                title: 'Split & join',
                code: [
                    { text: 'const csv = "a,b,c,d";', type: 'normal' },
                    { text: '\n' },
                    { text: 'const arr = csv.', type: 'normal' },
                    { text: '', blank: true, answer: 'split', id: 'b1' },
                    { text: '(",");', type: 'normal' },
                    { text: '\n' },
                    { text: '// ["a", "b", "c", "d"]', type: 'comment' },
                    { text: '\n\n' },
                    { text: 'arr.', type: 'normal' },
                    { text: '', blank: true, answer: 'join', id: 'b2' },
                    { text: '(" - "); // "a - b - c - d"', type: 'normal' },
                ],
                options: ['split', 'join', 'slice', 'cut', 'break', 'merge'],
                explanation: '<b>.split()</b> turns a string into an array. <b>.join()</b> does the reverse — combines an array into a string.'
            },
            {
                type: 'quiz',
                title: 'Transform case',
                code: [
                    { text: 'const name = "Alice";', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'name.', type: 'normal' },
                    { text: '', blank: true, answer: 'toUpperCase', id: 'b1' },
                    { text: '(); // "ALICE"', type: 'normal' },
                    { text: '\n' },
                    { text: 'name.', type: 'normal' },
                    { text: '', blank: true, answer: 'toLowerCase', id: 'b2' },
                    { text: '(); // "alice"', type: 'normal' },
                ],
                options: ['toUpperCase', 'toLowerCase', 'upper', 'lower', 'capitalize'],
                explanation: '<b>.toUpperCase()</b> and <b>.toLowerCase()</b> transform the entire string. They return a new string — strings are immutable.'
            },
            {
                type: 'quiz',
                title: 'Slice & replace',
                code: [
                    { text: 'const str = "JavaScript";', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'str.', type: 'normal' },
                    { text: '', blank: true, answer: 'slice', id: 'b1' },
                    { text: '(0, 4); // "Java"', type: 'normal' },
                    { text: '\n' },
                    { text: 'str.', type: 'normal' },
                    { text: '', blank: true, answer: 'replace', id: 'b2' },
                    { text: '("Java", "Type"); // "TypeScript"', type: 'normal' },
                ],
                options: ['slice', 'replace', 'substring', 'swap', 'cut', 'trim'],
                explanation: '<b>.slice(start, end)</b> extracts a portion. <b>.replace()</b> swaps the first match with new text.'
            }
        ]
    },

    /* ══════════════════════════════════════════════════
       TYPESCRIPT COURSE
       ══════════════════════════════════════════════════ */

    /* ──────────────────────────────────────────
       11. TS — TYPES & ANNOTATIONS
       ────────────────────────────────────────── */
    {
        id: 'ts-types',
        category: 'ts',
        title: 'TS: Types & Annotations',
        desc: 'string, number, boolean & type safety',
        icon: '🔷',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'What is TypeScript?',
                body: 'TypeScript is a <b>superset of JavaScript</b> that adds <code>static types</code>. You annotate variables with types using a colon (<code>: type</code>). The compiler catches type errors <b>before</b> your code runs — no more "undefined is not a function"!'
            },
            {
                type: 'quiz',
                title: 'Basic type annotations',
                code: [
                    { text: 'let name:', type: 'normal' },
                    { text: ' ', type: 'normal' },
                    { text: '', blank: true, answer: 'string', id: 'b1' },
                    { text: ' = "Alice";', type: 'normal' },
                    { text: '\n' },
                    { text: 'let age:', type: 'normal' },
                    { text: ' ', type: 'normal' },
                    { text: '', blank: true, answer: 'number', id: 'b2' },
                    { text: ' = 25;', type: 'normal' },
                    { text: '\n' },
                    { text: 'let active:', type: 'normal' },
                    { text: ' ', type: 'normal' },
                    { text: '', blank: true, answer: 'boolean', id: 'b3' },
                    { text: ' = true;', type: 'normal' },
                ],
                options: ['string', 'number', 'boolean', 'String', 'int', 'bool'],
                explanation: 'TypeScript uses <b>lowercase</b> primitives: <code>string</code>, <code>number</code>, <code>boolean</code>. Uppercase versions like <code>String</code> are JavaScript wrapper objects — avoid them.'
            },
            {
                type: 'quiz',
                title: 'Array types',
                code: [
                    { text: 'const scores: ', type: 'normal' },
                    { text: '', blank: true, answer: 'number[]', id: 'b1' },
                    { text: ' = [90, 85, 92];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const names: ', type: 'normal' },
                    { text: '', blank: true, answer: 'string[]', id: 'b2' },
                    { text: ' = ["Ana", "Ben"];', type: 'normal' },
                ],
                options: ['number[]', 'string[]', 'Array', 'number', 'string', 'any[]'],
                explanation: 'Array types use <code>type[]</code> syntax. <code>number[]</code> means "an array of numbers". You can also write <code>Array&lt;number&gt;</code>.'
            },
            {
                type: 'quiz',
                title: 'Function return types',
                code: [
                    { text: 'function add(a: number, b: number)', type: 'normal' },
                    { text: '', blank: true, answer: ':', id: 'b1' },
                    { text: ' ', type: 'normal' },
                    { text: '', blank: true, answer: 'number', id: 'b2' },
                    { text: ' {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return a + b;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: [':', 'number', '=>', 'returns', 'void', 'any'],
                explanation: 'The return type comes after the parameters with a <b>colon</b>. <code>: number</code> means this function returns a number.'
            },
            {
                type: 'quiz',
                title: 'The any escape hatch',
                code: [
                    { text: '// Avoid this — it disables type checking', type: 'comment' },
                    { text: 'let value: ', type: 'normal' },
                    { text: '', blank: true, answer: 'any', id: 'b1' },
                    { text: ' = "hello";', type: 'normal' },
                    { text: '\n' },
                    { text: 'value = 42;  // no error!', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// Better: use unknown', type: 'comment' },
                    { text: 'let safe: ', type: 'normal' },
                    { text: '', blank: true, answer: 'unknown', id: 'b2' },
                    { text: ' = "hello";', type: 'normal' },
                ],
                options: ['any', 'unknown', 'never', 'void', 'object'],
                explanation: '<code>any</code> opts out of type checking entirely. <b>unknown</b> is safer — you must check the type before using it.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       12. TS — INTERFACES
       ────────────────────────────────────────── */
    {
        id: 'ts-interfaces',
        category: 'ts',
        title: 'TS: Interfaces',
        desc: 'Define object shapes with interface',
        icon: '📐',
        xp: 85,
        steps: [
            {
                type: 'theory',
                title: 'Shaping Objects',
                body: 'Interfaces define the <b>shape</b> of an object — what properties it has and their types. Use <code>interface</code> to create reusable type definitions. Add <code>?</code> after a property name to make it optional.'
            },
            {
                type: 'quiz',
                title: 'Define an interface',
                code: [
                    { text: '', blank: true, answer: 'interface', id: 'b1' },
                    { text: ' User {', type: 'normal' },
                    { text: '\n' },
                    { text: '  name: string;', type: 'normal' },
                    { text: '\n' },
                    { text: '  age: ', type: 'normal' },
                    { text: '', blank: true, answer: 'number', id: 'b2' },
                    { text: ';', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['interface', 'type', 'class', 'number', 'string', 'int'],
                explanation: '<b>interface</b> defines a contract for objects. Every <code>User</code> must have a <code>name: string</code> and <code>age: number</code>.'
            },
            {
                type: 'quiz',
                title: 'Using an interface',
                code: [
                    { text: 'interface Product {', type: 'normal' },
                    { text: '\n' },
                    { text: '  name: string;', type: 'normal' },
                    { text: '\n' },
                    { text: '  price: number;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const item', type: 'normal' },
                    { text: '', blank: true, answer: ':', id: 'b1' },
                    { text: ' ', type: 'normal' },
                    { text: '', blank: true, answer: 'Product', id: 'b2' },
                    { text: ' = {', type: 'normal' },
                    { text: '\n' },
                    { text: '  name: "Book", price: 12', type: 'normal' },
                    { text: '\n' },
                    { text: '};', type: 'normal' },
                ],
                options: [':', 'Product', 'product', 'as', 'typeof', 'new'],
                explanation: 'Type the variable with <code>: Product</code>. TypeScript will error if the object doesn\'t match the interface\'s shape.'
            },
            {
                type: 'quiz',
                title: 'Optional properties',
                code: [
                    { text: 'interface Config {', type: 'normal' },
                    { text: '\n' },
                    { text: '  host: string;', type: 'normal' },
                    { text: '\n' },
                    { text: '  port', type: 'normal' },
                    { text: '', blank: true, answer: '?', id: 'b1' },
                    { text: ': number;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// port is optional here', type: 'comment' },
                    { text: 'const cfg: Config = { host: "localhost" };', type: 'normal' },
                ],
                options: ['?', '!', '|', '&', '*'],
                explanation: 'The <b>?</b> after <code>port</code> makes it optional. The object only needs <code>host</code> to satisfy the interface.'
            },
            {
                type: 'quiz',
                title: 'Extending interfaces',
                code: [
                    { text: 'interface Animal {', type: 'normal' },
                    { text: '\n' },
                    { text: '  name: string;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'interface Dog ', type: 'normal' },
                    { text: '', blank: true, answer: 'extends', id: 'b1' },
                    { text: ' Animal {', type: 'normal' },
                    { text: '\n' },
                    { text: '  breed: ', type: 'normal' },
                    { text: '', blank: true, answer: 'string', id: 'b2' },
                    { text: ';', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['extends', 'implements', 'inherits', 'string', 'any', 'Dog'],
                explanation: '<b>extends</b> lets an interface inherit all properties from another. <code>Dog</code> has both <code>name</code> and <code>breed</code>.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       13. TS — UNION TYPES
       ────────────────────────────────────────── */
    {
        id: 'ts-unions',
        category: 'ts',
        title: 'TS: Union Types',
        desc: 'Combine types with the | operator',
        icon: '🔗',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'Multiple Possible Types',
                body: 'A <b>union type</b> means a value can be one of several types. Use the pipe (<code>|</code>) operator: <code>string | number</code> means the value is either a string or a number. TypeScript makes you <b>narrow</b> the type before using type-specific methods.'
            },
            {
                type: 'quiz',
                title: 'Basic union',
                code: [
                    { text: 'let id: string ', type: 'normal' },
                    { text: '', blank: true, answer: '|', id: 'b1' },
                    { text: ' number;', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'id = "abc";  // ✓', type: 'normal' },
                    { text: '\n' },
                    { text: 'id = ', type: 'normal' },
                    { text: '', blank: true, answer: '123', id: 'b2' },
                    { text: ';    // ✓', type: 'normal' },
                ],
                options: ['|', '&', '||', '123', '"123"', 'true'],
                explanation: 'The <b>|</b> operator creates a union. <code>id</code> can hold either a <code>string</code> or <code>number</code>. <code>123</code> is a number so it works.'
            },
            {
                type: 'quiz',
                title: 'Type narrowing',
                code: [
                    { text: 'function show(val: string | number) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if (', type: 'normal' },
                    { text: '', blank: true, answer: 'typeof', id: 'b1' },
                    { text: ' val === "string") {', type: 'normal' },
                    { text: '\n' },
                    { text: '    console.log(val.', type: 'normal' },
                    { text: '', blank: true, answer: 'toUpperCase', id: 'b2' },
                    { text: '());', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['typeof', 'instanceof', 'type', 'toUpperCase', 'toString', 'length'],
                explanation: '<b>typeof</b> narrows the type. Inside the <code>if</code> block, TypeScript knows <code>val</code> is a <code>string</code>, so <code>.toUpperCase()</code> is safe.'
            },
            {
                type: 'quiz',
                title: 'Literal types',
                code: [
                    { text: 'type Direction = ', type: 'normal' },
                    { text: '', blank: true, answer: '"up"', id: 'b1' },
                    { text: ' | "down" | "left" | "right";', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'let dir: Direction = ', type: 'normal' },
                    { text: '', blank: true, answer: '"up"', id: 'b2' },
                    { text: ';', type: 'normal' },
                ],
                options: ['"up"', '"down"', '"forward"', 'Direction', 'string'],
                explanation: '<b>Literal types</b> restrict values to exact strings. <code>Direction</code> can only be one of the four specified values — any other string is an error.'
            },
            {
                type: 'quiz',
                title: 'Null safety',
                code: [
                    { text: 'function greet(name: string | ', type: 'normal' },
                    { text: '', blank: true, answer: 'null', id: 'b1' },
                    { text: ') {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if (name ', type: 'normal' },
                    { text: '', blank: true, answer: '!==', id: 'b2' },
                    { text: ' null) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    console.log(`Hi, ${name}`);', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['null', 'undefined', 'void', '!==', '===', '!='],
                explanation: 'Union with <code>null</code> means the parameter is <b>nullable</b>. You must check for <code>null</code> before using string methods.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       14. TS — GENERICS
       ────────────────────────────────────────── */
    {
        id: 'ts-generics',
        category: 'ts',
        title: 'TS: Generics',
        desc: 'Reusable types with <T>',
        icon: '🧬',
        xp: 100,
        steps: [
            {
                type: 'theory',
                title: 'Type Parameters',
                body: 'Generics let you create <b>reusable</b> components that work with any type. Use angle brackets <code>&lt;T&gt;</code> to define a type parameter. Think of <code>T</code> as a placeholder that gets filled in when the function or class is used.'
            },
            {
                type: 'quiz',
                title: 'Generic function',
                code: [
                    { text: 'function identity', type: 'normal' },
                    { text: '', blank: true, answer: '<T>', id: 'b1' },
                    { text: '(value: T): T {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return ', type: 'normal' },
                    { text: '', blank: true, answer: 'value', id: 'b2' },
                    { text: ';', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['<T>', '<any>', '(T)', 'value', 'T', 'this'],
                explanation: '<code>&lt;T&gt;</code> declares a type variable. The function takes a <code>T</code> and returns a <code>T</code> — the type is preserved through the call.'
            },
            {
                type: 'quiz',
                title: 'Using generics',
                code: [
                    { text: 'function first<T>(arr: ', type: 'normal' },
                    { text: '', blank: true, answer: 'T[]', id: 'b1' },
                    { text: '): T {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return arr[0];', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const n = first<', type: 'normal' },
                    { text: '', blank: true, answer: 'number', id: 'b2' },
                    { text: '>([1, 2, 3]);', type: 'normal' },
                ],
                options: ['T[]', 'T', 'any[]', 'number', 'string', 'Array'],
                explanation: '<code>T[]</code> means "array of T". When calling <code>first&lt;number&gt;</code>, T becomes <code>number</code>, so the return type is <code>number</code>.'
            },
            {
                type: 'quiz',
                title: 'Generic constraint',
                code: [
                    { text: 'function getLen<T ', type: 'normal' },
                    { text: '', blank: true, answer: 'extends', id: 'b1' },
                    { text: ' { length: number }>(', type: 'normal' },
                    { text: '\n' },
                    { text: '  item: T', type: 'normal' },
                    { text: '\n' },
                    { text: '): ', type: 'normal' },
                    { text: '', blank: true, answer: 'number', id: 'b2' },
                    { text: ' {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return item.length;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['extends', 'implements', 'with', 'number', 'T', 'any'],
                explanation: '<code>T extends { length: number }</code> constrains T to types that have a <code>length</code> property. Strings and arrays work — numbers don\'t.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       15. TS — ENUMS
       ────────────────────────────────────────── */
    {
        id: 'ts-enums',
        category: 'ts',
        title: 'TS: Enums',
        desc: 'Named constants with enum',
        icon: '📋',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Named Constants',
                body: '<b>Enums</b> define a set of named constants. They make your code more readable and prevent magic strings/numbers. TypeScript supports <b>numeric</b> enums (auto-incrementing) and <b>string</b> enums (explicit values).'
            },
            {
                type: 'quiz',
                title: 'Numeric enum',
                code: [
                    { text: '', blank: true, answer: 'enum', id: 'b1' },
                    { text: ' Status {', type: 'normal' },
                    { text: '\n' },
                    { text: '  Pending,   // 0', type: 'normal' },
                    { text: '\n' },
                    { text: '  Active,    // 1', type: 'normal' },
                    { text: '\n' },
                    { text: '  Closed     // 2', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'let s: Status = Status.', type: 'normal' },
                    { text: '', blank: true, answer: 'Active', id: 'b2' },
                    { text: ';', type: 'normal' },
                ],
                options: ['enum', 'const', 'type', 'Active', 'Pending', '1'],
                explanation: '<b>enum</b> creates named constants. Values auto-increment from 0. Access via <code>Status.Active</code> (equals 1).'
            },
            {
                type: 'quiz',
                title: 'String enum',
                code: [
                    { text: 'enum Color {', type: 'normal' },
                    { text: '\n' },
                    { text: '  Red = "RED",', type: 'normal' },
                    { text: '\n' },
                    { text: '  Blue = ', type: 'normal' },
                    { text: '', blank: true, answer: '"BLUE"', id: 'b1' },
                    { text: ',', type: 'normal' },
                    { text: '\n' },
                    { text: '  Green = "GREEN"', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['"BLUE"', '"blue"', 'BLUE', '1', '"Blue"'],
                explanation: 'String enums require <b>explicit values</b> for every member. Use consistent casing — uppercase is a common convention.'
            },
            {
                type: 'quiz',
                title: 'Enum as type',
                code: [
                    { text: 'enum Role { Admin, User, Guest }', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'function check(role: ', type: 'normal' },
                    { text: '', blank: true, answer: 'Role', id: 'b1' },
                    { text: ') {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if (role === Role.', type: 'normal' },
                    { text: '', blank: true, answer: 'Admin', id: 'b2' },
                    { text: ') {', type: 'normal' },
                    { text: '\n' },
                    { text: '    console.log("Full access");', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['Role', 'string', 'number', 'Admin', 'User', '"Admin"'],
                explanation: 'Enums double as <b>types</b>. The parameter <code>role: Role</code> only accepts enum members. Compare with <code>Role.Admin</code>, not the string <code>"Admin"</code>.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       16. TS — TYPE ALIASES
       ────────────────────────────────────────── */
    {
        id: 'ts-type-aliases',
        category: 'ts',
        title: 'TS: Type Aliases',
        desc: 'Create custom types with type keyword',
        icon: '🏷️',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Custom Type Names',
                body: '<code>type</code> lets you create aliases for complex types. Unlike interfaces, type aliases can represent <b>unions</b>, <b>tuples</b>, and <b>primitive</b> types — making your code more readable and reusable.'
            },
            {
                type: 'quiz',
                title: 'Basic type alias',
                code: [
                    { text: '', blank: true, answer: 'type', id: 'b1' },
                    { text: ' ID = string | number;', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'let userId: ', type: 'normal' },
                    { text: '', blank: true, answer: 'ID', id: 'b2' },
                    { text: ' = "abc123";', type: 'normal' },
                ],
                options: ['type', 'interface', 'alias', 'ID', 'string', 'any'],
                explanation: '<b>type</b> creates an alias. <code>ID</code> can now be used anywhere you\'d write <code>string | number</code>.'
            },
            {
                type: 'quiz',
                title: 'Tuple types',
                code: [
                    { text: 'type Coord = [', type: 'normal' },
                    { text: '', blank: true, answer: 'number', id: 'b1' },
                    { text: ', number];', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const point: Coord = [10, 20];', type: 'normal' },
                ],
                options: ['number', 'string', 'any', 'int'],
                explanation: 'Tuples are <b>fixed-length arrays</b> with specific types per position. <code>[number, number]</code> means exactly two numbers.'
            },
            {
                type: 'quiz',
                title: 'Function types',
                code: [
                    { text: 'type Callback = (', type: 'normal' },
                    { text: '', blank: true, answer: 'msg', id: 'b1' },
                    { text: ': string) => ', type: 'normal' },
                    { text: '', blank: true, answer: 'void', id: 'b2' },
                    { text: ';', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const log: Callback = (m) => console.log(m);', type: 'normal' },
                ],
                options: ['msg', 'str', 'value', 'void', 'string', 'any'],
                explanation: 'Function type aliases define the parameter types and return type. <code>void</code> means the function returns nothing.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       17. TS — TYPE GUARDS
       ────────────────────────────────────────── */
    {
        id: 'ts-guards',
        category: 'ts',
        title: 'TS: Type Guards',
        desc: 'Runtime checks for type safety',
        icon: '🛡️',
        xp: 90,
        steps: [
            {
                type: 'theory',
                title: 'Narrowing Types at Runtime',
                body: 'Type guards are runtime checks that help TypeScript <b>narrow</b> union types. Use <code>typeof</code> for primitives, <code>instanceof</code> for classes, and <code>in</code> to check if a property exists on an object.'
            },
            {
                type: 'quiz',
                title: 'typeof guard',
                code: [
                    { text: 'function double(x: string | number) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if (', type: 'normal' },
                    { text: '', blank: true, answer: 'typeof', id: 'b1' },
                    { text: ' x === "number") {', type: 'normal' },
                    { text: '\n' },
                    { text: '    return x * 2;', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '  return x.', type: 'normal' },
                    { text: '', blank: true, answer: 'repeat', id: 'b2' },
                    { text: '(2);', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['typeof', 'instanceof', 'type', 'repeat', 'concat', 'double'],
                explanation: '<b>typeof</b> narrows to primitives. After the check, TS knows x is a number in the if-block and a string in the else.'
            },
            {
                type: 'quiz',
                title: 'instanceof guard',
                code: [
                    { text: 'function format(d: Date | string) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if (d ', type: 'normal' },
                    { text: '', blank: true, answer: 'instanceof', id: 'b1' },
                    { text: ' Date) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    return d.toISOString();', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '  return d;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['instanceof', 'typeof', 'is', 'extends'],
                explanation: '<b>instanceof</b> checks if an object was created by a specific class. Works for Date, Array, Error, etc.'
            },
            {
                type: 'quiz',
                title: 'in operator guard',
                code: [
                    { text: 'type Fish = { swim: () => void };', type: 'normal' },
                    { text: '\n' },
                    { text: 'type Bird = { fly: () => void };', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'function move(a: Fish | Bird) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if ("swim" ', type: 'normal' },
                    { text: '', blank: true, answer: 'in', id: 'b1' },
                    { text: ' a) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    a.swim();', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['in', 'of', 'has', 'includes'],
                explanation: 'The <b>in</b> operator checks if a property exists on an object. TypeScript narrows the type based on which properties exist.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       18. TS — UTILITY TYPES
       ────────────────────────────────────────── */
    {
        id: 'ts-utility',
        category: 'ts',
        title: 'TS: Utility Types',
        desc: 'Partial, Required, Pick & more',
        icon: '🧰',
        xp: 95,
        steps: [
            {
                type: 'theory',
                title: 'Built-in Type Helpers',
                body: 'TypeScript provides <b>utility types</b> that transform existing types. <code>Partial&lt;T&gt;</code> makes all properties optional, <code>Required&lt;T&gt;</code> makes them all required, <code>Pick&lt;T, K&gt;</code> selects specific properties, and <code>Omit&lt;T, K&gt;</code> removes them.'
            },
            {
                type: 'quiz',
                title: 'Partial type',
                code: [
                    { text: 'interface User { name: string; age: number; }', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'function update(u: ', type: 'normal' },
                    { text: '', blank: true, answer: 'Partial', id: 'b1' },
                    { text: '<User>) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  // all fields optional', type: 'comment' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n' },
                    { text: 'update({ name: "Neo" }); // ✓', type: 'normal' },
                ],
                options: ['Partial', 'Required', 'Optional', 'Subset'],
                explanation: '<b>Partial&lt;User&gt;</b> makes all properties of User optional. Perfect for update functions where you only change some fields.'
            },
            {
                type: 'quiz',
                title: 'Pick type',
                code: [
                    { text: 'interface Post {', type: 'normal' },
                    { text: '\n' },
                    { text: '  id: number; title: string;', type: 'normal' },
                    { text: '\n' },
                    { text: '  body: string; date: Date;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'type Preview = ', type: 'normal' },
                    { text: '', blank: true, answer: 'Pick', id: 'b1' },
                    { text: '<Post, "id" | "title">;', type: 'normal' },
                ],
                options: ['Pick', 'Omit', 'Extract', 'Select'],
                explanation: '<b>Pick&lt;T, K&gt;</b> creates a type with only the specified properties. <code>Preview</code> has only <code>id</code> and <code>title</code>.'
            },
            {
                type: 'quiz',
                title: 'Record type',
                code: [
                    { text: 'type Roles = "admin" | "user" | "guest";', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const perms: ', type: 'normal' },
                    { text: '', blank: true, answer: 'Record', id: 'b1' },
                    { text: '<Roles, boolean> = {', type: 'normal' },
                    { text: '\n' },
                    { text: '  admin: true, user: true, guest: false', type: 'normal' },
                    { text: '\n' },
                    { text: '};', type: 'normal' },
                ],
                options: ['Record', 'Map', 'Dict', 'Object'],
                explanation: '<b>Record&lt;K, V&gt;</b> creates an object type with keys of type K and values of type V. Every role must have a boolean.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       19. TS — CLASSES
       ────────────────────────────────────────── */
    {
        id: 'ts-classes',
        category: 'ts',
        title: 'TS: Classes',
        desc: 'Typed classes with access modifiers',
        icon: '🏛️',
        xp: 85,
        steps: [
            {
                type: 'theory',
                title: 'Typed OOP',
                body: 'TypeScript enhances classes with <b>access modifiers</b> (<code>public</code>, <code>private</code>, <code>protected</code>), typed properties, and <code>implements</code> for interface compliance — bringing true OOP to JavaScript.'
            },
            {
                type: 'quiz',
                title: 'Access modifiers',
                code: [
                    { text: 'class User {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'private', id: 'b1' },
                    { text: ' password: string;', type: 'normal' },
                    { text: '\n' },
                    { text: '  public name: string;', type: 'normal' },
                    { text: '\n\n' },
                    { text: '  constructor(name: string, pw: string) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    this.name = name;', type: 'normal' },
                    { text: '\n' },
                    { text: '    this.password = pw;', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['private', 'public', 'protected', 'hidden', 'secret'],
                explanation: '<b>private</b> properties can only be accessed inside the class. <code>password</code> is hidden from the outside.'
            },
            {
                type: 'quiz',
                title: 'Implements interface',
                code: [
                    { text: 'interface Loggable {', type: 'normal' },
                    { text: '\n' },
                    { text: '  log(): void;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'class App ', type: 'normal' },
                    { text: '', blank: true, answer: 'implements', id: 'b1' },
                    { text: ' Loggable {', type: 'normal' },
                    { text: '\n' },
                    { text: '  log() { console.log("App log"); }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['implements', 'extends', 'uses', 'inherits'],
                explanation: '<b>implements</b> ensures a class follows an interface\'s contract. Missing methods cause compile errors.'
            },
            {
                type: 'quiz',
                title: 'Readonly properties',
                code: [
                    { text: 'class Config {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'readonly', id: 'b1' },
                    { text: ' apiUrl: string;', type: 'normal' },
                    { text: '\n\n' },
                    { text: '  constructor(url: string) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    this.apiUrl = url; // ✓ only in constructor', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['readonly', 'const', 'final', 'immutable'],
                explanation: '<b>readonly</b> properties can be set in the constructor but never changed after. Like <code>const</code> for class properties.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       20. TS — MODULES & NAMESPACES
       ────────────────────────────────────────── */
    {
        id: 'ts-modules',
        category: 'ts',
        title: 'TS: Modules',
        desc: 'import, export & declaration files',
        icon: '📦',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'Module System',
                body: 'TypeScript uses <b>ES modules</b> for organizing code. Every file is a module if it has <code>import</code> or <code>export</code>. Declaration files (<code>.d.ts</code>) provide type info for JavaScript libraries.'
            },
            {
                type: 'quiz',
                title: 'Named exports',
                code: [
                    { text: '// utils.ts', type: 'comment' },
                    { text: '', blank: true, answer: 'export', id: 'b1' },
                    { text: ' function add(a: number, b: number) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return a + b;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// app.ts', type: 'comment' },
                    { text: '', blank: true, answer: 'import', id: 'b2' },
                    { text: ' { add } from "./utils";', type: 'normal' },
                ],
                options: ['export', 'import', 'require', 'module', 'expose'],
                explanation: '<b>export</b> makes functions/types available to other files. <b>import</b> brings them in with destructuring syntax.'
            },
            {
                type: 'quiz',
                title: 'Default export',
                code: [
                    { text: '// Logger.ts', type: 'comment' },
                    { text: 'export ', type: 'normal' },
                    { text: '', blank: true, answer: 'default', id: 'b1' },
                    { text: ' class Logger {', type: 'normal' },
                    { text: '\n' },
                    { text: '  log(msg: string) { console.log(msg); }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['default', 'main', 'primary', 'base'],
                explanation: '<b>export default</b> marks one main export per file. When importing, you can name it whatever you want without curly braces.'
            },
            {
                type: 'quiz',
                title: 'Type-only imports',
                code: [
                    { text: 'import ', type: 'normal' },
                    { text: '', blank: true, answer: 'type', id: 'b1' },
                    { text: ' { User } from "./models";', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// User is only used for type checking', type: 'comment' },
                    { text: '// it is removed at compile time', type: 'comment' },
                ],
                options: ['type', 'interface', 'typedef', 'declare'],
                explanation: '<b>import type</b> imports only type information. It\'s erased at compile time — no runtime overhead.'
            }
        ]
    },

    /* ══════════════════════════════════════════════════
       NODE.JS COURSE
       ══════════════════════════════════════════════════ */

    /* ──────────────────────────────────────────
       16. NODE — MODULES & REQUIRE
       ────────────────────────────────────────── */
    {
        id: 'node-modules',
        category: 'node',
        title: 'Node: Modules',
        desc: 'require, exports & ES modules',
        icon: '📦',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'The Module System',
                body: 'Node.js splits code into <b>modules</b>. Use <code>require()</code> to import and <code>module.exports</code> to export (CommonJS). Modern Node also supports ES modules with <code>import</code>/<code>export</code>.'
            },
            {
                type: 'quiz',
                title: 'CommonJS export',
                code: [
                    { text: '// math.js', type: 'comment' },
                    { text: 'function add(a, b) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return a + b;', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                    { text: '\n\n' },
                    { text: '', blank: true, answer: 'module', id: 'b1' },
                    { text: '.', type: 'normal' },
                    { text: '', blank: true, answer: 'exports', id: 'b2' },
                    { text: ' = { add };', type: 'normal' },
                ],
                options: ['module', 'exports', 'export', 'default', 'this', 'global'],
                explanation: '<code>module.exports</code> is how CommonJS exposes values. Other files can then <code>require()</code> this module.'
            },
            {
                type: 'quiz',
                title: 'CommonJS import',
                code: [
                    { text: 'const { add } = ', type: 'normal' },
                    { text: '', blank: true, answer: 'require', id: 'b1' },
                    { text: '("./math");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'console.log(add(2, 3));', type: 'normal' },
                    { text: '\n' },
                    { text: '// Output: ', type: 'comment' },
                    { text: '', blank: true, answer: '5', id: 'b2' },
                ],
                options: ['require', 'import', 'include', '5', '23', '"23"'],
                explanation: '<b>require()</b> loads a module. The <code>./</code> prefix means it\'s a local file. Destructuring <code>{ add }</code> grabs just the function we need.'
            },
            {
                type: 'quiz',
                title: 'Built-in modules',
                code: [
                    { text: 'const fs = require("', type: 'normal' },
                    { text: '', blank: true, answer: 'fs', id: 'b1' },
                    { text: '");', type: 'normal' },
                    { text: '\n' },
                    { text: 'const path = require("', type: 'normal' },
                    { text: '', blank: true, answer: 'path', id: 'b2' },
                    { text: '");', type: 'normal' },
                ],
                options: ['fs', 'path', 'file', 'dir', 'os', 'url'],
                explanation: 'Node has built-in modules — no <code>./</code> prefix needed. <b>fs</b> handles files, <b>path</b> handles file paths cross-platform.'
            },
            {
                type: 'quiz',
                title: 'ES modules',
                code: [
                    { text: '// package.json: "type": "module"', type: 'comment' },
                    { text: '', blank: true, answer: 'import', id: 'b1' },
                    { text: ' { readFile } from "fs/promises";', type: 'normal' },
                    { text: '\n\n' },
                    { text: '', blank: true, answer: 'export', id: 'b2' },
                    { text: ' function greet() {', type: 'normal' },
                    { text: '\n' },
                    { text: '  return "Hello!";', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['import', 'require', 'include', 'export', 'module', 'default'],
                explanation: 'ES modules use <b>import</b>/<b>export</b>. Add <code>"type": "module"</code> to package.json to enable them in Node.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       17. NODE — FILE SYSTEM
       ────────────────────────────────────────── */
    {
        id: 'node-fs',
        category: 'node',
        title: 'Node: File System',
        desc: 'Read, write & work with files',
        icon: '📁',
        xp: 85,
        steps: [
            {
                type: 'theory',
                title: 'Reading & Writing Files',
                body: 'The <code>fs</code> module lets you interact with the file system. Use <code>readFileSync</code> for synchronous reads and <code>fs.promises</code> for async/await. Always specify <code>"utf-8"</code> encoding for text files.'
            },
            {
                type: 'quiz',
                title: 'Read a file',
                code: [
                    { text: 'const fs = require("fs");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const data = fs.', type: 'normal' },
                    { text: '', blank: true, answer: 'readFileSync', id: 'b1' },
                    { text: '(', type: 'normal' },
                    { text: '\n' },
                    { text: '  "hello.txt",', type: 'normal' },
                    { text: '\n' },
                    { text: '  "', type: 'normal' },
                    { text: '', blank: true, answer: 'utf-8', id: 'b2' },
                    { text: '"', type: 'normal' },
                    { text: '\n' },
                    { text: ');', type: 'normal' },
                ],
                options: ['readFileSync', 'readFile', 'open', 'utf-8', 'ascii', 'binary'],
                explanation: '<b>readFileSync</b> reads the file and returns its content. <code>"utf-8"</code> ensures you get a string instead of a raw Buffer.'
            },
            {
                type: 'quiz',
                title: 'Write a file',
                code: [
                    { text: 'const fs = require("fs");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'fs.', type: 'normal' },
                    { text: '', blank: true, answer: 'writeFileSync', id: 'b1' },
                    { text: '(', type: 'normal' },
                    { text: '\n' },
                    { text: '  "output.txt",', type: 'normal' },
                    { text: '\n' },
                    { text: '  "Hello, Node!"', type: 'normal' },
                    { text: '\n' },
                    { text: ');', type: 'normal' },
                ],
                options: ['writeFileSync', 'writeFile', 'createFile', 'save'],
                explanation: '<b>writeFileSync</b> creates or overwrites a file. It\'s synchronous — the code waits until the file is written.'
            },
            {
                type: 'quiz',
                title: 'Async file read',
                code: [
                    { text: 'const fs = require("fs/promises");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'async function load() {', type: 'normal' },
                    { text: '\n' },
                    { text: '  const text = ', type: 'normal' },
                    { text: '', blank: true, answer: 'await', id: 'b1' },
                    { text: ' fs.readFile(', type: 'normal' },
                    { text: '\n' },
                    { text: '    "data.txt", "utf-8"', type: 'normal' },
                    { text: '\n' },
                    { text: '  );', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['await', 'return', 'yield', 'then'],
                explanation: '<code>fs/promises</code> provides async versions. Use <b>await</b> to wait for the file to be read without blocking.'
            },
            {
                type: 'quiz',
                title: 'Check if file exists',
                code: [
                    { text: 'const fs = require("fs");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'if (fs.', type: 'normal' },
                    { text: '', blank: true, answer: 'existsSync', id: 'b1' },
                    { text: '("config.json")) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Config found!");', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['existsSync', 'fileExists', 'hasFile', 'isFile'],
                explanation: '<b>existsSync</b> returns <code>true</code> if the file exists. Good for checking before reading a config file.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       18. NODE — HTTP SERVER
       ────────────────────────────────────────── */
    {
        id: 'node-http',
        category: 'node',
        title: 'Node: HTTP Server',
        desc: 'Create servers with the http module',
        icon: '🌐',
        xp: 90,
        steps: [
            {
                type: 'theory',
                title: 'Building a Server',
                body: 'Node\'s built-in <code>http</code> module lets you create web servers with just a few lines. The <code>createServer</code> callback receives a <b>request</b> (what the client sent) and a <b>response</b> (what you send back).'
            },
            {
                type: 'quiz',
                title: 'Create a server',
                code: [
                    { text: 'const http = require("http");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const server = http.', type: 'normal' },
                    { text: '', blank: true, answer: 'createServer', id: 'b1' },
                    { text: '(', type: 'normal' },
                    { text: '\n' },
                    { text: '  (req, res) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '    res.end("Hello!");', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: ');', type: 'normal' },
                ],
                options: ['createServer', 'newServer', 'listen', 'Server'],
                explanation: '<b>createServer</b> takes a callback that runs for every incoming request. <code>res.end()</code> sends the response and closes the connection.'
            },
            {
                type: 'quiz',
                title: 'Start listening',
                code: [
                    { text: 'server.', type: 'normal' },
                    { text: '', blank: true, answer: 'listen', id: 'b1' },
                    { text: '(', type: 'normal' },
                    { text: '', blank: true, answer: '3000', id: 'b2' },
                    { text: ', () => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Server running!");', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['listen', 'start', 'run', '3000', '80', '8080'],
                explanation: '<b>.listen(port)</b> starts the server on the given port. Port <b>3000</b> is a common choice for development.'
            },
            {
                type: 'quiz',
                title: 'Set status & headers',
                code: [
                    { text: 'const server = http.createServer(', type: 'normal' },
                    { text: '\n' },
                    { text: '  (req, res) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '    res.', type: 'normal' },
                    { text: '', blank: true, answer: 'writeHead', id: 'b1' },
                    { text: '(200, {', type: 'normal' },
                    { text: '\n' },
                    { text: '      "Content-Type": "application/json"', type: 'normal' },
                    { text: '\n' },
                    { text: '    });', type: 'normal' },
                    { text: '\n' },
                    { text: '    res.end(JSON.', type: 'normal' },
                    { text: '', blank: true, answer: 'stringify', id: 'b2' },
                    { text: '({ ok: true }));', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: ');', type: 'normal' },
                ],
                options: ['writeHead', 'setHeader', 'status', 'stringify', 'parse', 'encode'],
                explanation: '<b>writeHead</b> sets the status code and headers. <code>JSON.stringify</code> converts an object to a JSON string for the response.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       19. NODE — EXPRESS BASICS
       ────────────────────────────────────────── */
    {
        id: 'node-express',
        category: 'node',
        title: 'Node: Express Basics',
        desc: 'Routes, middleware & REST APIs',
        icon: '🚀',
        xp: 95,
        steps: [
            {
                type: 'theory',
                title: 'Express.js',
                body: '<b>Express</b> is the most popular Node.js framework. It simplifies routing, middleware, and request handling. Instead of one big callback, you define <b>routes</b> like <code>app.get("/path", handler)</code> for different endpoints.'
            },
            {
                type: 'quiz',
                title: 'Create an Express app',
                code: [
                    { text: 'const express = require("express");', type: 'normal' },
                    { text: '\n' },
                    { text: 'const app = ', type: 'normal' },
                    { text: '', blank: true, answer: 'express', id: 'b1' },
                    { text: '();', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'app.', type: 'normal' },
                    { text: '', blank: true, answer: 'get', id: 'b2' },
                    { text: '("/", (req, res) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  res.send("Hello!");', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['express', 'Express', 'new', 'get', 'route', 'on'],
                explanation: 'Call <b>express()</b> to create an app. <code>app.get("/")</code> handles GET requests to the root path.'
            },
            {
                type: 'quiz',
                title: 'JSON middleware',
                code: [
                    { text: '// Parse JSON request bodies', type: 'comment' },
                    { text: 'app.use(express.', type: 'normal' },
                    { text: '', blank: true, answer: 'json', id: 'b1' },
                    { text: '());', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'app.post("/api/data", (req, res) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log(req.', type: 'normal' },
                    { text: '', blank: true, answer: 'body', id: 'b2' },
                    { text: ');', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['json', 'JSON', 'bodyParser', 'body', 'data', 'params'],
                explanation: '<code>express.json()</code> middleware parses JSON bodies. The parsed data is then available on <b>req.body</b>.'
            },
            {
                type: 'quiz',
                title: 'Route parameters',
                code: [
                    { text: 'app.get("/users/', type: 'normal' },
                    { text: '', blank: true, answer: ':id', id: 'b1' },
                    { text: '", (req, res) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  const userId = req.', type: 'normal' },
                    { text: '', blank: true, answer: 'params', id: 'b2' },
                    { text: '.id;', type: 'normal' },
                    { text: '\n' },
                    { text: '  res.json({ id: userId });', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: [':id', '{id}', 'id', 'params', 'query', 'body'],
                explanation: '<code>:id</code> defines a URL parameter. Access it via <b>req.params.id</b>. For <code>/users/42</code>, <code>id</code> would be <code>"42"</code>.'
            },
            {
                type: 'quiz',
                title: 'Static files',
                code: [
                    { text: 'const path = require("path");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'app.use(express.', type: 'normal' },
                    { text: '', blank: true, answer: 'static', id: 'b1' },
                    { text: '(', type: 'normal' },
                    { text: '\n' },
                    { text: '  path.join(__dirname, "', type: 'normal' },
                    { text: '', blank: true, answer: 'public', id: 'b2' },
                    { text: '")', type: 'normal' },
                    { text: '\n' },
                    { text: '));', type: 'normal' },
                ],
                options: ['static', 'serve', 'files', 'public', 'dist', 'assets'],
                explanation: '<code>express.static</code> serves files from a directory. <b>"public"</b> is the convention — HTML, CSS, JS, images go here.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       20. NODE — ENVIRONMENT VARIABLES
       ────────────────────────────────────────── */
    {
        id: 'node-env',
        category: 'node',
        title: 'Node: Env Variables',
        desc: 'process.env, dotenv & config',
        icon: '🔐',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Configuration & Secrets',
                body: '<b>Environment variables</b> store configuration outside your code — database URLs, API keys, ports. Access them via <code>process.env</code>. Use the <code>dotenv</code> package to load them from a <code>.env</code> file during development.'
            },
            {
                type: 'quiz',
                title: 'Access env vars',
                code: [
                    { text: 'const port = ', type: 'normal' },
                    { text: '', blank: true, answer: 'process', id: 'b1' },
                    { text: '.', type: 'normal' },
                    { text: '', blank: true, answer: 'env', id: 'b2' },
                    { text: '.PORT || 3000;', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'app.listen(port);', type: 'normal' },
                ],
                options: ['process', 'env', 'global', 'config', 'system', 'os'],
                explanation: '<code>process.env.PORT</code> reads the <code>PORT</code> environment variable. The <code>|| 3000</code> provides a default if it\'s not set.'
            },
            {
                type: 'quiz',
                title: 'Use dotenv',
                code: [
                    { text: '', blank: true, answer: 'require', id: 'b1' },
                    { text: '("dotenv").config();', type: 'normal' },
                    { text: '\n\n' },
                    { text: '// .env file:', type: 'comment' },
                    { text: '// DB_URL=mongodb://localhost/mydb', type: 'comment' },
                    { text: '\n\n' },
                    { text: 'const dbUrl = process.env.', type: 'normal' },
                    { text: '', blank: true, answer: 'DB_URL', id: 'b2' },
                    { text: ';', type: 'normal' },
                ],
                options: ['require', 'import', 'load', 'DB_URL', 'dbUrl', 'DATABASE'],
                explanation: '<code>require("dotenv").config()</code> loads variables from <code>.env</code> into <b>process.env</b>. Variable names match exactly.'
            },
            {
                type: 'quiz',
                title: 'NODE_ENV',
                code: [
                    { text: 'const isProd = process.env.', type: 'normal' },
                    { text: '', blank: true, answer: 'NODE_ENV', id: 'b1' },
                    { text: ' === "production";', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'if (isProd) {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Running in production");', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['NODE_ENV', 'ENV', 'MODE', 'ENVIRONMENT'],
                explanation: '<b>NODE_ENV</b> is the standard variable for the environment. Common values: <code>"development"</code>, <code>"production"</code>, <code>"test"</code>.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       26. NODE — NPM & PACKAGES
       ────────────────────────────────────────── */
    {
        id: 'node-npm',
        category: 'node',
        title: 'Node: npm & Packages',
        desc: 'Install, manage & use packages',
        icon: '📋',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Package Management',
                body: '<b>npm</b> (Node Package Manager) installs third-party packages from the npm registry. Use <code>npm init</code> to create a <code>package.json</code> and <code>npm install</code> to add dependencies.'
            },
            {
                type: 'quiz',
                title: 'package.json scripts',
                code: [
                    { text: '// package.json', type: 'comment' },
                    { text: '{', type: 'normal' },
                    { text: '\n' },
                    { text: '  "scripts": {', type: 'normal' },
                    { text: '\n' },
                    { text: '    "start": "node server.js",', type: 'normal' },
                    { text: '\n' },
                    { text: '    "', type: 'normal' },
                    { text: '', blank: true, answer: 'dev', id: 'b1' },
                    { text: '": "nodemon server.js"', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['dev', 'debug', 'run', 'watch'],
                explanation: 'The <b>"dev"</b> script is a convention for development mode. Run with <code>npm run dev</code>. <code>nodemon</code> auto-restarts on file changes.'
            },
            {
                type: 'quiz',
                title: 'Import installed package',
                code: [
                    { text: '// After: npm install lodash', type: 'comment' },
                    { text: 'const _ = ', type: 'normal' },
                    { text: '', blank: true, answer: 'require', id: 'b1' },
                    { text: '("lodash");', type: 'normal' },
                    { text: '\n\n' },
                    { text: '_.', type: 'normal' },
                    { text: '', blank: true, answer: 'shuffle', id: 'b2' },
                    { text: '([1, 2, 3, 4, 5]);', type: 'normal' },
                ],
                options: ['require', 'import', 'load', 'shuffle', 'random', 'sort'],
                explanation: 'After installing with npm, <b>require</b> the package by name (no <code>./</code>). Lodash\'s <b>shuffle</b> randomizes an array.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       27. NODE — STREAMS
       ────────────────────────────────────────── */
    {
        id: 'node-streams',
        category: 'node',
        title: 'Node: Streams',
        desc: 'Read & write data efficiently',
        icon: '🌊',
        xp: 90,
        steps: [
            {
                type: 'theory',
                title: 'Streaming Data',
                body: '<b>Streams</b> process data piece by piece instead of loading it all at once. This is memory-efficient for large files. Node has readable streams (input), writable streams (output), and you can <b>pipe</b> them together.'
            },
            {
                type: 'quiz',
                title: 'Create a read stream',
                code: [
                    { text: 'const fs = require("fs");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const stream = fs.', type: 'normal' },
                    { text: '', blank: true, answer: 'createReadStream', id: 'b1' },
                    { text: '("big-file.txt");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'stream.on("', type: 'normal' },
                    { text: '', blank: true, answer: 'data', id: 'b2' },
                    { text: '", (chunk) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log(chunk.length);', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['createReadStream', 'readStream', 'openFile', 'data', 'chunk', 'read'],
                explanation: '<b>createReadStream</b> reads a file in chunks. The <b>"data"</b> event fires for each chunk — no need to load the whole file.'
            },
            {
                type: 'quiz',
                title: 'Pipe streams',
                code: [
                    { text: 'const src = fs.createReadStream("input.txt");', type: 'normal' },
                    { text: '\n' },
                    { text: 'const dest = fs.createWriteStream("output.txt");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'src.', type: 'normal' },
                    { text: '', blank: true, answer: 'pipe', id: 'b1' },
                    { text: '(dest);', type: 'normal' },
                ],
                options: ['pipe', 'stream', 'connect', 'write'],
                explanation: '<b>.pipe()</b> connects a readable stream to a writable stream. Data flows automatically — like connecting pipes in plumbing.'
            },
            {
                type: 'quiz',
                title: 'Stream events',
                code: [
                    { text: 'stream.on("', type: 'normal' },
                    { text: '', blank: true, answer: 'end', id: 'b1' },
                    { text: '", () => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Done reading!");', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'stream.on("', type: 'normal' },
                    { text: '', blank: true, answer: 'error', id: 'b2' },
                    { text: '", (err) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.error(err);', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['end', 'error', 'finish', 'close', 'done', 'fail'],
                explanation: '<b>"end"</b> fires when all data has been read. <b>"error"</b> fires if something goes wrong — always handle this!'
            }
        ]
    },

    /* ──────────────────────────────────────────
       28. NODE — EVENTS
       ────────────────────────────────────────── */
    {
        id: 'node-events',
        category: 'node',
        title: 'Node: Events',
        desc: 'EventEmitter & custom events',
        icon: '📡',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'Event-Driven Architecture',
                body: 'Node.js is built on <b>events</b>. The <code>EventEmitter</code> class lets you create custom events, listen for them with <code>.on()</code>, and trigger them with <code>.emit()</code>. HTTP servers, streams, and many Node APIs use this pattern.'
            },
            {
                type: 'quiz',
                title: 'Create an emitter',
                code: [
                    { text: 'const { EventEmitter } = require("events");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const emitter = new ', type: 'normal' },
                    { text: '', blank: true, answer: 'EventEmitter', id: 'b1' },
                    { text: '();', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'emitter.', type: 'normal' },
                    { text: '', blank: true, answer: 'on', id: 'b2' },
                    { text: '("greet", (name) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log(`Hello, ${name}!`);', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['EventEmitter', 'Emitter', 'Event', 'on', 'listen', 'bind'],
                explanation: 'Create an instance with <b>new EventEmitter()</b>. <b>.on()</b> registers a listener for a specific event name.'
            },
            {
                type: 'quiz',
                title: 'Emit events',
                code: [
                    { text: 'emitter.', type: 'normal' },
                    { text: '', blank: true, answer: 'emit', id: 'b1' },
                    { text: '("greet", "Node");', type: 'normal' },
                    { text: '\n' },
                    { text: '// Output: "Hello, Node!"', type: 'comment' },
                ],
                options: ['emit', 'fire', 'trigger', 'dispatch'],
                explanation: '<b>.emit()</b> triggers the event. Any extra arguments (like <code>"Node"</code>) are passed to the listener function.'
            },
            {
                type: 'quiz',
                title: 'Listen once',
                code: [
                    { text: 'emitter.', type: 'normal' },
                    { text: '', blank: true, answer: 'once', id: 'b1' },
                    { text: '("init", () => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log("Started!");', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                    { text: '\n' },
                    { text: '// Only fires one time', type: 'comment' },
                ],
                options: ['once', 'one', 'first', 'single'],
                explanation: '<b>.once()</b> registers a listener that fires only <b>one time</b>. After the first emit, it auto-removes itself.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       29. NODE — ERROR HANDLING
       ────────────────────────────────────────── */
    {
        id: 'node-errors',
        category: 'node',
        title: 'Node: Error Handling',
        desc: 'Error-first callbacks & unhandled errors',
        icon: '⚠️',
        xp: 85,
        steps: [
            {
                type: 'theory',
                title: 'Error Patterns in Node',
                body: 'Node uses <b>error-first callbacks</b>: the first argument is always the error (or null). For promises, use <code>.catch()</code> or <code>try/catch</code> with async/await. Always handle <code>uncaughtException</code> and <code>unhandledRejection</code> in production.'
            },
            {
                type: 'quiz',
                title: 'Error-first callback',
                code: [
                    { text: 'const fs = require("fs");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'fs.readFile("data.txt", "utf-8", (', type: 'normal' },
                    { text: '', blank: true, answer: 'err', id: 'b1' },
                    { text: ', data) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  if (err) return console.error(err);', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.log(data);', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['err', 'error', 'data', 'result', 'null'],
                explanation: 'Error-first callbacks always receive <b>err</b> as the first argument. If it\'s null, the operation succeeded.'
            },
            {
                type: 'quiz',
                title: 'Async error handling',
                code: [
                    { text: 'async function loadConfig() {', type: 'normal' },
                    { text: '\n' },
                    { text: '  ', type: 'normal' },
                    { text: '', blank: true, answer: 'try', id: 'b1' },
                    { text: ' {', type: 'normal' },
                    { text: '\n' },
                    { text: '    const data = await fs.promises.readFile("config.json");', type: 'normal' },
                    { text: '\n' },
                    { text: '    return JSON.parse(data);', type: 'normal' },
                    { text: '\n' },
                    { text: '  } ', type: 'normal' },
                    { text: '', blank: true, answer: 'catch', id: 'b2' },
                    { text: ' (err) {', type: 'normal' },
                    { text: '\n' },
                    { text: '    console.error("Config failed:", err);', type: 'normal' },
                    { text: '\n' },
                    { text: '  }', type: 'normal' },
                    { text: '\n' },
                    { text: '}', type: 'normal' },
                ],
                options: ['try', 'catch', 'if', 'then', 'handle'],
                explanation: 'With async/await, use <b>try/catch</b> for error handling. It reads just like synchronous error handling.'
            },
            {
                type: 'quiz',
                title: 'Process error events',
                code: [
                    { text: 'process.on("', type: 'normal' },
                    { text: '', blank: true, answer: 'uncaughtException', id: 'b1' },
                    { text: '", (err) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  console.error("Fatal:", err);', type: 'normal' },
                    { text: '\n' },
                    { text: '  process.exit(1);', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['uncaughtException', 'error', 'crash', 'unhandledError'],
                explanation: '<b>uncaughtException</b> catches errors that no try/catch handled. Log them and exit — the app is in an unknown state.'
            }
        ]
    },

    /* ──────────────────────────────────────────
       30. NODE — JSON & APIs
       ────────────────────────────────────────── */
    {
        id: 'node-json',
        category: 'node',
        title: 'Node: JSON & APIs',
        desc: 'Parse, stringify & build REST APIs',
        icon: '🔄',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'Working with JSON',
                body: '<b>JSON</b> (JavaScript Object Notation) is the standard format for APIs. Use <code>JSON.parse()</code> to convert a string to an object and <code>JSON.stringify()</code> to convert an object to a string.'
            },
            {
                type: 'quiz',
                title: 'Parse JSON',
                code: [
                    { text: 'const raw = \'{"name": "Jo", "age": 25}\';', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const user = JSON.', type: 'normal' },
                    { text: '', blank: true, answer: 'parse', id: 'b1' },
                    { text: '(raw);', type: 'normal' },
                    { text: '\n' },
                    { text: 'console.log(user.name); // "Jo"', type: 'normal' },
                ],
                options: ['parse', 'stringify', 'decode', 'fromString'],
                explanation: '<b>JSON.parse()</b> converts a JSON string into a JavaScript object. Throws an error if the JSON is invalid.'
            },
            {
                type: 'quiz',
                title: 'Stringify JSON',
                code: [
                    { text: 'const data = { id: 1, active: true };', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const json = JSON.', type: 'normal' },
                    { text: '', blank: true, answer: 'stringify', id: 'b1' },
                    { text: '(data, null, 2);', type: 'normal' },
                    { text: '\n' },
                    { text: '// Pretty-printed with 2-space indent', type: 'comment' },
                ],
                options: ['stringify', 'parse', 'encode', 'toString'],
                explanation: '<b>JSON.stringify()</b> converts an object to a JSON string. The third argument (<code>2</code>) adds indentation for readability.'
            },
            {
                type: 'quiz',
                title: 'Send JSON response',
                code: [
                    { text: 'app.get("/api/users", (req, res) => {', type: 'normal' },
                    { text: '\n' },
                    { text: '  const users = [{ name: "Ana" }];', type: 'normal' },
                    { text: '\n' },
                    { text: '  res.', type: 'normal' },
                    { text: '', blank: true, answer: 'json', id: 'b1' },
                    { text: '(users);', type: 'normal' },
                    { text: '\n' },
                    { text: '});', type: 'normal' },
                ],
                options: ['json', 'send', 'write', 'stringify'],
                explanation: '<b>res.json()</b> sends a JSON response with the correct Content-Type header. It also calls JSON.stringify for you.'
            },
            {
                type: 'quiz',
                title: 'Read JSON file',
                code: [
                    { text: 'const fs = require("fs");', type: 'normal' },
                    { text: '\n\n' },
                    { text: 'const raw = fs.readFileSync("data.json", "utf-8");', type: 'normal' },
                    { text: '\n' },
                    { text: 'const config = JSON.', type: 'normal' },
                    { text: '', blank: true, answer: 'parse', id: 'b1' },
                    { text: '(raw);', type: 'normal' },
                ],
                options: ['parse', 'stringify', 'read', 'load'],
                explanation: 'Reading a JSON file is two steps: <b>readFileSync</b> gets the string, <b>JSON.parse</b> converts it to an object.'
            }
        ]
    }
];
