// RUN TESTS
//
//
import { PlanetAge } from './../src/planets.js';
import { world } from './../src/planets.js';
//
describe('PlanetAge', function() {
it('returns age that user inputs in earth years', function () {
    var planetAge = new PlanetAge(27,80);
      expect(planetAge.userAge()).toEqual(27);
});

it('returns age that user inputs in mercury years' function () {
    var planetAge = new PlanetAge(27,80);
    expect(planetAge.mercuryAge()).toEqual(6.48);
});

it('returns life expectancy of how many years you have left in earth years', function () {
    var planetAge = new PlanetAge (27,75);
    expect(planetAge.deathAge() - planetAge.userAge()).toEqual(48);
});





});

// it('returns age that user inputs in earth years', function () {
//     var planetAge = new PlanetAge(34, 77);
//     planet.calculateJupiterAge();
//     expect(planetAge.jupiterAge).toEqual(8.16);
// });
//
// it('should correctly determine whether three lengths can be made into a triangle', function() {
// var notTriangle = new Triangle(3,9,22);
// expect(notTriangle.checkType()).toEqual("not a triangle");
// });
//
// it('should correctly determine whether three lengths can be made into a triangle', function() {
// var isocTriangle = new Triangle(5,5,7)
// expect(isocTriangle.checkType()).toEqual("an isosceles triangle");
// });
//
// it('should correctly determine whether three lengths can be made into a triangle', function() {
// var scalTriangle = new Triangle(4,5,7)
// expect(scalTriangle.checkType()).toEqual("a scalene triangle");
// });
//
// });
