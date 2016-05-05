class Gigasecond

  #from exercism
  #will calculate date someone has their 1,000,000,000 second bday

  VERSION = 1

  def self.from(time)
    new_time = time + 1000000000
  end

end

# run as such: Gigasecond.from(Time.utc(1951, 3, 28, 12, 0, 0))
