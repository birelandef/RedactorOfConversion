var propertiesApp = angular.module('propertiesApp', []);

propertiesApp.controller('PropertiesListCtrl', function ($scope) {
    $scope.properties = [
        {name: 'Property1'},
        {name: 'Property2'},
        {name: 'Property3'}
    ];

    //propertiesApp.controller('PropertiesListCtrl', ['$scope', '$http',
    //    function ($scope, $http) {
    //        $http.get("properties/properties.json").success(function(data) {
    //            $scope.properties = data;
    //        });


    $scope.selectedProperties = [ ];

    $scope.countSelected = 0;


    $scope.select = function(property) {
        $scope.selectedProperties.push(property);
    };

    $scope.processed = function() {
        if ($scope.selectedProperties != 2) $scope.showError
    };

    $scope.showError = function() {
        //TODO всплывающее окно
    };
}
)
//]);

