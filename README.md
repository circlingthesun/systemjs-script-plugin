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

### License

MIT
