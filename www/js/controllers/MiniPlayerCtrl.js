angular.module('starter')
.controller('MiniPlayerCtrl', 
       [ '$scope', '$ionicLoading' , 'SoundCloudQuery' , '$ionicModal', '$moment',
function( $scope ,  $ionicLoading  ,  SoundCloudQuery  ,  $ionicModal ,  $moment) {

 function init(){
 	console.log("hello from miniplayer");
 }


  init();


}]);