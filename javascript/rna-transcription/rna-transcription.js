var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var strand = ''
  for (i=0; i < dna.length; i++){
    if (dna[i] == 'C'){
      strand += 'G'
    }
    else if (dna[i] == 'G'){
      strand += 'C'
    }
    else if (dna[i] == 'A'){
      strand += 'U'
    }
    else if (dna[i] == 'T'){
      strand += 'A'
    }
  };
  return strand
};

module.exports = DnaTranscriber;
