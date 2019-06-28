import { basic } from './planets';
import { world } from './planets';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function age() {
var age = $('#age').val();
}

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();


    let age = $('#age').val();


    world(age);



  });
});
