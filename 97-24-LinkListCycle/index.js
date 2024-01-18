function ListNode(val){
    this.val = val;
    this.next = null;
}

const hasCycle = function(head) {
    if(!head) return false;

    let fast = head;
    let slow = head;

    while(fast){
        if(!fast.next){
            return false;
        }else {
            fast = fast.next.next;
            slow = slow.next;
        }
        if(fast === slow) return true;
    }
    return false;
}


let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next ;

console.log(hasCycle(head))
