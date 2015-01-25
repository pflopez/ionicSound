angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', [ '$scope' , 'SoundCloudService' , '$ionicLoading' , function($scope, SoundCloudService , $ionicLoading) {

  var idle = true;

  $ionicLoading.show({
    template: 'Loading...'
  });
  


  $scope.loadMore = function (){
    if(idle){
      idle = false;
      console.log('it is idle, go!');
      SoundCloudService.getNextPage().then(function(tracks){
        $scope.tracks = $scope.tracks ? $scope.tracks.concat(tracks) : tracks;
        $ionicLoading.hide();
        idle = true;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });  
    }
  }


}])

.controller('PlaylistCtrl', ['$scope', '$stateParams' , function($scope, $stateParams) {

}]);
