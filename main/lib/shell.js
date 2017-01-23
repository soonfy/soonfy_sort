"use strict";
const util_1 = require("./util");
function shell(arr) {
    let len = arr.length, temp, gap = 1;
    while (gap < len / 3) {
        gap = gap * 3 + 1;
    }
    while (gap >= 1) {
        for (let i = gap; i < len; i++) {
            for (let j = i; j >= gap && arr[j] < arr[j - gap]; j -= gap) {
                util_1.swap(arr, j, j - gap);
            }
        }
        gap = Math.floor(gap / 3);
    }
    return arr;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = shell;
