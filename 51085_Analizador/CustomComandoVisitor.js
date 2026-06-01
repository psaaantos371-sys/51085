import ComandoVisitor from './generated/ComandoVisitor.js';

/**
 * CustomComandoVisitor
 * Recorre el árbol sintáctico y traduce cada comando al equivalente
 * JavaScript que lo simularía como un intérprete básico.
 */
export default class CustomComandoVisitor extends ComandoVisitor {

  constructor() {
    super();
    this.lineasJS = [];   // Líneas de código JavaScript generado
  }

  // ── programa: recorre todos los comandos ─────────────────────────────────
  visitPrograma(ctx) {
    for (const cmd of ctx.comando()) {
      this.visit(cmd);
    }
    return this.lineasJS.join('\n');
  }

  // ── comando: traduce un comando completo ──────────────────────────────────
  visitComando(ctx) {
    const prefijo = ctx.prefijoComando().getText();
    const nombre  = ctx.nombreComando().getText();
    const args    = ctx.argumento ? ctx.argumento() : [];

    // Construir la lista de argumentos posicionales y opcionales
    const posicionales = [];
    const opcionales   = {};

    for (const arg of args) {
      const inner = arg.getChild(0);
      const tipo  = inner.constructor.name;

      if (tipo === 'ArgTextoContext' || tipo === 'ArgPalabraContext' || tipo === 'ArgNumeroContext') {
        posicionales.push(this._extraerValorPosicional(inner));
      } else if (tipo === 'ArgLargoContext') {
        const clave = inner.nombreArgumento().getText();
        const valCtx = inner.valorArgumento ? inner.valorArgumento() : null;
        opcionales[clave] = valCtx ? this._extraerValorArgumento(valCtx) : 'true';
      } else if (tipo === 'ArgCortoContext') {
        const clave = inner.LETRA().getText();
        const valCtx = inner.valorArgumento ? inner.valorArgumento() : null;
        opcionales[clave] = valCtx ? this._extraerValorArgumento(valCtx) : 'true';
      }
    }

    // Generar el código JavaScript según el tipo de prefijo
    const jsLine = this._generarJS(prefijo, nombre, posicionales, opcionales);
    this.lineasJS.push(jsLine);
    return jsLine;
  }

  // ── Extrae el valor de un argumento posicional ────────────────────────────
  _extraerValorPosicional(inner) {
    const tipo = inner.constructor.name;
    if (tipo === 'ArgTextoContext') {
      const raw = inner.texto().getText();
      return raw; // ya viene con comillas
    } else if (tipo === 'ArgNumeroContext') {
      return inner.getText();
    } else {
      // Palabra: se trata como string
      return `"${inner.getText()}"`;
    }
  }

  // ── Extrae el valor de un valorArgumento ──────────────────────────────────
  _extraerValorArgumento(valCtx) {
    const inner = valCtx.getChild(0);
    const tipo  = inner.constructor.name;
    if (tipo === 'ValTextoContext') {
      return inner.texto().getText();
    } else if (tipo === 'ValNumeroContext') {
      return inner.getText();
    } else {
      return `"${inner.getText()}"`;
    }
  }

  // ── Genera el código JavaScript equivalente al comando ───────────────────
  _generarJS(prefijo, nombre, posicionales, opcionales) {
    const optsEntries = Object.entries(opcionales);

    switch (prefijo) {
      case '!': {
        // ! nombreFuncion args...  →  function nombreFuncion(param1, ...) { console.log(param1, ...); }
        // con llamada inmediata
        const params = posicionales.map((_, i) => `param${i + 1}`).join(', ');
        const cuerpo = this._cuerpoSegunOpciones(nombre, posicionales, opcionales);
        const llamada = `${nombre}(${posicionales.join(', ')});`;
        return `function ${nombre}(${params}) {\n  ${cuerpo}\n}\n${llamada}`;
      }

      case '/': {
        // / nombre args  →  const resultado = nombre(args); console.log(resultado);
        const argsStr = posicionales.join(', ');
        const optsStr = optsEntries.length > 0
          ? (posicionales.length > 0 ? ', ' : '') + `{ ${optsEntries.map(([k, v]) => `${k}: ${v}`).join(', ')} }`
          : '';
        return `const resultado_${nombre} = ${nombre}(${argsStr}${optsStr});\nconsole.log(resultado_${nombre});`;
      }

      case '#': {
        // # nombre args  →  // Comentario o configuración
        const config = [
          ...posicionales.map((v, i) => `arg${i + 1} = ${v}`),
          ...optsEntries.map(([k, v]) => `${k} = ${v}`)
        ].join(', ');
        return `// Configuración [${nombre}]: ${config || '(sin parámetros)'}`;
      }

      case '&': {
        // & nombre args  →  proceso asíncrono
        const argsStr = posicionales.join(', ');
        const optsStr = optsEntries.length > 0
          ? (posicionales.length > 0 ? ', ' : '') + `{ ${optsEntries.map(([k, v]) => `${k}: ${v}`).join(', ')} }`
          : '';
        return `await ${nombre}(${argsStr}${optsStr});`;
      }

      default:
        return `// Comando desconocido: ${prefijo}${nombre}`;
    }
  }

  // ── Genera el cuerpo de la función según opciones ─────────────────────────
  _cuerpoSegunOpciones(nombre, posicionales, opcionales) {
    const modoFormal = opcionales['modo'] === '"formal"' || opcionales['modo'] === 'formal';
    const modoCortes = opcionales['m'] === '"cortes"'   || opcionales['m']    === 'cortes';
    const verbose    = opcionales['verbose'] === 'true' || opcionales['v']    === 'true';

    if (posicionales.length > 0) {
      const param = `param1`;
      if (modoFormal) {
        return `console.log("Buenos días,", ${param});`;
      } else if (modoCortes) {
        return `console.log("Cordialmente,", ${param});`;
      } else if (verbose) {
        return `console.log("[${nombre}] Ejecutando con", ${param});`;
      } else {
        return `console.log("Hola,", ${param});`;
      }
    }

    const logArgs = posicionales.length > 0
      ? posicionales.map((_, i) => `param${i + 1}`).join(', ')
      : `"${nombre}"`;
    return `console.log(${logArgs});`;
  }
}
