var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(checkIfUpcase(input) && containsLetters(input)){
    return 'Whoa, chill out!'
  }
  else if(checkQuestion(input)){
    return 'Sure.'
  }
  else if(inputIsBlankOrWhitespace(input)){
    return 'Fine. Be that way!'
  }
  return 'Whatever.'
};

function checkIfUpcase(input){
  return input === input.toUpperCase()
}

function containsLetters(input){
  return /[a-z]/i.test(input)
}

function checkQuestion(input){
  return input[input.length-1] === '?'
}

function inputIsBlankOrWhitespace(input){
  return !(/\S/.test(input))
}

module.exports = Bob;
