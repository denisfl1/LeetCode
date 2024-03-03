
// Dado um número inteiro numRows, retorne o primeiro numRows do triângulo de Pascal.

// No triângulo de Pascal, cada número é a soma dos dois números diretamente acima dele, conforme mostrado:


// Exemplo 1:

//  numRows = 5
// Saída: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Exemplo 2:

// Entrada: numRows = 1
// Saída: [[1]]


/* Saída: 

     ans => [
           [1]
          [1,1],  
rows => [1,2,1],
        [1,3,3,1]
       [1,4,6,4,1]


     row[j] = ans[i - 1][j] + ans[i - 1][j - 1]

]  

*/
const x = ["1","2","3","4"]

let numRows = 5
var generate = function(numRows) {

    let ans = []
    
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1)
       
       for (let j = 1; j < i; j++) {
           
            row[j] = ans[i - 1][j] + ans[i - 1][j - 1]
            console.log(row[j])
        }
        ans.push(row)
    
    }
    
 
 

}


generate(numRows)