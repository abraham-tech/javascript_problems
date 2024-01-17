function LinkedListNode(val, next) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
}

const mergeTwoLinkedLists = function(list1, list2) {
    let dummy = new LinkedListNode(0);
    let solution = dummy;

    while(list1 && list2) {
        if(list1.val <= list2.val){
            dummy.next = list1;
            list1 = list1.next;
        }else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    if(list1){
        dummy.next = list1;
    }
    if(list2){
        dummy.next = list2
    }
    return solution.next;
}

let list1 = new LinkedListNode(1);
list1.next = new LinkedListNode(2);
list1.next.next = new LinkedListNode(4);
list1.next.next.next = new LinkedListNode(5);

let list2 = new LinkedListNode(1);
list2.next = new LinkedListNode(3);
list2.next.next = new LinkedListNode(4);
list2.next.next.next = new LinkedListNode(6);
list2.next.next.next.next = new LinkedListNode(8);
let solution = mergeTwoLinkedLists(list1,  list2);

while(solution) {
    console.log(solution.val);
    solution = solution.next;
}
