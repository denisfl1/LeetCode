

def matrix_reshape(mat, r, c)

  rows = mat.size
  collumns = mat[0].size
  output = Array.new(r)

   puts mat unless((rows * collumns) === (r * c))

    for i in 0...r
      output[i] = Array.new(c)
    end

    row_num = 0
    collumn_num = 0

    for i in 0...rows

      for j in 0...collumns
        output[row_num][collumn_num] = mat[i][j]
        collumn_num+=1

        if(collumn_num == c)
            collumn_num = 0
            row_num+=1
        end

      end


    end

    puts output.inspect

end

x = [1,2,3,4,5]

mat = [[1,2],[3,4]], r = 2, c = 4


matrix_reshape(mat,r,c)
