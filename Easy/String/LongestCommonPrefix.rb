
strs = ["flower","flow","flight"]

def longest_common_prefix(strs)

      return "" if strs.empty?

        prefix = strs[0]

        for i in 1...strs.size
          while strs[i].index(prefix) != 0
            prefix = prefix[0...prefix.length - 1]

          end
        end

       puts prefix

  end


  longest_common_prefix(strs)
