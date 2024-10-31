let numberOne = 8
let numberTwo = 4

let suma = numberOne + numberTwo;
let resta = numberOne - numberTwo;
let multiplicacion = numberOne * numberTwo;
let division = numberOne / numberTwo;
let porcentaje = numberOne % numberTwo;
let exponente = numberOne ** numberTwo;


console.log(suma, resta, multiplicacion, division, porcentaje, exponente)
// console.log('--------------------')
// console.log(suma)
// console.log(resta)
// console.log(multiplicacion)
// console.log(division)
// console.log(porcentaje)
// console.log(exponente)

// Calcular el area de un circulo
console.log('--------------------')
const PI = Math.PI
let radius = 100
let areaCircule = PI*radius *radius

console.log(areaCircule)

// Calcular la peso de un objeto
console.log('--------------------')

const gravity = 9.81
let mass = 72

const weight = mass * gravity
console.log(weight)

console.log('--------------------')

const bollingPoint = 100
const bodyTemp = 37

console.log(`El punto de ebullición del agua es de: ${bollingPoint} grados Celsius. \nLa temperatura del cuerpo humano es de ${bodyTemp} grados Celsius \nLa gravedad de la tierra es de ${gravity} m/s^2`)