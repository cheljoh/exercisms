class Complement
  VERSION = 3

  MAPPING = { "A" => "U", "G" => "C",
              "T" => "A", "C" => "G" }

  def self.of_dna dna
    validate_input dna
    dna_array = dna.split("")
    mapped_array = dna_array.map! do |component|
      MAPPING[component]
    end
    mapped_array.join("")
  end

  protected
  def self.validate_input dna
    invalid_characters = dna.split("") - MAPPING.keys
    raise ArgumentError.new("Invalid input") if invalid_characters.size > 0
  end
end