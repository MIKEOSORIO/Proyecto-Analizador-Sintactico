//Bienvenido al Analizador Sintactico

//---------------------Pruebas-------------

//Prueba 1: Formulas mátemáticas sencillas del tipo c = a  b

x = a + b;
contador = contador - 1;
sumatoria = 12.5 + 56.1;

//Prueba 2: Formulas más complejas del tipo c = a op ( b d) 

area = (base * altura)/2;
resultado = (y * z) + (x -z);
cantidad = (5/7) + 3;


// Prueba 3: Expresiones con estructuras de control

//---------------------IF---------------------------

if ( (n <= 0) && (n >= 1) ) {
  return 1;
} else {
  return (t);
}

//--------------------FOR------------------------------

for (var i = 0; i <= 9; i++) {
  cont = cont + 1;
}

//--------------------SWITCH---------------------------

switch (opcion){
  case 1:
      alert('sumar');
      break;
  case 2:
      alert('restar');
      break;
  case 3:
      alert('multiplicar');
      break;
  case 4:
      alert('dividir');
      break;
  case 5:
      alert('potencia');
      break;
  case 6:
      alert('raiz');
      break;
  default:
      alert('Opcion fuera de rango');
      break;
}

//---------------------WHILE-------------------------

while(veces < 7) {
  veces = veces + 1;
}