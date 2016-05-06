var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var strand = ''
  var complements = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U'
  }
  for (i=0; i < dna.length; i++){
    strand += complements[dna[i]]
  }
  return strand
};

module.exports = DnaTranscriber;
