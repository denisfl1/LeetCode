

nums = [0,2,3,4,6,8,9]

def summary_ranges(nums)
  arr = []
  i = 0

 for i in nums.size
      start = nums[i]

      while i + 1 < nums.size && nums[i] + 1 == nums[i + 1]
          i += 1
      end

      if start != nums[i]
          arr.push("#{start}-->#{nums[i]}")
      else
          arr.push("#{start}")
      end

      i += 1
  end

  puts arr.inspect

end



summary_ranges(nums)
