var testObjPerson = {
    "name": "Boris",
    "age": 21,
    "city": "Sofia",
    "post code": 1000,
};

/*
Accessing the properties with using of dot operator
*/

var nameValue = testObjPerson.name
var ageValue = testObjPerson.age


/*
Accessing the property with using of [] operator thanks to the whitespace in the property name ("post code")
*/

var postCodeValue = testObjPerson["post code"]

console.log(postCodeValue)


function checkObj(checkProp) {
    if(testObjPerson.hasOwnProperty(checkProp)) {
        return testObjPerson[checkProp]
    } else {
        return "Not Found"
    }

};

console.log(checkObj("name"))
console.log(checkObj("citizenship"))