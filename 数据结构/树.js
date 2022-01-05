// 树的基本术语
// 位于树顶部的节点叫作根节点（11）。它没有父节点。树中的每个元素都叫作节点，节点分为内部节点和外部节点。
// 至少有一个子节点的节点称为内部节点（7、5、9、15、13和20是内部节点）。没有子元素的节点称为外部节点或叶节点。
// 节点的一个属性是深度，节点的深度取决于它的祖先节点的数量。比如，节点3有3个祖先节点（5、7和11），它的深度为3。

// 二叉树
// 二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
// 二叉搜索树（BST）是二叉树的一种，但是只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class Node{
  constructor(key){
    // 节点值
    this.key = key 
    // 左侧子节点引用
    this.left = null
    // 右侧子节点引用
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.campareFn = defaultCompare
    this.root = null
  }

  insert(key){
    // 如果根节点为空，则直接用作根节点
    if(this.root == null){
      this.root = new Node(key)
    }else{
      // 节点添加到根节点以外的其他位置，调用辅助函数
      this.insertNode(this.root,key)
    }
  }

  // 传进来的node，是准备插入的key的父节点或者根节点
  insertNode(node,key){
    // 二叉搜索树，左边比父节点小，右边比父节点大
    if(this.campareFn(key,node.key)===Compare.LESS_THAN){
      if(node.left===null){
        node.left = new Node(key)
      }else{
        // 当node.left有节点时，需要再次递归调用
        this.insertNode(node.left,key)
      }
      // 此时要插在右节点
    }else{
      if(node.right === null){
        node.right = new Node(key)
      }else{
        this.insertNode(node.right,key)
      }
    }
  }
}
