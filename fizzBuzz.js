function fizzBuzz(numbers) {
    let str = "";
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 3 === 0) {
            str += "fizz";
        }  
        if (number % 5 === 0) {
            str += "buzz";
        } 
    }
    return str;
}

module.exports = fizzBuzz;