---
title: "nestegg.money: private net worth & salary tracker"
date: 2026-06-20 12:00
tag:
- web
- open source
- finance
image: /projects/icon_nestegg.png
headerImage: true
hidden: true
description: "A free, open-source, zero-knowledge net worth and salary tracker. Encrypted on your device, no login, installable as a PWA."
author: vladimirjovanovic
externalLink: false
---

<p style="text-align: center">
	<img class="image" src="/projects/nestegg_og.png" alt="nestegg.money" style="width:90%">
</p>

I tracked my net worth and salary history in a spreadsheet for years. It worked, but it never did quite what I wanted, so I built [nestegg.money](https://nestegg.money) to do it properly.

<div class="breaker"></div>

It is zero-knowledge. Everything is encrypted in your browser before it is sent, and the server only ever stores ciphertext it cannot read. There is no login: the app generates a random account number, and that number is the only key to your data. If you would rather not trust me with it at all, the whole thing is open source and deploys to a free Cloudflare Worker, so you can run your own copy.

<div class="breaker"></div>

**What it does**

- Tracks net worth and salary over time, with per-year breakdowns and allocation.
- Pulls stock and crypto prices automatically and converts between currencies. For past years it values holdings at that year's year-end price instead of today's.
- Calculates mortgage repayment, including extra and lump-sum payments, plus other loans and assets you can group however you like.
- Projects retirement and future returns (early days, still improving).
- Installs as a PWA, so it opens in its own window and works offline.
- Exports to JSON anytime, so you can keep your own copy.

<div class="breaker"></div>

On the technical side it is deliberately lightweight: a plain ES-module frontend with no framework, a single Cloudflare Worker for the API, and D1 for the encrypted blobs. The domain logic is pure and covered by tests. Encryption is AES-256-GCM with a key derived (PBKDF2) from the account number, which never leaves the device.

It is free, has no tracking, and is licensed under Apache 2.0.

<div class="breaker"></div>

Try it at [nestegg.money](https://nestegg.money), or read the source [on GitHub](https://github.com/VladimirWrites/nestegg.money). Feature ideas and contributions are welcome, just [open an issue](https://github.com/VladimirWrites/nestegg.money/issues).
