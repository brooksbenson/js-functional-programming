const grades = [60, 55, 80, 90, 99, 92, 75, 72];

// summarizing with reduce
const total = grades.reduce((acc, n) => acc + n);

// number of grades
const count = grades.length;

// average grade
const average = total / count;

// counting letter grades
const letterGradeCount = grades.reduce(countLetterGrades, {});

function countLetterGrades (grades, grade) {
  const { a = 0, b = 0, c = 0, d = 0, f = 0 } = grades;
  if (grade >= 90) return { ...grades, a: a + 1};
  if (grade >= 80) return { ...grades, b: b + 1};
  if (grade >= 70) return { ...grades, c: c + 1};
  if (grade >= 60) return { ...grades, d: d + 1};

  return { ...grades, f: f + 1};
}

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const reviewCount = reviews.reduce(groupByReviews);
console.log(reviewCount);

function groupByReviews(reviews = {}, review) {
  const count = reviews[review] || 0;
  return { ...reviews, [review]: count + 1 };
}

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4.0: 2 ...}
// 
// TIP: checkout computed properties discussed here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// solution can be found at:
// https://jsbin.com/himuzuw/1/edit?js,console