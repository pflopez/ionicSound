angular.module('starter.services', []).
factory('SoundCloudService', ['$q','$window', function($q, win) {

	return {
		init: init,
		test: test,
		getTracks: getTracks
	}

	function init() {
	  SC.initialize({
	    client_id: "a3c640eb93a579e2fb97438a287aff52"
	    //redirect_uri: "http://example.com/callback.html",
	  });


		
	}

	function test () {
		var deferred = $q.defer();


        

      	SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
		  deferred.resolve(tracks);
		});
        
        //  deferred.reject(result.error);
        
		return deferred.promise;
		// body...
		//return SC.get("/groups/55517/tracks", {limit: 1}, cb);

	}

	function getTracks(genre , bpm) {
		var deferred = $q.defer();
		SC.get('/tracks', { genres: genre, bpm: { from: 120 } }, function(tracks) {
		  deferred.resolve(tracks);
		});
		return deferred.promise;
	}




   // var msgs = [];	
   // return function(msg) {
   //   msgs.push(msg);
   //   if (msgs.length == 3) {
   //     win.alert(msgs.join("\n"));
   //     msgs = [];
   //   }
   // };
 }]);

