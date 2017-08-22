# A method which takes the time before running the code, then runs it,
# then it takes the time again at the end and figures out the difference.

def profile descriptionOfBlock, &block
  startTime = Time.now

  block.call

  duration = Time.now - startTime

  puts descriptionOfBlock + ': ' + duration.to_s + ' seconds'
end

profile '25000 doublings' do
  number = 1
  25000.times do 
    number = number + number
  end

  # Show the numbher of digits in the HUGE number.
  puts number.to_s.length.to_s + ' digits'
end

profile 'count to a million' do 
  number = 0
  1000000.times do 
    number = number + 1
  end
end
