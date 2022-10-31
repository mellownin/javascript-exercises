const repeatString = function(string,repitions) {
    
    if (repitions < 0) {return "ERROR";}
    
    let resultString = '';
    while (repitions) {
        resultString += string;
        repitions--;
    }
    console.log(resultString)
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;