let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array[0]
let maior = array[0]

for (let index = 0; index < array.length; index +=1) {
    if (array[index].length < menor.length) {
        menor =  array[index]; 
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}

console.log(maior);
console.log(menor);