

 nums =  [1,0,1,1,0,1]

def findMaxConsecutiveOnes (nums)
   count = 0
   maxCount = 0
    for i in 0...nums.size

        if(nums[i]== 1)
            count+=1
            maxCount = [maxCount, count].max
        else
            count = 0

        end

      end

    puts maxCount

  end


findMaxConsecutiveOnes(nums)
