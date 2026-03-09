const fs = require('fs');

const NEW_MODULES = [
    {
        id: 'py-lists',
        category: 'py',
        title: 'Python Lists',
        desc: 'Arrays and Tuples in Python',
        icon: '📋',
        xp: 60,
        steps: [
            {
                type: 'theory',
                title: 'Lists vs Tuples',
                body: 'In Python, a <code>list</code> is mutable (can be changed) and defined with brackets <code>[]</code>. A <code>tuple</code> is immutable and defined with parentheses <code>()</code>.'
            },
            {
                type: 'quiz',
                title: 'Create a list',
                code: [
                    { text: 'colors = ', type: 'normal' },
                    { text: '', blank: true, answer: '[', id: 'b1' },
                    { text: '"red", "blue"', type: 'normal' },
                    { text: '', blank: true, answer: ']', id: 'b2' },
                    { text: '\ncolors.append("green")\n', type: 'normal' }
                ],
                options: ['[', ']', '(', ')', '{'],
                explanation: 'Lists are created using square brackets <b>[]</b> and can be modified with methods like <code>.append()</code>.'
            }
        ]
    },
    {
        id: 'py-dicts',
        category: 'py',
        title: 'Dictionaries',
        desc: 'Key-value pairs in Python',
        icon: '📖',
        xp: 60,
        steps: [
            {
                type: 'theory',
                title: 'Python Dictionaries',
                body: 'Python dictionaries store data in key-value pairs, similar to JavaScript objects. They are defined using curly braces <code>{}</code>.'
            },
            {
                type: 'quiz',
                title: 'Access a dictionary',
                code: [
                    { text: 'user = {"name": "Alice", "age": 25}\n', type: 'normal' },
                    { text: 'print(user', type: 'normal' },
                    { text: '', blank: true, answer: '[', id: 'b1' },
                    { text: '"name"', type: 'normal' },
                    { text: '', blank: true, answer: ']', id: 'b2' },
                    { text: ')\n', type: 'normal' }
                ],
                options: ['[', ']', '(', ')', '.'],
                explanation: 'In Python, dictionary values are accessed using bracket notation <b>[]</b> with the key as a string.'
            }
        ]
    },
    {
        id: 'py-loops',
        category: 'py',
        title: 'Loops',
        desc: 'For & While loops in Python',
        icon: '🔁',
        xp: 65,
        steps: [
            {
                type: 'theory',
                title: 'For Loops',
                body: 'Python <code>for</code> loops iterate over sequences (like lists or strings). There is no traditional C-style <code>for(i=0; i<n; i++)</code> loop.'
            },
            {
                type: 'quiz',
                title: 'Loop over a list',
                code: [
                    { text: 'nums = [1, 2, 3]\n', type: 'normal' },
                    { text: '', blank: true, answer: 'for', id: 'b1' },
                    { text: ' n ', type: 'normal' },
                    { text: '', blank: true, answer: 'in', id: 'b2' },
                    { text: ' nums:\n    print(n)\n', type: 'normal' }
                ],
                options: ['for', 'in', 'of', 'while'],
                explanation: 'Python uses the <b>for ... in ...</b> syntax to iterate through elements of a sequence.'
            }
        ]
    },
    {
        id: 'py-classes',
        category: 'py',
        title: 'Classes',
        desc: 'Object-Oriented Python',
        icon: '🏗️',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Creating Classes',
                body: 'Classes in Python are created using the <code>class</code> keyword. The constructor method is always named <code>__init__</code>.'
            },
            {
                type: 'quiz',
                title: 'Define a class',
                code: [
                    { text: '', blank: true, answer: 'class', id: 'b1' },
                    { text: ' Dog:\n    def ', type: 'normal' },
                    { text: '', blank: true, answer: '__init__', id: 'b2' },
                    { text: '(self, name):\n        self.name = name\n', type: 'normal' }
                ],
                options: ['class', '__init__', 'constructor', 'def'],
                explanation: 'Use <b>class</b> to define a class and <b>__init__</b> as the constructor method.'
            }
        ]
    },
    {
        id: 'py-exceptions',
        category: 'py',
        title: 'Exceptions',
        desc: 'Try/Except blocks',
        icon: '⚠️',
        xp: 70,
        steps: [
            {
                type: 'theory',
                title: 'Handling Errors',
                body: 'Python uses <code>try</code> and <code>except</code> blocks to handle errors gracefully, similar to <code>try / catch</code> in JS.'
            },
            {
                type: 'quiz',
                title: 'Catch an error',
                code: [
                    { text: '', blank: true, answer: 'try', id: 'b1' },
                    { text: ':\n    res = 10 / 0\n', type: 'normal' },
                    { text: '', blank: true, answer: 'except', id: 'b2' },
                    { text: ' ZeroDivisionError:\n    print("Error!")\n', type: 'normal' }
                ],
                options: ['try', 'except', 'catch', 'error'],
                explanation: 'Python uses <b>try</b> to test a block of code, and <b>except</b> to handle the error.'
            }
        ]
    },
    {
        id: 'py-imports',
        category: 'py',
        title: 'Imports',
        desc: 'Modules and Packages',
        icon: '📦',
        xp: 65,
        steps: [
            {
                type: 'theory',
                title: 'Importing Modules',
                body: 'You can include external code using the <code>import</code> keyword, or import specific parts using <code>from ... import ...</code>.'
            },
            {
                type: 'quiz',
                title: 'Import a module',
                code: [
                    { text: '', blank: true, answer: 'import', id: 'b1' },
                    { text: ' math\n\nprint(math.sqrt(16))\n', type: 'normal' }
                ],
                options: ['import', 'include', 'require', 'from'],
                explanation: 'The <b>import</b> keyword is used to bring an entire module into your script.'
            }
        ]
    },
    {
        id: 'py-comprehensions',
        category: 'py',
        title: 'List Comprehensions',
        desc: 'Elegant list creation',
        icon: '🌟',
        xp: 80,
        steps: [
            {
                type: 'theory',
                title: 'What are Comprehensions?',
                body: 'List comprehensions provide a shorter syntax to create a new list based on the values of an existing list.'
            },
            {
                type: 'quiz',
                title: 'Double every number',
                code: [
                    { text: 'nums = [1, 2, 3]\n', type: 'normal' },
                    { text: 'doubled = [n * 2 ', type: 'normal' },
                    { text: '', blank: true, answer: 'for', id: 'b1' },
                    { text: ' n ', type: 'normal' },
                    { text: '', blank: true, answer: 'in', id: 'b2' },
                    { text: ' nums]\n', type: 'normal' }
                ],
                options: ['for', 'in', 'of', 'if'],
                explanation: 'A list comprehension resembles a backwards for loop: <code>[expression <b>for</b> item <b>in</b> list]</code>.'
            }
        ]
    },
    {
        id: 'py-lambda',
        category: 'py',
        title: 'Lambda Functions',
        desc: 'Anonymous functions',
        icon: 'λ',
        xp: 75,
        steps: [
            {
                type: 'theory',
                title: 'Lambda syntax',
                body: 'A <code>lambda</code> function is a small anonymous function. It can take any number of arguments, but can only have one expression.'
            },
            {
                type: 'quiz',
                title: 'Create a lambda',
                code: [
                    { text: 'double = ', type: 'normal' },
                    { text: '', blank: true, answer: 'lambda', id: 'b1' },
                    { text: ' x', type: 'normal' },
                    { text: '', blank: true, answer: ':', id: 'b2' },
                    { text: ' x * 2\n\nprint(double(5))\n', type: 'normal' }
                ],
                options: ['lambda', ':', '->', 'def'],
                explanation: 'The <b>lambda</b> keyword declares an anonymous function, and a <b>:</b> separates the arguments from the expression.'
            }
        ]
    }
];

