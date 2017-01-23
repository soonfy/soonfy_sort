"use strict";
const util_1 = require("./util");
const partition = (arr, left, right) => {
    let partIndex, index = left + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[left]) {
            util_1.swap(arr, i, index);
            index++;
        }
    }
    partIndex = index - 1;
    util_1.swap(arr, left, partIndex);
    return partIndex;
};
function quick(arr, left, right) {
    let len = arr.length, partIndex;
    left = typeof left === 'number' ? left : 0;
    right = typeof right === 'number' ? right : len - 1;
    if (left < right) {
        partIndex = partition(arr, left, right);
        quick(arr, left, partIndex - 1);
        quick(arr, partIndex + 1, right);
    }
    return arr;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = quick;
