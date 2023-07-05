function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


const sumNumbers = function(tree){
    let res = [];

    function recurse(root, currArr){
        if(root === null) {
            return 0;
        }
        currArr.push(root.val);
        if(!root.left || !root.right){
            let number = parseInt(currArr.join(""));
            res.push(number);
        }
        recurse(root.left, currArr);
        recurse(root.right, currArr);
        currArr.pop();
    }
    recurse(tree, []);

    return res.reduce((sum, currentValue) => sum + currentValue, 0);

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
const root = new TreeNode(4);
root.left = new TreeNode(9);
root.right = new TreeNode(0);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(1);

console.log( sumNumbers(root));