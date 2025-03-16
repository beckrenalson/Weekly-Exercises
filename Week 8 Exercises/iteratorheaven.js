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

pizzas.forEach(function(pizza) {
    console.log(pizza);
});

console.log("");

for (let pizza of pizzas) {
    console.log(pizza);
};

console.log("");

for (let pizza = 0; pizza < pizzas.length; pizza++) {
    console.log(pizza += pizzas[pizza] + "");
};

