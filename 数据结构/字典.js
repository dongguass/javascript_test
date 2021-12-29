class Dictionary{
  constructor(){
    this.table = {}
    this.toStrFn = defaultToString
  }

  // 检测一个键是否存在于字典中
  hasKey(key){
    return this.table[this.toStrFn(key)] !== null
  }

  // 设置键值
  set(key,value){
    if(key != null &&value !== null){
      this.table[this.toStrFn(key)] = new ValuePair(key,value)
      return true
    }
    return false
  }

  // 从字典移除一个值
  remove(key){
    if(this.hasKey(key)){
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  // 
  get(key){
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null? undefined: valuePair.value
  }

  // 以数组形式返回键值对
  keyValues(){
    return Object.values(this.table)
  }
}

function defaultToString(item){
  if(item === null){
    return 'NULL'
  }else if(item === undefined){
    return 'UNDEFINED'
  }else if(typeof item === 'string' || item instanceof String){
    return `${item}`
  }
  // 如果是对象，则需要调用toString方法
  return item.toString()
}

class ValuePair{
  constructor(key,value){
    this.key = key
    this.value = value
  }

  toString(){
    return `[#${this.key}:${this.value}]`
  }
}

const d = new Dictionary()
d.set('kkk','jjj')
d.set('2kk','jjj')
d.set('3kk','jjj')
d.set('4kk','jjj')
console.log(d)
console.log(d.hasKey('kkk'))
console.log(d.keyValues())