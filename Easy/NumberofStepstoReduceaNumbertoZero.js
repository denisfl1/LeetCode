
let num = 14

var numberOfSteps = function(num) {
    let val = 0

    while(num >0){
        num % 2 === 0 ? num /= 2 : num -=1

        val++
    }
    
    console.log(val)


}

numberOfSteps(num)