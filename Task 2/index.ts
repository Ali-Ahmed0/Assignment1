// Scenario 1: Sum numbers
function add(a: number, b: number): number {
    return a + b;
}

// Scenario 2: Check Even or Odd
function checkEvenOrOdd(num: number): string {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

// Scenario 3: Calculate Area
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Scenario 4: String Reversal
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Example Usage:
console.log(add(2, 3)); // Output: 5
console.log(checkEvenOrOdd(7)); // Output: Odd
console.log(calculateArea(4, 5)); // Output: 20
console.log(reverseString("Hello")); // Output: olleH
console.log(convertCelsiusToFahrenheit(25)); // Output: 77
