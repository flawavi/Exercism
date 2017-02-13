const Words = function() {
  this.count = function(string){
    let wordCount = {}
    let stringArr = string.toLowerCase().split(/[\s\t\n\/,]+/g)/
    stringArr.forEach(word => {
      wordCount[word] = wordCount[word] || 0
      wordCount[word]++
    })
    return wordCount
  }
}

// let words = new Words()
// words.count('ONE OF OF EACH')

module.exports = Words
