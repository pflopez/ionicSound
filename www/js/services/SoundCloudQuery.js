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
    this.pageSize = options.pageSize ? options.pageSize : PAGE_SIZE;
    this.pageNumber = 0;
  };


  /**
   * Gets next page of data
   * @return {Promise}
   */
  Query.prototype.getNextPage = function() {
    //set params
    var params  = { 
      limit: this.pageSize,
      offset: (this.pageSize * this.pageNumber),
      user: this.options.user
    }
    this.pageNumber = this.pageNumber + 1 ;
      console.log(this.options);
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

