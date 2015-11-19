var propertiesApp = angular.module('propertiesApp', []);

propertiesApp.controller('PropertiesListCtrl',['$scope', 'propertiesFromJson', function ($scope, propertiesFromJson) {
    $scope.properties = [
        {name: 'Property1'},
        {name: 'Property2'},
        {name: 'Property3'}
    ];

    $scope.dataFromJson = propertiesFromJson.success(function(data) {
    $scope.dataFromJson = data;
    });

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

}]);

