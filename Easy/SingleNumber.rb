
values  = [4,1,2,1,2]


def singleNumber(values)

    compare = 0

    for i in 0...values.size

      compare ^= values[i]


    end

   puts compare

end


singleNumber(values)
