// my first code challenge

// write code that will return a random letter from my name

const myName = 'Julio'

console.log(myName.charAt(Math.floor(Math.random()*4)));

// lvl 2: make this work for ALL names, surname and last name

const fullName = 'Drake Kendrick Graham Lamar'

const allNames = fullName.split(' ')

const randomName = allNames[Math.floor(Math.random() * allNames.length)];
const randomLetter = randomName.charAt(Math.floor(Math.random() * randomName.length));

console.log(randomLetter);

