// strings
const myVariable = 'Essa frase tem 29 caracteres.';

// metodos de strings


console.log(myVariable);
 //simplesmente mostra a string

console.log(myVariable.length);
 //mostra a quantidade de caracteres que tem na string

console.log(myVariable.charAt(3));
 //mostra o caractere na posicao especifica

console.log(myVariable.indexOf("frase"));
 //mostra em qual caractere comeca a string especifica

console.log(myVariable.lastIndexOf('ra'));
 //mostra em qual instancia a string especifica esta

console.log(myVariable.lastIndexOf('fra'));
 //mesmo exemplo, com uma letra a mais

console.log(myVariable.slice(5, 15));
 //"fatia" a const, pegando do caractere 5 ate o 15, retornando "essa frase"

console.log(myVariable.toUpperCase());
 //COLOCA TUDO EM MAIUSCULO WOOOOW

console.log(myVariable.toLowerCase());
 //ᶜᵒˡᵒᶜᵃ ᵗᵘᵈᵒ ᵉᵐ ᵐᶦⁿᵘˢᶜᵘˡᵒ ʷᵒᵒʷ

console.log(myVariable.includes('bom dia'));
 //checa se a const tem a string especificada, retorna false

console.log(myVariable.includes('frase'));
 //checa se a const tem a string especificada, retorna true

console.log(myVariable.split('e'));
 //checa a const e divide pelo caractere mencionado, retorna a quantidade e divisoes
 // (5) ['Essa fras', ' t', 'm 29 caract', 'r', 's.'])'
 //o tutor falou que isso seria um array, mas vai explicar na outra aula...

 console.log(myVariable.split(''));
 // se deixar ('') vai retornar todos os caracteres
 // (29) ['E', 's', 's', 'a', ' ', 'f', 'r', 'a', 's', 'e', ' ', 't', 'e', 'm', ' ', '2', '9', ' ', 'c', 'a', 'r', 'a', 'c', 't', 'e', 'r', 'e', 's', '.']
 
 console.log('Raizen, Maris, Ayumu'.split(','));
 //fazendo com uma lista de strings e separando por virgula, vai retornar um array com as strings
 // (3) ['Raizen', ' Maris', ' Ayumu']
 //aprendi o que seria um array, e basicamente uma organizacao de dados (bem simplificado)

  console.log('JS SQL Golang node.js'.split(' '));
  //separando com um espaco tambem faz um array com os itens