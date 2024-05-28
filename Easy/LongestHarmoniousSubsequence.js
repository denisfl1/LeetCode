

// Definimos um array harmonioso como um array onde a diferença 
// entre seu valor máximo e seu valor mínimo é exatamente 1.

// Dado um array inteiro nums, retorne o comprimento de sua subsequência 
// harmoniosa mais longa entre todas as suas subsequências possíveis.

// Uma subsequência de array é uma sequência que pode ser derivada do 
// array excluindo alguns ou nenhum elemento sem alterar a ordem dos elementos restantes.

 

// Exemplo 1:

// Entrada: nums = [1,3,2,2,5,2,3,7]
// Saída: 5
// Explicação: A subsequência harmoniosa mais longa é [3,2,2,2,3].
// Exemplo 2:

// Entrada: nums = [1,2,3,4]
// Saída: 2

// Exemplo 3:
// Entrada: nums = [1,1,1,1]
// Saída: 0


var findLHS = function(nums) {
  
    let ans = 0
    let numbers = new Map()

    for (let i of nums) { 
  
        numbers.set(i, (numbers.get(i) || 0) + 1) // se não tiver ele inicia com 1 se tiver ele incrementa + 1
       
    }
   
    for (let [key, value] of numbers.entries()) { // varre tanto a chave quanto o valor
      if (numbers.has(key + 1)) { // verifica se tem mais de um número diferente  se tiver faz a contagem 

        ans = Math.max(ans, numbers.get(key + 1)+ value)

      }
   
    }

    return console.log(ans)
 
}

let nums =   [1,2,3,4]

findLHS(nums)