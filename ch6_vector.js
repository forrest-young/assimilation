function Vector(x, y){
  this.x = x
  this.y = y
}

Vector.prototype.plus = function(v){
  return new Vector(this.x + v.x, this.y + v.y)
}

Vector.prototype.minus = function(v){
  return new Vector(this.x - v.x, this.y - v.y)
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(this.x * this.x + this.y * this.y) }
})

var firstVector = new Vector(1, 2)
var secondVector = new Vector(2, 3)
var thirdVector = new Vector(3, 4)
var addVector = firstVector.plus(secondVector)
var minusVector = firstVector.minus(secondVector)

console.log(firstVector)
console.log(secondVector)
console.log(addVector)
console.log(minusVector)
console.log(thirdVector)
console.log(thirdVector.length)
