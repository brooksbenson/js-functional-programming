const studentGrades = [
  {name: 'Brooks', grade: 100},
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

// respond to students grade
function giveResponse(grade) {
  switch (grade) {
    case 10: return [ 'Perfect score', 'an', 'a' ];
    case 9: return [ 'Excellent job', 'a', 'b' ];
    case 8: return [ 'Nice job', 'a', 'c' ];
    case 7: return [ 'Well done', 'a', 'd' ];
    default: return [ 'What happened', 'an', 'f'];
  }
};

const studentFeedback = studentGrades.map(giveFeedback);

function giveFeedback({ name, grade }) {
  const [phrase, a_n, letter] =giveResponse(Math.floor(grade / 10));
  return `${phrase}, ${name}! You got ${a_n} ${letter}`;
}