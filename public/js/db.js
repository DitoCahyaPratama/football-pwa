window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
    window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
    window.msIDBKeyRange

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

const favoriteData = [];
var db;
var request = window.indexedDB.open("footballDB", 1);

request.onerror = function(event) {
    console.log("error: ");
};

request.onsuccess = function(event) {
    db = request.result;
    // console.log("success: " + db);
};

request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("favorite", { keyPath: "id" });

    for (var i in favoriteData) {
        objectStore.add(favoriteData[i]);
    }
}

function addFav(idFav) {
    var request = db.transaction(["favorite"], "readwrite")
        .objectStore("favorite")
        .add({ id: idFav });

    request.onsuccess = function(event) {
        alert("Data successfully added");
    };

    request.onerror = function(event) {
        alert("data is favorite");
    }
}

function removeFav(idFav) {
    var confirms = confirm("Are you sure to delete this data ?");
    if (confirms) {
        var request = db.transaction(["favorite"], "readwrite")
            .objectStore("favorite")
            .delete(idFav);

        request.onsuccess = function(event) {
            alert("Data deleted");
            window.location.reload(false);
        };
    }
}