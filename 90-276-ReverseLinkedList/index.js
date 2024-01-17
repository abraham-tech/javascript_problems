function LinkedListNode(val, next){
    this.val = val === undefined ? 0 : val;
    this.next = next === null? null : next;
}

let reverseLinkedList = function(head){
    let prev = null;
    while(head){
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}


let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5)

let rev = reverseLinkedList(head);

// console.log(rev)
while(rev){
    console.log(rev.val)
    rev = rev.next
}
