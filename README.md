SystemJS script tag loading plugin
===

Install
---

```
jspm install npm:system-script
```

Basic Use
---

```javascript
import 'www.google-analytics.com/analytics.js!system-script'
```

The example above loads google analytics via a script tag instead of a XHR request which avoid CORS issues.

SystemJS 0.17+
---
Note that as of SystemJS 0.17 the functionality in this plugin can be achieved via the following config:

```javascript
System.config({
  ...
  meta: {
    "ga": {
      "scriptLoad": true,
      "format": "global",
      "exports": "ga"
    }
  },
  map: {
    "ga": "//www.google-analytics.com/analytics.js"
  }
});

```

### License

MIT