const dict = {
  // Titles & Desc
  "Python Lists": "Listes Python",
  "Arrays and Tuples in Python": "Tableaux et Tuples en Python",
  "Dictionaries": "Dictionnaires",
  "Key-value pairs in Python": "Paires clé-valeur en Python",
  "Loops": "Boucles",
  "For & While loops in Python": "Boucles For & While en Python",
  "Classes": "Classes",
  "Object-Oriented Python": "Python orienté objet",
  "Exceptions": "Exceptions",
  "Try/Except blocks": "Blocs Try/Except",
  "Imports": "Importations",
  "Modules and Packages": "Modules et Paquets",
  "List Comprehensions": "Compréhensions de Liste",
  "Elegant list creation": "Création de liste élégante",
  "Lambda Functions": "Fonctions Lambda",
  "Anonymous functions": "Fonctions anonymes",

  // Theory Titles
  "Lists vs Tuples": "Listes vs Tuples",
  "Python Dictionaries": "Dictionnaires Python",
  "For Loops": "Boucles For",
  "Creating Classes": "Création de Classes",
  "Handling Errors": "Gestion des Erreurs",
  "Importing Modules": "Importer des Modules",
  "What are Comprehensions?": "Que sont les compréhensions ?",
  "Lambda syntax": "Syntaxe Lambda",

  // Quiz Titles
  "Create a list": "Créer une liste",
  "Access a dictionary": "Accéder à un dictionnaire",
  "Loop over a list": "Boucler sur une liste",
  "Define a class": "Définir une classe",
  "Catch an error": "Attraper une erreur",
  "Import a module": "Importer un module",
  "Double every number": "Doubler chaque nombre",
  "Create a lambda": "Créer une lambda",

  // Theory bodies
  "In Python, a <code>list</code> is mutable (can be changed) and defined with brackets <code>[]</code>. A <code>tuple</code> is immutable and defined with parentheses <code>()</code>.": "En Python, une <code>liste</code> (list) est mutable (peut être modifiée) et définie avec des crochets <code>[]</code>. Un <code>tuple</code> est immuable et défini avec des parenthèses <code>()</code>.",
  "Python dictionaries store data in key-value pairs, similar to JavaScript objects. They are defined using curly braces <code>{}</code>.": "Les dictionnaires Python stockent les données sous forme de paires clé-valeur, similaires aux objets JavaScript. Ils sont définis en utilisant des accolades <code>{}</code>.",
  "Python <code>for</code> loops iterate over sequences (like lists or strings). There is no traditional C-style <code>for(i=0; i<n; i++)</code> loop.": "Les boucles <code>for</code> en Python itèrent sur des séquences (comme des listes ou des chaînes). Il n'y a pas de boucle traditionnelle de style C <code>for(i=0; i<n; i++)</code>.",
  "Classes in Python are created using the <code>class</code> keyword. The constructor method is always named <code>__init__</code>.": "Les classes en Python sont créées à l'aide du mot-clé <code>class</code>. La méthode constructeur est toujours nommée <code>__init__</code>.",
  "Python uses <code>try</code> and <code>except</code> blocks to handle errors gracefully, similar to <code>try / catch</code> in JS.": "Python utilise des blocs <code>try</code> et <code>except</code> pour gérer gracieusement les erreurs, similairement à <code>try / catch</code> en JS.",
  "You can include external code using the <code>import</code> keyword, or import specific parts using <code>from ... import ...</code>.": "Vous pouvez inclure du code externe en utilisant le mot-clé <code>import</code>, ou importer des parties spécifiques en utilisant <code>from ... import ...</code>.",
  "List comprehensions provide a shorter syntax to create a new list based on the values of an existing list.": "Les compréhensions de listes offrent une syntaxe plus courte pour créer une nouvelle liste en fonction des valeurs d'une liste existante.",
  "A <code>lambda</code> function is a small anonymous function. It can take any number of arguments, but can only have one expression.": "Une fonction <code>lambda</code> est une petite fonction anonyme. Elle peut prendre n'importe quel nombre d'arguments, mais ne peut avoir qu'une seule expression.",

  // Explanations
  "Lists are created using square brackets <b>[]</b> and can be modified with methods like <code>.append()</code>.": "Les listes sont créées à l'aide de crochets <b>[]</b> et peuvent être modifiées avec des méthodes telles que <code>.append()</code>.",
  "In Python, dictionary values are accessed using bracket notation <b>[]</b> with the key as a string.": "En Python, les valeurs des dictionnaires sont accessibles en utilisant la notation des crochets <b>[]</b> avec la clé comme chaîne.",
  "Python uses the <b>for ... in ...</b> syntax to iterate through elements of a sequence.": "Python utilise la syntaxe <b>for ... in ...</b> pour itérer à travers les éléments d'une séquence.",
  "Use <b>class</b> to define a class and <b>__init__</b> as the constructor method.": "Utilisez <b>class</b> pour définir une classe et <b>__init__</b> comme méthode constructeur.",
  "Python uses <b>try</b> to test a block of code, and <b>except</b> to handle the error.": "Python utilise <b>try</b> pour tester un bloc de code, et <b>except</b> pour gérer l'erreur.",
  "The <b>import</b> keyword is used to bring an entire module into your script.": "Le mot-clé <b>import</b> est utilisé pour introduire un module entier dans votre script.",
  "A list comprehension resembles a backwards for loop: <code>[expression <b>for</b> item <b>in</b> list]</code>.": "Une compréhension de liste ressemble à une boucle for à l'envers : <code>[expression <b>for</b> item <b>in</b> list]</code>.",
  "The <b>lambda</b> keyword declares an anonymous function, and a <b>:</b> separates the arguments from the expression.": "Le mot-clé <b>lambda</b> déclare une fonction anonyme, et un <b>:</b> sépare les arguments de l'expression."
};

