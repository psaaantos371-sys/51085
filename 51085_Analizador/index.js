import fs from 'fs';
import antlr4 from 'antlr4';
import ComandoLexer from './generated/ComandoLexer.js';
import ComandoParser from './generated/ComandoParser.js';
import CustomComandoVisitor from './CustomComandoVisitor.js';

// ─────────────────────────────────────────────────────────────────────────────
// 1. LECTURA DE LA ENTRADA
// ─────────────────────────────────────────────────────────────────────────────
let input;
try {
  input = fs.readFileSync('input.txt', 'utf8').trim();
} catch (err) {
  console.error('❌ No se encontró el archivo input.txt');
  process.exit(1);
}

console.log('═══════════════════════════════════════════════════');
console.log('   ANALIZADOR DE COMANDOS - ANTLR4 / Tema 25914_20 ');
console.log('═══════════════════════════════════════════════════');
console.log(`\n📄 Entrada:\n${input}\n`);

// ─────────────────────────────────────────────────────────────────────────────
// 2. ANÁLISIS LÉXICO  →  TABLA DE LEXEMAS-TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const charsForLexer   = new antlr4.InputStream(input);
const lexerForTokens  = new ComandoLexer(charsForLexer);

const lexErrors = [];
lexerForTokens.removeErrorListeners();
lexerForTokens.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    lexErrors.push(`  Línea ${line}:${column} → ${msg}`);
  }
});

const allTokens     = lexerForTokens.getAllTokens();
const symbolicNames = ComandoLexer.symbolicNames;

console.log('───────────────────────────────────────────────────');
console.log('  TABLA DE LEXEMAS Y TOKENS');
console.log('───────────────────────────────────────────────────');
console.log(` ${'#'.padEnd(5)} ${'LEXEMA'.padEnd(18)} ${'TOKEN'.padEnd(18)} ${'LÍNEA'.padEnd(7)} COLUMNA`);
console.log(' ' + '─'.repeat(60));

allTokens
  .filter(t => t.type !== antlr4.Token.EOF)
  .forEach((t, i) => {
    const tokenName = symbolicNames[t.type] ?? `T_${t.type}`;
    console.log(
      ` ${String(i + 1).padEnd(5)}` +
      ` ${t.text.padEnd(18)}` +
      ` ${tokenName.padEnd(18)}` +
      ` ${String(t.line).padEnd(7)}` +
      ` ${t.column}`
    );
  });

if (lexErrors.length > 0) {
  console.log('\n❌ Errores léxicos detectados:');
  lexErrors.forEach(e => console.log(e));
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. ANÁLISIS SINTÁCTICO
// ─────────────────────────────────────────────────────────────────────────────
const chars  = new antlr4.InputStream(input);
const lexer  = new ComandoLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ComandoParser(tokens);
parser.buildParseTrees = true;

const syntaxErrors = [];
parser.removeErrorListeners();
parser.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    syntaxErrors.push(`  Línea ${line}:${column} → ${msg}`);
  }
});

const tree = parser.programa();

console.log('\n───────────────────────────────────────────────────');
console.log('  ANÁLISIS LÉXICO Y SINTÁCTICO');
console.log('───────────────────────────────────────────────────');

if (syntaxErrors.length > 0 || lexErrors.length > 0) {
  console.log('❌ La entrada contiene errores:\n');
  [...lexErrors, ...syntaxErrors].forEach(e => console.log(e));
  process.exit(1);
} else {
  console.log('✅ Entrada válida. Sin errores léxicos ni sintácticos.\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. ÁRBOL DE ANÁLISIS SINTÁCTICO (texto)
// ─────────────────────────────────────────────────────────────────────────────
console.log('───────────────────────────────────────────────────');
console.log('  ÁRBOL DE ANÁLISIS SINTÁCTICO (formato texto)');
console.log('───────────────────────────────────────────────────');
const cadenaArbol = tree.toStringTree(parser.ruleNames);
console.log(cadenaArbol);

// ─────────────────────────────────────────────────────────────────────────────
// 5. TRADUCCIÓN A JAVASCRIPT
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n───────────────────────────────────────────────────');
console.log('  TRADUCCIÓN A JAVASCRIPT');
console.log('───────────────────────────────────────────────────');

const visitor    = new CustomComandoVisitor();
const traduccion = visitor.visit(tree);
console.log(traduccion);

// ─────────────────────────────────────────────────────────────────────────────
// 6. INTERPRETACIÓN (EJECUCIÓN)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n───────────────────────────────────────────────────');
console.log('  INTERPRETACIÓN (RESULTADO)');
console.log('───────────────────────────────────────────────────');

try {
  // Preparar el código para ejecución:
  // - quitar comentarios de config (#)
  // - quitar await (ejecución síncrona)
  // - quitar declaraciones de función (ya se ejecutan inline)
  const lineas = traduccion.split('\n');
  const ejecutable = lineas
    .filter(l => !l.trim().startsWith('//'))
    .join('\n')
    .replace(/^await /gm, '')
    .trim();

  if (ejecutable.length > 0) {
    const salidas = [];
    const consoleMock = { log: (...args) => salidas.push(args.join(' ')) };

    // Generar stubs para funciones externas que aparezcan en llamadas directas
    // (las que no fueron definidas como function en el código generado)
    const funcionesDefinidas = new Set(
      [...ejecutable.matchAll(/^function (\w+)/gm)].map(m => m[1])
    );
    const llamadasExternas = [...ejecutable.matchAll(/\b(\w+)\s*\(/g)]
      .map(m => m[1])
      .filter(n => !funcionesDefinidas.has(n) && n !== 'console' && n !== 'Function');
    const stubs = [...new Set(llamadasExternas)]
      .map(n => `function ${n}(...args) { return args.join(' '); }`)
      .join('\n');

    const fn = new Function('console', stubs + '\n' + ejecutable);
    fn(consoleMock);
    if (salidas.length > 0) {
      salidas.forEach(s => console.log('  ▶ ' + s));
    } else {
      console.log('  (Sin salida de ejecución)');
    }
  } else {
    console.log('  (Solo directivas de configuración, sin salida de ejecución)');
  }
} catch (e) {
  console.log('  Error al interpretar: ' + e.message);
}

console.log('\n═══════════════════════════════════════════════════\n');
