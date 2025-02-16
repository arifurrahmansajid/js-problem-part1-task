//Write a function to find the longest word in a given string.

//sample-input: 
//I am learning Programming to become a programmer

//sample-output: Programming




//sample-input:
//I am learning Programming to become a programmer




//sample-output: Programming    

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord('I am learning Programming to become a programmer')); // Output: Programming
console.log(findLongestWord('I am learning JavaScript')); // Output: JavaScript



function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Initialize variables to track longest word and its length
    let longestWord = '';
    let maxLength = 0;
    
    // Loop through each word
    for (let word of words) {
        // Remove any punctuation if needed
        const cleanWord = word.replace(/[.,!?]/g, '');
        
        if (cleanWord.length > maxLength) {
            maxLength = cleanWord.length;
            longestWord = cleanWord;
        }
    }
    
    return longestWord;
}

console.log(findLongestWord('I am learning Programming to become a programmer')); // Output: Programming

