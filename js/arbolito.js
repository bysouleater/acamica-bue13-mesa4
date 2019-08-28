var prendido = false;
var segundos = 0;

function encender() {
  prendido = true;
  segundos = 0;
}

function apagar() {
  prendido = false;
}

function luz(lamparita) {
  return lamparita ? 'X' : '-';
}
setInterval(function() {
  if (prendido) {
    var l1 = estadoL1(segundos);
    var l2 = estadoL2(segundos);
    var l3 = estadoL3(l1);
    var l4 = estadoL4(l2, l3);
    var l5 = estadoL5(segundos);
    var l6 = estadoL6(l2, l3, l4);
    var l7 = estadoL7(l1, l2);
    var l8 = estadoL8(l1, l2, l3, l4, l5, l6, l7);
    var l9 = estadoL9(l1, l2, l3, l4, l5, l6, l7);
    var l10 = estadoL10();
    console.clear();
    console.log('[ ' + luz(l1) + ' ' + luz(l2) + ' ' + luz(l3) + ' ' + luz(l4) + ' ' + luz(l5) + ' ' + luz(l6) + ' ' + luz(l7) + ' ' + luz(l8) + ' ' + luz(l9) + ' ' + luz(l10) + ' ] al segundo ' + (segundos++));
  }
}, 1000);