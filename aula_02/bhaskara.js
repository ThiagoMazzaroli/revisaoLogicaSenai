
const bhaskara = (a, b, c) => {

    const bElv = b * b;
    const multiDoA = 4 * a * c;
    const subDaRaiz = Math.sqrt(bElv - multiDoA);
    const divMais = (-b + subDaRaiz) / (2*a);
    const divMenos = (-b - subDaRaiz) / (2*a);
    console.log(divMenos)
};

bhaskara(2, -16, -18)

