var collections = {
"1234": {
    "artist" : "Preslava",
    "tracks": [
        "vodka s uteha",
        "nqkakva druga"
    ]
    },
"1235": {
    "artist": "Milko Kalayjiev",
    "tracks":[
        "Ya elate pilenca pri batko"
    ]
    },
"1236": {
    "artist": "Kondyo",
    "album": "Ataka mix"
    },
};

//keeping a copy of the original collection
var collectionsCopy = JSON.parse(JSON.stringify(collections))

function updateCollections(id, prop, value) {
    if (value === "") {
        delete collections[id][prop];
    } else if (prop === "tracks"){
        collections[id][prop] = collections[id][prop] || [];
        //If the property does not exist, it will create it with a empty array
        collections[id][prop].push(value)
    } else {
        collections[id][prop] = value;
    }
    return collections;
}


updateCollections(1236, "tracks", "Doko Doko");
console.log(collections[1236]["tracks"]);