  var modelSelected = false;



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
    
    // Convert the dataURL to a Blob
var blob = dataURItoBlob(img.src);

// Create a new clipboard item with the image data
var item = new ClipboardItem({ "image/png": blob });

// Write the item to the clipboard
navigator.clipboard.write([item]).then(() => {
    console.log("Image copied to clipboard");
}, () => {
    console.log("Failed to copy image to clipboard");
});

    


} else {
    console.log("Clipboard API not supported");
}


});

}



function createCustomModel()
{

	var percentageValue = document.getElementById("customPercentage").value;
  var input = document.getElementById("customPercentage");  
  var percentChar = "";
  
   
  
	var customHeaderVal = document.getElementById("customModeltxt").innerHTML + " " +  percentageValue;
	document.getElementById("customModeltxt").innerHTML = customHeaderVal;
console.log(customHeaderVal);
  
  
  document.getElementById("customPercentage").hidden = true;  
  document.getElementById("createModelBtn").hidden = true;
  
  
  if(!modelSelected)
  {  
  
    document.addEventListener("DOMContentLoaded", function() {
        var column1Items = document.querySelectorAll("#column1 .item");
        column1Items.forEach(function(item) {
          if (item.classList.contains("disabled")) {
            item.style.color = "lightgreen";
            item.style.fontWeight = "bold";
          } else {
            item.classList.add("disabled");
            item.classList.remove("enabled");
          }
        });
      
        var column2Items = document.querySelectorAll("#column2 .item");
        column2Items.forEach(function(item) {
          if (item.classList.contains("disabled")) {
            item.style.color = "lightgreen";
            item.style.fontWeight = "bold";
          } else {
            item.classList.add("disabled");
            item.classList.remove("enabled");
          }
        });
      
        var column3Items = document.querySelectorAll("#column3 .item");
        column3Items.forEach(function(item) {
          if (item.classList.contains("disabled")) {
            item.style.color = "lightgreen";
            item.style.fontWeight = "bold";
          } else {
            item.classList.add("disabled");
            item.classList.remove("enabled");
          }
        });
      
        var column4Items = document.querySelectorAll("#column4 .item");
        column4Items.forEach(function(item) {
          if (item.classList.contains("disabled")) {
            item.style.color = "lightgreen";
            item.style.fontWeight = "bold";
          } else {
            item.classList.add("disabled");
            item.classList.remove("enabled");
          }
        });
      });
      
    modelSelected = true;

    
    setTimeout(copyImageToClipboard, 500);




  // end of modelSelected = true
  }
  else
{
  //modelSelected = false;  // set to false


}


}


window.onload = function() {


// add listener to FREE REPLACEMENT
var items = document.querySelectorAll(".freeReplacement");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(e) {
        var data = e.target.innerHTML;
        if (!e.target.classList.contains("disabled")) {
           
           if(e.target.style.color === "lightgreen")
		   {
		    e.target.style.color = "#d7e7f7";
		   }
		   else
		   {
		   e.target.style.color = "lightgreen";
		   }
           
        }
    });
}
  

  document.getElementById("createModelBtn").addEventListener("click", createCustomModel);


  document.getElementById("imageLogo").src = localStorage.getItem("imageURL_clientLogo");

        var column5 = document.getElementById("column5");
var items = document.querySelectorAll(".item");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(e) {
        var data = e.target.innerHTML;
        if (!e.target.classList.contains("disabled")) {
            e.target.classList.add("disabled");
            e.target.setAttribute("data-original", data);
            column5.innerHTML += "<div class='item'>" + data + "</div>";
        }
    });
}

column5.addEventListener("click", function(e) {
    

    var data = e.target.innerHTML;
    if (e.target.classList.contains("item")) {
        var originalItem = document.querySelector("[data-original='" + data + "']");
        originalItem.classList.remove("disabled");
        e.target.remove();
    }

});




// CLICK ENTIRE COLUMN

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("columnContingent").addEventListener("click", function(){
        document.querySelectorAll("#column1 .item").forEach(function(item){
            item.click();
        });
    });
    document.getElementById("columnExclusive").addEventListener("click", function(){
        document.querySelectorAll("#column2 .item").forEach(function(item){
            item.click();
        });
    });
    document.getElementById("columnRetained").addEventListener("click", function(){
        document.querySelectorAll("#column3 .item").forEach(function(item){
            item.click();
        });
    });
    document.getElementById("columnMSP").addEventListener("click", function(){
        document.querySelectorAll("#column4 .item").forEach(function(item){
            item.click();
        });
    });
});



document.getElementById("column5").addEventListener("click", function(e) {
    var data = e.target.innerHTML;
    if (e.target.classList.contains("item")) {
        var originalItem = document.querySelector("#column1 [data-original='" + data + "']");
        if(originalItem != null)
        {
          originalItem.classList.remove("disabled");
        }
        e.target.remove();
    }
});

	
	
	document.getElementById("imageLogo").addEventListener("click", getURL);

function getURL() {
  var newURL = prompt("Please enter a new image URL:");
  if(newURL != "")
  {

    document.getElementById("imageLogo").src = newURL;
    localStorage.setItem("imageURL_clientLogo", newURL);
  }
}


// ADD RIGHT CLICK LISTENER
items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('contextmenu', event => {
        event.preventDefault();
        if(event.target.textContent.trim() === "Resume + Video Intro"){
            // Perform custom action here
			const url = "	https://app.hint.video/2MnBqV";
			const windowName = "Popup Window";
const windowSpecs = "height=800, width=1300, left=100, top=100, toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no";

let popup = window.open(url, windowName, windowSpecs);
popup.focus();
        }
    });
});



// END OF ONLOAD
}
