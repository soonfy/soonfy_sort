/**
 *  @file merge sort apriori
 *  @author soonfy <soonfy@163.com>
 */

/**
 *  @method merge from 2 arr to 1
 */
const merger: (left: number[], right: number[]) => number[] = (left, right) => {
  let arr: number[] = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  if (left.length) {
    arr = arr.concat(left)
  }
  if (right.length) {
    arr = arr.concat(right)
  }
  return arr;
}

/**
 * @method merge sort
 * merge sort
 * @export
 * @param {any} arr
 */
export default function merge(arr: number[]) : number[] {
  let len: number = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle: number = Math.floor(len / 2),
    left: number[] = arr.slice(0, middle),
    right: number[] = arr.slice(middle);
  return merger(merge(left), merge(right));
}
