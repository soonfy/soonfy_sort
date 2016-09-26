/**
 * selection sort
 * @method selectionSort
 * @precess
 * 在未排序的数组中找出最小的数值，存放在最前面
 */
exports.selectionSort = function (data) {
  console.time('选择排序耗时');
  let arr = data.slice(0);
  let len = arr.length;
  let mindex, temp;
  for(let i = 0; i < len - 1; i++){
    mindex = i;
    for(let j = i + 1; j < len; j++){
      if(arr[j] < arr[mindex]){
        mindex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[mindex];
    arr[mindex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}
