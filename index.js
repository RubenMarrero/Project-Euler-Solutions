function secuencia(n,d) { return d + (n-1) * d; }
function sumatorio_secuencia(n,a1,an){ return (n/2)*(a1+an) }

const max_int = 10;

let d = 3;
let n = parseInt(max_int/d);

const sum_multiplos_3 = sumatorio_secuencia(
    n,
    d,
    (secuencia(n,d)/d)
);

d = 5;
n = parseInt(max_int/d);

const sum_multiplos_5 = sumatorio_secuencia(
    n,
    d,
    secuencia(n,d)/d
);

console.log(sum_multiplos_5);
console.log(sum_multiplos_3);
console.log(sum_multiplos_5+sum_multiplos_3);

