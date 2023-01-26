function angTri(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        return 'erro'
    } else if (a + b + c !== 180) {
        return false
    } else if (a + b + c == 180){
        return true
    }
}

console.log(angTri(60, 60, 0));