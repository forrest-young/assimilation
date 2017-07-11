// Range function takes (ideally) an integer
// start and an integer end and returns an array
// containing each integer in-between.
function range(start, end){
  if (start > end){
    var temp = start
    start = end
    end = temp
  }

  var list = []

  for (var i = 0; i <= (end - start); i++){
    list.push(start+i)
  }

  return list
}

console.log(range(1,5))
console.log(range(5,1))

function sum(array){
  var total = 0

  for (var i = 0; i < array.length; i++){
    total += array[i]
  }

  return total
}

console.log(sum(range(1,5)))
