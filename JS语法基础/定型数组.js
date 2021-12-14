const buf = new ArrayBuffer(16)
const buf2 = buf.slice(4,16)

const fullDataView = new DataView(buf)
console.log(fullDataView.byteLength)
console.log(fullDataView.byteOffset)

const halfDataview = new DataView(buf,0,8)
console.log(halfDataview.byteLength)
console.log(halfDataview.byteOffset)