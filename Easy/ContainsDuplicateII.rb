
nums  = [1,0,1,1]
k = 1


def containsNearbyDuplicate(nums,k)
  obj = {}

    for i in 0...(nums.size)

        if (obj[nums[i]] && obj[nums[i]] >= 0 && (obj[nums[i]] - i).abs <= k)

          return puts true

        end

        obj[nums[i]] = i

    end

 return puts false

end


containsNearbyDuplicate(nums,k)
