// 相关术语
// 由一条边连接在一起的顶点称为相邻顶点。
// 一个顶点的度是其相邻顶点的数量。
// 路径是顶点v 1, v2,…, vk的一个连续序列，其中vi和vi+1是相邻的。以上一示意图中的图为例，其中包含路径A B E I和A C D G。
// ，环也是一个简单路径. 如果图中不存在环，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的。

function timeout(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('1')
      resolve('done')
    },ms)
  })
}

timeout(100).then((value)=>{
  console.log(value)
})

let p1 = Promise.reject('2')

let p2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(p1)
  }, 1000);
})

setTimeout(() => {
  console.log(p2)
}, 2000);