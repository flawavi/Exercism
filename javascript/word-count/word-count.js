const Words = function() {
  this.count = function(string){

    //variables
    let wordCount = new Object(null),
        regex = /[^\w']+/g,
        stringArr = string.toLowerCase().split(regex).filter(f => f != '')

        //code that almost works .replace(/[']{1}/g,"")

    //work
    stringArr.forEach(word => {
      if(wordCount[word] === constructor){
        word.toString()
        wordCount[word]++
      }
      wordCount[word] = wordCount[word] || 0
      wordCount[word]++
    })
    return wordCount
  }
}

// let words = new Words()
// words.count('hello  world')

module.exports = Words
