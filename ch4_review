//Journal will be an array of objects
var journal = []

//addEntry function takes entry information and returns an object
//containing said information
function addEntry (iday, imonth, iyear, idest, imile, ipurp){
  let entry = {}
  entry.day = iday
  entry.month = imonth
  entry.year = iyear
  entry.dest = idest
  entry.mile = imile
  entry.purp = ipurp
  return entry
}

//Assemble a journal
journal.push(addEntry(23, "July", 2017, "Medaryville", 20, "yard"))
journal.push(addEntry(20, "July", 2017, "Medaryville", 21, "yard"))
journal.push(addEntry(15, "June", 2017, "Medaryville", 19, "check"))
journal.push(addEntry(15, "June", 2017, "Monon", 8, "misc"))
journal.push(addEntry(19, "June", 2017, "Monon", 8, "misc"))
journal.push(addEntry(5, "June", 2017, "Monon", 9, "town"))
journal.push(addEntry(28, "May", 2017, "Medaryville", 20, "yard"))

console.log(journal)
console.log("\n")

//query function takes a journal and a query code (type) with
//parameters for the query (x/y/z).  The user must know what
//each query code requires, so a library of the codes would be ideal
function query (journal, type, x, y, z){
  //Type 0: list of each entry given the day/month/year
  if (type == 0){
    for (let i = 0; i < journal.length; i++){
      if ((journal[i].day == x) && (journal[i].month == y) && (journal[i].year == z)){
        console.log(journal[i])
      }
    }
  //Type 1: total mileage given a month/year
  }else if (type == 1){
    let total = 0
    for (let i = 0; i < journal.length; i++){
      if ((journal[i].month == x) && (journal[i].year == y)){
        total += journal[i].mile
      }
    }
    console.log("Miles driven in " + x + " of " + y + ": " + total)
  }
}

query(journal, 0, 15, "June", 2017)
query(journal, 1, "July", 2017)
