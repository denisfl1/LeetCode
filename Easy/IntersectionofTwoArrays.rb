


def intersection (nums1,nums2)
     set1 = Set.new(nums1)
     set2 = Set.new(nums2)
     result = []
    for num in set1
        if (set2.include?(num))

            result.push(num)

        end
    end
    puts result.inspect

  end

intersection([1,2,2,1],[2,2])
