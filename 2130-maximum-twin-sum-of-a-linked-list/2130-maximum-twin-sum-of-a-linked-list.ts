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

function pairSum(head: ListNode | null): number {
    
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
  
    let max = 0;
    while (half != null && fast!=null){
      let sum = half.val + fast.val;
      max = sum > max ? sum : max;
      half = half.next;
      fast = fast.next;
    }

    return max;
    
    
};