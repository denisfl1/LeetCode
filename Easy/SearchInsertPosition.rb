nums = [1,3,5,6]
target = 4


def searchInsert(nums, target)
    search = 0

    for i in 0...nums.size
      if nums[i] == target
        search = i
      end

    unless nums.include?(target)
      nums << target
      nums.sort!
      search = nums.index(target)
    end


    end

    puts search

  end


searchInsert(nums,target)
