

// Você recebe uma matriz de números inteiros exclusivos classificados.

// Um intervalo [a,b] é o conjunto de todos os inteiros de a a b (inclusive).

// Retorna a menor lista classificada de intervalos que cobrem exatamente todos os números da matriz. Ou seja, cada elemento de nums é coberto por exatamente um dos intervalos, e não existe nenhum inteiro x tal que x esteja em um dos intervalos, mas não em nums.

// Cada intervalo [a,b] na lista deve ser gerado como:

// "a->b" se a!=b
// "a" se a == b
 

// Exemplo 1:

// Entrada: nums = [0,1,2,4,5,7]
// Saída: ["0->2","4->5","7"]
// Explicação: Os intervalos são:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Exemplo 2:

// Entrada: nums = [0,2,3,4,6,8,9]
// Saída: ["0","2->4","6","8->9"]
// Explicação: Os intervalos são:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// let nums = [0,2,3,4,6,8,9]
// let nums = [0,2,3,4,6,8,9]

let nums = [0,2,3,4,6,8,9]

var summary_ranges = function (nums){
    let arr  = []

    for(let i = 0;i<nums.length;i++){
        let start = nums[i]
        
         while(i+ 1<nums.length && nums[i] + 1 == nums[i + 1]){
            i++
         }

         if(start != nums[i]){
            arr.push(`${start}-->${nums[i]}`)
         }else{
            arr.push(`${start}`)
         }


    }
    
        console.log(arr)
    
}   
    


summary_ranges(nums)
