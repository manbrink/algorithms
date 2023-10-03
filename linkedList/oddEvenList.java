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
  public ListNode oddEvenList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }

    ListNode oddHead = head;
    ListNode evenHead = head.next;

    ListNode oddTail = oddHead;
    ListNode evenTail = evenHead;

    int curNodePos = 3; // Start from position 3
    ListNode curNode = evenHead.next;

    while (curNode != null) {
      if (curNodePos % 2 == 0) {
        evenTail.next = curNode;
        evenTail = evenTail.next;
      } else {
        oddTail.next = curNode;
        oddTail = oddTail.next; 
      }

      curNode = curNode.next;
      curNodePos += 1;
    }

    evenTail.next = null; // Set the tail of even list to null to end the list
    oddTail.next = evenHead; // Connect the odd list to the even list

    return oddHead;
  }
}




/*
 
  Input: head = [2,1,3,5,6,4,7]
  Output: [2,3,6,7,1,5,4]

  2 (pos 1) moves 0 spaces

    [2,1,3,5,6,4,7]
    temp = 2

  1 (pos 2) moves 3 spaces

    [2,1,3,5,1,4,7]
    temp = 6

  6 (pos 5) moves -2 spaces

    [2,1,6,5,1,4,7]
    temp = 3

  3 (pos 3) moves -1 spaces

    [2,3,6,5,1,4,7]
    temp = 1

  4 (pos 6) moves 1 spaces

    [2,3,6,5,1,4,4]
    temp = 7

  7 (pos 7) moves -3 spaces

    [2,3,6,7,1,4,4]
    temp = 5
  
  5 (pos 4) moves 2 spaces

    [2,3,6,7,1,5,4]
    temp = 5
  
  odd positions start at 0 and move back by -1 more at each idx.

  even positions start by moving (floor len ll / 2) forward then by 1 less each iteration.
  
  -

  head for even ll and another head for odd ll.


 
 */