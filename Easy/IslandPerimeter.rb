
grid = [[1,1]]

def islandPerimeter(grid)

  perimeter = 0

    for i in grid.size

      for j in grid[i].size

        if(grid[i][j] == 1)
          perimeter+=4

        if(i > 0 && grid[i - 1][j]== 1)
          perimeter-=2
        end

        if(j > 0 && grid[i][j - 1] == 1)
          perimeter-=2
        end

      end


  end

  puts perimeter

end

islandPerimeter(grid)
