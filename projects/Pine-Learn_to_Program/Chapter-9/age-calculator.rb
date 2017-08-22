puts 'What year were you born?'
birthYear = gets.chomp.to_i
puts 'What month were you born?'
birthMonth = gets.chomp.to_i
puts 'What day were you born?'
birthDay = gets.chomp.to_i

birthDate = Time.mktime(birthYear, birthMonth, birthDay)
currentTime = Time.new
ageTime = Time.mktime(0)

age = currentTime - birthDate

ageTime += age
puts 'You are ' + ageTime.year.to_s

for i in 1..ageTime.year
    puts 'SPANK!'
end
