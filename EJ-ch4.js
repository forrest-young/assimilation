// Range function takes a start and end with
// an optional step (default = 1) and returns
// an array containing each number in-between.
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
  var list = []

  for (var i = 0; i <= (end - start); i+=s){
    list.push(start+i)
  }

    console.log("Sum from " + start + " to " + end + " by " + s + ":")

  return list
}

// Sum function takes an array and returns
// a total
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
console.log(sum(range(0,Math.PI*10,Math.PI)))
