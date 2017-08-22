# Title: Grandfather Clock
# Description: A method which takes a block and calls it once for each
# hour that has passed today. That way, if I were to pass the block  do
# puts 'DONG!' end, it would chime (sort of)

def grandfatherClock someProc
  hour = (Time.now.hour % 12) 

  hour.times do 
    someProc.call
  end
end

dong = Proc.new do
  puts 'DONG!'
end

chirp = Proc.new do
  puts 'CHIRP!'
end

grandfatherClock dong
puts
grandfatherClock chirp
