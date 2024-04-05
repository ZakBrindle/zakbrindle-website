 // Add an event listener to all dropdown items on the page
 const dropdownItems = document.querySelectorAll(".dropdown-item");

 dropdownItems.forEach(item => {
   item.addEventListener("click", function() {
     // Get the text of the selected item
     const selectedItemText = item.textContent;
     // Set the button's text of the parent dropdown to the selected item's text
     const parentDropdown = item.closest(".dropdown");
     const button = parentDropdown.querySelector(".dropdown-toggle");
     button.textContent = selectedItemText;
   });
 });


 document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btn_terms_EU").addEventListener("click", function() {
        downloadFile("Euro");
    });

    document.getElementById("btn_terms_US").addEventListener("click", function() {
        downloadFile("US");
    });
 
 });


 function downloadFile(continent) {
    // Get the values of the dropdowns
    var modelValue = "";
    var costValue = "";
    var freeReplacementValue = "";

    if(continent === "Euro")
    {
      // EURO
      modelValue = document.getElementById("eu-terms-model-btn").textContent.trim();
      costValue = document.getElementById("eu-terms-cost-btn").textContent.trim();
      freeReplacementValue = document.getElementById("eu-terms-freeReplacement-btn").textContent.trim();
    }
    else
    {
      // US
      modelValue = document.getElementById("us-terms-model-btn").textContent.trim();
      costValue = document.getElementById("us-terms-cost-btn").textContent.trim();
      freeReplacementValue = document.getElementById("us-terms-freeReplacement-btn").textContent.trim();
    }
   
   

  
    // Define the file name based on the values
    const fileName = `Terms and Conditions ${continent} ${modelValue} REC approved - ${freeReplacementValue} ${costValue}.docx`;
  
    // Specify the file location
    const fileLocation = `../../search/files/terms/${fileName}`;
    console.log(fileLocation);
  
    // Create a hidden link element
    const link = document.createElement("a");
    link.href = fileLocation;
  
    // Check the file extension and handle accordingly
    if (fileName.endsWith(".pdf")) {
      link.target = "_blank"; // Open PDFs in a new tab
    } else {
      link.download = fileName; // Set the filename for download
    }
  
    link.style.display = "none"; // Hide the link element
    document.body.appendChild(link);
    link.click(); // Trigger the download or opening of the file
  }