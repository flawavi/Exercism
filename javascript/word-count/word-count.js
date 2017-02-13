const Words = function() {
  this.count = function(string){
    let wordCount = new Object(null)
    console.log(wordCount)
    let stringArr = string.toLowerCase().split(/[^\w']+/g).filter(f => f != '')
    console.log(stringArr)
    stringArr.forEach(word => {
      console.log(wordCount[word])
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
// words.count('reserved words like constructor and toString ok?')

module.exports = Words
