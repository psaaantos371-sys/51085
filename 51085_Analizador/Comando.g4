grammar Comando;

// ── Regla principal (axioma) ──────────────────────────────────────────────────
programa        : comando+ EOF ;

// ── Comando ───────────────────────────────────────────────────────────────────
comando         : prefijoComando nombreComando argumento* ;

// ── Prefijo ───────────────────────────────────────────────────────────────────
prefijoComando  : EXCL | SLASH | HASH | AMPERSAND ;

// ── Nombre del comando ────────────────────────────────────────────────────────
nombreComando   : PALABRA ;

// ── Argumento ─────────────────────────────────────────────────────────────────
argumento       : argumentoPosicional
                | argumentoOpcional ;

argumentoPosicional : texto       #argTexto
                    | PALABRA     #argPalabra
                    | NUMERO      #argNumero ;

argumentoOpcional   : DASHDASH nombreArgumento (IGUAL valorArgumento)?   #argLargo
                    | DASH LETRA (valorArgumento)?                        #argCorto ;

nombreArgumento : PALABRA ;

valorArgumento  : texto           #valTexto
                | NUMERO          #valNumero
                | PALABRA         #valPalabra ;

// ── Texto (cadenas entre comillas) ────────────────────────────────────────────
texto           : TEXTO_SIMPLE | TEXTO_DOBLE ;

// ── Tokens ────────────────────────────────────────────────────────────────────
EXCL        : '!' ;
SLASH       : '/' ;
HASH        : '#' ;
AMPERSAND   : '&' ;

DASHDASH    : '--' ;
DASH        : '-' ;
IGUAL       : '=' ;

TEXTO_SIMPLE : '\'' (~['\\] | '\\' .)* '\'' ;
TEXTO_DOBLE  : '"'  (~["\\] | '\\' .)* '"'  ;

NUMERO      : [0-9]+ ('.' [0-9]+)? ;

// Palabra: comienza con letra (incluye tildes y ñ), puede tener letras, dígitos, _
PALABRA     : [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ] [a-zA-Z0-9_áéíóúÁÉÍÓÚüÜñÑ]* ;

LETRA       : [a-zA-Z] ;

WS          : [ \t\r\n]+ -> skip ;
