var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(checkIfUpcase(input) && (/[a-z]/i.test(input))){
    return 'Whoa, chill out!'
  }
  else if(input[input.length-1] === '?'){
    return 'Sure.'
  }
  else if(!(/\S/.test(input))){
    return 'Fine. Be that way!'
  }
  else {
    return "Whatever."
  }
};

function checkIfUpcase(input){
  return input === input.toUpperCase()
}

module.exports = Bob;
