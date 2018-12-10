
function summ(S) {
    return S <= 1 ? 1 : S + summ(--S);
}

console.log("Rez: ",summ(100));