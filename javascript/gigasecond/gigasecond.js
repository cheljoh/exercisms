var Gigasecond = function(inputDate) {
  this.inputDate = inputDate;
};

Gigasecond.prototype.date = function() {
  var inputDate = this.inputDate
  return new Date(inputDate.getTime() + 1000000000000);
};

module.exports = Gigasecond;
