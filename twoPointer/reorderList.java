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

 class ListNode {
  int val;
  ListNode next;
  ListNode(int x) { val = x; }
}

public class Solution {
  public void reorderList(ListNode head) {
      if (head == null || head.next == null || head.next.next == null) {
          return;
      }

      // Step 1: Find the middle
      ListNode slow = head;
      ListNode fast = head;

      while (fast.next != null && fast.next.next != null) {
          slow = slow.next;
          fast = fast.next.next;
      }

      ListNode secondHalf = slow.next;
      slow.next = null;

      // Step 2: Reverse the second half
      ListNode prev = null;
      ListNode current = secondHalf;
      ListNode next = null;

      while (current != null) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }

      secondHalf = prev;

      // Step 3: Merge the two halves
      // Input: head = [1,2,3,4,5]

      // 1st half: [1,2,3]
      // reversed 2nd half: [5, 4]

      // Output: [1,5,2,4,3]

      ListNode firstHalf = head;

      while (firstHalf != null && secondHalf != null) {
          ListNode temp1 = firstHalf.next; // 2, 3
          ListNode temp2 = secondHalf.next; // 5, 2

          firstHalf.next = secondHalf; // [1,5], 
          secondHalf.next = temp1; // [5,2]

          firstHalf = temp1; // 2
          secondHalf = temp2; // 5
      }
  }
}




// class Solution {
//     public void reorderList(ListNode head) {
//       ListNode pointerOne = head;
//       ListNode pointerTwo = head;
//       ListNode dummyHead = new ListNode();
//       ListNode curNodeRes = dummyHead;
//       int numNodes = 1;

//       while (pointerTwo.next != null) {
//         pointerTwo = pointerTwo.next;
//         numNodes += 1;
//       }

//       pointerTwo = head;

//       while (numNodes > 0) {
//         for (int i = 0; i < numNodes; i++) {
//           pointerTwo = pointerTwo.next;
//         }

//         curNodeRes.next = pointerOne;
//         curNodeRes.next.next = pointerTwo;

//         pointerOne = pointerOne.next;
//         pointerTwo = head;
//         curNodeRes = curNodeRes.next.next;
//         numNodes -= 2;
//       }

//       return dummyHead.next;
//     }
// }


/*
 * Input: head = [1,2,3,4]
    Output: [1,4,2,3]
 * 
 * 
 * Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]


-

two pointers and probably a temp node

  construct the new ll two nodes at a time.  each iteration we start one node closer to
  the center from each side.

  ex: 

  iteration 1: 

    [1, 2, 3, 4]

    pointer1: 1
    pointer2: 4 (track num nodes in ll)
    numSteps = 3

    add the new nodes: [1, 4]

    head = head.next
    numSteps -= 1

  iteration 2:

    pointer1: 2
    pointer2: 3 (track num nodes in ll)
    numSteps = 2

    add the new nodes: [1, 4, 2, 3]

    head = head.next
    numSteps -= 1

  iteration 3:

    terminate b/c numSteps = 1 ?

 * 
 */