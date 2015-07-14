// Utility Method for adding a DOM element after something else.
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// ----------------------------------------------------------------------------

var finishLinks = document.getElementsByClassName("done_link");

for (var i=0; i < finishLinks.length; i++) {  
  
  // //////////////////////////////////////////////////////////////////////////
  // Code that's meant to be run whenever a 'done_link' is clicked:
  var handleDoneClick = function(event){
    // This link's HREF.
    var href = this.getAttribute("href");
  
    // New XHR.
    var request = new XMLHttpRequest();
    request.open("get", href);
    
    // Do this *right before* sending the XHR:
    // Add 'loading' graphic.
    request.addEventListener("loadstart", function(){
      loadingGif = document.createElement("img");
      loadingGif.setAttribute("src", "/ajax-loader.gif");
      loadingGif.setAttribute("id", "loader");
      
      insertAfter(loadingGif, event.target);
    });
    
    // Do this after receiving the server's response.
    // Remove loading graphic. Remove link. Cross out task.
    request.addEventListener("load", function(){
      document.getElementById("loader").remove();
      event.target.remove();
      
      // Crosses off task:
      var task_id = event.target.getAttribute("data-task-id");
      var dom_task_id = "task" + task_id;
      document.getElementById(dom_task_id).classList.add("finished");
    });
    
    // Send the request!
    request.send();
    
    // Without this, the above would work - but we'd continue onto the actual
    // response's full page afterwards.
    event.preventDefault();
  };
  // //////////////////////////////////////////////////////////////////////////
  
  // Instruct each 'done_link' to run the above code when it's clicked.
  finishLinks[i].addEventListener("click", handleDoneClick);
}