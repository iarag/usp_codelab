//criando uma calculadora

function calculadora(a,b, operacao){
    if(operacao === 1){
        return a + b;
    } 
    
    if(operacao === 2){
        return a - b;
    }

    if(operacao === 3){
        return a * b;
    }

    if(operacao === 4){
        return a / b;
    }
};

console.log(calculadora(2,3,4));



// criando média de facul

function calculoMedia(p1,p2){
    var media = (p1 + p2)/2;
    return media;
}

function avaliacao(media){
    if(media < 5){
        return "Aluno reprovado";
    } else {
        return "Aluno aprovado";
    }
}

var media = calculoMedia(7, 5);
var passou = avaliacao(media);
console.log(passou);