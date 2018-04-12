/*
  Pure function rules
    1. Have input parameters
    2. Don't depend on stateful values
    3. Return values based on input
    4. No side effects
*/

// pure function
const add = (a, b) => a + b;

// procedure (impure)
let counter = 0;
function increment() {
  counter++;
}