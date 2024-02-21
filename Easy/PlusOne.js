let digits = [1,2,9]

var plusOne = function(digits) {
    position = digits.length -1

            digits[position] = digits[position] + 1

            if(digits[position] > 9){
                digits = String(digits).split('')
                
                digits = digits.filter((it)=>it != ',').map(str => parseInt(str, 10))
                                  
            }

            console.log(digits)
}

plusOne(digits)