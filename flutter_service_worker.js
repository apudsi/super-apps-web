'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5df8a6042d176aae877408478790257d",
"version.json": "555a1c300ecc0f2dceddc15e935e0f24",
"index.html": "2dae2e14f3f9b051b49cee538f76b921",
"/": "2dae2e14f3f9b051b49cee538f76b921",
"main.dart.js": "9c6a170c120bf0c279632afb35b56d59",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c20e4e53aa222e3f4c8ec1ecd5c1b717",
"assets/AssetManifest.json": "d48014e39d56c6390543bf262bd52b17",
"assets/NOTICES": "8c8bf01b748d95ebcf58f76d2f420238",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "99c3a017ccba8512980a7044551b1bee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_osm_web/src/asset/map.html": "1d48021f2a0455466f86649b4e828a69",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/flutter_osm_web/src/asset/map.js": "9ca74acd5f94ced7366fa719168d7b51",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b745c7ac8533e03310edb544de03a749",
"assets/fonts/MaterialIcons-Regular.otf": "aa8f7ab07b1f56a812040ece0e5015cc",
"assets/assets/svg/svg_profiles.svg": "3ec3499be4548ae30b34dcf0b65b8cff",
"assets/assets/svg/svg_arrow.svg": "30c8390ff7c5f8ebd411f639a342024b",
"assets/assets/svg/svg_notifikasi.svg": "ce1b6f33447003e3682ec16454725f41",
"assets/assets/svg/svg_pesanan.svg": "03d800a352b0774d65c38966b6180005",
"assets/assets/svg/svg_arrow_down.svg": "e33cf2945c3ca0c004338232390e1563",
"assets/assets/svg/svg_list_menu.svg": "1fb0f8978f33003d417a65558c729329",
"assets/assets/svg/ic_dialog_success.svg": "680049931269dded72179756476646d6",
"assets/assets/svg/svg_home.svg": "508cb8292a116b914638d77e3fd08ede",
"assets/assets/svg/svg_shop.svg": "930f242c4029d84684c8db4b29c9946a",
"assets/assets/svg/svg_personal_card.svg": "b78a012d8ed88561d14bdb1e6f7aab29",
"assets/assets/svg/ic_dialog_cross.svg": "85597ea9bc9d29c3c451cd11509c15d7",
"assets/assets/svg/svg_card.svg": "8e4a4204a45d6e24b8fcdf5f1086b316",
"assets/assets/svg/ic_dialog_question.svg": "1a4c52256feb60b42518c94fa7d8f2c7",
"assets/assets/svg/svg_key.svg": "99468577fa65128f6a705501194a6380",
"assets/assets/svg/svg_produk.svg": "4f941a0ba28dfac5ee2450b8c8d145df",
"assets/assets/svg/svg_message.svg": "96a4389c4df2707aade877eff1e50081",
"assets/assets/svg/svg_apudsi.svg": "63eebde1431ad91e20d2e0e673ba075a",
"assets/assets/svg/svg_profile.svg": "0da4a0fcc23fd37bb1d0486244ff2fcc",
"assets/assets/svg/svg_arrow_up.svg": "c321bbb4a81f3a3aed3be43cba107af6",
"assets/assets/image/background_onboarding.jpg": "5d6a8007a74ff4e360aadec2e3a2ec5e",
"assets/assets/image/img_apps.png": "facb62c903923d44beed8577bfac0caf",
"assets/assets/image/img_apps_white.png": "de5cfd2165c2e6ded5f80863208866cc",
"assets/assets/image/img_background_profile.png": "176991819f9369ada1fe420f8e1f8f0b",
"assets/assets/icon/ic_bri.png": "813068cb339bd73ff8f17aa3196fcc9d",
"assets/assets/icon/ic_sertifikasi.png": "a7366e5bad40eeb2cdcf847c58953d34",
"assets/assets/icon/ic_location.png": "657d9adc0fe66b23b47ceb3b15568b1d",
"assets/assets/icon/ic_agen.png": "00e50edfb6b076483c33a3dd2a9aa3f2",
"assets/assets/icon/ic_link.png": "f922f4b95647095b3a71650b91b0cfa8",
"assets/assets/icon/ic_layanan.png": "699408f19eafd148320313ffb8949d15",
"assets/assets/icon/ic_cooming_soon.png": "792b4a53f9d1506444308318200ec8ce",
"assets/assets/icon/ic_share_content.png": "17bba5d232cee4246e73217fe6e714c7",
"assets/assets/icon/ic_copy.png": "8daabeb1d38d1a936077b3ed8334dbcf",
"assets/assets/icon/ic_apudsi.png": "2f868e6aa99119625429a94d8501021f",
"assets/assets/icon/ic_gallery.png": "45f9aa286249fe09ef2548ec364c2a44",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
