const { NotImplementedError } = require("../lib");
const { ListNode } = require("../extensions/list-node.js");

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
    const toPlain = (node) =>
      node ? { value: node.value, next: toPlain(node.next) } : null;
    return toPlain(this.top);
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.top) {
      this.top = node;
    } else {
      let current = this.top;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.top) {
      return undefined;
    }
    const node = this.top;
    this.top = node.next;
    this.length--;
    return node.value;
  }
}

module.exports = {
  Queue,
};
