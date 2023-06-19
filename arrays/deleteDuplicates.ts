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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (slow && slow.next !== null) {
    fast = slow.next;

    if (slow.val === fast.val) {
      slow.next = fast.next;
      fast.next = null;
    } else {
      slow = slow.next;
    }
  }

  return head;
}

/* 

head = [1,1,1]

head = [1]

-

Input: head = [1,1,2,3,3]
Output: [1,2,3]

-

Input: head = [1,1,2]
Output: [1,2]

-

use fast and slow pointers

iterate the ll:

  if fast.val equals slow.val:

    delete fast: slow.next = fast.next, fast.next = null


*/
