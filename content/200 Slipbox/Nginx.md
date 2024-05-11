---
date: 2023-12-11
aliases: 
tags: 
title: Nginx
publish: true
related:
  - "[[Web Development|Web Development]]"
  - "[[Web Server|Web Server]]"
---

## Removing the Need for `.html` in urls 
[Source](https://stackoverflow.com/questions/38228393/nginx-remove-html-extension)

```xml
location / {
    if ($request_uri ~ ^/(.*)\.html(\?|$)) {
        return 302 /$1;
    }
    try_files $uri $uri.html $uri/ =404;
}
```

I needed this to host my Obsidian Vault with Quartz


