//Write a function to count the number of vowels in a string.

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiou';

    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('HELLO')); // Output: 2