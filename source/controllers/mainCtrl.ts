export interface mainCtrlScope extends ng.IScope {
    submitForm: () => void;
    myData: string;
};

export default class mainCtrl {

    static $inject = [
        '$scope',
        "$http",
    ];

    constructor(private $scope: mainCtrlScope, private $http: ng.IHttpService) {

        this.main();

        $scope.myData = "My data string";

        $scope.submitForm = function () {
            let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
            $http.get(url).then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            ).catch((error) => {
                console.log(error);
            });
        };

    }

    main(): void {
        console.log("This is the main function inside mainCtrl.");
    }

}