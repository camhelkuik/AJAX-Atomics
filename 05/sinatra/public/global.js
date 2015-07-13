var finishLinks = document.getElementsByClassName("done_link");

var done = function(event){
  var req = new XMLHttpRequest();

  var thisLink = this.getAttribute("href");
  
  req.open("get", thisLink);
  
  req.send();
}

for (var i=0; i < finishLinks.length; i++) {
  // finishLinks[i] represents each of the items in `finishLinks`.
  
}

//  ---------------------------------------------------------------------------

// var myLink = document.getElementById("clicker");
//
// var handleTheClick = function(event){
//   var thisLink = this;
//   // ?????????
//   var req = new XMLHttpRequest();
//
//   req.open("get", thisLink.getAttribute("href"));
//
//   req.addEventListener("load", function(){
//     thisLink.innerText = this.response;
//   });
//
//   req.send();
//   // Prevent the link from refreshing the DOM.
//   event.preventDefault();
// }
//
// // When the link is clicked, run the above code.
// myLink.addEventListener("click", handleTheClick);