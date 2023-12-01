/* Day 1 Problem 1
The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. 
On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
For example:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
Consider your entire calibration document. What is the sum of all of the calibration values?
 */

const fs = require('fs');

const lines = fs.readFileSync("./1/1-1calibration.txt", "utf-8").split("\n");

let calibrationTotal = 0;

lines.forEach(line => {
    let calibrationValue = 0;
    const chars = line.split("");
    for (let i = 0; i < chars.length; i++){
        if (chars[i] >= '0' && chars[i] <= '9') {
            console.log(chars[i]);
            calibrationValue += Number(chars[i]) * 10;
            break;
        }
    }
    const charsReversed = chars.reverse();
    for (let i = 0; i < charsReversed.length; i++){
        if (charsReversed[i] >= '0' && charsReversed[i] <= '9') {
            console.log(Number(charsReversed[i]));
            calibrationValue += Number(charsReversed[i]);
            break;
        }
    }
    console.log(calibrationTotal);
    calibrationTotal += calibrationValue;
})

console.log(calibrationTotal);