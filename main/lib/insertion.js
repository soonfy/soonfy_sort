"use strict";
function insertion(arr) {
    let len = arr.length, preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1,
            current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = insertion;
