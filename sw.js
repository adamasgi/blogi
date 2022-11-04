const addResourcesToCache = async (resources, cacheName) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

const staticResources = [
  	  "/favicon.ico",
	  "/images/android-chrome-192x192.png",
	  "/images/android-chrome-512x512.png",
	  "/fonts/Inter-VariableFont_slnt,wght.ttf",
	  "/fonts/ShareTechMono-Regular.ttf"
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/index.html",
      "/sw.js",
	  "/css/index.css",
	  "/site.webmanifest",
    ],"v9")
  );
  event.waitUntil(
    addResourcesToCache(staticResources, "static")
  );
  console.log("Hi there")
});

function inStatics(item, staticResources) {
  for (const s of staticResources) {
	if (item.includes(s)) {
	  return true;
	}}
  return false;
}

self.addEventListener('fetch', function(event) {
  if (inStatics(event.request.url, staticResources)) {
	event.respondWith(caches.match(event.request));
	console.log(event.request.url, "url cached");
  } else {
	console.log(event.request.url, "url not matched");
  }
})
