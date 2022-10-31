const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v5");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/index.html",
      "/sw.js",
	  "/css/index.css",
	  "/favicon.ico",
	  "/site.webmanifest",
	  "/android-chrome-192x192.png",
	  "/android-chrome-512x512.png"
    ])
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event)
})
