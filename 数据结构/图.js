// 相关术语
// 由一条边连接在一起的顶点称为相邻顶点。
// 一个顶点的度是其相邻顶点的数量。
// 路径是顶点v 1, v2,…, vk的一个连续序列，其中vi和vi+1是相邻的。以上一示意图中的图为例，其中包含路径A B E I和A C D G。
// ，环也是一个简单路径. 如果图中不存在环，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的。

const res = require('express/lib/response')
let { Dictionary, ValuePair, defaultToString } = require('./字典')

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
    this.adjList = new Dictionary()
  }

  // 向图中添加新顶点
  addVertex(v) {
    // 判断是否包含新增顶点
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      // 设置v 作为键 字典值为空数组
      this.adjList.set(v, [])
    }
  }
  // 向图中添加路径
  addEdge(v, w) {
    // 如果没有顶点则加入
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    // 将w加入到v的邻接表中，我们添加了一条自顶点v到顶点w的边
    this.adjList.get(v).push(w)
    // 无向图需要双向的路径 
    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }

  getVertices() {
    return this.vertices
  }

  getAdjList() {
    return this.adjList
  }

  toString(){
    let s = ''
    for(let i =0;i<this.vertices.length;i++){
      s += `${this.vertices[i]} ->`
      const neighbors = this.adjList.get(this.vertices[i])
      for(let j= 0 ;j < neighbors.length;j++){
        s += `${neighbors[j]}`
      }
      s += '\n'
    }
    return s
  }
}

// 定义颜色区分遍历
const Colors = {
  WHITE:0,
  GREY:1,
  BLACK:2
}

const initializeColor = vertices =>{
  const color ={}
  for(let i = 0; i<vertices.lengt;i++){
    color[vertices[i]] = Colors.WHITE
  }
  return color
}

const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B'); graph.addEdge('A', 'C'); graph.addEdge('A', 'D'); graph.addEdge('C', 'D'); graph.addEdge('C', 'G'); graph.addEdge('D','G'); graph.addEdge('D', 'H'); graph.addEdge('B','E'); graph.addEdge('B','F');graph. addEdge('E','I');

console.log(graph.toString())