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

    insert(val) {
        if (!this.root) { //no root, make a new tree node
            this.root = new TreeNode(val)
        }
        let newNode = new TreeNode(val)
        let current = this.root;
        while (current) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } else {
                    current.left = new TreeNode(val)
                    current.left.val = val;
                }
            }
        }
    }
}

module.exports = {
    TreeNode,
    BST
};
