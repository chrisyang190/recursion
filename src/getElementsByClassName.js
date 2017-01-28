// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

 var body = document.body;
 var res = [];

 function walkDOM (node, criteria) {
 	//base
 	criteria(node);
 	node = node.firstChild;
 	//recursion
 	while(node){
 		walkDOM(node, criteria);
 		node = node.nextSibling;
 	}

 }
 //if element contains class, push the element;
 function classCriteria(node){
 	if (node.classList && node.classList.contains(className)){
 		res.push(node);
 	}
 }

walkDOM(body,classCriteria);
return res;


};
