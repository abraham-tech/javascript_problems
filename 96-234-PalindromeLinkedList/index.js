function LinkedListNode(val, next) {
    this.val = val? val: 0;
    this.next = next? next: null;
}

function reverse(head) {

    let prev = null;

    while(head) {
        let ref = head.next;
        head.next = prev;
        prev = head;
        head = ref;
    }

    return prev;
}
const isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    fast = head;
    slow = reverse(slow);

    while(slow) {
        if(slow.val !== fast.val){
            return false;
        }
        slow.next;
        fast.next;
    }
    return true;
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(2);
head.next.next.next = new LinkedListNode(1);

console.log(isPalindrome(head));
