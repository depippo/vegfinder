function PlaceController($scope, place, SearchService) {

  $scope.place = place.data;

  var ctrl = this;


  ctrl.getMenu = function(id) {
    SearchService.getMenu(id)
    .done(function(response) {
      $scope.menus = [];
      response.response.menu.menus.items[0].entries.items.forEach(function(menu){
        $scope.menus.push(menu);
      });
      SearchService.menus = $scope.menus;
      console.log($scope.menus);
    })
  }

}

angular
  .module('vegfinder')
  .controller('PlaceController', PlaceController);
