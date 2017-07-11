// Range function takes (ideally) an integer
// start and an integer end with an optional step
// (default = 1) and returns an array
// containing each integer in-between.
function range(start, end, step){
  if (start > end){
    var temp = start
    start = end
    end = temp
  }
  if (step == undefined || step == null){
    i = 1
  }else{
    i = step
  }
  var list = []


  for (var i = 0; i <= (end - start); i++){
    list.push(start+i)
  }

  return list
}

console.log(range(1,5))
console.log(range(5,1) + "\n")
console.log(range(1,5,2))
console.log(range(5,1,2) + "\n")


function sum(array){
  var total = 0

  for (var i = 0; i < array.length; i++){
    total += array[i]
  }

  return total
}

console.log(sum(range(1,5)))
console.log(sum(range(5,1) + "\n"))
console.log(sum(range(1,5,2)))
console.log(sum(range(5,1,2) + "\n"))
