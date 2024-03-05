

prices = [7,1,5,3,6,4]


def maxProfit(prices)

  preValue = 0
  minValue = prices[0]


    for i in 1...(prices.size)

        if(prices[i] < minValue)

          minValue = prices[i]

        end

        if(prices[i] - minValue > preValue)

          preValue = prices[i] - minValue

        end

  end

    puts preValue

end


maxProfit(prices)
