let book = ["advance java", 200, 300];
//let name =[book[0]];
//let name =[book[1]];
//let name =[book[2]];

//let [name, pages, price] = book;
//console.log(price);

let [name, pages, price,publication = "priyapublication"] = book;
console.log(publication);//undifined error
