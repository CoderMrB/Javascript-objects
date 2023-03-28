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

let me = {
  firstName: "Chris",
  lastName: "Branson",
  isBootcamper: false,
};

me.isBootcamper = true;
console.log(`Is ${me.firstName} a bootcamper? Yes, that is ${me["isBootcamper"]}!`)

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

let message = (communication["payload"].message.text)


if ((communication["payload"].message.priority) === "URGENT"){
    console.log(communication["payload"].message.text);
}

let yourDetails = {
    yourName: "",
    yourAge: ""
}

function whoAreYou(name, age){
    yourDetails.yourName = name;
    yourDetails["yourAge"] = age;
    alert(`So lovely to meet you ${yourDetails.yourName}! You are never ${yourDetails["yourAge"]}!? You don't look a day over ${(Math.floor(yourDetails["yourAge"]/2))} .`)
}

whoAreYou(prompt("Hi there, what's your name?"), prompt("Lovely. And how old are you?"))