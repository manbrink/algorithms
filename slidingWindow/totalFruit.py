class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        s, e, total_fruit = 0, 0, 0
        len_fruits = len(fruits)
        fruit_count = {}

        if len_fruits == 1:
            return 1

        while e < len_fruits:
            fruit_count[fruits[e]] = fruit_count.get(fruits[e], 0) + 1

            while len(fruit_count) > 2:
                fruit_count[fruits[s]] -= 1

                if fruit_count[fruits[s]] == 0:
                    del fruit_count[fruits[s]]

                s += 1

            total_fruit = max(total_fruit, e - s + 1)
            e += 1

        return total_fruit


'''
Input: fruits = [1,2,3,2,2]
Output: 4
s = 1
e = 4
total_fruit = 4
len_fruits = 5
fruit_count = {2: 3, 3: 1}

'''


# class Solution:
#     def totalFruit(self, fruits: List[int]) -> int:
#         s, e, total_fruit = 0, 0, 0
#         len_fruits = len(fruits)
#         basket = set()

#         if len_fruits == 1:
#             return 1

#         while e < len_fruits:
#             if len(basket) < 2:
#                 basket.add(fruits[e])
#                 e += 1
#             elif fruits[e] in basket:
#                 e += 1
#             else:
#                 s += 1
#                 e = s
#                 total_fruit = e - s
#                 basket = set()

#         return max(total_fruit, e - s)


'''
[0, 1, 2, 2]
len_fruits = 4
s = 1
e = 4
total = 0
basket = {1,2}
correct = 3

create a Set to store the current two basket nums

s and e initialized to idx 0
result max_fruits = 0

while e <= len(fruits):
  if number of items in set < 2:
    add this fruit to set
    e++
  else if this fruit is in the set:
    e++
  else:
    if size of set > max_fruits, update max_fruits
    s = e
    set = {}

return max_fruits

'''
