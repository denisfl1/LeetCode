

numRows = 5
def generate (numRows)

    ans = []

    for i in 0...(numRows)
         row = Array.new(i + 1).fill(1)

       for j in 1...(i)

            row[j] = ans[i - 1][j] + ans[i - 1][j - 1]

        end
        ans.push(row)

      end

      puts ans

  end


generate(numRows)
