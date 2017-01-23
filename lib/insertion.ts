/**
 *  @file insertion sort apriori
 *  @author soonfy <soonfy@163.com>
 */

/**
 * @method insertion sort
 * insertion sort
 * @export
 * @param {any} arr
 */
export default function insertion(arr: number[]): number[] {
  let len: number = arr.length,
    preIndex: number,
    current: number;
  for (let i: number = 1; i < len; i++) {
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
