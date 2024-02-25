 digits = [1,2,9]

def plusOne (digits)

 (digits.join.to_i + 1).to_s.split('').map(&:to_i)


end

puts plusOne(digits)
