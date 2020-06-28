---
title: "How to spread values to an Object or Array conditionally"
date: "2019-02-20"
---

In this post I’d like to show you multiple ways to conditionally insert entries to an array or object.

Array
The most readable way is probably a simple if condition with an array.prototype.push method. 

```
const condition = true;
const array = [];
if (condition) {
   array.push(“hello”);
};

```


We can achieve the same result with a simple spread with a ternary inside. Although it is less readable, it results in more compact code.

```
const condition = true;
const arr = [“a”,”b”, …(condition ? [“c”] : [])]
```

If you don’t want to mutate the original array, or just have to repeat this operation multiple times, you can write a function that takes in 3 arguments and always returns a new array.

```
const arr = [“b”,”c”];
const insertIf= (arr, condition, value) => condition ? [...arr, value] : [...arr];
const newArr = insertIf(arr, true, “d”);
```

Object
The longest, and probably the most readable way is when we define a new property within an if block. 
```
const condition = true;
const obj = {
   foo: ‘bar’
}
if (condition) {
   obj.bar = ‘baz’
};
```
You can spread key value pairs with a simple ternary and short circuit operator within your object.  
```
const obj = {
   foo: ‘bar’,
   …(condition && {bar: ‘baz’})
}
```

If you prefer reusability and don’t want to mutate the original object, create a function that takes in 3 arguements and returns a new object every time.
```
const spreadIf = (obj, obj2, condition) => ({...obj, ...(condition && obj2)});
```
