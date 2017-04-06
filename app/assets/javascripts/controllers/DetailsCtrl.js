function DetailsController($scope, details, SearchService, CollectionService) {

  $scope.details = details.response;

  var ctrl = this;

  ctrl.showPlaceInfo = function() {
    console.log($scope.details);
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
