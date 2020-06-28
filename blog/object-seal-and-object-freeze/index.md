---
title: "Object.seal vs Object.freeze. What are they?"
date: "2019-03-15"
---

## How to create immutable objects in javascript?

## What is data mutation?
Mutable data types are data types whose state can be changed after it’s creation. 

Eg.

```
var  a  = {
   foo: “bar”
};

a.foo = “baz”;

console.log(a) // {foo: "baz"} 
```

Primitive types (boolean, string, number, null, undefined) are immutable by default. The variable can be assigned to a new value, but the existing value cannot be changed.

## Const
Common misconception, that variables declared with ES6 const keyword makes its assigned data immutable (becomes a constant). Const creates a block-scoped read only reference to the value.

```
//Example 1
const myVar = “baz”;
myVar = “bar”; // Uncaught TypeError: Assignment to constant variable

//Example 2
const myObj = {
  name: “bob”
};

myObj.name = “Kris”;
console.log(myObj); // {name: “Kris}
```

## Object.seal
Object.seal() prevents new properties to be added and deleted, making all existing properties non-configurable. Existing values can be still changed.

```
const kris = {
   name: “Kris”,
   age: 29
};

Object.seal(kris);

delete kris.name;

console.log(kris) // { name: “Kris”,age: 29};

kris.food = “pizza”;

console.log(kris) // { name: “Kris”,age: 29};

kris.age = 99;

console.log(kris) // { name: “Kris”,age: 99};
```

## Object.freeze
Truly immutable objects can be created with Object.freeze() method. As it freezes all the object properties therefore they cannot be modified/deleted, including the object prototypes. The frozen object always return the same values.

```
const kris = {
   name: “Kris”,
   age: 29
};

Object.freeze(kris);

delete kris.name;

console.log(kris) // { name: “Kris”,age: 29};

kris.food = “pizza”;

console.log(kris) // { name: “Kris”,age: 29};

kris.age = 99;

console.log(kris) // { name: “Kris”,age: 29};
```
