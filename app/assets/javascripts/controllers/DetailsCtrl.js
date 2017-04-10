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
        console.log($scope.price);
      }
      if(group.name == "Reservations"){
        $scope.reservations = group.items[0].displayValue;
        console.log($scope.reservations);
      }
      if(group.name == "Credit Cards"){
        $scope.creditcards = group.items[0].displayValue;
        console.log($scope.creditcards);
      }
      if(group.name == "Outdoor Seating"){
        $scope.outdoor = group.items[0].displayValue;
        console.log($scope.outdoor);
      }
      if(group.name == "Menus"){
        group.items.forEach(function(item){
          $scope.menus.push(item.displayName);
        });
        console.log($scope.menus);
      }
      if(group.name == "Drinks"){
        group.items.forEach(function(item){
          $scope.drinks.push(item.displayName);
        });
        console.log($scope.drinks);
      }
      if(group.name == "Dining Options"){
        group.items.forEach(function(item){
          $scope.options.push(item.displayName);
        });
        console.log($scope.options);
      }
    })
  }

  ctrl.saveToCollection = function(details, id){
    console.log("calling the function")
    CollectionService.saveToCollectionFromDetails(details, id)
      .success(function(response){
        console.log(response)
        alert(details.venue.name + " has been saved to your collection.");
      });
    }

}

angular
  .module('vegfinder')
  .controller('DetailsController', DetailsController);