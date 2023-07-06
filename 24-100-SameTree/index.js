function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

const isSameTree = function(p, q){
    //base case
     if(p === null && q === null) return true;
     if(p === null || q === null) return false;

     if(p.val === q.val){
         return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
     }
     return false;
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

 console.log("Solution: ", isSameTree(root, root));
