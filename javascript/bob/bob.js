var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(checkIfUpcase(input) && (/[a-z]/i.test(input))){
    return 'Whoa, chill out!'
  }
  else if(input.includes('?')){
    return 'Sure.'
  }
  else {
    return "Whatever."
  }
};

function checkIfUpcase(input){
  return input === input.toUpperCase()
}

module.exports = Bob;
