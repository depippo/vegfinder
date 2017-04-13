function UpdateService(UserService){
  this.updateLists = function(user){
    UserService.user = user;
    return user;
  }

}

angular
  .module('vegfinder')
  .service('UpdateService', UpdateService)