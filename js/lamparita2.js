// Encender a los segundos impares y multiplos de 3
function estadoL2(segundos) {
  return segundos % 2 != 0 && segundos % 3 == 0;
}
