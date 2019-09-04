// Encender a los segundos impares o a los segundos multiplos de 10
function estadoL5(segundos) {
  return segundos % 2 == 1 || segundos % 10 == 0 && segundos != 0;
 }
