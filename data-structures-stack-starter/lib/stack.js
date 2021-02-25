// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;

  }

  push(ele) {
    const newNode = new Node(ele);
    newNode.next = this.top;
    this.top = newNode;
    this.length++
    return this.length;
  }

  pop() {
    if(this.top === null){
        return null;
    }
    const prevTop = this.top;
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
    if(prevTop.next === null) {
        this.top = null;
    }
    return prevTop.value;
  }

  size() {


    
    return this.store.length;
  }

  peek() {
    return this.store[this.store.length - 1];
  }
}

// let stack = new Stack();
// stack.push('A');
// stack.push('B');
// stack.push('C');
// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack)



exports.Node = Node;
exports.Stack = Stack;
