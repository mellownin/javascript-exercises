const reverseString = function(string) {
    // Establish index to start slicing from
    let currIndex = -1;
    let maxStrIndex = string.length*-1;
    let resultString = '';

    // While Loop
    while (currIndex >= maxStrIndex) {
        resultString += string.substr(currIndex,1);
        currIndex--;
    }

    return resultString
};

// Do not edit below this line
module.exports = reverseString;
