

def isIsomorphic(s,t)

   objS={}
   objT={}
  for i in 0...s.size

      if(objS[s[i]] && (objS[s[i]]!=t[i]))
       return puts false
      end
      objS[s[i]]=t[i]

      if(objT[t[i]] && (objT[t[i]]!=s[i]))
       return puts false
      end
      objT[t[i]]=s[i]

  end

  puts true
end
 s = "foo", t = "bar"
isIsomorphic(s,t)
