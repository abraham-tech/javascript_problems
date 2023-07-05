function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

const pathSum = function(root, targetSum) {
    function recurse(root, currSum){
        if(root === null) return false;

        currSum += root.val;

        if(!root.left && !root.right){
            return currSum == targetSum;
        }
        return recurse(root.left, currSum) || recurse(root.right, currSum);
    }
    return recurse(root, 0);
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

console.log("Result: ", pathSum(root, 22));
