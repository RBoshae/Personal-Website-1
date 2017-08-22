user_input_arr = []

while user_input_arr[-1] != ""
    user_input_arr.push gets.chomp
end
user_input_arr.pop
puts user_input_arr.sort
