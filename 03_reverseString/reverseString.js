const reverseString = function(toBeReversed) {
    const correctOrderArray = toBeReversed.split("")
    const reverseArray = []
    for(let i = correctOrderArray.length; i > 0; i--){
        reverseArray.push(correctOrderArray[i-1])
    }

    return reverseArray.join("")

};

// Do not edit below this line
module.exports = reverseString;
