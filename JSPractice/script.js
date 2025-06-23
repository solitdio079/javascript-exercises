console.log(replicate(7, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []


function replicate(timesArg, numArg){
  if(timesArg <=0) return []
  return [numArg,...replicate(timesArg-1, numArg)]

}
