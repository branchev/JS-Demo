var myArray = [];   

for (var i = 0; i < 5; i++){ //first is declaring of var, seccond - condition, last - action
    myArray.push(i);
}

console.log(myArray)

var myNewArray = [1, 2, 3, 4, 5, 6,];

for (var i = 0; i < myNewArray.length; i++){
    console.log(myNewArray[i])
}

var myNestedArray = [
    [11, 22],
    [33, 44],
    [55, 66],
];

for (var i = 0; i < myNestedArray.length; i++){
    for (var j = 0; j < myNestedArray[i].length; j++){
        console.log(myNestedArray[i][j])
    }
}