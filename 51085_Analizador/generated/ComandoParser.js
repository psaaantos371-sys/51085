// Generated from c:/Users/Psaaa/OneDrive/Desktop/analizador-comandos-25914/analizador-comandos/Comando.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ComandoListener from './ComandoListener.js';
import ComandoVisitor from './ComandoVisitor.js';

const serializedATN = [4,1,13,71,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,0,
1,0,1,1,1,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,2,1,2,1,3,1,3,1,4,1,4,3,4,
42,8,4,1,5,1,5,1,5,3,5,47,8,5,1,6,1,6,1,6,1,6,3,6,53,8,6,1,6,1,6,1,6,3,6,
58,8,6,3,6,60,8,6,1,7,1,7,1,8,1,8,1,8,3,8,67,8,8,1,9,1,9,1,9,0,0,10,0,2,
4,6,8,10,12,14,16,18,0,2,1,0,1,4,1,0,8,9,70,0,21,1,0,0,0,2,27,1,0,0,0,4,
35,1,0,0,0,6,37,1,0,0,0,8,41,1,0,0,0,10,46,1,0,0,0,12,59,1,0,0,0,14,61,1,
0,0,0,16,66,1,0,0,0,18,68,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,
0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,25,1,0,0,0,25,26,5,0,0,1,26,1,1,0,0,0,
27,28,3,4,2,0,28,32,3,6,3,0,29,31,3,8,4,0,30,29,1,0,0,0,31,34,1,0,0,0,32,
30,1,0,0,0,32,33,1,0,0,0,33,3,1,0,0,0,34,32,1,0,0,0,35,36,7,0,0,0,36,5,1,
0,0,0,37,38,5,11,0,0,38,7,1,0,0,0,39,42,3,10,5,0,40,42,3,12,6,0,41,39,1,
0,0,0,41,40,1,0,0,0,42,9,1,0,0,0,43,47,3,18,9,0,44,47,5,11,0,0,45,47,5,10,
0,0,46,43,1,0,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,11,1,0,0,0,48,49,5,5,0,
0,49,52,3,14,7,0,50,51,5,7,0,0,51,53,3,16,8,0,52,50,1,0,0,0,52,53,1,0,0,
0,53,60,1,0,0,0,54,55,5,6,0,0,55,57,5,12,0,0,56,58,3,16,8,0,57,56,1,0,0,
0,57,58,1,0,0,0,58,60,1,0,0,0,59,48,1,0,0,0,59,54,1,0,0,0,60,13,1,0,0,0,
61,62,5,11,0,0,62,15,1,0,0,0,63,67,3,18,9,0,64,67,5,10,0,0,65,67,5,11,0,
0,66,63,1,0,0,0,66,64,1,0,0,0,66,65,1,0,0,0,67,17,1,0,0,0,68,69,7,1,0,0,
69,19,1,0,0,0,8,23,32,41,46,52,57,59,66];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ComandoParser extends antlr4.Parser {

    static grammarFileName = "Comando.g4";
    static literalNames = [ null, "'!'", "'/'", "'#'", "'&'", "'--'", "'-'", 
                            "'='" ];
    static symbolicNames = [ null, "EXCL", "SLASH", "HASH", "AMPERSAND", 
                             "DASHDASH", "DASH", "IGUAL", "TEXTO_SIMPLE", 
                             "TEXTO_DOBLE", "NUMERO", "PALABRA", "LETRA", 
                             "WS" ];
    static ruleNames = [ "programa", "comando", "prefijoComando", "nombreComando", 
                         "argumento", "argumentoPosicional", "argumentoOpcional", 
                         "nombreArgumento", "valorArgumento", "texto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ComandoParser.ruleNames;
        this.literalNames = ComandoParser.literalNames;
        this.symbolicNames = ComandoParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComandoParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.comando();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0));
	        this.state = 25;
	        this.match(ComandoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComandoParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.prefijoComando();
	        this.state = 28;
	        this.nombreComando();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3936) !== 0)) {
	            this.state = 29;
	            this.argumento();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefijoComando() {
	    let localctx = new PrefijoComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComandoParser.RULE_prefijoComando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreComando() {
	    let localctx = new NombreComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ComandoParser.RULE_nombreComando);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(ComandoParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumento() {
	    let localctx = new ArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComandoParser.RULE_argumento);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.argumentoPosicional();
	            break;
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.argumentoOpcional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoPosicional() {
	    let localctx = new ArgumentoPosicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComandoParser.RULE_argumentoPosicional);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	            localctx = new ArgTextoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.texto();
	            break;
	        case 11:
	            localctx = new ArgPalabraContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.match(ComandoParser.PALABRA);
	            break;
	        case 10:
	            localctx = new ArgNumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.match(ComandoParser.NUMERO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoOpcional() {
	    let localctx = new ArgumentoOpcionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ComandoParser.RULE_argumentoOpcional);
	    var _la = 0;
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            localctx = new ArgLargoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.match(ComandoParser.DASHDASH);
	            this.state = 49;
	            this.nombreArgumento();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 50;
	                this.match(ComandoParser.IGUAL);
	                this.state = 51;
	                this.valorArgumento();
	            }

	            break;
	        case 6:
	            localctx = new ArgCortoContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(ComandoParser.DASH);
	            this.state = 55;
	            this.match(ComandoParser.LETRA);
	            this.state = 57;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 56;
	                this.valorArgumento();

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreArgumento() {
	    let localctx = new NombreArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ComandoParser.RULE_nombreArgumento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(ComandoParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorArgumento() {
	    let localctx = new ValorArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ComandoParser.RULE_valorArgumento);
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	            localctx = new ValTextoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.texto();
	            break;
	        case 10:
	            localctx = new ValNumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(ComandoParser.NUMERO);
	            break;
	        case 11:
	            localctx = new ValPalabraContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            this.match(ComandoParser.PALABRA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ComandoParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ComandoParser.EOF = antlr4.Token.EOF;
ComandoParser.EXCL = 1;
ComandoParser.SLASH = 2;
ComandoParser.HASH = 3;
ComandoParser.AMPERSAND = 4;
ComandoParser.DASHDASH = 5;
ComandoParser.DASH = 6;
ComandoParser.IGUAL = 7;
ComandoParser.TEXTO_SIMPLE = 8;
ComandoParser.TEXTO_DOBLE = 9;
ComandoParser.NUMERO = 10;
ComandoParser.PALABRA = 11;
ComandoParser.LETRA = 12;
ComandoParser.WS = 13;

ComandoParser.RULE_programa = 0;
ComandoParser.RULE_comando = 1;
ComandoParser.RULE_prefijoComando = 2;
ComandoParser.RULE_nombreComando = 3;
ComandoParser.RULE_argumento = 4;
ComandoParser.RULE_argumentoPosicional = 5;
ComandoParser.RULE_argumentoOpcional = 6;
ComandoParser.RULE_nombreArgumento = 7;
ComandoParser.RULE_valorArgumento = 8;
ComandoParser.RULE_texto = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(ComandoParser.EOF, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_comando;
    }

	prefijoComando() {
	    return this.getTypedRuleContext(PrefijoComandoContext,0);
	};

	nombreComando() {
	    return this.getTypedRuleContext(NombreComandoContext,0);
	};

	argumento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentoContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefijoComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_prefijoComando;
    }

	EXCL() {
	    return this.getToken(ComandoParser.EXCL, 0);
	};

	SLASH() {
	    return this.getToken(ComandoParser.SLASH, 0);
	};

	HASH() {
	    return this.getToken(ComandoParser.HASH, 0);
	};

	AMPERSAND() {
	    return this.getToken(ComandoParser.AMPERSAND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterPrefijoComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitPrefijoComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitPrefijoComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_nombreComando;
    }

	PALABRA() {
	    return this.getToken(ComandoParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterNombreComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitNombreComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitNombreComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_argumento;
    }

	argumentoPosicional() {
	    return this.getTypedRuleContext(ArgumentoPosicionalContext,0);
	};

	argumentoOpcional() {
	    return this.getTypedRuleContext(ArgumentoOpcionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoPosicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_argumentoPosicional;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArgNumeroContext extends ArgumentoPosicionalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(ComandoParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterArgNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitArgNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitArgNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ArgNumeroContext = ArgNumeroContext;

class ArgTextoContext extends ArgumentoPosicionalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterArgTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitArgTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitArgTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ArgTextoContext = ArgTextoContext;

class ArgPalabraContext extends ArgumentoPosicionalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PALABRA() {
	    return this.getToken(ComandoParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterArgPalabra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitArgPalabra(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitArgPalabra(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ArgPalabraContext = ArgPalabraContext;

class ArgumentoOpcionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_argumentoOpcional;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArgCortoContext extends ArgumentoOpcionalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DASH() {
	    return this.getToken(ComandoParser.DASH, 0);
	};

	LETRA() {
	    return this.getToken(ComandoParser.LETRA, 0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterArgCorto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitArgCorto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitArgCorto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ArgCortoContext = ArgCortoContext;

class ArgLargoContext extends ArgumentoOpcionalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DASHDASH() {
	    return this.getToken(ComandoParser.DASHDASH, 0);
	};

	nombreArgumento() {
	    return this.getTypedRuleContext(NombreArgumentoContext,0);
	};

	IGUAL() {
	    return this.getToken(ComandoParser.IGUAL, 0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterArgLargo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitArgLargo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitArgLargo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ArgLargoContext = ArgLargoContext;

class NombreArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_nombreArgumento;
    }

	PALABRA() {
	    return this.getToken(ComandoParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterNombreArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitNombreArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitNombreArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_valorArgumento;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValTextoContext extends ValorArgumentoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterValTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitValTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitValTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ValTextoContext = ValTextoContext;

class ValPalabraContext extends ValorArgumentoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PALABRA() {
	    return this.getToken(ComandoParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterValPalabra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitValPalabra(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitValPalabra(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ValPalabraContext = ValPalabraContext;

class ValNumeroContext extends ValorArgumentoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(ComandoParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterValNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitValNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitValNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ComandoParser.ValNumeroContext = ValNumeroContext;

class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandoParser.RULE_texto;
    }

	TEXTO_SIMPLE() {
	    return this.getToken(ComandoParser.TEXTO_SIMPLE, 0);
	};

	TEXTO_DOBLE() {
	    return this.getToken(ComandoParser.TEXTO_DOBLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandoListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandoVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ComandoParser.ProgramaContext = ProgramaContext; 
ComandoParser.ComandoContext = ComandoContext; 
ComandoParser.PrefijoComandoContext = PrefijoComandoContext; 
ComandoParser.NombreComandoContext = NombreComandoContext; 
ComandoParser.ArgumentoContext = ArgumentoContext; 
ComandoParser.ArgumentoPosicionalContext = ArgumentoPosicionalContext; 
ComandoParser.ArgumentoOpcionalContext = ArgumentoOpcionalContext; 
ComandoParser.NombreArgumentoContext = NombreArgumentoContext; 
ComandoParser.ValorArgumentoContext = ValorArgumentoContext; 
ComandoParser.TextoContext = TextoContext; 
