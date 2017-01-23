"use strict";
const util_1 = require("./util");
function selection(arr) {
    let len = arr.length, minIndex;
    for (let i = 1; i < len; i++) {
        minIndex = i - 1;
        for (let j = i; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                util_1.swap(arr, minIndex, j);
            }
        }
    }
    return arr;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = selection;
