/**
 * bubble sort
 * @method bubbleSort
 * @process
 * 1.比较相邻元素，如果前者大于后者就交换
 * 2.重复每一对相邻元素，最后元素是最大的
 * 3.遍历除最后一个元素的所有元素
 * 4.循环1-3
 */
exports.bubbleSort = function (data) {
  console.time('冒泡排序耗时');
  let arr = data.slice(0);
  let len = arr.length;
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len - 1 - i; j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.timeEnd('冒泡排序耗时');
  return arr;
}

/**
 * new bubble sort
 * @bubbleSort_new
 * @precess
 * 每次循环遍历同时找出最大，最小元素
 */
exports.bubbleSort_new = function (data) {
  console.time('改进后冒泡排序耗时');
  let arr = data.slice(0);
  let low = 0;
  let high = arr.length - 1;
  let temp, j;
  while (low < high) {
    for(j = low; j < high; j++){
      if(arr[j] > arr[j + 1]){
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    high--;
    for(j = high; j > low; j--){
      if(arr[j] < arr[j - 1]){
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    low++;
  }
  console.timeEnd('改进后冒泡排序耗时');
  return arr;
}
