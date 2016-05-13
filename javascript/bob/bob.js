var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(checkIfUpcase(input)){
    return 'Whoa, chill out!'
  }
  else if(input.includes('?')){
    return 'Sure.'
  }
  else if(/^[0-9,]*/.test(input)){
    return 'Whatever.'
  }
  else {
    return "Whatever."
  }
};

function checkIfUpcase(input){
  return input === input.toUpperCase()
}

module.exports = Bob;
