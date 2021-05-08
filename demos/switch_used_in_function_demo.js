function switchOfStuff(val){
    var answer = ""
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "d":
            answer = "dog";
            break;
        default:
            answer = "dog";
            break;
    }
    return answer;
}

console.log(switchOfStuff("a"))
console.log(switchOfStuff(123))


function sequentialSizes(val){
    var answer = ""
    switch(val){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            answer = "Low";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            answer = "High";
            break;
        default:
            answer = "Low";
    }
    return answer;
}

console.log(sequentialSizes(3))