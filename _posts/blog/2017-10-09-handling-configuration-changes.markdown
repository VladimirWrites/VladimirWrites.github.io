---
title: Handling configuration changes using static references
layout: post
date: 2017-10-09 10:44
headerImage: false
tag:
- android
- android app development
- memory leak
- memory management
category: blog
author: vladimirjovanovic
description: What if you hold a static reference to the data in my Activity to preserve them on screen rotation? Why is that bad?
---
![Header](https://media.giphy.com/media/3otPoQqrl8oggqDKg0/giphy.gif){: class="bigger-image" }

When writing about the preservation of data on configuration change, there are two cases to cover. First, if there is a fixed number of small objects that need to survive change, use `onSaveInstanceState`, and that’s it, end of story, problem solved. However, the real problem comes when you need to preserve big objects whose size is unknown. There are a couple of correct approaches to this problem depending on your requirements. But that isn’t what this text is going to be about. This text is going to be about one pretty popular and rather wrong approach. We all know it is a bad one, but not all know why. The internet is full of questions on this topic, and a couple of days ago I also got asked about it.

> *What if you hold a static reference to the data in my Activity to preserve them on screen rotation? Why is that bad?*

“Don’t do that, it’s bad! Memory leaks! Danger! 🚨” was my first reaction. But then he/she said: “Yeah, yeah … I know, but I will be super careful, and I will hold only data, no `Context`, or anything that has reference to the `Context`. Is it still bad?” You can bet it is! But that got me thinking:

> *“Why is it still bad?”*

Why is it bad to have a static reference to some data inside your `Activity`? I was thinking for some time and then `💡.turnOn()`. It’s bad because of 🥁🥁🥁 **memory leaks**.

<div class="breaker"></div>

<p style="text-align: center">
	<img class="image" src="https://media.giphy.com/media/aVtdz7iNVPI1W/giphy.gif" alt="Fail" style="width:90%">
</p>

However, this is not your classical Java/Android memory leak that [Leakcanary](https://github.com/square/leakcanary/tree/master/leakcanary-android) will warn you about. This leaked memory can still be accessed, and although it is not needed anymore, the OS can’t do GC on it. The main problem with having a static reference to an object inside an `Activity` is that it’s really hard to know when to release it.

{% gist VladimirWrites/7badabe88b918aeea48784d846a2eb64 %}

<br>

Think about it. You can’t do that `onDestory()`, because you need your data to survive a configuration change. Should you do it when the next `Activity` is opened? Maybe, but probably not, because you will need those objects when you come back to that `Activity`. So, when should you do it then? Well, you shouldn’t! Android should take care of it, and remove it from memory when there is no free memory left. But it can’t because you have static references to those objects. In the end, the OS will remove it from the memory in the only way it knows how, it will kill your application.

And at some point, on some device, that’s exactly what’s going to happen. You will get `OutOfMemoryException`, and your application will crash. Just to be clear, next step **should not** be adding `android:largeHeap="true"` into your `AndroidManifest.xml`. It should be fixing your application. You can read more about proper handling of configuration changes [here](https://developer.android.com/guide/topics/resources/runtime-changes.html#HandlingTheChange).

To sum up, having static references to objects is really dangerous, and it’s even worst to do it inside the objects which have a lifecycle such as `Activities`, `Fragments`, `Services` etc. Please use your static variables responsibly.

<div class="breaker"></div>

**_Thanks for reading! If you enjoyed this story, please share it!_**