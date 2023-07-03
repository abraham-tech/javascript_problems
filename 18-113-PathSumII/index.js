function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

const pathSum = function(root, targetSum) {
    let res = [];

    function dfs(root, currSum, currArr) {
        if (root === null) {
            return; // return undefined instead of an empty array
        }

        currSum += root.val;
        currArr.push(root.val);

        if (!root.left && !root.right && currSum === targetSum) {
            res.push([...currArr]);
        }
        dfs(root.left, currSum, currArr);
        dfs(root.right, currSum, currArr);

        // backtrack
        currArr.pop();
    }

    dfs(root, 0, []);
    return res;
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
