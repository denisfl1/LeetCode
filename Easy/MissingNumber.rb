

nums = [0,1]
def missingNumber (nums)

   size = nums.size
   sum = size * (size + 1) / 2
   sum2 =  nums.reduce(0) { |acc, num| acc + num }

    puts sum-sum2

end

missingNumber(nums)
