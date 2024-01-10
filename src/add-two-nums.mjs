/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/
class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0); 
    let current = head; 
    let carry = 0; 
    while (l1 !== null || l2 !== null) {
      let sum = carry; 
  
      if (l1 !== null) {
        sum = sum + l1.val; 
        l1 = l1.next; 
      }
  
      if (l2 !== null) {
        sum = sum +  l2.val; 
        l2 = l2.next; 
      }
  
      carry = Math.floor(sum / 10);
      current.next = new ListNode(Math.floor(sum % 10)); 
      current = current.next; 
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
    return head.next;
  };
  export { addTwoNumbers, ListNode, };