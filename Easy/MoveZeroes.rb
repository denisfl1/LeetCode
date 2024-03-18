nums = [0,1,0,3,12,8,5,4]

def moveZeroes (nums)
    left = 0
    nums.sort!

    for i in 0...(nums.size)

        if nums[i] != 0
            nums[left], nums[i] = nums[i], nums[left]
            left+=1
        end

      end

      puts nums.inspect
      value = [1]
end

moveZeroes(nums)
