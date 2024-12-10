/* This is the iterative dyanmic approach 
function fib_dp(n) {
var fib_old = 1;
var fib = 1;
var fib_new;
while(n > 2) {
fib_new = fib + fib_old;
fib_old = fib;
fib = fib_new;
--n;
}
return fib;
}
6
*/

function fib_tail_recursive(n, fib = 1, fib_old = 1) {
    if (n <= 2) return fib; // Base case for n = 1 or 2
    return fib_tail_recursive(n - 1, fib + fib_old, fib); // Tail-recursive call
}


module.exports = { fib_tail_recursive };