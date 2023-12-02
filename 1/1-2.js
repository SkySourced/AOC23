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
    console.log(line);

    let calibrationValue = 0;

    line = line.replaceAll("one", "o1e");
    line = line.replaceAll("two", "t2o");
    line = line.replaceAll("three", "thr3e");
    line = line.replaceAll("four", "fo4r");
    line = line.replaceAll("five", "fi5e");
    line = line.replaceAll("six", "s6x");
    line = line.replaceAll("seven", "se7en");
    line = line.replaceAll("eight", "eig8t");
    line = line.replaceAll("nine", "n9ne");

    chars = line.split("");

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