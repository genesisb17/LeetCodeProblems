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

function maxDepth(root: TreeNode | null): number {
    if(root == null) return 0;

    let stack: [TreeNode, number][] = [[root, 0]];
    let max = 0;

    while(stack.length){
        let [root, count] = stack.pop();
         max = Math.max(max, ++count);

        if(root.left){
            stack.push([root.left, count]);
        }
        if(root.right){
            stack.push([root.right, count]);
        }
    }

    return max;
    
};