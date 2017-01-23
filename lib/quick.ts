/**
 *  @file quick sort apriori
 *  @author soonfy <soonfy@163.com>
 */

import { swap } from './util';

/**
 *  @method get partition index
 */
const partition: (arr: number[], left: number, right: number) => number = (arr, left, right) => {
  let partIndex: number,
    index: number = left + 1;
  for (let i: number = index; i <= right; i++){
    if (arr[i] < arr[left]) {
      swap(arr, i, index);
      index++;
    }
  }
  partIndex = index - 1;
  swap(arr, left, partIndex);
  return partIndex;
}

/**
 * @method quick sort
 * quick sort
 * @export
 * @param {any} arr
 */
export default function quick(arr: number[], left?: number, right?: number): number[] {
  let len: number = arr.length,
    partIndex: number;
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : len - 1;
  if (left < right) {
    partIndex = partition(arr, left, right);
    quick(arr, left, partIndex - 1);
    quick(arr, partIndex + 1, right);
  }
  return arr;
}
