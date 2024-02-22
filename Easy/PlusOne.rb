 digits = [1,2,9]

def plusOne (digits)
    position = (digits.size) -1

            digits[position] = digits[position] + 1

            if(digits[position] > 9)
              digits = digits.join('').chars.map(&:to_i)

                digits = digits.select{|it|it != ','}.map{|str|str}

            end

            puts digits

          end

plusOne(digits)
