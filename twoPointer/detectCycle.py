# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return

        slow, fast = head, head

        # try and detect a cycle
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                break

        if not fast.next or not fast.next.next:
            return

        # if we do have a cycle: add a second slow pointer, starting from head.
        # increment it and the original slow until they meet, then return one of them.
        new_slow = head
        while new_slow != slow:
            new_slow = new_slow.next
            slow = slow.next

        return new_slow
