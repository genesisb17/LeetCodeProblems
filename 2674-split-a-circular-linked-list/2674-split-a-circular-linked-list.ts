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

function splitCircularLinkedList(head: ListNode | null): Array<ListNode | null> {
    let slow = head;
    let fast = head.next;
  
    while(fast != head && fast.next != head){
     slow = slow.next;
     fast = fast.next;
    
     if(fast.next != head){
      fast = fast.next
    }
  }
  
    let first = head;
    let middle = slow.next;
    slow.next = first;
    fast.next = middle;
    return [first, middle]
};
