function countdown(n){
  if(n === 0){
    console.log("Hooray!")
  }else{
    console.log(n)
    countdown(n-1)
  }
}
let copy
function productOfArray(array){
  copy = array.slice()
  if(copy.length === 0) return 1
  return copy.shift() * productOfArray(copy)
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

var nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo2"); // false

console.log(hasIt)
console.log(doesntHaveIt)

function contains(nestedObject, value){
  let valuesArray = Object.values(nestedObject)
  if(valuesArray.length === 0) return false

  let firstEl = valuesArray.shift() 
  console.log(firstEl)
  if(valuesArray[0] === value){
    return true
  } 
  
  if(firstEl instanceof Object){
    return contains(firstEl, value)
  }
  
 
}


let n = 0
function all(array,callback){
  if(!callback(array[n])){
    return false
  }else{
    n+=1
    all(array,callback)
  }
  return true

}
// var allAreLessThanSeven = all([1,2,6], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

function factorial(n){
  if(n===1){
    return 1
  }else{
    return n * factorial(n-1)
  }

}
//console.log(factorial(10))
//countdown(10)

function power(base,exponent){
  if(exponent === 0){
    return 1
  }else{
    return base * power(base, exponent-1)
  }
}
//console.log(power(3,3))
function sumRange(n){
  if(n <= 0){
    return 0
  }else{
   return n + sumRange(n-1)
  }
}
//console.log(sumRange(3))
let step = 0
function collatz(n){

  if(n===1){
    return step
  }else if((n%2) === 0){
    step+=1
    //console.log(step)
    return collatz(n/2)
  }else{
    step+=1
    //console.log(step)
    return collatz((3*n)+1)
  }
}
//console.log(collatz(50))
