const course = "BSIS";
let yearLevel = 2;

console.log(course);
console.log(yearLevel);

console.log("I miss her so much")

document.getElementById("iMissHer").textContent = `Course: ${course} Year Level: ${yearLevel}`;

const firstName = "Mischa";
const lastName = "Rosal";

const message = `Her name is: ${firstName} ${lastName}.`;
document.getElementById("herName").textContent = message;
console.log(message); 

const age = 19;

if (age <= 18) {
    console.log("Underage");
}
else {
    console.log("Valid")
}