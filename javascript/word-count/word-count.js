const Words = function() {
  this.count = function(string){
    let wordCount = {}
    let stringArr = string.toLowerCase().split(/[\s\W]+/g)
    console.log(stringArr)
    stringArr.forEach(word => {
      wordCount[word] = wordCount[word] || 0
      wordCount[word]++
    })
    return wordCount
  }
}

// let words = new Words()
// words.count('car : carpet as java: javascript!!&@$%^&')

module.exports = Words
