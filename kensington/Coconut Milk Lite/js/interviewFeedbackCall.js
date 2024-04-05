var candidateCall = false;
var clientCall = false;




document.addEventListener("DOMContentLoaded", function() {
    // Function to handle visibility toggling
    function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    function toggleVisibilityON(elementId) {
        var element = document.getElementById(elementId);
        element.style.display = "block";
        
    }

    function toggleVisibilityOFF(elementId) {
        var element = document.getElementById(elementId);
        element.style.display = "none";
        
    }

    function pickCall()
    {
        if(candidateCall)
        {
            toggleVisibilityOFF("client-questions");
            toggleVisibilityON("candidate-questions");
        } 
        
        if (clientCall)
        {
            toggleVisibilityON("client-questions");
            toggleVisibilityOFF("candidate-questions");
        }
    }



    // LISTENER FOR DOUBLE CLICK TO HIDE
    var labels = document.querySelectorAll("label");

    // Add double click event listener to each label
    labels.forEach(function(label) {
      label.addEventListener("dblclick", function() {
        // Hide the parent div when label is double clicked
        this.parentNode.style.display = "none";
      });
    });



    // Listener for both buttons
    document.getElementById("candidate-call-btn").addEventListener("click", function() {
        toggleVisibility("was-it-an-onsite-interview");
        toggleVisibility("who-is-the-call-with");
        candidateCall = true;
        clientCall = false;
    });

    document.getElementById("client-call-btn").addEventListener("click", function() {        
        toggleVisibility("who-is-the-call-with"); // turn this off
        toggleVisibility("contact-name-input"); // show contact name Q        
        candidateCall = false;
        clientCall = true;
        toggleVisibility("main-form");
        pickCall(); 

    });



    document.getElementById("onsite-yes-btn").addEventListener("click", function() {
        toggleVisibility("was-it-an-onsite-interview");
        toggleVisibility("do-they-need-to-relocate");
        toggleVisibilityON("onsite-interview-question");        
    });

    document.getElementById("onsite-no-btn").addEventListener("click", function() {
        toggleVisibility("was-it-an-onsite-interview");
        toggleVisibility("do-they-need-to-relocate");
        toggleVisibilityOFF("onsite-interview-question");        
    });

    document.getElementById("relo-yes-btn").addEventListener("click", function() {
        toggleVisibility("main-form");
        toggleVisibility("do-they-need-to-relocate");
        toggleVisibilityON("relocation-question");     
        pickCall();   

    });

    document.getElementById("relo-no-btn").addEventListener("click", function() {
        toggleVisibility("main-form");
        toggleVisibility("do-they-need-to-relocate");
        toggleVisibilityOFF("relocation-question");   
        pickCall(); 
    });


    // BACK BUTTON
    document.getElementById("back-button").addEventListener("click", function() {
        
        toggleVisibilityON("generate-notes-button");  
        document.getElementById("generate-notes-button").innerHTML = "Regenerate Notes";
        toggleVisibilityOFF("back-button");  
      

        if(candidateCall)
        {
            toggleVisibilityON("candidate-questions");  
        }
        else
        {
            toggleVisibilityON("client-questions");  
        
        }
       
    });



    // GENERATE BUTTON
    document.getElementById("generate-notes-button").addEventListener("click", function() {
        // Get the value of the input field
        var fullMessage = "";
        if(clientCall)
        {
            fullMessage = "<u>INTERVIEW FEEDBACK CALL WITH CLIENT</u><br>";

        }
        else
        {
            fullMessage = "<u>INTERVIEW FEEDBACK CALL WITH CANDIDATE</u><br>";
        }

        var elem = document.getElementById("candidate_name").value;
        if(elem != "")
        {
            fullMessage += "<b>Candidate's Name:</b> " + elem + "<br>";
        }
    
        elem = document.getElementById("contact_name").value;
        if(elem != "")
        {
            fullMessage += "<b>Contact's Name & Company:</b> " + elem + "<br>";
        }

        elem = document.getElementById("interview_stage").value;
        if(elem != "")
        {
            fullMessage += "<b>Interview Stage:</b> " + elem + "<br><br>";
        }


        for (var i = 1; i <= 40; i++) {
            console.log("Looking at Question " + i);
            elem = document.getElementById("q" + i + "-input").value;
            var label = document.getElementById("l" + i);
            if (elem != "") {
                fullMessage += "<b>" + label.innerHTML + ":</b><br> <div style='color: #6089e4;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + elem + "</div><br>";

                console.log("Full Message: " + fullMessage);
            }
        }


        toggleVisibilityOFF("candidate-questions");
        toggleVisibilityOFF("client-questions");
        toggleVisibilityOFF("generate-notes-button");
        toggleVisibilityON("back-button");



    
    
         document.getElementById("result-div").innerHTML = fullMessage;
    });

  
});



