// Create the calculate function
function calculate(num1, num2) {
  return num1 + num2
}

userNum1 = prompt('Give me a number!')
userNum2 = prompt('Give me another number!')

let simpleMath = calculate(10, 3)
console.log(`The sum of ${userNum1} and ${userNum2} is ${simpleMath}.`)
