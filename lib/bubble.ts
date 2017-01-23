/**
 *  @file bubble sort apriori
 *  @author soonfy <soonfy@163.com>
 */

import { swap } from './util';

/**
 * @method bubble sort
 * bubble sort
 * @export
 * @param {any} arr
 */
export default function bubble(arr: number[]): number[] {
  let len: number = arr.length;
  for (let i: number = 1; i < len; i++){
    for (let j: number = 0; j < len - i; j++){
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
