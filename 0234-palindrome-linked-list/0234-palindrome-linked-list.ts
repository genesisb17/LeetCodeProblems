/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    
    
    let slow = head;
    let fast = head; 
    while(fast != null && fast.next != null && fast.next.next != null){
      slow = slow.next;
      fast = fast.next.next;
    }
    
    let previous = null;
    let current = slow; 
    let temp = null;
    
    while(current != null){
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    
    let half = previous;
    fast = head;
  
    
    while (half != null && fast!=null){
      if(half.val!=fast.val){
        return false;
      }
      half = half.next;
      fast = fast.next;
    }

    return true;
    
};