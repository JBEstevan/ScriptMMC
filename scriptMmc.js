let numero1
let numero2

console.log('Digite um valor e depois outro:')
process.stdin.on("data", function(data) {
    let entradaUsuario = +data.toString().trim()

    if(!numero1) {
        numero1 = entradaUsuario
    } else {
        numero2 = entradaUsuario
        
        let i
        let maior
        let menor

        if (numero1 > numero2) {
            maior = numero1
            menor = numero2
        } else {
            maior = numero2
            menor = numero1
        }

        i = maior
        for (i; i < numero1 * numero2; i+= maior) {
            if (i % numero1 == 0 && i % numero2 == 0) {
                console.log('MMC = ' + i)
                break
            }
        }
    }
    })
