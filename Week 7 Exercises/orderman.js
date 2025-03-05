// let productType = prompt("Enter product type");
// let quantity = prompt("Enter quantity");
// let isMember = prompt("Are you a member?");

function calculatePrice(productType, quantity, isMember) {

    let price;

    if (productType == "electronics") {
        price = 100;
    }

    if (productType == "clothing") {
        price = 50;
    }

    if (productType == "grocery") {
        price = 20;
    }

    let sumPrice = price * quantity;

    if (isMember == "true") {
        sumPrice = sumPrice * 0.9;
    }

    if (quantity > 5) {
        sumPrice = sumPrice * 0.95;
    }

    if (sumPrice > 500) {
        sumPrice = sumPrice - 50;
    }

    return sumPrice;
}

console.log(calculatePrice("electronics", 5, "true"));
