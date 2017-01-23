# sort  

## ready  

  1. typescript  
  > build and run  
  > config typescript  
  > tsc -w  

  2. ts-node  
  > run  

  ```
  ts-node *.ts
  ```

## apriori  

  > summary  

  ![apriori summary](./images/summary.png)  
  > 参数：n - 数据规模，k - 桶的个数，in-place：常用内存，out-place - 额外内存。  

  1. bubble sort  
  
  ![bubble sort](./images/bubble.gif)  

  * 原理  
  > 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。  
  > 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。  

  * 特殊情况  
  > 最好 - 数组是正序。  
  > 最坏 - 数组是反序。  

  * 总结  
  > 最易懂的排序算法，但是效率较低。

  2. selection sort  

  ![selection sort](./images/selection.gif)  

  * 原理  
  > 依次对相邻的数进行两两比较，不是每比较一次就调换位置，而是一轮比较完毕，找到最大值（或最小值）之后，将其放在正确的位置，其他数的位置不变。
  > 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。  
  
  * 特殊情况  
  > 最好 -  
  > 最坏 -  