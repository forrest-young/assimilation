function TextCell(text) {
  this.text = text.split("\n")
}

function repeat(string, times) {
  var result = ""
  for (var i = 0; i < times; i++)
    result += string
  return result
}

function StretchCell(inner, width, height){
  this.inner = inner.text
  let t = inner.text.reduce(function(x, y){
    return y
  }))
  if (t.length > width){
    this.width = t.length
  }else{
    this.width = width
  }

  if (height < 1){
    this.height = 1
  }else{
    this.height = height
  }
}
StretchCell.prototype.minHeight = function(){
  return this.height
}
StretchCell.prototype.minWidth = function(){
  return this.width
}
StretchCell.prototype.draw = function(){
  var result = []
  for (var i = 0; i < this.height; i++) {
    var line = this.inner[i] || ""
    result.push(line + repeat(" ", this.width - line.length));
  }
  return result
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth())
console.log(sc.minHeight())
console.log(sc.draw())
