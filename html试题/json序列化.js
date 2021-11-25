let book = {
  title: 'lalala',
  authors: [
    'ydh',
    'sss'
  ],
  edition: 4,
  year: 2021
}

// let jsonText = JSON.stringify(book,["title","edition"])
let jsonText = JSON.stringify(book,(key,value)=>{
  switch(key){
    case "title":
      return "hahahaha"
    case "year":
      return 400
    case "authors":
      return value.join(',')
    case "edition":
      return undefined
    default:
      return value
  }
},4)
let bookcopy = JSON.parse(jsonText)

console.log(jsonText)
