
class PlanetAge {
  constructor(userAge) {
    this.userAge = userAge;
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  mercuryAge() {
    return this.userAge*this.mercury;
  }
  venusAge() {
    return this.userAge*this.venus;
  }
  marsAge() {
    return this.userAge*this.mars;
  }
  jupiterAge() {
    return this.userAge*this.jupiter;
  }

};
export function world(age) {
  const planetAge = new PlanetAge(age);

  console.log("mercury:" + planetAge.mercuryAge());
  console.log("venus:" + planetAge.venusAge());
  console.log("mars:" + planetAge.marsAge());
  console.log("jupiter:" + planetAge.jupiterAge());
  console.log("F this assignment");

};
