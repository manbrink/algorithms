function reverseList(head: ListNode | null): ListNode | null {
  let node = null;
  let nextNode = head;

  while (nextNode !== null) {
    node = new ListNode(nextNode.val, node);
    nextNode = nextNode.next;
  }

  return node;
}

/*

1 -> 2 -> 3

node = null
nextNode = 1

node = (1, null)
nextNode = 2

node = (2, 1)
nextNode = 3

node = (3, 2)
nextNode = null

return (3, 2)

*/
