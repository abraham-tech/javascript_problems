function LinkedListNode(val, next){
    this.val = val === undefined ? 0 : val;
    this.next = next === null? null : next;
}

const removeNthFromEnd = function(head, n){
    let dummy = new LinkedListNode(0, head);
    let left = dummy;
    let right = head;

    for(let i = 0; i < n ; i ++){
        right = right.next;
    }

    while(right){
        right = right.next;
        left = left.next;
    }
    left.next = left.next.next;
    return dummy.next;
}


let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5)

let rev = removeNthFromEnd(head, 2)

while(rev){
    console.log(rev.val)
    rev = rev.next
}
