"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // remove "open" class from all div siblings 
    var divSiblings = h2.parentNode.getElementsByTagName("div");
    for (var i = 0; i < divSiblings.length; i++) {
        if (divSiblings[i] !== div) {
            divSiblings[i].removeAttribute("class");
        }
    }
    // remove "minus" class from all h2 elements 
    var h2Siblings = h2.parentNode.getElementsByTagName("h2");
    for (var i = 0; i < h2Siblings.length; i++) {
        if (h2Siblings[i] !== h2) {
            h2Siblings[i].removeAttribute("class");
        }
    }
    // toggle plus and minus image in h2 element by adding or removing a class
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");	
    } else { 
        h2.setAttribute("class", "minus"); 
    }
    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    } 
};
//onload function
window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
};
