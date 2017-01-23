"use strict";
const merger = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }
    if (left.length) {
        arr = arr.concat(left);
    }
    if (right.length) {
        arr = arr.concat(right);
    }
    return arr;
};
function merge(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2), left = arr.slice(0, middle), right = arr.slice(middle);
    return merger(merge(left), merge(right));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = merge;
