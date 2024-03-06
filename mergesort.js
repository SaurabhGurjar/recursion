const fs = require("node:fs");
// Assignment 2
/**
 * Build a function mergeSort that takes in an array and returns a sorted array, 
 * using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] 
 * should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should 
 * return [79, 100, 105, 110].
 */

/**
 * mergeSort(arr)
 * if arr has only 1 item
 * return;
 * else
 * mid = arr.length / 2
 * mergeSort(arrLeftHalf)
 * mergeSort(arrRightHalf) 
 * merge arrarys
 *
 */

function mergeSort(arr) {
    if(arr.length === 1) return arr;
    const leftHalf = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    const rightHalf = mergeSort(arr.slice(Math.floor(arr.length/2)), arr.length);
    let i = j = 0;
    const outArr = []

    // Merge arrays
    while(i < leftHalf.length && j < rightHalf.length) {
        if(leftHalf[i] < rightHalf[j]) {
            outArr.push(leftHalf[i]);
            i += 1;
        } else {
            outArr.push(rightHalf[j]);
            j += 1;
        }
    }

    // Merge remaining item of left half
    if(i < leftHalf.length) {
        outArr.push(...leftHalf.slice(i));
    }

    // Merge remaining item of right half
    if(j < rightHalf.length) {
        outArr.push(...rightHalf.slice(j));
    }

    return outArr;
}

// Random number array generator
function generateArray (length) {
    const array = [];
    const set = new Set();
    while(array.length < length) {
        const randomNumber = Math.floor(Math.random() * (2 * length) + 1);
        if(!set.has(randomNumber)) {
            set.add(randomNumber);
            array.push(randomNumber);
        }
    }
    return array;
};

// Save the unsorted and sorted array in unsorted.txt and sorted.txt respectively.
function writeArrayInFile () {
    const unsortedArr = generateArray(100);
    const sortedArr = mergeSort(unsortedArr);
    fs.writeFile(`${__dirname}/unsorted.txt`, unsortedArr.toString(), err => {
        if(err) {
            console.error(err);
        }
    });
    fs.writeFile(`${__dirname}/sorted.txt`, sortedArr.toString(), err => {
        if(err) {
            console.error(err);
        } else {
            console.log("file written successfully.");
        }
    });
}

writeArrayInFile();
