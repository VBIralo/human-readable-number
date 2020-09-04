module.exports = function toReadable(number) {
    let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tensDigits = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        numString = number.toString();

    // 0
    if (number == 0) {
        return 'zero';
    }

    // 1 ... 19
    if (number < 20) {
        return digits[number];
    }

    // 20 ... 99
    if (number >= 20 && number <= 99) {
        return (tensDigits[numString[0]] + ' ' + digits[numString[1]]).replace(/\s+/g, ' ').trim()
    }

    // 100 ... 999
    if (number >= 100 && number <= 999) {
        if (numString[1] == '0' && numString[2] == '0') return (digits[numString[0]] + ' hundred');
        return (digits[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]))).replace(/\s+/g, ' ').trim()
    }
}
