---
title: Variable looked at me and said&#58 “Say my name!”
layout: post
date: 2017-10-17 09:44
headerImage: false
tag:
- programming
- clean code
category: blog
author: vladimirjovanovic
description: While you are writing your code, the most important thing to have in mind is that you are writing your code first and foremost for humans to understand, and secondly for a machine to interpret.
---
![Header](https://cdn-images-1.medium.com/max/2000/1*H789DsYnZjSp3GChn0e-hA.jpeg){: class="bigger-image" }

While I was learning basics of programming at my high school, I was being taught how to solve problems: sort an array, reverse a String, convert Roman numerals to Arabic, etc. It was never expected from me to write code that would be altered or checked by another person. Usually, it was enough for the code to work, and to return correct output for a given input.

Some years later my university days started. I studied Mathematics and CS, and on my first CS exam I did all tasks, I tested them, and they worked, so I was expecting my first A+. But I got a B. I ran to my Assistant Professor’s office to tell him that he had made a mistake.

- *I came to him, all confident, and said: “I saw the exam results, and I think you have made a mistake. I am sure that my code works as expected.”*
- *“Yes, it does,” he answered.*
- *“So why did I then get a B?”*
- *“Because it took me 60 minutes to see why it worked.”*

And why is that, you may ask?! Well, the longest variable’s name in my code had two characters in it, and its name was `s1`. At that point, I realised that from that day on, my code would be read by others, so I started commenting it.

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/1600/1*LO8ENinrxsVeJq3h4_l3vA.gif" alt="No" style="width:80%">
</p>

As you can see, I learned some things the hard way, but you don’t have to.

<div class="breaker"></div>

Let’s start from the beginning. Why do we need a variable’s name longer than one character? Because, usually, code that you write professionally will be read by someone else, or worse, by you, one year later. Maybe while you are writing it, it’s all clear to you. But that isn’t because your code is clear and easy to understand, that’s because you have just written it.

Whenever you feel the urge to put a comment over your variable declaration, think about giving your variable a more descriptive name. The main problem with the comment that describes your variable is that it will be at one place in your code, and your variable will be at multiple locations. A developer that reads your code at a later point in time will need to constantly convert `vn` into `variableName` in his mind while trying to understand the code.

Do not expect that giving your variables longer names will automatically make your code better. Naming is hard, and it will take you much more time to find a decent name for your variable than to write a comment.

>“There are only two hard things in Computer Science: cache invalidation and naming things.” — Phil Karlton

Some of the basic principles to follow when naming your variables are:

* Use pronounceable names for all variables. `dayMonthYear` is a much better name than `ddmmyyyy`.
* The name should tell you what the object does, instead of how it does it.
* Names should be meaningful within their context. `name` is a pretty good variable’s name inside class `User`.
* Be consistent. Most words have synonyms. Pick one and use it throughout your project.
* Use a name that is as short as possible, but descriptive enough. Use `birthday` instead of `dateOnWhichUserIsBorn`.
* Don´t use negative logic for your variable’s name. Use `isEnabled` instead `isNotEnabled`.
* Whenever you have two variables that differ just by number, refactor your code immediately.

In some cases, variables can and should have a short name.

* If a variable represents a loop-count, its name should be `i`, or `j` for the inner loop.
* In a function where arguments traditionally have a one-char-name.

{% gist VladimirWrites/aab584ee110fc394acc6a0c6cd8747bd %}

* Sometimes it’s really hard to explain a variable’s purpose inside its name, and in that case, you need to write a comment.

{% gist VladimirWrites/acacf874ec480f02d62de6a3ec6a3b39 %}

<div class="breaker"></div>

While you are writing your code, the most important thing to have in mind is that you are writing your code first and foremost for humans to understand, and secondly for a machine to interpret. Therefore, when your code works and does what it’s meant to do, spend a couple of minutes and make it easier for human beings to understand.

<div class="breaker"></div>

**_Thanks for reading! If you enjoyed this story, please share it!_**