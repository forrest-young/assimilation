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
*/

// A list
/*
// Prepend function takes an element and a list
// and links the element by adding it to the front
// of the list
function prepend(element, list) {
  let temp = {}

  temp.value = element
  temp.rest = list

  return temp
}

// arrayToList function takes any array and creates
// a linked list of each element in the array
function arrayToList(anArray) {
  let list = {}

  // We initialize our linked list from the
  // terminal side
  list.value = anArray[anArray.length-1]
  list.rest = null

  // Loop backwards through anArray starting with the
  // second last element in the array
  for (let i = anArray.length-2; i >= 0; i--) {
    list = prepend(anArray[i], list)
  }
  return list
}

// listToArray function takes a linked list
// and returns an array
function listToArray(list){
  let anArray = []

  // Is list is really a list?
  while(list.value != null && list.value != undefined){
    //If so, add the first value to our array
    anArray.push(list.value)
    // Are we at the end of the list?
    if (list.rest == null){
      break
    }
    // Assume next link in the list
    list = list.rest
  }
    return anArray
}

var myList = arrayToList([10, 20, 30])
console.log(listToArray(myList))

function nthElement (list, n){
  for (let i = 0; i < n; i++){
    if ((list.rest == null) && ((n - i) > 0)){
      return undefined
    }else{
      list = list.rest
    }
  }
  return list.value
}

console.log(nthElement(myList, 0))
console.log(nthElement(myList, 1))
console.log(nthElement(myList, 2))
console.log(nthElement(myList, 3))

function nthRecursive (list, n){
  let x = list.value

  if (list.rest != null && n > 0){
    x = nthRecursive(list.rest, n-1)
    return x
  }else if (n == 0){
    return x
  }else if (list.rest == null && n > 0){
    return undefined
  }
}

console.log(nthRecursive(myList, 0))
console.log(nthRecursive(myList, 1))
console.log(nthRecursive(myList, 2))
console.log(nthRecursive(myList, 3))
*/

//Deep Comparison

function deepEqual (x, y){
  if( (typeof x == 'object' && x != null) &&
        (typeof y == 'object' && y != null) )
    {
       var count = [0,0];
       for( let key in x){
         count[0]++
       }
       for( let key in y){
         count[1]++
       }

       if( count[0]-count[1] != 0) {
         return false;
       }
       for( let key in x)
       {
         console.log("Key in x: " + key)
         if(!(key in y) || !deepEqual(x[key],y[key])) {
           return false;
         }
       }
       for( let key in y)
       {
         console.log("Key in y: " + key)
         if(!(key in x) || !deepEqual(y[key],x[key])) {
           return false;
         }
       }
       return true;
    }
    else
    {
       return x === y;
    }
}

var a = {}
var b = {}
console.log("T, T, F")
console.log(deepEqual(a,b))
a = {x: 1, y: 2, z: 3}
b = {x: 1, y: 2, z: 3}
console.log(deepEqual(a,b))
b.z = 4
console.log(deepEqual(a,b))
