//* Create firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types:

    // First, I assign the values to variables:

    let firstName = 'Esteban';
    let country = 'Germany';
    let city = 'Berlin';
    let age = 18;
    let isMarried = false;
    let year = new Date().getFullYear(); // 2024

    // Now, it shows on the console the type of variables:

    console.log(typeof firstName);      // Print string
    console.log(typeof country);        // Print string
    console.log(typeof city);           // Show string
    console.log(typeof age);            // Show number
    console.log(typeof isMarried);      // Show boolean
    console.log(typeof year);           // Print number
    console.log('-----------------');
    

//* Check if type of '10' is equal to 10 

    const check_equal = '10' == 10;

    console.log(check_equal) // Show it: true
    console.log('-----------------');

//* Check if parseInt('9.8') is equal to 10 

    const check_equal_2 = parseInt('9.8') == 10 // 0 == 10

    console.log(check_equal_2) // false, because parseInt converted 9.8 into 9, ignored ".8" of the decimal number.
    console.log('-----------------');

/* 
* Boolean value is either true or false:
*    Write three JavaScript statements which provide truthy value. 
*    Write three JavaScript statements which provide falsy value. 
*/

// Write three JavaScript statements which provide truthy value. 

const test1 = 23 >= 23; // true
const test2 = 24 > 10 || !(24 < 35); //true
const test3 = 'Carlos' == 'Tomas' || !false; //true

console.log(test1, test2, test3); // true true true

// Write three JavaScript statements which provide falsy value. 

const test4 = (23 > 5) && (134 < 35); // false
const test5 = 'Carlos' === 'Tomas'; // false
const test6 = undefined === true; //false

console.log(test4, test5, test6); // false false false
console.log('-----------------');

/* 
*  Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log().

? Ahora bien, a continuación escribiré aun lado de la comparación, el valor que creo que será (en menos de un minuto):

i. 4 > 3 (true)
ii. 4 >= 3 (true)
iii. 4 < 3 (false)
iv. 4 <= 3 (false)
v. 4 == 4 (true)
vi. 4 === 4 (true)
vii. 4 != 4 (false)
viii. 4 !== 4 (false)
ix. 4 != '4' (true) solo fallé en este xd
x. 4 == '4’ (true)
xi. 4 === '4’ (false)
*/

console.log(4 > 3, 4 >= 3, 4 < 3, 4 <= 3, 4 == 4);
//          true,   true , false, false,   true

console.log(4 === 4, 4 != 4, 4 !== 4, 4 != '4', 4 == '4', 4 === '4');
//            true ,  false,   false,   false,    true,     false

console.log('-----------------');

/* 
* Use the Date object to do the following activities
?   i. What is the year today?
?   ii. What is the month today as a number?
?   iii. What is the date today?
?   iv. What is the day today as a number?
?   v. What is the hours now?
?   vi. What is the minutes now?
?   vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const today = new Date().getFullYear(); // 2024
const month_curr = new Date().getMonth(10); // 9
const date_curr = new Date().getDate(); // 30
const day_curr = new Date().getDay(); // 3
const hours_curr = new Date().getHours(); // 21
const minutes_curr = new Date().getMinutes(); // 42
const seconds_Jan_1_1970 = new Date().getTime(); // 1730342559960


console.log(
    `Today is Wednesay (${day_curr}) ${date_curr}th of October (${month_curr}), ${today} with ${hours_curr}:${minutes_curr}`
);
// console.log(today, month_curr, date_curr, day_curr);

console.log(
    `And ${seconds_Jan_1_1970} seconds since 1st of January, 1970`
)
// console.log(hours_curr, minutes_curr, seconds_Jan_1_1970)
console.log('-----------------');

/* 
*  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    ? Enter base: 20
    ? Enter height: 10
    ? The area of the triangle is 100
*/

    let base_triangle = prompt(
        'Enter a number for the base of the triangle:',
        'Nothing negative numbers (including zero) or words' // 20
    );

    let height_triangle = prompt(
        'Enter a number for the height of the triangle:', 
        'Nothing negative numbers (including zero) or words' // 10
    );

    const cal_area_triangule = 0.5 * base_triangle * height_triangle; // 100 or other value

    let area_triangle = alert(
        `The triangle area's is: ${cal_area_triangule} unit(s).` // Print 100 unit(s)
    );

    console.log(`The triangle area's is: ${cal_area_triangule} unit(s).`); // It's same as above

console.log('-----------------');

/* 
*  Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    ? Enter side a: 5
    ? Enter side b: 4
    ? Enter side c: 3
    ? The perimeter of the triangle is 12
*/

    let tri_side_A = prompt(
        'Enter a number for the side A of the triangle:',
        'Nothing negative numbers (including zero) or words' // Enter 5
    );

    let tri_side_B = prompt(
        'Enter a number for the side B of the triangle:',
        'Nothing negative numbers (including zero) or words' // Enter 4
    );

    let tri_side_C = prompt(
        'Enter a number for the side C of the triangle:',
        'Nothing negative numbers (including zero) or words' // Enter 3
    );

    const calcu_perimtr_tri = Number(tri_side_A) + Number(tri_side_B) + Number(tri_side_C); 
    // I convert strings to numbers because, by default, in JS the inputs are strings and the symbol "+" is interpreted like a concat.

    let perimeter_triangule = alert(
        `The triangule perimeter's is: ${calcu_perimtr_tri} unit(s).` // Print 12 unit(s) or other value
    )

console.log(`The triangule perimeter's is: ${calcu_perimtr_tri} unit(s).`); // It's same as above