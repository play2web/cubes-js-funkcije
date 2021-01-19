// TASK 1
// Create a function that should receive an array, and return an array in reverse order. Result should be stored in a variable
var dataOld = [34, true, 'Peter', 1992];
var dataNew = reverseArray(dataOld);

function reverseArray(array) {
    var reverseArray = [];
    for (var i = 0; i < array.length; i++) {
        reverseArray[i] = array[array.length - 1];
        reverseArray[i] = array[array.length - reverseArray.length];
    }
    return reverseArray;
}

console.log('This is old array ' + dataOld);
console.log('This is new array ' + dataNew);

// TASK 2
// Create a function that should receive parameter of any type, and console log the type of received data
function printValue(value) {
    console.log(value);
}

// TASK 3
// Create a function that should receive an array of at least five names, and return the length of the longest name in the array 
// (hint - you can get the length of an string the same way as for array). Result should be stored in a variable
var names = ['Michael', 'Peter', 'Jovan', 'Stefaan', 'Vladimir'];
var name = longestName(names);

function longestName(array) {
    var currentLongest = 0, longest;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > currentLongest) {
            currentLongest = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}

console.log('This is longest name ' + name);

// TASK 4
// Create a function that should receive an array of numbers, find the second lowest and second greatest number, and console log result
var numbers = [1, 2, 3, 4, 5, 1];
var preferedNumbers = secondLargestAndSecondSmallestNumber(numbers);

function secondSmallestNumber(array) {
    var smallest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

function secondBiggestNumber(array) {
    var max = 0, secondMax = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            secondMax = max;
            max = array[i];
        }
    }
    return secondMax;
}

function secondLargestAndSecondSmallestNumber(array) {
    var newArray = [];
    newArray[0] = secondBiggestNumber(array);
    newArray[1] = secondSmallestNumber(array);
    return newArray;
}

console.log('These are the numbers 111 ' + preferedNumbers);

// TASK 5
// Create two functions. First one should receive two parameters, an array of numbers, and a single number.
// Then it should call the second function, and pass the same array and number into it.
// The second function should, based on an array and number provided, find all numbers in an array 
// which are bigger then a provided number, and create an array of those numbers. Then it should console log result.

var numbers = [3, 2, 1, 5, 4, 6, 7, 100];
var biggerNumber = 4;
var preferedNumbers = findNumbersInArray(numbers, biggerNumber);

function findNumbersInArray(array, maxNumber) {
    return findNumbersInArrayThatAreBiggerThanProvidedNumber(array, maxNumber);
}

function findNumbersInArrayThatAreBiggerThanProvidedNumber(array, maxNumber) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

console.log('These are the numbers ' + preferedNumbers + ' that are bigger from ' + biggerNumber);

// TASK 6
// Create three functions. 
// First one should receive an array and return the lowest number in the array.
// Second one should receive an array and return the highest number if an array.
// Third function should receive first two functions, and should multiply the result of the first function with the result of the second function.
// Then it should console log the result.

var numbers = [3, 5, 4, 6, 7, 101];
var multiplyNumber = multiplyLowestAndSmallestNumber(numbers, biggestNumber, lowestNumber);

function lowestNumber(array) {
    var minvalue = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < minvalue) {
            minvalue = array[i];
        }
    }
    return minvalue;
}

function biggestNumber(array) {
    var maxValue = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}

function multiplyLowestAndSmallestNumber(array, biggestNumberFnc, lowestNumberFnc) {

    return biggestNumberFnc(array) * lowestNumberFnc(array);
}

console.log('This is the multiply number ' + multiplyNumber);

// TASK 7
// Create a function that should receive an array and the second function.
// Array should be:
// [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]
// After array is received you should find all numbers from array which are unique, and create a new array out of them.
// Then, the second function that is passed in the first one should be called, and it should receive this new array we created. 
// It should then delete the biggest number in the array, and console log the result (array).

var numbers = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];
var filteredArray = removeDuplicates(numbers, biggestNumberTask);

function removeDuplicates(array, removeBiggestNumber) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let exists = false;
        for (j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = array[i];
        }
    }
    return removeBiggestNumber(result);
}

function biggestNumberTask(array) {
    var maxValue = 0;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        (array[i] > maxValue) ? maxValue = array[i] : newArray[newArray.length] = array[i];
    }
    return newArray;
}

console.log('This is new array ' + filteredArray);
