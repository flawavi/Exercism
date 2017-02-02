let DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(dna) {
  const codes = {C: 'G', G: 'C', A: 'U', T: 'A'}
  let rna = dna.split('').map(c => {
    if (!codes[c]) throw new Error('Invalid input')
      return codes[c]
  }).join('')
  return rna
}

module.exports = DnaTranscriber
