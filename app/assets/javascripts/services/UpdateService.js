(function(){
  function UpdateService(CollectionService, UserService, SearchService){
    this.updateLists = function(user){
      UserService.user = user;
      return user;
    }

  }

  UpdateService.$inject = ['CollectionService', 'UserService', 'SearchService']

  angular
    .module('vegfinder')
    .service('UpdateService', UpdateService)
}())