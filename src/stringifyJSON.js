// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

//primitive: boolean, number, string
  if (typeof obj == 'boolean' || typeof obj == 'number' || obj == null) {
  	return ''+ obj +'';
  } else if (typeof obj == 'string') {
  	return "\"" + obj + "\"";
  } 

//functions and undefined
  	else if (typeof obj == 'function' || obj == undefined){
  		return "";
  	}

//array
	else if (Array.isArray(obj)){
		var arr = [];
		obj.forEach(function(s){
			arr.push(stringifyJSON(s));
		});
		return "["+arr+"]";
	}

//object
	else if (typeof obj == 'object'){
		var str = "";
		var keyArray = Object.keys(obj);
		for(key in obj){
			if (typeof obj[key] == 'function' || typeof obj[key] == 'undefined'){
				//str = str;
			} else if (keyArray.length >1 && key !== keyArray[keyArray.length-1]){
				str = str+stringifyJSON(key) + ":"+ stringifyJSON(obj[key])+",";
			} else {
				str = str+stringifyJSON(key) + ":"+ stringifyJSON(obj[key]);
			}
		}
		return "{"+str+"}";
	}
 
};
