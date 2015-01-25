angular.module('starter').
factory('SoundCloudQuery', 
        ['SoundCloudService', '$q', 
function( SoundCloudService ,  $q ) {

	var PAGE_SIZE= 100,
  PAGE_NUM = 0;




  /**
   * Constructor
   * @param {[type]}
   */
  function Query(options){
    this.options 	= options;
    this.serviceCall = options.serviceCall;
  };


  /**
   * Gets next page of data
   * @return {Promise}
   */
  Query.prototype.getNextPage = function() {
    //set params
    var params  = { 
      limit: PAGE_SIZE,
      offset: (PAGE_SIZE * PAGE_NUM),
      user: this.options.user
    }
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
    options.serviceCall = SoundCloudService.getTracks;
    return new Query(options);
  };


  /** 
   * creates a new query by user name
   * @param  {Object} options
   * @return {Query}
   */
  function newQueryByUser (options) {
    options = options || {}; 
    options.serviceCall = SoundCloudService.getTracksByUser;
    return new Query(options);
  };


  /**
   * Public methods
   */
  return {
    query: newQuery,
    queryByUser: newQueryByUser
  }

}]);

