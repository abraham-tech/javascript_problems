function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


const sumNumbers = function(tree){
    let resultArray = [];
    function recurse (root){
        if(root === null) return;
        resultArray.push(root.val);
        recurse(root.right);
    }

    recurse(tree);
    return resultArray;

}

// const root = new TreeNode(5);
// root.left = new TreeNode(4);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(11);
// root.left.left.left = new TreeNode(7);
// root.left.left.right = new TreeNode(2);
// root.right.left = new TreeNode(13);
// root.right.right = new TreeNode(4);
// root.right.right.left = new TreeNode(5);
// root.right.right.right = new TreeNode(1);
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);


console.log( sumNumbers(root));
