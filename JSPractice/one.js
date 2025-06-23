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
  
  var seven = totalIntegers([[[5], 3], 0, 2, [4], [], [4, [5, 6]]]); // 7
  const three = totalIntegers([1,2])
  console.log(three)
  console.log(seven)
  
  
  function totalIntegers(array){
    var total = total || 0
    for(const value of array){
      //console.log(value)
      if(typeof value === "number") total += 1
      if(Array.isArray(value)) total += totalIntegers(value)
    }
  return total
  
  }
  
  
  
  
  let hasIt = contains(nestedObject, 44); // true
  let doesntHaveIt = contains(nestedObject, "foo"); // false
  
  console.log(hasIt)
  console.log(doesntHaveIt)
  
  
  
  
  // solution to problem #6 in recursive exercises
  function contains(object, searchValue) {
    // because `null` has a typof "object", we have to explicitly check
    // to prevent trying to access `null`'s values (which don't exist)
    if (typeof object !== "object" || object === null) {
      return object === searchValue;
    }
  
    for (const value of Object.values(object)) {
      // An important problem in the code quiz solution is that `return contains()` will only
      // search the first property of an object, as it will return whatever the result for it is.
      // If our value was nested within the second property, for example, it would never get checked
      // even if the first nested object did not contain it.
      if (contains(value, searchValue)) {
        return true;
      }
    }
    return false;
  }
  
  // function contains(nestedObject, value){
  //   let valuesArray = Object.values(nestedObject)
  //   const check = valuesArray.find(el => el === value)
  //   if (check) return true
  //   const objectChild = valuesArray.find(el => el instanceof Object)
  //   if(objectChild) return contains(objectChild,value)
  //   return false
  // }
  
  var allAreLessThanSeven = all([1,2,3], function(num){
      return num < 7;
  });
  
  console.log(allAreLessThanSeven); // false
  
  function all(array, callback){
      var copy = copy || array.slice(); // shallow copies array
  
      if(copy.length === 0) return true;
  
      if(callback(copy[0])){
          copy.shift(); // remove first element from array
          return all(copy, callback);
      } else {
          return false;
      }
  }
  
  
  // let n = 0
  // function all(array,callback){
  //   if(!callback(array[n])){
  //     return false
  //   }else{
  //     n+=1
  //     all(array,callback)
  //   }
  //   return true
  
  // }
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

var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(lists){
  var total = total || 0
  for(const value of lists){
    if(Number.isInteger(value)) total += (value**2)
    if(Array.isArray(value)) total += SumSquares(value)
  }
return total

}





  