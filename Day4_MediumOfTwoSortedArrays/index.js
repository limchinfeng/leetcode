/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the
median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).



Example 1: Input: nums1 = [1,3], nums2 = [2] Output: 2.00000 
Explanation: merged array = [1,2,3] and median is 2.

Example 2: Input: nums1 = [1,2], nums2 = [3,4] Output: 2.50000 
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


Constraints: nums1.length == m nums2.length == n 0 <= m <= 1000 0 <= n <= 1000 1
<= m + n <= 2000 -10^6 <= nums1[i], nums2[i] <= 10^6

*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


/*
 
Idea 1: Combine the arrays, sort them and calculate the medium 
Time Complexity = O(m + n)

*/

var findMedianSortedArrays = function (nums1, nums2) {
    // comnine the arrays into arr
    let arr = nums1.concat(nums2).sort((a, b) => a - b);

    // calculate the medium of the arr
    let mid = Math.floor(arr.length / 2);

    // if is odd, return the middle value, else return the mean of the 2 middle values
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};


/*

Research: Binary search to calculate the medium of two array. Time complexity is
O(log m+n) 

*/


var findMedianSortedArrays = function (nums1, nums2) {

    const m = nums1.length;
    const n = nums2.length;

    // Ensure nums1 is the smaller array to perform binary search on
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let low = 0;
    let high = m;

    while (low <= high) {
        // Partition the smaller array (nums1)
        const partitionX = Math.floor((low + high) / 2);
        // Calculate the corresponding partition for the larger array (nums2)
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        // Calculate the elements on the left and right sides of the partitions

        // Elements to the left of partitionX in nums1
        const maxLeftX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        // Elements to the right of partitionX in nums1
        const minRightX = (partitionX === m) ? Number.POSITIVE_INFINITY : nums1[partitionX];

        // Elements to the left of partitionY in nums2
        const maxLeftY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        // Elements to the right of partitionY in nums2
        const minRightY = (partitionY === n) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        // Check if we have found the correct partitions
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                // If the total length is even, take the average of the two middle elements
                const leftMax = Math.max(maxLeftX, maxLeftY);
                const rightMin = Math.min(minRightX, minRightY);
                return (leftMax + rightMin) / 2;
            } else {
                // If the total length is odd, return the larger element from the left side
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // Move the partition towards the left in nums1
            high = partitionX - 1;
        } else {
            // Move the partition towards the right in nums1
            low = partitionX + 1;
        }
    }
};