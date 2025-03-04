let password = prompt("Please enter password");

console.log(password);

let expectedPassword = "1234";

if (expectedPassword === password) {
    console.log("Access Granted");
}

else {
    console.log("Access Denied");
}
