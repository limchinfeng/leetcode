/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing
order, and two integers m and n, representing the number of elements in nums1
and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be
stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
where the first m elements denote the elements that should be merged, and the
last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
Idea 1: Combine 2 arrays and sort it 

time complexity: O(n^2) since it depend the sorting algorithm used
*/
var merge = function(nums1, m, nums2, n) {    
    // Combine the two arrays
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    // Sort the combined array
    nums1.sort((a, b) => a - b);
};

/*
Idea 2 + research: Merge Sort
Combine 2 arrays by putting the largest element at the last position

Time complexity O(m+n)

*/
var merge = function(nums1, m, nums2, n) {
    // Initialize three pointers:
    // i points to the last non-zero element in nums1
    // j points to the last element in nums2
    // k points to the last position in the merged array
    let i = m - 1, j = n - 1;
    let k = m + n - 1;

    // Merge the arrays in a sorted manner (from right to left)
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            // If the current element in nums1 is larger or equal, place it in
            // the next available position in nums1
            nums1[k] = nums1[i];
            i--;
        } else {
            // If the current element in nums2 is larger, place it in the next
            // available position in nums1
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Copy any remaining elements from nums2 to nums1
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }

    // The merged array is stored in nums1
    return;
};