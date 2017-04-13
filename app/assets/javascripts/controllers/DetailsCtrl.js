function DetailsController($scope, details, SearchService, CollectionService) {

  $scope.details = details.response;
  $scope.price = "";
  $scope.reservations = "";
  $scope.creditcards = "";
  $scope.outdoor = "";
  $scope.menus = [];
  $scope.drinks = [];
  $scope.options = [];


  var ctrl = this;

  ctrl.getPlaceInfo = function() {
    console.log($scope.details);
    $scope.details.venue.attributes.groups.forEach(function(group){
      if(group.name == "Price"){
        $scope.price = group.items[0].displayValue;
      }
      if(group.name == "Reservations"){
        $scope.reservations = group.items[0].displayValue;
      }
      if(group.name == "Credit Cards"){
        $scope.creditcards = group.items[0].displayValue;
      }
      if(group.name == "Outdoor Seating"){
        $scope.outdoor = group.items[0].displayValue;
      }
      if(group.name == "Menus"){
        group.items.forEach(function(item){
          $scope.menus.push(item.displayName);
        });
      }
      if(group.name == "Drinks"){
        group.items.forEach(function(item){
          $scope.drinks.push(item.displayName);
        });
      }
      if(group.name == "Dining Options"){
        group.items.forEach(function(item){
          $scope.options.push(item.displayName);
        });
      }
    })
  }

  ctrl.saveToCollection = function(details, id){
    CollectionService.saveToCollectionFromDetails(details, id)
      .success(function(response){
        alert(details.venue.name + " has been saved to your favorites.");
      });
    }

}

angular
  .module('vegfinder')
  .controller('DetailsController', DetailsController);