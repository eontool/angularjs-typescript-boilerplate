"use strict";
;
class mainCtrl {
    constructor($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;
        this.main();
        $scope.myData = "My data string";
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
    "$http",
];
