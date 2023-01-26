let numbers = [8, 100, 2,];
let impares = []

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares.push(numbers[index])
    }
}

if (impares == 0){
    console.log('nenhum valor  ímpar encontrado');
} else {
    console.log(impares);
}