(function(){
  function CollectionService($http){


    this.getCollection = function(){
      var url = '/api/collections.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }




    this.saveToCollection = function(item){
      var newCollection = item.name;
      var url = '/api/collections.json'
      return $http({
        url: url,
        method: 'PUT',
        data: {
          name: newCollection
        }
      })
    }





  }

  CollectionService.$inject = ['$http']

angular
  .module('vegfinder')
  .service('CollectionService', CollectionService);
}());