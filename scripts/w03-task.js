/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
 function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function () {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

        const multiplyNumbers = () => {
            const factor1 = Number(document.querySelector('#factor1').value);
            const factor2 = Number(document.querySelector('#factor2').value);

            document.querySelector('#product').value = multiply(factor1, factor2);
        };

        document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x,y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value=quotient;
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */


function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
  
    if (document.getElementById("member").value) {
      subtotal = subtotal - subtotal * 0.2;
    }
  
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
  }
  
  document.getElementById("getTotal").addEventListener("click", getTotal);
  

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

document.querySelector('#array').textContent = numbersArray.join(', ');

document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1).join(', ');

document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');

document.querySelector('#sumOfMultiplied').textContent = numbersArray
  .map(number => number * 2)
  .reduce((sum, number) => sum + number, 0);

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
