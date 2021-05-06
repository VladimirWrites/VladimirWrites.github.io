---
title: Short methods FTW
layout: post
date: 2017-10-02 22:44
headerImage: false
tag:
- programming
- clean code
- design patterns
- software development
- software architecture
category: blog
author: vladimirjovanovic
description: My boss came to me and said&#58 "Every method that you write should be less than 25 lines long" and I laughed, I laughed hard, right in his face. I was such a plonker!
---
![Header](https://cdn-images-1.medium.com/max/2000/1*lEFA9LXXUbGBMnJcEw6fAg.jpeg){: class="bigger-image" }

Some 5 years ago, I got my first intern job in a small startup. We were building a computer vision prototype in Matlab, and my assignment was to write C/C++ code that was supposed to do different types of transformations on video frames. I wrote a 300-lines-long monstrosity of a method that was doing all kinds of transformations and calculations on a matrix. It worked, and I was happy. Then my boss came to me and said:

> Every method that you write should be less than 25 lines long.

And I laughed, I laughed hard, right in his face. I was such a [plonker](https://www.urbandictionary.com/define.php?term=plonker)!

<p style="text-align: center">
	<img class="image" src="https://media.giphy.com/media/zI6X93e09lDag/giphy.gif" alt="Plonker" style="width:90%">
</p>

And let me tell you something, 25 lines make one big, long method. Actually, most should be much shorter, around 10 lines, maybe even less. 25 lines should be the upper limit. And why is that?! Well, here are some of the reasons:
* First of all, it fits easily on your screen, so it’s easy to read.
* Its purpose can be expressed in one simple sentence, and that makes it (in most cases) easy to understand.
* It doesn’t need comments, because[ it does only one thing](https://en.wikipedia.org/wiki/Single_responsibility_principle), and that thing can be described within its name.
* It’s easy to test.
* And lastly, because [Uncle Bob](https://en.wikipedia.org/wiki/Robert_Cecil_Martin) said so.

> “The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.” — Robert C. Martin

However, not all short methods are good. For example this one:
{% gist VladimirWrites/0b605f79e936190a70bad919fab0f3f0 %}
&nbsp; 
> Long method bodies are a classical [code smell](https://en.wikipedia.org/wiki/Code_smell): it’s not in itself a problem, but it’s an indication that there’s probably a problem there. — [Joachim Sauer](https://softwareengineering.stackexchange.com/users/2234/joachim-sauer) (has nothing to do with this [Joachim Sauer](https://en.wikipedia.org/wiki/Joachim_Sauer), I think 🤔)

<div class="breaker"></div>

One thing that’s mind-boggling is that the vast majority of developers knows that the long methods are bad, but very few actually follow this rule. Quite often, I see good developers writing huge methods because “It’s a UI” or “It’s in a test” or “It’s Java ✋”. And at first glance, it doesn’t look that bad. Code is well organised and each line logically follows the previous one. That’s because the developer who has just written that code has its context and understanding in his head, so he doesn’t need to get it from the code. When another developer tries to change that part of the code one year after it’s been written he/she is …

<p style="text-align: center">
	<img class="image" src="https://media.giphy.com/media/8JfMnpTXorVDy/giphy.gif" alt="Fail" style="width:90%">
</p>

going to fail. Why?

1. Because there is no time to invest in proper analysis of that method. (New feature needs to be done by yesterday).
2. There are no tests to support refactoring. Not because it’s hard to cover a 100-lines-long method with tests (btw. it is hard), but because it’s much easier to split it into 10 methods, and write tests for each of them. Therefore, there is a good chance that that person didn’t even try to test it. And if he/she did, it’s likely that our developer would be making changes on 10 short methods.
3. Misleading comments are everywhere. First of all, there has to be at least a couple of comments in a long method (it’s really unprofessional to write a long incomprehensible method without comments 😄). And it’s quite probable that code has already been changed, but developers are really scared of changing other people’s comments, so comments will stay the same. They will be sitting there, telling you a story of some other badly written code.

**So please, for the love of Uncle Bob, write your methods short.**
P.S. I promise that I will refactor long methods in [my projects on GitHub](https://github.com/VladimirWrites). 🤞

<div class="breaker"></div>

**_Thanks for reading! If you enjoyed this story, please share it!_**