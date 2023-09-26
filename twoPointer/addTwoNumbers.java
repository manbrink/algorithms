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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode curOne = l1;
        ListNode curTwo = l2;
        ListNode resHead = new ListNode();
        ListNode curRes = resHead;
        int remainder = 0;

        while (curOne != null || curTwo != null || remainder > 0) {
          int sum = remainder;

          if (curOne != null) {
            sum += curOne.val;
            curOne = curOne.next;
          }

          if (curTwo != null) {
            sum += curTwo.val;
            curTwo = curTwo.next;
          }

          if (sum < 10) {
            curRes.next = new ListNode(sum);
            remainder = 0;
          } else {
            curRes.next = new ListNode(sum % 10);
            remainder = 1;
          }

          curRes = curRes.next;
        }

        return resHead.next; // return node after dummy head
    }
}

/*

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

-

create two pointers, one to the head of each ll.  set initial remainder to 0.

create third pointer for head of result.

while either of pointers is not null (ll still has nodes):

  add the two current node values together and the remainder.

  if the sum is < 10, then add this to result ll.  set remainder to 0.

  if sum >= 10, add sum % 10 to result ll.  set remainder to 1.

return result ll

*/