


def isSubsequence(s, t)

  word = s.split('')

    t.each_char do |val|

        if(val === word[0])
            word.shift()
        end

    end

       puts  word.length === 0

  end

s = "abc"
t = "ahbgdc"

isSubsequence(s,t)
