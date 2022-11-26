function eitherNotBoth(num) {
    const isDivisibleBy3 = num % 3 === 0;
    const isDivisibleBy5 = num % 5 === 0;

    return ((isDivisibleBy3 || isDivisibleBy5) && !(isDivisibleBy3 && isDivisibleBy5));
}

module.exports = eitherNotBoth;