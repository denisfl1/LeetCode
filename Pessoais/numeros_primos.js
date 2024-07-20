

class Primo{

constructor(number){

this.number = number

}
    Result(){
        let dividendo = 1
        let result = 0

        if(this.number === 0)return console.log("Digite um valor maior que 0")

            while(dividendo <= this.number){
                if(this.number % dividendo === 0){
                   result++
                }
                dividendo++
            }
            return console.log(result === 2 ? `${this.number} é um número Primo` : `${this.number} não é um número Primo`)
    }


}

new Primo(4).Result()

