auto-cache-buster
=================

Automatically generate cache-busting URLs when refreshing a page.

###Problem

I came up with this snippet while working in an environment with very aggressive server-side caching. After making any changes, I would have to tweak the query string so that I could see them, instead of being served an old cached response. This was very tedious.

###Solution

This script works by intercepting the `F5` and `CRL + R` key presses. It then updates the URL with the current timestamp, creating a unique URL that is not cached.

###Usage

Just add a reference to `autocachebuster.js` on your page. Or copy and paste it into your own `.js` file. That's pretty much it.
