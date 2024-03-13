
nums  = [1,0,1,1]
k = 1

obj = {}

for i in 0...(nums.size)

    if (obj[nums[i]] >= 0 && Math.abs(obj[nums[i]] - i) <= k)
        return true
    end
    obj[nums[i]] = i

end

return false
