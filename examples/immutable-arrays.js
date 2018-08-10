// original value
const friends = ['Kalin', 'Jared'];

// adding values to original value
const addedFriends = [...friends, 'Arsen', 'Brooks'];

// updating values in original value
const updatedFriends = addedFriends.map(name => name.length);

// removing values from original value
const longestNameLength = Math.max(...friendNameLengths);
const shorterNamedFriends = addedFriends.filter(
  name => name.length !== longestNameLength
);
