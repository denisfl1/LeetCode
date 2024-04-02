
grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

def islandPerimeter(grid)

  perimeter = 0

    for i in 0...grid.size

      for j in 0...grid[i].size

            if(grid[i][j] == 1)
                perimeter+=4

                  if(i > 0 && grid[i - 1][j] == 1)
                    perimeter-=2
                  end

                  if(j > 0 && grid[i][j - 1] == 1)
                    perimeter-=2
                  end

            end
      end

  end

  puts perimeter

end

islandPerimeter(grid)
