function checkN(n) {
    if (n < 2) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}
let count=0;
i=2;
while(i<10000){
    if (checkN(i)){
        console.log(i)+'<br>';
        count++;
    }
    i++;
}