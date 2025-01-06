

nums =  [2,2,1,1,1,2,2]

def majorityElement(nums)

    nums.sort!
    puts nums[nums.size.floor()/2]

end

majorityElement(nums)
