// numeros
// um integer e um numero inteiro
const myNumber = 42;

// um numero decimal se chama float, que referencia o "ponto de flutuacao"
const myFloat = 42.0 ;

// note-se que o numero declarado como number fica roxo
console.log(myFloat);

// note-se que o numero declarado como string fica branco
const myString = '42';
console.log(myString);

// vamos comparar o valor do myNumber com o myFloat
console.log(myNumber === myFloat);
// vai retornar false porque os tipos de data sao diferentes (number e string)

// se fazer uma soma com string ele vai colocar o numero na frente, e nao somar realmente
console.log(myString + 5);
// retorna 425
// e e possivel converter a string em numero
console.log(Number(myString) + 5);
// retorna 47

// com a constante number faz a soma normalmente
console.log(myNumber + 5);
// retorna 47

// agora comparando a string com o number 
console.log(Number(myString) === myNumber)
// vai retornar true

// vamos tentar usar a funcao number em uma dado nao conversivel pra numero
console.log(Number('Anderson'))
// retorna NaN (acronimo para "Not a Number" (nao e um numero))
// pode acontecer facilmente com strings ou dados indefinidos
// mas boolean e diferente
console.log(Number(true))
// true retorna 1
console.log(Number(false))
// false retorna 0