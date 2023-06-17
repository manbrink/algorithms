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

function isPalindromeLL(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse LL from midpoint to end
  let prev = null;
  while (slow !== null) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // slow is now at end, with pointers towards mid
  let left = head;
  let right = prev;

  while (right !== null) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
}

/*

-

reverse

1 -> 2 -> 3

_

fast & slow pointers

iterate until fast is at end, slow at middle.

reverse the linked list from slow to fast

iterate the original LL and reversed second half of LL, if at any point the node values
do not match, return false.  return true.

*/
