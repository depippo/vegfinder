function SearchController($scope, $http, SearchService) {

  var ctrl = this;

  ctrl.venueSearch = function(city) {
    SearchService.getVenues(city)
    .done(function(response) {
      $scope.searchResults = [];
      response.response.venues.forEach(function(venue){
        $scope.searchResults.push(venue);
      });
      console.log($scope.searchResults);
      $scope.searchResults.forEach(function(item){
        console.log(item.name);
      })
      SearchService.searchResults = $scope.searchResults;
    })
  }

  ctrl.mallSearch = function(ll) {
    SearchService.searchWithin(ll)
    .done(function(response) {
      $scope.veganResults = [];
      response.response.groups[0].items.forEach(function(item){
        $scope.veganResults.push(item);
      });
      SearchService.veganResults = $scope.veganResults;
      console.log($scope.veganResults);
    })
  }

}

angular
  .module('vegfinder')
  .controller('SearchController', SearchController);