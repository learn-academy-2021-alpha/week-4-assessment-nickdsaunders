# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# create a method that takes an array as an argument
def only_odd_nums array
    # filter the array check if its an integer and if its odd 
    array.filter do |value|
        value.class == Integer && value % 2 == 1
    end
    # sort from least to greatest
    .sort
end
p only_odd_nums fullArr1
p only_odd_nums fullArr2

# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'water', 'soda water']

def find_letter(array, letter)
    array.select do |word|
        word.include? letter
    end
end
p find_letter(beverages_array, letter_o)
p find_letter(beverages_array, letter_a)

# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create method takes a string as an argument
def no_vowels string 
# removes all vowels from string
        # string.downcase.delete "aeiou"
        string.delete "aeiouAEIOU"
end
p no_vowels(album1)
p no_vowels(album2)
p no_vowels(album3)


# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# create a class called Bike
class Bike
    # create initialize method
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def pedal_faster speed
        @current_speed += speed
    end

    def brake speed
        @current_speed -= speed
        if @current_speed - speed < 0
            @current_speed = 0
        else
            @current_speed = speed
        end
    end

    def get_info
        puts "My bike is a #@model it has #@wheels wheels and is going #@current_speed mph"
    end
end

my_bike = Bike.new("Trek", @wheels, @current_speed) 
my_bike.get_info

# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

# my_bike.pedal_faster
p my_bike.pedal_faster 10
my_bike.get_info
p my_bike.brake 5
my_bike.get_info
p my_bike.brake 15
my_bike.get_info