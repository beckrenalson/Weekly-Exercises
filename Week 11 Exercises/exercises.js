// Task 1

let numbers = [4, 3, 6, 2, 5, 1];

export function sortArray(array) {
   return array.sort((a, b) => a - b);
};

console.log(sortArray(numbers));

// Task 2

let numbersToSquare = [1, 2, 3];

export function squareNumbers(array) {
    return array.map((num) => num * num); 
};

console.log(squareNumbers(numbersToSquare));

// Task 3 

let filterNumbers = [1, 2, 3, 4, 5];

export function filterEvens(array) {
    return array.filter(num => num % 2 === 0);
};

console.log(filterEvens(filterNumbers));

// Task 4

let numbersToAdd = [1, 2, 3, 4, 5];

export function sumArray(array) {
    return array.reduce(function(accumulator, currentValue) {   
        return accumulator + currentValue;
    });
};

console.log(sumArray(numbersToAdd));

// Task 5

let carMakes = ["Mitsubishi", "Nissan", "Subaru", "Mazda", "Toyota"];
let person = {
    name: "Beck",
    age: "22",
    dob: "16/02/03",
    height: "183"
};

export function extractValues() {
    let [one, , three] = carMakes;
    let {name, height} = person;
    return {
        one,
        three,
        name,
        height
    }
};

console.log(extractValues(carMakes, person));

// Task 6

let arr1 = [1, 2];
let arr2 = [3, 4];

export function combineArrays() {
    let combined = [...arr1, ...arr2];
    return combined;
};

console.log(combineArrays());

// Task 7 

let numbersToAverage = [1, 2, 3, 4, 5];

export function averageOfArguments(...num) {
    let sum = 0;
    num.forEach((element) => {
        sum = element + sum;
    });
    return sum / num.length;
};

console.log(averageOfArguments(...numbersToAverage));

// console.log(averageOfArguments(numbersToAverage));
// console.log(averageOfArguments([1, 2, 3, 4, 5]));

// console.log(averageOfArguments(...numbersToAverage));
console.log(averageOfArguments(1, 2, 3, 4, 5));
console.log(averageOfArguments(9, 7));

// Task 8

export function createGreeting(name = "World") {
    console.log(`Hello, ${name}!`);
};

createGreeting();