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
  var s
  if (step == undefined || step == null){
    s = 1
  }else{
    s = step
  }
  console.log(i)
  var list = []

  for (var i = 0; i <= (end - start); i+=s){
    list.push(start+i)
  }

  return list
}

console.log(range(1,5))
console.log(range(5,1))
console.log(range(1,5,2))
console.log(range(5,1,2))


function sum(array){
  var total = 0

  for (var i = 0; i < array.length; i++){
    total += array[i]
  }

  return total
}

console.log(sum(range(1,5)))
console.log(sum(range(5,1)))
console.log(sum(range(1,5,2)))
console.log(sum(range(5,1,2)))
