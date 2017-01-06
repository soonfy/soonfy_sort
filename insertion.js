/**
 * insertion sort
 * @method insertionSort
 * @process
 * 
 */
exports.insertionSort = function (data) {
  console.time('插入排序耗时');
  let arr = data.slice(0);
  for(let i = 1; i < arr.length; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key){
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.timeEnd('插入排序耗时');
  return arr;
}

/**
 * new insertion sort
 * @method insertionSort_new
 * @process
 * 二分法查找插入位置
 */
exports.insertionSort_new = function (data) {
  console.time('改进后插入排序耗时');
  let arr = data.slice(0);
  for(let i = 1; i < arr.length; i++){
    let key = arr[i],
      left = 0,
      right = i - 1;
    while(left <= right){
      let middle = parseInt((left + right) / 2);
      if(key < arr[middle]){
        right = middle - 1;
      }else{
        left = middle + 1;
      }
    }
    for(let j = i - 1;j >= left; j--){
      arr[j + 1] = arr[j];
    }
    arr[left] = key;
  }
  console.timeEnd('改进后插入排序耗时');
  return arr;
}