const R = require('ramda');

/*
  R.compose composes multiple functions.
  The values provided to the function produced
  by compose are the values that the last argument (function)
  passed to compose is expecting. 
  
  R.compose works from right to left, passing
  the return value from the rightmost function
  to the function to its left and working inwards.
*/

// input data
const sentence = 'Apples, pears, and cherries';

// composed function
const countWords = R.compose(R.length, R.split);

// result
const wordCount = countWords(' ', sentence);

/*
  currying composed functions
*/

// input data
const sentence2 = 'Lemons and limes in my eyes';

// first function passed to pipe is partially applied
const countWords2 = R.pipe(R.split(' '), R.length);

const wordCount2 = countWords2(sentence2);

console.log(wordCount2);