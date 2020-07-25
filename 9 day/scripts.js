const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

// Regular

console.log("hello");

// Interpolated

console.log("Hello I am a %s string!", "💩");

// Styled

console.log(
  "%c I am some great text!",
  "font-size: 50px; background: red; text-shadow: 10px 10px 10px 0 blue;"
);

// warning!

console.warn("OH NOOOOO");

// Error :|

console.error("Shit");

// Info

console.info("Crocodiles eat 3-4 people per year");

// Testing

console.assert(1 === 1, "That is wrong");

// clearing

console.clear();

// Viewing DOM Elements

console.log(document.body);
console.dir(document.body);

// Grouping together

dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`That is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});

// counting

console.count("shit");
console.count("shit");
console.count("shit");
console.count("shit");
console.count("shit");

// timing

console.time("fetching data");
fetch("https://api.github.com/users/k4noise")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
