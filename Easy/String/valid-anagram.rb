


def isAnagram(s,t)

  return puts false unless s.length === t.length

   char1 = s.split("").sort!
   char2 = t.split("").sort!

        for i in 0...s.size

          return puts false unless(char1[i] === char2[i])

        end

       return puts true

end

 s = "aacc"
 t = "ccac"

isAnagram(s,t)
