/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    if(root == null){
        return [];
    }
    let out = [];
    let stack = [root];

    while(stack.length){
        root = stack.pop();
        if(root){
            out.push(root.val);
            if(root.right){
                stack.push(root.right);
            }
            if(root.left){
                stack.push(root.left);
            }
        }
    }
    return out;
    
};