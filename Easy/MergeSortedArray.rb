nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3


def merge (nums1, m, nums2, n)

      first = m - 1
      second = n - 1

      for i in (m + n - 1).downto(0)

        if(second < 0)
          break
        end

        if(nums1[first]>nums2[second])
          nums1[i] = nums1[first];
          first-=1

        else
          nums1[i] = nums2[second]
          second-=1

        end

      end


puts nums1

end


merge(nums1,m,nums2,n)
