const word = "Carregando..."

let val = 0
const int = setInterval(()=>{

val+= 1
    console.log(word, val)
    if(val == 4){
        clearInterval(int)
    }


},1000)

