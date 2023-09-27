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
  public ListNode removeNthFromEnd(ListNode head, int n) {
      ListNode p1 = head;
      ListNode p2 = head;
      int nodeCount = 0;

      while (p1 != null) {
          p1 = p1.next;
          nodeCount += 1;
      }

      if (nodeCount == 1) {
          return null; // Edge case: List is now empty
      }

      if (nodeCount == n) {
          return head.next; // Edge case: Removing the first node
      }

      // Move p2 to node before node to delete
      for (int i = 1; i < nodeCount - n; i++) {
          p2 = p2.next;
      }

      if (p2.next != null) {
          p2.next = p2.next.next;
      }

      return head;
  }
}




// class Solution {
//     public ListNode removeNthFromEnd(ListNode head, int n) {
//        ListNode p1 = head;
//        ListNode p2 = head;
//        int nodeCount = 0;

//        while (p1 != null) {
//         p1 = p1.next;
//         nodeCount += 1;
//        }

//        if (nodeCount == 1) {
//         return null;
//        }

//        // move p2 to node before node to delete
//        for (int i = 1; i < nodeCount - n; i++) {
//         p2 = p2.next;
//        }

//        if (p2.next != null) {
//          p2.next = p2.next.next;
//        }

//        return head;
//     }
// }

/*
 * move pointer1 to end of ll, counting how many nodes it is moved forward.
 * move pointer2 count - n.  it will be at node before node to be deleted.
 * create pointer3.  pointer3 = pointer2.next.next.
 * pointer2.next = pointer3
 * 
 */