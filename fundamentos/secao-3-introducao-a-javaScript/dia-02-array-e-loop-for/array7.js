let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersOrd = [numbers[0]]

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > numbersOrd) {
        numbersOrd.push(numbers[index])
    }    
}

console.log(numbersOrd);