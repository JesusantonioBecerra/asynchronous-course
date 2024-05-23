function sum(num1, num2) {
  return num1 + num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
};
console.log(calc(4, 4, sum));
//////////////////////
setTimeout(() => {
  console.log('Hola JavaScript')
}, 5000);

function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Jesus')
////////////////////////////////
function execCallback(callback) {
  setTimeout(callback, 2000, 'Jesus')
}

function guilty(name) {
  console.log(`${name} No entendió el ejercicio XD`)
}

execCallback(guilty)