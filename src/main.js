import { basic } from './planets';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    var age = $('#age').val();
    // var lifeExpectency = new LifeExpectancy(age);
    // console.log(lifeExpe ctancy.tostring())
    // var output = date(age);
    basic();
    // console.log(output);
    // output.forEach(function(element) {
      // $('#result').append("<li>" + element + "</li>");

    // });
  });
});
