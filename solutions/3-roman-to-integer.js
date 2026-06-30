/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const romanChars = s.split("");
    let total = 0;

    romanChars.forEach((currentChar, index) => {
        const nextChar = romanChars[index + 1];

        const currentValue = romanValues[currentChar];
        const nextValue = romanValues[nextChar];

        if (nextValue > currentValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    });

    return total;
};