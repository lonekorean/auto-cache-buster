auto-cache-buster
=================

Automatically generate cache-busting URLs when refreshing a page.

###Problem

I came up with this while working in an environment with very aggressive server-side caching based on the URL. After making any changes, I would have to tweak the query string before I could see them, otherwise I would be served an old cached response. This was very tedious.

###Solution

This script works by intercepting the `F5` and `CRL + R` key presses. It then updates the URL by adding the current timestamp to the query string, creating a unique URL that is not cached.

###Usage

You can add a reference to `autocachebuster.js` on your page or just copy and paste the code into your own JavaScript. That's pretty much it.
