// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

describe("when shufArr is called", () => {
    it("returns and array with the first item removed and the remaining contents shuffled", () => {

        var colors1 = ["purple", "blue", "green", "yellow", "pink"]
        
        const actualResult = shufArr(colors1)
        
        const arrExpected = ["yellow", "blue", "pink", "green"]

        expect(actualResult).toEqual(expect.arrayContaining(arrExpected))
        
    })
    it("returns and array with the first item removed and the remaining contents shuffled", () => {

        var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        
        const actualResult = shufArr(colors2)
        
        const arrExpected = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        expect(actualResult).toEqual(expect.arrayContaining(arrExpected))
        
    })
})

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // b) Create the function that makes the test pass.

//create a function that takes an array as an argument
const shufArr = (arr) => {
    //remove the first item from the array
    var arrShuf = arr.splice(1, arr.length)
    // return arrShuf
    let i = arrShuf.length, j, temp;
    for(i=0; i<arrShuf.length; i++) {
        j = Math.floor(Math.random() * (i+1));
        temp = arrShuf[j];
        arrShuf[j] = arrShuf[i];
        arrShuf[i] = temp;
    }
    return arrShuf
}

// console.log(shufArr(colors1))
// console.log(shufArr(colors2))



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

describe("when numsCubed is called", () => {
    it ("returns an the sum of all the numbers cubed", () => {
        
        var cubeAndSum1 = [2, 3, 4]
        // Expected output: 99
        var cubeAndSum2 = [0, 5, 10]
        // Expected output: 1125

        expect(numsCubed(cubeAndSum1)).toEqual(99)
        expect(numsCubed(cubeAndSum2)).toEqual(1125)
    })
})

// b) Create the function that makes the test pass.

var cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
var cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

const numsCubed = (arr) => {
    let sumNums = 0;
    for (var i=0; i<arr.length; i++) {
        sumNums += arr[i] ** 3 
    }
    return sumNums
}
// console.log(numsCubed(cubeAndSum1))
// console.log(numsCubed(cubeAndSum2))



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("when arrMinMax is called", () => {
    it ("returns an array of the minimum and maximum numbers in that order", () => {
        
        var nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        var nums2 = [109, 5, 9, -59, 8, 24]
        // Expected output: [-59, 109]
       

        expect(arrMinMax(nums1)).toEqual([-8, 90])
        expect(arrMinMax(nums2)).toEqual([-59, 109])
    })
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
        // Expected output: [-59, 109]



// b) Create the function that makes the test pass.

//write a function called arrMinMax that takes an array as an argument
const arrMinMax = (arr) => {
    //create a var to store the new array
    var newArr = []
    //create a var to store the min and max values
    //get the min and max values by using Math.min and max methods, the spread operator allows you to acccess each value in the array without splitting the array up
    var minNum = Math.min(...arr);
    var maxNum = Math.max(...arr);
    //push the min and max values into the new array
    newArr.push(minNum)
    newArr.push(maxNum)
    //return the new array
    return newArr
}
// console.log to check function
// console.log(arrMinMax(nums1))
// console.log(arrMinMax(nums2))



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("when everyOtherCap is called", () => {
    it ("returns a string with every other letter capitalized", () => {
        
        var testString1 = "albatross"
        // Expected output: "aLbAtRoSs"
        var testString2 = "jabberwocky"
        // Expected output: "jAbBeRwOcKy"
       

        expect(everyOtherCap(testString1)).toEqual("aLbAtRoSs")
        expect(everyOtherCap(testString2)).toEqual("jAbBeRwOcKy")
    })
})

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


// b) Create the function that makes the test pass.

//write a function called everyOtherCap that takes a string as an argument
const everyOtherCap = (str) => {
    //write a for loop that starts at the index of 1 and loops through every other element
    for (i=1; i < str.length; i+=2) {
        //let str equal a new string using a substring starting at index of 0 with length of i + value at given index toUpperCase + substring of given index + 1
        str = str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1);
    }
    //return str
    return str;
}
// console.log(everyOtherCap(testString1))
// console.log(everyOtherCap(testString2))






// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("when arrNoDups is called", () => {
    it ("returns one array with no duplicate values", () => {
        
        var testArray1 = [3, 7, 10, 5, 4, 3, 3]
        var testArray2 = [7, 8, 2, 3, 1, 5, 4]
       

        expect(arrNoDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// created 3rd array for test argument
// var testArray3 = [3, 5, 9, 7, 13, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

//write a function called arrNoDups that takes two arrays as arguements
//using the spread operator in front of the argument of arr allows you to pass as many arguments as you want
const arrNoDups = (...arr) => {
    ///This return statement utilizies Set object, which stores a collection of values in this case it creates a new array by concatinting the two arrays passed into the function. Each value in Set must be unique and the value equality will be checked for duplicates. The return will be a new array with no duplicate numbers.
    return [...new Set([].concat(...arr))];
} 
// console.log(arrNoDups(testArray1, testArray2))
// // refactored to test 3 arrays as input
// console.log(arrNoDups(testArray1, testArray2, testArray3))