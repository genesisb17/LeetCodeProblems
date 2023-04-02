var addTwoNumbers = function(l1, l2) {

    let out = new ListNode();
    let node = out;
    let carry = 0;
    while (l1 != null || l2 != null  || carry != 0){
        let one = l1 ? l1.val : 0;
        let two = l2 ? l2.val : 0;
        let total = one + two + carry;
        carry = Math.floor(total/10);
        temp = new ListNode(total % 10);
        node.next = temp;
        node = node.next;

        if(l1 != null){
            l1 = l1.next;
        }
        if(l2 != null){
            l2 = l2.next;
        }
    }

    return out.next;
};

