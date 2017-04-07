function SearchController($scope, $http, SearchService, CollectionService) {

  var ctrl = this;
  $scope.gPlace;

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

  ctrl.placeSearch = function(city) {
    SearchService.searchWithin(city)
    .done(function(response) {
      $scope.veganResults = [];
      response.response.groups[0].items.forEach(function(item){
        $scope.veganResults.push(item);
      });
      SearchService.veganResults = $scope.veganResults;
      console.log($scope.veganResults);
    })
  }


  ctrl.getCollections = function() {
    CollectionService.getCollection()
    .success(function(response) {
      $scope.collections = [];
      response.forEach(function(item){
        $scope.collections.push(item);
      })
      CollectionService.collections = $scope.collections
    })
  }

}

angular
  .module('vegfinder')
  .controller('SearchController', SearchController);