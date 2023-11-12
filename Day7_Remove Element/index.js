/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/* 

first solution: using loop by storing the not selected value to another array and get the new array length
Time complexity = O(n)
Space complexity = O(n)

*/
var removeElement = function (nums, val) {
  let count = [];

  for (let num of nums) {
    if (num != val) {
      count.push(num);
    }
  }
  let numslength = count.length;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = count[i];
  }

  return numslength;
};


/* 

Second solution: using loop by storing the not selected value to another array and get the new array length
Time complexity = O(n)  - faster than the first one
Space complexity = O(n) - lesser than the first one

*/
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
};