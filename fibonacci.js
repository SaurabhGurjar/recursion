// Assignment 1
/** Q1 :- Using iteration, write a function fibs which takes a number 
 * and returns an array containing that many numbers from the Fibonacci sequence. 
 * Using an example input of 8, this function should r
 * eturn the array [0, 1, 1, 2, 3, 5, 8, 13].
 * */ 
function fibs (num) {
    const fibNums = [];
    for (let i = 0; i < num; i++) {
        if (fibNums.length < 2) {
            fibNums.push(i);
        } else {
            const fnum = fibNums[i - 1] + fibNums[i - 2];
            fibNums.push(fnum);
        }
    }
    return fibNums;
}
console.log("fibs:", fibs(8));

// Q2 :- Now write another function fibsRec which solves the same problem recursively.
function fibsRec(num) {
    if(num <= 0) return [];
    if(num === 1) return [0];
    if(num === 2) return [0, 1]
    const prevNums = fibsRec(num - 1);
    const crtNum = prevNums[prevNums.length - 1] + prevNums[prevNums.length - 2]
    prevNums.push(crtNum);
    return prevNums;
}
console.log("fibsRec:", fibsRec(0));
