/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanNumbers = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    const splitToRomans = s.split("")
    let resultNumber = 0

    splitToRomans.forEach((romanNumber,index) => {
        
        const secondRomanNumber = splitToRomans[index + 1]
        const findNumber = romanNumbers[romanNumber]
        const secondNumber = romanNumbers[secondRomanNumber]

        if(findNumber && secondNumber > findNumber &&  secondNumber){
            resultNumber = resultNumber - findNumber
        } else{
             resultNumber = resultNumber + findNumber
        }

    });

    return resultNumber
};

