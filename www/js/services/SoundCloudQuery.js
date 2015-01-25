angular.module('starter').
factory('SoundCloudQuery', ['SoundCloudService', '$q', function(SoundCloudService , $q) {

	var PAGE_SIZE= 100,
		PAGE_NUM = 0;

	function Query(options){
		this.options 	= options;
		this.user 		= options.user;
		this.serviceCall = options.serviceCall;
	}
  	
  	Query.prototype.getNextPage = function() {
	 	var params  = { 
    		limit: PAGE_SIZE,
        	offset: (PAGE_SIZE * PAGE_NUM),
        	user: this.user
        }
		return this.serviceCall(params);
  	};

  	function newQuery (options) {
  		options = options || {}; 
  		options.serviceCall = SoundCloudService.getTracks;
  		return new Query(options);
  	};
  	function newQueryByUser (options) {
  		options = options || {}; 
  		options.serviceCall = SoundCloudService.getTracksByUser;
  		return new Query(options);
  	};

  	return {
        query: newQuery,
        queryByUser: newQueryByUser
    }

 }]);

