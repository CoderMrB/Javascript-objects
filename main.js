console.log(`Hi`)

let myHouse = {stories:2, parking:false, bedrooms:2, garden:true, energyEfficiency:`D`}

/* Create an object called myCar:
My car is red, has 4 wheels, power steering, and 2 seats, and does 20 miles per gallon. */

let myCar = {colour: `red`, wheels: 4, powerSteering: true, seats: 2, milesPerGallon: 20}

let myFavouriteFilm = {title:`The Dark Knight`, releaseYear: 2008, leadActor: `Christian Bale`}

let person = {
  name: "Ben",
  likesChocolate: true,
};

console.log(person.likesChocolate)

if (person.likesChocolate === true){
    console.log(`${person.name} loves chocolate`)
}
    else{console.log(`${person.name} hates chocolate`)

    };

person.name = `Chris`;
person.likesChocolate = false;

if (person.likesChocolate === true){
    console.log(`${person.name} loves chocolate`)
}
    else{
        console.log(`${person.name} hates chocolate`)
    };

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

let desiredPleasantry = bensPhrases[`greeting`];

console.log(bensPhrases[`smallTalk`]);

console.log(desiredPleasantry);

desiredPleasantry = `Sup!`;

let array = ["Gratin", "Fish fingers", "Cheese roll", "Banana"]
console.log(array)

console.log(array[1])