"use strict";
// private or Hash both are access modifiers both used with in class we can not acces
// properties outside of the class but, the different is Hash(#) is used in javscript as well as,
// typescript but, private used only in typescript but, it is possible to run it in javascript 
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _book_name;
// static: it is used within class name so, no need to create object of class 
// & it is static or constant across the object 
class book {
    constructor(name, price) {
        _book_name.set(this, void 0);
        __classPrivateFieldSet(this, _book_name, name, "f");
        this.price = price;
    }
    provideKnowledge() {
        return "This " + __classPrivateFieldGet(this, _book_name, "f") + " gives knowlege about Hemokalaani";
    }
    static page() {
        return "total pages " + this.pages;
    }
}
_book_name = new WeakMap();
book.pages = 350; // try private, protected
class richDadAndPoorDad extends book {
    constructor(name, price) {
        super(name, price);
        this.pages = book.pages + " pages";
    }
}
let sindhHero = new book("Sindh jo Hero", 300);
// console.log(sindhHero.name, sindhHero.provideKnowledge());
let richDpoor = new richDadAndPoorDad("Rich Dad & Poor Dad", 250);
console.log(richDadAndPoorDad.page());
