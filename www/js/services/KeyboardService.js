angular.module('starter').
factory('KeyboardService', ['Utils', 
function( Utils ){

	/**
	 * public 
	 */
	return {
	//	show : show,
		hide: hide
		//isVisible: isVisible,
	}

	/**
	 * Hide the native keyboard
	 * Shows console.info if not present..
	 * @todo  check if in device as well
	 */
	function hide(){
		if(pluginPresent()){
			cordova.plugins.Keyboard.close();
		}else{
			console.info("hiding the native keyboard");
		}
	}

	function pluginPresent(){
		return window.cordova && window.cordova.plugins &&  window.cordova.plugins.Keyboard;
	}

	
}]);

