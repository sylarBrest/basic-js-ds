const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  getUnderlyingList() {
    if (!this.length) {
      return null;
    } else {
      return this.top;
    }
  }

  enqueue(value) {
    if (!this.length) {
      this.top = new ListNode(value);
    } else {
      let current = this.top;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    let top = null;
    if (this.length) {
      top = this.top;
      this.top = top.next;
    }
    this.length--;
    return top.value;
  }
}

module.exports = {
  Queue
};
