let oneBtn = document.querySelector(".one");
let twoBtn = document.querySelector(".two");
let threeBtn = document.querySelector(".three");
let fourBtn = document.querySelector(".four");
let fiveBtn = document.querySelector(".five");
let sixBtn = document.querySelector(".six");
let sevenBtn = document.querySelector(".seven");
let eightBtn = document.querySelector(".eight");
let nineBtn = document.querySelector(".nine");
let zeroBtn = document.querySelector(".zero");
let clearBtn = document.querySelector(".clear");
let addBtn = document.querySelector(".add");
let subtractBtn = document.querySelector(".subtract");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let equalBtn = document.querySelector(".equal");

let display = document.querySelector(".display");

oneBtn.addEventListener("click", btnClick);
twoBtn.addEventListener("click", btnClick);
threeBtn.addEventListener("click", btnClick);
fourBtn.addEventListener("click", btnClick);
fiveBtn.addEventListener("click", btnClick);
sixBtn.addEventListener("click", btnClick);
sevenBtn.addEventListener("click", btnClick);
eightBtn.addEventListener("click", btnClick);
nineBtn.addEventListener("click", btnClick);
zeroBtn.addEventListener("click", btnClick);
addBtn.addEventListener("click", btnClick);
subtractBtn.addEventListener("click", btnClick);
multiplyBtn.addEventListener("click", btnClick);
divideBtn.addEventListener("click", btnClick);

clearBtn.addEventListener("click", () => {
  display.innerText = ``;
});

function btnClick() {
  display.innerText += this.innerText;
  return display.innerText;
}

equalBtn.addEventListener("click", operate);

function operate() {
  let problem = display.innerText;
  let result = ``;
  for (let i = 0; i < problem.length; i++) {
    if (
      problem[i] === "+" ||
      problem[i] === "-" ||
      problem[i] === "*" ||
      problem[i] === "/"
    ) {
      let newArr = problem.split(`${problem[i]}`);
      let finalArr = newArr.map(Number);
      console.log(finalArr);
      if (problem[i] === "+") {
        result = add(finalArr);
      } else if (problem[i] === "-") {
        result = subtract(finalArr);
      } else if (problem[i] === "*") {
        result = multiply(finalArr);
      } else if (problem[i] === "/") {
        result = divide(finalArr);
      }
    }
    display.innerText = result;
  }
}

function add(arr) {
  let result = arr.reduce((a, b) => a + b);
  return result;
}

function subtract(arr) {
  let result = arr.reduce((a, b) => a - b);
  return result;
}

function multiply(arr) {
  let result = arr.reduce((a, b) => a * b);
  return result;
}

function divide(arr) {
  let result = arr.reduce((a, b) => a / b);
  return result;
}
