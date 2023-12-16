function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


const kthSmallest = function(tree, k){
    let arr = [];
    inOrder(tree, arr);
    console.log(arr);
    return findKth(arr, k);
}

function inOrder(tree, arr){
    if(!tree) return;
    inOrder(tree.left, arr);
    arr.push(tree.val);
    inOrder(tree.right, arr)
}

function findKth(arr, k){
    if(arr.length < k){
        return null;
    }
    return arr[k];
}


const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);


const root2 = new TreeNode(5);
root2.left = new TreeNode(3);
root2.right = new TreeNode(6);
root2.left.right = new TreeNode(4);
root2.left.left = new TreeNode(2);
root2.left.left.left = new TreeNode(1);

console.log( kthSmallest(root2, 2));
