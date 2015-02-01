describe("SoundCloudQuery", function() {

	var $scope, $httpBackend, SoundCloudService, SoundCloudQuery;
	beforeEach(function(){
		module('ngMock');	
		module('ionicSound');	

		inject(function(_$rootScope_, _$httpBackend_ ,_SoundCloudService_ , _SoundCloudQuery_) {
	    $scope 							= _$rootScope_.$new();    
	    SoundCloudService 	= _SoundCloudService_;
			SoundCloudQuery 		= _SoundCloudQuery_;
		});

	});
	/**
	 * Query
	 */
	describe('query', function(){
		
		it("should have a method query", function() {
		    expect(SoundCloudQuery.query).toBeDefined();		    
 		});

 		it("should make a new instance each time", function() {
 			var queryOne = SoundCloudQuery.query({foo: 'bar'});
 			var queryTwo = SoundCloudQuery.query({foo: 'abc'});
 			expect(queryOne).not.toEqual(queryTwo);
 		});

 		it("page counter should start on 0", function() {
			var queryOne = SoundCloudQuery.query();
 			var queryTwo = SoundCloudQuery.query({foo: 'abc'});
			expect(queryOne.pageNumber).toBe(0);
			expect(queryTwo.pageNumber).toBe(0);
 		});

 		it("should increase de counter only on instance", function() {
 			var queryOne = SoundCloudQuery.query();
 			var queryTwo = SoundCloudQuery.query({foo: 'abc'});

			spyOn(SoundCloudService, "getTracks").and.returnValue({});
 			spyOn(SoundCloudService, "getTracksByUser").and.returnValue({});
			
			queryOne.getNextPage();

			expect(queryOne.pageNumber).toBe(1);
			expect(queryTwo.pageNumber).toBe(0);
 		});

 		it("should have a serviceCall method", function() {
 			var queryOne = SoundCloudQuery.query();
 			expect(queryOne.serviceCall).toBeDefined;
 		});

	 	it("should use that serviceCall", function() {
 			var queryOne = SoundCloudQuery.query();
 			spyOn(queryOne, "serviceCall");
			queryOne.getNextPage();
			expect(queryOne.serviceCall).toHaveBeenCalled();
 		});
 		
 		it("should set page size if provided", function() {
 			var queryOne = SoundCloudQuery.query({limit: 100});
 			expect(queryOne.limit).toBe(100);
 			queryOne = SoundCloudQuery.query({limit: 10});
			expect(queryOne.limit).toBe(10);
 		});
		
		it("should include page and size on each call to service", function() {
 			var queryOne = SoundCloudQuery.query({limit: 10});
 			spyOn(queryOne, "serviceCall").and.returnValue();
			queryOne.getNextPage();
 			expect(queryOne.serviceCall).toHaveBeenCalledWith( { limit: 10, offset: 0});
 			queryOne.getNextPage();
 			expect(queryOne.serviceCall).toHaveBeenCalledWith( { limit: 10, offset: 10});
 		});



	});
  
  /**
   * Query queryByUser
   *
   *
   * 
   */
  describe('queryByUser', function(){
		
		it("should have a method queryByUser", function() {
		    expect(SoundCloudQuery.queryByUser).toBeDefined();		    
 		});

 		it("should make a new instance each time", function() {
 			var queryOne = SoundCloudQuery.queryByUser({foo: 'bar'});
 			var queryTwo = SoundCloudQuery.queryByUser({foo: 'abc'});
 			expect(queryOne).not.toEqual(queryTwo);
 		});

 		it("page counter should start on 0", function() {
			var queryOne = SoundCloudQuery.queryByUser();
 			var queryTwo = SoundCloudQuery.queryByUser({foo: 'abc'});
			expect(queryOne.pageNumber).toBe(0);
			expect(queryTwo.pageNumber).toBe(0);
 		});

 		it("should increase de counter only on instance", function() {
 			var queryOne = SoundCloudQuery.queryByUser();
 			var queryTwo = SoundCloudQuery.queryByUser({foo: 'abc'});

			spyOn(SoundCloudService, "getTracks").and.returnValue({});
 			spyOn(SoundCloudService, "getTracksByUser").and.returnValue({});
			
			queryOne.getNextPage();

			expect(queryOne.pageNumber).toBe(1);
			expect(queryTwo.pageNumber).toBe(0);
 		});

 		it("should have a serviceCall method", function() {
 			var queryOne = SoundCloudQuery.query();
 			expect(queryOne.serviceCall).toBeDefined;
 		});

	 	it("should use that serviceCall", function() {
 			var queryOne = SoundCloudQuery.queryByUser();
 			spyOn(queryOne, "serviceCall");
			queryOne.getNextPage();
			expect(queryOne.serviceCall).toHaveBeenCalled();
 		});
 		
 		it("should set page size if provided", function() {
 			var queryOne = SoundCloudQuery.queryByUser({limit: 100});
 			expect(queryOne.limit).toBe(100);
 			queryOne = SoundCloudQuery.queryByUser({limit: 10});
			expect(queryOne.limit).toBe(10);
 		});
		
		it("should include page and size on each call to service", function() {
 			var queryOne = SoundCloudQuery.queryByUser({limit: 10});
 			spyOn(queryOne, "serviceCall").and.returnValue();
			queryOne.getNextPage();
 			expect(queryOne.serviceCall).toHaveBeenCalledWith( { limit: 10, offset: 0});
 			queryOne.getNextPage();
 			expect(queryOne.serviceCall).toHaveBeenCalledWith( { limit: 10, offset: 10});
 		});
	});


});