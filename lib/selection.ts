/**
 *  @file selection sort apriori
 *  @author soonfy
 */

import { swap } from './util';

/**
 * @method selection sort
 * selection sort
 * @export
 * @param {any} arr
 */
export default function selection(arr: number[]): number[] {
  let len: number = arr.length,
    minIndex: number;
  for (let i : number = 1; i < len; i++){
    minIndex = i - 1;
    for (let j: number = i; j < len; j++){
      if (arr[minIndex] > arr[j]) {
        swap(arr, minIndex, j)
      }
    }
  }
  return arr
}
