let convert = {
    num1: 2342,
    num2: "2342",
    num3: "23.42",
    num4: 23.4599,
}

let num2int = parseInt(convert.num2);
let num3int = Number(convert.num3);

console.log(typeof convert.num1.toString());
console.log(convert.num1)
console.log(typeof num2int);
console.log(num2int);
console.log(typeof num3int);
console.log(num3int);
console.log(convert.num4.toFixed(2));