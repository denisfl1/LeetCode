// Dada uma matriz ordenada de inteiros distintos e um valor alvo, retorne o índice se o alvo for encontrado. Caso contrário, retorne o índice onde estaria se fosse inserido na ordem.

// Você deve escrever um algoritmo com complexidade de tempo de execução O(log n).


// Exemplo 1:

// Entrada: nums = [1,3,5,6], alvo = 5
// Saída: 2
// Exemplo 2:

// Entrada: nums = [1,3,5,6], alvo = 2
// Saída: 1
// Exemplo 3:

// Entrada: nums = [1,3,5,6], alvo = 7
// Saída: 4
 

// Restrições:

// 1 <= nums.comprimento <= 104
// -104 <= num[i] <= 104
// nums contém valores distintos classificados em ordem crescente.
// -104 <= alvo <= 104

let nums = [1,3,5,6], target = 2

var searchInsert = function(nums, target) {
    let search = 0

    for(let i = 0;i<nums.length;i++){

        if(nums[i] == target){
   
            search = i
        }

        if(!nums.includes(target)){
      
            nums.push(target)
            nums.sort((a,b)=>a-b)

            if(nums[i] == target){
                search = i
            }

        }

    }
  
    console.log(search)
 
};


searchInsert(nums,target)