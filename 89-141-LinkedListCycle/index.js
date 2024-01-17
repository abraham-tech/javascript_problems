function LinkedListNode(val){
    this.val = val;
    this.next = null;
};


var hasCycle = function(head){
    if(head === undefined){
        return false;
    }

    let fast = head;
    let slow = head;

    while(fast){
        if(fast.next === null){
            return false;
        }else{
            fast = fast.next.next;
            slow = slow.next;
            if(fast === slow){
                return true;
            }
        }
    }
    return false;
}


let head = new LinkedListNode(3);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(0);
head.next.next.next = new LinkedListNode(-4);
head.next.next.next.next = head.next ;

console.log(hasCycle(head));
