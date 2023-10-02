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
  public ListNode swapPairs(ListNode head) {
      if (head == null || head.next == null) {
          return head;
      }

      ListNode dummy = new ListNode(0);
      dummy.next = head;
      ListNode prev = dummy;

      while (head != null && head.next != null) {
          ListNode first = head;
          ListNode second = head.next;
          ListNode nextPair = second.next;

          prev.next = second;
          second.next = first;
          first.next = nextPair;

          prev = first;
          head = nextPair;
      }

      return dummy.next;
  }
}

/*
  prev = dummy

 
  dummy -> 1 -> 2 -> 3 -> 4 -> 5
  first = 1
  second = 2
  nextPair = 3
  dummy -> 2
  2 -> 1
  1 -> 3
  prev = 1
  head = 3

  dummy -> 2 -> 1 -> 3 -> 4 -> 5
  first = 3
  second = 4
  nextPair = 5
  1 -> 4
  4 -> 3
  3 -> 5
  prev = 3
  head = 5

  dummy -> 2 -> 1 -> 4 -> 3 -> 5
 
 */


// class Solution {
//   public ListNode swapPairs(ListNode head) {
//       if (head == null || head.next == null) {
//         return head;
//       }

//       ListNode nodeOne = head;
//       ListNode nodeTwo = head.next;
//       ListNode newHead = nodeTwo;

//       while (nodeTwo != null) {
//         ListNode nextNodeOne = nodeTwo.next;

//         nodeOne.next = nextNodeOne;
//         nodeTwo.next = nodeOne;

//         nodeOne = nextNodeOne;
//         nodeTwo = nodeOne.next;
//       }

//       return newHead;
//   }
// }

/*
  1 -> 2 -> 3 -> 4 -> 5
  1 -> 3
  2 -> 1

  2 -> 1 -> 3 -> 4 -> 5
  3 -> 5
  4 -> 3

  2 -> 1 -> still points to 3..

  nodeOne must point to nextNodeOne, nodeTwo to nodeOne


 */

/*
  swap every two pairs.  can only swap nodes, not values.

  Input: head = [1,2,3,4]
  Output: [2,1,4,3]

  1->2->3->4

  2->1->4->3

  -

  how to simply swap two nodes:

  nodeOne = head;
  nodeTwo = head;

  while nodeTwo != null:

    nodeTwo = nodeTwo.next;
    nextNodeOne = nodeTwo.next

    temp = nodeOne;
    nodeOne = nodeTwo;
    nodeTwo = temp;

  -

  problem: how to track the correct next node after a swap? i.e. 3 in this example.

  before swap:

    nextNodeOne = nodeTwo.next (after setting nodeTwo)

 */