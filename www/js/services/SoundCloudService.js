angular.module('starter.services', []).
factory('SoundCloudService', ['$http', '$q','$window', function($http, $q, win) {

	var PAGE_SIZE= 100,
		PAGE_NUM = 0;


	return {
		getTracksByGenre: getTracksByGenre,
		getTracks : getTracks ,
		getNextPage: getNextPage
	}

	function getClientId(){
		return 'a3c640eb93a579e2fb97438a287aff52';
	}



	function getTracksByGenre(genre) {
 		
		var deferred = $q.defer();
		$http({
            method: 'GET',
            url: 'http://api.soundcloud.com/tracks.json',
            params: { 
            	client_id : getClientId(),
            	genre: genre,
            	limit: PAGE_SIZE
            }
        }).success(function(data){
        	deferred.resolve(data);
        })
		return deferred.promise;
	}

	function getNextPage(){
		PAGE_NUM = PAGE_NUM + 1;

		var deferred = $q.defer();
				$http({
		            method: 'GET',
		            url: 'http://api.soundcloud.com/tracks.json',
		            params: { 
		            	client_id : getClientId(),
		            	genre: 'rock',
		            	limit: PAGE_SIZE,
		            	offset: (PAGE_SIZE * PAGE_NUM)
		            }
		        }).success(function(data){
		        	deferred.resolve(data);
		        })
				return deferred.promise;
	}

	/**
	
	Gets track 
	@param {Object} options Filter options

	Parameter			Type			Description
	q					string			a string to search for (see search documentation)
	tags				list			a comma separated list of tags
	filter				enumeration		(all,public,private)
	license				enumeration		Filter on license. (see license attribute)
	bpm[from]			number			return tracks with at least this bpm value
	bpm[to]				number			return tracks with at most this bpm value
	duration[from]		number			return tracks with at least this duration (in millis)
	duration[to]		number			return tracks with at most this duration (in millis)
	created_at[from]	date			(yyyy-mm-dd hh:mm:ss) return tracks created at this date or later
	created_at[to]		date			(yyyy-mm-dd hh:mm:ss) return tracks created at this date or earlier
	ids					list			a comma separated list of track ids to filter on
	genres				list			a comma separated list of genres
	types				enumeration		a comma separated list of types
	*/
	function getTracks(options) {
 		
		var deferred = $q.defer();
		$http({
            method: 'GET',
            url: 'http://api.soundcloud.com/tracks.json',
            params: { 
            	client_id : getClientId(),
            	genre: genre
            }
        }).success(function(data){
        	deferred.resolve(data);
        })
		return deferred.promise;
	}
 }]);

