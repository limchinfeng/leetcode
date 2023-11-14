/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/


/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Moore’s Voting Algorithm 
  
*/

var majorityElement = function (nums) {
  // Initialize sol and cnt to store the solution and its frequency for respective iterations...
  let solution,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    // If cnt is equal to zero, update sol as sol = i
    if (count == 0) {
      solution = nums[i];
      count++;
    }
    // If i is equal to candidate, increment cnt...
    else if (solution == nums[i]) {
      count++;
    }
    // Otherwise, decrement cnt...
    else {
      count--;
    }
  }
  return solution;
};
