let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for(let properties in info) {
    console.log(properties);
}

for(let properties in info) {
    console.log(info[properties]);
}


let info2 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Montain, Delll"s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
for (let properties in info) {
    if (
        properties === 'recorrente' &&
        info[properties] === 'Sim' &&
        info2[properties] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[properties] + 'e' + info2[properties]);
    }
}