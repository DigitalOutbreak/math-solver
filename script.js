//  2 + 4 * 3 - 7
// 2 + (4 * 3) - 7
// (2 + (4 * 3)) - 7
// 2 + 12 - 7
// 14 - 7
//  7
// 2 + 12 - 7 = parse(2 + 4 * 3 - 7)
//  14 - 7 = parse(2 + 12 -7)
// 7 = parse(14 - 7)

// const { parse } = require("uuid");

// function parse(equation) {
//   const step = getNextStep();
//   const result = solve(step);
//   replaceNextStep(equation, step, result);
// }

const inputElement = document.getElementById("equation");
const outputElement = document.getElementById("results");
const form = document.getElementById("equation-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const result = parse(inputElement.value);
  outputElement.textContent = result;
});

function parse(equation) {
  return inputElement.value;
}
