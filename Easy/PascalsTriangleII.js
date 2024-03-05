// Dado um número inteiro rowIndex, retorne a linha rowIndexth (indexada em 0) do triângulo de Pascal.

// No triângulo de Pascal, cada número é a soma dos dois números diretamente acima dele, conforme mostrado:


// Exemplo 1:

// Entrada: rowIndex = 3
// Saída: [1,3,3,1]
// Exemplo 2:

// Entrada: rowIndex = 0
// Saída: [1]
// Exemplo 3:

// Entrada: rowIndex = 1
// Saída: [1,1]
 

// Restrições:

// 0 <= rowIndex <= 33
 

// Acompanhamento: você poderia otimizar seu algoritmo para usar apenas espaço extra O (rowIndex)?

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