function t(str) {
    if (!str) return str;
    if (dict[str]) return dict[str];
    return str;
}

// 1. Read existing modules
const code = fs.readFileSync('public/modules.js', 'utf8');
fs.writeFileSync('temp_modules.js', code.replace('const MODULES =', 'module.exports = ').replace(/;$/, ''));
const EXISTING_MODULES = require('./temp_modules.js');

// 2. Append new modules
const ALL_MODULES = [...EXISTING_MODULES, ...NEW_MODULES];

// 3. Write back ALL to public/modules.js
fs.writeFileSync('public/modules.js', 'const MODULES = ' + JSON.stringify(ALL_MODULES, null, 2) + ';');

// 4. Translate ALL modules to French
const FR_ALL_MODULES = ALL_MODULES.map(mod => {
    // If it's one of the already translated ones, we still need to try translating it 
    // Wait, the previous translated ones are already in public/modules_fr.js
    // Let's just generate FR from scratch since we have dict and for the old ones we can just load them
    return {
        ...mod,
        title: t(mod.title),
        desc: t(mod.desc),
        steps: mod.steps.map(step => ({
            ...step,
            title: t(step.title),
            body: t(step.body),
            explanation: t(step.explanation)
        }))
    }
});

// To perfectly preserve old translations, we'll grab them from public/modules_fr.js
const codeFr = fs.readFileSync('public/modules_fr.js', 'utf8');
fs.writeFileSync('temp_modules_fr.js', codeFr.replace('const MODULES_FR =', 'module.exports = ').replace(/;$/, ''));
const OLD_FR_MODULES = require('./temp_modules_fr.js');

// Merge old FR and new FR
const FINAL_FR = ALL_MODULES.map(mod => {
    const oldFr = OLD_FR_MODULES.find(m => m.id === mod.id);
    if (oldFr) return oldFr; // keep existing exactly as is

    return {
        ...mod,
        title: t(mod.title),
        desc: t(mod.desc),
        steps: mod.steps.map(step => ({
            ...step,
            title: t(step.title),
            body: t(step.body),
            explanation: t(step.explanation)
        }))
    }
});

fs.writeFileSync('public/modules_fr.js', 'const MODULES_FR = ' + JSON.stringify(FINAL_FR, null, 2) + ';');
fs.unlinkSync('temp_modules.js');
fs.unlinkSync('temp_modules_fr.js');

console.log('Appended 8 new Python modules and translated to French successfully!');
