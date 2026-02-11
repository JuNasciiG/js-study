//Simple rock, paper, scissors sketch 2

// let playerOne = 
// NOW I KNOW WOOHOOO

let playerOne = 'rock'
let computer = 'rock'
let result = playerOne === computer ? 'Tie!'
: playerOne === 'rock' && computer === 'paper' ? 'Computer wins!'
: playerOne === 'paper' && computer === 'scissors' ? 'Computer wins!'
: playerOne === 'scissors' && computer === 'rock' ? 'Computer wins!'
: 'playerOne wins!'
console.log(result);
