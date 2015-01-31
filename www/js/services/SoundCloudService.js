angular.module('ionicSound').
factory('SoundCloudService', 
	      ['$http', '$q', '$log' ,
function( $http,   $q , $log){
	

	/**
	 * public 
	 */
	return {
		getTracks : getTracks,
		getTracksByUser: getTracksByUser
	}

	/**
	 * Get client ID
	 * @return {String}
	 * @todo this needs so be set on config
	 */
	function getClientId(){
		return 'a3c640eb93a579e2fb97438a287aff52';
	}



	/**
	Gets track 
	@param {Object} options Filter options

	Parameter					Type					Description
	q									string				a string to search for (see search documentation)
	tags							list					a comma separated list of tags
	filter						enumeration		(all,public,private)
	license						enumeration		Filter on license. (see license attribute)
	bpm[from]					number				return tracks with at least this bpm value
	bpm[to]						number				return tracks with at most this bpm value
	duration[from]		number				return tracks with at least this duration (in millis)
	duration[to]			number				return tracks with at most this duration (in millis)
	created_at[from]	date					(yyyy-mm-dd hh:mm:ss) return tracks created at this date or later
	created_at[to]		date					(yyyy-mm-dd hh:mm:ss) return tracks created at this date or earlier
	ids								list					a comma separated list of track ids to filter on
	genres						list					a comma separated list of genres
	types							enumeration		a comma separated list of types
	*/
	function getTracks(options) {

		options = options || {};
		options.client_id = getClientId();
 		
		var deferred = $q.defer();
		$http({
      method: 'GET',
      url: 'http://api.soundcloud.com/tracks.json',
      params: options
    })
    .success(function(data){
	  	deferred.resolve(data);
    })
    .error(function(reason){
    	$log.info("error!", reason);
    	deferred.reject(reason);
    });
		return deferred.promise;
	}


	/**
	 * Gets track for a given user
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	function getTracksByUser(options){
		options = options || {};
		options.client_id = getClientId();

		var user  = options.user;

 		// @TODO cleanup the options object
		
 		
		var deferred = $q.defer();
		$http({
	    method: 'GET',
      url: 'http://api.soundcloud.com/users/'+ user +'/tracks.json',
      params: options
    }).success(function(data){
    	deferred.resolve(data);
    })
    .error(function(reason){
    	$log.info("error!", reason);
    	deferred.reject(reason);
    });
		return deferred.promise;
	}
}]);

