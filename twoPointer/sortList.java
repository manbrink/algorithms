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
  public ListNode sortList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }

    ListNode mid = getMiddle(head);
    ListNode nextToMid = mid.next;

    mid.next = null; // split ll into halves

    ListNode left = sortList(head);
    ListNode right = sortList(nextToMid);

    return merge(left, right);
  }

  private ListNode getMiddle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  private ListNode merge(ListNode left, ListNode right) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (left != null && right != null) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    
    if (left != null) {
        current.next = left;
    }
    
    if (right != null) {
        current.next = right;
    }
    
    return dummy.next;
  }
}

/*
 * make new list or sort in place?
 * 
 * track curNode.  
 * 
 * compare curNode and curNode.next.  
 * 
 *  if curNode > curNode.next:
 * 
 *    temp = curNode
 *    curNode.next = curNode
 *    curNode = temp
 * 
 * 4 2 1 3
 * 2 4 1 3
 * 2 1 4 3
 * 2 1 3 4
 * 
 * 1 2 3 4
 * 
 * 
 */