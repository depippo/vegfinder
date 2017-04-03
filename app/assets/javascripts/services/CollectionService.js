(function(){
  function CollectionService($http, UserService){

    var places;

    this.getCollection = function(){
      var url = '/api/collections.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }


    this.getOneCollection = function(){
      var collectionId = UserService.user.collection.id
      var url = '/api/collections/' + collectionId + '.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }


    this.saveToCollection = function(item){
      var placeObject = {
        name: item.venue.name,
        menu: item.venue.menu.url,
        address: item.venue.location.formattedAddress,
        description: item.tips[0].text
      }
      var collectionId = UserService.user.collection.id
      var url = '/api/collections/' + collectionId + '/places.json'
      return $http({
        url: url,
        method: 'PUT',
        data: {
          place: placeObject
        }
      })
    }


  }

  CollectionService.$inject = ['$http', 'UserService']

angular
  .module('vegfinder')
  .service('CollectionService', CollectionService);
}());