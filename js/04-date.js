// Windows Methodos

//* Window alert

alert("Hola, soy una alerta");

let message = 'Hola mundo';
alert(message);

console.log('-----------------');

//* windows prompt

let number = prompt('Enter number','number goes here');
console.log(number);
console.log('-----------------');

//* Windows confirm

const agree = confirm('¿Aceptas pibe?');
console.log(agree);
console.log('-----------------');

//* Date object

const now = new Date()
console.log(now) // Wed Oct 30 2024 08:18:13 GMT-0500 (hora estándar oriental)

const now1 = new Date()
console.log(now1.getFullYear()) // 2024 (año)

const now2 = new Date()
console.log(now2.getMonth()) // 9 (Octubre)

const now3 = new Date()
console.log(now3.getDate()) // 30 (dia actual)

const now4 = new Date()
console.log(now4.getDay()) // 3 (Se refiere al la fecha que es Miercoles, pero en número)