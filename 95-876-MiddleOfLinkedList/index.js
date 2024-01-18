
function LinkedListNode(val, next) {
    this.val = val? val : 0;
    this.next = next? next: null;
}

const middleNode = function(list) {
    if(!list || !list.next) return null;

    let slow = list;
    let fast = list;


    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}


let list1 = new LinkedListNode(1);
list1.next = new LinkedListNode(2);
list1.next.next = new LinkedListNode(3);
list1.next.next.next = new LinkedListNode(4);
list1.next.next.next.next = new LinkedListNode(5);



let solution = middleNode(list1);

if(solution) {
    console.log(solution.val);
}
