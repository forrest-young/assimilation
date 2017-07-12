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
/*******************************************************
function reverseArray (array){
  var temp

  for (var i = 0; i < Math.ceil(array.length/2); i++){
    temp = array[i]
    array[i] = array[(array.length-i-1)]
    array[(array.length-i-1)] = temp
  }
  return array
}

var x = [0,1,2,3,4,5,6,7,8,9]
var y = [9,8,7,6,5,4,3,2,1]

console.log(reverseArray(x))
console.log("\n====================")
console.log(reverseArray(y))
***********************************************************/

//A list

function prepend(element, list) {
  let temp = {}

  temp.value = element
  temp.rest = list

  return temp
}

function arrayToList(anArray) {
  let list = {}

  list.value = anArray[anArray.length-1]
  list.rest = null

  for (let i = anArray.length-2; i >= 0; i--) {
    list = prepend(anArray[i], list)
  }
  return list
}

console.log(arrayToList([10, 20, 30]));

var myList = arrayToList([10, 20, 30])
console.log(listToArray(myList))

function listToArray(list){
  console.log(list)
}
