

def findContentChildren(g,s)

    g.sort
    s.sort

    i = 0
    j = 0
    result = 0


    while(i < g.size && j < s.size)

        if(g[i]<=s[j])
        i+=1
        result+=1

        end
        j+=1

    end

    puts result

end

 g  = [1,2]
 s  = [1,2,3]

 findContentChildren(g,s)
