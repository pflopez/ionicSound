describe("SoundCloudService", function() {

	

	var $scope, $httpBackend, SoundCloudService;
	beforeEach(function(){
		module('ngMock');	
		module('ionicSound');	

		inject(function(_$rootScope_, _$httpBackend_ ,_SoundCloudService_) {
	    $scope = _$rootScope_.$new();    
	    SoundCloudService = _SoundCloudService_;

	    $httpBackend = _$httpBackend_;
	    
	    $httpBackend.when('GET', 'http://api.soundcloud.com/tracks.json').respond({userId: 'userX'}, {'A-Token': 'xxx'});
		});
	});
	
	describe('getTracks', function(){
		
		it("should have a method getTracks", function() {
		    expect(SoundCloudService.getTracks).toBeDefined();
 		});

 		it("should recieve options as a parameter", function() {
		    spyOn(SoundCloudService, 'getTracks');
				SoundCloudService.getTracks({ foo: 'bar'});
		    expect( SoundCloudService.getTracks ).toHaveBeenCalledWith({ foo: 'bar'});
 		});

 		it("should recieve options as a parameter", function() {
		    
				var d = SoundCloudService.getTracks({ foo: 'bar'});
				console.log(d);
		    
 		});

 		


	});
  
  describe('getTracksByUser', function(){
		
		it("should have a method getTracksByUser", function() {
		    expect(SoundCloudService.getTracks).toBeDefined();
 		});
	});


  // must return error if params missing

  // must return error if user not present (get by user)

  // must cleanup extra options params before requesting

  // must return a promise

  // must use clientId
});