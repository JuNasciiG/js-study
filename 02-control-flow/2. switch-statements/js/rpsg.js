//Simple rock, paper, scissors sketch 2

// let playerOne = 
// don't know how to get inputs yet

let playerOne = "scissors"
let computer = 'scissors'

switch (playerOne) {
    case computer:
        console.log('Tie game!');
        break;
    case 'rock':
    if (computer === 'paper') {
        console.log('Computer wins!');
    } else {
        console.log('playerOne wins!')
    }
    break;
    case 'paper':
    if (computer === 'scissors') {
        console.log('Computer wins!');
    } else {
        console.log('playerOne wins!')
    }
    break;
    default:
        if (computer === 'rock') {
            console.log('Computer wins!');
        } else {
            console.log('playerOne wins!')
    }
    break;
} 
