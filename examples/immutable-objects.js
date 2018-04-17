// original value
const meal = {
  id: 1,
  description: 'Apple',
  calories: 95
};

// adding properties to original value
const addedInfo = {
  ...meal,
  grams: 70
};

// updating properties in original value
const updatedMeal = {
  ...addedInfo,
  grams: 80
};

// deleting properties from original value
const { id, ...mealWithoutId } = updatedMeal;