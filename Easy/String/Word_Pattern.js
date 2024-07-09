

// Dado um padrão e uma string s, descubra se s segue o mesmo padrão.

// Aqui seguir significa uma correspondência completa, 
// de modo que haja uma bijeção entre uma letra no padrão e uma palavra não vazia em s.



// Exemplo 1:

// Entrada: padrão = "abba", s = "cachorro gato gato cachorro"
// Saída: verdadeiro
// Exemplo 2:

// Entrada: padrão = "abba", s = "cachorro gato gato peixe"
// Saída: falso
// Exemplo 3:

// Entrada: padrão = "aaaa", s = "cachorro gato gato cachorro"
// Saída: falso


var wordPattern = function(pattern, s) {

    let char = s.split(" ")
    let arr1 = ''
    let arr2 = ''

    if(pattern.length !== char.length)return console.log(false)

        for(let i = 0;i<pattern.length;i++){

            arr1 += pattern.indexOf(pattern[i])

           while(i < pattern.length){

                arr2 += char.indexOf(char[i])

                break
           }

        }

        console.log(arr1 === arr2)  
    
}
let patter = "abba", s = "dog cat cat fish"
wordPattern(patter,s)
