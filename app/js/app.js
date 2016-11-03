(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./controllers/mainCtrl":2,"angular":"angular","jquery":"jquery"}],2:[function(require,module,exports){
"use strict";
;
class mainCtrl {
    constructor($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;
        this.main();
        $scope.submitForm = function () {
            let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
            $http.get(url).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            }).catch((error) => {
                console.log(error);
            });
        };
    }
    main() {
        console.log("This is the main function inside mainCtrl.");
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mainCtrl;
mainCtrl.$inject = [
    '$scope',
    "$http"
];

},{}]},{},[1]);
