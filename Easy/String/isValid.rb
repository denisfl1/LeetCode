


s = "()[]{}"

def isValid (s)

    output = []

    for i in 0...s.size
        if(s[i] == '(')
            output.push(')')
        elsif(s[i] == '[')
            output.push(']')
        elsif(s[i] == '{')
            output.push('}')

        elsif(output.size === 0 || output.pop != s[i])
           puts false
      end

      end

    puts output.size === 0 ?  true :  false

  end

isValid(s)
