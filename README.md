# Registro de Atención Veterinaria

Aplicación web para registrar mascotas que llegan a una clínica veterinaria, validar la información ingresada y mostrar el listado de pacientes sin recargar la página.

## Uso de Inteligencia Artificial

**1. ¿Qué herramienta utilizó?**

Utilicé Claude (Anthropic) como apoyo durante el desarrollo.

**2. ¿Qué consulta realizó?**

Le pedí ayuda para depurar mi aplicación, que no registraba mascotas ni mostraba errores en pantalla. Consulté por qué mis funciones no se conectaban correctamente entre el HTML y el JavaScript (ids que no coincidían), por qué `validarFormulario()` tiraba un error de sintaxis, y cómo escribir correctamente las condiciones de validación (por ejemplo, cómo comprobar que la edad fuera un número positivo en vez de comparar su cantidad de caracteres).

**3. ¿Qué sugerencia entregó la IA?**

La IA no me entregó el código resuelto de inmediato: en la mayoría de los casos me explicó *dónde* estaba el error y *por qué* ocurría (por ejemplo, que había declarado una variable dos veces en el mismo scope, o que estaba llamando a una función con menos argumentos de los que esperaba), y me guió con preguntas para que yo mismo escribiera la corrección. Cuando se lo pedí explícitamente, sí me entregó el código ya corregido para comparar con el mío.

**4. ¿La utilizó completamente o realizó modificaciones?**

Usé como base la estructura que fui construyendo yo mismo, y con las explicaciones de la IA corregí errores puntuales: ids desalineados entre `index.html` y `Scripts.js`, una redeclaración de variables dentro de `validarFormulario()`, el orden y cantidad de argumentos al llamar la función, y agregué por mi cuenta el uso de `trim()` en la validación y una estructura `else`. No copié una solución completa sin entenderla; fui aplicando los cambios de a uno y probando en el navegador.

**5. ¿Por qué considera importante revisar las respuestas generadas por la IA antes de utilizarlas?**

Porque la IA puede sugerir código que "se ve bien" pero no calza exactamente con la estructura del propio proyecto (por ejemplo, nombres de variables o ids distintos a los que yo ya tenía definidos), o puede no captar de inmediato la lógica específica que pide el enunciado. Revisar cada cambio, probarlo y entender por qué funciona (en vez de solo copiarlo) es lo que permite detectar errores, aprender el porqué de cada corrección, y asegurarse de que el código final realmente cumpla con lo que pide la evaluación.