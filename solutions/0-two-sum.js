/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indices = [];

    nums.forEach((currentNum, currentIndex) => {
        nums.slice(currentIndex + 1).forEach((nextNum, offset) => {
            if (currentNum + nextNum === target) {
                indices = [currentIndex, currentIndex + offset + 1];
            }
        });
    });

    return indices;
};