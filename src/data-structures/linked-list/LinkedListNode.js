// 定义列表节点，每个节点包含自身value和指向下一个节点的指针
export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
