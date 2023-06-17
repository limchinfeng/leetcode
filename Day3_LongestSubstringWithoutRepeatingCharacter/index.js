/*
Given a string s, find the length of the longest substring without repeating
characters.


Example 1:
Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc", with the
length of 3. 

Example 2:
Input: s = "bbbbb" Output: 1 Explanation: The answer is "b", with the length of
1.

Example 3:
Input: s = "pwwkew" Output: 3 Explanation: The answer is "wke", with the length
of 3. Notice that the answer must be a substring, "pwke" is a subsequence and
not a substring.


Constraints:
0 <= s.length <= 5 * 104 
s consists of English letters, digits, symbols and spaces.

*/

/**
 * Notes:
 * 
 * First Idea: nested loop
 * - will have a time complexity of O(n^2), so it is not suitable for larger input
 * 
 * Second Idea: Hash Map
 * - have learnt Hash Map during yesterday class, try to use it for this problem
 * - successful but the code is too long
 * - google and try to improve it
 * 
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */


/*
Idea 1: Clear the entire map and store the current character into 
hashmap when there is a repeated character

Dis: will keep checking the words when there is a repeated character. 
*/
var lengthOfLongestSubstring = function(s) {
    
    let max = 0;
    let map = new Map();

    for(let i=0; i<s.length; i++)
    {
        if(!map.has(s[i]))
        {
            // add the character and its index into hash map
            map.set(s[i], i);

            // calculate the maximum length of the substring that have unrepeated character
            max = Math.max(max, map.size);
        }
        else
        {
            // update the i to the index of the first repeated character
            i = map.get(s[i]);

            // clear the hash map and calculate the length again
            map.clear();
                         
        }
    }
    return max;
};


/*
Idea 2: using sliding windows in hashmap

there will be a starting pointer(left) and current pointer(right). When the
repeated character is detected, it will remove the character at the starting
pointer and check again if there is still repeating word in the hash map. Else
it will store the character in the hash map. At the end, the hash map will only
store the unrepeated character of the substring in the hash map 

Time complexity reduce a lot as it elimate the repeated checking in idea 1

 */
var lengthOfLongestSubstring = function(s) {
    
    let max = 0;

    // staring pointer of the substring
    let left = 0;

    // ending pointer of the substring
    let right = 0;

    let map = new Map();

    while(right < s.length)
    {
        if(!map.has(s[right]))
        {
            // add the character into hash map
            map.set(s[right]);

            // update the ending pointer
            right++;

            // calculate the maximum length of the substring that have unrepeated character
            max = Math.max(max, map.size);
        }
        else
        {
            // keep deleting the first character of the substring until there is
            // no repeated character
            map.delete(s[left])

            // move the starting pointer to right
            left++;                         
        }
    }
    return max;
};


/*

Idea 3 : Sliding windows but without the needs of deleted the duplicated word in
the hash map

it will store the character of the string in the hash map. Starting pointer
(Left) and ending pointer(right) will be use to calculate the length of the
substring which dont have repeated character. When it detects there is repeated
character in the hash map. It will set the starting pointer to the right
position of the first repeated word. This could highly reduce the time
complexity as no deletion will be used


Time complexity O(n) because it depend on the number of character in the
substring

 */

var lengthOfLongestSubstring = function(s) {
    
    let max = 0;

    // staring pointer of the substring
    let left = 0;

    // ending pointer of the substring
    let right = 0;

    let map = new Map();

    for(let i=0; i<s.length; i++)
    {
        // set the left pointer to the first repeated position + 1 
        if(map.has(s[i]) && map.get(s[i]) >= left) {
            k = map.get(s[left]) + 1;
        }
        
        // add character at its index in the hashmap
        map.set(s[i], i);

        // calculate the maximum length of the substring that have unrepeated character
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};

