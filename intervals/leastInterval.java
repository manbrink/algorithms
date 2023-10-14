class Solution {
  public int leastInterval(char[] tasks, int coolingInterval) {
      // Initialize an array to store the frequencies of each task.
      int[] frequency = new int[26];
      
      // Calculate the frequency of each task.
      for(char task : tasks) {
          frequency[task - 'A']++;
      }
      
      // Sort the frequencies to get the task with the highest frequency.
      Arrays.sort(frequency);
      
      // Get the maximum frequency and count how many tasks have this frequency.
      int maxFrequency = frequency[25];
      int maxCount = 0;
      for(int freq : frequency) {
          if(freq == maxFrequency) {
              maxCount++;
          }
      }
      
      // Calculate the total time needed.
      int totalTime = Math.max(tasks.length, (maxFrequency - 1) * (coolingInterval + 1) + maxCount);
      
      return totalTime;
  }
}

// If a task has a frequency less than the maximum frequency, it means that it doesn't occur as frequently 
// as the task with the maximum frequency. Therefore, it can be scheduled alongside the tasks 
// with the maximum frequency without any additional idle time.

// In the context of this problem, the maxCount variable represents the number of tasks that have the same 
// highest frequency. These tasks can be scheduled alongside the task with the highest 
// frequency without any additional idle time. Therefore, we add maxCount to the calculation 
// of potential idle slots, rather than multiplying by it.



/*
 
  n represents a constraint, so possibly constraint satisfaction problem

  basically asking how to arrange the tasks and idle time in a way that minimizes
  the amount of idle time

  -

  greedy algorithm: we want to use the char with greatest frequency first because we know
  there will probably be some amount of idle time associated with it.

  max heap: (char, frequency) tuples.  char with highest frequency will always be at root.

  -

  algorithm:

  initialize maxheap, queue, and time = 0

  get frequencies of each char.  add the frequencies to max heap.

  while the maxHeap has elements:
    increment time by 1.  

    pop the maxheap, decrement its value.  
    
    if the new value is not 0:

      add the new value to a queue along with time + n (next time this task is 
      available to be added to heap).

    peek the queue.  if peek element's time <= time, then pop it and add its value to maxheap.
 
  return time

 */