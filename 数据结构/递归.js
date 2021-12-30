// 每个递归函数都必须有基线条件，即一个不再递归调用的条件（停止点），以防止无限递归。
// 递归的一个重要思想是，将一个任务分成小任务，小任务再分逐渐细化，然后小任务的返回结果最终汇聚成任务的结果
function fn(n){
  if(n ===0 || n===1){
    return 1
  }
  return n * fn(n-1)
}

console.log(fn(5))