function PlaceController($scope, place) {

  $scope.place = place.data;

  var ctrl = this;

}

angular
  .module('vegfinder')
  .controller('PlaceController', PlaceController);
