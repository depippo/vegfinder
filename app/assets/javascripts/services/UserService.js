function UserService(){
  this.user = undefined;
}

angular
  .module('vegfinder')
  .service('UserService', UserService)