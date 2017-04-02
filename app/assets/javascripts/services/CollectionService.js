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




    this.saveToCollection = function(item){
      var newPlace = item.name;
      var collectionId = UserService.user.collection.id
      var url = '/api/collections/' + collectionId + '/places.json'
      return $http({
        url: url,
        method: 'PUT',
        data: {
          name: newPlace
        }
      })
    }





  }

  CollectionService.$inject = ['$http', 'UserService']

angular
  .module('vegfinder')
  .service('CollectionService', CollectionService);
}());