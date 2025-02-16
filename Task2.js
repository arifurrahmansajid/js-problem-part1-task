//You are given an array of numbers. Count how many times the a number is repeated in the array. 

//sample-input: 
//numbers = [5,6,11,12,98, 5]

//find: 5

//output: 2

//<br/>

//sample-input: 

//numbers = [5,6,11,12,98, 5]

//find: 25

//output: 0


function countRepeatedNumbers(numbers, find) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find) {
            count++;
        }
    }
    return count;
}

console.log(countRepeatedNumbers([5, 6, 11, 12, 98, 5], 5)); // Output: 2
console.log(countRepeatedNumbers([5, 6, 11, 12, 98, 5], 25)); // Output: 0


//OR

function countNumberOccurrence(numbers, find) {
    let count = 0;
    
    for (let number of numbers) {
        if (number === find) {
            count++;
        }
    }
    
    return count;
}

console.log(countNumberOccurrence([5, 6, 11, 12, 98, 5], 5)); // Output: 2
console.log(countNumberOccurrence([5, 6, 11, 12, 98, 5], 25)); // Output: 0


