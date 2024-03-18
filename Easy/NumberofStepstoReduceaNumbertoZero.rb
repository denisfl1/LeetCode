


 num = 14

def numberOfSteps(num)
    val = 0

    while (num > 0)
        num % 2 === 0 ? num /= 2 : num -=1

        val+=1

    end
    puts val

  end

numberOfSteps(num)
