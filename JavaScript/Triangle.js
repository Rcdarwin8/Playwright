const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classifyTriangle(a, b, c) {
    // Check if valid triangle
    if (a + b <= c || b + c <= a || a + c <= b) {
        return "Not a valid triangle";
    }

    // Check triangle type
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

rl.question("Enter side 1: ", (side1) => {
    rl.question("Enter side 2: ", (side2) => {
        rl.question("Enter side 3: ", (side3) => {
            const a = parseFloat(side1);
            const b = parseFloat(side2);
            const c = parseFloat(side3);

            const result = classifyTriangle(a, b, c);
            console.log(`Triangle Type: ${result}`);
            rl.close();
        });
    });
});