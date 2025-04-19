const removeFromArray = function() {
    if(arguments.length === 0) {
        return "Please, provide at least two arguments"
    }
    const inputArray = arguments[0]
    const args = [...arguments].slice(1)
   

    //Remmove elements from array
    const resultArray = inputArray.filter(item => !args.includes(item))

    return resultArray
};

// Do not edit below this line
module.exports = removeFromArray;
