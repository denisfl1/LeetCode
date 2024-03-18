
// Dado um array inteiro nums, mova todos os 0 para o final dele, 
// mantendo a ordem relativa dos elementos diferentes de zero.

// Observe que você deve fazer isso no local, sem fazer uma cópia do array.

 

// Exemplo 1:

// Entrada: nums = [0,1,0,3,12]
// Saída: [1,3,12,0,0]
// Exemplo 2:

// Entrada: números = [0]
// Saída: [0]
 

// Restrições:

// 1 <= nums.comprimento <= 104
// -231 <= num[i] <= 231 - 1



let nums = [0,1,0,3,12]


var moveZeroes = function(nums) {

    let left = 0
    let right = nums.length - 1
    let arr = []

    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
        arr[left] = nums[i]
        left++

        }else{
            arr[right] = nums[i]
            right --
        }
    }

    console.log(arr)
}       

moveZeroes(nums)