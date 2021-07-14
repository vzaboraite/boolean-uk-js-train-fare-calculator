// Main task:
// - ask the user what is their age;
// - ask the user how far they are traveling (in km);
// - the price per 1km is £0.21;
// - if the user is under 18, they get 20% discount;
// - if the user is over 65, they get 40% discount;
// - if the user is between 18 and 65, they pay full price.

// Constants that will be used in formulas
const pricePerKm = 0.21;
const juniorDiscount = 0.2;
const seniorDiscount = 0.4;

// User input
const age = prompt("Enter your age: ");

const journeyResponse = prompt(
  `
  What journey are you planning?
  
  1- Brixton to High Barnet (20km)
  2- London Bridge to Luton (100km)
  3- Stratford to Southend on Sea (50km)
  
  Please type in number for your journey.
  `
);

const journey = parseInt(journeyResponse);

let distance = 0;

if (journey === 1) {
  distance = 20;
  pricePerDistance;
} else if (journey === 2) {
  distance = 100;
} else if (journey === 3) {
  distance = 50;
} else {
  alert(`There is no other option than choosing from previous three...`);
}

// Formula for discounts:
// https://www.wikihow.com/Calculate-a-Discount
// price - (price * discount)

// Count price per selected distance
const pricePerDistance = pricePerKm * distance;

// Conditions
const isJunior = age >= 0 && age < 18;
const isSenior = age > 65;

if (isJunior) {
  const discount = pricePerDistance * juniorDiscount;
  const discountedPrice = pricePerDistance - discount;
  const priceForMessage = discountedPrice.toFixed(2);

  const message = `
    --PASSENGER TICKET--
    Passenger age: ${age}
    Journey distance km: ${distance}
    Subtotal £: ${pricePerDistance}
    Apply 20% discount £: ${discountedPrice}
    Total price £: ${priceForMessage}
    `;

  alert(message);
} else if (isSenior) {
  const discount = pricePerDistance * seniorDiscount;
  const discountedPrice = pricePerDistance - discount;
  const priceForMessage = discountedPrice.toFixed(2);

  const message = `
    --PASSENGER TICKET--
    Passenger age: ${age}
    Journey distance km: ${distance}
    Subtotal £: ${pricePerDistance}
    Apply 40% discount £: ${discountedPrice}
    Total price £: ${priceForMessage}
    `;
  alert(message);
} else {
  const message = `
    --PASSENGER TICKET--
    Passenger age: ${age}
    Journey distance km: ${distance}
    Subtotal £: ${pricePerDistance}
    No discount applies
    Total price £: ${pricePerDistance}
    `;

  alert(message);
}
