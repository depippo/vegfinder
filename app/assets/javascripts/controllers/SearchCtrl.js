function SearchController($scope, $http, SearchService, CollectionService) {

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


  ctrl.saveToCollection = function(item, id){
    console.log("calling the function")
    CollectionService.saveToCollection(item, id)
      .success(function(response){
        console.log(response)
        alert(item.venue.name + " has been saved to your collection.");
      });
    }



}

angular
  .module('vegfinder')
  .controller('SearchController', SearchController);