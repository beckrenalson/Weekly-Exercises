let pizzas = [
    "pineapple", 
    "salami", 
    "chicken", 
    "vegan",
    "fish",
    "crocodile",
    "horse",
    "null",
    "chocolate",
    "pork",
];
console.log("For Each");
pizzas.forEach(function(pizza) {
    console.log(pizza);
});

console.log("");
console.log("For Of");
for (let pizza of pizzas) {
    console.log(pizza);
};

console.log("");
console.log("")
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
};

