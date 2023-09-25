class MinHeap:
    def __init__(self):
        self.heap = []

    def populate(self, arr):
        for val in arr:
            self.push(val)

    def clear(self):
        self.heap = []

    # add element to heap, maintaining minheap property
    def push(self, val):
        self.heap.push(val)
        self._heapify_up(len(self.heap) - 1)

    # move new element from leaf of internal tree to its correct position
    def _heapify_up(self, idx):
        parent_idx = (idx - 1) // 2

        if idx > 0 and self.heap[parent_idx] < self.heap[idx]:
            self.heap[parent_idx], self.heap[idx] = self.heap[idx], self.heap[parent_idx]
            self._heapify_up(parent_idx)

    # remove and return smallest element (root), maintaining minheap property
    def pop(self):
        if len(self.heap) == 0:
            return None
        elif len(self.heap) == 1:
            return self.heap.pop()
        else:
            smallest = self.heap[0]
            self.heap[0] = self.heap.pop()
            self._heapify_down(0)
            return smallest

    # replace old root with internal tree leaf, then move to its correct position
    def _heapify_down(self, idx):
        left_child_idx = 2 * idx + 1
        right_child_idx = 2 * idx + 2
        smallest = idx

        # compare with left child
        if left_child_idx < len(self.heap) and self.heap[left_child_idx] < self.heap[smallest]:
            smallest = left_child_idx

        # compare with right child
        if right_child_idx < len(self.heap) and self.heap[right_child_idx] < self.heap[smallest]:
            smallest = right_child_idx

        if smallest != idx:
            self.heap[smallest], self.heap[idx] = self.heap[idx], self.heap[smallest]
            self._heapify_down(smallest)
