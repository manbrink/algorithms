// Patterns: fast and slow

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
