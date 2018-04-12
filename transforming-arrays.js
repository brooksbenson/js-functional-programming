// original array
const studentGrades = [
  {name: 'Brooks', grade: 100},
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

// tranformed array
const studentFeedback = studentGrades.map(giveFeedback);

// transforming function
function giveFeedback({ name, grade }) {
  const [phrase, a_n, letter] = giveResponse(Math.floor(grade / 10));
  return `${phrase}, ${name}! You got ${a_n} ${letter}`;
}

// helper function
function giveResponse(grade) {
  switch (grade) {
    case 10: return [ 'Perfect score', 'an', 'a' ];
    case 9: return [ 'Excellent job', 'an', 'a' ];
    case 8: return [ 'Nice job', 'a', 'b' ];
    case 7: return [ 'Well done', 'a', 'c' ];
    case 6: return [ 'What happened', 'a', 'd' ];
    default: return [ 'Not good', 'an', 'f' ];
  }
}