# An example oh how a proc is even more like a method because blocks can 
# take parameters.

doYouLike = Proc.new do |aGoodThing|
  puts 'I *really* like ' + aGoodThing + '!'
end

doYouLike.call 'chocolate'
doYouLike.call 'ruby'
