# An example of Ruby's ability to take a block of code (code between do
# and end, wrpa it up in an object (called proc), store it in a vairable 
# or pass it to a method, and run the code in the block whenever you fell
# like. 
#
# A proc is kind of alike a method itself, except that it isn't bound to an
# object. A proc can be stored or passed around like you can with any 
# object.


toast = Proc.new do
  puts 'Cheers!'
end

toast.call
toast.call
toast.call
