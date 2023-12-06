function sum (x) {
    return function(y) {
        return x + y;
    };
}

let i = sum(5);
console.log( i(0), i(1), i(2) );

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );