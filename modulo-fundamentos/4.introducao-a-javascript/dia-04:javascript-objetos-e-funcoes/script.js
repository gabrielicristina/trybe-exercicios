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
