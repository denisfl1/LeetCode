nums = [3,2,2,3]
val = 3

def removeElement (nums,val)
    n = 0

    for i in 0...nums.size

        if nums[i] != val
                nums[n] = nums[i]
                n +=1
          end

    end

    puts n

end


removeElement(nums,val)
