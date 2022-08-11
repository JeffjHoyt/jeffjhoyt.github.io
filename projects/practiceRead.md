--------------How to insert an element in the array in a given position and asked to write the code?--------------
array.splice(“position number”, "element to delete OR 0 to not delete", “what to insert into the array” );

--------------Find second minimum element in an array --------------
const numbers = [1, 10, 3, 5, 4, 6, 2, 8, 9, 7];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

--------------Find the maximum value in an array--------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addNumbers(numbers) {
    let sum = 0;
    for (let i =0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(addNumbers(numbers));


--------------Find maximum sum subarray for a given array--------------
const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];    

function largestSubarraySum(numbers) {
    let largestSum = 0;
    let currentSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
        currentSum += numbers[i][j];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        }
        currentSum = 0;
    }
    return maxSum;
    }

    console.log(largestSubarraySum(numbers));
