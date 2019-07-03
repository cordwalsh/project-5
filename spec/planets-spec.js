import { PlanetAge } from './../src/planets.js';
import { world } from './../src/planets.js';
describe('PlanetAge', function() {
it('returns age that user inputs in earth years', function () {
    var planetAge = new PlanetAge(27,80);
      expect(planetAge.earthAge()).toEqual(27);
});
it('returns age that user inputs in mercury years', function () {
    var planetAge = new PlanetAge(100,200);
    expect(planetAge.mercuryAge()).toEqual(24);
});
it('returns life expectancy of how many years you have left in earth years', function () {
    var planetAge = new PlanetAge(27,75);
    expect(planetAge.earthDeath() - planetAge.earthAge()).toEqual(48);
});
it('returns number of years that user has lived over if life expectancy is lower than user age', function () {
  var planetAge = new PlanetAge(80,65);
  expect(planetAge.earthAge() - planetAge.earthDeath()).toEqual(15);
});
});
