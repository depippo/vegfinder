function PlacesController($scope, places, SearchService, PlaceService, $rootScope, $filter) {
   $scope.places = [];
   
   places.data.forEach(function(place){
    $scope.places.push(place);
   })

  this.search = '';

  this.refilter = function() {
    this.filteredList = $filter('filter')($scope.places, this.search);
  };

  this.refilter();
}

angular
  .module('vegfinder')
  .controller('PlacesController', PlacesController);
