const add = function(a,b) {
  return a+b
	
};

const subtract = function(a,b) {
  return a-b
	
};

const sum = function(arr) {
  return arr.reduce((acc,curr) => acc+=curr, 0)

	
};

const multiply = function(arr) {
  return arr.reduce((acc,curr) => acc*=curr, 1)

};

const power = function(a,b) {
  return a**b
	
};

const factorial = function(num) {
  if(num === 0) return 1
  if(num<0) return 
  const numArr = []
  for(let i = 1; i<= num;i++){
    numArr.push(i)

  }
  return multiply(numArr)
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
