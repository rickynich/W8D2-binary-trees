function inOrderArray(root) {
  // if the root is null, return an empty array
  if(!root) return []
  // get the array for visiting the left node
  // get the array for visiting the right node
 
    let left = inOrderArray(root.left)
    let right = inOrderArray(root.right)
    
  return left.concat(root.val).concat(right) //on bottom leaf, left and right will be null so only getting the root value array with length 1. keep going 
  // return the left array concatenated with the root value
  //   concatenated with the right array
}


function postOrderArray(root) {
  // if the root is null, return an empty array
  if(!root) return []

  // get the array for visiting the left node
  let left = postOrderArray(root.left)
  // get the array for visiting the right node
  let right = postOrderArray(root.right)

  // return the left array concatenated with the right array
  //   concatenated with the root value
  return left.concat(right).concat(root.val)
}


module.exports = {
  inOrderArray,
  postOrderArray
};
