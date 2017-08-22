birthday = Time.mktime(1990,5,21,6,59)
melissaBirthday = Time.mktime(1988, 6, 5, 10, 22)
melissa_billion_second_birthday = melissaBirthday + 1000000000
billion_second_birthday = birthday + 1000000000

puts 'My birthday is ' + birthday.to_s
puts 'I will be 1 billion seconds old on ' + billion_second_birthday.to_s
puts 'Melissa will be 1 billion seconds on ' + melissa_billion_second_birthday.to_s
