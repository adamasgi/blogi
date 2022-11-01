const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v7");
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
	  "/images/android-chrome-192x192.png",
	  "/images/android-chrome-512x512.png",
	  "/fonts/Inter-VariableFont_slnt,wght.ttf",
	  "/fonts/ShareTechMono-Regular.ttf"
    ])
  );
});

self.addEventListener('fetch', function(event) {
  console.log("fetch for :", event.request.url)
})
