"use strict";
const angular = require("angular");
const $ = require("jquery");
const mainCtrl_1 = require("./controllers/mainCtrl");
const mainService_1 = require("./services/mainService");
//angular init
let app = angular.module('mainApp', []);
app.service('MainService', mainService_1.default);
app.run(['MainService', (MainService) => {
        console.log(MainService.getMessage());
    }]);
app.controller('mainCtrl', mainCtrl_1.default);
//Jquery Code
$(document).ready(() => {
    $('body').append('<h3>Hello</h3');
});
