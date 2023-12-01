/* Day 1 Problem 2
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
Equipped with this  information, you now need to find the real first and last digit on each line. For example:
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.
What is the sum of all of the calibration values?
*/

const fs = require('fs');

const lines = fs.readFileSync("./1/1-1calibration.txt", "utf-8").split("\n");

let calibrationTotal = 0;

lines.forEach(line => {
    
    var line = line.replaceAll("one", "1");
    line = line.replaceAll("two", "2");
    line = line.replaceAll("three", "3");
    line = line.replaceAll("four", "4");
    line = line.replaceAll("five", "5");
    line = line.replaceAll("six", "6");
    line = line.replaceAll("seven", "7");
    line = line.replaceAll("eight", "8");
    line = line.replaceAll("nine", "9");
    
    console.log(line);

    let calibrationValue = 0;

    const chars = line.split("");

    for (let i = 0; i < chars.length; i++){
        if (chars[i] >= '0' && chars[i] <= '9') {
            calibrationValue += Number(chars[i]) * 10;
            break;
        }
    }
    const charsReversed = chars.reverse();
    for (let i = 0; i < charsReversed.length; i++){
        if (charsReversed[i] >= '0' && charsReversed[i] <= '9') {
            calibrationValue += Number(charsReversed[i]);
            break;
        }
    }

    console.log(calibrationValue);
    calibrationTotal += calibrationValue
})

console.log(calibrationTotal);