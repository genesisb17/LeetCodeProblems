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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if(root == null) return [];
    let out = [];
    let stack: [TreeNode, number[]][] = [[root, [root.val]]];

    while(stack.length){
        let [node, path] = stack.pop();
        if(node.left){
            stack.push([node.left, [...path, node.left.val]]);
        }
        if(node.right){
            stack.push([node.right, [...path, node.right.val]]);
        }
        if(!node.left && !node.right){
            const sum = path.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            if(sum == targetSum){
                out.push(path);
            }
        }
    }
    return out;
};