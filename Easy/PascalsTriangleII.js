

row_index = 3
function generate (row_index){

    let ans = []

    if(row_index == 0){
        
    ans.push(1)
  
    }

    for (let i = 0; i <= row_index; i++) {
       let row = new Array(i + 1).fill(1)
    
       for (let j = 1; j < i; j++) {
           
            row[j] = ans[i - 1][j] + ans[i - 1][j - 1]
            
        }
        ans.push(row)
    
       
    }
    

    console.log(ans[row_index])

    }


generate(row_index)

