var contacts = [
    {
        "name" : "Bobby",
        "surname": "Ranchev",
        "tel. num": "0878775211",
        "likes": ["Football", "Pizza", "Cars"],
    },
    {
        "name" : "Debora",
        "surname": "Dyankova",
        "tel. num": "0878194409",
        "likes": ["Communism", "Russia"],
    },
    {
        "name" : "Gita",
        "surname": "Rancheva",
        "tel. num": "0878771122",
        "likes": ["Cigarets", "TV"],
    },
]; 

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].name === name) {
            return contacts[i][prop] || "Prop. not found"
        }
    }
    return "Not found such a contact"
}

console.log(lookUpProfile("Gita", "surname"))