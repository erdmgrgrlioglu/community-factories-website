export function energyBudget() {
  //complex function
  //https://en.wikipedia.org/wiki/Earth%27s_energy_budget
  return 4600000000000000;
}

export function energyConsumption() {
  return 17000000000000;
}

export function resourceBudget() {
  return 100;
}

export function resourceConsumption() {
  return 100;
}

export function calToJoule(calories) {
  return calories * 4.184;
}

export function jouleToWatts(joule, time) {
  return joule / time;
}

export function dayToSeconds() {
  return 86400;
}

export function maxEnergyPerPerson(extra) {
  // upperbound: 4000kcl day (age 25 male height 2m 100 kg)
  var diet = jouleToWatts(calToJoule(4000), dayToSeconds());
  return extra ? diet + extra : diet;
}

export function carryingCapacity() {
  return energyBudget() / maxEnergyPerPerson();
}

export function worldPopulation() {
  return 8231613070;
}

export function recommendedChildCountPerFamily() {
  return carryingCapacity() / worldPopulation();
}

export function kardeshevNumber() {
  // hank ai says 0.7276
  return (
    (energyConsumption() / energyBudget() +
      resourceConsumption() / resourceBudget()) /
    2
  );
}

export function format(number) {
  var num = number.toString();
  var format = "";
  for (let index = 0; index < num.length; index++) {
    format += num[index];
    format += (index - (num.length % 3) + 1) % 3 == 0 ? " " : "";
  }
  return format;
}
