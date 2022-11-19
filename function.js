// local bariables
function greet() {
    let userName = 'john';
    console.log('hello', userName)
}
// greet();

// global variables
let userName = 'Nizam';
function greet() {
    console.log('hello', userName);
}
// greet();
console.log(userName);

// parameters and it's evloution
// function test(a, b) {
//     if (typeof a === "undefined") {
//         a = 'tomr name pawa';
//     }
//     if (typeof b === 'undefined') {
//         b = ' jaine';
//     }
//     console.log('hello', a + b);
// }
// test('Nizam', ' uddin');

// modern systems E6
function test(a = 'tomar name ', b = 'daw') {
    console.log('hello', a + b);
}
// test();

// Returning a value
function square(x) {
    let nizam = x * x;
    return nizam;
}
const four = square(200000);
// console.log(four);



// Naming Function (get, set calc, create, check)
// 1.paita chila 
// getValue
// 2.set korta caila
// setValue
// 3. calculete korta chaila
// calc
// 4. kono kecu create korta cahila
// createUser
// 5.check korta chaile
// checkValue



// IMMIBIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFES

(function (name = 'nizam uddin') {
    console.log(name);
})('hello boy');