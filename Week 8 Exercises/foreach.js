let numbers = [1, 2, 3];
let total = 0;

function iterate(num) {
    console.log(num);
}

function addNumbers(num) {
    total = total + num;
};

numbers.forEach(iterate);
numbers.forEach(addNumbers);
console.log(total); 