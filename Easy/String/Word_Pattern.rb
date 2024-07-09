


def wordPattern (pattern,s)

char = s.split(" ")
arr1 = ''
arr2 = ''

    if(pattern.size != char.size)
      puts false
    else

    for i in 0...pattern.size

    arr1 += pattern.index(pattern[i]).to_s

    while i < pattern.size
      arr2 += char.index(char[i]).to_s
      break
    end
  end

  puts arr1 === arr2

end

end

 patter = "abba"
 s = "dog cat cat fish"
wordPattern(patter,s)
