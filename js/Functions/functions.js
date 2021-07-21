//function expression
//function anonymous
//parameters

const sum = function(number1, number2){

   soma = number1 + number2
    //console.log(soma)
    return soma
}
//sum(21,5) //arguments

console.log (`a soma é ${sum(21,5)}`)


//function scope--------------------------
let subject = 'create video'
function createThink(subject) {
    subject = 'study'
    return subject

}

console.log(createThink(subject))
console.log(subject)
 
//arrow function

//const sayMyName = (name) => {
//     console.log(name)
//}
//sayMyName('vitorS')
console.log('------------------------------------------')
//callback
/*
function sayMyName(name) {
    console.log('antes de executar a funcao callback')
    name()
    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log ('estou em uma callback')
    }
)
*/

/* 
    Funtion() constructor

    *expressao new
    *criar um novo objeto
    *this keyword
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + "esta andando"
    }
}
const vitor = new Person("Vitor")
const joao = new Person("Joao")
console.log(vitor)
console.log(joao)