/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(-999);
  dummy.next = head;
  let prev = dummy;
  let cur = head;

  while (cur !== null) {
    if (cur.val === val) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }

  return dummy.next;
}

/*

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

-

slow = head
fast = head.next

need to check if slow.val = target or fast.val = target on each iteration:

  if slow.val = target:

    temp = slow.next
    slow.next = null
    slow = temp
    fast = fast.next

  else if fast.val = target:

    temp = fast.next
    fast.next = null
    fast = temp
    slow.next = fast





*/
