---
title: "nextly.tv: private TV and movie tracker"
date: 2026-07-10 12:00
tag:
- web
- open source
- tv
image: /projects/icon_nextly-tv.png
headerImage: true
hidden: true
description: "A free, open-source, zero-knowledge tracker for TV shows and movies. Encrypted on your device, no login, installable as a PWA."
author: vladimirjovanovic
externalLink: false
---

<p style="text-align: center">
	<img class="image" src="/projects/nextly-tv_og.png" alt="nextly.tv" style="width:90%">
</p>

I have lost my watch history twice. Two different tracking services, both of which seemed fine right up until they were not: one was acquired and quietly changed, the other simply stopped. Years of "which episode was I on" went with them, and in both cases the problem was the same. The history lived on somebody else's server.

So I built [nextly.tv](https://nextly.tv), which is built so that cannot happen to it.

<div class="breaker"></div>

It is zero-knowledge. Everything is encrypted in your browser before it is sent, and the server only ever holds a blob of ciphertext filed under a hash. There is no login and no email: the app gives you a random account number, and that number is the only key to your data. Nobody running the server can read it, including me.

<div class="breaker"></div>

**What it does**

- Tracks TV shows and movies together, with one screen that answers the only question that matters: what to watch next.
- Marks an episode in one tap from the first screen, and puts it back just as easily.
- Handles rewatches properly. A second run through a series is its own pass rather than an overwrite, so watching something every winter builds a history instead of erasing one.
- Shows what is coming back: air dates for the shows you follow, and what returns this week.
- Works out your year: episodes, hours, and the shows behind them.
- Imports from Trakt, so leaving another tracker is a file rather than a project.
- Installs as a PWA, opens in its own window, and works offline.
- Exports to plain readable JSON at any time, so the history outlives the app.

<div class="breaker"></div>

Technically it is deliberately small: a plain ES-module frontend with no framework and no build step, one Cloudflare Worker for the API, and D1 for the encrypted blobs. Show data comes from TVmaze and TMDB, fetched by your browser directly, so what you look up never passes through my server either. The domain logic is pure and covered by tests, and encryption is AES-256-GCM with a key derived (PBKDF2) from the account number, which never leaves the device.

It is free, has no ads and no tracking, and is licensed under Apache 2.0.

<div class="breaker"></div>

Try it at [nextly.tv](https://nextly.tv), or read the source [on GitHub](https://github.com/VladimirWrites/nextly.tv). Ideas and contributions are welcome, just [open an issue](https://github.com/VladimirWrites/nextly.tv/issues).
