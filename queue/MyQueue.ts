class MyQueue {
  stack: Array<number>;

  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    let el = this.stack[0];
    this.stack = this.stack.slice(1);
    return el;
  }

  peek(): number {
    return this.stack[0];
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/* push 1, 2, 3

always need to be added to index 0

queue [] <-

  [1, 2, 3]

stack -> []

  [1, 2, 3]

*/
