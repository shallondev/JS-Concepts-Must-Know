// ASSUMPTION num is a integer greater than 

function factorial(num) {    

    if (num <= 1) {
        return 1; // Base Case
    }
    else {
        return num * factorial(num - 1); // Recursive step
    }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(6));
console.log(factorial(24));