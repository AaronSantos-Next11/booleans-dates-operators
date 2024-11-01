//* && - AND o conjunción lógica

    const check = 4 > 3 && 10 > 5; // true - true = true

    const check1 = 4 > 3 && 10 < 5; // true - false = false

    const check2 = 4 < 3 && 10 < 5; // false - false = false

console.log('-------------------')

//* || - OR o disyunción lógica

    const check4 = 4 > 3 || 10 > 5; // true - true = true

    const check5 = 4 > 3 || 10 < 5; // true - false = true

    const check6 = 4 < 3 || 10 < 5; // true - false = true

console.log('-------------------')

//* ! - not o negación lógica (permite hacer uso del complemento o valor opuesto, true y false, de un valor)

    let check7 = 4 > 3;
    let check8 = !(4 > 3); //false

    let isLightOn = true; 
    let isLightOff = !isLightOn; //false

    let isMarried = !false; //true

console.log('-------------------')

//* Operadores de incremento - ++

    // Pre incremento:
    let count = 0
    console.log(++count) //1
    console.log(count) //1

    // Post incremento:
    let count2 = 0
    console.log(count2++) //0
    console.log(count2) //1

console.log('-------------------')

//* Operadores de decremento --

    // Predecremento:
    let count3 = 0;
    console.log(--count3);
    console.log(count3);
    
    // Predecremento:
    let count4 = 0;
    console.log(count4--);
    console.log(count4);

console.log('-------------------')

//* Operador ternario
// Primer ejemplo:
let firstCheck = false, secondCheck = false, 
    access = firstCheck ? "Acceso denegado" : secondCheck ? "Acceso denegado" : "Acceso permitido";

    console.log(access); // Acceso permitido

// Segundo ejemplo:
let isRaining = true
    isRaining ? console.log('You need a rain coat') : console.log('You not need for a rain coat')
    // You need a rain coat

console.log('-------------------')