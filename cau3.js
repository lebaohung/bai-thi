function fibo(i) {
    if(i === 0 || i === 1 ) return i;
    return fibo(i -1) + fibo(i -2);
}

function checkFibo(num) {
    let i = 0;
    while (num >= fibo(i)){
        if(num === fibo(i)) return true;
        i++;
    }
    return false;
}