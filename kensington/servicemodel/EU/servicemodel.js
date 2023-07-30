var modelSelected = false; // global check, has the model been selected 

// dataURItoBlob is used to convert an image into a copy-able image
  function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var _ia = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
        _ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([arrayBuffer], {type: mimeString});
    return blob;
}

// copyImageToClipboard uses html2canvas to take the body of the html and copy it to clipboard as an image
function copyImageToClipboard()
{
  var currentWindow = window;
    // Create a new clipboard item with the image data
    // Use html2canvas library to take a screenshot
    html2canvas(document.body).then(canvas => {
    // Create an image element with the screenshot
    var img = document.createElement("img");
    img.src = canvas.toDataURL();

   // Append the image to the document
   document.body.appendChild(img);
    if ('clipboard' in navigator) {
        // Clipboard API is supported
    
        // Convert the dataURL to a Blob - convert our image to blobs that can be copied
        var blob = dataURItoBlob(img.src);  

        // Create a new clipboard item with the image data
        var item = new ClipboardItem({ "image/png": blob });

        // Write the item to the clipboard
        navigator.clipboard.write([item]).then(() => {
        console.log("Image copied to clipboard");
        }, () => {
             // report copy error to clipboard
            console.log("Failed to copy image to clipboard");  
        });

    


    } else {
        // clipboard not in navigator, clipboard copy not supported. 
        console.log("Clipboard API not supported"); 
    }
    });
}

function createCustomModel()
{   // grab the value entered by the user
    var percentageValue = document.getElementById("customPercentage").value;    
     
    // add the percentageValue to the label
	var customHeaderVal = document.getElementById("customModeltxt").innerHTML + " " +  percentageValue; 
    // set the label to display new data
	document.getElementById("customModeltxt").innerHTML = customHeaderVal;  
     // hide the input field
    document.getElementById("customPercentage").hidden = true; 
    // hide the createModel&copy button
    document.getElementById("createModelBtn").hidden = true;    
  
    if(!modelSelected)
    {  
        // The model has not been selected. 
        // In each column, make all the disabled items Green. They have been selected. Make all the other items disabled as we did not pick them.
          $(document).ready(function(){
           $("#column1 .item").each(function(){
             // if an item is disabled, we picked it. 
               if($(this).hasClass("disabled")){                                   
                // make it green
                   $(this).css("color", "lightgreen").css("font-weight", "bold");   
               } else {
                     // else, make it disabled, remove enabled.
                   $(this).addClass("disabled").removeClass("enabled");               
               }
           });
        });

        $(document).ready(function(){
           $("#column2 .item").each(function(){
             // if an item is disabled, we picked it.   
               if($(this).hasClass("disabled")){                                    
                     // make it green            
                   $(this).css("color", "lightgreen").css("font-weight", "bold");   
               } else {
                    // else, make it disabled, remove enabled.
                   $(this).addClass("disabled").removeClass("enabled");              
               }
           });
        });
        
        //repeat for column 3
        $(document).ready(function(){
           $("#column3 .item").each(function(){
               if($(this).hasClass("disabled")){
                   $(this).css("color", "lightgreen").css("font-weight", "bold");
               } else {
                   $(this).addClass("disabled").removeClass("enabled");
               }
           });
        });
        
        //repeat for column 4
        $(document).ready(function(){
           $("#column4 .item").each(function(){
               if($(this).hasClass("disabled")){
                   $(this).css("color", "lightgreen").css("font-weight", "bold");
               } else {
                   $(this).addClass("disabled").removeClass("enabled");
               }
           });
        });
        
        modelSelected = true;

    
    setTimeout(copyImageToClipboard, 500);  //wait to ensure html changes have been made and then call the copyImageToClipboard function

  
  }// end of modelSelected = true
}


