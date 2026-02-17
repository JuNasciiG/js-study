// Arrays are a data structure
const myArray = [];

// add elements to the array by referencing the position they're in in the array
myArray[0] = 'JuNasciiG';
myArray[1] = '12345'
myArray[2] = false;

//refer to an array
console.log([myArray]);

//length property
console.log(myArray.length);

//last element on in a array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

//add to the last position of the array
myArray.push('School');
console.log(myArray);
//add to the first position of the array + new length of the array
const newLenght = myArray.unshift(42);
console.log(myArray);
console.log(newLenght);
// .push .unshift .shift does add more to the length as well


//remove from the array
const lastItem = myArray.pop();
console.log(myArray);
console.log(`Last removed item from the array is ${lastItem} `)


//if you shift any items in any position of the array, it removes from it
const firstItem = myArray.shift();
console.log(myArray)

push()      // adiciona no final
pop()       // remove do final
shift()     // remove do início
unshift()   // adiciona no início
includes()  // verifica se existe
indexOf()   // retorna índice