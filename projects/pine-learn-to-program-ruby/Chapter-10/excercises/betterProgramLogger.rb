# Excercise:
# Write method called log. which takes a string description of a block and of course,
# a block. Similar to doSelfImportanty, it should puts a string telling that it has 
# started the block, and another string at the end telling you that it has finished
# the block, and also telling you what the block returned. Test yhour method by 
# sending a code block. Inside the block, put another call to log, passing another 
# block to it. (This is called nesting.) 

$indents = 0

$indent = Proc.new do
  $indents.times do
    print '  '
  end
end

def log descriptionOfBlock, &block
  $indent.call
  puts 'Beginning "' + descriptionOfBlock + '"...'
  $indents = $indents + 1;
  result = block.call
  $indents = $indents - 1;
  $indent.call
  puts '..."' + descriptionOfBlock +  '" finished, returning: ' + result.to_s
  
end

log 'outer block' do
  log 'some little block' do 
    log 'teeny-tiny block' do
      'lots of love'
    end
  end
  log 'yet another block' do
    'I like Indian food!'
  end
  false
end

