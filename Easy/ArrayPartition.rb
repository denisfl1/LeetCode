


def arrayPairSum (nums)

    sum  = 0
    nums.sort!

    for i in (0...nums.size).step(2)

        sum+= nums[i]
    end

    puts sum
end

nums = [6,2,6,5,1,2]
arrayPairSum(nums)
