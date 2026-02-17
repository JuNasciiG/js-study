const meuArray = [];

meuArray[0] = 0;
meuArray[1] = 1;
meuArray[2] = 2;
meuArray[3] = 3;
meuArray[4] = 4;

meuArray.push(5);
meuArray.shift()

console.log(meuArray)


const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados)

const pares = numeros.filter(n => n %2 === 0); 
console.log(pares)

const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma)
