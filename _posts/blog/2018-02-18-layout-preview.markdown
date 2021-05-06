---
title: tools:title=”LayoutPreview”
layout: post
date: 2018-02-18 09:44
headerImage: false
tag:
- android
- android development
- android layout
- design
category: blog
author: vladimirjovanovic
description: As every Android developer, I also started building my layouts by hard-coding values into them. Later on, I have realised that I should…
---
![Header](https://cdn-images-1.medium.com/max/2000/1*KE1HSefSP2PFKHOcATMyow.png){: class="bigger-image" }

As every Android developer, I also started building my layouts by hard-coding values into them. Later on, I have realized that I should probably extract them into resources. Next step was not to have values in layouts if they are going to be changed from the code (always keep the state of your view in code). But at that point, my layout preview got broken. The layouts were full of TextViews without texts, `ImageViews` without images, etc. And then I discovered the power of `tools:`. Fast forward one year and I had layouts full of `tools:text="Test text"`, `tools:text="Jake Wharton"`, `tools:src="@drawable/ic_random_res"` … you get the point. Is there a better way to do this, you may ask?

Actually, there is. And it's pretty easy. There are predefined sample resources that you can use to make your layout preview nice and clean. By using these, we can go from this:

{% gist VladimirWrites/9c30ed3fb7bec2c3098cc6662cc06a6c %}

to this:

{% gist VladimirWrites/dba727ff5731a6854b5a5275fa41e6d2 %}

And why is this better? If your `TextView` is inside a repeatable element like, for example, an item inside `RecyclerView`, and you set up your preview correctly, then your `TextView` will have a different text in every item. Speaking of `RecyclerView`, let’s make a deep dive into making a preview of your `RecyclerView` as sleek as possible, using this and some other tricks.

It all starts with a normal and rather ugly `RecyclerView` in your layout XML file. In a preview, it looks like this:

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/1600/1*t_LdKfy3_FhtdYSClfRalQ.png" alt="1" style="width:90%">
</p>

It would look much nicer if we could show the real item used in our `RecyclerView`, and even more so if that item uses sample texts `tools:text=”@tools:sample/lorem”` and `tools:text=”@tools:sample/lorem/random”` for `TextViews` inside. And as a result, we get the following preview:

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/1600/1*h07HZjRlaiMwdouPyVyOCg.png" alt="2" style="width:90%">
</p>

It looks much better, almost like a real application. The only problem is that our application in horizontal orientation has `GridLayout` with two spans. Can we do something in that regard? Of course, we can. By adding `tools:layoutManager=”GridLayoutManager”` and `tools:spanCount=”2"`, we are getting exactly what we want.

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/1600/1*kqjxF4AQWgs07NzvH3jXiA.png" alt="3" style="width:90%">
</p>

Well, almost. Our `Activity` has some menu items in the `Toolbar`, and if we could display these as well, it would be perfect. Accomplishing this isn’t really that difficult. Simply adding `tools:menu=”menu_test”` to the root element of your layout does the trick. It’s important to know that for this to work you need to have predefined menu item `@menu/menu_test.xml`, and your `Toolbar` needs to be defined in a theme and not added in layout’s XML. The final result looks like this:

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/1600/1*wIn852IO79_vJaHKVdCPtg.png" alt="4" style="width:90%">
</p>

The final code looks like this (minus some margins, styles etc., that are removed to make it a bit more compact):

{% gist VladimirWrites/205d4162ae8c7a9f1c1b9d62dc4bf4ce %}

{% gist VladimirWrites/8e5dc7b1a85d3b1e6af8139fa88d7395 %}

{% gist VladimirWrites/991a0629d855e034d9d34ba1a7843434 %}

As you can see, `tools:` gives you great power to prototype and experiment with your layout without writing a single line of Java or Kotlin code or adding unnecessary states to your view’s XML. If you start using it now, you will have a much more pleasant time developing UI on your new project, and it will be a breeze to modify it later on.

<div class="breaker"></div>

Documentation for all tools attributes is available [here](https://developer.android.com/studio/write/tool-attributes.html).

The full source code of this and some other examples can be found in the [GitHub repository](https://github.com/VladimirWrites/tools-sample).

<div class="breaker"></div>

**_Thanks for reading! If you enjoyed this story, please share it!_**