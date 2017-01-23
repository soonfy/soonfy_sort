"use strict";
const index_1 = require("./index");
let arr = [];
for (let i = 1; i <= 20; i++) {
    arr.push(Math.floor(Math.random() * 30));
}
console.log('>> bubble');
console.log(arr);
console.log(index_1.default.bubble(arr.slice(0)));
console.log('>> selection');
console.log(arr);
console.log(index_1.default.selection(arr.slice(0)));
console.log('>> insertion');
console.log(arr);
console.log(index_1.default.insertion(arr.slice(0)));
console.log('>> shell');
console.log(arr);
console.log(index_1.default.shell(arr.slice(0)));
console.log('>> merge');
console.log(arr);
console.log(index_1.default.merge(arr.slice(0)));
console.log('>> quick');
console.log(arr);
console.log(index_1.default.quick(arr.slice(0)));
