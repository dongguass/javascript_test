class Set{
  constructor(){
    this.items = {}
  }

  has(element){
    return element in this.items
  }

  add(element){
    // 检查新增的元素是否存在
    if(!this.has(element)){
      // 添加一个element的时候，把它同时作为键和值保存，因为这样有利于查找该元素。
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element){
    if(this.has(element)){
      delete this.items[element]
      return true
    }
    return false
  }

  clear(){
    this.items = {}
  }

  size(){
    // keys方法，它返回一个包含给定对象所有属性的数组。
    return Object.keys(this.items).length
  }

  values(){
    // Object.values()方法返回了一个包含给定对象所有属性值的数组。
    return Object.values(this.items)
  }
}