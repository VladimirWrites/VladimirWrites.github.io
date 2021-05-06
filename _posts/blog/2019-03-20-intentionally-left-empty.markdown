---
title: /* intentionally left empty */
layout: post
date: 2019-03-20 09:44
headerImage: false
tag:
- programming
- clean code
category: blog
author: vladimirjovanovic
description: Doing copy/paste of the sample data from one project to another is not an option.
---
![Header](https://cdn-images-1.medium.com/max/2560/1*_c7QqMOJmXlA5Kef58JtJw.png){: class="bigger-image" }

_A long time ago somewhere in India empty spaces were creating a lot of problems. Numbers were being written without zeros, and believe me, it's hard to write numbers when you replace zero with an empty space. 
**11** and **1 1** looked almost the same. That's why zero was created._

_In its early beginnings, zero meant **"intentionally left empty"**._

Let's now travel back to the present, and see if empty spaces are causing trouble in the life of an average software developer. There are probably places in your code base where it's not clear if something is a mistake or if it was left intentionally empty. 
Sometimes we don't need the implementation of `initialize()` in every child method, so we would just create an empty implementation instead of an abstract method.

{% gist VladimirWrites/55f85baf89738654731da4b4fe0e68d4 %}

I know that comments are not great, but in this case, I would suggest adding them. With the added comment, there is no confusion whether the empty method is a mistake or not.

{% gist VladimirWrites/8017f5571208bfe242043892d333516b %}

Another example when we need an empty method is when we want to omit the behavior of the parent's implementation. This clearly breaks [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle).

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/800/1*ToXLL1aet69THe2qxuwCmQ.jpeg" alt="1" style="width:90%">
</p>

However, sometimes you can't control all the code that you are using, so you have to make compromises.

{% gist VladimirWrites/12914c528512fc2c3ce0ce2a3b252577 %}

Then, there are those notorious listener implementations, with a lot of methods that are usually not needed. Here is one example from the Android world:

{% gist VladimirWrites/9a609f1f074892fc11c0beee8a48ab28 %}

Finally, when working on a new feature, you can't build it all at once. Inevitably, you will have parts of the code that are unfinished. This is not really a problem, it just needs to be clearly marked as unfinished with a simple `TODO`.

{% gist VladimirWrites/9b1b89f80beb6464b537e79e79c22c37 %}

<div class="breaker"></div>

Please don't leave your methods empty. If the method is intentionally left empty, simply leave a comment for your fellow developers or for your future self.

<div class="breaker"></div>

**_Thanks for reading! If you enjoyed this story, please share it!_**