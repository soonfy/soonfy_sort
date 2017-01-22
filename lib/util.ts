/**
 *  @file util
 */

/**
 *  @method swap
 *  swap method
 */
export const swap: (arr: number[], i: number, j: number) => void = (arr, i, j) => {
  let temp : number = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
