//Write a function to convert temperature from Celsius to Fahrenheit.

function convertTofahrenheit(celsius){
    return (celsius * 9/5) + 32;

}

console.log(convertTofahrenheit(30)); // 86
console.log(convertTofahrenheit(0)); // 32
console.log(convertTofahrenheit(-30)); // -22





function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        return 'Please provide a valid number';
    }

    else if (celsius < -273.15) {
        return 'Temperature cannot be below absolute zero (-273.15°C)';
    }

    else {
        const fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    }

   
}

console.log(celsiusToFahrenheit(25));      // Output: 77
console.log(celsiusToFahrenheit(-40));     // Output: -40
console.log(celsiusToFahrenheit('hot'));   // Output: Please provide a valid number
console.log(celsiusToFahrenheit(-300));    // Output: Temperature cannot be below absolute zero (-273.15°C)