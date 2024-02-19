// Dado um array inteiro nums classificado em ordem não decrescente, remova as duplicatas no local de forma que cada elemento exclusivo apareça apenas uma vez. A ordem relativa dos elementos deve ser mantida a mesma. Em seguida, retorne o número de elementos únicos em nums.

// Considere o número de elementos únicos de nums como k. Para ser aceito, você precisa fazer o seguinte:

// Altere a matriz nums de modo que os primeiros k elementos de nums contenham os elementos únicos na ordem em que estavam presentes inicialmente em nums. Os elementos restantes de nums não são importantes, assim como o tamanho de nums.
// Retorno k.
// Juiz personalizado:

// O juiz testará sua solução com o seguinte código:

// int[] números = [...]; //matriz de entrada
// int[] Nums esperados = [...]; //A resposta esperada com comprimento correto

// int k = removeDuplicados(nums); // Chama sua implementação

// afirmar k == esperadoNums.length;
// for (int i = 0; i < k; i++) {
//      afirmar nums[i] == esperadoNums[i];
// }
// Se todas as afirmações forem aprovadas, sua solução será aceita.

 

// Exemplo 1:

// Entrada: nums = [1,1,2]
// Saída: 2, nums = [1,2,_]
// Explicação: Sua função deve retornar k = 2, com os dois primeiros elementos de nums sendo 1 e 2 respectivamente.
// Não importa o que você deixa além do k retornado (portanto, eles são sublinhados).
// Exemplo 2:

// Entrada: nums = [0,0,1,1,1,2,2,3,3,4]
// Saída: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explicação: Sua função deve retornar k = 5, com os primeiros cinco elementos de nums sendo 0, 1, 2, 3 e 4 respectivamente.
// Não importa o que você deixa além do k retornado (portanto, eles são sublinhados).
 

// Restrições:

// 1 <= nums.comprimento <= 3 * 104
// -100 <= num[i] <= 100
// nums é classificado em ordem não decrescente.


let nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {

    let index = 1

    for(let i= 0;i<nums.length - 1;i++){

        if(nums[i]!==nums[i+1]){
            nums[index] = nums[i+1]
            index++
        }
        
    
    }

    return index
}

removeDuplicates(nums)