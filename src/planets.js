import $ from 'jquery';
console.log("background is black cause space is a vacuum");


class PlanetAge {
  constructor(userAge,deathAge) {
    this.userAge = userAge;
    this.deathAge = deathAge;
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  mercuryAge() {
    return this.userAge*this.mercury;
  }
  mercuryDeath() {
    if (this.deathAge < this.userAge) {
      return " congrats, youve beaten death by" + " " + (this.userAge*this.mercury - (this.deathAge*this.mercury));
    }
    return this.deathAge*this.mercury - (this.userAge*this.mercury);
  }
  venusAge() {
    return this.userAge*this.venus;
  }
  venusDeath() {
    if (this.deathAge < this.userAge) {
      return " congrats, youve beaten death by" + " " + (this.userAge*this.venus - (this.deathAge*this.venus));
    }
    return this.deathAge*this.venus - (this.userAge*this.venus);
  }
  marsAge() {
    return this.userAge*this.mars;
  }
  marsDeath() {
    if (this.deathAge < this.userAge) {
      return " congrats, youve beaten death by" + " " + (this.userAge*this.mars - (this.deathAge*this.mars));
    }
    return this.deathAge*this.mars - (this.userAge*this.mars);
  }
  jupiterAge() {
    return this.userAge*this.jupiter;
  }
  jupiterDeath() {
    if (this.deathAge < this.userAge) {
      return " congrats, youve beaten death by" + " " + (this.userAge*this.jupiter - (this.deathAge*this.jupiter));
    }
    return this.deathAge*this.jupiter - (this.userAge*this.jupiter);
  }
  easterEgg() {
    if (this.deathAge > 150) {
      $("#sorry").show()

    }
  }
};
export function world(age,die) {
  const planetAge = new PlanetAge(age,die);
  console.log("mercury:" + planetAge.mercuryAge());
  console.log("venus:" + planetAge.venusAge());
  console.log("mars:" + planetAge.marsAge());
  console.log("jupiter:" + planetAge.jupiterAge());
  console.log("mercury death:" + planetAge.mercuryDeath());
  console.log("venus death:" + planetAge.venusDeath());
  console.log("mars death:" + planetAge.marsDeath());
  console.log("jupiter death:" + planetAge.jupiterDeath());
  console.log(planetAge.easterEgg());

};
