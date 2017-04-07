function PlacesController($scope, places, SearchService, PlaceService, $rootScope) {
   $scope.places = [];
   
   places.data.forEach(function(place){
    $scope.places.push(place);
   })
}

angular
  .module('vegfinder')
  .controller('PlacesController', PlacesController);
