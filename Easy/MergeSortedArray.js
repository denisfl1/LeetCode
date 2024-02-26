// Você recebe duas matrizes de inteiros nums1 e nums2, classificadas em ordem não decrescente, e dois inteiros m e n, representando o número de elementos em nums1 e nums2 respectivamente.

// Mesclar nums1 e nums2 em uma única matriz classificada em ordem não decrescente.

// O array classificado final não deve ser retornado pela função, mas sim armazenado dentro do array nums1. Para acomodar isso, nums1 tem um comprimento de m + n, onde os primeiros m elementos denotam os elementos que devem ser mesclados e os últimos n elementos são definidos como 0 e devem ser ignorados. nums2 tem um comprimento de n.

 

// Exemplo 1:

// Entrada: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Saída: [1,2,2,3,5,6]
// Explicação: Os arrays que estamos mesclando são [1,2,3] e [2,5,6].
// O resultado da mesclagem é [1,2,2,3,5,6] com os elementos sublinhados vindos de nums1.
// Exemplo 2:

// Entrada: nums1 = [1], m = 1, nums2 = [], n = 0
// Saída: [1]
// Explicação: Os arrays que estamos mesclando são [1] e [].
// O resultado da mesclagem é [1].
// Exemplo 3:

// Entrada: nums1 = [0], m = 0, nums2 = [1], n = 1
// Saída: [1]
// Explicação: Os arrays que estamos mesclando são [] e [1].
// O resultado da mesclagem é [1].
// Observe que como m = 0, não há elementos em nums1. O 0 existe apenas para garantir que o resultado da mesclagem caiba em nums1.
 

// Restrições:

// nums1.comprimento == m + n
// nums2.comprimento == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109


let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3


 function merge (nums1, m, nums2, n) {
    let first = m - 1
    let second = n - 1

    for(let i= m + n - 1;i >=0; i--){

        if(second < 0){
            break
        }
        if(nums1[first]>nums2[second]){
            nums1[i] = nums1[first];
            first--
        }else{
            nums1[i] = nums2[second]
            second--
        }

    }
    console.log(nums1)
        
}
merge(nums1, m, nums2, n)