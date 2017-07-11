function range(start, end){
  var list = []

  for (var i = 0; i <= (end - start); i++){
    list.push(start+i)
  }

  return list
}

console.log(range(1,5))
