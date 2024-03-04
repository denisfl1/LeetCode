
row_index  = 3
def get_row(row_index)
  ans = []

  if (row_index == 0)

    return ans.push(1)

  end

  for i in 0...(row_index).size
    row = Array.new(i + 1).fill(1)

      for j in 1...(i)

        row[j] = ans[ i - 1][j] + ans[ i - 1][j - 1]

      end

      ans.push(row)

  end

  puts ans[row_index]
end

get_row(row_index)
