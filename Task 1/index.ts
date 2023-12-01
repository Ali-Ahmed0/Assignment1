// Scenario 1 - Modify Array with Methods
let initialArray : number[] = [1, 2, 3, 4, 5];

console.log("Original Array:", initialArray);

// push: Add new elements to the end of the array
initialArray.push(6, 7);
console.log("Array after push:", initialArray);

// pop: Remove the last element from the array
let poppedElement = initialArray.pop();
console.log("Array after pop:", initialArray);
console.log("Popped Element:", poppedElement);

// shift: Remove the first element from the array
let shiftedElement = initialArray.shift();
console.log("Array after shift:", initialArray);
console.log("Shifted Element:", shiftedElement);

// unshift: Add new elements to the beginning of the array
initialArray.unshift(-2, -1, 0);
console.log("Array after unshift:", initialArray);

// Scenario 2 - Subarray Creation
let originalArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nOriginal Array:", originalArray);

// splice: Create a subarray by removing elements from the original array
let removedElements = originalArray.splice(2, 3); // Removes elements starting at index 2, removes 3 elements
console.log("Array after splice:", originalArray);
console.log("Removed Elements:", removedElements);

// slice: Create a subarray without modifying the original array
let subArray = originalArray.slice(1, 4); // Creates a subarray from index 1 to 3 (not including 4)
console.log("Original Array after slice:", originalArray);
console.log("Subarray created with slice:", subArray);
