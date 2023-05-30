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

function middleNodeCleaner(head: ListNode | null): ListNode | null {
  let fast = head.next;
  let slow = head;

  while (fast) {
    fast = fast.next?.next;
    slow = slow.next;
  }

  return slow;
}

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  while (fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

/*

two pointer: fast and slow (2 step and 1 step).  when fast reaches end, return slow pointer.

Input: head = [1,2,3,4,5]
Output: [3,4,5]

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]

*/
