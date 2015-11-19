propertiesApp.factory('propertiesFromJson', ['$http', function($http) {
    return $http.get('public/properties/properties.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
