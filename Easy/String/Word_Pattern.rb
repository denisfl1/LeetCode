


def wordPattern (pattern,s)

char = s.split(" ")
arr1 = ''
arr2 = ''
sum = ''

if pattern.size != char.size
  puts false
else

    for i in 0...pattern.size

    arr1 += pattern.index(pattern[i]).to_s

    while i < pattern.size
      arr2 += char.index(char[i]).to_s
      break
    end

    sum = arr1 == arr2
  end

  puts sum
end

end

 patter = "abba"
 s = "dog cat cat fish"
wordPattern(patter,s)
