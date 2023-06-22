# colorGame
[https://toffycaluga.github.io/colorGame/](https://github.com/toffycaluga/colorGame/blob/main/img/project-2.png)

Este código fue creado por ToffyCaluga y es un juego simple de adivinanza de colores. El objetivo del juego es emparejar el color mostrado con el cuadro de color correcto.

## Cómo jugar

1. Cuando ejecutes el código, verás una cuadrícula de cuadros de colores.
2. El valor RGB del color objetivo se mostrará en la parte superior.
3. Haz clic en el cuadro que creas que coincide con el color objetivo.
4. Si adivinas correctamente, todos los cuadros y el color de fondo cambiarán al color correcto, y se mostrará un mensaje "¡Ganaste!".
5. Si adivinas incorrectamente, el cuadro seleccionado desaparecerá y se mostrará un mensaje "Inténtalo de nuevo".
6. Haz clic en el botón "Jugar de nuevo" para reiniciar el juego y generar nuevos colores.

## Explicación del código

- El código genera un conjunto aleatorio de colores utilizando la función `generateRandomColors()`.
- Asigna los colores generados a los cuadros de la cuadrícula.
- El color objetivo se elige al azar utilizando la función `pickColor()` y se muestra en la parte superior.
- Se agregan escuchadores de eventos a cada cuadro para manejar el evento de clic.
- Si el color clicado coincide con el color objetivo, se llama a la función `changeColorCorrect()`, que actualiza los colores, el fondo y los mensajes para indicar una suposición correcta.
- Si el color clicado no coincide con el color objetivo, se llama a la función changeColorFail(), que actualiza el color del cuadro clicado y muestra un mensaje de "Inténtalo de nuevo".
- El botón "Reiniciar" permite al usuario comenzar un nuevo juego generando nuevos colores y restableciendo la interfaz de usuario.
  -Los botones "Fácil" y "Difícil" proporcionan dos niveles de dificultad. El nivel "Fácil" muestra tres cuadros, mientras que el nivel "Difícil" muestra seis cuadros.

¡Siéntete libre de explorar y modificar el código para mejorar el juego o agregar nuevas características
