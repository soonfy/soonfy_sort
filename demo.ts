/**
 *  test
 */

import sort from './index';

let arr: number[] = []
for (let i: number = 1; i <= 20; i++){
  arr.push(Math.floor(Math.random() * 30))
}
console.log('>> bubble');
console.log(arr);
console.log(sort.bubble(arr.slice(0)))
console.log('>> selection');
console.log(arr);
console.log(sort.selection(arr.slice(0)))
console.log('>> insertion');
console.log(arr);
console.log(sort.insertion(arr.slice(0)))
console.log('>> shell');
console.log(arr);
console.log(sort.shell(arr.slice(0)))
console.log('>> merge');
console.log(arr);
console.log(sort.merge(arr.slice(0)))
console.log('>> quick');
console.log(arr);
console.log(sort.quick(arr.slice(0)))
