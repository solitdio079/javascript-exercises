const fibonacci = function(position) {
    if(position < 0) return "OOPS"
    if(+position === 0) return 0
    const fibonacciStart = [1]
    for(let i = 1;i<position;i++){
        if(i-2 < 0){
            fibonacciStart[i] = fibonacciStart[i-1] + (0)
        }else{
            fibonacciStart[i] = fibonacciStart[i-1] + fibonacciStart[i-2]
        }
       
    }
    //console.log(first)
    return fibonacciStart[position-1]

};

// Do not edit below this line
module.exports = fibonacci;
