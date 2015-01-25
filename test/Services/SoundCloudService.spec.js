describe("SoundCloudService", function() {

	

	var $scope, SoundCloudService;
	beforeEach(function(){
		module('starter');	
		module('ngMock');	
		inject(function($rootScope, _SoundCloudService_) {
	    $scope = $rootScope.$new();    
	    SoundCloudService = _SoundCloudService_;
		});
	});
	
	
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);

  });


  // must return error if params missing

  // must return error if user not present (get by user)

  // must cleanup extra options params before requesting

  // must return a promise

  // must use clientId
});