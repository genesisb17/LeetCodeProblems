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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow = head;
    if(!fast.next){
        return null;
    }
    if(!fast.next.next){
        head.next = null;
        return head;
    }
    fast = fast.next;
    fast = fast.next;
    while(fast && fast.next){
        fast = fast.next;
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return head;
};