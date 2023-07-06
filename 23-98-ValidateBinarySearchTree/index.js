function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}
const isValidBST = function(root, min, max){
    function recurse(root, min, max){
        // base case
        if(root === null) return true;

        if(root.val >= max || root.val <= min){
            return false;
        }

        // recurrence relation
        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max);
    }
    return recurse(root, -Infinity, Infinity);
}

const root = new TreeNode(8);
root.left = new TreeNode(7);
root.right = new TreeNode(10);
root.left.left = new TreeNode(5);
root.left.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(6);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(13);
root.right.right.left = new TreeNode(12);
root.right.right.right = new TreeNode(14);

console.log("Solution: ", isValidBST(root));