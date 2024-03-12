

nums = [5,5,5,5,2,2,2]

def majorityElement(nums)

    nums.sort
    puts nums[nums.size.floor()/2]

  end

majorityElement(nums)
