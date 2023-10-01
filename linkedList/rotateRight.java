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

  // general strategy is not to actually shift each element, but to create a circular singly linked list
  // and set the newHead and newEnd appropriately.

 class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) {
            return head;
        }

        int length = 1;
        ListNode tempNode = head;
        while (tempNode.next != null) {
            tempNode = tempNode.next;
            length++;
        }

        // rotating the list by a multiple of its length returns the same list
        k = k % length;
        if (k == 0) {
            return head;
        }

        tempNode.next = head;

        ListNode newEnd = head;
        for (int i = 0; i < length - k - 1; i++) { // length - k represents the number of nodes that will remain at the beginning of the list after rotation. -1 to get the index of the new last node since 0 indexing.
            newEnd = newEnd.next; // what node should be in the original tail's spot once rotated k times?
        }
        ListNode newHead = newEnd.next; // this node rotated k times will be at original head's position
        newEnd.next = null;

        return newHead;
    }
}

// class Solution {
//     public ListNode rotateRight(ListNode head, int k) {
//         ListNode tempNode = null;
//         ListNode curNode = head;

//         while (tempNode != head) {
//             ListNode swapNode = curNode;

//             for (int i = 0; i < k; i++) {
//                 if (swapNode.next == null) {
//                     swapNode = fff;
//                 } else {
//                     swapNode = swapNode.next;
//                 }
//             }

//             tempNode = swapNode;
//             swapNode = curNode;
//             curNode = tempNode;
//         }

//         return head;
//     }
// }

/*
 Input: head = [1,2,3,4,5], k = 2
 Output: [4,5,1,2,3]

 head = 1

 [1,2,3,4,5]

    tempNode = 3;
    swapNode = 1;
    curNode = 3;

 [1,2,1,4,5]

    tempNode = 3;
    swapNode = 1;
    curNode = 3;

 [1,2,1,4,3]

 [1,5,1,4,3]

 [1,5,1,2,3]

 [4,5,1,2,3]

 temp == head, so done?

 -

 need to handle looping from tail to head


 
 */