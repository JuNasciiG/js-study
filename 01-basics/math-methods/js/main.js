 // Math Methods and Properties
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

 console.log(Math.PI)
 // retorna 3.141592653589793

console.log(Math.trunc(Math.PI))
// truncates decimals, returns 3

console.log(Math.round(3.6))
// rounds the number to the nearest integer

console.log(Math.ceil(3.1))
// always rounds up

console.log(Math.floor(3.9))
//always rounds down

console.log(Math.pow(2, 4))
// retorna 16, potenciacao

console.log(Math.min(2, 10, 0.1))
// retorna o menor numero, 0.1

console.log(Math.max(2, 10, 0.1))
// retorna o maior numero, 10


// isso retorna um numero decimal aleatorio, entre 0 e 1

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// isso retorna um numero aleatorio, multiplicado por 10 e somando 1

console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// usar Math.floor instead of Math.ceil, because
// it has a chance of resulting in zero 