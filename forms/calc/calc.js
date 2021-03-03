// Create the calculate function
function calculate(num1, num2) {
  return num1 + num2
}

// Get user input numbers
userNum1 = Number(prompt('Give me a number!'))
userNum2 = Number(prompt('Give me another number!'))

// Take the parameters and run them through function
let simpleMath = calculate(userNum1, userNum2)
console.log(`The sum of ${userNum1} and ${userNum2} is ${simpleMath}.`)
