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

    insert(val, current = this.root) {
        let newNode = new TreeNode(val)
        if (!this.root) { //no root, make a new tree node
            this.root = newNode
        }
        if (val < current.val) {
            if (!current.left) {
                current.left = newNode
            } else {
                this.insert(val, current.left)
            } 
        } else {
            if (!current.right) {
                current.right = newNode
            } else {
                this.insert(val, current.right)
            }
        }
        // 
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

        return
    }
}

module.exports = {
    TreeNode,
    BST
};
