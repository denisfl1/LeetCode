
# nums = [0,0,1,1,1,2,2,3,3,4]
#             x
# nums = [0,0,1,1,1,2,2,3,3,4]
#                 x
nums = [0,0,1,1,1,2,2,3,3,4]
#                       x

def removeDuplicates(nums)

   index = 1

    for i in 0...(nums.size) - 1

        if nums[i]!= nums[i+1]
            nums[index] = nums[i+1]
            index += 1
        end


    end

    puts index

  end

removeDuplicates(nums)
