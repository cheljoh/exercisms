var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  var year = this.year;
  var is_leap = (year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 400 == 0)

  return is_leap
};

module.exports = Year;
