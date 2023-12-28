
function ListNode(val, next) {
    this.val = val === undefined? 0: val;
    this.next = next === undefined? null: next;
}
const removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let left = dummy;
    let right = head;

    for(let i = 0; i < n; i++ ){
        right = right.next;
    }

    while(right){
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;
    return dummy.next;
}

let head = new ListNode(1)
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(head,2))
