import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
// import CacheHelper from './utils/cache-helper';

precacheAndRoute(self.__WB_MANIFEST);

// const assets = [
//   './',
//   './icons/favicon-16x16.png',
//   './icons/favicon-32x32.png',
//   './icons/favicon-64x64.png',
//   './icons/icon-48x48.png',
//   './icons/icon-72x72.png',
//   './icons/icon-96x96.png',
//   './icons/icon-128x128.png',
//   './icons/icon-144x144.png',
//   './icons/icon-152x152.png',
//   './icons/icon-192x192.png',
//   './icons/icon-256x256.png',
//   './icons/icon-384x384.png',
//   './icons/icon-512x512.png',
//   './images/hero/hero-image-large.jpg',
//   './images/hero/hero-image-medium.jpg',
//   './images/hero/hero-image-small.jpg',
//   './user/default.jpg',
//   './index.html',
//   './app.bundle.js',
//   './app.webmanifest',
//   './sw.bundle.js',
// ];

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});

// self.addEventListener('fetch', (event) => {
//   if (event.request.method === 'POST') {
//     event.respondWith(fetch(event.request));
//   } else {
//     event.respondWith(CacheHelper.revalidateCache(event.request.url));
//   }
// });
