var myArray = [];
var i = 10

while (i < 5){
    myArray.push(i);
    i++;
}

console.log(myArray)

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(myArray)
console.log(i)

/*
The Do while loop will do at least one itteration 
even if the conditional statment returns False!!!!
*/