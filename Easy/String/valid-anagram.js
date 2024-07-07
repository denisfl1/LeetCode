

var isAnagram = function(s, t) {
    
    if(s.length !== t.length)return console.log(false)
  
    const char1 = s.split("").sort((a,b)=>a.localeCompare(b))
    const char2=  t.split("").sort((a,b)=>a.localeCompare(b))

        for(let i = 0;i<char1.length;i++){

            if(char1[i] !== char2[i])return console.log(false)

        }
        console.log(true)

};

let s = "aacc",t = "ccac"

isAnagram(s,t)
