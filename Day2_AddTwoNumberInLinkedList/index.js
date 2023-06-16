/**
 * You are given two non-empty linked lists representing two non-negative
   integers. The digits are stored in reverse order, and each of their nodes
   contains a single digit. Add the two numbers and return the sum as a linked
   list.

   You may assume the two numbers do not contain any leading zero, except the
   number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 *
 * Definition for singly-linked list. 
 * function ListNode(val, next) { 
 * this.val = (val===undefined ? 0 : val) 
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let sum = 0;
    let carry = 0;
    let current = null;
    let result = null;

    // add the value to the next node
    while (l1 || l2 || carry) {
        // sum of the value in l1,l2 and carry
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        // calculate the carry for the next node
        carry = Math.floor(sum / 10);

        // if it is head
        if (current == null) {
            //create a new node
            current = new ListNode(sum % 10);
            result = current;
        }
        // add the modulus sum to the next node
        else {
            current.next = new ListNode(sum % 10);
            current = current.next
        }


        // move l1 and l2 to the next node
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result;
};

/* 
    Time complexity O(max(m,n))
    m = number of node in l1
    n = number of node in l2
    because the operation is based on the number of node in l1 and l2
*/
