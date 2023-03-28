const myHouse = {
    stories: 2,
    parking: false,
    bedrooms: 2,
    garden: true,
    energyRating: "D",
};

const myCar = {
    colour: "red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    mpg: 20,    
};

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseYear: 2008,
    leadActor: "Christian Bale",
};

let person = {
  name: "John",
  likesChocolate: true,
};

console.log(person.likesChocolate);

if (person.likesChocolate === false){
    console.log(`${person.name} likes chocolate`)
}else{
    console.log(`${person.name} hates chocolate`)
}

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

let desiredPleasantry = (bensPhrases["farewell"]);

console.log(bensPhrases["smallTalk"])

console.log(desiredPleasantry)