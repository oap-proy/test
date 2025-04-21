# Simulador de Swarm Robotics

Este es un simulador básico desarrollado con p5.js para experimentar con algoritmos de robótica de enjambre.

## Estructura del Proyecto

- `index.html`: Archivo HTML principal que carga p5.js y el sketch
- `sketch.js`: Archivo JavaScript principal que contiene la lógica del simulador

## Cómo Ejecutar

1. Abre el archivo `index.html` en tu navegador web
2. El simulador se ejecutará automáticamente

La escala de las dimensiones sera relativa a pixeles. Estoy considerando la siguiente relacion:   1 pixel = 1 cm

la ubicacion de los sensores es en el perimetro del circulo que representa al robot. la ubicacion la asignare relativa al heading. Teniendo presente que el heading esta sobre el eje x, pienso asignar angulos positivos a los sensores ubicados en sentido anti-horario (eje y positivo) y negativo a los angulos horarios (eje y negativo).