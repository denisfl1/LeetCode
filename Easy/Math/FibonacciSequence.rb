

def fib(n)

    arr  = [0,1]

    for i in 2...n

    arr[i] = arr[i - 1] + arr[i - 2]

    end

    puts arr.inspect

  end

fib(8)
