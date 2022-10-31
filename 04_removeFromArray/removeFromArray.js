const removeFromArray = function(baseArray,remvElement1, remvElement2) {
    // Loop through array up to maximum position
    let maxIndex = baseArray.length;
    let removals = Array.prototype.slice.call(arguments,1);
    for (let i = 0; i < maxIndex; i++) {
        if (removals.includes(baseArray[i])) {
            baseArray.splice(i,1);
            i--;
        }
    }
    return baseArray;
};

// Do not edit below this line
module.exports = removeFromArray;
