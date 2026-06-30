/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let xArray = (String(x)).split("")
    let XArrayReverse = [...xArray].reverse()
    
    return [XArrayReverse , xArray]
};

