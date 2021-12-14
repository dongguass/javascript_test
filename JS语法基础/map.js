// const m1 = new Map([['k1','v1'],['k2','v2']])

// console.log(m1.size)
// console.log(m1)

// m1.set('k3','v3')
// console.log(m1.has('k2'))
// console.log(m1.get('k3'))
// console.log(m1.size)
// console.log(m1)


const m2 = new Map()
let objk = {}, objv={a:1}, arrk=[], arrv=[]
m2.set(objk,objv)


console.log(m2.get(objk))
objk.foo = 'foo'
console.log(m2.get(objk))