user_input = ""

while user_input != "BYE"
  user_input =  gets.chomp
  if user_input == user_input.upcase
    puts 'NO, NOT SINCE ' + (rand(21) + 1930).to_s + '!'
  else 
    puts 'HUH!? SPEAK UP, SONNY!'
  end
end
