// start with strings, numbers and booleans
// Let's say we have an array

const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;

// You might think we can just do something like this:

team[3] = "Lux";

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in

const team3 = [].concat(players);

// or use the new ES6 Spread

const team4 = [...players];
team4[3] = "heeeee hawwwww";

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects

const person = { name: "Wes Bos", age: 80 };

// and think we make a copy:

const captain = person;
captain.number = 99;

// how do we take a copy instead?

const cap2 = Object.assign({}, person, { number: 99, age: 12 });

// We will hopefully soon see the object ...spread

const cap3 = { ...captain };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const random = { name: "k4noise", learn: "JS", country: "Russia" };

const people = Object.assign({}, random);
const people2 = JSON.parse(JSON.stringify(random));
