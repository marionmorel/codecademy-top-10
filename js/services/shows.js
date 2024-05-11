app.factory("shows", ["$http", function($http) {
    return $http.get("https://content.codecademy.com/courses/ltp4/shows-api/shows.json?_gl=1*1uf8s4z*_ga*OTk5MTA2NzI1Mi4xNjc5NDc4MzEz*_ga_3LRZM6TM9L*MTcxNTQzODgwOC42Ny4xLjE3MTU0NDQzMzkuMC4wLjA")
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        })
}])