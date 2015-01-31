angular.module('ionicSound')
.controller('scResultListCtrl', 
				['$scope', '$ionicLoading', 'SoundCloudQuery', '$ionicModal', '$moment', 'KeyboardService',
function( $scope,   $ionicLoading,   SoundCloudQuery,   $ionicModal,   $moment ,  KeyboardService ) {

	var idle;
	init();
	
	function init(){
		$scope.hasSearchResults = false;

	  // Create the login modal that we will use later
	  $ionicModal.fromTemplateUrl('templates/info.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	};

	$scope.resultClick = function(result){
		$scope.info = result;
		console.log(result);

		result.big_artwork = result.artwork_url ? result.artwork_url.replace('large', 't500x500') : "";
		result.proper_time = $moment.utc(result.duration).format("HH:mm:ss");

		$scope.modal.show();
		$scope.loaded = true;
	};

	$scope.closeModal = function(){
		$scope.modal.hide();  
    $scope.loaded = false; 
    //clear info
    $scope.info = null; 
	};

		/**
	 * Loads more results
	 * @return {[type]}
	 */
	$scope.loadMoreRecords = function(){
		console.log('loading more!');
		$scope.loadMore().then(function(results){
			$scope.$broadcast('scroll.infiniteScrollComplete');
			if(results.length > 0){
				$scope.canLoadMore = true;
			}else{
				$scope.hasSearchResults = false;
			}
		});
	};


	var unbindWatcher = $scope.$watch('results', function(newVal){
			if(newVal){
				console.log('result on the watch!!');
				$scope.$broadcast('scroll.infiniteScrollComplete');
				$scope.hasSearchResults = true;
				unbindWatcher();
			}
	});
	
}]);