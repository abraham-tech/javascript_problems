function TreeNode(val, left, right){
    this.val = val === undefined? 0 : val;
    this.left = left === undefined? null : left;
    this.right = right === undefined? null : right;
}

const balanceBST = function(root){
    let arr = [];
    inOrder(root, arr);
    return buildTree(arr);

}

function inOrder(root, arr){
    if(!root) return;

    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}

function buildTree(arr){
    if(arr.length === 0) return null;
    let mid = Math.floor(arr.length/2);
    let head = new TreeNode(arr[mid]);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid+1);

    head.left = buildTree(left);
    head.right = buildTree(right);

    return head;
}

let root = new TreeNode(1);
root.right = new TreeNode(2)
root.right.right = new TreeNode(3)
root.right.right.right = new TreeNode(4)

// let arr2 = []
// inOrder(balanceBST(root), arr2)
console.log(balanceBST(root))

