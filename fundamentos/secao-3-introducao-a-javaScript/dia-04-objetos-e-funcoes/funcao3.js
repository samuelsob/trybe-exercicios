function valor(a) {
    if (a > 0) {
        return 'positive'
    } else if (a < 0) {
        return 'negative'
    } else {
        return 0
    }
}

console.log(valor(0.2));