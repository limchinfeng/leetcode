/*
Given a string s, return the longest 
palindromic substring in s.

 

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.

*/


/**
 * @param {string} s
 * @return {string}
 */


/*
Idea 1: Expand Around Center method to check the character from the centre. 
Time complexity for this method is O(n^2) since there is a nested loop.
*/


var longestPalindrome = function (s) {
    let max = ''; // Variable to store the longest palindromic substring
    
    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        // Iterate twice to handle both odd and even length palindromes
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;

            // Expand around the center to find the palindrome
            while (s[left] && s[left] === s[right]) {
                left--;
                right++;
            }

            // Update the longest palindrome if necessary
            if ((right - left - 1) > max.length) {
                max = s.substring(left + 1, right)
            }
        }
    }
    
    return max; // Return the longest palindromic substring
}

/*
Online research answer: Manacher's algorithm which utilizes the concept of
palindrome symmetry to avoid unnecessary character comparisons.

time complexity of O(n)
*/

var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }

    // Preprocess the input string
    // by inserting special characters '#' 
    // to handle even length palindromes as well
    var processed_s = '^' + s.split('').join('#') + '#$';

    var n = processed_s.length;
    var p = new Array(n).fill(0); // Array to store lengths of palindromes

    var center = 0; // Center of the current palindrome
    var right = 0; // Right boundary of the current palindrome
    var max_length = 0; // Length of the longest palindrome
    var max_center = 0; // Center of the longest palindrome

    for (var i = 1; i < n - 1; i++) {
        if (i < right) {
            var mirror = 2 * center - i;
            p[i] = Math.min(right - i, p[mirror]); // Use symmetry
        }

        // Attempt to expand the palindrome centered at 'i'
        while (processed_s[i + 1 + p[i]] === processed_s[i - 1 - p[i]]) {
            p[i]++;
        }

        // Update the center and right boundary if the palindrome expands past 'right'
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }

        // Update the longest palindrome if necessary
        if (p[i] > max_length) {
            max_length = p[i];
            max_center = i;
        }
    }
    // Extract the longest palindromic substring from the processed string
    var start = Math.floor((max_center - max_length) / 2);
    return s.substring(start, start + max_length);
};