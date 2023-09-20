"use strict";
let Aamar;
Aamar = {
    name: "Aamar Jaleel",
    born: 1940,
    type: "Writer"
};
let Latif = {
    name: "Shah Abdul Latif Sarkar",
    born: 1700,
    type: "Poet"
};
printDetail(Latif);
printDetail(Aamar);
function printDetail(poet) {
    console.log("The great " + poet.type + " " + poet.name, "born at " + poet.born);
}
