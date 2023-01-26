let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

// for (let key in names) {
//    console.log('Olá ' + names[key])
//}

for (let key of names) {
    console.log('Olá ' + key)
}
