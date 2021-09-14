
const listaPecas = ['Coroa','Pinhão','Cremalheira','Eixo','2','6','6','7','8','555','7894','54585557'];

 
 if (listaPecas.length <= 10){
    console.log ('Permitido cadastrar a peça.');
 }

 for (let index = 0; index < listaPecas.length; index++) {
    const  pecaAtual = listaPecas[index];
    if (pecaAtual.length <=3) {
        console.log(pecaAtual + ': a peça de ter um nome com mais de 3 caracteres.')
    }
    else {
        console.log(pecaAtual + ': a peça pode ser cadastrada')
    }
    //console.log ('peso da peça: ')

    const pesodaPeca = 99;

if (pesodaPeca >= 100){
    console.log ('Peso permitido.');
}
else{
    console.log ('O peso e menor do que o permitido.');
}

 }