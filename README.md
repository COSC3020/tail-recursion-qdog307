# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

For tail recursion  the final action is to call itself, so after the call there is nothing left to do. The two do differ as the non-tail-recursive has an exponential growth because of the calls growing. The complexity is $\Theta$(n)

## Sources 

For this I looked at the slides for DP and the hinted fibonaci. I then looked up what tail recursive means and that it is just the action of calling itself. The test code was generated from chatgpt  
