const fs = require('fs');

const input = fs.readFileSync("./2/2-data.txt", "utf-8").split("\n");

let totalPowerSum = 0;

for (let i = 0; i < input.length; i++){
    line = input[i].split(": ")[1].split("; ");
    console.log(line);
    let minBlue = 0;
    let minRed = 0;
    let minGreen = 0;
    for (let j = 0; j < line.length; j++){
        let pulls = line[j].split(", ");
        for (let k = 0; k < pulls.length; k++){
            console.log(pulls[k])
            let marbleNumber = pulls[k].split(" ")[0];
            let colour = pulls[k].split(" ")[1];
            if (colour == "red") {
                console.log(`${marbleNumber} Changing red from ${minRed}`)
                minRed = Number(marbleNumber) > minRed ? marbleNumber : minRed;
                console.log(`To ${minRed}`);
            }
            if (colour == "blue") {
                console.log(`Changing blue from ${minBlue}`)
                minBlue = Number(marbleNumber) > minBlue ? marbleNumber : minBlue;
                console.log(`To ${minBlue}`);
            }
            if (colour == "green") {
                console.log(`Changing green from ${minGreen}`)
                minGreen = Number(marbleNumber) > minGreen ? marbleNumber : minGreen;
                console.log(`To ${minGreen}`);
            }
        }
    }
    console.log(`BLUE ${minBlue} - RED ${minRed} - GREEN ${minGreen}`)
    let power = minBlue * minRed * minGreen;
    console.log(power);
    totalPowerSum += power;
}

console.log(totalPowerSum)