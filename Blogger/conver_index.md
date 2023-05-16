![](https://images.viblo.asia/21576990-bed7-4d0c-aa22-16b5d4ca9a12.jpeg)

> The main goal of this article is to help you improve your **[English](https://viblo.asia/s/master-english-with-technical-knowledge-BQyJKzg14Me)** level. I will use **[Simple English](https://viblo.asia/s/master-english-with-technical-knowledge-BQyJKzg14Me)** to introduce to you the concepts related to software development. In terms of IT knowledge, it might have been explained better and more clearly on the internet, but **remember** that the main target of this article is still to **[LEARN ENGLISH](https://viblo.asia/s/master-english-with-technical-knowledge-BQyJKzg14Me)**.
-----
Hi, I'm [Tuan](https://tuan-portfolio.web.app/#/), a Full-stack Web Developer from Tokyo 😊.
Follow my blog to not miss out on useful and interesting articles in the future.

The first step to understanding Functional Programming is the hardest, but it doesn't have to be if you have the right attitude.

Previous parts: [Part 1](https://viblo.asia/p/blog156-so-you-want-to-be-a-functional-programmer-part-1-0gdJzQg94z5), [Part 2](https://viblo.asia/p/blog159-so-you-want-to-be-a-functional-programmer-part-2-gwd43k0b4X9)

# Function Composition
![image.png](https://images.viblo.asia/0beda055-facb-4eca-a0a1-6674bcfa9b29.png)

As programmers, we want to find ways to do our work once and be able to use it again. However, it can be difficult to make code that is specific enough to be useful but also general enough to be reused. 

Functional Programming provides a way to achieve this balance by creating small, specific functions that can be combined like Lego™ blocks to create more complex functionality.

This is called **Function Composition.**

So how does it work? Let’s start with two Javascript functions:

```js
var add10 = function (value) {
  return value + 10;
};

var mult5 = function (value) {
  return value * 5;
};
```

This is too verbose so let’s rewrite it using [fat arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) notation:

```js
var add10 = value => value + 10;
var mult5 = value => value * 5;
```

We want to create a function that takes a value, adds 10 to it, and then multiplies the result by 5.
```js
var mult5AfterAdd10 = value => 5 * (value + 10)
```

Even though this is a very basic example, we don't want to have to write the function from the beginning. We could make a mistake like forgetting the parentheses and we already have functions that add 10 and multiply by 5. So instead, let's use the add10 and mult5 functions to create our new function.

```js
var mult5AfterAdd10 = value => mult5(add10(value));
```


We used existing functions to create a new function called mult5AfterAdd10, but there is a better way to do this. In mathematics, "f composed with g" (or "f after g") is a concept called functional composition. 

This means that (f ∘ g)(x) is the same as calling f after calling g with x, or simply, f(g(x)).

In our example, we have mult5 ∘ add10, which is the same as "mult5 after add10". This is why we named our function mult5AfterAdd10. 

We called mult5 after we called add10 with a value, which is the same as mult5(add10(value)). 

We can pass the value of x through a series of functions t, r, s, and so on, and the result of each function will be passed to the next one. This would look like g(h(s(r(t(x))))).

# Trouble in Paradise
![image.png](https://images.viblo.asia/c29fb076-581d-434f-bbd3-67ea799133de.png)

We have seen how to use function composition and how to write our functions in a concise way for clarity and flexibility. Now let's try using these ideas in a different situation and see how it works. 

For example, if we replace add10 with add, what would happen?

```js
const add = (x, y) => x + y;
const mult5 = (value) => value * 5;
```

We can write a function that takes a number as an argument and returns the number multiplied by 5 if it is greater than 10. 
```js
var mult5AfterAdd10 = mult5(add(10)); // this doesn't work
```

This would not work because the add function requires two inputs to be given in order to work. This would look like: add(parameter1, parameter2);

The code is incorrect because the add function is only receiving one of its two parameters, which is causing incorrect results to be passed to the mult5 function. This will lead to incorrect results. 

Function composition is not useful in this situation because the two functions cannot be combined.

It would be helpful if there was a way to give the add function one of its parameters ahead of time, and then the second parameter could be given when the mult5AfterAdd10 function is called. 

This is possible with a technique called **Currying**.

# My Brain!!!!
![image.png](https://images.viblo.asia/9640985b-aa68-4e2a-bd19-6df1778dfe00.png)

Enough for now.

In subsequent parts of this article, I’ll talk about Currying, common functional functions (e.g map, filter, fold etc.), Referential Transparency, and more.

Up next: Part 4

# And Finally
As always, I hope you enjoyed this article and learned something new.
Thank you and see you in the next articles!

If you liked this article, please give me a like and subscribe to support me. Thank you. 😊

-----
> The main goal of this article is to help you improve your **[English](https://viblo.asia/s/master-english-with-technical-knowledge-BQyJKzg14Me)** level. I will use **[Simple English](https://viblo.asia/s/master-english-with-technical-knowledge-BQyJKzg14Me)** to introduce to you the concepts related to software development. In terms of IT knowledge, it might have been explained better and more clearly on the internet, but **remember** that the main target of this article is still to **[LEARN ENGLISH](https://viblo.asia/s/master-english-with-technical-knowledge-BQyJKzg14Me)**.

# Resource
* https://tuan200tokyo.blogspot.com/2023/03/blog160-so-you-want-to-be-functional.html