//The Sum of a Range
/**********************************************************
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
  if (step == undefined || step == null || step == 0){
    s = 1
  }else if (step < 0){
    s = -step
  }else {
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
console.log(sum(range(5,1,-2)))
console.log(sum(range(0,Math.PI*10,Math.PI)))
**********************************************************/

//Reversing an array

function reverseArray (array){
  var temp

  for (var i = 0; i < Math.ceil(array.length/2); i++){
      console.log(i)
    temp = array[i]
    array[i] = array[(array.length-i)]
    array[(array.length-i)] = temp
  }

  return array
}

var x = [0,1,2,3,4,5,6,7,8,9]
var y = [9,8,7,6,5,4,3,2,1]

console.log(reverseArray(x))
console.log(reverseArray(y))
