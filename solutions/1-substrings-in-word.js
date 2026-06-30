/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    
    let finalNumber = 0
    patterns.forEach(string => {
        if(word.includes(string)) [
          finalNumber =  finalNumber + 1
        ]
    });

    return finalNumber
};
