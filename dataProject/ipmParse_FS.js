var data = fs.readFileSync('IPM.txt')

var impFile = data.toString()

var entries = ipmFile.split(";")
var parsedEntries = []
function ParsedEntry(entry){
  entry = entry.split(",")
  this.last = entry[0]
  this.first = entry[1]
  this.middle = entry[2]
  this.suffix = entry[3]
  this.address = entry[4]
  this.city = entry[5]
  this.state = entry[6]
  this.zip = entry[7]
  this.reunion = entry[8]
}

for(let i = 0;i < entries.length-1;i++){
  parsedEntries.push(new ParsedEntry(entries[i]))
}

for(let i = 0;i < parsedEntries.length-1;i++){
  if (parsedEntries[i].reunion == "*"){
    parsedEntries[i].reunion = "Both"
  }
}

console.log(parsedEntries)
