"use strict";
const angular = require("angular");
const $ = require("jquery");
const mainCtrl_1 = require("./controllers/mainCtrl");
//angular init
let app = angular.module('mainApp', []);
app.controller('mainCtrl', mainCtrl_1.default);
//Jquery Code
$(document).ready(() => {
    $('body').append('<h3>Hello</h3');
});
