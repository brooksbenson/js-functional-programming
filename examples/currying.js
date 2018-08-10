// curried function
const greet = greeting => `${greeting} ${name}`;

// array of names
const names = ['Nate', 'Jess', 'Gilbert', 'Big mac'];

// partial application
const afternoonGreeting = greet('Good afternoon,');

// transforming names into afternoon greetings
const greetings = names.map(afternoonGreeting);
