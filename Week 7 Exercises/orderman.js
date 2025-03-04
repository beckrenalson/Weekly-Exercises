let productType = prompt("Enter product type");
let quantity = prompt("Enter quantity");
let isMember = prompt("Are you a member?");

function calculatePrice(productType, quantity, isMember) {

    let price

    if(productType == "electronics") {
        price = 100;
    }

    if(productType == "clothing") {
        price = 50;
    }

    if(productType == "grocery") {
        price = 20;
    }

    if(isMember == "true") {
        totalPrice = totalPrice / 0.1;
    }

    if(quantity > 5) {
        totalPrice =  totalPrice / 0.05;
    }
}

function totalPrice(price * quantity) {
    return price

}

console.log(calculatePrice);