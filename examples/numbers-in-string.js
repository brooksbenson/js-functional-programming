/*
  Count the numbers in sentence using functional composition.
*/

const R = require('ramda');

// input data
const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

// composed function implementing partial application
const numbersInString = R.compose(
  R.length, 
  R.filter(x => /\d/.test(x)), 
  R.split(' ')
);

// result
const numbersCount = numbersInString(sentence); // 4