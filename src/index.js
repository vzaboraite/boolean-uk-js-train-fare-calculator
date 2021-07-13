// Main task:
// - ask the user what is their age;
// - ask the user how far they are traveling (in km);
// - the price per 1km is £0.21;
// - if the user is under 18, they get 20% discount;
// - if the user is over 65, they get 40% discount;
// - if the user is between 18 and 65, they pay full price.

const pricePerKm = 0.21;
let distance;

const age = prompt("Enter your age: ");

const journey = prompt(
  `
      What journey are you planning?
      
      1- Brixton to High Barnet (20km)
      2- London Bridge to Luton (100km)
      3- Stratford to Southend on Sea (50km)
  
      Please type in number for your journey.
      `
);

if (parseInt(journey) === 1) {
  distance = 20;
} else if (parseInt(journey) === 2) {
  distance = 100;
} else if (parseInt(journey) === 3) {
  distance = 50;
} else {
  alert(`There is no other option than choosing from previous three...`);
}

const pricePerDistance = pricePerKm * distance;

const isJunior = age >= 0 && age < 18;
const isSenior = age > 65;

if (isJunior) {
  alert(`
    --PASSENGER TICKET--
    Passenger age: ${age}
    Journey distance km: ${distance}
    Subtotal £: ${pricePerDistance}
    Apply 20% discount £: ${pricePerDistance * 0.2}
    Total price £: ${pricePerDistance * 0.8}
    `);
} else if (isSenior) {
  alert(`
    --PASSENGER TICKET--
    Passenger age: ${age}
    Journey distance km: ${distance}
    Subtotal £: ${pricePerDistance}
    Apply 40% discount £: ${pricePerDistance * 0.4}
    Total price £: ${pricePerDistance * 0.6}
  `);
} else {
  alert(`
    --PASSENGER TICKET--
    Passenger age: ${age}
    Journey distance km: ${distance}
    Subtotal £: ${pricePerDistance}
    No discount applies
    Total price £: ${pricePerDistance}
  `);
}
