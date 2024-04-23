


def findLHS(nums)

  ans = 0
  numbers = Hash.new(0)

    for i in nums

     numbers[i] += 1

    end

   numbers.each do |key,value |

      if numbers.include?(key + 1)

        ans = [0,obj[key + 1] + value].max

      end

    end

    puts ans

end

nums = [1,3,2,2,5,2,3,7]

findLHS(nums)
