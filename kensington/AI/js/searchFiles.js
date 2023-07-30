const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("input", function() {
    console.log(searchbar.value);
	searchLocations();
});




const locations = ["AM Pitch - Client Call.docx",
  "MSP Pricing model.docx",
  "Appraisal Template 2021.docx",
  "Candidate Interview Feedback.docx",
  "Candidate Reference Check Call.docx",
  "Candidate Reg Call Crib Sheet.docx",
  "Kensingtons expense claim form.doc",
  "Senior Candidate Update Call.docx",
  
  "NEW REC approved Terms and Conditions US Retained Full - 3 months 30%.docx",
  "NEW REC approved Terms and Conditions US Retained base salary only.docx",
  "NEW REC approved Terms and Conditions US Retained base salary only - 6 months 25%.docx",
  "NEW REC approved Terms and Conditions US Exclusive full package - 8 weeks 30%.docx",
  "NEW REC approved Terms and Conditions US Exclusive - 12 weeks 30%.docx",
  "NEW REC approved Terms and Conditions US Exclusive - 8 weeks 25% .docx",
  "NEW REC approved Terms and Conditions US Contingency full package.docx",
  "NEW REC approved Terms and Conditions US Contingency full package - 12 weeks 25%.docx",
  "NEW REC approved Terms and Conditions US Contingency full package - 8 weeks 30%.docx",
  "NEW REC approved Terms and Conditions US Contingency Base Salary only.docx",
  "NEW REC approved Terms and Conditions US Contingency Base Salary only - 12 weeks 30%.docx",
  "NEW REC approved Terms and Conditions US Contingency Base Salary only - 8 weeks 25%.docx",
  "NEW REC approved Terms and Conditions Euro Retained - 12 weeks 25%.docx",
  "NEW REC approved Terms and Conditions Euro Retained - 8 weeks 30%.docx",
  "NEW REC approved Terms and Conditions Euro Exclusive - 12 weeks 25%.docx",
  "NEW REC approved Terms and Conditions Euro Contingency - Full package 12 weeks.docx",
  "NEW REC approved Terms and Conditions Euro Contingency - base only.docx",
  "NEW REC approved Terms and Conditions Euro Contingency - 12 weeks.docx",
  "NEW REC approved Terms and Conditions Euro Contingency - 8 weeks.docx",

  "Terms Process 2023 - Kensington Additive.pdf",
  
  "Requirements Capture - Additive.doc",
  "Features and Benefits with descriptions - Kensington Additive.pdf"

  
  ];

function searchLocations() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let matchList = document.getElementById("dropdown");
  matchList.innerHTML = "";
  
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].toLowerCase().indexOf(input) !== -1) {
      let option = document.createElement("div");
      option.innerHTML = locations[i] + "<br><br>";
      option.style.cursor = "pointer"; // set the cursor to a hand
      option.addEventListener("click", function() {
        openFile(locations[i]);
      });
      matchList.appendChild(option);
    }
  }
}








function openFile(loc) {
  document.getElementById("searchbar").value = "";
  let matchList = document.getElementById("dropdown");
  matchList.innerHTML = ""; 

  let fileLocation = "./search/files/" + loc;
  let link = document.createElement("a");
  link.href = fileLocation;

  // Check if the file extension is PDF
  if (loc.endsWith(".pdf")) {
    // If it's a PDF, open it in the browser
    link.target = "_blank"; // open in a new tab
  } else {
    // If it's not a PDF, download it
    link.download = loc; // specify the filename
  }

  // optional: hide the link element
  link.style.display = "none";
  document.body.appendChild(link);

  link.click(); // trigger the opening of the PDF in the browser, or the download of other file types
}

/*
function openFile(loc) {
  document.getElementById("searchbar").value = "";
  let matchList = document.getElementById("dropdown");
  matchList.innerHTML = ""; 


  let fileLocation = "./search/files/" + loc;
  window.open(fileLocation);
}
*/
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("searchButton");
  const searchResultsContent = document.getElementById("searchResultsContent");
  const searchInput = document.getElementById("searchFiles_input");

  function searchLocations_main() {
    let input = document.getElementById("searchFiles_input").value.toLowerCase();
    searchResultsContent.innerHTML = "";

    for (let i = 0; i < locations.length; i++) {
      if (locations[i].toLowerCase().includes(input)) {
        let option = document.createElement("div");
        option.classList.add("result-item");
        option.textContent = locations[i];
        option.style.cursor = "pointer"; // set the cursor to a hand
        option.addEventListener("click", function() {
          openFile(locations[i]);
        });
        searchResultsContent.appendChild(option); // append the option directly to searchResultsContent
      }
    }

    openSearchResultsPopup();
}


  

  function openSearchResultsPopup() {
    let searchResultsPopup = document.getElementById("searchResultsPopup");
    searchResultsPopup.style.display = "block";
  }

  function closeSearchResultsPopup() {
    let searchResultsPopup = document.getElementById("searchResultsPopup");
    searchResultsPopup.style.display = "none";
  }

  searchButton.addEventListener("click", function() {
    searchLocations_main();
  });

  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent page refresh
      searchLocations_main();
    }
  });

  window.addEventListener("click", function(event) {
    let searchResultsPopup = document.getElementById("searchResultsPopup");
    if (event.target === searchResultsPopup) {
      closeSearchResultsPopup();
    }
  });
});
