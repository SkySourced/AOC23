/* 
The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)

Here is an example engine schematic:

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..

In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?
*/

const fs = require('fs');

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let schematic = fs.readFileSync('./3/3-data.txt', 'utf-8').split("\n");

let symbolLocations = []

let sum = 0;

for(let i = 0; i < schematic.length; i++) {
    let line = schematic[i]
    line = line.substring(0, line.length - 1).split("");
    for(let j = 0; j < line.length; j++){
        if(!numbers.includes(line[j]) && line[j] != "."){
            symbolLocations.push({x: j, y: i});
        }
    }
    schematic[i] = line;
}

for(let i = 0; i< symbolLocations.length; i++) {
    let numbersAtSymbol = [];
    for(let x = -1; x <= 1; x++) {
        for(let y = -1; y <= 1; y++) {
            if(numbers.includes(schematic[symbolLocations[i].y + y][symbolLocations[i].x + x])){
                console.log(`bordering number ${schematic[symbolLocations[i].y + y][symbolLocations[i].x + x]} at ${symbolLocations[i].x + x}, ${symbolLocations[i].y + y}`);
                let number = [schematic[symbolLocations[i].y + y][symbolLocations[i].x + x]];
                if (symbolLocations[i].x + x != 0){
                    if(numbers.includes(schematic[symbolLocations[i].y + y][symbolLocations[i].x + x - 1])){
                        number.splice(0, 0, schematic[symbolLocations[i].y + y][symbolLocations[i].x + x - 1]);
                        if(numbers.includes(schematic[symbolLocations[i].y + y][symbolLocations[i].x + x - 2])){
                            number.splice(0, 0, schematic[symbolLocations[i].y + y][symbolLocations[i].x + x - 2]);
                        }
                    }
                }
                if (symbolLocations[i].x + x != schematic[0].length - 1){
                    if(numbers.includes(schematic[symbolLocations[i].y + y][symbolLocations[i].x + x + 1])){
                        number.push(schematic[symbolLocations[i].y + y][symbolLocations[i].x + x + 1]);
                        if(numbers.includes(schematic[symbolLocations[i].y + y][symbolLocations[i].x + x + 2])){
                            number.push(schematic[symbolLocations[i].y + y][symbolLocations[i].x + x + 2]);
                        }
                    }
                }
                numbersAtSymbol.push(number.join(""));
            }
        }
    }
    let uniqueNumbers = []
    numbersAtSymbol.forEach(number => {
        console.log(number);
        if (!uniqueNumbers.includes(number)){
            uniqueNumbers.push(number);
            sum += Number(number);
        }
    })
}

console.log(`SUM = ${sum}`);