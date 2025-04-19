const sumAll = function(firstNumber,secondNumber) {
    let end = secondNumber 
    let start = firstNumber
    if(end < 0 || start < 0) return "ERROR"
    if(end % 1 !== 0 || start % 1 !== 0) return "ERROR"
    if(typeof end !== "number" || typeof start !== "number" ) return "ERROR"

    if(firstNumber > secondNumber){
        end = firstNumber
        start = secondNumber
    }
    let totalSum = 0

    for(let i = start; i<=end;i++){
        totalSum += i
    }
    return totalSum

};

// Do not edit below this line
module.exports = sumAll;
