---
title: "Lemniscate Progress View"
layout: post
date: 2017-01-18 12:01
tag: 
- android 
- library 
- open source
headerImage: true
image: ../assets/projects/icon_lemniscate.png
hidden: true # don't count this post in blog pagination
description: "An easy way to make your progress view nice and sleek."
category: project
author: vladimirjovanovic
externalLink: false
---

<p style="text-align: center">
	<img class="image" src="../assets/projects/animation_lemniscate.gif" alt="Animation" style="width:50%">
</p>

Lemniscate is a library that will help you to make your progress view nice and sleek. It supports a wide variety of different views, all based on mathematical curves.

<div class="breaker"></div>

<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="../assets/projects/screen_lemniscate.png" alt="Screenshot" style="width:90%">
    </div>

    <div class="toright">
        <p>As a part of the project, there is also an Android application that will help you pick the best progress view for your needs. Using it, you can also choose the right parameters for a specific curve so that the view has the exact behavior that you want. The application is available at the link down below.</p>

        <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.vlad1m1r.lemniscate.sample" title="PlayStore">
            <p style="text-align: center">
                <img class="image" src="../assets/projects/play_badge.png" alt="PlayStore" style="width:70%">
            </p>
        </a>

        <p>When you decide which curve to use, and after you finish customizing it inside the app, you are ready to add it to your project. You just need to add the custom view in your layout XML file for a specific curve and set parameters with the values from the app. Here is one example of how could this code look like.</p>

        {% gist VladimirWrites/ed0dc82eb6624a5870d80b2772d7c7e8 %}

    </div>
</div>

<div class="breaker"></div>

Check it out [here](https://github.com/VladimirWrites/Lemniscate).
If you need help, just let me know by [opening an issue](https://github.com/VladimirWrites/Lemniscate/issues) or down below in the comments section.