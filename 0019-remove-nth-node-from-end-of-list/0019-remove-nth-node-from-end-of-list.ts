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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let left = head;
    let right = head;
    
    if (head.next == null && n > 0){
        return null;
    }
    
    for(let i = 0; i < n; i++){ 
        right = right.next;
    }
    while(true){
        if(right == null){
            head = head.next;
            return head;
        }
        if(!right.next){
            break;
        }
        left = left.next;
        right = right.next;
    }
    
    
    left.next = left.next.next;
    
    return head;
};