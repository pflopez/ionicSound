angular.module('starter')
.controller('BrowseCtrl', ['$scope', '$ionicLoading', 'SoundCloudQuery',function($scope,$ionicLoading, SoundCloudQuery) {
	var idle 	= false;
	var query;
	init();
	
	function init(){
		console.log('init');
		$scope.tags = [] ;//['rock', 'metal', 'alternativo', 'funk' , 'jazz' ,'punk' , 'happy' ,'nyc' ]
		$scope.query = {};
		$scope.endOfRecords = false;
		$scope.hasSearchResults = false;
	}

	filterTags = function(results){
		var cleanTags = [];
		var temp;
		

		angular.forEach(results, function(item){
				
				if(item.tag_list != null){
						temp = item.tag_list.split(" ");
						angular.forEach(temp, function(tag){
							tag = tag.trim();
							if(tag.indexOf("soundcloud:") < 0 && tag != ""){
								cleanTags.push(tag.replace('"',''));	
							}
						})
				}
		})	
		cleanTags = _.uniq(cleanTags);
		return cleanTags;
	}

	$scope.getLatestTags = function() {
		$ionicLoading.show();

		
	  query =  SoundCloudQuery.query({});
		query.getNextPage().then(function(results){
			 $scope.tags =  filterTags(results);;
  	 	$ionicLoading.hide();

   //  	if(results > 0){
  	// 		$scope.hasSearchResults = true;
			// 	enableScroll();	
			// }else{
			// 	$scope.hasSearchResults = false;
			// }
  	});  
	}



	

}]);