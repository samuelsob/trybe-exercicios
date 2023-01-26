
function maiorNumero(a, b) {
    if (a > b) {
        return a + ' é maior que ' + b
    } else {
        return b + ' é maior que ' + a
    }
}

//console.log(maiorNumero(2, 10));

function maior3Numero(a, b, c) {
    if (a > b && a > c) {
        return a + ' é o maior número'
    } else if (b > a && b > c) {
        return b + ' é o maior número'
    } else {
        return c + ' é o maior número'
    }
}

console.log(maior3Numero(10, 10, 1));