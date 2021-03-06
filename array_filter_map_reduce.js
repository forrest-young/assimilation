var array = []
array.push({"name": "A", "age": 10})
array.push({"name": "B", "age": 12})
array.push({"name": "C", "age": 15})
array.push({"name": "D", "age": 17})
array.push({"name": "E", "age": 25})
array.push({"name": "F", "age": 50})

console.log(array)
console.log("\n")

console.log("Filter:")
console.log(array.filter(function(person){
  return person.name == "A"
}))

console.log("Map:")
console.log(array.map(function(person){
  return person.name
}))

console.log("Reduce:")
console.log(array.reduce(function(x, y){
  if (x.age == undefined){ return x + y.age }
  else return x.age + y.age
}))
