const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.top = null;
  }

  root() {
    return this.top;
  }

  add(data) {
    this.top = addInside(this.top, data);
    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchInside(this.top, data);
    function searchInside(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return (data < node.data)
             ? searchInside(node.left, data)
             : searchInside(node.right, data);
    }
  }

  find(data) {
    return findInside(this.top, data);
    function findInside(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return (data < node.data)
             ? findInside(node.left, data)
             : findInside(node.right, data);
    }
  }

  remove(data) {
    this.top = removeFromTree(this.top, data);
    function removeFromTree(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeFromTree(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeFromTree(node.right, data);
        return node;
      } else {
        if ((!node.left) && (!node.right)) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeFromTree(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.top) {
      return;
    }
    let node = this.top;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.top) {
      return;
    }
    let node = this.top;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};