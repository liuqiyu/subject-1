"use strict";var precacheConfig=[["./index.html","3bc43b3f652d85ede9525df8f7cc1b21"],["./static/css/main.900e05f4.css","78759512ad46841c9997a0d7b95027e4"],["./static/js/0.81a06922.chunk.js","4b29cc834711bf0f8c76e90f91f04cd6"],["./static/js/1.55ac10bc.chunk.js","5b00d2754e3c165dbca807fb678482a7"],["./static/js/10.18aa3a0e.chunk.js","8db27561dc17212b95fade135187eb50"],["./static/js/11.a5e97faa.chunk.js","f8d2ba5a4fb75767a7345abe23de5981"],["./static/js/12.eef22a99.chunk.js","fc6522df2ca309b21b628be51b7a0a9c"],["./static/js/13.be57e522.chunk.js","e418ec334e9313d551334c45433a15e7"],["./static/js/2.b9ac20dc.chunk.js","5d3ad1a19aa928bf85b1ae84b203a0c0"],["./static/js/3.84a8b53a.chunk.js","a6e557b5e7b4c76f9135ab2b80f42f75"],["./static/js/4.ed0acd04.chunk.js","010878582e300f9c59e0df342582259e"],["./static/js/5.63cf0aaa.chunk.js","a6cfd0d3a71d0603951baf71437c1010"],["./static/js/6.1ce0c525.chunk.js","c5c2a664451019ba434e4b063a2375a3"],["./static/js/7.195d0d40.chunk.js","b8d9b679431d03da11108209e9822e07"],["./static/js/8.44f17f0a.chunk.js","8bd3ecec36da515602d2cbf7b4a578e7"],["./static/js/9.1ca080a5.chunk.js","d329bfaa784ee8ab25d70671016caa96"],["./static/js/main.4002ea98.js","e87eb2f74c767f21ed0f38a9d797da86"],["./static/media/bg.16902664.jpg","169026647c89470879897095ff9e33c3"],["./static/media/iconfont.7142abef.eot","7142abef3d5993dbff83e944e5e79772"],["./static/media/iconfont.8eaf83fb.ttf","8eaf83fb3bb1760dc9d82806f85f6753"],["./static/media/iconfont.cc6dacdf.svg","cc6dacdf6f71db9241a7a348ced696b8"],["./static/media/img.7637cd2c.jpg","7637cd2c4f26682013ee87184bf80910"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});