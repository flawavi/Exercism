let DnaTranscriber = function() {}

function setCharAt(str,index,chr) {
  if(index > str.length - 1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}

DnaTranscriber.prototype.toRna = function(nucleotideStrand) {
  let nucStrand

  for(let i = 0; i <= nucleotideStrand.length - 1; i++){
    switch (nucleotideStrand.charAt(i)) {
      case 'C':
        nucStrand = setCharAt(nucleotideStrand, i, 'G')
        break
      case 'G':
        nucStrand = setCharAt(nucleotideStrand, i, 'C')
        break
      case 'A':
        nucStrand = setCharAt(nucleotideStrand, i, 'U')
        break
      case 'T':
        nucStrand = setCharAt(nucleotideStrand, i, 'A')
        break
      default:
        throw new Error('Invalid input')
    }
    return nucStrand
  }
}

// let dnaTranscriber = new DnaTranscriber()
// dnaTranscriber.toRna('C')

module.exports = DnaTranscriber
