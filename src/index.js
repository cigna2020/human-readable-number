module.exports = function toReadable(number) {

    const firstNumberSting = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    const secondNumberString = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const firsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    const secondNumber = [20, 30, 40, 50, 60, 70, 80, 90];
    const hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900]
    const numberArray = number.toString().split('');

    if (number >= 0 && number < 20) {
        return firstNumberSting[number];
    } for (const el in secondNumber) if (number === secondNumber[el]) {
        return secondNumberString[numberArray[0] - 2];
    } if (number > 20 && number < 100) {
        return secondNumberString[numberArray[0] - 2] + ' ' + firstNumberSting[numberArray[1]];
    } for (const num in hundreds) if (number === hundreds[num]) {
        return firstNumberSting[numberArray[0]] + ' hundred'
    } for (const el in firsNumber) if (firsNumber[el] == (numberArray[1] + numberArray[2])) {
        return firstNumberSting[numberArray[0]] + ' hundred ' + firstNumberSting[firsNumber[el]];
    } for (const el in secondNumber) if (secondNumber[el] == (numberArray[1] + numberArray[2])) {
        return firstNumberSting[numberArray[0]] + ' hundred ' + secondNumberString[numberArray[1] - 2];
    } if (number > 100 && number < 1000 && numberArray[2] === 0) {
        return firstNumberSting[numberArray[0]] + ' hundred ' + secondNumberString[numberArray[1] - 2];
    } if (number > 100 && number < 1000) {
        return firstNumberSting[numberArray[0]] + ' hundred ' + secondNumberString[numberArray[1] - 2] + ' ' + firstNumberSting[numberArray[2]];
    }
}