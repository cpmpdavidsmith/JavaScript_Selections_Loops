console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}




// Exercise 2 Section

for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
} 
console.log("EXERCISE 2:\n==========\n");
//EXERCISE 3 
//WHILE (EXSC 1)
let z = 1;

while (z <100) {
    if (z %2 !==0) {
        console.log(z);
    }

    z++;
}

//DO/WHILE (EXSC 1)
let w = 1; 

do {
    if (w % 2 !==0) {
        console.log(w);
    }

    w++;
}while (w < 100);

//WHILE(FIZZBUZZ)

let i = 1; 

while (i <= 100) {
    let output = ""; 

    if (i %3 == 0) {
        output += 'FIZZ';
    }

    if (i % 5 == 0) { 
  
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
}

//DO/WHILE(FIZZBUZZ)
let x = 1;

do {
    let output = "";

    if (x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${x} ${output}`);

    x++;
} while (x <= 100);

//EXERCISE 4: FIND VALUE 

let numberToFind = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let foundValue;

for (let i = 1; i <= n; i++) {
    if (i == numberToFind) {
        foundValue = true; 
        break;
    }
}

if (foundValue) {
    console.log(`Found ${numberToFind}!`);
}else {
        console.log(`Did not find ${numberToFind} within 1-${n}..`);
}

//Exercise 5: Custom FIZZBUZZ

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }
    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}