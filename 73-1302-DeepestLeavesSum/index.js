function TreeNode(val, left, right){
    this.val = val === undefined? 0 : val;
    this.left = left === undefined? null: left;
    this.right = right === undefined? null: right;
    return this;
}

const deepestLeavesSum = function (root) {
    let deepLevel = 0;
    let sum = 0;

    function dfs(root, level){
        if(root === null) return;

        if(level === deepLevel){
            sum += root.val;
        }

        if(level > deepLevel){
            deepLevel = level;
            sum = root.val;
        }
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);

    }

    dfs(root, 0);
    return sum;

}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(7);
root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(8);

console.log(deepestLeavesSum(root));
