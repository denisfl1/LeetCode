


def intersect(nums1,nums2)

    result = []

    for num in nums1

    if (nums2.include?(num))
        result.push(num)
        nums2.delete_at(nums2.index(num))

    end

    end

  puts result.inspect

end

intersect([4,9,5],[9,4,9,8,4])
