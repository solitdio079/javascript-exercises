function fibs(num){
  const startArray = [0,1]
  if(num<=2) return startArray
  for(let i = 2; i <num;i++){
    startArray.push(startArray[i-1]+startArray[i-2])
  }
  return startArray
}

console.log(fibs(20))

function fibsRec(num){
  console.log("This was printed recursively");
  if(num <=2) return [0,1]
  return [...fibs(num-1),fibs(num-1)[fibs(num-1).length-1]+fibs(num-1)[fibs(num-1).length-2]]
}
console.log(fibsRec(8)) 

