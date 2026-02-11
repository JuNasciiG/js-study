// Loops
let myNumber = 0; // while loop
while (myNumber <= 50) { // while (condition) { code to run }
    myNumber += 2; // myNumber = myNumber + 2; // myNumber += 2; // myNumber++
    // console.log(myNumber); // 2, 4, 6, ..., 50
} do { 
    console.log(myNumber); 
} while (myNumber <50);

for (let i = 0; i <= 10; i++) { // for (initialization; condition; increment) { code to run }
    console.log(i); 
} let name = 'JuNasciiG'; 
for (let i = 0; i <= name.length; i++) { // for (initialization; condition; increment) { code to run }
    console.log(name.charAt(i)); 
} let counter = 0;
let myLetter; 
for (let i = 0; i <= name.length; i++)  // for (initialization; condition; increment) { code to run }
    while (true) {
        myLetter = name[counter];
        console.log(myLetter);
        if (myLetter === 's') break;
        counter++;
    }