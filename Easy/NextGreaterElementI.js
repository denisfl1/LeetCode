

// O próximo elemento maior de algum elemento x em uma matriz é o primeiro elemento maior que está à direita de x na mesma matriz.

// Você recebe duas matrizes inteiras distintas indexadas em 0, nums1 e nums2, onde nums1 é um subconjunto de nums2.

// Para cada 0 <= i < nums1.length, encontre o índice j tal que nums1[i] == nums2[j] e determine o próximo elemento maior de nums2[j] em nums2. Se não houver o próximo elemento maior, a resposta para esta consulta será -1.

// Retorna uma matriz ans de comprimento nums1.length tal que ans[i] seja o próximo elemento maior conforme descrito acima.

 

// Exemplo 1:

// Entrada: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Saída: [-1,3,-1]
// Explicação: O próximo elemento maior para cada valor de nums1 é o seguinte:
// - 4 está sublinhado em nums2 = [1,3,4,2]. Não há próximo elemento maior, então a resposta é -1.
// - 1 está sublinhado em nums2 = [1,3,4,2]. O próximo elemento maior é 3.
// - 2 está sublinhado em nums2 = [1,3,4,2]. Não há próximo elemento maior, então a resposta é -1.
// Exemplo 2:

// Entrada: nums1 = [2,4], nums2 = [1,2,3,4]
// Saída: [3,-1]
// Explicação: O próximo elemento maior para cada valor de nums1 é o seguinte:
// - 2 está sublinhado em nums2 = [1,2,3,4]. O próximo elemento maior é 3.
// - 4 está sublinhado em nums2 = [1,2,3,4]. Não há próximo elemento maior, então a resposta é -1.
 

// Restrições:

// 1 <= nums1.comprimento <= nums2.comprimento <= 1000
// 0 <= nums1[i], nums2[i] <= 104
// Todos os números inteiros em nums1 e nums2 são únicos.
// Todos os números inteiros de nums1 também aparecem em nums2.


let nums1 = [2,4], nums2 = [1,2,3,4]

var nextGreaterElement = function(nums1, nums2) {

    const loopLength = nums2.length - 1
    const greaterNums = nums1.map(num => {
        for (let i = nums2.indexOf(num); i <= loopLength; i++) {
            if (nums2[i] > num) {
                return nums2[i]
            }
        }
        return -1
    })
    return greaterNums;
}


nextGreaterElement(nums1,nums2)


