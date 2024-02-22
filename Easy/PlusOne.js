let digits = [1,2,9]

var plusOne = function(digits) {

    for(let i = digits.length - 1;i>=0;i--){
        if(digits[i] === 9){
            digits[i] = 0
        }else{
            digits[i]++
           
        }
    }
    digits.unshift(1)
    console.log(digits)

}

plusOne(digits)