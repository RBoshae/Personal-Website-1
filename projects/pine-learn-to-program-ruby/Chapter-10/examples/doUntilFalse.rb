# An example of a method that will take seom object and proc, and will
# call the proc on that object. If the proc returns false we quit;
# otherwise we call the proc with the returned object. We keep doing this
# until the proc returns false (which it had better do eventually, or the 
# program will crash).
#

def doUntilFalse firstInput, someProc
  input = firstInput
  output = firstInput
  
  while output
    input = output
    output = someProc.call input
  end

  input
end

buildArrayOfSquares = Proc.new do |array|
  lastNumber = array.last
  if lastNumber <=0
    false
  else
    array.pop                         # Take off the last number...
    array.push lastNumber*lastNumber  # ...and replace with its square
    array.push lastNumber-1           # ...followed by the next smaller number
  end
end

alwaysFalse = Proc.new do |justIgnoreMe|
  false
end

puts doUntilFalse([5], buildArrayOfSquares).inspect
puts doUntilFalse('I\'m writing thist at 3:41 am; someone knock me out!', alwaysFalse)


