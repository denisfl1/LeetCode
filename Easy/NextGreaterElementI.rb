
 nums1 = [2,4], nums2 = [1,2,3,4]

def nextGreaterElement (nums1, nums2)

  loop_length = nums2.length - 1
  greater_nums = nums1.map do |num|
    nums2_index = nums2.index(num)
    (nums2_index..loop_length).each do |i|
      if nums2[i] > num
        return nums2[i]
      end
    end
    -1
  end
  return greater_nums

end


nextGreaterElement(nums1,nums2)
