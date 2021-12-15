const s1 = new Set(['1','2','3'])
s1.add('4')
s1.delete('2')
console.log(s1)

for(let x of s1){
  console.log(x)
}