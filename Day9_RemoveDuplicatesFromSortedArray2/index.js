/*

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/*  
  first loop 
  => condition 1 if l,m,r same number, replace r with _
  => condition 2 if l,m same and r not same, move l to r , m=l+1, r=m+1
  => codition 3 all not same them move all to 1 position right

  second loop
  => condition 1 if i = _ and j != _, switch both position
  => condition 2 if if i and j = _, move j to 1 right position
  => condition 3 both is not _ then move all to 1 right 
*/
var removeDuplicates = function (nums) {
  let k = nums.length;
  let l = 0;
  let mid = 1;
  let r = 2;

  while (r < nums.length) {
    if (nums[l] === nums[mid] && nums[r] === nums[mid]) {
      nums[r] = "_";
      k--;
      r++;
    } else if (nums[l] === nums[mid] && nums[mid] !== nums[r]) {
      l = r;
      mid = l + 1;
      r = mid + 1;
    } else {
      l++;
      mid++;
      r++;
    }
  }
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === "_" && nums[j] !== "_") {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[i] === "_" && nums[j] === "_") {
      j++;
    } else {
      i++;
      j++;
    }
  }
  return k;
};


/*  
  loop
  => check for the count of the repetitive number
    => if same then count++
    => else number not same reset count to 1
    => if count <= 2, num[index] = nums[i] to store only 2 numbers 
*/
var removeDuplicates = function (nums) {
  if (nums.length === 2) {
    return nums.length;
  }
  let count = 1;
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 2) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

/*
  Inside the loop, it checks if the element at the current i index is different from the element at k - 2 index. 
  If true, it means a new element is encountered, and it's added to the array at index k. 
  The k pointer is then incremented.
*/
var removeDuplicates = function (nums) {
  if (nums.length < 3) {
    return nums.length;
  }
  let k = 2,
    i = 2;
  for (; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};