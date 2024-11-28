let peliculas = require("./peliculas")

for (let i = 0; i < peliculas.length; i++) {
    console.log("==============================");
    console.log(peliculas[i].id);
    console.log(peliculas[i].rating);
    console.log(peliculas[i].awards);
    console.log(peliculas[i].length);
    console.log(peliculas[i].price);
    console.log(peliculas[i].genre);
    console.log("===============================");
}
