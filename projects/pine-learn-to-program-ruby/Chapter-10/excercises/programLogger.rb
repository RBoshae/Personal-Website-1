# Excercise:
# Write method called log. which takes a string description of a block and of course,
# a block. Similar to doSelfImportanty, it should puts a string telling that it has 
# started the block, and another string at the end telling you that it has finished
# the block, and also telling you what the block returned. Test yhour method by 
# sending a code block. Inside the block, put another call to log, passing another 
# block to it. (This is called nesting.) 

def log descriptionOfBlock, &block
  puts 'Beginning "' + descriptionOfBlock + '"...'
  result = block.call
  puts '..."' + descriptionOfBlock +  '" finished, returning: ' + result.to_s 
end

log 'outer block' do
  log 'some little block' do 
    5
  end
  log 'yet another block' do
    'I like Thai food!'
  end
  false
end
