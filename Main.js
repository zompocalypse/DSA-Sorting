// Bubble sort
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

// Merge sort

let count = 0;
function mergeSort(array) {
  // console.log('mergeSort step: ', count, ' - ', array);
  // count++;
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  // console.log('merge step: ', count, ' - ', array);
  return array;
}

// const test = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
// console.log(mergeSort(test));

// Quicksort

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

const test = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
//console.log(quickSort(test));

// 1. Understanding merge sort
//        [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

//    1.1 - 3rd step - [21, 1] [26, 45] [29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
//    1.2 - 16th step - [1, 2, 9, 21, 26, 28, 29, 45] [16, 49, 39, 27, 43, 34, 46, 40]
//    1.3 - 1st 2 lists merged - [1, 21] and [26, 45]
//    1.4 - 7th 2 lists merged - [1, 21, 26, 45] and [2, 9, 28, 29]

// 2. Understanding quicksort
//    2.1 - [3, 9, 1, 14, 17, 24, 22, 20]
//            -The pivot could have been 14 or 17
//                -All numbers to the left are less than the pivot
//                -All numbers to the right are greater than the pivot
//    2.2 - [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
//            - last item (12)
//                [3] [9] [10] [12] [14, 17, 13, 15, 19, 16]
//            - first item (14)
//                [10, 3, 9] [12] [13] [14] [17, 15, 19, 16]

const testData = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];

// 3. Implementing quicksort
function qSort(array) {
  quickSort(array);
  return array;
}

console.log(qSort(testData));

// 4. Implementing merge sort
function mSort(array) {
  mergeSort(array);
  return array;
}

console.log(mSort(testData));

// 5. Sorting a linked list using merge sort
