/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode reverseBetween(ListNode head, int left, int right) {
      if (left == right) return head;

      ListNode dummy = new ListNode(0);
      dummy.next = head;

      ListNode prevLeft = dummy;
      ListNode leftNode = head;

      for (int i = 0; i < left - 1; i++) {
          prevLeft = prevLeft.next;
          leftNode = leftNode.next;
      }

      ListNode prev = null;
      ListNode current = leftNode;
      ListNode next = null;

      for (int i = 0; i < right - left + 1; i++) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }

      prevLeft.next = prev;
      leftNode.next = current;

      return dummy.next;
  }
}



// class Solution {
//   public ListNode reverseBetween(ListNode head, int left, int right) {
//     ListNode leftNode = head; 
//     ListNode rightNode = head; 

//     for (int i = 0; i < left - 1; i++) {
//       leftNode = leftNode.next;
//     }

//     for (int i = 0; i < right - 1; i++) {
//       rightNode = rightNode.next;
//     }

//     ListNode prev = null;
//     ListNode current = leftNode;
//     ListNode next = null;

//     while (current != null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//     return head;
//   }
// }

/*
  reverse in place and return original head.

  left <= right.  if left = 2, means the second node.

  first, how to in place reverse a ll:

      ListNode prev = null;
      ListNode current = head;
      ListNode next = null;

      while (current != null) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }

      prev is the head of the reversed ll

      reverse 2,3,4

      p = 2->null
      c = 3->4
      n = null, 3->4
  
  -

  we start with two pointers at head, one to find the left node and one to find the right.

  increment each position - 1 times so they are at their boundary nodes.

  run the reversal algorithm with current = left node pointer

  -

  Input: head = [1,2,3,4,5], left = 2, right = 4
  Output: [1,4,3,2,5]



  -


 
 */