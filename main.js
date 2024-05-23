"use strict";
function table(n1, n2) {
    console.log('__'.repeat(10));
    for (let i = 1; i <= n2; i++) {
        console.log(` ${n1} x ${i} = ${n1 * i}`);
    }
}
table(2, 10), table(3, 10);
table(9, 10);
table(12, 10);
table(20, 10);
