const sumAll = function(num1,num2) {
    let inputCheck = (typeof (num1+num2) === "number" && Math.min(num1,num2) > 0);
    if (inputCheck) {
        let sumPointer = Math.min(num1,num2);
        let endPoint = Math.max(num1,num2);
        let sumResult = 0;

        for (sumPointer; sumPointer <= endPoint; sumPointer++) {
            sumResult += sumPointer;
        }

        return sumResult

    }  
    return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;


// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```

// Pseudo code
// 2 parameters integers only
// If one parameter is not an integer, return "ERROR" 
// Doesn't matter if the first number is the smaller or larger of the two
// Then, create a sum using the numbers between both inputs (inclusive of endpoints)
