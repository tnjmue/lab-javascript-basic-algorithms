// Iteration 1: Names and Input

let hacker1 = "Amr";

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Tanja";

console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length ) {

  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

}
else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}

else if (hacker1.length === hacker2.length) {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}

// Iteration 3: Loops

// 3.1
const driver = hacker1[0] + " " + hacker1[1].toUpperCase() + " " + hacker1[2].toUpperCase();
console.log(driver);

// 3.2
const driverRev = hacker1[2] + hacker1[1] + hacker1[0];
console.log(driverRev); 

// 3.3
const sorted = hacker1 + hacker2;
const moreSorted = sorted.sort()
console.log(moreSorted)