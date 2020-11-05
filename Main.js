const LinkedList = require('./LinkedList');

// Bubble sort
// function swap(array, i, j) {
//   const tmp = array[i];
//   array[i] = array[j];
//   array[j] = tmp;
// }

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
function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;

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
}

// console.log(qSort(testData));

// 4. Implementing merge sort
function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);

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
}

// console.log(mSort(testData));

// 5. Sorting a linked list using merge sort

function mSortLinkedList(list) {
  let currentNode = list.head;
  if (currentNode.next === null) {
    return list;
  }
  let length = 1;
  while (currentNode.next !== null) {
    length++;
    currentNode = currentNode.next;
  }
  const middle = Math.floor(length / 2);
  let left = splitLinkedList(list, 0, middle);
  let right = splitLinkedList(list, middle, length);

  left = mSortLinkedList(left);
  right = mSortLinkedList(right);

  return mergeLinkedList(left, right);
}

function splitLinkedList(list, start, end) {
  let currentNode = list.head;
  if (currentNode === null) return;
  const splitList = new LinkedList();

  let i = 0;
  while (currentNode !== null) {
    if (i >= start && i < end) {
      splitList.insertLast(currentNode.value);
    }
    i++;
    currentNode = currentNode.next;
  }
  return splitList;
}

function mergeLinkedList(left, right) {
  const newMergedList = new LinkedList();
  let currentLeft = left.head;
  let currentRight = right.head;

  while (currentLeft && currentRight) {
    if (currentLeft.value <= currentRight.value) {
      newMergedList.insertLast(currentLeft.value);
      currentLeft = currentLeft.next;
    } else {
      newMergedList.insertLast(currentRight.value);
      currentRight = currentRight.next;
    }
  }

  while (currentLeft) {
    newMergedList.insertLast(currentLeft.value);
    currentLeft = currentLeft.next;
  }
  while (currentRight) {
    newMergedList.insertLast(currentRight.value);
    currentRight = currentRight.next;
  }
  return newMergedList;
}

function display(list) {
  console.log(JSON.stringify(list, null, 4));
}

const LL = new LinkedList();

function main() {
  LL.insertFirst(7);
  LL.insertFirst(8);
  LL.insertFirst(3);
  LL.insertFirst(6);
  LL.insertFirst(4);
  LL.insertFirst(1);
  LL.insertFirst(2);
  LL.insertFirst(5);
}

main();
// display(mSortLinkedList(LL));

// 6. Bucket Sort

function bucketSort(arr, min, max) {
  const buckets = Array(max - min + 1).fill(0);
  let bucket;
  for (let i = 0; i < arr.length; i++) {
    bucket = arr[i] - min;
    buckets[bucket] += 1;
  }
  const results = [];
  for (let i = 0; i < buckets.length; i++) {
    let total = buckets[i];
    let num = i + min;
    for (let j = 0; j < total; j++) {
      results.push(num);
    }
  }
  return results;
}

// console.log(bucketSort([5, 19, 10, 20, 4, 7, 25, 30, 25, 6, 3, 2, 1], 1, 30));

// 7. Sort in place

function sortInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    swap(i, randomIndex, array);
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const randomize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sortInPlace(randomize));

// 8. Sorting books

function mSortingBooks(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSortingBooks(left);
  right = mSortingBooks(right);
  return mergeBooksArray(left, right, array);
}

function mergeBooksArray(left, right, array) {
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

// function alphaOrder(book1, book2) {}

const bookArray = [
  'Leviathan Wakes',
  'Calibans War',
  'Abaddons Gate',
  'Cibola Burn',
  'Nemesis Games',
  'Babylons Ashes',
  'Presepolis Rising',
  'Tiamats Wrath',
  'Harry Potter and the Prisoner of A',
  'Harry Potter and the Sorcerers Stone',
];
console.log(mSortingBooks(bookArray));
