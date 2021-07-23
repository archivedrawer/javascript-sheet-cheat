// TIPOS DECALRAÇÕES ATRIBUIÇÕES
// instruções
console.log('Instrução');
// dados, tipos das constantes literais
console.log(typeof "text") // teste é uma constante literal string
console.log(typeof 'text')
console.log(typeof `text`)
console.log(typeof 3.6) // 3.6 é uma constante literal number
console.log(typeof 3n)
console.log(typeof true)
console.log(typeof Symbol('simb'))
console.log(typeof {})
console.log(typeof [])
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof function(){})
console.log(typeof (() => {}))

// variáveis e constantes
x = 4 // variável global => má prática
console.log(x)
console.log(typeof x) // x está number
x = 'x'
console.log(x)
console.log(typeof x) // x está string
// var: variáveis no escopo da função
console.log(y) // y não existe ainda
if (true) {
  var y = 4 // vale para o escopo da função
}
console.log(y)
// a variável z só existe dentro do bloco, por causa do let
// console.log(z)
if (true) {
  let z = 9 // let permite variáveis "escopadas" no bloco
}
// console.log(z)
// não usamos mais var, apenas let ou consta
let q // declaração
q = 3 // atribuição
// let q = 8 // redeclaração, não é permitida
q = 8 // reatribuição, é permitida
const w = 'texto' // const declara uma constante!
// constante não permite reatribuição
// w = 'aula' // não é permitido
console.log(w)

// OPERADORES
// operaddores aritméticos
// + - * /  % (módulo) e ** (exponenciação)  // <<>> < >
console.log(14 + 4)
console.log(14 - 4)
console.log(14 * 4)
console.log(14 / 4)
console.log(parseInt(14 / 4))
console.log(14 % 4)
console.log(2 ** 10) // equivale ao Math.pow

console.log('str'.concat('ing'))
console.log('str' + 'ing')
console.log('abc' + 5)
console.log(typeof('abc' + 5))
console.log('20' + 5)
console.log('20' - 5)
console.log(typeof('20' - 5))

// operadores lógicos
// equivalência == != (diferente) < (menor que) > (maior que) && (E) || (OU)
// igualdade estrita, de tipo e valor === !==
let X = 5
let Y = '5'
console.log(X == Y)
let u = 1
let i = true
console.log(u == i)
// SEMPRE USAREMOS O OPERADOR ESTRITO
console.log(X === Y) // x é number e y é string
console.log(1 != '1')
console.log(1 !== '1')

const z = 8
const c = 9
console.log(c > z)
const p = c > z
console.log(p)
console.log(typeof p)
if (p) {
  console.log('z é maior que c')
}
const cinco = 5
console.log(cinco < 6)
console.log(cinco > 4)
console.log(cinco > 5)
console.log(cinco > 5 || cinco == 5)
console.log(cinco >= 5)
console.log(cinco >= 5 && c > z)
console.log (true && true && true)
console.log (true && true && false)
console.log (false || false || false)
console.log (false || false || true)

// FALSY
// false null undefined 0 NaN ''
let teste = 1
// expressão lógica sem operador
if (teste) { // not falsy
  console.log('algo')
}
teste = null
if (teste) console.log(teste)
teste = 'str'
if (teste) console.log(teste)
teste = ''
if (teste) console.log(teste)
teste = undefined
if (teste) console.log(teste)
teste = 0
if (teste) console.log(teste)
teste = NaN
if (!isNaN(teste)) console.log(teste) // use apenas 'teste' como argumento
teste = []
if (teste) console.log(teste)
if (teste.lenght > 0) console.log(teste)
teste = {}
if (teste) console.log(teste)


