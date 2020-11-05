class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, beforeThisItem) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let previousNode = this.head;
      let tempNode = this.head;
      while (tempNode.value !== beforeThisItem) {
        previousNode = tempNode;
        tempNode = tempNode.next;
      }
      previousNode.next = new _Node(item, tempNode);

      return this.head;
    }
  }

  insertAfter(item, afterThisItem) {
    if (afterThisItem.next === null) {
      this.insertLast(item);
    } else {
      let previousNode = this.find(afterThisItem);
      let newNode = new _Node(item);
      newNode.next = previousNode.next;
      previousNode.next = newNode;

      return this.head;
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let previousNode = this.head;
      let tempNode = this.head;
      while (tempNode !== null && position - 1 > 0) {
        previousNode = tempNode;
        tempNode = tempNode.next;
        position--;
      }
      previousNode.next = new _Node(item, tempNode);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(list) {
  let node = list.head;
  let str = '';
  while (node !== null) {
    str += node.value + ', ';
    node = node.next;
  }
  return str;
}

function size(list) {
  let count = 0;
  let node = list.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}

function isEmpty(list) {
  return !this.head || list.length === 0;
}

function findPrevious(list, beforeThisItem) {
  let previousNode = list.head;
  let tempNode = list.head;
  while (tempNode.value !== beforeThisItem) {
    previousNode = tempNode;
    tempNode = tempNode.next;
  }

  return previousNode;
}

function findLast(list) {
  let lastNode = list.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
  }
  return lastNode;
}

function reverse(list) {
  let node = list.head;
  let prev, next;

  while (node !== null) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  list.head = prev;
  let lastNode = findLast(list);
  lastNode.next = null;

  return list;
}

function findThirdFromTheEnd(list) {
  let previousNode = list.head;
  let tempNode = list.head;
  let position = size(list) - 2;
  while (tempNode !== null && position > 0) {
    previousNode = tempNode;
    tempNode = tempNode.next;
    position--;
  }

  return previousNode.value;
}

function findTheMiddle(list) {
  let previousNode = list.head;
  let tempNode = list.head;
  let position = size(list) / 2;
  while (tempNode !== null && position > 0) {
    previousNode = tempNode;
    tempNode = tempNode.next;
    position--;
  }

  return previousNode.value;
}

function cycleList(list) {
  let cycle1 = list;
  let cycle2 = list;

  while (cycle1 && cycle1.next) {
    cycle2 = cycle2.next;
    cycle1 = cycle1.next.next;

    if (cycle2 === cycle1) {
      return true;
    }
  }
  return false;
}

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');

  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Helo'));
  // console.log(findLast(SLL));
  // console.log(display(SLL));
  // reverse(SLL);
  // console.log(display(SLL));
  // console.log(findThirdFromTheEnd(SLL));
  // console.log(findTheMiddle(SLL));
}

main();

module.exports = LinkedList;
