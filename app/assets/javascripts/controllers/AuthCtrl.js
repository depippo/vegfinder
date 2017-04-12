angular
  .module('vegfinder')
  .controller('AuthCtrl', function($scope, $rootScope, Auth, UpdateService, $state){
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    $scope.register = function(){
      Auth.register($scope.user, config).then(function(user){
        UpdateService.updateLists(user)
        $rootScope.user = user
        alert("Thanks for signing up, " + user.username);
        $state.go('home');
      }, function(response){
        alert(response.data.error)
      });
    };

    $scope.login = function(){
      Auth.login($scope.user, config).then(function(user){
        UpdateService.updateLists(user)
        $rootScope.user = user
        alert("You're signed in, " + user.username);
        $state.go('home');
      }, function(response){
        alert(response.data.error)
      });
    }
  })