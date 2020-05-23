---
title: Firebase Predictions 🔮
layout: post
date: 2020-05-22 09:44
headerImage: false
tag:
- programming
- firebase
- android
- firebase predictions
category: blog
author: vladimirjovanovic
description: Firebase provides a wide variety of tools, something for every developer and something for every problem. But did you know that it has a tool that enables you to see into the future 🔮😮?!
---

![Header](../assets/blog/firebase_predictions_cover.png){: class="bigger-image" }

Firebase provides a wide variety of tools, something for every developer and something for every problem. But did you know that it has a tool that enables you to see into the future 🔮😮?! Yes, you heard me right, the tool called Firebase Predictions enables you to predict future actions of your users.

A lot of Android developers have never heard of Firebase Predictions or never used it, and this article will serve as a quick introduction. Apart from that, I will also explore some of the retention and monetization strategies that this tool makes possible.

<div class="breaker"></div>

To be able to start using Firebase Predictions you need to have Firebase Analytics integrated into your app. What Firebase Predictions does, is apply machine learning on your analytics data and create user segments depending on how likely those users are to execute a specific action within the next 7 days. In other words, for every analytics event, it can give you a group of users who are most likely and a group of users who are least likely to execute that event.

<p style="text-align: center">
	<img class="image" src="../assets/blog/firebase_predictions_segments.gif" alt="User Segments" style="width:90%">
</p>

Now armed with that knowledge, you can react to your users' anticipated actions and needs using other Firebase tools and always stay one step ahead. 

You have the option to use Remote Config and adjust user experience for specific user segments, or to use push notifications and in-app messages to inform those users about new deals tailored just for them.

### Retention and Monetization Strategies

The best way to present the power of Firebase Predictions is on an example.
Let's say that we have an app that is selling something. That can be a product, subscription to a pro version of the app, or in-app currency. And let's say that we are tracking this purchase event in Firebase Analytics.

Using Firebase Predictions we can assign the value to the users on how likely they are to make a purchase in the next 7 days. Knowing this, we can start adjusting the behavior of the app for those users.

If the users are not likely to convert, we can explore other monetization strategies, such as for example ads. So using Remote Config we can show ads to those users. If the users are a bit more likely to convert we can try nudging them by, for example, sending them vouchers using push notifications and in-app messages. And if the users are super likely to convert, we can just leave them alone, and make sure that they are not disturbed by ads and push notifications.

<div class="side-by-side">
	<div class="toleft">
		<p style="text-align: center">
			<img class="image" src="../assets/blog/firebase_predictions_app_removal.png" alt="Screenshot" style="width:50%">
		</p>
	</div>
	<div class="toright">
		<p>In a similar way, you can also employ a user retention strategy. The only difference is that, in this case, you would run a prediction on the app removal event and adjust the user experience depending on how likely the users are to uninstall your app.
		</p>
		<p>Finally, you can run Firebase Predictions on any event, and since every app is unique make sure to explore different ways to improve your application using Firebase Predictions.</p>
	</div>
</div>



<div class="breaker"></div>

Now you're probably thinking: "This Firebase Predictions thing sounds amazing. So what's the catch? How much does it cost?" The best thing about Firebase Predictions is that it's completely free, and you can start using it today.

<div class="breaker"></div>

If you would like to learn more about Firebase Remote Config check out my Pluralsight course: [**_Firebase on Android: Remote Config and A/B Testing_**](http://pluralsight.pxf.io/xgdk1)

**_Thanks for reading! If you enjoyed this story, please share it! Also, feel free to leave a comment 💬 below._**