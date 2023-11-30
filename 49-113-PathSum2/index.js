function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


const sumNumbers = function(tree, targetSum){
    let resultArray = [];

    function recurse(root, currentArr){
        if(root === null) return 0;

        currentArr.push(root.val);

        if(!root.left && !root.right){
            resultArray.push([...currentArr]);
        }

        recurse(root.left, currentArr);
        recurse(root.right, currentArr);

        currentArr.pop();
    }

    recurse(tree, []);

    function getSum(nums) {
        return nums.reduce((sum, current) => sum + current, 0);
    }
    return resultArray.filter(nums => getSum(nums) === targetSum);

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
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);
root.right.left = new TreeNode(13);
root.right.right.left = new TreeNode(5);

console.log( sumNumbers(root, 22));
