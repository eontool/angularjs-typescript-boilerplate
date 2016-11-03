import * as angular from 'angular';
import * as $ from 'jquery';

import mainCtrl from './controllers/mainCtrl';

//angular init
let app = angular.module('mainApp', []);

app.controller('mainCtrl', mainCtrl);

//Jquery Code
$(document).ready(() => {

    $('body').append('<h3>Hello</h3');

});
