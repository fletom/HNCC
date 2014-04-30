# HNCC

I love reading Hacker News comments, but they're kind of a pain to follow once you get a few levels deep in a given thread. This is worsened by the (unusually large) average comment length on HN, which makes even a single comment take up most of your screen.

So I took a few minutes to write this simple Safari extension that lets you collapse and expand comments à la reddit. Enjoy!

---
Side note: The Hacker News source HTML looks like it was designed specifically to infuriate hackers. Everything is levels upon levels of nested `<table>`s. Child comments are actually sibling elements with a progressively larger `<img>` spacer before them. A comment body is a  `<font>` element, but a reply link is a `<p>`. *Abandon all hope of sane markup, all ye who enter here.*