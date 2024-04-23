


def findLHS(nums)

  ans = 0
  obj = Hash.new(0)

    for i in nums

      obj[i] += 1

    end

    obj.each do |key,value |

      if obj.include?(key + 1)

        ans = [0,obj[key + 1] + value].max

      end

    end

    puts ans

end

nums = [1,3,2,2,5,2,3,7]

findLHS(nums)
