// var, let and const

//var x = 1; 
//var x = 2;
//
// this is possible

//const y = 1;
//const y = 2;

//this is not for some reason

// let z = 1;
// let z = 2;

//this is also not possible

//global scope

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
    var x = 10;
    const z = 5;
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    {
        var x = 11;
        const z = 6;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
}

myFunc();