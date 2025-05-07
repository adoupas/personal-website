# Security Considerations for Personal Website

This document outlines security best practices and considerations for hosting this personal website.

## Security Headers

GitHub Pages does not support custom HTTP headers, which limits our ability to implement certain security features. The following security headers are recommended for a more secure website:

### Content Security Policy (CSP)
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https://via.placeholder.com data:;
```

### HTTP Strict Transport Security (HSTS)
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```

### X-Frame-Options
```
X-Frame-Options: DENY
```

### Cross-Origin-Opener-Policy
```
Cross-Origin-Opener-Policy: same-origin
```

### Referrer Policy
```
Referrer-Policy: no-referrer-when-downgrade
```

### Permissions Policy
```
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Current Implementation

Currently, we've implemented these security features using HTML meta tags, which provide some protection but are not as effective as HTTP headers. This approach was chosen for compatibility with GitHub Pages, which doesn't support custom HTTP headers.

## Alternative Hosting Options

For full security header support, consider one of these hosting platforms:

1. **Netlify** - Supports custom headers via `_headers` file or `netlify.toml`
2. **Vercel** - Supports custom headers via `vercel.json`
3. **Cloudflare Pages** - Supports custom headers via `_headers` file
4. **Azure Static Web Apps** - Supports custom headers via configuration

## Implementation with Server-Side Rendering (SSR)

If you decide to use SSR in the future, you can implement middleware as follows:

```javascript
// src/middleware.js
export function onRequest({ request, response }) {
  // Add security headers
  response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https://via.placeholder.com data:;");
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return response;
}
```

And update your Astro configuration:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
```

## Security Contact

If you discover any security vulnerabilities or have concerns regarding the security of this project, please contact me immediately at:

**Email**: adoupas@doupas.com

When reporting a vulnerability, please include a detailed description of the issue, steps to reproduce it (if applicable), and any potential impact. I will respond as promptly as possible and work towards resolving the issue.
