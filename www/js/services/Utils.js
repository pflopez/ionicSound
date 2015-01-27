angular.module('starter').
factory('Utils',
function(){
	
	return {
		filterTags : filterTags 
	}

	function filterTags(results){
		var cleanTags = [], temp;

		angular.forEach(results, function(item){
				
			if(item.tag_list != null){
					temp = item.tag_list.split(" ");
					angular.forEach(temp, function(tag){
						tag = tag.trim();
						if(tag.indexOf("soundcloud:") < 0 && tag != ""){
							cleanTags.push(tag.replace('"',''));	
						}
					})
			}
		})	
		cleanTags = _.uniq(cleanTags);
		return cleanTags;
	}

});