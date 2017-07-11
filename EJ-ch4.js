function range(start, end){
  var list = []

  for (var i = 0; i <= (end - start); i++){
    list.push(start+i)
  }

  return list
}

console.log(range(1,5))

function sum(array){
  var total = 0

  for (var i = 0; i < array.length; i++){
    total += array[i]
  }

  return total
}

console.log(sum(range(1,5)))
