//Simple rock, paper, scissors sketch 2

// let playerOne = 
// don't know how to get inputs yet

let playerOne = 'rock'
let computer = 'rock'
let result = playerOne === computer ? 'Tie!'
: playerOne === 'rock' && computer === 'paper' ? 'Computer wins!'
: playerOne === 'paper' && computer === 'scissors' ? 'Computer wins!'
: playerOne === 'scissors' && computer === 'rock' ? 'Computer wins!'
: 'playerOne wins!'
console.log(result);
