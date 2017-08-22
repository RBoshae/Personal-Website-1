# An example of how we pass a proc into a method. 
# 
# Note: we can control how many times we call the proc

def doSelfImportantly someProc
  puts 'Everybody just HOLD ON! I have something important to do...'
  someProc.call
  puts 'Ok everyone, I\'m done. Go on with what you were doing.'
end

sayHello = Proc.new do
  puts 'hello'
end

sayGoodbye = Proc.new do
  puts 'goodbye'
end

doSelfImportantly sayHello
doSelfImportantly sayGoodbye
