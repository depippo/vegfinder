(function(){
  function CollectionService($http){


    this.getCollection = function(){
      var url = '/api/collections.json'
      return $http({
        url: url,
        method: 'GET',
      })
    }

  }

  CollectionService.$inject = ['$http']

angular
  .module('vegfinder')
  .service('CollectionService', CollectionService);
}());