---
title: PRObably the Language Of God”
layout: post
date: 2017-10-24 09:44
headerImage: false
tag:
- programming
- prolog
category: blog
author: vladimirjovanovic
description: During my university days, while I was studying Mathematics and CS, software development was refreshment of applied science in a sea of theoretical math. But than at my 4th semester I got the Prolog.
---

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/1600/1*5WdZRFMF5s_15nOUAxEDbg.png" alt="Prolog" style="width:50%">
</p>

During my university days, when I was studying Mathematics and CS, software development was a refreshment of applied science in a sea of theoretical math. But then in my 4th semester came [Prolog](https://en.wikipedia.org/wiki/Prolog). For those who hadn’t heard of Prolog, it’s the most inapplicable programming language in the universe (at least that’s what I thought). Created in the early 1970s, it was one of the first [logic programming languages](https://en.wikipedia.org/wiki/Logic_programming). It’s the most mathematical thing in the world of computer science.

Seven years after my first encounter with Prolog, I found some old `.pl` files, I opened them and was amazed that at one point in my life I had understood and more surprisingly had written those lines. So I decided to take one week of my life, and check again if Prolog is worth learning in the 21st century. At that point, I created [GitHub repository](https://github.com/vlad1m1r990/PrologSamples), downloaded [Prolog compiler](http://www.swi-prolog.org/download/stable), and started.

<div class="breaker"></div>

The main building blocks of Prolog code are facts and rules. A fact is something like an [axiom](https://en.wikipedia.org/wiki/Axiom), a statement that is taken to be true. Meanwhile, a rule is analogous to a theorem, and its truthiness can be derived from facts.

These are the examples of a fact and a rule. The next step would be to load a file containing facts and rules into Prolog and make queries on it. For this case, the examples of queries would be:

```prolog
?- guitarist("Saul Hudson").
true.
?- musician("Saul Hudson").
true.
?- guitarist(X).
X = "Saul Hudson".
```

As you can see, `guitarist` does not behave like a function. That’s because it’s not a function, it’s a relation. Prolog is a relational programming language. To better explain this, let’s take a look at the following example:

`factorial` defines a relation between some natural numbers. What does that mean? The fact `factorial(1,1)`. means that `1` is in relation `factorial` with `1`. And what about the second line?! Well, it can be read like this: “Numbers `N` and `R` are in relation `factorial` if `N>1` and `N1 is N-1` and `N1` and `R1` are in relation `factorial` and `R is N*R1`” 😧. Could that be expressed in an understandable way?! In practice, it means that if you query this set of rules, you can calculate factorial.

```prolog
?- factorial(5,R).
R = 120 .
?- factorial(1,R).
R = 1 .
?- factorial(20,R).
R = 2432902008176640000 .
```

<div class="breaker"></div>

These are a couple of beginners examples of Prolog code. I hope this is sufficient to show you how Prolog works, and what it has to offer. If you find this interesting, and if you are curious enough to do something on your own, feel free to add it to the [repository](https://github.com/vlad1m1r990/PrologSamples).

So, should you learn Prolog? Well, it’s the 21st century, and you should be learning whatever you can find on the internet. But seriously, is it worth learning? I think it is. It’s a niche concept that never really took off, but it somehow feels fresh and modern. For you, it will probably be a totally new approach to software development, that will get you out of your comfort zone, and force you to think in a different way while giving you another perspective on how software can be written.

<div class="breaker"></div>

**_Thanks for reading! If you enjoyed this story, please share it! Also, feel free to leave a comment 💬 below._**