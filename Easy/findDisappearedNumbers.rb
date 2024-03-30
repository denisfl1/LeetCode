


nums = [1,1]

def findDisappearedNumbers(nums)

  arr = []
  obj = {}

    for i in 1...(nums.size) + 1

        if(!obj[i].include?(i))

          arr.push(i)

        end

    end

  puts arr.inspect

end


findDisappearedNumbers(nums)
