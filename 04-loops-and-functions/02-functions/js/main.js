// Functions 

// Function declaration syntax

function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
 
console.log(sum(5));

//function to proper case a name
const toProperCase = (name) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
//gets name
let getName = prompt('What is your name?');
console.log(toProperCase(getName))
//function to proper case a name with function declaration syntax
function getUserNameFromEmail(email) {
    //or const getUserNameFromEmail = funcion (email) {}
    return email.slice(0, email.indexOf('@'));
    //separa o username do email, pegando a parte antes do @
}
userEmail = prompt('What is your email?');
console.log(`Username ${getUserNameFromEmail(userEmail)} from email ${userEmail}`);