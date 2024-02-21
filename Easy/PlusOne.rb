 digits = [1,2,9]

def plusOne (digits)
    position = (digits.size) -1

            digits[position] = digits[position] + 1

            if(digits[position] > 9)
                digits = String(digits).split('')



            end

            puts digits

          end

plusOne(digits)
