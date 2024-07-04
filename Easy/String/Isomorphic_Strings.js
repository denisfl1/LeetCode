

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// p:t
// a:i
// e:l
// r:e

var isIsomorphic = function(s, t) {

    let objS={}
    let objT={}
    for(let i=0;i<s.length;i++){

        if(objS[s[i]] && (objS[s[i]]!==t[i])) return false
        objS[s[i]]=t[i]

        if(objT[t[i]] && (objT[t[i]]!==s[i])) return false
        
        objT[t[i]]=s[i]
    }
    console.log(objS)
    console.log(objT)
    return true
    
};
let s = "paper", t = "title"
isIsomorphic(s,t)
