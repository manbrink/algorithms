# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        stack = []

        while stack or root:
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()
            k -= 1

            if k == 0:
                return root.val

            root = root.right
        return -1  # Return a sentinel value or handle the case where k is out of bounds


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.kth_smallest = None
        self.k_c = k

        self.dfs(root)

        return self.kth_smallest

    def dfs(self, root):
        if root.left:
            self.dfs(root.left)

        if self.kth_smallest == None or (root.val > self.kth_smallest and self.k_c > 0):
            self.k_c -= 1
            self.kth_smallest = root.val

        if root.right:
            self.dfs(root.right)


'''
bst property: all nodes to left are less and all to right are greater

top level track smallest and k_c

dfs inorder traversal to a leaf node

  if smallest is none or this node's value > smallest and k > 0:
    decrement k
    smallest = this node's value
  else if k == 0:
    return smallest

-

'''
