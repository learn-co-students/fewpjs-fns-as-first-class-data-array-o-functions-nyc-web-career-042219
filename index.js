// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");

let wakeDog = function (dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}`
};

let leashDog = function (dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`
};

let walkToPark = function (dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`
};

let throwFrisbee = function (dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
};

let walkHome = function (dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`
};

let unleashDog = function (dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`
};

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

function exerciseDog(dogName, dogBreed) {
  let routine_return = [];
  for (let i = 0; i < routine.length; i++) {
      routine_return.push(routine[i](dogName, dogBreed))
    }
  return routine_return
  };
