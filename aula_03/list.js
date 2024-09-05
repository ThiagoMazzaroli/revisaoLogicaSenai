var list = [1, 3, 4, 6, 7, 90, 1]

const encontraMaiorNum = () => {
    var maiorNum = list[0]
    for(let i = 0; i < list.length; i++){
        if(list[i] > maiorNum){
            maiorNum = list[i];
        }
    }
    return maiorNum;
}

var maior = encontraMaiorNum(list);
console.log("O numero maior eh: " + maior);


const encontraMenorNum = () => {
    var menorNum = list[0]
    for(let i = 0; i < list.length; i++){
        if(list[i] < menorNum){
            menorNum = list[i];
        }
    }
    return menorNum;
}

var menor = encontraMenorNum(list);
console.log("O numero menor eh: " + menor);
