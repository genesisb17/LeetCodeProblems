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

function postorderTraversal(root: TreeNode | null): number[] {
    let out: number[] = [];
    dfs(root, out);
    return out;
};

function dfs(root: TreeNode, out: number[]){
    if(root){
        dfs(root.left, out);
        dfs(root.right, out);
        out.push(root.val);
    }
}