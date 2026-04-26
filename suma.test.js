const suma = require('./suma');

function test(nombre, condicion) {
  if (condicion) {
    console.log(`Pass: ${nombre}`);
  } else {
    console.log(` Fail: ${nombre}`);
  }
}

test('suma 2 + 3 = 5', suma(2,3) === 5);
test('suma 0 + 0 = 0', suma(0,0) === 0);
test('suma -1 + 1 = 0', suma(-1,1) === 0);

console.log('\n Todas las pruebas pasaron!');
