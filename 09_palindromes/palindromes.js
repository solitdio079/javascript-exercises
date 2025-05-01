const palindromes = function (str) {
    // Step 1: Split the string
    const strSplitArray = str.split("")
    //Filter the array get get rid of the special characters
    const strSplitArrayFiltered = strSplitArray.filter(item => !([";"," ",",","!",".","?"].includes(item)))
    // reverse the array
    const strSplitArrayFilteredReversed = strSplitArrayFiltered.slice().reverse()

    //console.log(strSplitArrayFiltered.join("").toLowerCase(),strSplitArrayFilteredReversed.join("").toLowerCase())

    return strSplitArrayFiltered.join("").toLowerCase() === strSplitArrayFilteredReversed.join("").toLowerCase()


};

// Do not edit below this line
module.exports = palindromes;
