const repeatString = function(toBeRepeated,repeatCount) {
    if(repeatCount < 0){
        return "ERROR"
    }
    let resultString = ""
    for(let i = 0; i < repeatCount;i++){
        resultString += toBeRepeated
    }
    return resultString

};

// Do not edit below this line
module.exports = repeatString;
