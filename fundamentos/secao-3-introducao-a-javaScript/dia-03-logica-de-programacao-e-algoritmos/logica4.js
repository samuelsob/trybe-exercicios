let maiorPrimo = 0

for (let inum = 2; inum <= 50; inum += 1) {
    let ePrimo = true;
    for (let idiv = 2; idiv < inum; idiv += 1) {
        if (inum % idiv === 0) {
            ePrimo = false;
        }
    }
    if (ePrimo) {
        maiorPrimo = inum;
    }    
}

console.log(maiorPrimo);

