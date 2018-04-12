const R = require('ramda');

// curried function
const greet = R.curry((greeting, name) => `${greeting} ${name}`);

// partial application
const morningGreeting = greet('Good morning,');

// final action
const morningGreetingJames = morningGreeting('James');

// nicety of Ramda
const eveningGreetingSue = greet('Good evening,', 'Sue');

/*
  Good morning, James
  Good evening, Sue
*/