// Encender cuando la lamparita 1 y 2 esten encendidas o las lamparitas 3 y 4 esten apagadas o las lamparita 5 este encendida y la lamparita 6 este apagada
function estadoL10(l1, l2, l3, l4, l5, l6) {
  return (l1 && l2) || (!l3 && !l4) || (l5 && !l6);
}
