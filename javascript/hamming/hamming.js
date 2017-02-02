const Hamming = function() {}

Hamming.prototype.compute = function(str1, str2) {

  if(str1.length != str2.length){
    throw new Error('DNA strands must be of equal length.')
  }

  let total = 0
  for(let i = 0; i <= str1.length - 1; i++){
    if(str1.charAt(i) != str2.charAt(i)){
      total+=1
    }
  }
  return total
}
// let hamming = new Hamming
// hamming.compute('AG', 'CT')

module.exports = Hamming
