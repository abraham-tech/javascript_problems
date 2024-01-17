function LinkedListNode(val, next) {
    this.val = val? val : 0;
    this.next = next? next: null;
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

const mergeKLinkedList = function(lists) {
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];

    while(lists.length > 1){
        let list1 = lists.shift();
        let list2 = lists.shift();

        let mergedList = mergeTwoLinkedLists(list1, list2);
        console.log("length is : ", lists.length)
        lists.push(mergedList);
    }
    return lists[0];
}


let list1 = new LinkedListNode(1);
list1.next = new LinkedListNode(2);
list1.next.next = new LinkedListNode(4);
list1.next.next.next = new LinkedListNode(6);

let list2 = new LinkedListNode(1);
list2.next = new LinkedListNode(3);
list2.next.next = new LinkedListNode(4);
list2.next.next.next = new LinkedListNode(5);
list2.next.next.next.next = new LinkedListNode(8);

let list3 = new LinkedListNode(7);
list3.next = new LinkedListNode(9);
list3.next.next = new LinkedListNode(10);
list3.next.next.next = new LinkedListNode(13);

let list4 = new LinkedListNode(0);
list4.next = new LinkedListNode(12);
list4.next.next = new LinkedListNode(18);
list4.next.next.next = new LinkedListNode(20);

let solution = mergeKLinkedList([list1,  list2, list3, list4]);

while(solution) {
    console.log(solution.val);
    solution = solution.next;
}
