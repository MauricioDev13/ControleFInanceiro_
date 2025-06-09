self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open("financeISK-cache").then((cache) => {
            return cache.addAll([

                "./",
                "./app.js",
                "./index.html",
                "./style.css",
                "./manifest.json",
                "https://cdn.jsdelivr.net/npm/pouchdb@7.2.2/dist/pouchdb.min.js"
            ])
        }
    
    )

    )


})