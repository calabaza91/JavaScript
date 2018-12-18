function fibonacciGenerator (n) {
    //TODO 
    var fibArr = [];
    var n1 = 0, n2 = 1, next, i= 0;

    while(i < n){
        fibArr.push(n1);
        next = n1 + n2;
        n1= n2;
        n2 = next;
        i++;
    }
    
    //Return an array of fibonacci numbers.
    return fibArr;
}
