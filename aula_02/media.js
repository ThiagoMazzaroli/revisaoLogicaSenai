const notaMedia = (nota1, nota2, nota3) => {
    const media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){
        console.log('aprovado')
    }else{
        console.log('reprovado')
    }
}

notaMedia(1, 1, 1)