let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if(early && age > 18){
  raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Your race begins at 9:30am and your race number is ${raceNumber}.`);
}
else if(!early && age > 18){
  console.log(`Your race begins at 11:00am and your race number is ${raceNumber}.`);
}
else if(age < 18){
  console.log(`Your race begins at 12:30pm and your race number is ${raceNumber}.`);
}
else {
  console.log('Please see registration for instructions.');
}