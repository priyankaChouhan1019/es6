let book ={
    name:"advancejava",
    price:200,
    page:250
};
//way to assign  any property into variable
//let name = book.name;
//console.log(name);

//object destructuring
let {name, price, page} = book;
console.log(price);

//we can change property name
//let {name:title, price, page } =book;
//console.log(title);