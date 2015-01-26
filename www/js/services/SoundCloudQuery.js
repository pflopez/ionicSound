angular.module('starter').
factory('SoundCloudQuery', 
        ['SoundCloudService', '$q', 
function( SoundCloudService ,  $q ) {

	var PAGE_SIZE= 50;


  /**
   * Constructor
   * @param {[type]}
   */
  function Query(options, serviceCall){
    this.options 	= options;
    this.serviceCall = serviceCall;
    this.limit = options.limit ? options.limit : PAGE_SIZE;
    this.pageNumber = 0;
  };


  /**
   * Gets next page of data
   * @return {Promise}
   */
  Query.prototype.getNextPage = function() {
    //set params
    var params  = { 
      limit: this.limit,
      offset: (this.limit * this.pageNumber),
    }
    //add user if present
    if(this.options.user) {
      params.user = this.options.user
    }
    
    this.pageNumber = this.pageNumber + 1 ;
    //call service with params
    return this.serviceCall(angular.extend({},this.options,params));
  };


  /** 
   * creates a new query
   * @param  {Object} options
   * @return {Query}
   */
  function newQuery (options) {
    options = options || {}; 
    return new Query(options, SoundCloudService.getTracks);
  };


  /** 
   * creates a new query by user name
   * @param  {Object} options
   * @return {Query}
   */
  function newQueryByUser (options) {
    options = options || {}; 
    return new Query(options,  SoundCloudService.getTracksByUser);
  };


  /**
   * Public methods
   */
  return {
    query: newQuery,
    queryByUser: newQueryByUser
  }

}]);