window.onload = function() {


// add listener to FREE REPLACEMENT
var items = document.querySelectorAll(".freeReplacement");

for (var i = 0; i < items.length; i++) {
    // for each free replacement label, add click listener.
    items[i].addEventListener("click", function(e) {        
        if (!e.target.classList.contains("disabled")) {
           
           if(e.target.style.color === "lightgreen")
		   {
            //if green revert to default
		    e.target.style.color = "#d7e7f7";
		   }
		   else
		   {
            // if disabled, make it green
		   e.target.style.color = "lightgreen";
		   }           
        }
    });
}
  
// add a listener to createModelBtn 
  document.getElementById("createModelBtn").addEventListener("click", createCustomModel);



// we want to let the user change the client logo (right image) - if you refresh the page, it gets the last image you selected.
// the image url is stored in localstorage. Get this item and set the .src of client image
  document.getElementById("imageLogo").src = localStorage.getItem("imageURL_clientLogo");
  
// add a listener. If the user click the client logo, they will be given a prompt. Run getURL function
document.getElementById("imageLogo").addEventListener("click", getURL);

// take a url, set client image source to this url, and save selected url to localstorage.
function getURL() {
  var newURL = prompt("Please enter a new image URL:");//prompt
  if(newURL != "")  //make sure its not saved as blank
  {
    //not empty
    document.getElementById("imageLogo").src = newURL;  // set source
    localStorage.setItem("imageURL_clientLogo", newURL); // save url
  }
}


  // get column 5, add listener to all items. If we click the item, its removes the item
var column5 = document.getElementById("column5");
var items = document.querySelectorAll(".item");

// loop through all items on the page (there should be none in column 5 on page load so this is column 1-4)
// add listener to all items so if we click, it disabled the original and makes a duplicate in column 5
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(e) {
        var data = e.target.innerHTML;
        // clicked item, add it to column 5
        if (!e.target.classList.contains("disabled")) {
            e.target.classList.add("disabled");
            e.target.setAttribute("data-original", data);
            column5.innerHTML += "<div class='item'>" + data + "</div>";
           
        }
    });
}
// add a listener so if we clicked item in column 5, it is removed, and the original item is clickable again.
column5.addEventListener("click", function(e) {
    if(!modelSelected)
        {
    var data = e.target.innerHTML;
    if (e.target.classList.contains("item")) {
        var originalItem = document.querySelector("[data-original='" + data + "']");
        originalItem.classList.remove("disabled");
        e.target.remove();
    }
}
});


// CLICK ENTIRE COLUMN
// if you click on column1, add all items in column1 to to 5 by performing a click
$(document).ready(function(){
    $("#columnContingent").click(function(){
      $("#column1").find(".item").click();
    });
});

// if you click on column2, add all items in column1 to to 5 by performing a click
$(document).ready(function(){
    $("#columnExclusive").click(function(){
        $("#column2").find(".item").click();
    });
});

// if you click on column3, add all items in column1 to to 5 by performing a click
$(document).ready(function(){
  $("#columnRetained").click(function(){
    $("#column3").find(".item").click();
  });
});

// if you click on column1, add all items in column4 to to 5 by performing a click
$(document).ready(function(){
    $("#columnMSP").click(function(){
        $("#column4").find(".item").click();
    });
});

//if you click on a n item in column 5, ensure the data is reset
document.getElementById("column5").addEventListener("click", function(e) {
    if(!modelSelected)
        {
    var data = e.target.innerHTML;
    if (e.target.classList.contains("item")) {
        var originalItem = document.querySelector("#column1 [data-original='" + data + "']");
        if(originalItem != null)
        {
          originalItem.classList.remove("disabled");
        }
        
            e.target.remove();

        }
    }
});

	


// ADD RIGHT CLICK LISTENER
items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('contextmenu', event => {
        event.preventDefault();

        // for every item

        // if item text contains "Resume + Video Intro" lets open a hintro
        if(event.target.textContent.trim() === "Resume + Video Intro"){
            // Perform custom right click action here
			const url = "	https://app.hint.video/2MnBqV";
            // i want to open this URL in a popup window with a specific size
			const windowName = "Popup Window";
            // set the specs of this window
            const windowSpecs = "height=800, width=1300, left=100, top=100, toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no";
            // launch window
            let popup = window.open(url, windowName, windowSpecs);
            popup.focus();
        }
    });
});

// end of on load
}

// end of script


