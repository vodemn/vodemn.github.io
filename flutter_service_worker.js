'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "723499ff3c3a7a8b30f8c8143213714b",
"assets/assets/background.png": "6ae4af424bad9c6241b288013825853e",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/my_photo.png": "6b04c833b6f32c6417ebdda2b10effb4",
"assets/assets/photos/2019-01-18_09-52-20_UTC.jpg": "e89a4c8d5d7cce65cc06179a69cfae37",
"assets/assets/photos/2019-02-19_07-36-57_UTC.jpg": "8c23d62a3f461c3c05d1fe0d002a2705",
"assets/assets/photos/2019-02-22_20-15-26_UTC_1.jpg": "760247f7a26ac6853c4ee5ff4d16884e",
"assets/assets/photos/2019-09-11_21-25-29_UTC_1.jpg": "5465b185800a39dc12de8e3f6ef8702f",
"assets/assets/photos/2020-01-19_12-19-30_UTC.jpg": "0f3b2d6822ce255b97224d8f3ee8472d",
"assets/assets/photos/2020-02-05_22-57-17_UTC.jpg": "3c6c676f9144cbb53d0b158f912a0db8",
"assets/assets/photos/2020-03-16_21-45-40_UTC_1.jpg": "d51678ed52cf80c46a54e313efbef27b",
"assets/assets/photos/2020-04-23_16-35-31_UTC_1.jpg": "c71d5bdf57ad4418e2d97b810161d216",
"assets/assets/photos/2020-06-02_21-25-18_UTC.jpg": "d87ecdb545abb2eed0fca8f9f52369d4",
"assets/assets/screenshots/lightmeter/1-dark.png": "749c1c4e1d779e00761c44b396ce5048",
"assets/assets/screenshots/lightmeter/1-light.png": "f8e951bb4bf8aeb2990b1fe861b37e10",
"assets/assets/screenshots/lightmeter/2-dark.png": "ee5a93c630046a370030323309f86a3e",
"assets/assets/screenshots/lightmeter/2-light.png": "1bc083916a43110351548d37b5ba25b6",
"assets/assets/screenshots/lightmeter/cropped/1-dark.png": "31e55053cb1d18853b7e3a27966de158",
"assets/assets/screenshots/lightmeter/cropped/1-light.png": "c374a180b0b920f74345fce62cdc62e5",
"assets/assets/screenshots/lightmeter/cropped/2-dark.png": "05a5bd0afd49cef64e01abdb8867f443",
"assets/assets/screenshots/lightmeter/cropped/2-light.png": "7551f65476fabda1b1aa2cd4c22f31af",
"assets/assets/screenshots/snake/1-dark.png": "5c54a82f298153393e2136237b4afecc",
"assets/assets/screenshots/snake/1-light.png": "b7010628d46c40b881bdfc4edac181ab",
"assets/assets/screenshots/snake/2-dark.png": "b193f036d28e6b00dec1e252598a0026",
"assets/assets/screenshots/snake/2-light.png": "8b50528b00052f19e10bda26656517ae",
"assets/assets/screenshots/snake/cropped/1-dark.png": "2123ea7b22c199aabe541446d1946332",
"assets/assets/screenshots/snake/cropped/1-light.png": "f6c0850c510dbba52e818ebd726ec195",
"assets/assets/screenshots/snake/cropped/2-dark.png": "759bd5eb0f47103ede4b7f6eb0128e12",
"assets/assets/screenshots/snake/cropped/2-light.png": "6af48691f24193d0f4dea221333095b0",
"assets/FontManifest.json": "7803f6470e6f6bbc91166f860b8fd198",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4282d1abf5c269b83aad8ab74d06091e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "99a45e26e6faf311581b24ae103530b9",
"google2ca50de10964b4ff.html": "a31a5b073d2f7d57519ee5ce5d66d08a",
"icons/Icon-192.png": "137cbd5e6cfe78de88cfe0f3c8389960",
"icons/Icon-512.png": "d6d60c17f6d69ebd896e9765f7ec49a2",
"index.html": "18c0d240d9a818b2816bf3b1d8e127f8",
"/": "18c0d240d9a818b2816bf3b1d8e127f8",
"main.dart.js": "d555878df2cf5873eb5aeac8d3f004dd",
"manifest.json": "8400e909806513d2fbeff32e06a949b3",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
