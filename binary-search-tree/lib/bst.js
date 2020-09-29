class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, current = this.root) { //need pointer to trace location from the tree
        //default = if nothing is passed in for current, then this.root is passed for c
        let newNode = new TreeNode(val)
        if (!this.root) { //no root, make a new tree node
            //this is now our base case
            //this way, we're not using root, using wherever c is
            this.root = newNode
            //console.log(this.root)
            return; //only need return on base case
        }
        if (val < current.val) {
            if (!current.left) {
                current.left = newNode
            } else {
                this.insert(val, current.left)
            }
        } else { //opposite for duplicate vals
            if (!current.right) {
                current.right = newNode
            } else {
                this.insert(val, current.right)
            }
        }

        // while (current) {
        //     if (val < current.val) {
        //         if (!current.left) {
        //             current.left = newNode;
        //             return this;
        //         }
        //         // current =
        //         else {
        //             if(current.right )
        //             current.left = new TreeNode(val)
        //             current.left.val = val;
        //         }
        //     }
        //     current = false
        // }
    }
}

module.exports = {
    TreeNode,
    BST
};
