---
title: tools:title=”RemoteSampleData”
layout: post
date: 2018-03-10 09:44
headerImage: false
tag:
- android
- android development
- android layout
- design
category: blog
author: vladimirjovanovic
description: Doing copy/paste of the sample data from one project to another is not an option.
---
What I've learned from my previous [article]({% post_url blog/2018-02-18-layout-preview %}) is that the best way to gain new knowledge about a certain topic is to write about it. When I first wrote the article, I had no idea that you can create custom sampledata for your Android project. (If you don't have a clue what sampledata is, please read [tools:title="LayoutPreview"]({% post_url blog/2018-02-18-layout-preview %})) And then someone sent me [this](https://blog.stylingandroid.com/tool-time-part-2/).

It sounded like a really cool feature, so I made the list of my favourite characters from Lord of the Rings, used it as `sampledata`, and got this glorious layout preview.

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/1600/1*cZHVJzVAvIfQMI47DEZo1A.png" alt="LotR" style="width:90%">
</p>

Later on, I wanted to include it in my other projects, but the only option that I had was to copy/paste the `sampledata` from one project to another, and that didn’t make any sense. Then I did what every (lazy) developer would do, asked a [question on StackOverflow](https://stackoverflow.com/questions/48874434/use-sample-data-directory-from-a-library).

After 10 views and no answer in sight, I’ve decided to sacrifice a bit of my reputation and start a bounty. And it worked. I got my answer, which I will share with you.

To use `sampledata` between multiple projects you first have to host it and then have a Gradle script which will download it into your project’s `sampledata` folder. This is the code which does that:

{% gist VladimirWrites/536060a2edddb6d6436f80bce82b7f8e %}

{% gist VladimirWrites/b7bb9fdedebf535f4d9ee78ca2ca39b8 %}

The first script will delete `sampledata` once you do clean build, and the second one will create `sampledata` folder in case it doesn’t exist, and then download sample files into it. It works like a charm and from now on you can go crazy with your layout previews. I know that from now on I will never again use `@tools:sample/lorem/random`.

<p style="text-align: center">
	<img class="image" src="https://cdn-images-1.medium.com/max/2000/1*mRs5qWCaRL0rpaflBjwfZQ.png" alt="Developers developers" style="width:90%">
</p>

<div class="breaker"></div>

This code can be found in [GitHub repo](https://github.com/VladimirWrites/tools-sample).

I’ve also added some sample data, and will keep adding more. If you notice that something is missing or could be improved, feel free to contribute. This could be a great opportunity for novice developers to make their first contribution 😉.

<div class="breaker"></div>

**_Thanks for reading! If you enjoyed this story, please share it!_**