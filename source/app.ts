import * as angular from 'angular';
import * as $ from 'jquery';

import mainCtrl from './controllers/mainCtrl';
import MainService from './services/mainService';


//angular init
let app = angular.module('mainApp', []);

app.service('MainService', MainService);

app.run(['MainService', (MainService: MainService) => {
    console.log(MainService.getMessage());
}]);

app.controller('mainCtrl', mainCtrl);

//Jquery Code
$(document).ready(() => {

    $('body').append('<h3>Hello</h3');

});
