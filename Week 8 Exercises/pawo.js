let book = {
    name: "Harry Potter and the Half Blood Prince", 
    author: "J.K Rowling",
    yearPublished: 2005,
}
book.name = "Harry Potter and the Philosophers Stone";
console.log(book);

let car = {
    make: "Mitsubishi",
    model: "Lancer Evolution III",
    year: 1995,
}
car["model"] = "Lancer GLXI";
console.log(car);

let artist = {
    name: "Barrington DeVaughn Hendricks",
    age: 35,
    genre: "Hip-Hop/Rap",
}

console.log(artist);

console.log(document.body);
console.dir(document.body);