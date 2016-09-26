/**
 * main entry
 */

/**
 * data
 */
let data = [];
let index = 1;
while(index <= 10){
  data.push(Math.floor(Math.random() * 20 + 1));
  index++;
}
console.log('原始数组是', data);

/**
 * bubble sort demo
 */

let Bubble = require('./bubble');
let arr = Bubble.bubbleSort(data);
console.log('冒泡排序后数组是', arr);
arr = Bubble.bubbleSort_new(data);
console.log('改进冒泡排序后数组是', arr);

/**
 * selection sort demo
 */

let Selection = require('./selection');
arr = Selection.selectionSort(data);
console.log('选择排序后数组是', arr);

console.log(data);
