let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //console.log('Bem vinda, ' + info.personagem);   1

  info['recorrente'] = 'Sim'
  //console.log(info);                              2

 // for (let key in info) {
 //   console.log(key);                             3
 // }

 // for ( let key in info) {
 //    console.log(info[key]);                      4
 // }

 let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for (let key in info, info2) {
    console.log(info[key] + ' e ' + info2[key]);
  }
  