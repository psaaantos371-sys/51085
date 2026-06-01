# Analizador de Comandos - Tema 25914_20

## DESCRIPCIÓN DEL PROYECTO

Este proyecto consiste en un analizador que procesa un archivo de entrada **input.txt** con comandos escritos en un lenguaje específico, desarrollado utilizando **ANTLR4** con **JavaScript**. El funcionamiento del programa consiste en:

**- Análisis léxico:**

El analizador recibe el comando desde el archivo input.txt y lo procesa carácter por carácter para identificar los lexemas del lenguaje. Cada lexema es clasificado en un token específico definido en la gramática, como prefijos, palabras, números, textos entre comillas y argumentos opcionales. Como resultado, se genera una tabla de lexemas y tokens, que incluye además la línea y columna donde cada elemento fue encontrado.

**- Análisis sintáctico:**

El analizador verifica que la estructura del comando respete la gramática definida. Si es correcta, se construye un árbol de análisis sintáctico. En caso de errores, se indica la línea y causa del problema.

**- Construcción del árbol sintáctico:**

El árbol generado puede visualizarse en dos formatos: formato compacto tipo ANTLR y representación visual en forma jerárquica con el plugin de VS Code. Esto permite comprender cómo interpreta la estructura del comando.

**- Traducción e interpretación:**

El analizador traduce el comando a código JavaScript equivalente según su prefijo. Una vez traducido, es ejecutado simulando el comportamiento de un intérprete básico. Finalmente, se muestra el resultado.

Los prefijos determinan el tipo de traducción:
- `!` → Define y llama una función JavaScript
- `/` → Llama una función capturando su resultado
- `#` → Genera una directiva de configuración (comentario)
- `&` → Genera una llamada asíncrona (`await`)

---

## ¿CÓMO INSTALAR EL PROYECTO?

Para poder usar este proyecto, primero hay que descargarlo y abrirlo en Visual Studio Code.

Para abrir el proyecto en VS Code ir a **File → Open Folder**:

![Imagen 1](images/1-IMAGEN.png)

Seleccionar la carpeta **analizador-comandos-25914**:

![Imagen 2](images/2-IMAGEN.png)

Luego entrar y seleccionar la carpeta **analizador-comandos** y hacer click en **Select Folder**:

![Imagen 3](images/3-IMAGEN.png)

Una vez abierto el proyecto, abrir la terminal con **Ctrl + Ñ** e instalar las dependencias con:

```
npm install
```

![Imagen 4](images/4-IMAGEN.png)

---

## INSTRUCCIONES DE USO

El programa utiliza el archivo **input.txt** para leer el comando o comandos a analizar. Una vez escrito el contenido, desde la terminal ejecutar:

```
node index.js
```

Una vez ejecutado, el sistema realiza automáticamente:

- Análisis léxico
- Análisis sintáctico
- Construcción del árbol de derivación
- Traducción a JavaScript
- Ejecución del código interpretado

Así, muestra en consola:

- Tabla de lexemas y tokens
- Confirmación de si la entrada es válida o inválida
- Árbol sintáctico en formato texto
- Código JavaScript generado
- Resultado de la ejecución

![Imagen 5](images/5-IMAGEN.png)

![Imagen 6](images/6-IMAGEN.png)

Para probar distintos casos, se puede editar el archivo **input.txt**, guardar los cambios con **Ctrl + S** y volver a ejecutar `node index.js`.

---

## EJEMPLOS VÁLIDOS E INVÁLIDOS

Los archivos de ejemplo se encuentran en la raíz del proyecto:

- `Ejemplo_valido_1.txt` → comando correcto con argumento posicional y opcional largo
- `Ejemplo_valido_2.txt` → múltiples comandos con distintos prefijos
- `Ejemplo_invalido_1.txt` → error: falta el nombre del comando
- `Ejemplo_invalido_2.txt` → error: falta el prefijo obligatorio

Para probarlos:

1. Abrir el archivo correspondiente y copiar el contenido
2. Pegarlo en el archivo **input.txt**
3. Guardar con **Ctrl + S**
4. Ejecutar en la terminal: `node index.js`

---

## ÁRBOL VISUAL

Para ver el árbol de forma gráfica, abrir el archivo **Comando.g4** y presionar **F5**. Se abre un panel a la derecha con el árbol visual generado por el plugin ANTLR4.

> ⚠️ Importante: asegurarse de tener el archivo **input.txt** con una entrada válida antes de presionar F5. También es necesario tener instalada la extensión **ANTLR4 grammar syntax support** de Mike Lischke y configurado el `.vscode/launch.json` incluido en el proyecto.

![Imagen 7](images/7-IMAGEN.png)
