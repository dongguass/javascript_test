let k1 = {id:1},
    k2 = {id:2},
    k3 = {id:3}
const wm = new WeakMap([[k1,'v1'],[k2,'v2'],[k3,'v3']])

wm.set({},'v4')
console.log(wm)