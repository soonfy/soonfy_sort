/**
 *  @file shell sort apriori
 *  @author soonfy <soonfy@163.com>
 */

import { swap } from './util';

/**
 * @method shell sort
 * shell sort
 * @export
 * @param {any} arr
 */
export default function shell(arr: number[]): number[] {
  let len: number = arr.length,
    temp: number,
    gap: number = 1;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  while (gap >= 1) {
    for (let i: number = gap; i < len; i++) {
      for (let j: number = i; j >= gap && arr[j] < arr[j - gap]; j -= gap) {
        swap(arr, j, j - gap);
      }
    }
    gap = Math.floor(gap / 3);
  }
  return arr;
}
