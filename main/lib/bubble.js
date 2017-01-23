"use strict";
const util_1 = require("./util");
function bubble(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                util_1.swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bubble;
