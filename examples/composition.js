const R = require('ramda');

/*
  When a functions output is the expected
  is another functions expected input, the
  two functions can be composed.

  To compose functions with Ramda, use the
  R.compose function. It accepts functions
  as arguments, and composes them from right
  to left.

  To compose functions from right to left,
  use the R.pipe function.
*/

// Input
const sentence = 'Apples, pears, and cherries';

// Composition
const countWords = R.compose(
  R.length,
  R.split
);

// Composition with Partial Application
const countWordsPA = R.compose(
  R.length,
  R.split(' ')
);

// Composition from right to left
const countWordsR2L = R.pipe(
  R.split,
  R.length
);

console.log(
  countWords(' ', sentence), // arguments to split
  countWordsPA(sentence), // second argument to split
  countWordsR2L(' ', sentence) // arguments to split
);
