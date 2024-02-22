 digits = [1,2,9]

def plusOne (digits)

  x = (digits.join.to_i + 1).to_s.split('').map(&:to_i)

puts x

end

puts plusOne(digits)
