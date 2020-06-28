---
title: "KATA: Lazy evaluation"
date: "2019-01-31"
---

What is lazy evaluation?
It is an evaluation strategy that delays the function execution to the point, when the value is needed. 

In the following kata, you should build a program that utilises lazy evaluation with some extra functionalities.

Rules:
```add(fn[arg1, arg2, …])``

Adds a function to the chains of function to be evaluated later.
-It can handle any number of arguments
-First argument has to be a function
-When the function is called it will be called with the remaining arguments
supplied to add (if any) followed by a single argument that will be an item from
the target array supplied to evaluate.
-You should be able to chain together calls to add and evaluate


```evaluate(fn[arg1, arg2, …])``
Evaluates the chain of functions and returns the result.

Example:
```Lazy.add(function minusTwo(a) { return a - 2; }, 10).add(function adder(a,b){return a + b}, 1).evaluate([10,20,30]);```

Here is my solution https://github.com/pkrisz89/lazy
