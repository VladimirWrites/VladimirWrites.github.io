---
title: "nextly.page: private reading tracker"
date: 2026-08-12 12:00
tag:
- web
- books
image: /projects/icon_nextly-page.png
headerImage: true
hidden: true
description: "A free, zero-knowledge reading tracker. Page numbers, audiobooks, and your Goodreads history brought over. Encrypted on your device, no login, installable as a PWA."
author: vladimirjovanovic
externalLink: false
---

<p style="text-align: center">
	<img class="image" src="/projects/nextly-page_og.png" alt="nextly.page" style="width:90%">
</p>

Having built a tracker for television, the same question came up for books, and the answer was worse. Goodreads is owned by Amazon, closed its API in 2020, and has barely changed in a decade. So [nextly.page](https://nextly.page) is the reading half of the same idea, built the same way.

<div class="breaker"></div>

It is zero-knowledge, like its sibling. Everything is encrypted in your browser before it is sent, the server holds ciphertext it cannot read, and there is no login: a random account number is the only key. It is in beta, so expect rough edges.

<div class="breaker"></div>

**What it does**

- The bookmark is the app. Open it, type the page you stopped at, close it. That is on the first screen rather than three taps in.
- Counts audiobooks in hours rather than pages, and remembers both lengths for the same book, so switching format mid-read carries your place across: forty per cent through the paperback is forty per cent into the recording.
- Brings your Goodreads library over. Open the CSV export and it reads every shelf, rating, review and finish date, works out which of them are audiobooks from your own shelf names, and tells you which books it could not place rather than guessing.
- Records every pass through a book, including the ones with no date attached, which is how most of an older Goodreads export arrives.
- Shows your year in reading: books, pages, and what you thought of them.
- Installs as a PWA and works offline.
- Exports to plain readable JSON at any time.

<div class="breaker"></div>

Book data comes from Open Library, fetched by your browser directly, so what you look up does not pass through my server. That was a deliberate choice: the app used Google Books first, and it turned out to be impossible to make it answer in English from a European address, no matter what the documentation says about the language parameter. One catalogue that works everywhere beat two that mostly do.

<div class="breaker"></div>

Same shape as the others underneath: a plain ES-module frontend with no framework and no build step, one Cloudflare Worker, D1 for the encrypted blobs, pure domain logic covered by tests, and AES-256-GCM with a key derived (PBKDF2) from the account number.

Free, no ads, no tracking.

<div class="breaker"></div>

Try it at [nextly.page](https://nextly.page). If you are coming from Goodreads, request your export [here](https://www.goodreads.com/review/import) first, then open the file in the app.
